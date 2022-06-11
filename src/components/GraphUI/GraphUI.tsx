// Standard library imports.

// Related third party imports.
import { PointerEvent, useState, WheelEvent, createElement, useMemo } from 'react'

// Local application/library specific imports.
import type { Vertex, Edge } from '../../global'
import mainWorld from '../../data/mainWorld'
import GraphDSA from '../../graphics/GraphDSA'
import OneWayHEdge from '../edges/OneWayHEdge'
import OneWayVEdge from '../edges/OneWayVEdge'
import TwoWayHEdge from '../edges/TwoWayHEdge'
import TwoWayVEdge from '../edges/TwoWayVEdge'
import WorldTransferField from '../vertices/WorldTransferField'
import KeyTreasureField from '../vertices/KeyTreasureField'
import WhiteTreasureField from '../vertices/WhiteTreasureField'
import RedTreasureField from '../vertices/RedTreasureField'
import GoldTreasureField from '../vertices/GoldTreasureField'
import CollectAllMoneyField from '../vertices/CollectAllMoneyField'
import CollectMoneyField from '../vertices/CollectMoneyField'
import ChruchField from '../vertices/ChruchField'
import WeaponStoreField from '../vertices/WeaponStoreField'
import JobStoreField from '../vertices/JobStoreField'
import GroceryStoreField from '../vertices/GroceryStoreField'
import MagicStoreField from '../vertices/MagicStoreField'
import VillageField from '../vertices/VillageField'
import CaveField from '../vertices/CaveField'
import CastleField from '../vertices/CastleField'
import TreasureField from '../vertices/TreasureField'
import MagicField from '../vertices/MagicField'
import BattleField from '../vertices/BattleField'
import styles from './GraphUI.module.css'

// Stateless vars declare

// 透過cell.name mapping到react component的mapping table
const Components = {
    vertices: {
        WorldTransferField,
        KeyTreasureField,
        WhiteTreasureField,
        RedTreasureField,
        GoldTreasureField,
        CollectAllMoneyField,
        CollectMoneyField,
        TreasureField,
        MagicField,
        BattleField,
        ChruchField,
        WeaponStoreField,
        JobStoreField,
        GroceryStoreField,
        MagicStoreField,
        VillageField,
        CaveField,
        CastleField
    },
    edges: {
        OneWayHEdge,
        OneWayVEdge,
        TwoWayHEdge,
        TwoWayVEdge
    }
}

// 要先有pointerDown，pointerMove的動作才會成立
let isPointerDown = false

// 從curGraph取得該vertex or edge以及index，並且後續更新屬性也不用再遍歷array
let pointerDownVertex: Vertex

// 背景點點的間隔
const gridSize = 20

// 用來計算滑鼠移動距離的基準點
const pointerDownOffset = { x: -1, y: -1 }

// 紀錄SVG偏移的基準點，之後再加上滑鼠移動距離，就會是最新的偏移量
const pointerDownTranslate = { x: -1, y: -1 }

// graph資料結構與演算法的實作，整包精華都在這邊
const graphDSA = new GraphDSA(mainWorld)
const result = graphDSA.getAllPaths('34c8cd25-57f1-44ac-a407-f185f1cfe6c9', 30)

export default GraphUI

function GraphUI (): JSX.Element {
    const {
        handlePointerDown,
        handlePointerMove,
        handlePointerUp,
        handleWheel,
        SVGScale,
        SVGTranslate,
        Cells,
        HighLights
    } = useMetaData()
    return (
        <div className={styles.container}>
            <svg
                style={{
                    backgroundSize: `${gridSize * SVGScale}px ${gridSize * SVGScale}px`,
                    backgroundPosition: `${gridSize * SVGScale * -0.5 + SVGTranslate.x}px ${gridSize * SVGScale * -0.5 + SVGTranslate.y}px`
                }}
                className={styles.svg}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onWheel={handleWheel}
            >
                <defs>
                    <marker
                        viewBox='0 0 15 15'
                        id='arrow'
                        refX='15'
                        refY='5'
                        orient='auto'
                    >
                        <path d='M0 0 L0 10 L10 5 Z' fill='#ff0000'/>
                    </marker>
                </defs>
                <g transform={`matrix(${SVGScale}, 0, 0, ${SVGScale}, ${SVGTranslate.x}, ${SVGTranslate.y})`}>  
                    {Cells}
                    {HighLights}
                </g>
            </svg>
        </div>
    )
}

function useMetaData () {
    const [curGraph, setCurGraph] = useState(mainWorld)
    const [SVGScale, setSVGScale] = useState(1)
    const [SVGTranslate, setSVGTranslate] = useState({ x: 0, y: 0 })
    const Cells = useMemo(() => fromJSON(curGraph), [curGraph])
    const HighLights = useMemo(() =>
        result.endPositions.map((position, index) =>
            <rect 
                key={index} 
                width='100' 
                height='100' 
                x={position.x - 50} 
                y={position.y - 50}
                fill='none'
                stroke='#99e3b7'
                strokeWidth='5'
            />
        )
    , [])
    function handlePointerDown (e: PointerEvent<SVGSVGElement>) {
        if (e.button !== 0) return
        isPointerDown = true
        const { offsetX, offsetY } = e.nativeEvent
        pointerDownOffset.x = offsetX
        pointerDownOffset.y = offsetY
        pointerDownTranslate.x = SVGTranslate.x
        pointerDownTranslate.y = SVGTranslate.y
    }
    function handlePointerMove (e: PointerEvent<SVGSVGElement>) {
        if (!isPointerDown) return

        const { offsetX, offsetY } = e.nativeEvent
        const { x: anchorX, y: anchorY } = pointerDownTranslate
        const deltaX = offsetX - pointerDownOffset.x
        const deltaY = offsetY - pointerDownOffset.y
        const newX = parseInt((anchorX + deltaX).toFixed(0))
        const newY = parseInt((anchorY + deltaY).toFixed(0))
        if (newX === SVGTranslate.x && newY === SVGTranslate.y) return
        setSVGTranslate({ x: newX, y: newY })
        return
    }
    function handlePointerUp (e: PointerEvent<SVGSVGElement>) {
        isPointerDown = false
        setCurGraph({ ...curGraph })
    }
    /**
     * deltaY = -150 | 150，分別代表上滾(放大)跟下滾(縮小)
     * 因為這個頁面沒有scrollBar，所以不需要ctrl + wheel來區別一般滾動跟放大縮小
     */
    function handleWheel (e: WheelEvent<SVGSVGElement>) {
        const delta = e.deltaY < 0 ? 0.1 : -0.1
        const oldScale = SVGScale
        const { x, y } = SVGTranslate
        const { offsetX, offsetY } = e.nativeEvent
        const newScale = parseFloat((oldScale + delta).toFixed(1))
        const originOffsetXBasedOnSVG = (offsetX - x) / oldScale
        const originOffsetYBasedOnSVG = (offsetY - y) / oldScale
        const newX = parseInt((x - originOffsetXBasedOnSVG * delta).toFixed(0))
        const newY = parseInt((y - originOffsetYBasedOnSVG * delta).toFixed(0))
        if (newScale > 9.9 || newScale < 0.1) return
        if (newX === SVGTranslate.x && newY === SVGTranslate.y) return
        setSVGScale(newScale)
        setSVGTranslate({ x: newX, y: newY })
    }
    return {
        handlePointerDown,
        handlePointerMove,
        handlePointerUp,
        handleWheel,
        SVGScale,
        SVGTranslate,
        Cells,
        HighLights
    }
}
/**
 * 要先生成Edge，再生成Vertex，這樣Vertex才可以把LINK蓋住
 */
function fromJSON (graph: { vertices: Vertex[], edges: Edge[] }) {
    const vertices = graph.vertices.map(vertex => 
        createElement(Components.vertices[vertex.name], { key: vertex.id, ...vertex })
    )
    const edges = graph.edges.map(edge => {
        if (pointerDownVertex?.edges.includes(edge.id)) {
            if (edge.startId === pointerDownVertex.id) {
                edge.start = pointerDownVertex.position
            } else if (edge.endId === pointerDownVertex.id) {
                edge.end = pointerDownVertex.position
            }
        }
        return createElement(Components.edges[edge.name], { key: edge.id, ...edge })
    })
    return [...edges, ...vertices]
}