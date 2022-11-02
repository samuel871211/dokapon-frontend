// Related third party imports.
import {
  useState,
  useRef,
  useContext,
  useEffect,
  KeyboardEvent,
  AnimationEvent,
} from "react";

// Local application/library specific imports.
import CustomBorderBottom from "components/CustomBorderBottom";
import globalStyles from "assets/styles/globalStyles.module.css";
import styles from "./NPCGenerateDialog.module.css";
import { gameProgressContext } from "reducers/gameProgress";
import { UIStateContext } from "reducers/SelectCharacter/UIState";
import nameInputChars from "data/nameInputChars";
import colors from "data/colors";
import npcLevels from "data/npcLevels";
import { ColorTypes } from "global";
import useTranslation from "hooks/useTranslation";
import colorsToJP from "data/colorsToJP";
import npcLevelsToJP from "data/npcLevelsToJP";
import jobsToJP from "data/jobsToJP";

// Stateless vars declare.
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;

export default NPCGenerateDialog;

function NPCGenerateDialog(): JSX.Element {
  const { gameProgress, gameProgressDispatch } =
    useContext(gameProgressContext);
  const {
    currentPlayerNumber,
    playersAttrs,
    numberOfPlayers,
    componentsStates,
  } = gameProgress;
  const {
    NPCGenerateDialog: { selectedIndex },
  } = componentsStates;
  const { UIState, UIStateDispatch } = useContext(UIStateContext);
  const { npcsAttrsRegenerated } = UIState;
  const currentPlayer = playersAttrs[currentPlayerNumber - 1];
  const { gender, color, job, npcLevel } = currentPlayer;
  const focusElement = useRef<HTMLDivElement>(null);
  const [isLeave, toggleIsLeave] = useState(false);
  const { t } = useTranslation();

  useEffect(function reGenerateNPCAttrs() {
    if (npcsAttrsRegenerated[currentPlayerNumber - 1]) return;

    function removeUsedColors(colorList: ColorTypes[]) {
      playersAttrs.forEach((attrs) => {
        colorList.splice(colorList.indexOf(attrs.color), 1);
      });
      return colorList;
    }
    const colorList = removeUsedColors([...colors]);
    gameProgressDispatch({
      type: "color",
      payload: colorList[Math.getRandomIntInclusive(0, colorList.length - 1)],
    });
    gameProgressDispatch({
      type: "job",
      payload: "beginner",
    });
    gameProgressDispatch({
      type: "npcLevel",
      payload: npcLevels[Math.getRandomIntInclusive(0, npcLevels.length - 1)],
    });
    gameProgressDispatch({
      type: "gender",
      payload: Math.getRandomIntInclusive(0, 1) === 0 ? "male" : "female",
    });
    const newPayload: typeof npcsAttrsRegenerated = [...npcsAttrsRegenerated];
    newPayload[currentPlayerNumber - 1] = true;
    UIStateDispatch({
      type: "npcsAttrsRegenerated",
      payload: newPayload,
    });
  }, []);

  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case "arrowup":
        componentsStates.NPCGenerateDialog.selectedIndex =
          selectedIndex === 0 ? 4 : selectedIndex - 1;
        gameProgressDispatch({
          type: "updateAll",
          payload: gameProgress,
        });
        break;
      case "arrowdown":
        componentsStates.NPCGenerateDialog.selectedIndex =
          selectedIndex === 4 ? 0 : selectedIndex + 1;
        gameProgressDispatch({
          type: "updateAll",
          payload: gameProgress,
        });
        break;
      case "d":
        if (!focusElement.current) return;
        toggleIsLeave(true);
        focusElement.current.onanimationend = function handleConfirm() {
          switch (selectedIndex) {
            case 0:
              UIStateDispatch({
                type: "currentStep",
                payload: "SelectNPCLevel",
              });
              break;
            case 1:
              UIStateDispatch({
                type: "currentStep",
                payload: "SelectGender",
              });
              break;
            case 2:
              UIStateDispatch({
                type: "currentStep",
                payload: "SelectColor",
              });
              break;
            case 3:
              UIStateDispatch({
                type: "currentStep",
                payload: "SelectJob",
              });
              break;
            case 4:
              gameProgressDispatch({
                type: "name",
                payload: generateRandomName(),
              });
              if (currentPlayerNumber === 4) {
                UIStateDispatch({
                  type: "currentStep",
                  payload: "PlayerAttrsCollected",
                });
              }
              if (currentPlayerNumber !== 4) {
                gameProgressDispatch({
                  type: "currentPlayerNumber",
                  payload: currentPlayerNumber + 1,
                });
                UIStateDispatch({
                  type: "currentStep",
                  payload: "BeforeNPCGenerateDialog",
                });
              }
              break;
            default:
              break;
          }
        };
        break;
      case "x":
        if (!focusElement.current) return;
        toggleIsLeave(true);
        focusElement.current.onanimationend = function handleCancel() {
          const newCurrentPlayer = currentPlayerNumber - 1;
          gameProgressDispatch({
            type: "currentPlayerNumber",
            payload: newCurrentPlayer,
          });
          UIStateDispatch({
            type: "currentStep",
            payload:
              newCurrentPlayer === numberOfPlayers
                ? "SelectJob"
                : "BeforeNPCGenerateDialog",
          });
        };
        break;
      default:
        break;
    }
  }

  function handleAnimationEnd(e: AnimationEvent<HTMLDivElement>) {
    if (e.animationName === styles.slideLeft) {
      focusElement.current?.focus();
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
      <div className={styles.title}>勇者募集!!</div>
      <CustomBorderBottom />
      <div className={styles.bottom}>
        <div className={styles.imgContainer}>
          <img
            src={`${backendBaseUrl}/imgs/${job}_${gender}_${color}_front.png`}
          />
        </div>
        <div className={styles.btnGroup}>
          <Btn
            selected={selectedIndex === 0}
            content={npcLevel === "" ? "" : t(npcLevelsToJP[npcLevel])}
          />
          <Btn
            selected={selectedIndex === 1}
            content={gender === "male" ? t("男") : t("女")}
          />
          <Btn selected={selectedIndex === 2} content={t(colorsToJP[color])} />
          <Btn selected={selectedIndex === 3} content={t(jobsToJP[job])} />
          <ConfirmBtn selected={selectedIndex === 4} content={t("決定")} />
        </div>
      </div>
    </div>
  );
}

function ConfirmBtn(props: {
  selected: boolean;
  content: string;
}): JSX.Element {
  const { selected, content } = props;

  return (
    <div
      className={`${styles.confirmBtn} ${styles.btn} ${
        selected ? styles.hoverEffect : ""
      }`}
    >
      {content}
    </div>
  );
}

function Btn(props: { selected: boolean; content: string }): JSX.Element {
  const { selected, content } = props;

  return (
    <div
      className={`${styles.btn} ${selected ? globalStyles.hoverEffect : ""}`}
    >
      {content}
    </div>
  );
}

function generateRandomName(): string {
  const nameLength = Math.getRandomIntInclusive(1, 8);
  const allChars = [
    ...nameInputChars.hiragana[0],
    ...nameInputChars.hiragana[1],
    ...nameInputChars.katakana[0],
    ...nameInputChars.katakana[1],
    ...nameInputChars.special[0],
    ...nameInputChars.special[1],
  ].filter((char) => char !== "");

  let result = "";
  for (let i = 1; i <= nameLength; i++) {
    const randomIndex = Math.getRandomIntInclusive(0, allChars.length - 1);
    result += allChars[randomIndex];
  }
  return result;
}
