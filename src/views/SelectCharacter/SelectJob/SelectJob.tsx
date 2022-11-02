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
import { basicJobs } from "data/jobs";
import { BasicJobTypes } from "global";
import jobsToJP from "data/jobsToJP";
import useTranslation from "hooks/useTranslation";

// Stateless vars declare.

export default SelectJob;

/**
 * @todo set selectedIndex to currentPlayer.job when entering
 */
function SelectJob(): JSX.Element {
  const { gameProgress, gameProgressDispatch } =
    useContext(gameProgressContext);
  const { UIStateDispatch } = useContext(UIStateContext);
  const {
    numberOfPlayers,
    currentPlayerNumber,
    playersAttrs,
    componentsStates,
  } = gameProgress;
  const {
    color: currentPlayerColor,
    gender: currentPlayerGender,
    job: currentPlayerJob,
  } = playersAttrs[currentPlayerNumber - 1];
  const indexWhenPrevStep = basicJobs.indexOf(currentPlayerJob);
  const {
    SelectJob: { selectedIndex },
  } = componentsStates;
  const focusElement = useRef<HTMLDivElement>(null);
  const [isLeave, toggleIsLeave] = useState(false);
  const { t } = useTranslation();

  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case "arrowup": {
        const newIdx = selectedIndex === 0 ? 4 : selectedIndex - 1;
        UIStateDispatch({
          type: "selectedJob",
          payload: basicJobs[newIdx] as BasicJobTypes,
        });
        componentsStates.SelectJob.selectedIndex = newIdx;
        gameProgressDispatch({
          type: "updateAll",
          payload: gameProgress,
        });
        break;
      }
      case "arrowdown": {
        const newIdx = selectedIndex === 4 ? 0 : selectedIndex + 1;
        UIStateDispatch({
          type: "selectedJob",
          payload: basicJobs[newIdx] as BasicJobTypes,
        });
        componentsStates.SelectJob.selectedIndex = newIdx;
        gameProgressDispatch({
          type: "updateAll",
          payload: gameProgress,
        });
        break;
      }
      case "d":
        if (currentPlayerNumber === numberOfPlayers) {
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
            numberOfPlayers >= currentPlayerNumber
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
      if (currentPlayerNumber < numberOfPlayers) return "SelectGender";
      if (currentPlayerNumber === 4) return "PlayerAttrsCollected";
      if (currentPlayerNumber === numberOfPlayers)
        return "BeforeNPCGenerateDialog";
      return "NPCGenerateDialog";
    }
    if (e.animationName.includes("slideLeft")) {
      focusElement.current?.focus();
      return;
    }
    if (e.animationName.includes("slideRight")) {
      gameProgressDispatch({
        type: "job",
        payload: basicJobs[selectedIndex] as BasicJobTypes,
      });
      const nextStep = determineNextStep();
      UIStateDispatch({
        type: "currentStep",
        payload: nextStep,
      });

      if (nextStep === "NPCGenerateDialog") return;
      if (currentPlayerNumber === 4) return;
      const newCurrentPlayer = currentPlayerNumber + 1;
      gameProgressDispatch({
        type: "currentPlayerNumber",
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
        color={currentPlayerColor}
        job={basicJobs[selectedIndex]}
        gender={currentPlayerGender}
        isFadeOut={isLeave}
      />
      <div
        className={`
                ${styles.btnGroup}
                ${isLeave ? styles.leave : ""}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {basicJobs.map((basicJob, idx) => (
          <JobBtn
            name={t(jobsToJP[basicJob])}
            selected={idx === selectedIndex}
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
