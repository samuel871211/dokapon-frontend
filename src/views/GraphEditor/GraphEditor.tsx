// Standard library imports.

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
} from "global";
// import mainWorld from 'graphics/mainWorld';
// import asiaCave from "graphics/asiaCave";
// import europeCave from "graphics/europeCave";
// import europeCaveHall from "graphics/europeCaveHall";
// import europeCaveLibrary from 'graphics/europeCaveLibrary';
// import europeCaveCanteen from "graphics/europeCaveCanteen";
// import africaCave from 'graphics/africaCave';
// import northAmericaCave from 'graphics/northAmericaCave';
// import hawaiianIslandsCave from 'graphics/hawaiianIslandsCave';
// import africaCaveB2 from 'graphics/africaCaveB2';
// import northAmericaCaveB2 from 'graphics/northAmericaCaveB2';
// import hawaiianIslandsCaveB2Left from 'graphics/hawaiianIslandsCaveB2Left';
// import hawaiianIslandsCaveB2Center from 'graphics/hawaiianIslandsCaveB2Center';
// import hawaiianIslandsCaveB2Right from 'graphics/hawaiianIslandsCaveB2Right';
// import hawaiianIslandsCaveB3Left from 'graphics/hawaiianIslandsCaveB3Left';
// import hawaiianIslandsCaveB3Center from 'graphics/hawaiianIslandsCaveB3Center';
// import hawaiianIslandsCaveB3Right from "graphics/hawaiianIslandsCaveB3Right";
// import africaCaveB3Left from "graphics/africaCaveB3Left";
// import southAmericaCave from 'graphics/southAmericaCave';
// import southAmericaCaveB2 from 'graphics/southAmericaCaveB2';
import southAmericaCaveB3 from "graphics/southAmericaCaveB3";
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
import MagicField from "components/vertices/MagicField";
import BattleField from "components/vertices/BattleField";
import DamageField from "components/vertices/DamageField";
import styles from "./GraphEditor.module.css";

// Stateless vars declare
type MouseMode = "edit" | "drag";
const directions: Directions[] = ["top", "left", "right", "bottom"];

// ??????cell.name mapping???react component???mapping table
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

// ?????????pointerDown???pointerMove?????????????????????
let isPointerDown = false;

// ???????????????????????????edge?????????
let isPointerDownOnVertex = false;
let isPointerDownOnBlank = false;
let isPointerDownOnSelectedArea = false;

// ???curGraph?????????vertex or edge??????index?????????????????????????????????????????????array
let pointerDownVertex: Vertex;
let pointerDownEdge: Edge;
let pointerDownVertexIdx = -1;
let pointerDownEdgeIdx = -1;

// ?????????????????????
const gridSize = 20;

// ??????????????????????????????????????????
const pointerDownOffset = { x: -1, y: -1 };

// ??????SVG????????????????????????????????????????????????????????????????????????????????????
const pointerDownTranslate = { x: -1, y: -1 };

// ???????????????vertex????????????????????????????????????????????????????????????????????????????????????
const pointerDownVertexTranslate = { x: -1, y: -1 };

// ???????????????selectedArea??????????????????????????????????????????????????????
const pointerDownSelectedAreaTranslate = { x: -1, y: -1 };

// ????????????JS????????????DOM??????????????????pointerMove????????????edges
const pointerDownRelatedEdges: Edge[] = [];

// ???????????????vertices???????????????
const selectedVertices: Vertex[] = [];
const selectedVerticesGroupOffsets: Position[] = [];

// graph????????????????????????????????????????????????????????????
const graphDSA = new GraphDSA(southAmericaCaveB3);

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
        <button onClick={() => printGraph()}>??????</button>
        <select onChange={(e) => toggleMouseMode(e.target.value as MouseMode)}>
          <option value="edit">??????</option>
          <option value="drag">??????</option>
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
                <option value="top,TwoWayVEdge">???&#8593;</option>
                <option value="top,OneWayVEdge">???&#8593;</option>
              </optgroup>
              <optgroup
                label="left"
                disabled={Boolean(pointerDownVertex?.left)}
              >
                <option value="left,TwoWayHEdge">???&#8592;</option>
                <option value="left,OneWayHEdge">???&#8592;</option>
              </optgroup>
              <optgroup
                label="right"
                disabled={Boolean(pointerDownVertex?.right)}
              >
                <option value="right,TwoWayHEdge">???&#8594;</option>
                <option value="right,OneWayHEdge">???&#8594;</option>
              </optgroup>
              <optgroup
                label="bottom"
                disabled={Boolean(pointerDownVertex?.bottom)}
              >
                <option value="bottom,TwoWayVEdge">???&#8595;</option>
                <option value="bottom,OneWayVEdge">???&#8595;</option>
              </optgroup>
              <option value="delete">??????</option>
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
                {/* ???????????? */}
                <option value="BattleField">??????</option>
                {/* Special */}
                {/* <option value="VillageField">??????</option> */}
                <option value="CaveField">??????</option>
                {/* <option value="ChruchField">??????</option> */}
                <option value="GroceryStoreField">?????????</option>
                <option value="WeaponStoreField">?????????</option>
                <option value="JobStoreField">?????????</option>
                <option value="MagicStoreField">?????????</option>
                {/* <option value="WorldTransferField">????????????</option> */}
                <option value="DamageField">??????</option>
                {/* ???????????? */}
                <option value="CollectMoneyField">??????</option>
                <option value="CollectAllMoneyField">??????(???)</option>
                {/* ???????????? */}
                <option value="TreasureField">????????????</option>
                <option value="MagicField">????????????</option>
                <option value="GoldTreasureField">????????????</option>
                <option value="WhiteTreasureField">????????????</option>
                <option value="RedTreasureField">????????????</option>
                <option value="KeyTreasureField">????????????</option>
                {/* ???????????? */}
                {/* <option value="CastleField">??????</option> */}
                <option value="reconnect">??????</option>
              </optgroup>
              <option value="delete">??????</option>
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
                <option value="AsiaCave">????????????</option>
                <option value="Europe">??????</option>
                <option value="Russia">?????????</option>
                <option value="NorthAmerica">?????????</option>
                <option value="SouthAmerica">?????????</option>
                <option value="Oceania">?????????</option>
                <option value="Africa">??????</option>
                <option value="Arctic">?????????</option>
                <option value="Antarctica">?????????</option>
                <option value="HawaiianIslands">???????????????</option>
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
  const [curGraph, setCurGraph] = useState(southAmericaCaveB3);
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

    // ??????????????????JS??????DOM????????????????????????cells?????????
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
   * ?????????moveVertexAndConnectedEdges?????????
   *
   * ???????????????JS??????DOM?????????vertex???edge???position
   *
   * ??????????????????curGraph.vertices???curGraph.edges???position
   *
   * ??????pointerUp??????????????????setState?????????react????????????
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
   * vertex.position???vertex????????????
   *
   * ??????x?????????1/2???width???y?????????1/2???height
   *
   * ?????????????????????????????????
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
   * deltaY = -150 | 150?????????????????????(??????)?????????(??????)
   * ????????????????????????scrollBar??????????????????ctrl + wheel????????????????????????????????????
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
   * ????????????pointerDown????????????contextMenu
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
   * ???????????????4???edge + 4???vertex
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
   * ???????????????2???vertex
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
      // 1. ??????startVertex[direction] === endVertex[direction]?????????direction
      // 2. ??????(startVertex.edges???endVertex.edges)??????pointerDownEdge.id???????????????
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
      // 1. ??????startVertex.edges??????pointerDownEdge.id???????????????
      if (!startVertex) return console.error("invalid vertex");
      const sIdx = startVertex.edges.indexOf(pointerDownEdge.id);
      if (sIdx === -1) return console.error("invalid vertex");
      startVertex.edges.splice(sIdx, 1);
      // 2. ??????startVertex[direction] = pointerDownEdge.id?????????direction
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
      // 1. ??????endVertex.edges??????pointerDownEdge.id???????????????
      if (!endVertex) return console.error("invalid vertex");
      const eIdx = endVertex.edges.indexOf(pointerDownEdge.id);
      if (eIdx === -1) return console.error("invalid vertex");
      endVertex.edges.splice(eIdx, 1);
      // 2. ??????endVertex[direction] = pointerDownEdge.id?????????direction
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
   * ???????????????2???vertex
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
   * ???????????????2???vertex
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
 * ????????????Edge????????????Vertex?????????Vertex????????????LINK??????
 */
function fromJSON(graph: { vertices: Vertex[]; edges: Edge[] }) {
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
