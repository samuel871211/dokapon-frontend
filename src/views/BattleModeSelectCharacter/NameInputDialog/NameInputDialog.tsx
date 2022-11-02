// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import nameInputChars from "data/nameInputChars";
import styles from "./NameInputDialog.module.css";
import globalStyles from "assets/styles/globalStyles.module.css";
import YellowBlock from "layouts/YellowBlock";
import { newGameProgressContext } from "reducers/newGameProgress";

// Stateless vars declare.

export default NameInputDialog;

/**
 * @todo 上方的nameInputChars跟下方的keyboardKeys，hoverEffect希望能同步
 */
function NameInputDialog() {
  const { newGameProgress } = useContext(newGameProgressContext);
  const { currentView } = newGameProgress;
  if (
    currentView !== "BattleModeSelectCharacter" &&
    currentView !== "StoryModeSelectCharacter"
  )
    throw new Error("currentView is not SelectCharacter");

  const {
    NameInputDialog: {
      keyboardType,
      nameInputArray,
      selectedSectionIdx,
      selectedWordIdx,
      curNameInputIdx,
    },
  } = newGameProgress[currentView];

  return (
    <div className={styles.nameInputDialogContainer}>
      <YellowBlock
        borderRadius="9999px"
        className={styles.nameDisplayArea}
        role="dialog"
      >
        {nameInputArray.map((word, index) => (
          <NameInputWord
            word={word}
            selected={curNameInputIdx === index}
            key={index}
          />
        ))}
      </YellowBlock>
      <YellowBlock
        borderRadius="1.5rem"
        role="dialog"
        className={styles.keyboardArea}
      >
        <div className={styles.keyboardSection}>
          {nameInputChars[keyboardType][0].map((word, index) => (
            <KeyBoardKey
              word={word}
              key={index}
              selected={selectedSectionIdx === 0 && selectedWordIdx === index}
            />
          ))}
        </div>
        <div className={styles.keyboardSection}>
          {nameInputChars[keyboardType][1].map((word, index) => (
            <KeyBoardKey
              word={word}
              key={index}
              selected={selectedSectionIdx === 1 && selectedWordIdx === index}
            />
          ))}
        </div>
        <div className={styles.keyboardMenu}>
          {nameInputChars.menu.map((word, index) => (
            <KeyBoardMenuItem
              word={word}
              key={index}
              selected={selectedSectionIdx === 2 && selectedWordIdx === index}
            />
          ))}
        </div>
      </YellowBlock>
    </div>
  );
}

function KeyBoardMenuItem(props: { word: string; selected: boolean }) {
  const { word, selected } = props;

  return (
    <div className={styles.keyboardMenuItem}>
      <span className={selected ? globalStyles.hoverEffect : ""}>{word}</span>
    </div>
  );
}

function KeyBoardKey(props: { word: string; selected: boolean }) {
  const { word, selected } = props;
  return (
    <div className={styles.keyboardKey}>
      <span className={selected ? globalStyles.hoverEffect : ""}>{word}</span>
    </div>
  );
}

function NameInputWord(props: { word: string; selected: boolean }) {
  const { word, selected } = props;

  return (
    <div className={styles.nameInputWord}>
      <span className={selected ? globalStyles.hoverEffect : ""}>{word}</span>
      <div className={styles.bottomLine}></div>
    </div>
  );
}
