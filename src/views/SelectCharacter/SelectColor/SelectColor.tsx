// Related third party imports.
import {
  useRef,
  useState,
  useContext,
  KeyboardEvent,
  AnimationEvent,
  useEffect,
} from "react";
import classNames from "classnames";

// Local application/library specific imports.
import ExampleCharacterImg from "../ExampleCharacterImg";
import globalStyles from "assets/styles/globalStyles.module.css";
import styles from "./SelectColor.module.css";
import { gameProgressContext } from "reducers/gameProgress";
import { UIStateContext } from "reducers/SelectCharacter/UIState";
import colors from "data/colors";
import colorsToRGB from "data/colorsToRGB";
import colorsToJP from "data/colorsToJP";
import useTranslation from "hooks/useTranslation";

// Stateless vars declare.

export default SelectColor;

function SelectColor(): JSX.Element {
  const { gameProgress, gameProgressDispatch } =
    useContext(gameProgressContext);
  const { UIStateDispatch } = useContext(UIStateContext);
  const {
    currentPlayerNumber,
    playersAttrs,
    numberOfPlayers,
    componentsStates,
  } = gameProgress;
  const {
    SelectColor: { selectedIndex },
  } = componentsStates;
  const {
    color: currentPlayerColor,
    gender: currentPlayerGender,
    job: currentPlayerJob,
  } = playersAttrs[currentPlayerNumber - 1];
  const focusElement = useRef<HTMLDivElement>(null);
  const [isLeave, toggleIsLeave] = useState(false);
  const remainColors = getRemainColors();
  const { t } = useTranslation();
  useEffect(() => {
    componentsStates.SelectColor.selectedIndex =
      remainColors.indexOf(currentPlayerColor);
    gameProgressDispatch({
      type: "updateAll",
      payload: gameProgress,
    });
  }, []);

  function getRemainColors() {
    const remainColors = [...colors];
    for (
      let playerNumber = 0;
      playerNumber < currentPlayerNumber - 1;
      playerNumber++
    ) {
      const usedColor = playersAttrs[playerNumber].color;
      const index = remainColors.indexOf(usedColor);
      if (index != -1) remainColors.splice(index, 1);
    }
    return remainColors;
  }

  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case "arrowup":
        componentsStates.SelectColor.selectedIndex =
          selectedIndex === 0 ? remainColors.length - 1 : selectedIndex - 1;
        gameProgressDispatch({
          type: "updateAll",
          payload: gameProgress,
        });
        break;
      case "arrowdown":
        componentsStates.SelectColor.selectedIndex =
          selectedIndex === remainColors.length - 1 ? 0 : selectedIndex + 1;
        gameProgressDispatch({
          type: "updateAll",
          payload: gameProgress,
        });
        break;
      case "d":
        gameProgressDispatch({
          type: "color",
          payload: remainColors[selectedIndex],
        });
        UIStateDispatch({
          type: "currentStep",
          payload:
            numberOfPlayers >= currentPlayerNumber
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
          numberOfPlayers >= currentPlayerNumber
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
        color={remainColors[selectedIndex]}
        job={currentPlayerJob}
        gender={currentPlayerGender}
        isFadeOut={isLeave}
      />
      <div
        className={classNames(styles.btnGroup, {
          [styles.leave]: isLeave,
        })}
        onAnimationEnd={handleAnimationEnd}
      >
        {remainColors.map((color) => (
          <ColorBtn
            rgb={colorsToRGB[color]}
            name={t(colorsToJP[color])}
            selected={color === remainColors[selectedIndex]}
            key={color}
          />
        ))}
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
