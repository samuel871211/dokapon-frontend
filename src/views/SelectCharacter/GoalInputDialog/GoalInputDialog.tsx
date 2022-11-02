// Related third party imports.
import {
  useState,
  useRef,
  useContext,
  AnimationEvent,
  KeyboardEvent,
} from "react";

// Local application/library specific imports.
import { gameProgressContext } from "reducers/gameProgress";
import { UIStateContext } from "reducers/SelectCharacter/UIState";
import CustomBorderBottom from "components/CustomBorderBottom";
import globalStyles from "assets/styles/globalStyles.module.css";
import styles from "./GoalInputDialog.module.css";
import useTranslation from "hooks/useTranslation";

// Stateless vars declare.
function transferArrayToNumber(arr: string[]) {
  return parseInt(arr.join(""));
}

export default GoalInputDialog;

/**
 * @todo when entering, set `selectedIndex` to `goalInputLen` - 1
 */
function GoalInputDialog(): JSX.Element {
  const { gameProgress, gameProgressDispatch } =
    useContext(gameProgressContext);
  const { UIStateDispatch } = useContext(UIStateContext);
  const { goalType, goalInput, componentsStates } = gameProgress;
  const { selectedIndex } = componentsStates.GoalInputDialog;
  const [isLeave, toggleIsleave] = useState(false);
  const goalInputLen = goalType === "period" ? 3 : 9;
  const goalUnit = goalType === "period" ? "週" : "¥";
  const focusElement = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  function handleAnimationEnd(e: AnimationEvent): void {
    if (e.animationName === styles.slideIn) {
      focusElement.current?.focus();
    }
  }

  function handleKeyUp(e: KeyboardEvent): void {
    switch (e.key.toLowerCase()) {
      case "arrowup":
        (function handleAdd() {
          const fillEmpty = "0";
          const goalInputArr = transferNumberToArray(goalInput, fillEmpty);
          let focusNumber = goalInputArr[selectedIndex];
          if (focusNumber === "") focusNumber = "1";
          else if (focusNumber === "9") focusNumber = "0";
          else focusNumber = String(parseInt(focusNumber) + 1);
          goalInputArr[selectedIndex] = focusNumber;
          gameProgressDispatch({
            type: "goalInput",
            payload: transferArrayToNumber(goalInputArr),
          });
        })();
        break;
      case "arrowdown":
        (function handleMinus() {
          const fillEmpty = "0";
          const goalInputArr = transferNumberToArray(goalInput, fillEmpty);
          let focusNumber = goalInputArr[selectedIndex];
          if (focusNumber === "") focusNumber = "9";
          else if (focusNumber === "0") focusNumber = "9";
          else focusNumber = String(parseInt(focusNumber) - 1);
          goalInputArr[selectedIndex] = focusNumber;
          gameProgressDispatch({
            type: "goalInput",
            payload: transferArrayToNumber(goalInputArr),
          });
        })();
        break;
      case "arrowleft":
        if (selectedIndex !== 0) {
          componentsStates.GoalInputDialog.selectedIndex = selectedIndex - 1;
          gameProgressDispatch({
            type: "updateAll",
            payload: gameProgress,
          });
          return;
        }

        gameProgressDispatch({
          type: "goalInput",
          payload: Math.pow(10, goalInputLen) - 1,
        });
        break;
      case "arrowright":
        if (selectedIndex !== goalInputLen - 1) {
          componentsStates.GoalInputDialog.selectedIndex = selectedIndex + 1;
          gameProgressDispatch({
            type: "updateAll",
            payload: gameProgress,
          });
          return;
        }

        gameProgressDispatch({
          type: "goalInput",
          payload: 0,
        });
        break;
      case "d":
        if (!focusElement.current) break;

        toggleIsleave(true);
        focusElement.current.onanimationend = function handleNextComponent() {
          gameProgressDispatch({
            type: "goalInput",
            payload: goalInput,
          });
          UIStateDispatch({
            type: "currentStep",
            payload: "SelectNumberOfPlayers",
          });
        };
        break;
      case "x":
        UIStateDispatch({
          type: "currentStep",
          payload: "SelectGoalType",
        });
        break;
      default:
        break;
    }
  }

  function transferNumberToArray(num: number, fillEmpty: string) {
    const result = String(num).split("");
    const initResultLen = result.length;
    for (let i = 0; i < goalInputLen - initResultLen; i++) {
      result.unshift(fillEmpty);
    }
    return result;
  }

  function generateInputBlocks() {
    const inputBlocks: JSX.Element[] = [];
    const fillEmpty = "";
    const numberToArray = transferNumberToArray(goalInput, fillEmpty);

    for (let i = 0; i < goalInputLen; i++) {
      inputBlocks.push(
        <GoalInputBtn
          text={numberToArray[i]}
          selected={selectedIndex === i}
          key={i}
        />
      );
    }
    return inputBlocks;
  }

  return (
    <div
      className={`${styles.goalInputDialogContainer} ${
        isLeave ? styles.leave : ""
      }`}
      tabIndex={0}
      ref={focusElement}
      onBlur={(event) => event.target.focus()}
      onKeyUp={handleKeyUp}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={styles.title}>
        {goalType === "period" ? t("目標期間") : t("目標金額")}
      </div>
      <CustomBorderBottom />
      <div className={styles.bottom}>
        <div className={styles.btnGroup}>{generateInputBlocks()}</div>
        <div className={styles.unit}>{goalUnit}</div>
      </div>
    </div>
  );
}

function GoalInputBtn(props: { text: string; selected: boolean }): JSX.Element {
  const { text, selected } = props;
  return (
    <div
      className={`${styles.btn} ${selected ? globalStyles.hoverEffect : ""}`}
    >
      {text}
    </div>
  );
}
