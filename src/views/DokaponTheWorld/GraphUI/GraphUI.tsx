// Related third party imports.
import {
  createElement,
  useMemo,
  useContext,
  useEffect,
  PointerEvent,
  MouseEvent,
} from "react";

// Local application/library specific imports.
import type { GraphJSON, AreaTypes } from "global";
import dokaponTheWorldMap from "data/maps/dokaponTheWorldMap";
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
import PlayerChess from "components/PlayerChess";
import GraphDSA from "utils/GraphDSA";
import gameProgressCtx from "reducers/gameProgress";
import styles from "./GraphUI.module.css";
import areaTypesToMap from "data/areaTypesToMap";
import HighLightVertex from "components/HighLightVertex";
import ids from "../ids";

// Stateless vars declare
/**
 * 要先生成Edge，再生成Vertex，這樣Vertex才可以把Edge蓋住
 */
function renderCells(graph: GraphJSON) {
  const vertices = graph.vertices.map((vertex) =>
    createElement(Components.vertices[vertex.name], {
      key: vertex.id,
      ...vertex,
    })
  );
  const edges = graph.edges.map((edge) =>
    createElement(Components.edges[edge.name], {
      key: edge.id,
      ...edge,
    })
  );
  return [...edges, ...vertices];
}
/**
 * 透過cell.name mapping到react component的mapping table
 */
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
/**
 * 要先有pointerDown，pointerMove的動作才會成立
 */
// const isPointerDown = false;
/**
 * 背景點點的間隔
 */
// const gridSize = 20;
/**
 * 用來計算滑鼠移動距離的基準點
 */
// const pointerDownPage = { x: -1, y: -1 };
/**
 * 紀錄SVG偏移的基準點，之後再加上滑鼠移動距離，就會是最新的偏移量
 */
// const pointerDownTranslate = { x: -1, y: -1 };
/**
 * 預設未載入的`GraphDSA`，後續玩家進入該地圖才會載入
 */
const emptyGraphDSA = {};
const dokaponTheWorldMapGraphDSA = new GraphDSA(dokaponTheWorldMap);
/**
 * 僅先載入主地圖，其餘地圖等玩家有進入再載入
 */
const GraphDSAs: { [key in AreaTypes]: GraphDSA } = {
  Asia: dokaponTheWorldMapGraphDSA,
  Europe: dokaponTheWorldMapGraphDSA,
  Russia: dokaponTheWorldMapGraphDSA,
  NorthAmerica: dokaponTheWorldMapGraphDSA,
  SouthAmerica: dokaponTheWorldMapGraphDSA,
  Oceania: dokaponTheWorldMapGraphDSA,
  Africa: dokaponTheWorldMapGraphDSA,
  Arctic: dokaponTheWorldMapGraphDSA,
  Antarctica: dokaponTheWorldMapGraphDSA,
  HawaiianIslands: dokaponTheWorldMapGraphDSA,
  Atlantis: dokaponTheWorldMapGraphDSA,
  //
  AsiaCave: emptyGraphDSA as GraphDSA,
  //
  EuropeCave: emptyGraphDSA as GraphDSA,
  EuropeCaveLibrary: emptyGraphDSA as GraphDSA,
  EuropeCaveCanteen: emptyGraphDSA as GraphDSA,
  EuropeCaveHall: emptyGraphDSA as GraphDSA,
  //
  NorthAmericaCave: emptyGraphDSA as GraphDSA,
  NorthAmericaCaveB2: emptyGraphDSA as GraphDSA,
  //
  SouthAmericaCave: emptyGraphDSA as GraphDSA,
  SouthAmericaCaveB2: emptyGraphDSA as GraphDSA,
  SouthAmericaCaveB3: emptyGraphDSA as GraphDSA,
  //
  OceaniaCave: emptyGraphDSA as GraphDSA,
  OceaniaCaveB1: emptyGraphDSA as GraphDSA,
  OceaniaCaveB2: emptyGraphDSA as GraphDSA,
  //
  AfricaCave: emptyGraphDSA as GraphDSA,
  AfricaCaveB2: emptyGraphDSA as GraphDSA,
  AfricaCaveB3Right: emptyGraphDSA as GraphDSA,
  AfricaCaveB3Left: emptyGraphDSA as GraphDSA,
  AfricaCaveB3Center: emptyGraphDSA as GraphDSA,
  //
  ArcticCave: emptyGraphDSA as GraphDSA,
  ArcticCaveB2: emptyGraphDSA as GraphDSA,
  ArcticCaveB3: emptyGraphDSA as GraphDSA,
  //
  AntarcticaCave: emptyGraphDSA as GraphDSA,
  AntarcticaCaveB2: emptyGraphDSA as GraphDSA,
  AntarcticaCaveB3: emptyGraphDSA as GraphDSA,
  //
  HawaiianIslandsCave: emptyGraphDSA as GraphDSA,
  HawaiianIslandsCaveB2Right: emptyGraphDSA as GraphDSA,
  HawaiianIslandsCaveB2Left: emptyGraphDSA as GraphDSA,
  HawaiianIslandsCaveB2Center: emptyGraphDSA as GraphDSA,
  HawaiianIslandsCaveB3Right: emptyGraphDSA as GraphDSA,
  HawaiianIslandsCaveB3Left: emptyGraphDSA as GraphDSA,
  HawaiianIslandsCaveB3Center: emptyGraphDSA as GraphDSA,
  //
  BetweenDimensions: emptyGraphDSA as GraphDSA,
};

export default GraphUI;

function GraphUI() {
  const {
    handlePointerOver,
    handleDoubleClick,
    // handlePointerDown,
    // handleWheel,
    // SVGScale,
    SVGTranslate,
    Cells,
    PlayersChess,
    // HighLights,
  } = useMetaData();
  return (
    <div className={styles.graphUIcontainer}>
      {/* <div className={styles.centeredCircle}></div> */}
      <svg
        id={ids.graphSVG}
        className={styles.graphSVG}
        // onWheel={handleWheel}
        // onPointerDown={handlePointerDown}
        onDoubleClick={handleDoubleClick}
        onPointerOver={handlePointerOver}
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
          id={ids.cellsGroup}
          transform={`translate(${SVGTranslate.x}, ${SVGTranslate.y})`}
        >
          {Cells}
          {PlayersChess}
          {/* {HighLights} */}
        </g>
      </svg>
      {/* <div className={styles.centeredCircle}></div> */}
    </div>
  );
}

/**
 * @todo 當玩家座標or變動，重新計算30個點的所有路徑
 */
function useMetaData() {
  const { gameProgress, setGameProgress } = useContext(gameProgressCtx);
  const { DokaponTheWorldState, playersAttrs, currentPlayerIdx } = gameProgress;
  const { GraphUIState, CheckState, curComponents } = DokaponTheWorldState;
  const { SVGTranslate } = GraphUIState;
  const showHighLight = true;
  const curPlayer = playersAttrs[currentPlayerIdx];
  const curGraph = areaTypesToMap[curPlayer.area];
  const curPlayerVertexId = curGraph.vertices[curPlayer.vertexIdx].id;
  const Cells = useMemo(() => renderCells(curGraph), [curGraph]);

  useEffect(() => {
    const area = curPlayer.area;
    // 被動載入新地圖
    if (GraphDSAs[area] === emptyGraphDSA) {
      GraphDSAs[area] = new GraphDSA(areaTypesToMap[area]);
    }
    // @todo 計算30步
    GraphDSAs[area].getAllPaths(curPlayerVertexId, 30);

    // @todo HighLight不用做啊
  }, [curPlayer.area, curPlayerVertexId]);
  // const resultDSA = useMemo(
  //   () => dokaponTheWorldMapGraphDSA.getAllPaths(curPlayerVertexId, 30),
  //   [curPlayerVertexId]
  // );
  // const HighLights = useMemo(
  //   () =>
  //     resultDSA.endPositions.map((position, index) => (
  //       <HighLightVertex key={index} position={position} show={showHighLight} />
  //     )),
  //   [resultDSA.endPositions, showHighLight]
  // );
  const PlayersChess = playersAttrs.map((playerAttrs, idx) => (
    <PlayerChess
      key={idx}
      id={curGraph.vertices[playerAttrs.vertexIdx].id}
      position={curGraph.vertices[playerAttrs.vertexIdx].position}
      job={playerAttrs.job}
      gender={playerAttrs.gender}
      color={playerAttrs.color}
    />
  ));

  /**
   * `vertex.name`要轉成日文，要做一個mapping table
   */
  function handlePointerOver(e: PointerEvent<SVGSVGElement>) {
    if (
      !(e.target instanceof SVGCircleElement) &&
      !(e.target instanceof SVGImageElement)
    ) {
      CheckState.showVertexNameAndDistance = false;
      setGameProgress({ ...gameProgress });
      return;
    }

    // get vertex id from <g> attribute
    const isClickOnVertex = e.target instanceof SVGCircleElement;
    const vertexId = isClickOnVertex
      ? e.target.parentElement?.id
      : e.target.parentElement?.getAttribute("data-vertex-id");
    if (!vertexId) return console.error("no vertexId");

    // get vertex from `curGraph.vertices`
    const vertex = curGraph.vertices.find((item) => item.id === vertexId);
    if (!vertex) return console.error("no clicked vertex");

    // show Vertex Name And Distance
    const curPlayerVertex = curGraph.vertices[curPlayer.vertexIdx];
    const distance = dokaponTheWorldMapGraphDSA.calMinDistanceTo(vertex.id);
    CheckState.curHoverVertexDistance = distance;
    CheckState.showVertexNameAndDistance = true;
    CheckState.curHoverVertexName = vertex.name;
    setGameProgress({ ...gameProgress });
  }
  /**
   * @todo click on enemy
   * @todo click on monster
   * @todo 釐清 集金 跟 全集金 的差別
   * @todo 改成 圈圈的keyUp
   */
  function handleDoubleClick(e: MouseEvent<SVGSVGElement>) {
    if (
      !(e.target instanceof SVGImageElement) &&
      !(e.target instanceof SVGCircleElement)
    ) {
      return;
    }

    // get vertex id from <g> attribute
    const isClickOnVertex = e.target instanceof SVGCircleElement;
    const vertexId = isClickOnVertex
      ? e.target.parentElement?.id
      : e.target.parentElement?.getAttribute("data-vertex-id");
    if (!vertexId) return console.error("no vertexId");

    // get vertex from `curGraph.vertices`
    const vertex = curGraph.vertices.find((item) => item.id === vertexId);
    if (!vertex) return console.error("no clicked vertex");

    // reset `curComponents` and close `showVertexNameAndDistance`
    CheckState.showVertexNameAndDistance = false;
    curComponents.length = 0;

    // check if player (self excluded), enemy or monster is clicked
    const clickedPlayers = playersAttrs.filter(
      (playerAttrs) =>
        curGraph.vertices[playerAttrs.vertexIdx] === vertex &&
        playerAttrs !== curPlayer
    );
    const clickedEnemies = [];
    const clickedMonsters = [];
    const totalClickedCharactersCount =
      clickedPlayers.length + clickedEnemies.length + clickedMonsters.length;
    if (totalClickedCharactersCount === 1) {
      curComponents.push("PlayerVsCharacterDialogs");
    } else if (totalClickedCharactersCount > 1) {
      curComponents.push("SelectCharacterToCompare");
    }

    // handle click on vertex
    DokaponTheWorldState.curClickVertex = vertex;
    switch (vertex.name) {
      case "BattleField":
        curComponents.push("BattleFieldCheck");
        break;
      case "KeyTreasureField":
        curComponents.push("TreasureFieldCheck");
        break;
      case "MagicBookField":
        curComponents.push("MagicBookFieldCheck");
        break;
      case "RedTreasureField":
        curComponents.push("RedTreasureFieldCheck");
        break;
      case "TreasureField":
        curComponents.push("TreasureFieldCheck");
        break;
      case "WhiteTreasureField":
        curComponents.push("WhiteTreasureFieldCheck");
        break;
      case "WorldTransferField":
        curComponents.push("WorldTransferFieldCheck");
        break;
      case "GoldTreasureField":
        curComponents.push("GoldTreasureFieldCheck");
        break;
      case "DamageField":
        curComponents.push("DamageFieldCheck");
        break;
      case "CollectAllMoneyField":
        curComponents.push("BeforeCollectMoneyFieldCheck");
        break;
      case "CollectMoneyField":
        curComponents.push("BeforeCollectMoneyFieldCheck");
        break;
      case "CaveField":
        curComponents.push("CastleFieldCheck");
        break;
      case "VillageField":
        curComponents.push("VillageFieldCheck");
        break;
      case "CastleField":
        curComponents.push("CastleFieldCheck");
        break;
      case "ChruchField":
        curComponents.push("ChurchFieldCheck");
        break;
      case "GroceryStoreField":
        curComponents.push("GroceryStoreFieldCheck");
        break;
      case "JobStoreField":
        curComponents.push("JobStoreFieldCheck");
        break;
      case "MagicStoreField":
        curComponents.push("MagicStoreFieldCheck");
        break;
      case "WeaponStoreField":
        curComponents.push("WeaponStoreFieldCheck");
        break;
      default:
        // 滑鼠hover上去`name`，型別應該要是`never`，才代表所有case都有涵蓋到
        vertex.name;
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  /**
   * POINTERDOWN註冊在SVG ELEMENT身上
   *
   * 但是POINTERMOVE跟POINTERUP會註冊在WINDOW
   *
   * 這樣當滑鼠跳離視窗的時候，也可以持續偵測POINTERDOWN事件
   *
   * 並且不會因為遊戲的其他小視窗蓋上地圖上，中斷POINTERMOVE
   */
  // function handlePointerDown(e: PointerEvent<SVGSVGElement>) {
  //   if (e.button !== 0) return;
  //   isPointerDown = true;
  //   pointerDownPage.x = e.pageX;
  //   pointerDownPage.y = e.pageY;
  //   pointerDownTranslate.x = SVGTranslate.x;
  //   pointerDownTranslate.y = SVGTranslate.y;
  //   window.addEventListener("pointermove", handlePointerMove);
  //   window.addEventListener("pointerup", handlePointerUp);
  // }
  // function handlePointerMove(e: globalThis.PointerEvent) {
  //   if (!isPointerDown) return;

  //   // 關閉`checkTip`跟`minimap`
  //   if (CheckState.showCheckTip) {
  //     CheckState.showCheckTip = false;
  //     setGameProgress({ ...gameProgress });
  //   }

  //   // 計算SVG偏移量
  //   const { pageX, pageY } = e;
  //   const { x: anchorX, y: anchorY } = pointerDownTranslate;
  //   const deltaX = pageX - pointerDownPage.x;
  //   const deltaY = pageY - pointerDownPage.y;
  //   const newX = parseInt((anchorX + deltaX).toFixed(0));
  //   const newY = parseInt((anchorY + deltaY).toFixed(0));
  //   if (newX === SVGTranslate.x && newY === SVGTranslate.y) return;
  //   GraphUIState.SVGTranslate = { x: newX, y: newY };
  //   setGameProgress({ ...gameProgress });
  // }
  // function handlePointerUp(e: globalThis.PointerEvent) {
  //   isPointerDown = false;
  //   window.removeEventListener("pointermove", handlePointerMove);
  //   window.removeEventListener("pointerup", handlePointerUp);
  //   CheckState.showCheckTip = true;
  //   setGameProgress({ ...gameProgress });
  // }

  /**
   * deltaY = -150 | 150，分別代表上滾(放大)跟下滾(縮小)
   * 因為這個頁面沒有scrollBar，所以不需要ctrl + wheel來區別一般滾動跟放大縮小
   */
  // function handleWheel(e: WheelEvent<SVGSVGElement>) {
  //   const delta = e.deltaY < 0 ? 0.1 : -0.1;
  //   const oldScale = SVGScale;
  //   const { x, y } = SVGTranslate;
  //   const { offsetX, offsetY } = e.nativeEvent;
  //   const newScale = parseFloat((oldScale + delta).toFixed(1));
  //   const originOffsetXBasedOnSVG = (offsetX - x) / oldScale;
  //   const originOffsetYBasedOnSVG = (offsetY - y) / oldScale;
  //   const newX = parseInt((x - originOffsetXBasedOnSVG * delta).toFixed(0));
  //   const newY = parseInt((y - originOffsetYBasedOnSVG * delta).toFixed(0));
  //   if (newScale > 9.9 || newScale < 0.1) return;
  //   if (newX === SVGTranslate.x && newY === SVGTranslate.y) return;
  //   GraphUIState.SVGScale = newScale;
  //   GraphUIState.SVGTranslate = { x: newX, y: newY };
  //   setGameProgress({ ...gameProgress });
  // }
  return {
    handlePointerOver,
    handleDoubleClick,
    // handlePointerDown,
    // handleWheel,
    // SVGScale,
    SVGTranslate,
    Cells,
    PlayersChess,
    // HighLights,
  };
}
