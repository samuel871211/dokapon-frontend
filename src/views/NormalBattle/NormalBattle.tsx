// Related third party imports.
import { KeyboardEvent, useContext, useRef } from "react";

// Local application/library specific imports.
import useTranslation from "hooks/useTranslation";
import gameProgressCtx from "reducers/gameProgress";
import styles from "./NormalBattle.module.css";
import type { NormalBattleComponentTypes } from "global";
import VS from "./VS";
import ShowVertexTypography from "./ShowVertexTypography";
import SwapCards from "./SwapCards";

// Stateless vars declare.
const Components: { [key in NormalBattleComponentTypes]: () => JSX.Element } = {
  VS,
  ShowVertexTypography,
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
  const {
    NormalBattleState: { curComponent },
  } = gameProgress;
  function handleKeyUp(e: KeyboardEvent<HTMLDivElement>) {
    switch (curComponent) {
      case "VS":
        return;
      case "ShowVertexTypography":
        return;
      case "SwapCards":
        return handleKeyUpForSwapCards(e);
    }
  }
  function handleKeyUpForSwapCards(e: KeyboardEvent<HTMLDivElement>) {
    return;
  }
  return {
    containerRefEl,
    handleKeyUp,
    Component: Components[curComponent],
  };
}
