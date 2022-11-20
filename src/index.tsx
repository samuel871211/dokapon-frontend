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
import { initGameProgress, gameProgressCtx } from "reducers/gameProgress";
import type { ViewTypes } from "global";
import GameProgressCtxMenu from "components/GameProgressCtxMenu";

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
function resizeEvtHandlerEffect() {
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}
function handleResize() {
  const HTMLEl = document.documentElement;
  const aspectRatioEl = document.getElementById("root")?.children[0];
  if (!aspectRatioEl) return;

  HTMLEl.style.setProperty("--vw", `${aspectRatioEl.clientWidth / 100}px`);
}

function App() {
  const { gameProgress, setGameProgress, aspectRatio, View } = useMetaData();

  return (
    <gameProgressCtx.Provider value={{ gameProgress, setGameProgress }}>
      <div className={rootStyles[aspectRatio]}>
        <View />
      </div>
      <GameProgressCtxMenu />
    </gameProgressCtx.Provider>
  );
}

function useMetaData() {
  const [gameProgress, setGameProgress] = useState(initGameProgress);
  const {
    currentView,
    userPreference: { aspectRatio },
  } = gameProgress;
  const View = Views[currentView];
  function switchAspectRatio() {
    const HTMLEl = document.documentElement;
    const aspectRatioEl = document.getElementById("root")?.children[0];
    if (!aspectRatioEl) return;

    HTMLEl.removeAttribute("class");
    HTMLEl.classList.add(HTMLStyles[aspectRatio]);
    HTMLEl.style.setProperty("--vw", `${aspectRatioEl.clientWidth / 100}px`);
  }
  useEffect(switchAspectRatio, [aspectRatio]);
  useEffect(resizeEvtHandlerEffect, []);
  return {
    gameProgress,
    setGameProgress,
    aspectRatio,
    View,
  };
}

const container = document.getElementById("root");
if (!container) throw new Error("no root element");
const root = createRoot(container);
root.render(<App />);
