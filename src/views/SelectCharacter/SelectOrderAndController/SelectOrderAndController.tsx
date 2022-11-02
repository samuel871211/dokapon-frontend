// Related third party imports.
import { useContext, useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";

// Local application/library specific imports.
import type {
  GenderTypes,
  JobTypes,
  ColorTypes,
  NPCLevelTypes,
  SelectCharacter,
} from "global";
import CustomBorderBottom from "components/CustomBorderBottom";
import globalStyles from "assets/styles/globalStyles.module.css";
import styles from "./SelectOrderAndController.module.css";
import { gameProgressContext } from "reducers/gameProgress";
import { UIStateContext } from "reducers/SelectCharacter/UIState";

// Stateless vars declare.
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;

export default SelectOrderAndController;

function SelectOrderAndController(): JSX.Element {
  const focusElement = useRef<HTMLDivElement>(null);
  const [containerSlideOut, toggleContainerSlideOut] = useState(false);
  const [showOrderNumberIdx, setShowOrderNumberIdx] = useState(0);
  const [shuffleInterval, setShuffleInterval] = useState<number>();
  const [shuffleIndexes, setShuffleIndexes] = useState([0, 1, 2, 3]);
  const [selectedPlayerCard, setSelectedPlayerCard] = useState(1);
  const { gameProgress, gameProgressDispatch } =
    useContext(gameProgressContext);
  const [controllerNumbers, setControllerNumbers] = useState([
    gameProgress.playersAttrs[0].controllerNumber,
    gameProgress.playersAttrs[1].controllerNumber,
    gameProgress.playersAttrs[2].controllerNumber,
    gameProgress.playersAttrs[3].controllerNumber,
  ]);
  const { UIState, UIStateDispatch } = useContext(UIStateContext);
  const { currentStep, confirmDialogSelectedIdx } = UIState;
  const { numberOfPlayers, playersAttrs } = gameProgress;
  const handleKeyUpAttrs = (function () {
    switch (currentStep) {
      case "PlayerAttrsCollected":
      case "SelectOrderStep3":
        return {};
      case "SelectOrderStep1":
      case "SelectOrderStep2":
      case "SelectController":
      case "SelectControllerConfirm":
        return {
          tabIndex: 0,
          ref: focusElement,
          onBlur: reFocus,
          onKeyUp: handleKeyUp,
        };
      default:
        return {};
    }
  })();

  useLayoutEffect(() => {
    setShowOrderNumberIdx(0);
  }, [currentStep]);

  function handleAnimationEnd(e: React.AnimationEvent<HTMLDivElement>): void {
    if (e.animationName === styles.zoomOut) {
      setShowOrderNumberIdx(showOrderNumberIdx + 1);
      return;
    }

    if (e.animationName === styles.containerSlideOut) {
      UIStateDispatch({
        type: "currentStep",
        payload: "SelectOrderStep3",
      });
    }
  }

  function handleTransitionEnd(e: React.TransitionEvent<HTMLDivElement>): void {
    if (currentStep === "SelectController" && e.propertyName === "opacity") {
      focusElement.current?.focus();
      return;
    }

    if (
      e.propertyName === "transform" &&
      !shuffleInterval &&
      currentStep === "SelectOrderStep1"
    ) {
      const interval = window.setInterval(() => {
        shuffleIndexes.shuffle();
        const newShuffle = [...shuffleIndexes];
        setShuffleIndexes(newShuffle);
      }, 50);
      setShuffleInterval(interval);
      return;
    }
  }
  function reFocus(event: React.SyntheticEvent<HTMLDivElement>): void {
    event.currentTarget.focus();
  }
  function handleKeyUp(e: React.KeyboardEvent): void {
    if (currentStep === "SelectController") {
      switch (e.key.toLowerCase()) {
        case "arrowup": {
          const newSelectedPlayerCard =
            selectedPlayerCard === 1 ? numberOfPlayers : selectedPlayerCard - 1;
          setSelectedPlayerCard(newSelectedPlayerCard);
          break;
        }
        case "arrowdown": {
          const newSelectedPlayerCard =
            selectedPlayerCard === numberOfPlayers ? 1 : selectedPlayerCard + 1;
          setSelectedPlayerCard(newSelectedPlayerCard);
          break;
        }
        case "arrowleft": {
          const oldControllerNumber = controllerNumbers[selectedPlayerCard - 1];
          const newControllerNumber =
            oldControllerNumber === 1 ? 1 : oldControllerNumber - 1;
          const newControllerNumbers = [...controllerNumbers];
          newControllerNumbers[selectedPlayerCard - 1] = newControllerNumber;
          setControllerNumbers(newControllerNumbers);
          break;
        }
        case "arrowright": {
          const oldControllerNumber = controllerNumbers[selectedPlayerCard - 1];
          const newControllerNumber =
            oldControllerNumber === 4 ? 4 : oldControllerNumber + 1;
          const newControllerNumbers = [...controllerNumbers];
          newControllerNumbers[selectedPlayerCard - 1] = newControllerNumber;
          setControllerNumbers(newControllerNumbers);
          break;
        }
        case "d":
          gameProgressDispatch({
            type: "controllerNumber",
            payload: controllerNumbers,
          });
          UIStateDispatch({
            type: "currentStep",
            payload: "SelectControllerConfirm",
          });
          break;
        case "x":
          UIStateDispatch({
            type: "currentStep",
            payload: "BeforeNPCGenerateDialog",
          });
          break;
      }
      return;
    }

    if (currentStep === "SelectControllerConfirm") {
      switch (e.key.toLowerCase()) {
        case "arrowup":
        case "arrowdown":
          UIStateDispatch({
            type: "confirmDialogSelectedIdx",
            payload: confirmDialogSelectedIdx === 1 ? 0 : 1,
          });
          break;
        case "d":
          UIStateDispatch({
            type: "showConfirmDialog",
            payload: false,
          });
      }
      return;
    }

    if (currentStep === "SelectOrderStep1") {
      switch (e.key.toLowerCase()) {
        case "d":
          clearInterval(shuffleInterval);
          setShuffleInterval(undefined);
          gameProgressDispatch({
            type: "shuffle",
            payload: shuffleIndexes,
          });
          UIStateDispatch({
            type: "currentStep",
            payload: "SelectOrderStep2",
          });
          break;
        case "x":
          clearInterval(shuffleInterval);
          setShuffleInterval(undefined);
          UIStateDispatch({
            type: "currentStep",
            payload: "SelectControllerConfirm",
          });
      }
      return;
    }

    if (currentStep === "SelectOrderStep2" && showOrderNumberIdx === 4) {
      toggleContainerSlideOut(true);
      return;
    }
  }

  return (
    <div
      className={classNames(styles.container, {
        [styles.center]: currentStep === "SelectOrderStep1",
        [styles.containerSlideOut]: containerSlideOut,
      })}
      {...handleKeyUpAttrs}
      onTransitionEnd={handleTransitionEnd}
      onAnimationEnd={handleAnimationEnd}
    >
      {playersAttrs.map((attrs, index) => (
        <PlayerCard
          key={index}
          index={index}
          shuffleIndex={shuffleIndexes[index]}
          showOrderNumberIdx={showOrderNumberIdx}
          gender={attrs.gender}
          job={attrs.job}
          color={attrs.color}
          name={attrs.name}
          npcLevel={attrs.npcLevel}
          controllerNumber={controllerNumbers[index]}
          currentStep={currentStep}
          numberOfPlayers={numberOfPlayers}
          selected={selectedPlayerCard === index + 1}
        />
      ))}
    </div>
  );
}

function PlayerCard(props: {
  index: number;
  shuffleIndex: number;
  showOrderNumberIdx: number;
  gender: GenderTypes;
  job: JobTypes;
  color: ColorTypes;
  name: string;
  npcLevel: NPCLevelTypes | "";
  currentStep: SelectCharacter.Steps;
  numberOfPlayers: number;
  controllerNumber: number;
  selected: boolean;
}): JSX.Element {
  const {
    index,
    shuffleIndex,
    showOrderNumberIdx,
    gender,
    job,
    color,
    name,
    currentStep,
    numberOfPlayers,
    npcLevel,
    controllerNumber,
    selected,
  } = props;
  const showOrderNumber =
    currentStep === "SelectOrderStep2" && showOrderNumberIdx >= index;
  const isStep1 = currentStep === "SelectOrderStep1";
  return (
    <div
      className={classNames(styles.playerCardContainer, {
        [styles.gatherToCenter0]: isStep1 && index === 0,
        [styles.gatherToCenter1]: isStep1 && index === 1,
        [styles.gatherToCenter2]: isStep1 && index === 2,
        [styles.gatherToCenter3]: isStep1 && index === 3,
        [styles.slideRight]: currentStep === "SelectOrderStep2",
      })}
      style={{ zIndex: shuffleIndex }}
    >
      <div
        className={classNames(styles.orderNumber, {
          [styles.hide]: !showOrderNumber,
          [styles.showOrderNumber]: showOrderNumber,
        })}
      >
        {index}
      </div>
      <img src={`${backendBaseUrl}/imgs/${job}_${gender}_${color}_front.png`} />
      <div className={styles.nameContainer}>
        <span className={styles.nameArea}>{name}</span>
        <CustomBorderBottom />
      </div>
      <div
        className={classNames(styles.selectControllerContainer, {
          [globalStyles.hoverEffect]: selected,
          [styles.show]:
            numberOfPlayers >= index + 1 && currentStep === "SelectController",
          [styles.hide]: !(
            numberOfPlayers >= index + 1 && currentStep === "SelectController"
          ),
        })}
      >
        <div
          className={`${styles.leftTriangle}, ${styles.leftTriangleHoverEffect}`}
          style={{
            visibility: `${
              selected && controllerNumber !== 1 ? "visible" : "hidden"
            }`,
          }}
        ></div>
        <div className={styles.centeredText}>搖桿{controllerNumber}</div>
        <div
          className={`${styles.rightTriangle} ${styles.rightTriangleHoverEffect}`}
          style={{
            visibility: `${
              selected && controllerNumber !== 4 ? "visible" : "hidden"
            }`,
          }}
        ></div>
      </div>
      <div
        className={classNames(styles.controllerConfirmContainer, {
          [styles.show]: currentStep === "SelectControllerConfirm",
          [styles.hide]: currentStep !== "SelectControllerConfirm",
        })}
      >
        {npcLevel === "" ? `搖桿${controllerNumber}` : npcLevel}
      </div>
    </div>
  );
}
