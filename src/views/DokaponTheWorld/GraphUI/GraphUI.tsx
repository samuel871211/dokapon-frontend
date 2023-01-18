// Related third party imports.
import { createElement, useMemo, useContext } from "react";

// Local application/library specific imports.
import type { GraphJSON } from "global";
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
import gameProgressCtx from "reducers/gameProgress";
import styles from "./GraphUI.module.css";
import areaTypesToMap from "data/areaTypesToMap";
import ids from "../ids";
import BossMonsterChess from "components/BossMonsterChess";

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

export default GraphUI;

function GraphUI() {
  const { SVGTranslate, Cells, PlayersChess, BossMonstersChess } =
    useMetaData();
  return (
    <div className={styles.graphUIcontainer}>
      <svg id={ids.graphSVG} className={styles.graphSVG}>
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
          {BossMonstersChess}
        </g>
      </svg>
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { DokaponTheWorldState, playersAttrs, currentPlayerIdx } = gameProgress;
  const { GraphUIState, bossMonsters } = DokaponTheWorldState;
  const { SVGTranslate } = GraphUIState;
  const curPlayer = playersAttrs[currentPlayerIdx];
  const curGraph = areaTypesToMap[curPlayer.area];
  const Cells = useMemo(() => renderCells(curGraph), [curGraph]);

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
  const BossMonstersChess = useMemo(
    () =>
      bossMonsters.map((bossMonster) => (
        <BossMonsterChess
          key={curGraph.vertices[bossMonster.vertexIdx].id}
          position={curGraph.vertices[bossMonster.vertexIdx].position}
          id={curGraph.vertices[bossMonster.vertexIdx].id}
        />
      )),
    [bossMonsters]
  );

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
  return {
    SVGTranslate,
    Cells,
    PlayersChess,
    BossMonstersChess,
  };
}
