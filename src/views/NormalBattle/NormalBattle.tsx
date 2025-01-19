// Related third party imports.
import { KeyboardEvent, useContext, useEffect, useRef } from "react";

// Local application/library specific imports.
import gameProgressCtx from "reducers/gameProgress";
import styles from "./NormalBattle.module.css";
import type { BattleButtonTypes, NormalBattleComponentTypes } from "global";
import VS from "./VS";
import ShowVertexTerrain from "./ShowVertexTerrain";
import SwapCards from "./SwapCards";
import SelectGamePadButton from "./SelectGamePadButton";
import BattleAnimation from "./BattleAnimation";
import useBattleCharacter from "hooks/useBattleCharacter";

// Stateless vars declare.
const battleButtons: BattleButtonTypes[] = [
  "triangle",
  "circle",
  "cross",
  "square",
];
const Components: { [key in NormalBattleComponentTypes]: () => JSX.Element } = {
  VS,
  ShowVertexTerrain,
  SwapCards,
  SelectGamePadButton,
  BattleAnimation,
};

export default NormalBattle;

function NormalBattle() {
  const { containerRefEl, handleKeyUp, handleKeyDown, Component } =
    useMetaData();
  return (
    <div
      ref={containerRefEl}
      tabIndex={0}
      onBlur={(e) => e.currentTarget.focus()}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      className={styles.normalBattleContainer}
    >
      <Component />
    </div>
  );
}

function useMetaData() {
  const containerRefEl = useRef<HTMLDivElement>(null);
  const { gameProgress, setGameProgress } = useContext(gameProgressCtx);
  const { NormalBattleState, gamePadSetting } = gameProgress;
  const {
    curComponent,
    SwapCardState,
    SelectGamePadButtonState,
    isLeftPlayerCurAttack,
    isLeftPlayerCurSelect,
  } = NormalBattleState;
  const { noticeDialogOpen } = SelectGamePadButtonState;
  const battleCharacter = useBattleCharacter();
  const isBattleCharacterPlayer = battleCharacter.characterType === "player";

  function handleKeyUp(e: KeyboardEvent<HTMLDivElement>) {
    switch (curComponent) {
      case "VS":
        return handleKeyUpForVS(e);
      case "ShowVertexTerrain":
        return handleKeyUpForShowVertexTerrain(e);
      case "SwapCards":
        return handleKeyUpForSwapCards(e);
      case "SelectGamePadButton":
        return handleKeyUpForSelectGamePadButton(e);
      case "BattleAnimation":
        return handleKeyUpForBattleAnimation(e);
      default:
        return;
    }
  }
  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    switch (curComponent) {
      case "SelectGamePadButton":
        return handleKeyDownForSelectGamePadButton(e);
      default:
        return;
    }
  }
  function handleKeyDownForSelectGamePadButton(
    e: KeyboardEvent<HTMLDivElement>
  ) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.R1:
      case gamePadSetting.R2:
        if (SelectGamePadButtonState.leftDialogOpen) return;
        SelectGamePadButtonState.rightDialogOpen = true;
        SelectGamePadButtonState.leftDialogOpen = false;
        break;
      case gamePadSetting.L1:
      case gamePadSetting.L2:
        if (SelectGamePadButtonState.rightDialogOpen) return;
        SelectGamePadButtonState.leftDialogOpen = true;
        SelectGamePadButtonState.rightDialogOpen = false;
        break;
      default:
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForVS(e: KeyboardEvent<HTMLDivElement>) {
    NormalBattleState.curComponent = "ShowVertexTerrain";
    const isLeftPlayerInitAttack = Math.random() >= 0.5;
    NormalBattleState.isLeftPlayerCurAttack = isLeftPlayerInitAttack;
    NormalBattleState.isLeftPlayerInitAttack = isLeftPlayerInitAttack;
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForShowVertexTerrain(e: KeyboardEvent<HTMLDivElement>) {
    NormalBattleState.curComponent = "SwapCards";
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForSwapCards(e: KeyboardEvent<HTMLDivElement>) {
    if (SwapCardState.isCardOpen) return;

    const { isCardSwitch } = SwapCardState;
    const { isLeftPlayerCurAttack } = NormalBattleState;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowRight:
      case gamePadSetting.arrowLeft:
        SwapCardState.isCardSwitch = !isCardSwitch;
        NormalBattleState.isLeftPlayerCurAttack = !isLeftPlayerCurAttack;
        break;
      case gamePadSetting.circle:
        SwapCardState.isCardOpen = true;
        SelectGamePadButtonState.noticeDialogOpen = isBattleCharacterPlayer;
        NormalBattleState.battleRound = 1;
        NormalBattleState.isLeftPlayerCurSelect = true;
        setTimeout(() => {
          NormalBattleState.curComponent = "SelectGamePadButton";
          setGameProgress({ ...gameProgress });
        }, 2000);
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForSelectGamePadButton(e: KeyboardEvent<HTMLDivElement>) {
    if (noticeDialogOpen) return handleKeyUpForNoticeDialog(e);

    switch (e.key.toLowerCase()) {
      case gamePadSetting.R1:
      case gamePadSetting.R2:
        SelectGamePadButtonState.rightDialogOpen = false;
        break;
      case gamePadSetting.L1:
      case gamePadSetting.L2:
        SelectGamePadButtonState.leftDialogOpen = false;
        break;
      case gamePadSetting.triangle:
        handleKeyUpForSelectBattleButton("triangle");
        break;
      case gamePadSetting.circle:
        handleKeyUpForSelectBattleButton("circle");
        break;
      case gamePadSetting.cross:
        handleKeyUpForSelectBattleButton("cross");
        break;
      case gamePadSetting.square:
        handleKeyUpForSelectBattleButton("square");
        break;
      default:
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForNoticeDialog(e: KeyboardEvent<HTMLDivElement>) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.circle:
      case gamePadSetting.cross:
      case gamePadSetting.triangle:
      case gamePadSetting.square:
        SelectGamePadButtonState.noticeDialogOpen = false;
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForSelectBattleButton(battleButton: BattleButtonTypes) {
    const shouldSwitchToRightPlayerSelect =
      Boolean(isLeftPlayerCurSelect) &&
      battleCharacter.characterType === "player";
    if (isLeftPlayerCurSelect && shouldSwitchToRightPlayerSelect) {
      NormalBattleState.leftSelectedButton = battleButton;
      SelectGamePadButtonState.noticeDialogOpen = true;
      NormalBattleState.isLeftPlayerCurSelect = false;
    }
    if (isLeftPlayerCurSelect && !shouldSwitchToRightPlayerSelect) {
      NormalBattleState.leftSelectedButton = battleButton;
      NormalBattleState.rightSelectedButton = battleButtons.getRandomItem();
      NormalBattleState.curComponent = "BattleAnimation";
    }
    if (!isLeftPlayerCurSelect) {
      NormalBattleState.rightSelectedButton = battleButton;
      NormalBattleState.curComponent = "BattleAnimation";
    }
  }
  /**
   * todo 實作
   */
  function handleKeyUpForBattleAnimation(e: KeyboardEvent<HTMLDivElement>) {
    return;
  }
  useEffect(() => containerRefEl.current?.focus(), []);
  return {
    containerRefEl,
    handleKeyUp,
    handleKeyDown,
    Component: Components[curComponent],
  };
}
