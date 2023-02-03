// Related third party imports.
import { useEffect, useContext, KeyboardEvent, useRef, useState } from "react";

// Local application/library specific imports.
import styles from "./DokaponTheWorld.module.css";
import Drawer from "./Drawer";
import Roulette from "./Roulette";
import Bag from "./Bag";
import Check from "./Check";
import OverviewMap from "./OverviewMap";
import Data from "./Data";
import UseFieldSpeciality from "./UseFieldSpeciality";
import GroceryStoreFieldCheck from "./Check/GroceryStoreFieldCheck";
import GraphUI from "views/DokaponTheWorld/GraphUI";
import WeaponStoreFieldCheck from "./Check/WeaponStoreFieldCheck";
import MagicStoreFieldCheck from "./Check/MagicStoreFieldCheck";
import JobStoreFieldCheck from "./Check/JobStoreFieldCheck";
import CastleFieldCheck from "./Check/CastleFieldCheck";
import ChurchFieldCheck from "./Check/ChurchFieldCheck";
import VillageFieldCheck from "./Check/VillageFieldCheck";
import CollectMoneyFieldCheck from "./Check/CollectMoneyFieldCheck";
import OnlyBottomDialogFieldCheck from "./Check/OnlyBottomDialogFieldCheck";
import PlayerVsCharacterDialogs from "./PlayerVsCharacterDialogs";
import gameProgressCtx from "reducers/gameProgress";
import type { DokaponTheWorldComponentTypes, AreaTypes, Vertex } from "global";
import type { TextsKeys } from "data/texts";
import jobs from "data/jobs";
import magicStores from "data/magicStores";
import useTranslation from "hooks/useTranslation";
import ids from "./ids";
import areaTypesToMap from "data/areaTypesToMap";
import GraphDSA from "utils/GraphDSA";
import dokaponTheWorldMap from "data/maps/dokaponTheWorldMap";
import SelectCharacterToCompare from "./SelectCharacterToCompare";
import vertexNameToComponentType from "data/vertexNameToComponentType";

// Stateless vars declare.
const emptyGraphDSA = Object.freeze({});
const level1ToMaxPageIdx: { [key: string]: number } = Object.freeze({
  "02": 1,
  "04": 6,
  "20": 7,
  "21": 5,
  "22": 6,
});
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
/**
 * 使用`window.setInterval`來讓地圖平滑移動
 *
 * 當移動方向改變時，必須先清除上一個interval
 */
let curIntervalId: number;
/**
 * SVG Element的寬度跟高度，會在`window.resize`觸發之後更新
 */
const svgViewBox = { width: 0, height: 0 };
/**
 * G Element的BBox，會在地圖切換的時候更新
 */
const cellsGroupBBox = { x: 0, y: 0, width: 0, height: 0 };

/**
 * @todo 尚未定義 caveFieldCheck的pattern
 */
const bottomDialogSentences: {
  [key in DokaponTheWorldComponentTypes]: TextsKeys[];
} = {
  BattleFieldCheck: ["ザコモンスターとの戦闘や\nイベントが発生するマス。"],
  DamageFieldCheck: [
    "止まると一定量のダメージを受けるマス。\n戦闘やイベントも起こる。",
  ],
  TreasureFieldCheck: ["アイテムを入手できるマス。"],
  MagicBookFieldCheck: ["フィールド魔法を入手できるマス。"],
  GoldTreasureFieldCheck: ["お金を入手できるマス。"],
  KeyTreasureFieldCheck: [
    "魔法のカギを使わないと開かないが、\n貴重な品を入手できるマス。",
  ],
  RedTreasureFieldCheck: [
    "何が起こるか分からない\nハイリスク・ハイリターンの危険なマス。\n止まるからには命を賭けろ!",
  ],
  WhiteTreasureFieldCheck: [
    "普通では手に入らないものを入手できるマス。\nしかし良い物が手に入る確率は2分の1。\n最悪の事態になることも⋯。",
  ],
  WorldTransferFieldCheck: [
    "別のエリアヘワープできるマス。\n有料だが簡単に移動できるので便利。",
  ],
  GraphUI: [],
  Drawer: [],
  OverviewMap: [],
  Bag: [],
  Check: [],
  Roulette: [],
  Data: [],
  UseFieldSpeciality: ["{fieldSpecialityName}を使いますか?"],
  CaveFieldCheck: [],
  BeforeCollectMoneyFieldCheck: [
    "持ち村の内1つから、上納金を集金するか、\nレベルアップさせるかを選べるマス。\n集金すると特産品もいっしょに回収できる。",
  ],
  CastleFieldCheck: [
    "世界の中心、スタートマス。\n集めたお金をここにある世界平和金庫に戻そう!\n全てのステータス異常を無料で回復してくれる。",
  ],
  ChurchFieldCheck: [
    "有料でステータス異常を回復できたり、\n金庫にお金、王様に特産品を送ったりできるマス。\n死んだ時は、最後に立ち寄った教会から復活する。",
  ],
  CollectMoneyFieldCheck: [
    "持ち村の内1つから、上納金を集金するか、\nレベルアップさせるかを選べるマス。\n集金すると特産品もいっしょに回収できる。",
  ],
  GroceryStoreFieldCheck: [
    "アイテムが買えるマス。\n水曜が定休日。\n日曜は特売日。",
  ],
  JobStoreFieldCheck: ["転職ができるマス\n土、日曜が定休日。"],
  MagicStoreFieldCheck: [
    "フィールド魔法や戦闘魔法が買えるマス。\n水曜が定休日。\n日曜は特売日。",
  ],
  VillageFieldCheck: [
    "手に入れると、お金や特産品などがもらえるマス。\n泊まるとHPが全回復する。\nモンスターがいる場合、戦闘になる。",
  ],
  WeaponStoreFieldCheck: [
    "武器や盾が買えるマス。\n水曜が定休日。\n日曜は特売日。",
  ],
  SelectCharacterToCompare: [],
  PlayerVsCharacterDialogs: [],
};
const Components: {
  [key in DokaponTheWorldComponentTypes]: () => JSX.Element;
} = {
  GraphUI: () => <></>,
  Drawer,
  OverviewMap,
  Bag,
  Check,
  Roulette,
  Data,
  UseFieldSpeciality,
  CastleFieldCheck,
  ChurchFieldCheck,
  VillageFieldCheck,
  CollectMoneyFieldCheck,
  GroceryStoreFieldCheck,
  JobStoreFieldCheck,
  MagicStoreFieldCheck,
  WeaponStoreFieldCheck,
  CaveFieldCheck: OnlyBottomDialogFieldCheck,
  BattleFieldCheck: OnlyBottomDialogFieldCheck,
  DamageFieldCheck: OnlyBottomDialogFieldCheck,
  MagicBookFieldCheck: OnlyBottomDialogFieldCheck,
  GoldTreasureFieldCheck: OnlyBottomDialogFieldCheck,
  KeyTreasureFieldCheck: OnlyBottomDialogFieldCheck,
  RedTreasureFieldCheck: OnlyBottomDialogFieldCheck,
  TreasureFieldCheck: OnlyBottomDialogFieldCheck,
  WhiteTreasureFieldCheck: OnlyBottomDialogFieldCheck,
  WorldTransferFieldCheck: OnlyBottomDialogFieldCheck,
  BeforeCollectMoneyFieldCheck: OnlyBottomDialogFieldCheck,
  SelectCharacterToCompare,
  PlayerVsCharacterDialogs,
};
function updateCellsGroupBBox() {
  const cellsGroupEl = document.getElementById(ids.cellsGroup);
  if (!(cellsGroupEl instanceof SVGGElement)) return;

  const newCellsGroupBBox = cellsGroupEl.getBBox();
  cellsGroupBBox.x = newCellsGroupBBox.x;
  cellsGroupBBox.y = newCellsGroupBBox.y;
  cellsGroupBBox.width = newCellsGroupBBox.width;
  cellsGroupBBox.height = newCellsGroupBBox.height;
}
function updateSVGViewBox() {
  const graphSVGEl = document.getElementById(ids.graphSVG);
  if (!graphSVGEl) return console.error("no viewEl");

  svgViewBox.width = graphSVGEl.clientWidth;
  svgViewBox.height = graphSVGEl.clientHeight;
}
function windowResizeEffect() {
  window.addEventListener("resize", updateSVGViewBox);
  return () => window.removeEventListener("resize", updateSVGViewBox);
}

export default DokaponTheWorld;

function DokaponTheWorld() {
  const { containerRefEl, handleKeyUp, Component, handleKeyDown } =
    useMetaData();

  return (
    <div
      ref={containerRefEl}
      tabIndex={0}
      onBlur={(e) => e.currentTarget.focus()}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      className={styles.dokaponTheWorldContainer}
    >
      <GraphUI />
      <Component />
    </div>
  );
}

/**
 * @todo 剛開始移動地圖時，右上角的小地圖會有斷層，需要在一開始先更新小地圖的定位
 */
function useMetaData() {
  const { t } = useTranslation();
  const [keyDownArrows, setKeyDownArrows] = useState({
    up: false,
    down: false,
    left: false,
    right: false,
    square: false,
  });
  const containerRefEl = useRef<HTMLDivElement>(null);
  const { gameProgress, setGameProgress } = useContext(gameProgressCtx);
  const {
    DokaponTheWorldState,
    gamePadSetting,
    currentPlayerIdx,
    playersAttrs,
    bottomDialogSentencesQueue,
  } = gameProgress;
  const currentPlayer = playersAttrs[currentPlayerIdx];
  const currentMap = areaTypesToMap[currentPlayer.area];
  const currentPlayerVertex = currentMap.vertices[currentPlayer.vertexIdx];
  const {
    curComponents,
    curClickedCharacters,
    bossMonsters,
    enemies,
    DrawerState,
    GraphUIState,
    BagState,
    RouletteState,
    CheckState,
    DataState,
    GroceryStoreFieldCheckState,
    JobStoreFieldCheckState,
    MagicStoreFieldCheckState,
    WeaponStoreFieldCheckState,
    CollectMoneyFieldCheckState,
    PlayerVsCharacterDialogState,
    SelectCharacterToCompareState,
  } = DokaponTheWorldState;
  const { SVGTranslate } = GraphUIState;
  /**
   * 搖桿的 O, X, 正方形, 三角形
   */
  const mainFourKeys = [
    gamePadSetting.circle,
    gamePadSetting.cross,
    gamePadSetting.triangle,
    gamePadSetting.square,
  ];
  function handleKeyUp(e: KeyboardEvent<HTMLDivElement>) {
    const curComponent = curComponents[0];
    switch (curComponent) {
      case "Drawer":
        return handleKeyUpForDrawer(e);
      case "Bag":
        return handleKeyUpForBag(e);
      case "Roulette":
        return handleKeyUpForRoulette(e);
      case "Check":
        return handleKeyUpForCheck(e);
      case "Data":
        return handleKeyUpForData(e);
      case "OverviewMap":
        return handleKeyUpForOverviewMap(e);
      case "UseFieldSpeciality":
        return handleKeyUpForUseFieldSpeciality(e);
      case "CaveFieldCheck":
      case "BattleFieldCheck":
      case "DamageFieldCheck":
      case "TreasureFieldCheck":
      case "MagicBookFieldCheck":
      case "GoldTreasureFieldCheck":
      case "KeyTreasureFieldCheck":
      case "RedTreasureFieldCheck":
      case "WhiteTreasureFieldCheck":
      case "WorldTransferFieldCheck":
      case "CastleFieldCheck":
      case "ChurchFieldCheck":
      case "VillageFieldCheck":
        return backToCheck(e);
      case "GroceryStoreFieldCheck":
        return handleKeyUpForGroceryStoreFieldCheck(e);
      case "JobStoreFieldCheck":
        return handleKeyUpForJobStoreFieldCheck(e);
      case "MagicStoreFieldCheck":
        return handleKeyUpForMagicStoreFieldCheck(e);
      case "WeaponStoreFieldCheck":
        return handleKeyUpForWeaponStoreFieldCheck(e);
      case "BeforeCollectMoneyFieldCheck":
        return handleKeyUpForBeforeCollectMoneyFieldCheck(e);
      case "CollectMoneyFieldCheck":
        return handleKeyUpForCollectMoneyFieldCheck(e);
      case "PlayerVsCharacterDialogs":
        return handleKeyUpForPlayerVsCharacterDialogs(e);
      case "SelectCharacterToCompare":
        return handleKeyUpForSelectCharacterToCompare(e);
      case "GraphUI":
        return;
      default:
        // 滑鼠hover上去，型別應該要是`never`，才代表所有的case都有涵蓋到
        curComponent;
        return;
    }
  }
  function handleKeyUpForData(e: KeyboardEvent<HTMLDivElement>) {
    const { curLevel } = DataState;
    if (curLevel === 0) return handleKeyUpForDataLevel0(e);
    if (curLevel === 1) return handleKeyUpForDataLevel1(e);
    if (curLevel === 2) return handleKeyUpForDataLevel2(e);
  }
  function handleKeyUpForDataLevel0(e: KeyboardEvent<HTMLDivElement>) {
    const { level0Idx } = DataState;
    const level0MaxIdx = 3;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        DataState.level0Idx = level0Idx === 0 ? level0MaxIdx : level0Idx - 1;
        break;
      case gamePadSetting.arrowDown:
        DataState.level0Idx = level0Idx === level0MaxIdx ? 0 : level0Idx + 1;
        break;
      case gamePadSetting.circle:
        DataState.curLevel = 1;
        break;
      case gamePadSetting.cross:
        DokaponTheWorldState.curComponents = ["Drawer"];
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForDataLevel1(e: KeyboardEvent<HTMLDivElement>) {
    const { level0Idx, level1Idxs, curPage } = DataState;
    const level1Idx = level1Idxs[level0Idx];
    const maxPageIdx = level1ToMaxPageIdx[`${level0Idx}${level1Idx}`];
    const level1MaxIdx = level0Idx === 0 || level0Idx === 1 ? 5 : 2;
    const isDataVillages = level0Idx === 0 && level1Idx === 4;
    const isListOrOptions = level0Idx === 1 || level0Idx === 3;

    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        level1Idxs[level0Idx] = level1Idx === 0 ? level1MaxIdx : level1Idx - 1;
        DataState.curPage = 0;
        break;
      case gamePadSetting.arrowDown:
        level1Idxs[level0Idx] = level1Idx === level1MaxIdx ? 0 : level1Idx + 1;
        DataState.curPage = 0;
        break;
      case gamePadSetting.circle:
        if (isDataVillages || isListOrOptions) {
          DataState.curLevel = 2;
          DataState.curListIdx = 0;
        }
        break;
      case gamePadSetting.cross:
        DataState.curLevel = 0;
        break;
      case gamePadSetting.L1:
      case gamePadSetting.L2:
        if (maxPageIdx === undefined) break;
        DataState.curPage = curPage === 0 ? maxPageIdx : curPage - 1;
        break;
      case gamePadSetting.R1:
      case gamePadSetting.R2:
        if (maxPageIdx === undefined) break;
        DataState.curPage = curPage === maxPageIdx ? 0 : curPage + 1;
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForDataLevel2(e: KeyboardEvent<HTMLDivElement>) {
    const { level0Idx, level1Idxs } = DataState;
    const level1Idx = level1Idxs[level0Idx];
    const levels = `${level0Idx}${level1Idx}`;
    if (levels === "04") return handleKeyUpForDataVillages(e);
    if (levels === "10") return handleKeyUpForListJobs(e);
    if (levels === "11") return handleKeyUpForListMonsters(e);
    if (levels === "12") return handleKeyUpForListWeapons(e);
    if (levels === "13") return handleKeyUpForListShields(e);
    if (levels === "14") return handleKeyUpForListDecorations(e);
    if (levels === "15") return handleKeyUpForListSpecialities(e);
    if (levels === "30") return handleKeyUpForOptionBasic(e);
    if (levels === "31") return handleKeyUpForOptionControll(e);
    if (levels === "32") return handleKeyUpForOptionMode(e);
  }
  function handleKeyUpForDataVillages(e: KeyboardEvent<HTMLDivElement>) {
    const { curPage, curListIdx } = DataState;
    const maxPageIdx = 6;
    const isOceania = curPage === 5;
    const maxListIdx = isOceania ? 4 : 8;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.L1:
      case gamePadSetting.L2:
        DataState.curPage = curPage === 0 ? maxPageIdx : curPage - 1;
        DataState.curListIdx = 0;
        break;
      case gamePadSetting.R1:
      case gamePadSetting.R2:
        DataState.curPage = curPage === maxPageIdx ? 0 : curPage + 1;
        DataState.curListIdx = 0;
        break;
      case gamePadSetting.arrowUp:
        DataState.curListIdx = curListIdx === 0 ? maxListIdx : curListIdx - 1;
        break;
      case gamePadSetting.arrowDown:
        DataState.curListIdx = curListIdx === maxListIdx ? 0 : curListIdx + 1;
        break;
      case gamePadSetting.circle:
        // @todo 畫面切到該村莊，不可移動，只能按circle跟cross
        break;
      case gamePadSetting.cross:
        DataState.curLevel = 1;
        DataState.curListIdx = -1;
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForListJobs(e: KeyboardEvent<HTMLDivElement>) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        break;
      case gamePadSetting.arrowDown:
        break;
      case gamePadSetting.arrowRight:
        break;
      case gamePadSetting.arrowLeft:
        break;
      case gamePadSetting.circle:
        break;
      case gamePadSetting.cross:
        break;
    }
  }
  function handleKeyUpForListMonsters(e: KeyboardEvent<HTMLDivElement>) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        break;
      case gamePadSetting.arrowDown:
        break;
      case gamePadSetting.arrowRight:
        break;
      case gamePadSetting.arrowLeft:
        break;
      case gamePadSetting.circle:
        break;
      case gamePadSetting.cross:
        break;
    }
  }
  function handleKeyUpForListWeapons(e: KeyboardEvent<HTMLDivElement>) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        break;
      case gamePadSetting.arrowDown:
        break;
      case gamePadSetting.arrowRight:
        break;
      case gamePadSetting.arrowLeft:
        break;
      case gamePadSetting.circle:
        break;
      case gamePadSetting.cross:
        break;
    }
  }
  function handleKeyUpForListShields(e: KeyboardEvent<HTMLDivElement>) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        break;
      case gamePadSetting.arrowDown:
        break;
      case gamePadSetting.arrowRight:
        break;
      case gamePadSetting.arrowLeft:
        break;
      case gamePadSetting.circle:
        break;
      case gamePadSetting.cross:
        break;
    }
  }
  function handleKeyUpForListDecorations(e: KeyboardEvent<HTMLDivElement>) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        break;
      case gamePadSetting.arrowDown:
        break;
      case gamePadSetting.arrowRight:
        break;
      case gamePadSetting.arrowLeft:
        break;
      case gamePadSetting.circle:
        break;
      case gamePadSetting.cross:
        break;
    }
  }
  function handleKeyUpForListSpecialities(e: KeyboardEvent<HTMLDivElement>) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        break;
      case gamePadSetting.arrowDown:
        break;
      case gamePadSetting.arrowRight:
        break;
      case gamePadSetting.arrowLeft:
        break;
      case gamePadSetting.circle:
        break;
      case gamePadSetting.cross:
        break;
    }
  }
  function handleKeyUpForOptionBasic(e: KeyboardEvent<HTMLDivElement>) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        break;
      case gamePadSetting.arrowDown:
        break;
      case gamePadSetting.arrowRight:
        break;
      case gamePadSetting.arrowLeft:
        break;
      case gamePadSetting.circle:
        break;
      case gamePadSetting.cross:
        break;
    }
  }
  function handleKeyUpForOptionControll(e: KeyboardEvent<HTMLDivElement>) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        break;
      case gamePadSetting.arrowDown:
        break;
      case gamePadSetting.arrowRight:
        break;
      case gamePadSetting.arrowLeft:
        break;
      case gamePadSetting.circle:
        break;
      case gamePadSetting.cross:
        break;
    }
  }
  function handleKeyUpForOptionMode(e: KeyboardEvent<HTMLDivElement>) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        break;
      case gamePadSetting.arrowDown:
        break;
      case gamePadSetting.arrowRight:
        break;
      case gamePadSetting.arrowLeft:
        break;
      case gamePadSetting.circle:
        break;
      case gamePadSetting.cross:
        break;
    }
  }
  function handleKeyUpForUseFieldSpeciality(e: KeyboardEvent<HTMLDivElement>) {
    const { isHoverOnConfirmBtn } = gameProgress;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
      case gamePadSetting.arrowDown:
        gameProgress.isHoverOnConfirmBtn = !isHoverOnConfirmBtn;
        break;
      case gamePadSetting.circle:
        if (!isHoverOnConfirmBtn) {
          DokaponTheWorldState.curComponents = ["Drawer"];
          break;
        }
        // @todo 使用技能
        console.log("使用技能");
        break;
      case gamePadSetting.cross:
        DokaponTheWorldState.curComponents = ["Drawer"];
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForDrawer(e: KeyboardEvent<HTMLDivElement>) {
    const { selectedIdx } = DrawerState;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        DrawerState.selectedIdx = selectedIdx === 0 ? 4 : selectedIdx - 1;
        break;
      case gamePadSetting.arrowDown:
        DrawerState.selectedIdx = selectedIdx === 4 ? 0 : selectedIdx + 1;
        break;
      case gamePadSetting.square:
        DokaponTheWorldState.curComponents = ["Check"];
        break;
      case gamePadSetting.circle:
        switch (selectedIdx) {
          case 0: // 移動
            DokaponTheWorldState.curComponents = ["Roulette"];
            break;
          case 1: // 背包
            DokaponTheWorldState.curComponents = ["Bag"];
            break;
          case 2: // 查看
            DokaponTheWorldState.curComponents = ["Check"];
            CheckState.showMiniMap = true;
            CheckState.showCheckTip = true;
            break;
          case 3: // 特技
            DokaponTheWorldState.curComponents = ["UseFieldSpeciality"];
            break;
          case 4: // 資訊
            DokaponTheWorldState.curComponents = ["Data"];
            break;
        }
    }
    setGameProgress({ ...gameProgress });
  }
  /**
   * @todo handle bottomDialogQueue and bottomDialogProps
   */
  function handleKeyUpForBag(e: KeyboardEvent<HTMLDivElement>) {
    const { currentBag, selectedIdx } = BagState;
    const space = jobs[currentPlayer.job].bagSpace[currentBag];
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        switch (selectedIdx) {
          case 0:
            BagState.selectedIdx = space - 2;
            break;
          case 1:
            BagState.selectedIdx = space - 1;
            break;
          default:
            BagState.selectedIdx -= 2;
            break;
        }
        break;
      case gamePadSetting.arrowDown:
        switch (selectedIdx) {
          case space - 2:
            BagState.selectedIdx = 0;
            break;
          case space - 1:
            BagState.selectedIdx = 1;
            break;
          default:
            BagState.selectedIdx += 2;
            break;
        }
        break;
      case gamePadSetting.arrowLeft:
      case gamePadSetting.arrowRight:
        switch (selectedIdx % 2) {
          case 0:
            BagState.selectedIdx += 1;
            break;
          case 1:
            BagState.selectedIdx -= 1;
            break;
        }
        break;
      case gamePadSetting.R1:
      case gamePadSetting.R2:
      case gamePadSetting.L1:
      case gamePadSetting.L2:
        BagState.currentBag = currentBag === "items" ? "magicBooks" : "items";
        BagState.selectedIdx = 0;
        break;
      case gamePadSetting.circle:
        /**
         * @todo 使用道具，尚未實做
         */
        break;
      case gamePadSetting.cross:
        DokaponTheWorldState.curComponents = ["Drawer"];
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForRoulette(e: KeyboardEvent<HTMLDivElement>) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.circle:
        RouletteState.result =
          Math.getRandomIntInclusive(0, 3) + Math.getRandomIntInclusive(0, 3);
        setGameProgress({ ...gameProgress });
        setTimeout(() => {
          DokaponTheWorldState.curComponents = ["GraphUI"];
          setGameProgress({ ...gameProgress });
        }, 1000);
        break;
      case gamePadSetting.cross:
        DokaponTheWorldState.curComponents = ["Drawer"];
        setGameProgress({ ...gameProgress });
        break;
    }
  }
  /**
   * @todo click on enemy
   * @todo 釐清 集金 跟 全集金 的差別
   */
  function handleKeyUpForCheck(e: KeyboardEvent<HTMLDivElement>) {
    const { curCenterVertex } = DokaponTheWorldState;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        if (!keyDownArrows.up) break;
        setKeyDownArrows({ ...keyDownArrows, up: false });
        break;
      case gamePadSetting.arrowDown:
        if (!keyDownArrows.down) break;
        setKeyDownArrows({ ...keyDownArrows, down: false });
        break;
      case gamePadSetting.arrowLeft:
        if (!keyDownArrows.left) break;
        setKeyDownArrows({ ...keyDownArrows, left: false });
        break;
      case gamePadSetting.arrowRight:
        if (!keyDownArrows.right) break;
        setKeyDownArrows({ ...keyDownArrows, right: false });
        break;
      case gamePadSetting.circle: {
        if (Object.keys(curCenterVertex).length === 0) return;

        // 關閉所有小視窗
        CheckState.showVertexNameAndDistance = false;
        CheckState.showCheckTip = false;
        CheckState.showMiniMap = false;

        // 初始化
        curComponents.length = 0;
        setKeyDownArrows({
          up: false,
          down: false,
          left: false,
          right: false,
          square: false,
        });

        // check if player (self excluded), enemy or monster is clicked
        const clickedPlayers = playersAttrs.filter(
          (playerAttrs) =>
            currentMap.vertices[playerAttrs.vertexIdx] === curCenterVertex &&
            playerAttrs !== currentPlayer
        );
        const clickedBossMonster = bossMonsters.find(
          (bossMonster) =>
            currentMap.vertices[bossMonster.vertexIdx] === curCenterVertex
        );
        const clickedEnemy = enemies.find(
          (enemy) => currentMap.vertices[enemy.vertexIdx] === curCenterVertex
        );
        DokaponTheWorldState.curClickedCharacters = clickedPlayers;
        if (clickedBossMonster)
          DokaponTheWorldState.curClickedCharacters.push(clickedBossMonster);
        if (clickedEnemy)
          DokaponTheWorldState.curClickedCharacters.push(clickedEnemy);
        if (DokaponTheWorldState.curClickedCharacters.length === 1) {
          curComponents.push("PlayerVsCharacterDialogs");
        } else if (DokaponTheWorldState.curClickedCharacters.length > 1) {
          curComponents.push("SelectCharacterToCompare");
        }

        // handle click on vertex
        curComponents.push(vertexNameToComponentType[curCenterVertex.name]);

        setGameProgress({ ...gameProgress });
        return;
      }
      case gamePadSetting.square:
        if (!keyDownArrows.square) break;
        setKeyDownArrows({ ...keyDownArrows, square: false });
        break;
      case gamePadSetting.START:
        DokaponTheWorldState.curComponents = ["OverviewMap"];
        break;
      case gamePadSetting.cross:
        DokaponTheWorldState.curComponents = ["Drawer"];
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForOverviewMap(e: KeyboardEvent<HTMLDivElement>) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.triangle:
        break;
      case gamePadSetting.cross:
        DokaponTheWorldState.curComponents = ["Check"];
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForGroceryStoreFieldCheck(
    e: KeyboardEvent<HTMLDivElement>
  ) {
    const { curListPage } = GroceryStoreFieldCheckState;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.circle:
      case gamePadSetting.cross:
      case gamePadSetting.square:
      case gamePadSetting.triangle:
        DokaponTheWorldState.curComponents = ["Check"];
        GroceryStoreFieldCheckState.curListPage = 0;
        break;
      case gamePadSetting.R1:
      case gamePadSetting.R2:
      case gamePadSetting.L1:
      case gamePadSetting.L2:
        GroceryStoreFieldCheckState.curListPage = curListPage === 0 ? 1 : 0;
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForJobStoreFieldCheck(e: KeyboardEvent<HTMLDivElement>) {
    const { availableJobs } = currentPlayer;
    const { curListPage } = JobStoreFieldCheckState;
    const maxPage = Math.ceil(availableJobs.length / 6);
    switch (e.key.toLowerCase()) {
      case gamePadSetting.circle:
      case gamePadSetting.cross:
      case gamePadSetting.square:
      case gamePadSetting.triangle:
        DokaponTheWorldState.curComponents = ["Check"];
        JobStoreFieldCheckState.curListPage = 0;
        break;
      case gamePadSetting.R1:
      case gamePadSetting.R2:
        if (curListPage === maxPage - 1)
          JobStoreFieldCheckState.curListPage = 0;
        else JobStoreFieldCheckState.curListPage = curListPage + 1;
        break;
      case gamePadSetting.L1:
      case gamePadSetting.L2:
        if (curListPage === 0)
          JobStoreFieldCheckState.curListPage = maxPage - 1;
        else JobStoreFieldCheckState.curListPage = curListPage - 1;
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForMagicStoreFieldCheck(
    e: KeyboardEvent<HTMLDivElement>
  ) {
    const { area } = DokaponTheWorldState.curCenterVertex;
    const magicStore = magicStores[area];
    const maxPage = Math.ceil(magicStore.length / 6);
    const { curListPage } = MagicStoreFieldCheckState;

    switch (e.key.toLowerCase()) {
      case gamePadSetting.circle:
      case gamePadSetting.cross:
      case gamePadSetting.square:
      case gamePadSetting.triangle:
        DokaponTheWorldState.curComponents = ["Check"];
        MagicStoreFieldCheckState.curListPage = 0;
        break;
      case gamePadSetting.R1:
      case gamePadSetting.R2:
        if (curListPage === maxPage - 1)
          MagicStoreFieldCheckState.curListPage = 0;
        else MagicStoreFieldCheckState.curListPage = curListPage + 1;
        break;
      case gamePadSetting.L1:
      case gamePadSetting.L2:
        if (curListPage === 0)
          MagicStoreFieldCheckState.curListPage = maxPage - 1;
        else MagicStoreFieldCheckState.curListPage = curListPage - 1;
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForWeaponStoreFieldCheck(
    e: KeyboardEvent<HTMLDivElement>
  ) {
    const { curListPage } = WeaponStoreFieldCheckState;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.circle:
      case gamePadSetting.cross:
      case gamePadSetting.square:
      case gamePadSetting.triangle:
        DokaponTheWorldState.curComponents = ["Check"];
        WeaponStoreFieldCheckState.curListPage = 0;
        break;
      case gamePadSetting.R1:
      case gamePadSetting.R2:
      case gamePadSetting.L1:
      case gamePadSetting.L2:
        WeaponStoreFieldCheckState.curListPage = curListPage === 0 ? 1 : 0;
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForBeforeCollectMoneyFieldCheck(
    e: KeyboardEvent<HTMLDivElement>
  ) {
    const isMainFourKeys = mainFourKeys.includes(e.key.toLowerCase());
    if (!isMainFourKeys) return;

    DokaponTheWorldState.curComponents = ["CollectMoneyFieldCheck"];
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForCollectMoneyFieldCheck(
    e: KeyboardEvent<HTMLDivElement>
  ) {
    const { curListPage } = CollectMoneyFieldCheckState;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.circle:
      case gamePadSetting.cross:
        DokaponTheWorldState.curComponents = ["Check"];
        CollectMoneyFieldCheckState.curListPage = 0;
        break;
      case gamePadSetting.R1:
      case gamePadSetting.R2:
        CollectMoneyFieldCheckState.curListPage =
          curListPage === 6 ? 0 : curListPage + 1;
        break;
      case gamePadSetting.L1:
      case gamePadSetting.L2:
        CollectMoneyFieldCheckState.curListPage =
          curListPage === 0 ? 6 : curListPage - 1;
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForPlayerVsCharacterDialogs(
    e: KeyboardEvent<HTMLDivElement>
  ) {
    const { curPage } = PlayerVsCharacterDialogState;
    // const { curClickedCharactersCount } = DokaponTheWorldState;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.L1:
      case gamePadSetting.L2:
        PlayerVsCharacterDialogState.curPage = curPage === 0 ? 2 : curPage - 1;
        setGameProgress({ ...gameProgress });
        return;
      case gamePadSetting.R1:
      case gamePadSetting.R2:
        PlayerVsCharacterDialogState.curPage = curPage === 2 ? 0 : curPage + 1;
        setGameProgress({ ...gameProgress });
        return;
      case gamePadSetting.cross:
        if (curClickedCharacters.length === 1) curComponents.shift();
        else if (curClickedCharacters.length > 1)
          curComponents[0] = "SelectCharacterToCompare";
        PlayerVsCharacterDialogState.curPage = 0;
        setGameProgress({ ...gameProgress });
        return;
    }
  }
  function handleKeyUpForSelectCharacterToCompare(
    e: KeyboardEvent<HTMLDivElement>
  ) {
    const maxIdx = curClickedCharacters.length;
    const { selectedIdx } = SelectCharacterToCompareState;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        SelectCharacterToCompareState.selectedIdx =
          selectedIdx === 0 ? maxIdx - 1 : selectedIdx - 1;
        setGameProgress({ ...gameProgress });
        return;
      case gamePadSetting.arrowDown:
        SelectCharacterToCompareState.selectedIdx =
          selectedIdx === maxIdx - 1 ? 0 : selectedIdx + 1;
        setGameProgress({ ...gameProgress });
        return;
      case gamePadSetting.circle:
        curComponents[0] = "PlayerVsCharacterDialogs";
        setGameProgress({ ...gameProgress });
        return;
      case gamePadSetting.cross:
        curComponents.shift();
        SelectCharacterToCompareState.selectedIdx = 0;
        setGameProgress({ ...gameProgress });
        return;
    }
  }
  function backToCheck(e: KeyboardEvent<HTMLDivElement>) {
    const isMainFourKeys = mainFourKeys.includes(e.key.toLowerCase());
    if (!isMainFourKeys) return;

    DokaponTheWorldState.curComponents = ["Check"];
    setGameProgress({ ...gameProgress });
  }
  function handleBottomDialogSentencesQueue() {
    const curComponent = curComponents[0];
    const curPlayerJob = jobs[currentPlayer.job];
    bottomDialogSentencesQueue.length = 0;
    for (const sentence of bottomDialogSentences[curComponent]) {
      const translatedSentence = t(sentence).replace(
        "{fieldSpecialityName}",
        t(curPlayerJob.fieldSpeciality.name)
      );
      // .replace("{name}", currentPlayer.name)
      // .replace("{remainPlayerCount}", String(3 - currentPlayerIdx + 1));
      bottomDialogSentencesQueue.push(translatedSentence);
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const curComponent = curComponents[0];
    switch (curComponent) {
      case "Check":
        return handleKeyDownForCheck(e);
    }
  }
  function handleKeyDownForCheck(e: KeyboardEvent<HTMLDivElement>) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowDown:
        if (keyDownArrows.down) break;
        setKeyDownArrows({ ...keyDownArrows, down: true });
        break;
      case gamePadSetting.arrowUp:
        if (keyDownArrows.up) break;
        setKeyDownArrows({ ...keyDownArrows, up: true });
        break;
      case gamePadSetting.arrowLeft:
        if (keyDownArrows.left) break;
        setKeyDownArrows({ ...keyDownArrows, left: true });
        break;
      case gamePadSetting.arrowRight:
        if (keyDownArrows.right) break;
        setKeyDownArrows({ ...keyDownArrows, right: true });
        break;
      case gamePadSetting.square:
        if (keyDownArrows.square) break;
        setKeyDownArrows({ ...keyDownArrows, square: true });
        break;
    }
  }
  function handleMapMove() {
    const { up, down, left, right, square: shouldAccelerate } = keyDownArrows;
    const verticalChill = (up && down) || (!up && !down);
    const horizontalChill = (left && right) || (!left && !right);
    const goLeft = left && !right && verticalChill;
    const goRight = right && !left && verticalChill;
    const goUp = up && !down && horizontalChill;
    const goDown = down && !up && horizontalChill;
    const goUpLeft = up && !down && left && !right;
    const goUpRight = up && !down && !left && right;
    const goDownLeft = !up && down && left && !right;
    const goDownRight = !up && down && !left && right;
    const delta = shouldAccelerate ? 9 : 3;

    // 先清除上一個move的動作
    window.clearInterval(curIntervalId);

    if (goUp) return moveMap({ deltaX: 0, deltaY: delta });
    if (goDown) return moveMap({ deltaX: 0, deltaY: -delta });
    if (goLeft) return moveMap({ deltaX: delta, deltaY: 0 });
    if (goRight) return moveMap({ deltaX: -delta, deltaY: 0 });
    if (goUpLeft) return moveMap({ deltaX: delta, deltaY: delta });
    if (goUpRight) return moveMap({ deltaX: -delta, deltaY: delta });
    if (goDownLeft) return moveMap({ deltaX: delta, deltaY: -delta });
    if (goDownRight) return moveMap({ deltaX: -delta, deltaY: -delta });
  }
  /**
   * 這邊採取直接操作DOM的方式
   *
   * 因為地圖的移動，是頻繁觸發的事件
   *
   * 同時也會直接更新`SVGTranslate`
   *
   * 現在還多了會去更新`CheckState`
   *
   * @todo function重新命名，此function做了兩件事情，但function name只有提及一件事情
   */
  function moveMap(position: { deltaX: number; deltaY: number }) {
    let { deltaX, deltaY } = position;
    deltaX = parseInt(deltaX.toFixed(0));
    deltaY = parseInt(deltaY.toFixed(0));
    const { curAreaPosition } = CheckState.miniMap;
    const { x: bx, y: by, width: bWidth, height: bHeight } = cellsGroupBBox;
    const { width: vWidth, height: vHeight } = svgViewBox;
    const SVGTranslateX1 = parseInt(((bx - vWidth / 2) * -1).toFixed(0));
    const SVGTranslateX2 = parseInt(
      ((bx + bWidth) * -1 + vWidth / 2).toFixed(0)
    );
    const SVGTranslateY1 = parseInt(((by - vHeight / 2) * -1).toFixed(0));
    const SVGTranslateY2 = parseInt(
      ((by + bHeight) * -1 + vHeight / 2).toFixed(0)
    );
    const fullWidth = Math.abs(SVGTranslateX2 - SVGTranslateX1);
    const fullHeight = Math.abs(SVGTranslateY2 - SVGTranslateY1);
    const cellsGroupEl = document.getElementById(ids.cellsGroup);
    const miniMapCurAreaEl = document.getElementById(ids.miniMapCurArea);
    if (!miniMapCurAreaEl) return console.error(`no ${ids.miniMapCurArea}`);
    if (!cellsGroupEl) return console.error(`no ${ids.cellsGroup}`);

    curIntervalId = window.setInterval(() => {
      // 移動delta的距離
      SVGTranslate.x += deltaX;
      SVGTranslate.y += deltaY;

      // 修正邊界，預留1/2螢幕寬高的border，讓vertex不會直接切到螢幕邊緣
      if (SVGTranslate.x >= SVGTranslateX1) SVGTranslate.x = SVGTranslateX1;
      if (SVGTranslate.x <= SVGTranslateX2) SVGTranslate.x = SVGTranslateX2;
      if (SVGTranslate.y >= SVGTranslateY1) SVGTranslate.y = SVGTranslateY1;
      if (SVGTranslate.y <= SVGTranslateY2) SVGTranslate.y = SVGTranslateY2;

      // 操作DOM
      const { x, y } = SVGTranslate;
      curAreaPosition.y = parseFloat(
        ((Math.abs(y - SVGTranslateY1) / fullHeight) * 100).toFixed(1)
      );
      curAreaPosition.x = parseFloat(
        ((Math.abs(x - SVGTranslateX1) / fullWidth) * 100).toFixed(1)
      );
      miniMapCurAreaEl.style.top = `${curAreaPosition.y}%`;
      miniMapCurAreaEl.style.left = `${curAreaPosition.x}%`;
      cellsGroupEl.setAttribute("transform", `translate(${x}, ${y})`);

      // 尋找最接近中心點的vertex
      const centerX = -x + svgViewBox.width / 2;
      const centerY = -y + svgViewBox.height / 2;
      /**
       * @todo 演算法效能優化(現在Big O = O(n / 2))
       */
      const centerVertex = currentMap.vertices.find(
        (vertex) =>
          Math.distanceBetween(
            { x: vertex.position.x, y: vertex.position.y },
            { x: centerX, y: centerY }
          ) <= 100
      );

      // 更新`CheckState`
      /**
       * @todo `vertex.name`要轉成日文，要做一個mapping table
       */
      if (centerVertex) {
        const distance = GraphDSAs[currentPlayer.area].calMinDistanceTo(
          centerVertex.id
        );
        CheckState.curHoverVertexName = centerVertex.name;
        CheckState.curHoverVertexDistance = distance;
        // DokaponTheWorldState.curCenterVertex = centerVertex;
      }
      DokaponTheWorldState.curCenterVertex = centerVertex || ({} as Vertex);
      CheckState.showVertexNameAndDistance = Boolean(centerVertex);
      setGameProgress({ ...gameProgress });
    }, 1);
  }
  function moveMapToPlayerVertex() {
    const curVertex = currentMap.vertices[currentPlayer.vertexIdx];
    SVGTranslate.x = curVertex.position.x * -1 + svgViewBox.width / 2;
    SVGTranslate.y = curVertex.position.y * -1 + svgViewBox.height / 2;
    setGameProgress({ ...gameProgress });
  }
  function recalculate30Step() {
    const { area } = currentPlayer;
    GraphDSAs[area].getAllPaths(currentPlayerVertex.id, 30);
  }
  function lazyLoadMap() {
    const { area } = currentPlayer;
    if (GraphDSAs[area] !== emptyGraphDSA) return;
    GraphDSAs[area] = new GraphDSA(areaTypesToMap[area]);
  }
  function focusContainerElAfterLoaded() {
    containerRefEl.current?.focus();
  }
  useEffect(handleMapMove, [keyDownArrows]);
  useEffect(handleBottomDialogSentencesQueue, [curComponents[0]]);
  useEffect(updateCellsGroupBBox, [currentPlayer.area]);
  useEffect(lazyLoadMap, [currentPlayer.area]);
  useEffect(recalculate30Step, [currentPlayer.area, currentPlayerVertex]);
  useEffect(updateSVGViewBox, []);
  useEffect(windowResizeEffect, []);
  useEffect(moveMapToPlayerVertex, [currentPlayerIdx]);
  useEffect(focusContainerElAfterLoaded, []);
  return {
    containerRefEl,
    handleKeyDown,
    handleKeyUp,
    Component: Components[curComponents[0]],
  };
}
