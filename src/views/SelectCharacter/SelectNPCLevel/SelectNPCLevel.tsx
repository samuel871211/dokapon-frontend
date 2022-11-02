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
import npcLevelsToJP from "data/npcLevelsToJP";
import useTranslation from "hooks/useTranslation";

// Stateless vars declare.

export default SelectNPCLevel;

function SelectNPCLevel(): JSX.Element {
  const focusElement = useRef<HTMLDivElement>(null);
  const { gameProgressDispatch } = useContext(gameProgressContext);
  const { UIStateDispatch } = useContext(UIStateContext);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isLeave, toggleIsLeave] = useState(false);
  const { t } = useTranslation();

  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case "arrowup":
        setSelectedIdx(selectedIdx === 0 ? 2 : selectedIdx - 1);
        break;
      case "arrowdown":
        setSelectedIdx(selectedIdx === 2 ? 0 : selectedIdx + 1);
        break;
      case "d":
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
      <div className={styles.btnGroup}>
        {npcLevels.map((npcLevel) => (
          <NPCLevelBtn
            text={t(npcLevelsToJP[npcLevel])}
            selected={npcLevels[selectedIdx] === npcLevel}
            key={npcLevel}
          />
        ))}
      </div>
    </div>
  );
}

function NPCLevelBtn(props: { text: string; selected: boolean }): JSX.Element {
  const { text, selected } = props;
  return (
    <div
      className={`${styles.btn} ${selected ? globalStyles.hoverEffect : ""}`}
    >
      {text}
    </div>
  );
}
