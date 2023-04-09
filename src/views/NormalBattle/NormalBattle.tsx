// Related third party imports.
import { KeyboardEvent, useContext, useEffect, useRef } from "react";

// Local application/library specific imports.
import useTranslation from "hooks/useTranslation";
import gameProgressCtx from "reducers/gameProgress";
import styles from "./NormalBattle.module.css";
import type { NormalBattleComponentTypes } from "global";
import VS from "./VS";
import ShowVertexTerrain from "./ShowVertexTerrain";
import SwapCards from "./SwapCards";

// Stateless vars declare.
const Components: { [key in NormalBattleComponentTypes]: () => JSX.Element } = {
  VS,
  ShowVertexTerrain,
  SwapCards,
};

export default NormalBattle;

/**
 * @todo VS 畫面
 */
function NormalBattle() {
  const { containerRefEl, handleKeyUp, Component } = useMetaData();
  return (
    <div
      ref={containerRefEl}
      tabIndex={0}
      onBlur={(e) => e.currentTarget.focus()}
      onKeyUp={handleKeyUp}
      className={styles.normalBattleContainer}
    >
      <Component />
    </div>
  );
}

function useMetaData() {
  const { t } = useTranslation();
  const containerRefEl = useRef<HTMLDivElement>(null);
  const { gameProgress, setGameProgress } = useContext(gameProgressCtx);
  const { NormalBattleState } = gameProgress;
  const { curComponent } = NormalBattleState;
  function handleKeyUp(e: KeyboardEvent<HTMLDivElement>) {
    switch (curComponent) {
      case "VS":
        return handleKeyUpForVS(e);
      case "ShowVertexTerrain":
        return handleKeyUpForShowVertexTerrain(e);
      case "SwapCards":
        return handleKeyUpForSwapCards(e);
    }
  }
  function handleKeyUpForVS(e: KeyboardEvent<HTMLDivElement>) {
    NormalBattleState.curComponent = "ShowVertexTerrain";
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForShowVertexTerrain(e: KeyboardEvent<HTMLDivElement>) {
    NormalBattleState.curComponent = "SwapCards";
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForSwapCards(e: KeyboardEvent<HTMLDivElement>) {
    return;
  }
  useEffect(() => containerRefEl.current?.focus(), []);
  return {
    containerRefEl,
    handleKeyUp,
    Component: Components[curComponent],
  };
}
