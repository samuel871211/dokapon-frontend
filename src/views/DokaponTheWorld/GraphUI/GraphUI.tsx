// Related third party imports.
import {
  PointerEvent,
  useState,
  WheelEvent,
  createElement,
  useMemo,
  MouseEvent,
  useContext,
} from "react";

// Local application/library specific imports.
import type { Vertex, GraphJSON } from "global";
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
import GraphDSA from "graphics/GraphDSA";
import { gameProgressCtx } from "reducers/gameProgress";
import styles from "./GraphUI.module.css";

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
let isPointerDown = false;

/**
 * 從curGraph取得該vertex or edge以及index，並且後續更新屬性也不用再遍歷array
 */
let pointerDownVertex: Vertex;

/**
 * 背景點點的間隔
 */
const gridSize = 20;

/**
 * 用來計算滑鼠移動距離的基準點
 */
const pointerDownPage = { x: -1, y: -1 };

/**
 * 紀錄SVG偏移的基準點，之後再加上滑鼠移動距離，就會是最新的偏移量
 */
const pointerDownTranslate = { x: -1, y: -1 };
/**
 * @todo 根據目前玩家所在的地圖，讀取不同地圖檔案
 */
const graphDSA = new GraphDSA(dokaponTheWorldMap);

export default GraphUI;

function GraphUI() {
  const {
    handlePointerOver,
    handleDoubleClick,
    handlePointerDown,
    handleWheel,
    SVGScale,
    SVGTranslate,
    Cells,
    PlayersChess,
    HighLights,
  } = useMetaData();
  return (
    <div className={styles.graphUIcontainer}>
      <svg
        style={{
          backgroundSize: `${gridSize * SVGScale}px ${gridSize * SVGScale}px`,
          backgroundPosition: `${
            gridSize * SVGScale * -0.5 + SVGTranslate.x
          }px ${gridSize * SVGScale * -0.5 + SVGTranslate.y}px`,
        }}
        className={styles.svg}
        onPointerDown={handlePointerDown}
        onWheel={handleWheel}
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
          transform={`matrix(${SVGScale}, 0, 0, ${SVGScale}, ${SVGTranslate.x}, ${SVGTranslate.y})`}
        >
          {Cells}
          {PlayersChess}
          {HighLights}
        </g>
      </svg>
    </div>
  );
}

function useMetaData() {
  const [curGraph, setCurGraph] = useState(dokaponTheWorldMap);
  const [SVGScale, setSVGScale] = useState(1);
  const [SVGTranslate, setSVGTranslate] = useState({ x: 0, y: 0 });
  const { gameProgress, setGameProgress } = useContext(gameProgressCtx);
  const { DokaponTheWorldState, playersAttrs, currentPlayerIdx } = gameProgress;
  const { curComponents, CheckState } = DokaponTheWorldState;
  const curPlayer = playersAttrs[currentPlayerIdx];
  const currPlayerVertexId = curGraph.vertices[curPlayer.currentVertexIdx].id;
  const Cells = useMemo(() => renderCells(curGraph), [curGraph]);
  const resultDSA = useMemo(
    () => graphDSA.getAllPaths(currPlayerVertexId, 30),
    [currPlayerVertexId]
  );
  const HighLights = useMemo(
    () =>
      resultDSA.endPositions.map((position, index) => (
        <rect
          key={index}
          width="100"
          height="100"
          x={position.x - 50}
          y={position.y - 50}
          fill="none"
          stroke="#99e3b7"
          strokeWidth="5"
        />
      )),
    [resultDSA]
  );
  const PlayersChess = playersAttrs.map((playerAttrs, idx) => (
    <PlayerChess
      key={idx}
      id={curGraph.vertices[playerAttrs.currentVertexIdx].id}
      position={curGraph.vertices[playerAttrs.currentVertexIdx].position}
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
    const curPlayerVertex = curGraph.vertices[curPlayer.currentVertexIdx];
    const distance = graphDSA.calMinDistanceTo(vertex.id);
    CheckState.curHoverVertexDistance = distance;
    CheckState.showVertexNameAndDistance = true;
    CheckState.curHoverVertexName = vertex.name;
    setGameProgress({ ...gameProgress });
  }
  /**
   * @todo click on enemy
   * @todo click on monster
   * @todo 釐清 集金 跟 全集金 的差別
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
        curGraph.vertices[playerAttrs.currentVertexIdx] === vertex &&
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
  function handlePointerDown(e: PointerEvent<SVGSVGElement>) {
    if (e.button !== 0) return;
    isPointerDown = true;
    pointerDownPage.x = e.pageX;
    pointerDownPage.y = e.pageY;
    pointerDownTranslate.x = SVGTranslate.x;
    pointerDownTranslate.y = SVGTranslate.y;
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  }
  function handlePointerMove(e: globalThis.PointerEvent) {
    if (!isPointerDown) return;

    // 關閉`checkTip`跟`minimap`
    if (CheckState.showCheckTip) {
      CheckState.showCheckTip = false;
      setGameProgress({ ...gameProgress });
    }

    // 計算SVG偏移量
    const { pageX, pageY } = e;
    const { x: anchorX, y: anchorY } = pointerDownTranslate;
    const deltaX = pageX - pointerDownPage.x;
    const deltaY = pageY - pointerDownPage.y;
    const newX = parseInt((anchorX + deltaX).toFixed(0));
    const newY = parseInt((anchorY + deltaY).toFixed(0));
    if (newX === SVGTranslate.x && newY === SVGTranslate.y) return;
    setSVGTranslate({ x: newX, y: newY });
  }
  function handlePointerUp(e: globalThis.PointerEvent) {
    isPointerDown = false;
    setCurGraph({ ...curGraph });
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
    CheckState.showCheckTip = true;
    setGameProgress({ ...gameProgress });
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
  return {
    handlePointerOver,
    handleDoubleClick,
    handlePointerDown,
    handleWheel,
    SVGScale,
    SVGTranslate,
    Cells,
    PlayersChess,
    HighLights,
  };
}
