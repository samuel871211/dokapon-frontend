// Standard library imports.

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
import globalStyles from "assets/styles/globalStyles.module.css";
import styles from "./SelectGoalType.module.css";

// Stateless vars declare.

export default SelectGoalType;

function SelectGoalType(): JSX.Element {
  const focusElement = useRef<HTMLDivElement>(null);
  const { gameProgressDispatch, gameProgress } =
    useContext(gameProgressContext);
  const { UIStateDispatch } = useContext(UIStateContext);

  const { goalType } = gameProgress;
  const [isLeave, toggleIsLeave] = useState(false);
  const [selectedGoalType, toggleSelectedGoalType] = useState(goalType);

  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case "arrowup":
        toggleSelectedGoalType(
          selectedGoalType === "period" ? "money" : "period"
        );
        break;
      case "arrowdown":
        toggleSelectedGoalType(
          selectedGoalType === "period" ? "money" : "period"
        );
        break;
      case "d":
        if (!focusElement.current) break;

        (function handleAnimation() {
          toggleIsLeave(true);
          UIStateDispatch({
            type: "showTitleArea",
            payload: false,
          });
        })();
        focusElement.current.onanimationend = function handleNextComponent() {
          gameProgressDispatch({
            type: "goalType",
            payload: selectedGoalType,
          });
          UIStateDispatch({
            type: "currentStep",
            payload: "GoalInputDialog",
          });
        };
        break;
      case "x":
        // TODO: handle animation
        window.location.assign("/");
        break;
      default:
        break;
    }
  }

  function autoFocusElement(e: AnimationEvent<HTMLDivElement>): void {
    if (e.animationName === styles.slideIn) {
      focusElement.current?.focus();
    }
  }

  return (
    <div
      ref={focusElement}
      className={`${styles.container} ${isLeave ? styles.leave : ""}`}
      tabIndex={0}
      onBlur={(event) => event.target.focus()}
      onKeyUp={handleKeyUp}
      onAnimationEnd={autoFocusElement}
    >
      <IconTextBtn text="????????????" selected={selectedGoalType === "period"} />
      <IconTextBtn text="????????????" selected={selectedGoalType === "money"} />
    </div>
  );
}

function IconTextBtn(props: { text: string; selected: boolean }): JSX.Element {
  const { text, selected } = props;
  return (
    <div
      className={`${styles.btn} ${selected ? globalStyles.hoverEffect : ""}`}
    >
      <div className={styles.imgContainer}>
        <img className={styles.img} />
      </div>
      <span>{text}</span>
    </div>
  );
}
