// Related third party imports.
import {
  useRef,
  useState,
  useContext,
  KeyboardEvent,
  AnimationEvent,
} from "react";

// Local application/library specific imports.
import ExampleCharacterImg from "../ExampleCharacterImg";
import globalStyles from "assets/styles/globalStyles.module.css";
import styles from "./SelectColor.module.css";
import { gameProgressContext } from "reducers/gameProgress";
import { UIStateContext } from "reducers/SelectCharacter/UIState";
import { ColorTypes } from "global";
import colors from "constants/colors";

// Stateless vars declare.

export default SelectColor;

function SelectColor(): JSX.Element {
  const { gameProgress, gameProgressDispatch } =
    useContext(gameProgressContext);
  const { UIStateDispatch } = useContext(UIStateContext);
  const { currentPlayer, playersAttrs, numberOfPlayers } = gameProgress;
  const {
    color: currentPlayerColor,
    gender,
    job,
  } = playersAttrs[currentPlayer - 1];
  const focusElement = useRef<HTMLDivElement>(null);
  const [isLeave, toggleIsLeave] = useState(false);
  const remainColors = getRemainColors();
  const initSelectedIdx = remainColors.indexOf(currentPlayerColor);
  const [selectedIdx, setSelectedIdx] = useState(
    initSelectedIdx === -1 ? 0 : initSelectedIdx
  );

  function getRemainColors() {
    const remainColors = [...colors];
    for (
      let playerNumber = 0;
      playerNumber < currentPlayer - 1;
      playerNumber++
    ) {
      const usedColor = playersAttrs[playerNumber].color;
      const index = remainColors.indexOf(usedColor);
      if (index != -1) remainColors.splice(index, 1);
    }
    return remainColors;
  }

  const remainColorRows = remainColors.map((color) => (
    <ColorBtn
      rgb={color}
      name={color}
      selected={color === remainColors[selectedIdx]}
      key={color}
    />
  ));

  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case "arrowup":
        setSelectedIdx(
          selectedIdx === 0 ? remainColors.length - 1 : selectedIdx - 1
        );
        break;
      case "arrowdown":
        setSelectedIdx(
          selectedIdx === remainColors.length - 1 ? 0 : selectedIdx + 1
        );
        break;
      case "d":
        gameProgressDispatch({
          type: "color",
          payload: remainColors[selectedIdx],
        });
        UIStateDispatch({
          type: "currentStep",
          payload:
            numberOfPlayers >= currentPlayer
              ? "SelectJob"
              : "NPCGenerateDialog",
        });
        break;
      case "x":
        toggleIsLeave(true);
        UIStateDispatch({
          type: "showTitleArea",
          payload: false,
        });
        break;
      default:
        break;
    }
  }

  function handleAnimationEnd(e: AnimationEvent<HTMLDivElement>): void {
    if (e.animationName.includes("slideLeft")) {
      focusElement.current?.focus();
      return;
    }

    if (e.animationName.includes("slideRight")) {
      toggleIsLeave(false);
      UIStateDispatch({
        type: "showTitleArea",
        payload: true,
      });
      UIStateDispatch({
        type: "currentStep",
        payload:
          numberOfPlayers >= currentPlayer
            ? "BeforeNameInput"
            : "NPCGenerateDialog",
      });
    }
  }

  return (
    <div
      className={styles.container}
      tabIndex={0}
      ref={focusElement}
      onBlur={(event) => event.target.focus()}
      onKeyUp={handleKeyUp}
    >
      <ExampleCharacterImg
        color={remainColors[selectedIdx]}
        job={job}
        gender={gender}
        isFadeOut={isLeave}
      />
      <div
        className={`
                ${styles.btnGroup}
                ${isLeave ? styles.leave : ""}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {remainColorRows}
      </div>
    </div>
  );
}

function ColorBtn(props: {
  rgb: string;
  name: string;
  selected: boolean;
}): JSX.Element {
  const { rgb, name, selected } = props;
  return (
    <div
      className={`${styles.btn} ${selected ? globalStyles.hoverEffect : ""}`}
    >
      <div className={styles.circle} style={{ backgroundColor: rgb }}></div>
      <div className={styles.name}>{name}</div>
    </div>
  );
}
