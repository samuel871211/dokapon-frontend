// Related third party imports.
import {
  useState,
  useRef,
  useContext,
  AnimationEvent,
  KeyboardEvent,
} from "react";
import classNames from "classnames";

// Local application/library specific imports.
import nameInputChars from "data/nameInputChars";
import styles from "./NameInputDialog.module.css";
import globalStyles from "assets/styles/globalStyles.module.css";
import { gameProgressContext } from "reducers/gameProgress";
import { UIStateContext } from "reducers/SelectCharacter/UIState";

// Stateless vars declare.

export default NameInputDialog;

/**
 * @todo 上方的nameInputChars跟下方的keyboardKeys，hoverEffect希望能同步
 */
function NameInputDialog(): JSX.Element {
  const focusElement = useRef<HTMLDivElement>(null);
  const { gameProgress, gameProgressDispatch } =
    useContext(gameProgressContext);
  const { currentPlayerNumber, playersAttrs, componentsStates } = gameProgress;
  const {
    NameInputDialog: { selectedSectionIdx, selectedWordIdx, keyboardType },
  } = componentsStates;
  const { UIStateDispatch } = useContext(UIStateContext);
  const [isLeave, toggleIsLeave] = useState(false);
  const [nameInputWords, setNameInputWords] = useState(getInitNameArr());
  const [curNameInputIdx, setCurNameInputIdx] = useState(getInitInputIdx());

  function getInitNameArr() {
    const initName = playersAttrs[currentPlayerNumber - 1].name;
    const result = initName.split("");
    while (result.length < 8) result.push("　");
    return result;
  }
  function getInitInputIdx() {
    const initName = playersAttrs[currentPlayerNumber - 1].name.trim();
    return initName.length === 0 ? 0 : initName.length - 1;
  }
  function handleAnimationEnd(e: AnimationEvent<HTMLDivElement>): void {
    if (e.animationName.includes("slideLeft")) {
      focusElement.current?.focus();
      return;
    }
  }
  function handleKeyUp(e: KeyboardEvent): void {
    switch (e.key.toLowerCase()) {
      case "arrowup":
        (function handleSelectedWordIdx() {
          switch (selectedSectionIdx) {
            case 0:
            case 1:
              switch (selectedWordIdx) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                  componentsStates.NameInputDialog.selectedWordIdx =
                    selectedWordIdx + 40;
                  gameProgressDispatch({
                    type: "updateAll",
                    payload: gameProgress,
                  });
                  break;
                default:
                  componentsStates.NameInputDialog.selectedWordIdx =
                    selectedWordIdx - 5;
                  gameProgressDispatch({
                    type: "updateAll",
                    payload: gameProgress,
                  });
                  break;
              }
              break;
            case 2:
              componentsStates.NameInputDialog.selectedWordIdx =
                selectedWordIdx === 0 ? 8 : selectedWordIdx - 1;
              gameProgressDispatch({
                type: "updateAll",
                payload: gameProgress,
              });
              break;
          }
        })();
        break;
      case "arrowdown":
        (function handleSelectedWordIdx() {
          switch (selectedSectionIdx) {
            case 0:
            case 1:
              switch (selectedWordIdx) {
                case 40:
                case 41:
                case 42:
                case 43:
                case 44:
                  componentsStates.NameInputDialog.selectedWordIdx =
                    selectedWordIdx - 40;
                  gameProgressDispatch({
                    type: "updateAll",
                    payload: gameProgress,
                  });
                  break;
                default:
                  componentsStates.NameInputDialog.selectedWordIdx =
                    selectedWordIdx + 5;
                  gameProgressDispatch({
                    type: "updateAll",
                    payload: gameProgress,
                  });
                  break;
              }
              break;
            case 2:
              componentsStates.NameInputDialog.selectedWordIdx =
                selectedWordIdx === 8 ? 0 : selectedWordIdx + 1;
              gameProgressDispatch({
                type: "updateAll",
                payload: gameProgress,
              });
              break;
          }
        })();
        break;
      case "arrowleft":
        (function handleSelectedWordIdx() {
          switch (selectedSectionIdx) {
            case 0:
              if (selectedWordIdx % 5 === 0) {
                componentsStates.NameInputDialog.selectedSectionIdx = 2;
                componentsStates.NameInputDialog.selectedWordIdx = Math.floor(
                  selectedWordIdx / 5
                );
              } else if (selectedWordIdx % 5 !== 0) {
                componentsStates.NameInputDialog.selectedWordIdx =
                  selectedWordIdx - 1;
              }
              gameProgressDispatch({
                type: "updateAll",
                payload: gameProgress,
              });
              break;
            case 1:
              if (selectedWordIdx % 5 === 0) {
                componentsStates.NameInputDialog.selectedSectionIdx = 0;
                componentsStates.NameInputDialog.selectedWordIdx =
                  selectedWordIdx + 4;
              } else if (selectedWordIdx % 5 !== 0) {
                componentsStates.NameInputDialog.selectedWordIdx =
                  selectedWordIdx - 1;
              }
              gameProgressDispatch({
                type: "updateAll",
                payload: gameProgress,
              });
              break;
            case 2:
              componentsStates.NameInputDialog.selectedSectionIdx = 1;
              componentsStates.NameInputDialog.selectedWordIdx =
                selectedWordIdx * 5 + 4;
              gameProgressDispatch({
                type: "updateAll",
                payload: gameProgress,
              });
              break;
          }
        })();
        break;
      case "arrowright":
        (function handleSelectedWordIdx() {
          switch (selectedSectionIdx) {
            case 0:
              if (selectedWordIdx % 5 === 4) {
                componentsStates.NameInputDialog.selectedSectionIdx = 1;
                componentsStates.NameInputDialog.selectedWordIdx =
                  selectedWordIdx - 4;
              } else if (selectedWordIdx % 5 !== 4) {
                componentsStates.NameInputDialog.selectedWordIdx =
                  selectedWordIdx + 1;
              }
              gameProgressDispatch({
                type: "updateAll",
                payload: gameProgress,
              });
              break;
            case 1:
              if (selectedWordIdx % 5 === 4) {
                componentsStates.NameInputDialog.selectedSectionIdx = 2;
                componentsStates.NameInputDialog.selectedWordIdx = Math.floor(
                  selectedWordIdx / 5
                );
              } else if (selectedWordIdx % 5 !== 4) {
                componentsStates.NameInputDialog.selectedWordIdx =
                  selectedWordIdx + 1;
              }
              gameProgressDispatch({
                type: "updateAll",
                payload: gameProgress,
              });
              break;
            case 2:
              componentsStates.NameInputDialog.selectedSectionIdx = 0;
              componentsStates.NameInputDialog.selectedWordIdx =
                selectedWordIdx * 5;
              gameProgressDispatch({
                type: "updateAll",
                payload: gameProgress,
              });
              break;
          }
        })();
        break;
      case "d":
        switch (selectedSectionIdx) {
          case 0:
          case 1:
            (function handleNameInput() {
              const word =
                nameInputChars[keyboardType][selectedSectionIdx][
                  selectedWordIdx
                ];
              if (word.trim() === "") return;

              // replace/add word to current idx
              const newNameInputWords = [...nameInputWords];
              newNameInputWords[curNameInputIdx] = word;
              setNameInputWords(newNameInputWords);

              if (curNameInputIdx === 7) {
                // focus to 'ＯＫ' when input complete
                componentsStates.NameInputDialog.selectedSectionIdx = 2;
                componentsStates.NameInputDialog.selectedWordIdx = 8;
                gameProgressDispatch({
                  type: "updateAll",
                  payload: gameProgress,
                });
              } else {
                // otherwise, focus to next idx
                setCurNameInputIdx(curNameInputIdx + 1);
              }
            })();
            break;
          case 2:
            (function handleMenuItemClick() {
              const word = nameInputChars.menu[selectedWordIdx];
              switch (word) {
                case "平假名":
                  componentsStates.NameInputDialog.keyboardType = "hiragana";
                  gameProgressDispatch({
                    type: "updateAll",
                    payload: gameProgress,
                  });
                  break;
                case "片假名":
                  componentsStates.NameInputDialog.keyboardType = "katakana";
                  gameProgressDispatch({
                    type: "updateAll",
                    payload: gameProgress,
                  });
                  break;
                case "ＡＢＣ":
                  componentsStates.NameInputDialog.keyboardType = "special";
                  gameProgressDispatch({
                    type: "updateAll",
                    payload: gameProgress,
                  });
                  break;
                case "前進":
                  if (curNameInputIdx === 7) break;
                  setCurNameInputIdx(curNameInputIdx + 1);
                  break;
                case "後退":
                  if (curNameInputIdx === 0) break;
                  setCurNameInputIdx(curNameInputIdx - 1);
                  break;
                case "刪除":
                  if (nameInputWords[curNameInputIdx].trim() !== "") {
                    const newNameInputWords = [...nameInputWords];
                    for (let idx = 7; idx >= curNameInputIdx; idx--) {
                      if (newNameInputWords[idx].trim() !== "") {
                        newNameInputWords[idx] = "　";
                        setNameInputWords(newNameInputWords);
                        break;
                      }
                    }
                    break;
                  }

                  if (curNameInputIdx === 0) break;

                  setCurNameInputIdx(curNameInputIdx - 1);
                  break;
                case "ＯＫ": {
                  const emptyWords = nameInputWords.filter(
                    (word) => word.trim() === ""
                  );
                  if (emptyWords.length === nameInputWords.length) break;

                  toggleIsLeave(true);
                  if (!focusElement.current) break;
                  focusElement.current.onanimationend = () => {
                    gameProgressDispatch({
                      type: "name",
                      payload: nameInputWords.join("").trim(),
                    });
                    UIStateDispatch({
                      type: "currentStep",
                      payload: "SelectColor",
                    });
                  };
                  break;
                }
                default:
                  break;
              }
            })();
            break;
        }
        break;
      case "x":
        if (nameInputWords[curNameInputIdx].trim() !== "") {
          const newNameInputWords = [...nameInputWords];
          for (let idx = 7; idx >= curNameInputIdx; idx--) {
            if (newNameInputWords[idx].trim() !== "") {
              newNameInputWords[idx] = "　";
              setNameInputWords(newNameInputWords);
              break;
            }
          }
          break;
        }

        if (curNameInputIdx === 0) {
          toggleIsLeave(true);
          if (!focusElement.current) break;
          focusElement.current.onanimationend = () => {
            toggleIsLeave(false);
            UIStateDispatch({
              type: "currentStep",
              payload: "SelectGender",
            });
          };
          break;
        }

        setCurNameInputIdx(curNameInputIdx - 1);
        break;
      default:
        break;
    }
  }

  return (
    <div
      className={classNames(styles.nameInputDialogContainer, {
        [styles.leave]: isLeave,
      })}
      onAnimationEnd={handleAnimationEnd}
      tabIndex={0}
      ref={focusElement}
      onBlur={(event) => event.target.focus()}
      onKeyUp={handleKeyUp}
    >
      <div className={styles.nameDisplayArea}>
        {nameInputWords.map((word, index) => (
          <NameInputWord
            word={word}
            current={curNameInputIdx === index}
            key={index}
          />
        ))}
      </div>
      <div className={styles.keyboardArea}>
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
      </div>
    </div>
  );
}

function KeyBoardMenuItem(props: {
  word: string;
  selected: boolean;
}): JSX.Element {
  const { word, selected } = props;

  return (
    <div className={styles.keyboardMenuItem}>
      <span className={selected ? globalStyles.hoverEffect : ""}>{word}</span>
    </div>
  );
}

function KeyBoardKey(props: { word: string; selected: boolean }): JSX.Element {
  const { word, selected } = props;
  return (
    <div className={styles.keyboardKey}>
      <span className={selected ? globalStyles.hoverEffect : ""}>{word}</span>
    </div>
  );
}

function NameInputWord(props: { word: string; current: boolean }): JSX.Element {
  const { word, current } = props;

  return (
    <div className={styles.nameInputWord}>
      <span className={current ? globalStyles.hoverEffect : ""}>{word}</span>
      <div className={styles.bottomLine}></div>
    </div>
  );
}
