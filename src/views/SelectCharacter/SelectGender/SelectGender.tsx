// Standard library imports.

// Related third party imports.
import React, { useRef, useState, useContext } from "react";

// Local application/library specific imports.
import { gameProgressContext } from "reducers/gameProgress";
import { UIStateContext } from "reducers/SelectCharacter/UIState";
import globalStyles from "assets/styles/globalStyles.module.css";
import styles from "./SelectGender.module.css";

// Stateless vars declare.
type gender = "male" | "female";
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;
const genderToCN = { male: "男", female: "女" };

export default SelectGender;
function SelectGender(): JSX.Element {
  const focusElement = useRef<HTMLDivElement>(null);
  const { gameProgress, gameProgressDispatch } =
    useContext(gameProgressContext);
  const { UIStateDispatch } = useContext(UIStateContext);
  const { currentPlayer, numberOfPlayers } = gameProgress;
  const [isLeave, toggleIsLeave] = useState(false);
  const [selectedGender, toggleSelectedGender] = useState<gender>("male");

  function handleKeyUp(e: React.KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case "arrowleft":
        toggleSelectedGender(selectedGender === "male" ? "female" : "male");
        break;
      case "arrowright":
        toggleSelectedGender(selectedGender === "male" ? "female" : "male");
        break;
      case "d":
        toggleIsLeave(true);
        UIStateDispatch({
          type: "showTitleArea",
          payload: false,
        });
        break;
      case "x": {
        const nextStep =
          (function determineNextStep(): Dokapon.SelectCharacter.Steps {
            if (currentPlayer === 1) return "SelectNumberOfPlayers";
            else if (numberOfPlayers >= currentPlayer) return "SelectJob";
            else return "NPCGenerateDialog";
          })();

        UIStateDispatch({
          type: "currentStep",
          payload: nextStep,
        });
        if (nextStep === "SelectJob") {
          gameProgressDispatch({
            type: "currentPlayer",
            payload: currentPlayer - 1,
          });
          UIStateDispatch({
            type: "selectedJob",
            payload: "",
          });
        }
        break;
      }
      default:
        break;
    }
  }
  function handleAnimationEnd(e: React.AnimationEvent<HTMLDivElement>) {
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
      gameProgressDispatch({
        type: "gender",
        payload: selectedGender,
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
      ref={focusElement}
      className={`${styles.btnGroup} ${isLeave ? styles.leave : ""}`}
      tabIndex={0}
      onBlur={(event) => event.target.focus()}
      onKeyUp={handleKeyUp}
      onAnimationEnd={handleAnimationEnd}
    >
      <GenderBlockBtn gender="male" selected={selectedGender === "male"} />
      <GenderBlockBtn gender="female" selected={selectedGender === "female"} />
    </div>
  );
}

function GenderBlockBtn(props: {
  gender: gender;
  selected: boolean;
}): JSX.Element {
  const { gender, selected } = props;
  const imgSrc = `${backendBaseUrl}/imgs/beginner_${gender}_red_front.png`;

  return (
    <div className={styles.genderBlock}>
      <img
        src={imgSrc}
        alt={genderToCN[gender]}
        className={selected ? styles.darkenImg : ""}
      />
      <div
        className={`${styles.btn} ${selected ? globalStyles.hoverEffect : ""}`}
      >
        <img src="" />
        <div className={styles.btnText}>{genderToCN[gender]}</div>
      </div>
    </div>
  );
}
