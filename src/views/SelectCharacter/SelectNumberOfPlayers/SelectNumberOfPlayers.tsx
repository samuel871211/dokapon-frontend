// Related third party imports.
import {
  useState,
  useRef,
  useContext,
  KeyboardEvent,
  AnimationEvent,
  FocusEvent,
} from "react";

// Local application/library specific imports.
import { SomeKindOfIcon } from "components/icons";
import styles from "./SelectNumberOfPlayers.module.css";
import globalStyles from "assets/styles/globalStyles.module.css";
import { gameProgressContext } from "reducers/gameProgress";
import { UIStateContext } from "reducers/SelectCharacter/UIState";

// Stateless vars declare.
const digitToFullWidth = ["", "１", "２", "３", "４"];

export default SelectNumberOfPlayers;

function SelectNumberOfPlayers(): JSX.Element {
  const focusElement = useRef<HTMLDivElement>(null);
  const { UIStateDispatch } = useContext(UIStateContext);
  const {
    gameProgressDispatch,
    gameProgress: { numberOfPlayers },
  } = useContext(gameProgressContext);
  const [isLeave, toggleIsLeave] = useState(false);
  const [keyDownEvtRegister, toggleKeyDownRegister] = useState(true);

  function keyDownAttrs() {
    if (keyDownEvtRegister)
      return {
        tabIndex: 0,
        onKeyUp: handleKeyUp,
        onAnimationEnd: handleAnimationEnd,
        onBlur: reFocus,
      };

    return {};
  }
  function reFocus(event: FocusEvent<HTMLDivElement>) {
    event.currentTarget.focus();
  }
  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case "arrowup":
        gameProgressDispatch({
          type: "numberOfPlayers",
          payload: numberOfPlayers === 1 ? 4 : numberOfPlayers - 1,
        });
        break;
      case "arrowdown":
        gameProgressDispatch({
          type: "numberOfPlayers",
          payload: numberOfPlayers === 4 ? 1 : numberOfPlayers + 1,
        });
        break;
      case "d":
        if (numberOfPlayers === 1) {
          UIStateDispatch({
            type: "currentStep",
            payload: "OnlyOnePlayer",
          });
          toggleKeyDownRegister(false);
          break;
        }
        if (!focusElement.current) break;
        toggleIsLeave(true);
        focusElement.current.onanimationend = function handleNextComponent() {
          UIStateDispatch({
            type: "currentStep",
            payload: "SelectGender",
          });
        };
        break;
      case "x":
        UIStateDispatch({
          type: "currentStep",
          payload: "GoalInputDialog",
        });
        break;
      default:
        break;
    }
  }
  function handleAnimationEnd(e: AnimationEvent<HTMLDivElement>): void {
    if (e.animationName === styles.slideIn) {
      focusElement.current?.focus();
    }
  }

  /* Box無法加入ref這個prop => 改用div */
  /* 為何使用useRef => https://stackoverflow.com/questions/37273876/reactjs-this-refs-vs-document-getelementbyid/37274379 */
  /* ts搭配useRef各種噴錯 => https://linguinecode.com/post/how-to-use-react-useref-with-typescript */
  return (
    <div
      ref={focusElement}
      className={`${styles.selectNumberOfPlayersContainer} ${
        isLeave ? styles.leave : ""
      }`}
      {...keyDownAttrs()}
    >
      <NumberOfPlayersBtn playerNum={1} selected={numberOfPlayers === 1} />
      <NumberOfPlayersBtn playerNum={2} selected={numberOfPlayers === 2} />
      <NumberOfPlayersBtn playerNum={3} selected={numberOfPlayers === 3} />
      <NumberOfPlayersBtn playerNum={4} selected={numberOfPlayers === 4} />
    </div>
  );
}

function NumberOfPlayersBtn(props: {
  playerNum: number;
  selected: boolean;
}): JSX.Element {
  const { playerNum, selected } = props;
  function generateIcons() {
    const icons = [];
    for (let i = 0; i < 4; i++) {
      if (i < playerNum) {
        icons.push(<SomeKindOfIcon key={i} />);
      } else {
        icons.push(<SomeKindOfIcon key={i} />);
      }
    }
    return icons;
  }
  return (
    <div
      className={`${styles.btn} ${selected ? globalStyles.hoverEffect : ""}`}
    >
      {generateIcons()}
      <div className={styles.btnText}>{digitToFullWidth[playerNum]}人</div>
    </div>
  );
}
