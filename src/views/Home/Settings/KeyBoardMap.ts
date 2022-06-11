// import { Text } from 'global'
// import texts from './texts'

// export class Node {
//     public top: Node | undefined
//     public left: Node | undefined
//     public right: Node | undefined
//     public bottom: Node | undefined
//     // public gamePadKey:  
//     // public rowIdx: number
//     // public colIdx: number
//     public text: Text
//     constructor (text: Text) {
//         this.top = undefined
//         this.bottom = undefined
//         this.left = undefined
//         this.right = undefined
//         // this.rowIdx = -1
//         // this.colIdx = -1
//         this.text = text
//     }
// }

// class Map {
//     public node2dArray: Node[][]
//     public root: Node
//     constructor (texts: Text[][]) {
//         this.node2dArray = this.generateNodesFromArray2d(texts)
//         this.root = this.node2dArray[0][1]
//     }
//     generateNodesFromArray2d (texts: Text[][]): Node[][] {
//         // generate node2dArray
//         const node2dArray: Node[][] = []
//         texts.forEach(row => {
//             const nodeRow: Node[] = []
//             row.forEach(text => {
//                 nodeRow.push(new Node(text))
//             })
//             node2dArray.push(nodeRow.splice(0))
//         })

//         // init pointer
//         node2dArray.forEach((row, rowIdx) => {
//             row.forEach((node, colIdx) => {
//                 const hasTopSibling = rowIdx !== 0
//                 const hasBottomSibling = rowIdx !== node2dArray.length - 1
//                 const hasLeftSibling = colIdx !== 0
//                 const hasRightSibling = colIdx !== row.length - 1
//                 if (hasTopSibling) node.top = node2dArray[rowIdx - 1][colIdx]
//                 if (hasBottomSibling) node.bottom = node2dArray[rowIdx + 1][colIdx]
//                 if (hasLeftSibling) node.left = node2dArray[rowIdx][colIdx - 1]
//                 if (hasRightSibling) node.right = node2dArray[rowIdx][colIdx + 1]
//             })
//         })

//         // re pointer those shouldn't be selected to undefined
//         node2dArray[0][1].left = undefined
//         node2dArray[1][1].left = undefined
       
//         node2dArray[1][1].bottom = node2dArray[4][1]
//         node2dArray[4][1].top = node2dArray[1][1]
        
//         node2dArray[1][2].bottom = undefined
        
//         node2dArray[1][3].bottom = node2dArray[4][3]
//         node2dArray[4][3].top = node2dArray[1][3]

//         node2dArray[4][1].left = undefined
//         node2dArray[4][1].right = node2dArray[4][3]

//         node2dArray[5][1].left = undefined
//         node2dArray[5][1].right = node2dArray[5][3]

//         node2dArray[6][1].left = undefined
//         node2dArray[6][1].right = node2dArray[6][3]

//         node2dArray[7][1].left = undefined
//         node2dArray[7][1].right = node2dArray[7][3]

//         node2dArray[8][1].left = undefined
//         node2dArray[8][1].right = node2dArray[8][3]

//         node2dArray[9][1].left = undefined
//         node2dArray[9][1].right = node2dArray[9][3]

//         node2dArray[10][1].left = undefined
//         node2dArray[10][1].right = node2dArray[10][3]

//         node2dArray[11][1].left = undefined

//         node2dArray[11][2].top = undefined

//         node2dArray[4][3].left = node2dArray[4][1]
//         node2dArray[5][3].left = node2dArray[5][1]
//         node2dArray[6][3].left = node2dArray[6][1]
//         node2dArray[7][3].left = node2dArray[7][1]
//         node2dArray[8][3].left = node2dArray[8][1]
//         node2dArray[9][3].left = node2dArray[9][1]
//         node2dArray[10][3].left = node2dArray[10][1]

//         return node2dArray
//     }
//     traversal (node: Node, path: Node[]): Node[] {
//         path.push(node)
//         if (node.top && !path.includes(node.top)) this.traversal(node.top, path)
//         if (node.bottom && !path.includes(node.bottom)) this.traversal(node.bottom, path)
//         if (node.left && !path.includes(node.left)) this.traversal(node.left, path)
//         if (node.right && !path.includes(node.right)) this.traversal(node.right, path)
//         return path
//     }
//     /**
//      * @todo 尚未實作
//      */
//     BFS (node: Node, path: Node[]): Node[] {
//         return path
//     }
//     /**
//      * @todo 尚未實作
//      */
//     DFS (node: Node, path: Node[]): Node[] {
//         return path
//     }
// }
// const keyboardMap = new Map(texts)
// export default keyboardMap

import { LangTypes, AspectRatioTypes, GamePadKeyTypes } from 'global'
type KeyboardMap = [
    [LangTypes, LangTypes, LangTypes],
    [AspectRatioTypes, AspectRatioTypes, AspectRatioTypes],
    [GamePadKeyTypes, '', GamePadKeyTypes],
    [GamePadKeyTypes, '', GamePadKeyTypes],
    [GamePadKeyTypes, '', GamePadKeyTypes],
    [GamePadKeyTypes, '', GamePadKeyTypes],
    [GamePadKeyTypes, '', GamePadKeyTypes],
    [GamePadKeyTypes, '', GamePadKeyTypes],
    [GamePadKeyTypes, '', GamePadKeyTypes],
    [GamePadKeyTypes, '確定', '取消']
]
// type KeyboardMap = [
//     ['cn', 'en', 'jp'],
//     ['16:9', '4:3', 'stretch'],
//     ['arrowUp', '', 'L1'],
//     ['arrowDown', '', 'L2'],
//     ['arrowRight', '', 'R1'],
//     ['arrowLeft', '', 'R2'],
//     ['triangle', '', 'SELECT'],
//     ['circle', '', 'ANALOG'],
//     ['square', '', 'START'],
//     ['cross', '確定', '取消']
// ]
const KEYBOARDMAP: KeyboardMap = [
    ['cn', 'en', 'jp'],
    ['16:9', '4:3', 'stretch'],
    ['arrowUp', '', 'L1'],
    ['arrowDown', '', 'L2'],
    ['arrowRight', '', 'R1'],
    ['arrowLeft', '', 'R2'],
    ['triangle', '', 'SELECT'],
    ['circle', '', 'ANALOG'],
    ['square', '', 'START'],
    ['cross', '確定', '取消']
]

export default KEYBOARDMAP