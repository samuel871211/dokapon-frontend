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
type Element =  maybeElement & {
    position: position
}

// class Node {
//     public top: string | undefined
//     public bottom: string | undefined
//     public left: string | undefined
//     public right: string | undefined
//     public id: string
//     public position: position
//     constructor (cell: Element) {
//         this.top = cell.top
//         this.bottom = cell.bottom
//         this.left = cell.left
//         this.right = cell.right
//         this.id = cell.id
//         this.position = cell.position
//     }
// }

// /**
//  * 在建立Graph資料結構的時候，並不會有"線段"這個實體，線段只會在UI顯示
//  * 
//  * 所以必須先把線段篩選掉。由於graph.toJSON(): any，所以ts並不知道cells
//  * 
//  * 是什麼，只能透過人工篩選判定，把需要的key value挑出來
//  * 
//  * @param cells graph.toJSON(): any
//  * @returns util functions
//  */
// function GraphDSA (cells: maybeElement[]): { getAllPossiblePaths: (curNode: position, count: number) => position[][] } {
//     // function 
//     function getAllPossiblePaths (curNode: position, count: number): position[][] {
//         return [[]]
//     }
//     return { getAllPossiblePaths }
// }

// export default GraphDSA

class GraphDSA {
    public adjacentMap: Map<string, string[]> = new Map()
    public result: string[][] = []
    public path: string[] = []
    public ends: string[] = []
    public queues: { [key: number]: string[] } = {}
    public adjacentNodes: string[] | undefined = undefined
    public nextNode: string | undefined = undefined
    public start = ''
    public count = 0

    constructor () {
        this.buildAdjacentMap()
    }
    buildAdjacentMap () {
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
        // this.adjacentMap = {
        //     A: ['B', 'G'],
        //     B: ['A', 'C'],
        //     C: ['B', 'D', 'H'],
        //     D: ['C', 'E'],
        //     E: ['D', 'F', 'J'],
        //     F: ['E', 'K'],
        //     G: ['A', 'H'],
        //     H: ['C', 'G', 'I', 'L'],
        //     I: ['H', 'J'],
        //     J: ['E', 'I', 'N'],
        //     K: ['F', 'O'],
        //     L: ['H', 'M'],
        //     M: ['L', 'N'],
        //     N: ['J', 'M', 'O'],
        //     O: ['K', 'N'] 
        // }
    }
    init () {
        this.result = []
        this.path = []
        this.ends = []
        this.adjacentNodes = undefined
        this.nextNode = undefined
        this.queues = { 0: [this.start] }
        for (let i = 1; i <= this.count; i++) this.queues[i] = []
    }
    getAllPaths (start: string, count: number) {
        this.start = start
        this.count = count
        this.init()
        this.traversal()
        return {
            result: this.result,
            queues: this.queues
        }
    }
    traversal () {
        if (this.count < 0) return

        while (this.queues[this.path.length].length > 0 && !this.nextNode) {
            this.nextNode = this.queues[this.path.length].shift()
        }
        if (!this.nextNode) {
            // queues 被清空了(所有路都被走過了)
            if (this.path.length === 0) return
            // 目前這層已經沒有路，往上一層走
            this.path.pop()
            this.traversal()
        } else if (this.nextNode) {
            this.adjacentNodes = this.adjacentMap.get(this.nextNode)
            if (this.adjacentNodes === undefined || this.adjacentNodes.length === 0) return
            this.path.push(this.nextNode)
            if (this.path.length === this.count + 1) {
                this.result.push([...this.path])
                this.ends.push(this.path.pop() as string)
            } else if (this.path.length === this.count) {
                // 殊途同歸只要取一種路徑
                for (const adjacentNode of this.adjacentNodes) {
                    if (!this.ends.includes(adjacentNode)) {
                        this.queues[this.path.length].push(adjacentNode)
                    }
                }
            } else if (this.path.length < this.count) {
                // 確保 nextNode !== previousNode (不能走回頭路)
                for (const adjacentNode of this.adjacentNodes) {
                    if (adjacentNode !== this.path[this.path.length - 2]) {
                        this.queues[this.path.length].push(adjacentNode)
                    }
                }
            }
            this.nextNode = undefined
            this.traversal()
        }
    }
}
export default GraphDSA

// const instance = new GraphDSA()
// const { result, queues } = instance.getAllPaths('A', 17)
// console.log(result)
// console.log(queues)