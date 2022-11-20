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
import type { Vertex, Edge } from "global";
import dokaponTheWorld from "data/maps/dokaponTheWorld";
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
import styles from "./GraphUI.module.css";
import { gameProgressCtx } from "reducers/gameProgress";

// Stateless vars declare
/**
 * 要先生成Edge，再生成Vertex，這樣Vertex才可以把LINK蓋住
 */
function renderCells(graph: { vertices: Vertex[]; edges: Edge[] }) {
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
        </g>
      </svg>
    </div>
  );
}

function useMetaData() {
  const [curGraph, setCurGraph] = useState(dokaponTheWorld);
  const [SVGScale, setSVGScale] = useState(1);
  const [SVGTranslate, setSVGTranslate] = useState({ x: 0, y: 0 });
  const { gameProgress, setGameProgress } = useContext(gameProgressCtx);
  const { DokaponTheWorldState, playersAttrs } = gameProgress;
  const Cells = useMemo(() => renderCells(curGraph), [curGraph]);
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
  // const Player1Chess = useMemo(
  //   ,
  //   [
  //     playersAttrs[0].currentVertexIdx,
  //     playersAttrs[0].job,
  //     playersAttrs[0].gender,
  //     playersAttrs[0].color
  //   ]
  // );
  // const Player2Chess = useMemo(() => <></>, [playersAttrs[1].currentVertexIdx]);
  // const Player3Chess = useMemo(() => <></>, [playersAttrs[2].currentVertexIdx]);
  // const Player4Chess = useMemo(() => <></>, [playersAttrs[3].currentVertexIdx]);

  function handlePointerOver(e: PointerEvent<SVGSVGElement>) {
    if (!(e.target instanceof SVGCircleElement)) {
      DokaponTheWorldState.showVertexAttrsAndDistance = false;
      setGameProgress({ ...gameProgress });
      return;
    }

    const vertexId = e.target.parentElement?.id;
    const vertex = curGraph.vertices.find((item) => item.id === vertexId);
    if (!vertex) return console.error("no pointer over vertex");

    DokaponTheWorldState.showVertexAttrsAndDistance = true;
    setGameProgress({ ...gameProgress });
  }
  /**
   * @todo 除了要處理點擊到vertex，還要處理點擊到monster或player
   */
  function handleDoubleClick(e: MouseEvent<SVGSVGElement>) {
    if (!(e.target instanceof SVGCircleElement)) return;

    const vertexId = e.target.parentElement?.id;
    const vertex = curGraph.vertices.find((item) => item.id === vertexId);
    if (!vertex) return console.error("no pointer over vertex");

    DokaponTheWorldState.curClickVertex = vertex;
    switch (vertex.name) {
      case "BattleField":
        DokaponTheWorldState.curComponents = ["BattleFieldCheck"];
        break;
      case "KeyTreasureField":
        DokaponTheWorldState.curComponents = ["TreasureFieldCheck"];
        break;
      case "MagicBookField":
        DokaponTheWorldState.curComponents = ["MagicBookFieldCheck"];
        break;
      case "RedTreasureField":
        DokaponTheWorldState.curComponents = ["RedTreasureFieldCheck"];
        break;
      case "TreasureField":
        DokaponTheWorldState.curComponents = ["TreasureFieldCheck"];
        break;
      case "WhiteTreasureField":
        DokaponTheWorldState.curComponents = ["WhiteTreasureFieldCheck"];
        break;
      case "WorldTransferField":
        DokaponTheWorldState.curComponents = ["WorldTransferFieldCheck"];
        break;
      case "GoldTreasureField":
        DokaponTheWorldState.curComponents = ["GoldTreasureFieldCheck"];
        break;
      case "DamageField":
        DokaponTheWorldState.curComponents = ["DamageFieldCheck"];
        break;
      case "CollectAllMoneyField":
        DokaponTheWorldState.curComponents = ["CollectMoneyFieldCheck"];
        break;
      case "CollectMoneyField":
        DokaponTheWorldState.curComponents = ["CollectMoneyFieldCheck"];
        break;
      case "CaveField":
        DokaponTheWorldState.curComponents = ["CastleFieldCheck"];
        break;
      case "VillageField":
        DokaponTheWorldState.curComponents = ["VillageFieldCheck"];
        break;
      case "CastleField":
        DokaponTheWorldState.curComponents = ["CastleFieldCheck"];
        break;
      case "ChruchField":
        DokaponTheWorldState.curComponents = ["ChurchFieldCheck"];
        break;
      case "GroceryStoreField":
        DokaponTheWorldState.curComponents = ["GroceryStoreFieldCheck"];
        break;
      case "JobStoreField":
        DokaponTheWorldState.curComponents = ["JobStoreFieldCheck"];
        break;
      case "MagicStoreField":
        DokaponTheWorldState.curComponents = ["MagicStoreFieldCheck"];
        break;
      case "WeaponStoreField":
        DokaponTheWorldState.curComponents = ["WeaponStoreFieldCheck"];
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
    DokaponTheWorldState.showCheckTip = false;
    setGameProgress({ ...gameProgress });
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  }
  function handlePointerMove(e: globalThis.PointerEvent) {
    if (!isPointerDown) return;
    const { pageX, pageY } = e;
    const { x: anchorX, y: anchorY } = pointerDownTranslate;
    const deltaX = pageX - pointerDownPage.x;
    const deltaY = pageY - pointerDownPage.y;
    const newX = parseInt((anchorX + deltaX).toFixed(0));
    const newY = parseInt((anchorY + deltaY).toFixed(0));
    if (newX === SVGTranslate.x && newY === SVGTranslate.y) return;
    setSVGTranslate({ x: newX, y: newY });
    return;
  }
  function handlePointerUp(e: globalThis.PointerEvent) {
    isPointerDown = false;
    setCurGraph({ ...curGraph });
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
    DokaponTheWorldState.showCheckTip = true;
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
  };
}
