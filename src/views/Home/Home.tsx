// Related third party imports.
import { useContext, useEffect, useRef, KeyboardEvent } from "react";

// Local application/library specific imports.
import styles from "./Home.module.css";
import Settings from "./Settings";
import ButtonGroup from "./ButtonGroup";
import KEYBOARDMAP from "./Settings/KeyBoardMap";
import registerWindowResizeEvtHandler from "utils/windowResizeEvtHandler";
import { gameProgressCtx } from "reducers/gameProgress";
import type { GamePadKeyTypes, HomeComponentTypes } from "global";

// Stateless vars declare.
const Components: { [key in HomeComponentTypes]: () => JSX.Element } = {
  ButtonGroup,
  Settings,
  Book: () => <></>,
};

export default Home;

function Home() {
  const { containerRefEl, handleKeyUp, Component } = useMetaData();
  useEffect(registerWindowResizeEvtHandler, []);
  return (
    <div
      tabIndex={0}
      ref={containerRefEl}
      onBlur={(e) => e.currentTarget.focus()}
      onKeyUp={handleKeyUp}
      className={styles.homeContainer}
    >
      <Component />
      {}
    </div>
  );
}

function useMetaData() {
  const containerRefEl = useRef<HTMLDivElement>(null);
  const { gameProgress, setGameProgress } = useContext(gameProgressCtx);
  const { gamePadSetting, Home, userPreference } = gameProgress;
  const { curComponent, ButtonGroupState, SettingsState } = Home;
  /**
   * 有些可以hover的按鈕，但不是`gamePadKey`，透過此function來確定
   */
  function isGamePadKey(
    key: typeof KEYBOARDMAP[number][number]
  ): key is GamePadKeyTypes {
    return key in gamePadSetting;
  }
  function handleKeyUp(e: KeyboardEvent<HTMLDivElement>) {
    switch (curComponent) {
      case "ButtonGroup":
        return handleKeyUpForButtonGroup(e);
      case "Settings":
        return SettingsState.showKeyMappingDialog
          ? handleKeyUpForKeyMappingDialog(e)
          : handleKeyUpForSettings(e);
      case "Book":
        return;
    }
  }
  function handleKeyUpForButtonGroup(e: KeyboardEvent<HTMLDivElement>) {
    const { selectedIdx } = ButtonGroupState;
    const isStoryModeSelectCharacter = selectedIdx === 0;
    const isBattleModeSelectCharacter = selectedIdx === 1;
    const isBook = selectedIdx === 2;
    const isSetting = selectedIdx === 3;

    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        ButtonGroupState.selectedIdx = selectedIdx === 0 ? 3 : selectedIdx - 1;
        break;
      case gamePadSetting.arrowDown:
        ButtonGroupState.selectedIdx = selectedIdx === 3 ? 0 : selectedIdx + 1;
        break;
      case gamePadSetting.circle:
        if (isStoryModeSelectCharacter) {
          gameProgress.currentView = "StoryModeSelectCharacter";
        } else if (isBattleModeSelectCharacter) {
          gameProgress.currentView = "BattleModeSelectCharacter";
        } else if (isBook) {
          // Home.curComponent = 'Book';
          alert("尚未實做!!!");
        } else if (isSetting) {
          Home.curComponent = "Settings";
          SettingsState.prevGamePadSetting = { ...gamePadSetting };
        }
    }
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForKeyMappingDialog(e: KeyboardEvent<HTMLDivElement>) {
    const {
      currentAxis: { row, col },
    } = SettingsState;
    const maybeGamePadKey = KEYBOARDMAP[row][col];
    if (!isGamePadKey(maybeGamePadKey)) return;

    const oldKeyBoardKey = gamePadSetting[maybeGamePadKey];
    const newKeyBoardKey = e.key.toLowerCase();

    gamePadSetting[maybeGamePadKey] = newKeyBoardKey;

    // avoid two gamepad key mapping to the same keyboard key
    let gamePadKey: GamePadKeyTypes;
    for (gamePadKey in gamePadSetting) {
      if (
        gamePadSetting[gamePadKey] === newKeyBoardKey &&
        gamePadKey !== maybeGamePadKey
      ) {
        gamePadSetting[gamePadKey] = oldKeyBoardKey;
        break;
      }
    }

    SettingsState.showKeyMappingDialog = false;
    setGameProgress({ ...gameProgress });
  }
  function handleKeyUpForSettings(e: KeyboardEvent<HTMLDivElement>) {
    const { currentAxis } = SettingsState;
    const { col, row } = currentAxis;
    const selectedKey = KEYBOARDMAP[row][col];
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        currentAxis.row = row === 0 ? 9 : row - 1;
        break;
      case gamePadSetting.arrowDown:
        currentAxis.row = row === 9 ? 0 : row + 1;
        break;
      case gamePadSetting.arrowLeft:
        currentAxis.col = col === 0 ? 2 : col - 1;
        break;
      case gamePadSetting.arrowRight:
        currentAxis.col = col === 2 ? 0 : col + 1;
        break;
      case gamePadSetting.cross:
        currentAxis.col = 2;
        currentAxis.row = 9;
        break;
      case gamePadSetting.circle:
        switch (selectedKey) {
          case "cn":
          case "en":
          case "jp":
            userPreference.lang = selectedKey;
            break;
          case "16:9":
          case "4:3":
          case "stretch":
            userPreference.aspectRatio = selectedKey;
            break;
          case "確定": {
            currentAxis.row = 0;
            currentAxis.col = 0;
            Home.curComponent = "ButtonGroup";
            break;
          }
          case "取消": {
            currentAxis.row = 0;
            currentAxis.col = 0;
            gameProgress.gamePadSetting = SettingsState.prevGamePadSetting;
            Home.curComponent = "ButtonGroup";
            break;
          }
          case "arrowUp":
          case "arrowDown":
          case "arrowLeft":
          case "arrowRight":
          case "triangle":
          case "circle":
          case "square":
          case "cross":
          case "L1":
          case "L2":
          case "R1":
          case "R2":
          case "SELECT":
          case "ANALOG":
          case "START":
            SettingsState.showKeyMappingDialog = true;
            break;
        }
        break;
    }
    setGameProgress({ ...gameProgress });
  }
  useEffect(() => containerRefEl.current?.focus(), []);
  return {
    containerRefEl,
    handleKeyUp,
    Component: Components[curComponent],
  };
}
