type position = { x: number, y: number }
type maybeElement = {
    position?: position,
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
    id: string,
    [key: string]: any
}
class GraphDSA {
    public adjacencyLists: { [key: string]: string[] } = {}
    public positionLists: { [key: string]: position } = {}
    public result: string[][] = []
    public path: string[] = []
    public ends: string[] = []
    public traversedQueues: { [key: number]: { node: string, prevNode: string }[] } = {}
    public untraversedQueues: { [key: number]: string[] } = {}
    public adjacentNodes: string[] = []
    public nextNode: string | undefined = undefined
    public start = ''
    public count = 0

    constructor (cells: maybeElement[]) {
        this.#buildAdjacencyLists(cells)
    }
    #buildAdjacencyLists (cells: maybeElement[]): void {
        for (const cell of cells) {
            // discard links when building AdjacentLists
            if (!cell.position) continue

            // use cell.id as unique uuid key
            this.adjacencyLists[cell.id] = []
            if (cell.top) {
                const connectedCell = cells.find(tempCell => tempCell.id === cell.top)
                if (!connectedCell) throw new Error(`${cell.id} top`)
                else if (!connectedCell?.position) throw new Error(`${cell.id} top ${connectedCell.id}`)
                else this.adjacencyLists[cell.id].push(cell.top)
            }
            if (cell.bottom) {
                const connectedCell = cells.find(tempCell => tempCell.id === cell.bottom)
                if (!connectedCell) throw new Error(`${cell.id} bottom`)
                else if (!connectedCell?.position) throw new Error(`${cell.id} bottom ${connectedCell.id}`)
                else this.adjacencyLists[cell.id].push(cell.bottom)
            }
            if (cell.left) {
                const connectedCell = cells.find(tempCell => tempCell.id === cell.left)
                if (!connectedCell) throw new Error(`${cell.id} left`)
                else if (!connectedCell?.position) throw new Error(`${cell.id} left ${connectedCell.id}`)
                else this.adjacencyLists[cell.id].push(cell.left)
            }
            if (cell.right) {
                const connectedCell = cells.find(tempCell => tempCell.id === cell.right)
                if (!connectedCell) throw new Error(`${cell.id} right`)
                if (!connectedCell?.position) throw new Error(`${cell.id} right ${connectedCell.id}`)
                else this.adjacencyLists[cell.id].push(cell.right)
            }
            this.positionLists[cell.id] = { ...cell.position }
        }
        // this.adjacencyLists = new Map([
        //     ['A', ['B', 'G']],
        //     ['B', ['A', 'C']],
        //     ['C', ['B', 'D', 'H']],
        //     ['D', ['C', 'E']],
        //     ['E', ['D', 'F', 'J']],
        //     ['F', ['E', 'K']],
        //     ['G', ['A', 'H']],
        //     ['H', ['C', 'G', 'I', 'L']],
        //     ['I', ['H', 'J']],
        //     ['J', ['E', 'I', 'N']],
        //     ['K', ['F', 'O']],
        //     ['L', ['H', 'M']],
        //     ['M', ['L', 'N']],
        //     ['N', ['J', 'M', 'O']],
        //     ['O', ['K', 'N']]
        // ])
    }
    #init (): void {
        this.result = []
        this.path = []
        this.ends = []
        this.adjacentNodes = []
        this.nextNode = undefined
        this.traversedQueues = { 0: [] }
        this.untraversedQueues = { 0: [this.start] }
        for (let i = 1; i <= this.count; i++) {
            this.traversedQueues[i] = []
            this.untraversedQueues[i] = []
        }
    }
    // eslint-disable-next-line
    getAllPaths (start: string, count: number) {
        if (this.count < 0) return this.#getResult()
        this.start = start
        this.count = count
        this.#init()
        this.#traversal()
        return this.#getResult()
    }
    // eslint-disable-next-line
    #getResult () {
        return {
            result: this.result,
            traversedQueues: this.traversedQueues,
            untraversedQueues: this.untraversedQueues,
            ends: this.ends
        }
    }
    #goBackUntilUntraversedQueueIsNotEmpty (): void {
        while (this.path.length !== 0 && this.untraversedQueues[this.path.length].length === 0) {
            this.path.pop()
        }
    }
    #addResultAndGoBack (): void {
        this.result.push([...this.path])
        this.ends.push(this.path.pop() as string)
        this.#goBackUntilUntraversedQueueIsNotEmpty()
    }
    #filter (filters: { duplicateEnd: boolean, traversed?: true, goBackward?: true }): void {
        if (!this.adjacentNodes || this.adjacentNodes.length === 0) throw new Error(`adjacencyLists有錯,${this.nextNode || ''}`)

        for (const adjacentNode of this.adjacentNodes) {
            const IsDuplicateEnd = filters.duplicateEnd ? this.ends.includes(adjacentNode) : false
            const IsGoBackward = adjacentNode == this.path[this.path.length - 2]
            const IsTraversed = this.#IsTraversed(adjacentNode)
            if (!IsGoBackward && !IsTraversed && !IsDuplicateEnd) {
                this.untraversedQueues[this.path.length].push(adjacentNode)
            }
        }
    }
    #IsTraversed (adjacentNode: string): boolean {
        for (const { node, prevNode } of this.traversedQueues[this.path.length]) {
            if (adjacentNode === node && this.path[this.path.length - 1] === prevNode) return true
        }
        return false
    }
    #addNodeToTraversedQueues (): void {
        // 尾巴不需要紀錄，因為ends會紀錄
        // 開頭不需要紀錄，因為一定不會重複
        if (this.path.length === this.count + 1) return
        if (this.path.length === 1) return

        const nodeToBeAdded = this.path[this.path.length - 1]
        const prevNodeToBeAdded = this.path[this.path.length - 2]
        for (const { node, prevNode } of this.traversedQueues[this.path.length - 1]) {
            if (node === nodeToBeAdded && prevNode === prevNodeToBeAdded) return
        }
        this.traversedQueues[this.path.length - 1].push({
            node: nodeToBeAdded,
            prevNode: prevNodeToBeAdded
        })
    }
    #traversal (): void {
        console.count(this.start)
        this.nextNode = this.untraversedQueues[this.path.length].shift()
        
        if (!this.nextNode) {
            if (this.path.length === 0) return
            this.#goBackUntilUntraversedQueueIsNotEmpty()
            this.#traversal()
        } else if (this.nextNode) {
            this.adjacentNodes = this.adjacencyLists[this.nextNode]
            this.path.push(this.nextNode)
            this.#addNodeToTraversedQueues()
            // console.log(this.path)
            const IsReachEnd = this.path.length === this.count + 1
            const IsPenultimate = this.path.length === this.count
            if (IsReachEnd) this.#addResultAndGoBack()
            else if (IsPenultimate) this.#filter({ duplicateEnd: true })
            else this.#filter({ duplicateEnd: false })
            // 這邊很奇葩，我發現console.log應該是async
            // https://www.linkedin.com/pulse/consolelog-asynchronous-vladyslav-petukhov-1c
            // console.log(JSON.parse(JSON.stringify(this.traversedQueues)))
            // console.table(this.untraversedQueues)
            this.nextNode = undefined
            this.#traversal()
        }
    }
}

export default GraphDSA