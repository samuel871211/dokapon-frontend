import type { Vertex, CellId, Position, Edge } from '../global'

class GraphDSA {
    #verticesForDSA: { [key: CellId]: Vertex } = {}
    #adjacencyLists: { [key: CellId]: CellId[] } = {}
    #result: CellId[][] = []
    #path: CellId[] = []
    #ends: CellId[] = []
    #endPositions: Position[] = []
    #traversedQueues: { [key: number]: { vertex: CellId, prevVertex: CellId }[] } = {}
    #untraversedQueues: { [key: number]: CellId[] } = {}
    #adjacentVertexs: CellId[] = []
    #nextVertex: CellId | undefined = undefined
    #startVertex: CellId = ''
    #stepCount = 0

    constructor (graph: { edges: Edge[], vertices: Vertex[] }) {
        this.#validateGraph(graph)
        this.#buildAdjacencyLists(graph.vertices)
    }
    #validateGraph (graph: { edges: Edge[], vertices: Vertex[] }) {
        const { edges, vertices } = graph

        for (const vertex of vertices) {
            if (vertex.top) {
                const connectedVertex = vertices.find(tempVertex => tempVertex.id === vertex.top)
                if (!connectedVertex) throw new Error(`${vertex.id} top`)
            }
            if (vertex.bottom) {
                const connectedVertex = vertices.find(tempVertex => tempVertex.id === vertex.bottom)
                if (!connectedVertex) throw new Error(`${vertex.id} bottom`)
            }
            if (vertex.left) {
                const connectedVertex = vertices.find(tempVertex => tempVertex.id === vertex.left)
                if (!connectedVertex) throw new Error(`${vertex.id} left`)
            }
            if (vertex.right) {
                const connectedVertex = vertices.find(tempVertex => tempVertex.id === vertex.right)
                if (!connectedVertex) throw new Error(`${vertex.id} right`)
            }
            for (const edgeId of vertex.edges) {
                const edge = edges.find(tempEdge => tempEdge.id === edgeId)
                if (!edge) throw new Error(`${vertex.id} edge ${edgeId}`)
            }
        }
    }
    #buildAdjacencyLists (vertices: Vertex[]): void {
        for (const vertex of vertices) {
            this.#adjacencyLists[vertex.id] = []
            this.#verticesForDSA[vertex.id] = vertex
            if (vertex.top) this.#adjacencyLists[vertex.id].push(vertex.top)
            if (vertex.bottom) this.#adjacencyLists[vertex.id].push(vertex.bottom)
            if (vertex.left) this.#adjacencyLists[vertex.id].push(vertex.left)
            if (vertex.right) this.#adjacencyLists[vertex.id].push(vertex.right)
        }
    }
    #init (): void {
        this.#result = []
        this.#path = []
        this.#ends = []
        this.#endPositions = []
        this.#adjacentVertexs = []
        this.#nextVertex = undefined
        this.#traversedQueues = { 0: [] }
        this.#untraversedQueues = { 0: [this.#startVertex] }
        for (let i = 1; i <= this.#stepCount; i++) {
            this.#traversedQueues[i] = []
            this.#untraversedQueues[i] = []
        }
    }
    // eslint-disable-next-line
    getAllPaths (startVertex: CellId, stepCount: number) {
        if (this.#stepCount < 0) return this.#getResult()
        this.#startVertex = startVertex
        this.#stepCount = stepCount
        this.#init()
        this.#traversal()
        return this.#getResult()
    }
    // eslint-disable-next-line
    #getResult () {
        return {
            result: this.#result,
            traversedQueues: this.#traversedQueues,
            untraversedQueues: this.#untraversedQueues,
            ends: this.#ends,
            endPositions: this.#endPositions
        }
    }
    #addResultAndGoBack (): void {
        const end = this.#path[this.#path.length - 1]
        this.#result.push([...this.#path])
        this.#ends.push(end)
        this.#endPositions.push(this.#verticesForDSA[end].position)
        this.#path.pop()
    }
    /**
     * 1. IsGoBackward：下一步跟上一步不得相同
     * 
     * 2. IsTraversed：上一步跟這一步不得相同
     * 
     * 3. IsDuplicateEnd：結尾不得相同(要到倒數第二步才知道)
     */
    #addVertexToUntraversedQueues (filters: { duplicateEnd: boolean }): void {
        if (!this.#adjacentVertexs || this.#adjacentVertexs.length === 0) throw new Error(`adjacencyLists有錯,${this.#nextVertex || ''}`)

        for (const adjacentVertex of this.#adjacentVertexs) {
            const IsDuplicateEnd = filters.duplicateEnd ? this.#ends.includes(adjacentVertex) : false
            const IsGoBackward = adjacentVertex == this.#path[this.#path.length - 2]
            const IsTraversed = this.#IsTraversed(adjacentVertex)
            if (!IsDuplicateEnd && !IsGoBackward && !IsTraversed) {
                this.#untraversedQueues[this.#path.length].push(adjacentVertex)
            }
        }
    }
    #IsTraversed (adjacentVertex: CellId): boolean {
        for (const { vertex, prevVertex } of this.#traversedQueues[this.#path.length]) {
            if (adjacentVertex === vertex && this.#path[this.#path.length - 1] === prevVertex) return true
        }
        return false
    }
    /**
     * 開頭不需要紀錄，因為一定不會重複
     * 
     * 尾巴不需要紀錄，因為ends會紀錄
     */
    #addVertexToTraversedQueues (): void {
        if (this.#path.length === this.#stepCount + 1) return
        if (this.#path.length === 1) return

        const vertexToBeAdded = this.#path[this.#path.length - 1]
        const prevVertexToBeAdded = this.#path[this.#path.length - 2]
        for (const { vertex, prevVertex } of this.#traversedQueues[this.#path.length - 1]) {
            if (vertex === vertexToBeAdded && prevVertex === prevVertexToBeAdded) return console.error('why')
        }
        this.#traversedQueues[this.#path.length - 1].push({
            vertex: vertexToBeAdded,
            prevVertex: prevVertexToBeAdded
        })
    }
    #traversal (): void {
        while (true) {
            // console.count(this.#startVertex)
            this.#nextVertex = this.#untraversedQueues[this.#path.length].shift()

            // go back until untravered queue is not empty
            while (
                !this.#nextVertex &&
                this.#path.length !== 0 &&
                this.#untraversedQueues[this.#path.length].length === 0
            ) {
                this.#path.pop()
                this.#nextVertex = this.#untraversedQueues[this.#path.length].shift()
            }
            if (!this.#nextVertex && this.#path.length === 0) break
            if (this.#nextVertex) {
                // start to traverse
                this.#adjacentVertexs = this.#adjacencyLists[this.#nextVertex]
                this.#path.push(this.#nextVertex)
                this.#addVertexToTraversedQueues()
                const IsReachEnd = this.#path.length === this.#stepCount + 1
                const IsPenultimate = this.#path.length === this.#stepCount
                if (IsReachEnd) this.#addResultAndGoBack()
                else if (IsPenultimate) this.#addVertexToUntraversedQueues({ duplicateEnd: true })
                else this.#addVertexToUntraversedQueues({ duplicateEnd: false })
                this.#nextVertex = undefined
            }
        }
    }
}

export default GraphDSA