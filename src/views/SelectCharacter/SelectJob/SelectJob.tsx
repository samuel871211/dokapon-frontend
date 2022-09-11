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
import styles from "./SelectJob.module.css";
import { gameProgressContext } from "reducers/gameProgress";
import { UIStateContext } from "reducers/SelectCharacter/UIState";
import { basicJobTypes } from "data/jobs";
import { BasicJobTypes } from "global";

// Stateless vars declare.

export default SelectJob;

function SelectJob(): JSX.Element {
  const { gameProgress, gameProgressDispatch } =
    useContext(gameProgressContext);
  const { UIStateDispatch } = useContext(UIStateContext);
  const { numberOfPlayers, currentPlayer, playersAttrs } = gameProgress;
  const { color, gender, job } = playersAttrs[currentPlayer - 1];
  console.log(job);
  const focusElement = useRef<HTMLDivElement>(null);
  const [selectedIdx, setSelectedIdx] = useState(basicJobTypes.indexOf(job));
  const [isLeave, toggleIsLeave] = useState(false);

  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case "arrowup": {
        const newIdx = selectedIdx === 0 ? 4 : selectedIdx - 1;
        UIStateDispatch({
          type: "selectedJob",
          payload: basicJobTypes[newIdx] as BasicJobTypes,
          // payload: basicJobTypes[newIdx],
        });
        setSelectedIdx(newIdx);
        break;
      }
      case "arrowdown": {
        const newIdx = selectedIdx === 4 ? 0 : selectedIdx + 1;
        UIStateDispatch({
          type: "selectedJob",
          payload: basicJobTypes[newIdx] as BasicJobTypes,
        });
        setSelectedIdx(newIdx);
        break;
      }
      case "d":
        if (currentPlayer === numberOfPlayers) {
          UIStateDispatch({
            type: "showTitleArea",
            payload: false,
          });
        }

        toggleIsLeave(true);
        break;
      case "x":
        UIStateDispatch({
          type: "selectedJob",
          payload: "",
        });
        UIStateDispatch({
          type: "currentStep",
          payload:
            numberOfPlayers >= currentPlayer
              ? "SelectColor"
              : "NPCGenerateDialog",
        });
        break;
      default:
        break;
    }
  }

  function handleAnimationEnd(e: AnimationEvent<HTMLDivElement>) {
    function determineNextStep() {
      if (currentPlayer < numberOfPlayers) return "SelectGender";
      if (currentPlayer === 4) return "PlayerAttrsCollected";
      if (currentPlayer === numberOfPlayers) return "BeforeNPCGenerateDialog";
      return "NPCGenerateDialog";
    }
    if (e.animationName.includes("slideLeft")) {
      focusElement.current?.focus();
      return;
    }
    if (e.animationName.includes("slideRight")) {
      gameProgressDispatch({
        type: "job",
        payload: basicJobTypes[selectedIdx] as BasicJobTypes,
      });
      const nextStep = determineNextStep();
      UIStateDispatch({
        type: "currentStep",
        payload: nextStep,
      });

      if (nextStep === "NPCGenerateDialog") return;
      if (currentPlayer === 4) return;
      const newCurrentPlayer = currentPlayer + 1;
      gameProgressDispatch({
        type: "currentPlayer",
        payload: newCurrentPlayer,
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
        color={color}
        job={basicJobTypes[selectedIdx]}
        gender={gender}
        isFadeOut={isLeave}
      />
      <div
        className={`
                ${styles.btnGroup}
                ${isLeave ? styles.leave : ""}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {basicJobTypes.map((basicJob, idx) => (
          <JobBtn
            name={basicJob}
            selected={idx === selectedIdx}
            key={basicJob}
          />
        ))}
      </div>
    </div>
  );
}

function JobBtn(props: { name: string; selected: boolean }): JSX.Element {
  const { name, selected } = props;
  return (
    <div
      className={`${styles.btn} ${selected ? globalStyles.hoverEffect : ""}`}
    >
      {name}
    </div>
  );
}
