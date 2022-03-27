type position = { x: number, y: number }
type maybeElement = {
    position?: position,
    id: string,
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
    [key: string]: any
}
// type Element =  maybeElement & {
//     position: position
// }
class GraphDSA {
    public adjacentMap: Map<string, string[]> = new Map()
    public result: string[][] = []
    public path: string[] = []
    public ends: string[] = []
    public traversedQueues: { [key: number]: { node: string, prevNode: string }[] } = {}
    public untraversedQueues: { [key: number]: string[] } = {}
    public adjacentNodes: string[] | undefined = undefined
    public nextNode: string | undefined = undefined
    public start = ''
    public count = 0

    constructor () {
        this.#buildAdjacentMap()
    }
    #buildAdjacentMap () {
        this.adjacentMap = new Map([
            ['A', ['B', 'G']],
            ['B', ['A', 'C']],
            ['C', ['B', 'D', 'H']],
            ['D', ['C', 'E']],
            ['E', ['D', 'F', 'J']],
            ['F', ['E', 'K']],
            ['G', ['A', 'H']],
            ['H', ['C', 'G', 'I', 'L']],
            ['I', ['H', 'J']],
            ['J', ['E', 'I', 'N']],
            ['K', ['F', 'O']],
            ['L', ['H', 'M']],
            ['M', ['L', 'N']],
            ['N', ['J', 'M', 'O']],
            ['O', ['K', 'N']]
        ])
    }
    #init () {
        this.result = []
        this.path = []
        this.ends = []
        this.adjacentNodes = undefined
        this.nextNode = undefined
        this.traversedQueues = { 0: [] }
        this.untraversedQueues = { 0: [this.start] }
        for (let i = 1; i <= this.count; i++) {
            this.traversedQueues[i] = []
            this.untraversedQueues[i] = []
        }
    }
    getAllPaths (start: string, count: number) {
        if (this.count < 0) this.#getResult()
        this.start = start
        this.count = count
        this.#init()
        this.#traversal()
        return this.#getResult()
    }
    #getResult () {
        return {
            result: this.result,
            traversedQueues: this.traversedQueues,
            untraversedQueues: this.untraversedQueues,
            ends: this.ends
        }
    }
    #goBackUntilUntraversedQueueIsNotEmpty () {
        while (this.path.length !== 0 && this.untraversedQueues[this.path.length].length === 0) {
            this.path.pop()
        }
    }
    #addResultAndGoBack () {
        this.result.push([...this.path])
        this.ends.push(this.path.pop() as string)
        this.#goBackUntilUntraversedQueueIsNotEmpty()
    }
    #filter (filters: { duplicateEnd: boolean, traversed?: true, goBackward?: true }) {
        if (!this.adjacentNodes || this.adjacentNodes.length === 0) throw new Error('Map有錯')

        for (const adjacentNode of this.adjacentNodes) {
            const IsDuplicateEnd = filters.duplicateEnd ? this.ends.includes(adjacentNode) : false
            const IsGoBackward = adjacentNode == this.path[this.path.length - 2]
            const IsTraversed = this.#IsTraversed(adjacentNode)
            if (!IsGoBackward && !IsTraversed && !IsDuplicateEnd) {
                this.untraversedQueues[this.path.length].push(adjacentNode)
            }
        }
    }
    #IsTraversed (adjacentNode: string) {
        for (const { node, prevNode } of this.traversedQueues[this.path.length]) {
            if (adjacentNode === node && this.path[this.path.length - 1] === prevNode) return true
        }
        return false
    }
    #addNodeToTraversedQueues () {
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
    #traversal () {
        console.count(this.start)
        this.nextNode = this.untraversedQueues[this.path.length].shift()
        
        if (!this.nextNode) {
            if (this.path.length === 0) return
            this.#goBackUntilUntraversedQueueIsNotEmpty()
            this.#traversal()
        } else if (this.nextNode) {
            this.adjacentNodes = this.adjacentMap.get(this.nextNode)
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

// const instance = new GraphDSA()
// const { result, queues } = instance.getAllPaths('A', 17)
// console.log(result)
// console.log(queues)