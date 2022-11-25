// Related third party imports.
import {
  PointerEvent,
  useState,
  WheelEvent,
  MouseEvent,
  createElement,
  useMemo,
  useRef,
} from "react";
import { v4 as uuidv4 } from "uuid";

// Local application/library specific imports.
import type {
  Vertex,
  Edge,
  Directions,
  EdgeTypes,
  VertexTypes,
  Area,
  Position,
  AreaTypes,
  GraphJSON,
} from "global";
import dokaponTheWorld from "data/maps/dokaponTheWorld";
import betweenDimensions from "data/maps/betweenDimensions";
import GraphDSA from "graphics/GraphDSA";
import OneWayHEdge from "components/edges/OneWayHEdge";
import OneWayVEdge from "components/edges/OneWayVEdge";
import TwoWayHEdge from "components/edges/TwoWayHEdge";
import TwoWayVEdge from "components/edges/TwoWayVEdge";
import WorldTransferField from "components/vertices/WorldTransferField";
import KeyTreasureField from "components/vertices/KeyTreasureField";
import WhiteTreasureField from "components/vertices/WhiteTreasureField";
import RedTreasureField from "components/vertices/RedTreasureField";
import GoldTreasureField from "components/vertices/GoldTreasureField";
import CollectAllMoneyField from "components/vertices/CollectAllMoneyField";
import CollectMoneyField from "components/vertices/CollectMoneyField";
import ChruchField from "components/vertices/ChruchField";
import WeaponStoreField from "components/vertices/WeaponStoreField";
import JobStoreField from "components/vertices/JobStoreField";
import GroceryStoreField from "components/vertices/GroceryStoreField";
import MagicStoreField from "components/vertices/MagicStoreField";
import VillageField from "components/vertices/VillageField";
import CaveField from "components/vertices/CaveField";
import CastleField from "components/vertices/CastleField";
import TreasureField from "components/vertices/TreasureField";
import MagicBookField from "components/vertices/MagicBookField";
import BattleField from "components/vertices/BattleField";
import DamageField from "components/vertices/DamageField";
import styles from "./GraphEditor.module.css";

// Stateless vars declare
type MouseMode = "edit" | "drag";
const directions: Directions[] = ["top", "left", "right", "bottom"];

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
    MagicBookField,
    BattleField,
    ChruchField,
    WeaponStoreField,
    JobStoreField,
    GroceryStoreField,
    MagicStoreField,
    VillageField,
    CaveField,
    CastleField,
    DamageField,
  },
  edges: {
    OneWayHEdge,
    OneWayVEdge,
    TwoWayHEdge,
    TwoWayVEdge,
  },
};

// 要先有pointerDown，pointerMove的動作才會成立
let isPointerDown = false;

// 目前不支援單純移動edge的座標
let isPointerDownOnVertex = false;
let isPointerDownOnBlank = false;
let isPointerDownOnSelectedArea = false;

// 從curGraph取得該vertex or edge以及index，並且後續更新屬性也不用再遍歷array
let pointerDownVertex: Vertex;
let pointerDownEdge: Edge;
let pointerDownVertexIdx = -1;
let pointerDownEdgeIdx = -1;

// 背景點點的間隔
const gridSize = 20;

// 用來計算滑鼠移動距離的基準點
const pointerDownOffset = { x: -1, y: -1 };

// 紀錄SVG偏移的基準點，之後再加上滑鼠移動距離，就會是最新的偏移量
const pointerDownTranslate = { x: -1, y: -1 };

// 承上，紀錄vertex偏移的基準點，之後再加上滑鼠移動距離，就會是最新的偏移量
const pointerDownVertexTranslate = { x: -1, y: -1 };

// 承上，紀錄selectedArea展開的基準點，滑鼠移動距離則是寬跟高
const pointerDownSelectedAreaTranslate = { x: -1, y: -1 };

// 直接透過JS原生操作DOM的方式來改變pointerMove時候相關edges
const pointerDownRelatedEdges: Edge[] = [];

// 群組移動的vertices跟群組偏移
const selectedVertices: Vertex[] = [];
const selectedVerticesGroupOffsets: Position[] = [];

// graph資料結構與演算法的實作，整包精華都在這邊
const graphDSA = new GraphDSA(betweenDimensions);

export default GraphEditor;

function GraphEditor(): JSX.Element {
  const {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    toggleMouseMode,
    handleWheel,
    SVGScale,
    SVGTranslate,
    Cells,
    // HighLights,
    handleContextMenu,
    vertexCtxMenuPos,
    edgeCtxMenuPos,
    selectedAreaCtxMenuPos,
    closeCtxMenus,
    cellsGroup,
    vertexSelectEl,
    edgeSelectEl,
    selectedAreaSelectEl,
    vertexSelectConfirm,
    edgeSelectConfirm,
    areaSelectConfirm,
    printGraph,
    selectedArea,
  } = useMetaData();
  return (
    <>
      <header className={styles.header}>
        <button onClick={() => printGraph()}>打印</button>
        <select onChange={(e) => toggleMouseMode(e.target.value as MouseMode)}>
          <option value="edit">編輯</option>
          <option value="drag">拖曳</option>
        </select>
        <div className={styles.svgScale}>{(SVGScale * 100).toFixed(0)}%</div>
      </header>
      <div className={styles.container}>
        <svg
          style={{
            backgroundSize: `${gridSize * SVGScale}px ${gridSize * SVGScale}px`,
            backgroundPosition: `${
              gridSize * SVGScale * -0.5 + SVGTranslate.x
            }px ${gridSize * SVGScale * -0.5 + SVGTranslate.y}px`,
          }}
          className={styles.svg}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onContextMenu={handleContextMenu}
          onPointerUp={handlePointerUp}
          onWheel={handleWheel}
        >
          <defs>
            <marker
              viewBox="0 0 15 15"
              id="arrow"
              refX="15"
              refY="5"
              orient="auto"
            >
              <path d="M0 0 L0 10 L10 5 Z" fill="#ff0000" />
            </marker>
          </defs>
          <g
            data-type="selectedArea"
            ref={cellsGroup}
            transform={`matrix(${SVGScale}, 0, 0, ${SVGScale}, ${SVGTranslate.x}, ${SVGTranslate.y})`}
          >
            {Cells}
            <rect
              x={selectedArea.x}
              y={selectedArea.y}
              width={selectedArea.width}
              height={selectedArea.height}
              style={{
                fill: "rgba(254, 182, 99, 0.2)",
                stroke: "rgba(254, 182, 99, 1)",
                strokeWidth: 3,
              }}
            />
          </g>
          {/* <g transform={`matrix(${SVGScale}, 0, 0, ${SVGScale}, ${SVGTranslate.x}, ${SVGTranslate.y})`}>  
                        {HighLights}
                    </g> */}
        </svg>
        <div
          className={styles.layer2}
          onContextMenu={(e) => e.preventDefault()}
          style={{
            display:
              vertexCtxMenuPos.x === -1 &&
              edgeCtxMenuPos.x === -1 &&
              selectedAreaCtxMenuPos.x === -1
                ? "none"
                : "",
          }}
        >
          <div
            className={styles.vertexCtxMenu}
            style={{
              display: vertexCtxMenuPos.x === -1 ? "none" : "",
              top: vertexCtxMenuPos.y,
              left: vertexCtxMenuPos.x,
            }}
          >
            <select ref={vertexSelectEl}>
              <optgroup label="top" disabled={Boolean(pointerDownVertex?.top)}>
                <option value="top,TwoWayVEdge">雙&#8593;</option>
                <option value="top,OneWayVEdge">單&#8593;</option>
              </optgroup>
              <optgroup
                label="left"
                disabled={Boolean(pointerDownVertex?.left)}
              >
                <option value="left,TwoWayHEdge">雙&#8592;</option>
                <option value="left,OneWayHEdge">單&#8592;</option>
              </optgroup>
              <optgroup
                label="right"
                disabled={Boolean(pointerDownVertex?.right)}
              >
                <option value="right,TwoWayHEdge">雙&#8594;</option>
                <option value="right,OneWayHEdge">單&#8594;</option>
              </optgroup>
              <optgroup
                label="bottom"
                disabled={Boolean(pointerDownVertex?.bottom)}
              >
                <option value="bottom,TwoWayVEdge">雙&#8595;</option>
                <option value="bottom,OneWayVEdge">單&#8595;</option>
              </optgroup>
              <option value="delete">刪除</option>
            </select>
            <button onClick={vertexSelectConfirm}>OK</button>
            <button onClick={closeCtxMenus}>NO</button>
          </div>
          <div
            className={styles.edgeCtxMenu}
            style={{
              display: edgeCtxMenuPos.x === -1 ? "none" : "",
              top: edgeCtxMenuPos.y,
              left: edgeCtxMenuPos.x,
            }}
          >
            <select ref={edgeSelectEl}>
              <optgroup
                label="vertices"
                disabled={
                  pointerDownEdge?.startId !== "" &&
                  pointerDownEdge?.endId !== ""
                }
              >
                {/* 最常用到 */}
                <option value="BattleField">戰鬥</option>
                {/* Special */}
                {/* <option value="VillageField">村莊</option> */}
                <option value="CaveField">洞窟</option>
                {/* <option value="ChruchField">教堂</option> */}
                <option value="GroceryStoreField">道具店</option>
                <option value="WeaponStoreField">裝備店</option>
                <option value="JobStoreField">職安所</option>
                <option value="MagicStoreField">魔法店</option>
                <option value="WorldTransferField">世界轉移</option>
                <option value="DamageField">傷害</option>
                {/* 集金類型 */}
                <option value="CollectMoneyField">集金</option>
                <option value="CollectAllMoneyField">集金(黃)</option>
                {/* 寶箱類型 */}
                <option value="TreasureField">道具寶箱</option>
                <option value="MagicBookField">魔法寶箱</option>
                <option value="GoldTreasureField">金錢寶箱</option>
                <option value="WhiteTreasureField">白色寶箱</option>
                <option value="RedTreasureField">紅色寶箱</option>
                <option value="KeyTreasureField">鑰匙寶箱</option>
                {/* 只有一個 */}
                {/* <option value="CastleField">城堡</option> */}
                <option value="reconnect">重連</option>
              </optgroup>
              <option value="delete">刪除</option>
            </select>
            <button onClick={edgeSelectConfirm}>OK</button>
            <button onClick={closeCtxMenus}>NO</button>
          </div>
          <div
            className={styles.selectedAreaCtxMenu}
            style={{
              display: selectedAreaCtxMenuPos.x === -1 ? "none" : "",
              top: selectedAreaCtxMenuPos.y,
              left: selectedAreaCtxMenuPos.x,
            }}
          >
            <select ref={selectedAreaSelectEl}>
              <optgroup label="areas">
                <option value="AsiaCave">亞洲洞窟</option>
                <option value="Europe">歐洲</option>
                <option value="Russia">俄羅斯</option>
                <option value="NorthAmerica">北美州</option>
                <option value="SouthAmerica">南美州</option>
                <option value="Oceania">大洋洲</option>
                <option value="Africa">非洲</option>
                <option value="Arctic">北極州</option>
                <option value="Antarctica">南極洲</option>
                <option value="HawaiianIslands">夏威夷群島</option>
              </optgroup>
            </select>
            <button onClick={areaSelectConfirm}>OK</button>
            <button onClick={closeCtxMenus}>NO</button>
          </div>
        </div>
      </div>
    </>
  );
}

function useMetaData() {
  const cellsGroup = useRef<SVGGElement>(null);
  const [vertexCtxMenuPos, setVertexCtxMenuPos] = useState({ x: -1, y: -1 });
  const [edgeCtxMenuPos, setEdgeCtxMenuPos] = useState({ x: -1, y: -1 });
  const [selectedAreaCtxMenuPos, setSelectedAreaCtxMenuPos] = useState({
    x: -1,
    y: -1,
  });
  const [curGraph, setCurGraph] = useState(dokaponTheWorld);
  const [mouseMode, toggleMouseMode] = useState<MouseMode>("edit");
  const [SVGScale, setSVGScale] = useState(1);
  const [selectedArea, setSelectedArea] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [SVGTranslate, setSVGTranslate] = useState({ x: 0, y: 0 });
  const vertexSelectEl = useRef<HTMLSelectElement>(null);
  const edgeSelectEl = useRef<HTMLSelectElement>(null);
  const selectedAreaSelectEl = useRef<HTMLSelectElement>(null);
  const Cells = useMemo(() => fromJSON(curGraph), [curGraph]);
  // const HighLights = useMemo(() =>
  //     result.endPositions.map((position, index) =>
  //         <rect
  //             key={index}
  //             width='100'
  //             height='100'
  //             x={position.x - 50}
  //             y={position.y - 50}
  //             fill='none'
  //             stroke='#99e3b7'
  //             strokeWidth='5'
  //         />
  //     )
  // , [])
  function handlePointerDown(e: PointerEvent<SVGSVGElement>) {
    // if (e.button !== 0) return
    isPointerDown = true;
    const { offsetX, offsetY } = e.nativeEvent;
    pointerDownOffset.x = offsetX;
    pointerDownOffset.y = offsetY;
    pointerDownTranslate.x = SVGTranslate.x;
    pointerDownTranslate.y = SVGTranslate.y;

    if (mouseMode === "drag") return;
    if (!(e.target instanceof Element)) return;
    const cellId = e.target.parentElement?.id;
    const cellType = e.target.parentElement?.getAttribute("data-type");
    switch (cellType) {
      case null: {
        isPointerDownOnBlank = true;
        pointerDownSelectedAreaTranslate.x = Math.nearestMultiple({
          of: (offsetX - SVGTranslate.x) / SVGScale,
          to: gridSize,
        });
        pointerDownSelectedAreaTranslate.y = Math.nearestMultiple({
          of: (offsetY - SVGTranslate.y) / SVGScale,
          to: gridSize,
        });
        setSelectedArea({
          ...pointerDownSelectedAreaTranslate,
          width: 0,
          height: 0,
        });
        return;
      }
      case "selectedArea": {
        isPointerDownOnSelectedArea = true;
        pointerDownSelectedAreaTranslate.x = selectedArea.x;
        pointerDownSelectedAreaTranslate.y = selectedArea.y;
        return;
      }
      case "edge": {
        const mayBePointerDownEdgeIdx = curGraph.edges.findIndex(
          (edge) => edge.id === cellId
        );
        if (mayBePointerDownEdgeIdx === -1) return;
        pointerDownEdge = curGraph.edges[mayBePointerDownEdgeIdx];
        pointerDownEdgeIdx = mayBePointerDownEdgeIdx;
        return;
      }
      case "vertex": {
        isPointerDownOnVertex = true;
        const mayBePointerDownVertexIdx = curGraph.vertices.findIndex(
          (vertex) => vertex.id === cellId
        );
        if (mayBePointerDownVertexIdx === -1) return;
        pointerDownVertex = curGraph.vertices[mayBePointerDownVertexIdx];
        pointerDownVertexIdx = mayBePointerDownVertexIdx;
        pointerDownVertexTranslate.x = pointerDownVertex.position.x;
        pointerDownVertexTranslate.y = pointerDownVertex.position.y;
        pointerDownRelatedEdges.length = 0;
        pointerDownVertex.edges.forEach((edgeId) => {
          const edge = curGraph.edges.find(
            (tempEdge) => tempEdge.id === edgeId
          );
          if (edge) pointerDownRelatedEdges.push(edge);
        });

        const vertexEl = document.getElementById(pointerDownVertex.id);
        if (!(vertexEl instanceof SVGGElement)) throw new Error("no vertexEl");
        const vertexBBox = vertexEl.getBBox();
        const vertexArea = {
          ...pointerDownVertex.position,
          width: Math.nearestMultiple({ of: vertexBBox.width, to: 20 }),
          height: Math.nearestMultiple({ of: vertexBBox.height, to: 20 }),
        };
        return;
      }
    }
  }
  function handlePointerMove(e: PointerEvent<SVGSVGElement>) {
    if (!isPointerDown) return;

    switch (mouseMode) {
      case "edit": {
        if (isPointerDownOnVertex) moveVertexAndConnectedEdges(e);
        else if (isPointerDownOnBlank) expandSelectedArea(e);
        else if (isPointerDownOnSelectedArea) moveSelectedArea(e);
        return;
      }
      case "drag": {
        const { offsetX, offsetY } = e.nativeEvent;
        const { x: anchorX, y: anchorY } = pointerDownTranslate;
        const deltaX = offsetX - pointerDownOffset.x;
        const deltaY = offsetY - pointerDownOffset.y;
        const newX = parseInt((anchorX + deltaX).toFixed(0));
        const newY = parseInt((anchorY + deltaY).toFixed(0));
        if (newX === SVGTranslate.x && newY === SVGTranslate.y) return;
        setSVGTranslate({ x: newX, y: newY });
        return;
      }
      default:
        return;
    }
  }
  function moveVertexAndConnectedEdges(e: PointerEvent<SVGSVGElement>) {
    const { offsetX, offsetY } = e.nativeEvent;
    const { x: anchorX, y: anchorY } = pointerDownVertexTranslate;
    const deltaX = offsetX - pointerDownOffset.x;
    const deltaY = offsetY - pointerDownOffset.y;
    let shouldUpdate = false;
    if (Math.abs(offsetX - pointerDownVertex.position.x) >= gridSize)
      shouldUpdate = true;
    if (Math.abs(offsetY - pointerDownVertex.position.y) >= gridSize)
      shouldUpdate = true;
    if (!shouldUpdate) return;
    const newX = Math.nearestMultiple({
      of: anchorX + deltaX / SVGScale,
      to: gridSize,
    });
    const newY = Math.nearestMultiple({
      of: anchorY + deltaY / SVGScale,
      to: gridSize,
    });
    if (
      newX === pointerDownVertex.position.x &&
      newY === pointerDownVertex.position.y
    )
      return;
    pointerDownVertex.position.x = newX;
    pointerDownVertex.position.y = newY;

    // 直接透過原生JS操作DOM的方式來改變相關cells的座標
    const vertexEl = document.getElementById(pointerDownVertex.id);
    if (!vertexEl)
      throw new Error(`no element with id ${pointerDownVertex.id}`);
    vertexEl.setAttribute("transform", `translate(${newX}, ${newY})`);

    for (const edge of pointerDownRelatedEdges) {
      const edgeEl = document.getElementById(edge.id)?.children[0];
      if (!edgeEl) throw new Error(`no element with id ${edge.id}`);
      if (edge.startId === pointerDownVertex.id) {
        edgeEl.setAttribute(
          "d",
          `M ${newX} ${newY} L ${edge.end.x} ${edge.end.y}`
        );
      }
      if (edge.endId === pointerDownVertex.id) {
        edgeEl.setAttribute(
          "d",
          `M ${edge.start.x} ${edge.start.y} L ${newX} ${newY}`
        );
      }
    }
  }
  function expandSelectedArea(e: PointerEvent<SVGSVGElement>) {
    const { offsetX, offsetY } = e.nativeEvent;
    const { x: anchorX, y: anchorY } = pointerDownSelectedAreaTranslate;
    const deltaX = offsetX - pointerDownOffset.x;
    const deltaY = offsetY - pointerDownOffset.y;
    const newX = Math.nearestMultiple({
      of: anchorX + deltaX / SVGScale,
      to: gridSize,
    });
    const newY = Math.nearestMultiple({
      of: anchorY + deltaY / SVGScale,
      to: gridSize,
    });
    const width = Math.abs(newX - anchorX);
    const height = Math.abs(newY - anchorY);
    const firstQuadrant = newX > anchorX && newY < anchorY;
    const secondQuadrant = newX < anchorX && newY < anchorY;
    const thirdQuadrant = newX < anchorX && newY > anchorY;
    const fourthQuadrant = newX >= anchorX && newY >= anchorY;
    if (firstQuadrant)
      return setSelectedArea({ x: anchorX, y: newY, width, height });
    if (secondQuadrant)
      return setSelectedArea({ x: newX, y: newY, width, height });
    if (thirdQuadrant)
      return setSelectedArea({ x: newX, y: anchorY, width, height });
    if (fourthQuadrant)
      return setSelectedArea({ x: anchorX, y: anchorY, width, height });
  }
  /**
   * 1. move selectedArea
   *
   * 2. move selectedVertices and connectedEdges
   *
   * 算法跟moveVertexAndConnectedEdges不一樣
   *
   * 但都是透過JS操作DOM，修改vertex跟edge的position
   *
   * 同時一併更新curGraph.vertices跟curGraph.edges的position
   *
   * 等到pointerUp的時候再一次setState，透過react一次刷新
   */
  function moveSelectedArea(e: PointerEvent<SVGSVGElement>) {
    // 1. move selectedArea
    const { offsetX, offsetY } = e.nativeEvent;
    const { x: anchorX, y: anchorY } = pointerDownSelectedAreaTranslate;
    const deltaX = Math.nearestMultiple({
      of: (offsetX - pointerDownOffset.x) / SVGScale,
      to: gridSize,
    });
    const deltaY = Math.nearestMultiple({
      of: (offsetY - pointerDownOffset.y) / SVGScale,
      to: gridSize,
    });
    let shouldUpdate = false;
    if (Math.abs(offsetX - selectedArea.x) >= gridSize) shouldUpdate = true;
    if (Math.abs(offsetY - selectedArea.y) >= gridSize) shouldUpdate = true;
    if (!shouldUpdate) return;
    const newX = anchorX + deltaX;
    const newY = anchorY + deltaY;
    if (newX === selectedArea.x && newY === selectedArea.y) return;
    setSelectedArea({
      ...selectedArea,
      x: newX,
      y: newY,
    });

    // 2. move selectedVertices and connectedEdges
    selectedVertices.forEach((vertex, index) => {
      const vertexEl = document.getElementById(vertex.id);
      if (!(vertexEl instanceof SVGGElement))
        throw new Error(`no element with id ${vertex.id}`);
      const { x: groupOffsetX, y: groupOffsetY } =
        selectedVerticesGroupOffsets[index];
      vertex.position.x = newX + groupOffsetX;
      vertex.position.y = newY + groupOffsetY;
      vertexEl.setAttribute(
        "transform",
        `translate(${vertex.position.x}, ${vertex.position.y})`
      );

      const connectedEdges: Edge[] = [];
      curGraph.edges.forEach((edge) => {
        if (vertex.edges.includes(edge.id)) connectedEdges.push(edge);
      });
      for (const edge of connectedEdges) {
        const edgeEl = document.getElementById(edge.id)?.children[0];
        if (!(edgeEl instanceof SVGPathElement))
          throw new Error(`no path with id ${edge.id}`);
        if (edge.startId === vertex.id) {
          edge.start.x = newX + groupOffsetX;
          edge.start.y = newY + groupOffsetY;
        } else if (edge.endId === vertex.id) {
          edge.end.x = newX + groupOffsetX;
          edge.end.y = newY + groupOffsetY;
        }
        edgeEl.setAttribute(
          "d",
          `M ${edge.start.x} ${edge.start.y} L ${edge.end.x} ${edge.end.y}`
        );
      }
    });
  }
  function handlePointerUp(e: PointerEvent<SVGSVGElement>) {
    if (isPointerDownOnBlank) getSelectedVertices();

    isPointerDown = false;
    isPointerDownOnVertex = false;
    isPointerDownOnBlank = false;
    isPointerDownOnSelectedArea = false;
    setCurGraph({ ...curGraph });
  }
  function getSelectedVertices() {
    let left = Number.MAX_SAFE_INTEGER;
    let top = Number.MAX_SAFE_INTEGER;
    let right = Number.MIN_SAFE_INTEGER;
    let bottom = Number.MIN_SAFE_INTEGER;
    selectedVertices.length = 0;
    for (const vertex of curGraph.vertices) {
      const vertexArea = getVertexArea(vertex);
      if (Math.isArea1InArea2(vertexArea, selectedArea)) {
        left = Math.min(left, vertexArea.x);
        top = Math.min(top, vertexArea.y);
        right = Math.max(right, vertexArea.x + vertexArea.width);
        bottom = Math.max(bottom, vertexArea.y + vertexArea.height);
        selectedVertices.push(vertex);
      }
    }
    selectedVerticesGroupOffsets.length = 0;
    selectedVertices.forEach((vertex) =>
      selectedVerticesGroupOffsets.push({
        x: vertex.position.x - left,
        y: vertex.position.y - top,
      })
    );
    if (left > right || top > bottom)
      setSelectedArea({ x: 0, y: 0, width: 0, height: 0 });
    else
      setSelectedArea({
        x: left,
        y: top,
        width: right - left,
        height: bottom - top,
      });
  }
  /**
   *
   * @param vertex
   *
   * vertex.position是vertex的中心點
   *
   * 所以x要減掉1/2的width，y要減掉1/2的height
   *
   * 這樣才會是左上角的座標
   */
  function getVertexArea(vertex: Vertex): Area {
    const vertexEl = document.getElementById(vertex.id);
    if (!(vertexEl instanceof SVGGElement))
      throw new Error("no vertexEl exist in DOM");
    let { width, height } = vertexEl.getBBox();
    width = Math.nearestMultiple({ of: width, to: gridSize });
    height = Math.nearestMultiple({ of: height, to: gridSize });
    const vertexArea = {
      x: vertex.position.x - width / 2,
      y: vertex.position.y - height / 2,
      width,
      height,
    };
    return vertexArea;
  }
  /**
   * deltaY = -150 | 150，分別代表上滾(放大)跟下滾(縮小)
   * 因為這個頁面沒有scrollBar，所以不需要ctrl + wheel來區別一般滾動跟放大縮小
   */
  function handleWheel(e: WheelEvent<SVGSVGElement>) {
    const delta = e.deltaY < 0 ? 0.1 : -0.1;
    const oldScale = SVGScale;
    const { x, y } = SVGTranslate;
    const { offsetX, offsetY } = e.nativeEvent;
    const newScale = parseFloat((oldScale + delta).toFixed(1));
    const originOffsetXBasedOnSVG = (offsetX - x) / oldScale;
    const originOffsetYBasedOnSVG = (offsetY - y) / oldScale;
    const newX = parseInt((x - originOffsetXBasedOnSVG * delta).toFixed(0));
    const newY = parseInt((y - originOffsetYBasedOnSVG * delta).toFixed(0));
    if (newScale > 9.9 || newScale < 0.1) return;
    if (newX === SVGTranslate.x && newY === SVGTranslate.y) return;
    setSVGScale(newScale);
    setSVGTranslate({ x: newX, y: newY });
  }
  /**
   * 會先觸發pointerDown，再觸發contextMenu
   */
  function handleContextMenu(e: MouseEvent<SVGSVGElement>) {
    // isPointerDown = false
    e.preventDefault();
    if (mouseMode === "drag") return;
    if (!(e.target instanceof Element)) return;
    const cellType = e.target.parentElement?.getAttribute("data-type");
    switch (cellType) {
      case "vertex":
        setVertexCtxMenuPos({ x: e.pageX, y: e.pageY });
        return;
      case "edge":
        setEdgeCtxMenuPos({ x: e.pageX, y: e.pageY });
        return;
      case "selectedArea":
        setSelectedAreaCtxMenuPos({ x: e.pageX, y: e.pageY });
        return;
      default:
        return;
    }
  }
  function closeCtxMenus(e: MouseEvent) {
    e.preventDefault();
    setVertexCtxMenuPos({ x: -1, y: -1 });
    setEdgeCtxMenuPos({ x: -1, y: -1 });
    setSelectedAreaCtxMenuPos({ x: -1, y: -1 });
  }
  function vertexSelectConfirm(e: MouseEvent) {
    const selectedValue = vertexSelectEl.current?.value;
    switch (selectedValue) {
      case undefined:
        return;
      case "delete":
        return deleteVertex();
      default: {
        const [direction, edgeType] = selectedValue.split(",");
        return addEdge(direction as Directions, edgeType as EdgeTypes);
      }
    }
  }
  /**
   * 最多牽扯到4個edge + 4個vertex
   */
  function deleteVertex() {
    const edges = curGraph.edges.filter((temp) =>
      pointerDownVertex.edges.includes(temp.id)
    );
    const vertices: Vertex[] = [];
    for (const vertex of curGraph.vertices) {
      if (vertex.id === pointerDownVertex.top) vertices.push(vertex);
      if (vertex.id === pointerDownVertex.left) vertices.push(vertex);
      if (vertex.id === pointerDownVertex.right) vertices.push(vertex);
      if (vertex.id === pointerDownVertex.bottom) vertices.push(vertex);
    }
    // Array.filter creates a new array, but we want to modify the original array here
    // const vertices = curGraph.vertices.filter(temp =>
    //     pointerDownVertex.top === temp.id ||
    //     pointerDownVertex.left === temp.id ||
    //     pointerDownVertex.right === temp.id ||
    //     pointerDownVertex.bottom === temp.id
    // )

    let modifiedCount = 0;
    for (const vertex of vertices) {
      for (const direction of directions) {
        if (vertex[direction] === pointerDownVertex.id) {
          const inersectionEdgeId = pointerDownVertex.edges.find((edgeId) =>
            vertex.edges.includes(edgeId)
          );
          if (!inersectionEdgeId) throw new Error("no inersection edgeId");
          vertex[direction] = inersectionEdgeId;
          modifiedCount += 1;
          break;
        }
      }
    }
    if (vertices.length !== modifiedCount)
      throw new Error("modifiedCount does not match");

    modifiedCount = 0;
    for (const edge of edges) {
      if (edge.startId === pointerDownVertex.id) {
        edge.startId = "";
        modifiedCount += 1;
      } else if (edge.endId === pointerDownVertex.id) {
        edge.endId = "";
        modifiedCount += 1;
      }
    }
    if (edges.length !== modifiedCount)
      throw new Error("modifiedCount does not match");

    curGraph.vertices.splice(pointerDownVertexIdx, 1);
    setCurGraph({ ...curGraph });
    setVertexCtxMenuPos({ x: -1, y: -1 });
  }
  /**
   * 1. add new edge to curGraph.edges
   *
   * 2. assign vertex[direction] = newEdge.id
   *
   * 3. vertex.edges.push(newEdge.id)
   */
  function addEdge(direction: Directions, edgeType: EdgeTypes) {
    if (pointerDownVertex[direction])
      return console.error(`${direction} already exists.`);
    const newEdge = {
      start: pointerDownVertex.position,
      startId: pointerDownVertex.id,
      end: { ...pointerDownVertex.position },
      endId: "",
      name: edgeType,
      id: uuidv4(),
    };
    switch (direction) {
      case "top":
        newEdge.end.y -= 200;
        break;
      case "bottom":
        newEdge.end.y += 200;
        break;
      case "left":
        newEdge.end.x -= 200;
        break;
      case "right":
        newEdge.end.x += 200;
        break;
    }
    curGraph.edges.push(newEdge);
    pointerDownVertex[direction] = newEdge.id;
    pointerDownVertex.edges.push(newEdge.id);
    setCurGraph({ ...curGraph });
    setVertexCtxMenuPos({ x: -1, y: -1 });
  }
  function edgeSelectConfirm(e: MouseEvent) {
    const selectedValue = edgeSelectEl.current?.value;
    switch (selectedValue) {
      case undefined:
        return;
      case "delete":
        return deleteEdge();
      case "reconnect":
        return reconnectClosetVertex();
      default:
        return addVertex(selectedValue as VertexTypes);
    }
  }
  function areaSelectConfirm(e: MouseEvent) {
    const selectedArea = selectedAreaSelectEl.current?.value as AreaTypes;
    for (const selectVertex of selectedVertices) {
      selectVertex.area = selectedArea;
    }
    setCurGraph({ ...curGraph });
  }
  /**
   * 最多牽扯到2個vertex
   */
  function deleteEdge() {
    if (!pointerDownEdge) return console.error("no pointerDownEdge");

    const { startId, endId } = pointerDownEdge;
    const startVertex = curGraph.vertices.find(
      (vertex) => vertex.id === pointerDownEdge.startId
    );
    const endVertex = curGraph.vertices.find(
      (vertex) => vertex.id === pointerDownEdge.endId
    );
    const isTwoWayConnected = startId !== "" && endId !== "";
    const isStartConnected = startId !== "" && endId === "";
    const isEndConnected = startId === "" && endId !== "";

    if (isTwoWayConnected) {
      // 1. 刪除startVertex[direction] === endVertex[direction]的那個direction
      // 2. 刪除(startVertex.edges和endVertex.edges)含有pointerDownEdge.id的那個元素
      if (!startVertex || !endVertex) return console.error("invalid vertex");
      let [sDel, eDel] = [false, false];
      for (const direction of directions) {
        if (startVertex[direction] === endVertex.id) {
          delete startVertex[direction];
          const sIdx = startVertex.edges.indexOf(pointerDownEdge.id);
          if (sIdx === -1) return console.error("invalid vertex");
          startVertex.edges.splice(sIdx, 1);
          sDel = true;
          break;
        }
      }
      for (const direction of directions) {
        if (endVertex[direction] === startVertex.id) {
          delete endVertex[direction];
          const eIdx = endVertex.edges.indexOf(pointerDownEdge.id);
          if (eIdx === -1) return console.error("invalid vertex");
          endVertex.edges.splice(eIdx, 1);
          eDel = true;
          break;
        }
      }
      if (!sDel || !eDel) throw new Error("invalid vertex");
    } else if (isStartConnected) {
      let isDeleted = false;
      // 1. 刪除startVertex.edges含有pointerDownEdge.id的那個元素
      if (!startVertex) return console.error("invalid vertex");
      const sIdx = startVertex.edges.indexOf(pointerDownEdge.id);
      if (sIdx === -1) return console.error("invalid vertex");
      startVertex.edges.splice(sIdx, 1);
      // 2. 刪除startVertex[direction] = pointerDownEdge.id的那個direction
      for (const direction of directions) {
        if (startVertex[direction] === pointerDownEdge.id) {
          delete startVertex[direction];
          isDeleted = true;
          break;
        }
      }
      if (!isDeleted) throw new Error("invalid vertex");
    } else if (isEndConnected) {
      let isDeleted = false;
      // 1. 刪除endVertex.edges含有pointerDownEdge.id的那個元素
      if (!endVertex) return console.error("invalid vertex");
      const eIdx = endVertex.edges.indexOf(pointerDownEdge.id);
      if (eIdx === -1) return console.error("invalid vertex");
      endVertex.edges.splice(eIdx, 1);
      // 2. 刪除endVertex[direction] = pointerDownEdge.id的那個direction
      for (const direction of directions) {
        if (endVertex[direction] === pointerDownEdge.id) {
          delete endVertex[direction];
          isDeleted = true;
          break;
        }
      }
      if (!isDeleted) throw new Error("invalid vertex");
    }

    curGraph.edges.splice(pointerDownEdgeIdx, 1);
    const newGraph = { ...curGraph };
    setCurGraph(newGraph);
    setEdgeCtxMenuPos({ x: -1, y: -1 });
  }
  /**
   * 最多牽扯到2個vertex
   *
   * 1. add new vertex to curGraph.vertices
   *
   * 2. newVertex.edges.push(pointerDownEdge.id)
   *
   * 3. newVertex.position = pointerDownEdge.[start | end]
   *
   * 4. newVertex[direction] = connectedVertex
   *
   * 5. connectedVertex[direction] = newVertex
   *
   * 6. pointerDownEdge[startId | endId] = newVertex.id
   */
  function reconnectClosetVertex() {
    const { startId, endId } = pointerDownEdge;

    // 1. find connectedVertex
    const connectedVertex = curGraph.vertices.find(
      (temp) => temp.id === startId || temp.id === endId
    );
    if (!connectedVertex) throw new Error("no connectedVertex");

    // 2. find closetVertex
    let distance = Number.MAX_SAFE_INTEGER;
    let closetVertex: Vertex = curGraph.vertices[0];
    let datumPoint = { x: 0, y: 0 };
    if (!pointerDownEdge.startId) datumPoint = pointerDownEdge.start;
    if (!pointerDownEdge.endId) datumPoint = pointerDownEdge.end;
    for (const vertex of curGraph.vertices) {
      const d = Math.distanceBetween(datumPoint, vertex.position);
      if (distance > d) {
        distance = d;
        closetVertex = vertex;
      }
    }

    // 3. edge[startId | endId] = closetVertex.id
    pointerDownEdge[startId ? "endId" : "startId"] = closetVertex.id;

    // 4. edge[start | end] = closetVertex.position
    pointerDownEdge[startId ? "end" : "start"] = closetVertex.position;

    // 5. closetVertex.edges.push(pointerDownEdge.id)
    closetVertex.edges.push(pointerDownEdge.id);

    // 6. closetVertex[direction] = connectedVertex
    // 7. connectedVertex[direction] = closetVertex
    switch (pointerDownEdge.name) {
      case "OneWayHEdge":
        if (closetVertex.position.x > connectedVertex.position.x) {
          connectedVertex.right = closetVertex.id;
        } else if (closetVertex.position.x < connectedVertex.position.x) {
          connectedVertex.left = closetVertex.id;
        } else throw new Error("same x");
        break;
      case "OneWayVEdge":
        if (closetVertex.position.y > connectedVertex.position.y) {
          connectedVertex.bottom = closetVertex.id;
        } else if (closetVertex.position.y < connectedVertex.position.y) {
          connectedVertex.top = closetVertex.id;
        } else throw new Error("same y");
        break;
      case "TwoWayHEdge":
        if (closetVertex.position.x > connectedVertex.position.x) {
          connectedVertex.right = closetVertex.id;
          closetVertex.left = connectedVertex.id;
        } else if (closetVertex.position.x < connectedVertex.position.x) {
          connectedVertex.left = closetVertex.id;
          closetVertex.right = connectedVertex.id;
        } else throw new Error("same x");
        break;
      case "TwoWayVEdge":
        if (closetVertex.position.y > connectedVertex.position.y) {
          connectedVertex.bottom = closetVertex.id;
          closetVertex.top = connectedVertex.id;
        } else if (closetVertex.position.y < connectedVertex.position.y) {
          connectedVertex.top = closetVertex.id;
          closetVertex.bottom = connectedVertex.id;
        } else throw new Error("same y");
        break;
    }

    setEdgeCtxMenuPos({ x: -1, y: -1 });
    setCurGraph({ ...curGraph });
  }
  /**
   * 最多牽扯到2個vertex
   *
   * 1. add new vertex to curGraph.vertices
   *
   * 2. newVertex.edges.push(pointerDownEdge.id)
   *
   * 3. newVertex.position = pointerDownEdge.[start | end]
   *
   * 4. newVertex[direction] = connectedVertex
   *
   * 5. connectedVertex[direction] = newVertex
   *
   * 6. pointerDownEdge[startId | endId] = newVertex.id
   */
  function addVertex(vertexName: VertexTypes) {
    const newVertex: Vertex = {
      id: uuidv4(),
      name: vertexName,
      position: { x: 0, y: 0 },
      edges: [pointerDownEdge.id],
      area: "Atlantis",
    };
    const { startId, endId, start, end } = pointerDownEdge;

    const connectedVertex = curGraph.vertices.find(
      (temp) => temp.id === startId || temp.id === endId
    );
    if (!connectedVertex) throw new Error("no connectedVertex");

    if (startId) {
      newVertex.position = end;
      pointerDownEdge.endId = newVertex.id;
    } else if (endId) {
      newVertex.position = start;
      pointerDownEdge.startId = newVertex.id;
    }

    switch (pointerDownEdge.name) {
      case "OneWayHEdge":
        if (end.x > start.x) {
          connectedVertex.right = newVertex.id;
        } else if (end.x < start.x) {
          connectedVertex.left = newVertex.id;
        } else throw new Error("same x");
        break;
      case "OneWayVEdge":
        if (end.y > start.y) {
          connectedVertex.bottom = newVertex.id;
        } else if (end.y < start.y) {
          connectedVertex.top = newVertex.id;
        } else throw new Error("same y");
        break;
      case "TwoWayHEdge":
        if (end.x > start.x) {
          connectedVertex.right = newVertex.id;
          newVertex.left = connectedVertex.id;
        } else if (end.x < start.x) {
          connectedVertex.left = newVertex.id;
          newVertex.right = connectedVertex.id;
        } else throw new Error("same x");
        break;
      case "TwoWayVEdge":
        if (end.y > start.y) {
          connectedVertex.bottom = newVertex.id;
          newVertex.top = connectedVertex.id;
        } else if (end.y < start.y) {
          connectedVertex.top = newVertex.id;
          newVertex.bottom = connectedVertex.id;
        } else throw new Error("same y");
        break;
    }

    curGraph.vertices.push(newVertex);
    setCurGraph({ ...curGraph });
    setEdgeCtxMenuPos({ x: -1, y: -1 });
  }
  function printGraph() {
    console.log(curGraph);
  }
  return {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    toggleMouseMode,
    handleWheel,
    SVGScale,
    SVGTranslate,
    Cells,
    // HighLights,
    handleContextMenu,
    vertexCtxMenuPos,
    edgeCtxMenuPos,
    selectedAreaCtxMenuPos,
    closeCtxMenus,
    cellsGroup,
    vertexSelectEl,
    edgeSelectEl,
    selectedAreaSelectEl,
    vertexSelectConfirm,
    edgeSelectConfirm,
    areaSelectConfirm,
    printGraph,
    selectedArea,
  };
}
/**
 * 要先生成Edge，再生成Vertex，這樣Vertex才可以把LINK蓋住
 */
function fromJSON(graph: GraphJSON) {
  const vertices = graph.vertices.map((vertex) =>
    createElement(Components.vertices[vertex.name], {
      key: vertex.id,
      ...vertex,
    })
  );
  const edges = graph.edges.map((edge) => {
    if (pointerDownVertex?.edges.includes(edge.id)) {
      if (edge.startId === pointerDownVertex.id) {
        edge.start = pointerDownVertex.position;
      } else if (edge.endId === pointerDownVertex.id) {
        edge.end = pointerDownVertex.position;
      }
    }
    return createElement(Components.edges[edge.name], {
      key: edge.id,
      ...edge,
    });
  });
  return [...edges, ...vertices];
}
