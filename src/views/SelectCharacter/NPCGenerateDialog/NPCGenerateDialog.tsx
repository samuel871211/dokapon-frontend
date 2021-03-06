// Standard library imports.

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
import { COLORS, BASICJOBS, NPCLEVELS } from "graphics/characters";
import nameInputChars from "data/nameInputChars";
import Dokapon from "global";
import { basicJobTypes } from "data/jobs";
import colors from "data/colors";
import npcLevels from "data/npcLevels";
import genders from "data/genders";

// Stateless vars declare.
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;

export default NPCGenerateDialog;

function NPCGenerateDialog(): JSX.Element {
  const { gameProgress, gameProgressDispatch } =
    useContext(gameProgressContext);
  const { currentPlayer, playersAttrs, numberOfPlayers } = gameProgress;
  const { UIState, UIStateDispatch } = useContext(UIStateContext);
  const { npcsAttrsRegenerated } = UIState;
  const currentPlayerAttrs = playersAttrs[currentPlayer - 1];
  const { gender, color, job, npcLevel } = currentPlayerAttrs;
  const focusElement = useRef<HTMLDivElement>(null);
  const [selectedIdx, setSelectedIdx] = useState(4);
  const [isLeave, toggleIsLeave] = useState(false);

  useEffect(function reGenerateNPCAttrs() {
    if (npcsAttrsRegenerated[currentPlayer - 1]) return;

    function removeUsedColors(
      colorList: Dokapon.ColorTypes[]
    ): Dokapon.ColorTypes[] {
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
      payload:
        basicJobTypes[Math.getRandomIntInclusive(0, basicJobTypes.length - 1)],
    });
    gameProgressDispatch({
      type: "npcLevel",
      payload: npcLevels[Math.getRandomIntInclusive(0, npcLevels.length - 1)],
    });
    gameProgressDispatch({
      type: "gender",
      payload: genders[Math.getRandomIntInclusive(0, genders.length - 1)],
    });
    const newPayload: typeof npcsAttrsRegenerated = [...npcsAttrsRegenerated];
    newPayload[currentPlayer - 1] = true;
    UIStateDispatch({
      type: "npcsAttrsRegenerated",
      payload: newPayload,
    });
  }, []);

  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case "arrowup":
        setSelectedIdx(selectedIdx === 0 ? 4 : selectedIdx - 1);
        break;
      case "arrowdown":
        setSelectedIdx(selectedIdx === 4 ? 0 : selectedIdx + 1);
        break;
      case "d":
        if (!focusElement.current) return;
        toggleIsLeave(true);
        focusElement.current.onanimationend = function handleConfirm() {
          switch (selectedIdx) {
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
              if (currentPlayer === 4) {
                UIStateDispatch({
                  type: "currentStep",
                  payload: "PlayerAttrsCollected",
                });
              }
              if (currentPlayer !== 4) {
                gameProgressDispatch({
                  type: "currentPlayer",
                  payload: currentPlayer + 1,
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
          const newCurrentPlayer = currentPlayer - 1;
          gameProgressDispatch({
            type: "currentPlayer",
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
      <div className={styles.title}>????????????!!</div>
      <CustomBorderBottom />
      <div className={styles.bottom}>
        <div className={styles.imgContainer}>
          <img
            src={`${backendBaseUrl}/imgs/${job}_${gender}_${color}_front.png`}
          />
        </div>
        <div className={styles.btnGroup}>
          <Btn
            selected={selectedIdx === 0}
            content={npcLevel === "" ? "" : NPCLEVELS[npcLevel].chinese}
          />
          <Btn
            selected={selectedIdx === 1}
            content={gender === "male" ? "???" : "???"}
          />
          <Btn selected={selectedIdx === 2} content={COLORS[color].chinese} />
          <Btn
            selected={selectedIdx === 3}
            content={BASICJOBS[job]?.chinese || ""}
          />
          <ConfirmBtn selected={selectedIdx === 4} content="??????" />
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
