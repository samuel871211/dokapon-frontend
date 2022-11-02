// Related third party imports.
import { createRoot } from "react-dom/client";
import { useEffect, useReducer, useState } from "react";

// Local application/library specific imports.
import styles from "./index.module.css";
import "./index.css";
import "@samuel871211/utils";
import Home from "views/Home";
import GraphEditor from "views/GraphEditor";
import DokaponTheWorld from "views/DokaponTheWorld";
import StoryModeSelectCharacter from "views/StoryModeSelectCharacter";
import BattleModeSelectCharacter from "views/BattleModeSelectCharacter";
import registerWindowResizeEvtHandler from "utils/windowResizeEvtHandler";
import {
  initGameProgress,
  gameProgressContext,
  gameProgressReducer,
} from "reducers/gameProgress";
import {
  initNewGameProgress,
  newGameProgressContext,
} from "reducers/newGameProgress";
import {
  inituserPreference,
  userPreferenceContext,
  userPreferenceReducer,
} from "reducers/userPreference";
import type { ViewTypes } from "global";

// Stateless vars declare.
const HTMLStyles = {
  "16:9": styles.wideHTML,
  "4:3": styles.traditionalHTML,
  stretch: styles.stretchHTML,
};
const rootStyles = {
  "16:9": styles.wideAspectRatio,
  "4:3": styles.traditionalAspectRatio,
  stretch: styles.stretchAspectRatio,
};
const Views: { [key in ViewTypes]: () => JSX.Element } = {
  BattleModeSelectCharacter,
  DokaponTheWorld,
  Home,
  StoryModeSelectCharacter,
  BetweenDimensions: () => <></>,
};

function App() {
  const [gameProgress, gameProgressDispatch] = useReducer(
    gameProgressReducer,
    initGameProgress
  );
  const [userPreference, userPreferenceDispatch] = useReducer(
    userPreferenceReducer,
    inituserPreference
  );
  const [newGameProgress, setNewGameProgress] = useState(initNewGameProgress);
  const View = Views[newGameProgress.currentView];
  useEffect(
    function switchAspectRatio() {
      const aspectRatioEl = document.getElementById("root")?.children[0];
      const HTMLEl = document.documentElement;
      if (!aspectRatioEl) return;

      HTMLEl.removeAttribute("class");
      HTMLEl.classList.add(HTMLStyles[userPreference.aspectRatio]);
      HTMLEl.style.setProperty("--vw", `${aspectRatioEl.clientWidth / 100}px`);
    },
    [userPreference.aspectRatio]
  );
  useEffect(registerWindowResizeEvtHandler, []);

  return (
    <gameProgressContext.Provider
      value={{ gameProgress, gameProgressDispatch }}
    >
      <userPreferenceContext.Provider
        value={{ userPreference, userPreferenceDispatch }}
      >
        <newGameProgressContext.Provider
          value={{ newGameProgress, setNewGameProgress }}
        >
          <div className={rootStyles[userPreference.aspectRatio]}>
            <View />
          </div>
        </newGameProgressContext.Provider>
        {/* <GraphEditor /> */}
      </userPreferenceContext.Provider>
    </gameProgressContext.Provider>
  );
}

const container = document.getElementById("root");
if (!container) throw new Error("no root element");
const root = createRoot(container);
root.render(<App />);
