// Related third party imports.
import { KeyboardEvent, useContext, useEffect, useRef } from "react";

// Local application/library specific imports.
import gameProgressCtx from "reducers/gameProgress";
import styles from "./NormalBattle.module.css";
import type { NormalBattleComponentTypes } from "global";
import VS from "./VS";
import ShowVertexTerrain from "./ShowVertexTerrain";
import SwapCards from "./SwapCards";
import SelectGamePadButton from "./SelectGamePadButton";
// import useBattleCharacter from "hooks/useBattleCharacter";

// Stateless vars declare.
const Components: { [key in NormalBattleComponentTypes]: () => JSX.Element } = {
  VS,
  ShowVertexTerrain,
  SwapCards,
  SelectGamePadButton,
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
  const { curComponent, SwapCardState, SelectGamePadButtonState } =
    NormalBattleState;
  // const battleCharacter = useBattleCharacter();
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
  function handleKeyUpForVS(e: KeyboardEvent<HTMLDivElement>) {
    NormalBattleState.curComponent = "ShowVertexTerrain";
    NormalBattleState.isLeftPlayerCurAttack = Math.random() >= 0.5;
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForShowVertexTerrain(e: KeyboardEvent<HTMLDivElement>) {
    NormalBattleState.curComponent = "SwapCards";
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForSelectGamePadButton(e: KeyboardEvent<HTMLDivElement>) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.R1:
      case gamePadSetting.R2:
        SelectGamePadButtonState.rightDialogOpen = false;
        break;
      case gamePadSetting.L1:
      case gamePadSetting.L2:
        SelectGamePadButtonState.leftDialogOpen = false;
        break;
      default:
        break;
    }
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
  useEffect(() => containerRefEl.current?.focus(), []);
  return {
    containerRefEl,
    handleKeyUp,
    handleKeyDown,
    Component: Components[curComponent],
  };
}
