// Related third party imports.
import { createRoot } from "react-dom/client";
import { useEffect, useReducer } from "react";

// Local application/library specific imports.
import styles from "./index.module.css";
import "./index.css";
import "@samuel871211/utils";
import Game from "views/Game";
// import SelectCharacter from "views/SelectCharacter";
// import Home from "views/Home";
// import GraphEditor from "views/GraphEditor/GraphEditor";
import {
  initGameProgress,
  gameProgressContext,
  gameProgressReducer,
} from "reducers/gameProgress";
import {
  inituserPreference,
  userPreferenceContext,
  userPreferenceReducer,
} from "reducers/userPreference";

// Stateless vars declare.
const HTMLStyles = {
  "16:9": styles.wideHTML,
  "4:3": styles.traditionalHTML,
  stretch: styles.stretchHTML,
};

function App(): JSX.Element {
  const [gameProgress, gameProgressDispatch] = useReducer(
    gameProgressReducer,
    initGameProgress
  );
  const [userPreference, userPreferenceDispatch] = useReducer(
    userPreferenceReducer,
    inituserPreference
  );
  useEffect(
    function switchAspectRatio() {
      const aspectRatioEl = document.getElementById("root")?.children[0];
      const HTMLEl = document.documentElement;
      if (!aspectRatioEl) return;

      // aspectRatioEl.removeAttribute('class')
      // aspectRatioEl.classList.add(rootStyles[userPreference.aspectRatio])
      HTMLEl.removeAttribute("class");
      HTMLEl.classList.add(HTMLStyles[userPreference.aspectRatio]);
      HTMLEl.style.setProperty("--vw", `${aspectRatioEl.clientWidth / 100}px`);
    },
    [userPreference.aspectRatio]
  );

  return (
    <gameProgressContext.Provider
      value={{ gameProgress, gameProgressDispatch }}
    >
      <userPreferenceContext.Provider
        value={{ userPreference, userPreferenceDispatch }}
      >
        <Game />
        {/* <GraphEditor /> */}
      </userPreferenceContext.Provider>
    </gameProgressContext.Provider>
  );
}

const container = document.getElementById("root");
if (!container) throw new Error("no root element");
const root = createRoot(container);
root.render(<App />);
