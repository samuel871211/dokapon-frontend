// Standard library imports.

// Related third party imports.
import {
  useRef,
  useState,
  useContext,
  KeyboardEvent,
  AnimationEvent,
} from "react";

// Local application/library specific imports.
import globalStyles from "assets/styles/globalStyles.module.css";
import styles from "./SelectNPCLevel.module.css";
import { gameProgressContext } from "reducers/gameProgress";
import { UIStateContext } from "reducers/SelectCharacter/UIState";
import npcLevels from "data/npcLevels";
import { NPCLEVELS } from "graphics/characters";

// Stateless vars declare.

export default SelectNPCLevel;

function SelectNPCLevel(): JSX.Element {
  const focusElement = useRef<HTMLDivElement>(null);
  const { gameProgressDispatch } = useContext(gameProgressContext);
  const { UIStateDispatch } = useContext(UIStateContext);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isLeave, toggleIsLeave] = useState(false);

  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case "arrowup":
        setSelectedIdx(selectedIdx === 0 ? 2 : selectedIdx - 1);
        break;
      case "arrowdown":
        setSelectedIdx(selectedIdx === 2 ? 0 : selectedIdx + 1);
        break;
      case "d":
        console.log(npcLevels[selectedIdx]);
        gameProgressDispatch({
          type: "npcLevel",
          payload: npcLevels[selectedIdx],
        });
        UIStateDispatch({
          type: "showTitleArea",
          payload: false,
        });
        toggleIsLeave(true);
        break;
      case "x":
        UIStateDispatch({
          type: "showTitleArea",
          payload: false,
        });
        toggleIsLeave(true);
        break;
      default:
        break;
    }
  }

  function generateLevelRows() {
    const aiLevelRows = [];
    for (const npcLevel of npcLevels) {
      aiLevelRows.push(
        <NPCLevelBtn
          npcLevel={npcLevel}
          selected={npcLevels[selectedIdx] === npcLevel}
          key={npcLevel}
        />
      );
    }
    return aiLevelRows;
  }

  function handleAnimationEnd(e: AnimationEvent<HTMLDivElement>) {
    if (e.animationName.includes("slideLeft")) {
      focusElement.current?.focus();
      return;
    }

    if (e.animationName.includes("slideRight")) {
      UIStateDispatch({
        type: "currentStep",
        payload: "NPCGenerateDialog",
      });
    }
  }

  return (
    <div
      className={`${styles.container} ${isLeave ? styles.leave : ""}`}
      tabIndex={0}
      ref={focusElement}
      onBlur={(event) => event.target.focus()}
      onKeyUp={handleKeyUp}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={styles.emptyArea}></div>
      <div className={styles.btnGroup}>{generateLevelRows()}</div>
    </div>
  );
}

function NPCLevelBtn(props: {
  npcLevel: "weak" | "normal" | "strong";
  selected: boolean;
}): JSX.Element {
  const { npcLevel, selected } = props;
  return (
    <div
      className={`${styles.btn} ${selected ? globalStyles.hoverEffect : ""}`}
    >
      {NPCLEVELS[npcLevel].chinese}
    </div>
  );
}
