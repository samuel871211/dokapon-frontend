// Related third party imports.
import { useEffect, useContext, KeyboardEvent, useRef, useState } from "react";

// Local application/library specific imports.
import styles from "./DokaponTheWorld.module.css";
import Drawer from "./Drawer";
import Roulette from "./Roulette";
import Bag from "./Bag";
import Check from "./Check";
import OverviewMap from "./OverviewMap";
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
import gameProgressCtx from "reducers/gameProgress";
import type { DokaponTheWorldComponentTypes } from "global";
import type { TextsKeys } from "data/texts";
import jobs from "data/jobs";
import magicStores from "data/magicStores";
import useTranslation from "hooks/useTranslation";
import areaTypesToCellsGroupBBox from "data/areaTypesToCellsGroupBBox";
import ids from "./ids";

// Stateless vars declare.
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
const text: { [key in DokaponTheWorldComponentTypes]: TextsKeys[] } = {
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
  CastleFieldCheck,
  ChurchFieldCheck,
  VillageFieldCheck,
  CollectMoneyFieldCheck,
  GroceryStoreFieldCheck,
  JobStoreFieldCheck,
  MagicStoreFieldCheck,
  WeaponStoreFieldCheck,
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
  SelectCharacterToCompare: () => <></>,
  PlayerVsCharacterDialogs: () => <></>,
};

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
  const curCellsGroupBBox = areaTypesToCellsGroupBBox[currentPlayer.area];
  const {
    curComponents,
    DrawerState,
    GraphUIState,
    BagState,
    RouletteState,
    CheckState,
    GroceryStoreFieldCheckState,
    JobStoreFieldCheckState,
    MagicStoreFieldCheckState,
    WeaponStoreFieldCheckState,
    CollectMoneyFieldCheckState,
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
      case "OverviewMap":
        return handleKeyUpForOverviewMap(e);
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
      case "SelectCharacterToCompare":
        return;
      case "PlayerVsCharacterDialogs":
        return;
      case "GraphUI":
        return;
      default:
        // 滑鼠hover上去，型別應該要是`never`，才代表所有的case都有涵蓋到
        curComponent;
        return;
    }
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
            break;
          case 3: // 特技
            break;
          case 4: // 資訊
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
  function handleKeyUpForCheck(e: KeyboardEvent<HTMLDivElement>) {
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
    const { area } = DokaponTheWorldState.curClickVertex;
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
  function backToCheck(e: KeyboardEvent<HTMLDivElement>) {
    const isMainFourKeys = mainFourKeys.includes(e.key.toLowerCase());
    if (!isMainFourKeys) return;

    DokaponTheWorldState.curComponents = ["Check"];
    setGameProgress({ ...gameProgress });
  }
  function handleBottomDialogQueue() {
    bottomDialogSentencesQueue.length = 0;
    for (const sentence of text[curComponents[0]]) {
      bottomDialogSentencesQueue.push(t(sentence));
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
   * 只是不會去dispatch setState action，避免react頻繁觸發re-render
   */
  function moveMap(position: { deltaX: number; deltaY: number }) {
    const { deltaX, deltaY } = position;
    const { curAreaPosition } = CheckState.miniMap;
    const { x: bx, y: by, width: bWidth, height: bHeight } = curCellsGroupBBox;
    const { width: vWidth, height: vHeight } = svgViewBox;
    const SVGTranslateX1 = (bx - vWidth / 2) * -1;
    const SVGTranslateX2 = (bx + bWidth) * -1 + vWidth / 2;
    const SVGTranslateY1 = (by - vHeight / 2) * -1;
    const SVGTranslateY2 = (by + bHeight) * -1 + vHeight / 2;
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
    }, 1);
  }
  useEffect(handleMapMove, [keyDownArrows]);
  useEffect(handleBottomDialogQueue, [curComponents[0]]);
  useEffect(() => {
    // AUTO FOCUS CONTAINER ELEMENT WHEN COMPONENT MOUNTED
    containerRefEl.current?.focus();

    // ADD WINDOW RESIZE EVENT HANDLER
    function updateSVGViewBox() {
      const graphSVGEl = document.getElementById(ids.graphSVG);
      if (!graphSVGEl) return console.error("no viewEl");

      svgViewBox.width = graphSVGEl.clientWidth;
      svgViewBox.height = graphSVGEl.clientHeight;
    }
    updateSVGViewBox();
    window.addEventListener("resize", updateSVGViewBox);
    return () => window.removeEventListener("resize", updateSVGViewBox);
  }, []);
  return {
    containerRefEl,
    handleKeyDown,
    handleKeyUp,
    Component: Components[curComponents[0]],
  };
}
