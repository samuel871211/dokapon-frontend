// Related third party imports.
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";

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
import { initGameProgress, gameProgressCtx } from "reducers/gameProgress";

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
};

function App() {
  const [gameProgress, setGameProgress] = useState(initGameProgress);
  const { userPreference } = gameProgress;
  const View = Views[gameProgress.currentView];
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
    <gameProgressCtx.Provider value={{ gameProgress, setGameProgress }}>
      <div className={rootStyles[userPreference.aspectRatio]}>
        <View />
      </div>
      {/* <GraphEditor /> */}
    </gameProgressCtx.Provider>
  );
}

const container = document.getElementById("root");
if (!container) throw new Error("no root element");
const root = createRoot(container);
root.render(<App />);
