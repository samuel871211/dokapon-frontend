// Standard library imports.

// Related third party imports.
import { useEffect, useContext } from "react";
import { Transition } from "react-transition-group";

// Local application/library specific imports.
import { userPreferenceContext } from "reducers/userPreference";
import styles from "./Game.module.css";
import registerWindowResizeEvtHandler from "utils/windowResizeEvtHandler";
import Drawer from "./Drawer";
import Roulette from "./Roulette";
import Bag from "./Bag";
import Check from "./Check";
import OverviewMap from "./OverviewMap";
import GroceryStoreFieldCheck from "./Check/GroceryStoreFieldCheck";
import { useReducer } from "react";
import {
  initUIState,
  UIStateContext,
  UIStateReducer,
} from "reducers/Game/UIState";
import indexStyles from "index.module.css";
import GraphUI from "components/GraphUI";
import WeaponStoreFieldCheck from "./Check/WeaponStoreFieldCheck";
import MagicStoreFieldCheck from "./Check/MagicStoreFieldCheck";
import JobStoreFieldCheck from "./Check/JobStoreFieldCheck";

// Stateless vars declare.
const aspectRatioStyles = {
  "16:9": indexStyles.wideAspectRatio,
  "4:3": indexStyles.traditionalAspectRatio,
  stretch: indexStyles.stretchAspectRatio,
};

export default Game;

function Game(): JSX.Element {
  const { userPreference } = useContext(userPreferenceContext);
  const [UIState, UIStateDispatch] = useReducer(UIStateReducer, initUIState);
  function showDrawer() {
    UIStateDispatch({
      type: "showDrawer",
      payload: true,
    });
  }
  function showCheck() {
    UIStateDispatch({
      type: "showCheck",
      payload: true,
    });
    UIStateDispatch({
      type: "isCheckTopLayer",
      payload: true,
    });
    UIStateDispatch({
      type: "showCheckTip",
      payload: true,
    });
    UIStateDispatch({
      type: "showMinimap",
      payload: true,
    });
  }
  useEffect(registerWindowResizeEvtHandler, []);

  return (
    <UIStateContext.Provider value={{ UIState, UIStateDispatch }}>
      <div
        className={`${styles.container} ${
          aspectRatioStyles[userPreference.aspectRatio]
        }`}
      >
        <GraphUI />
        {/* in order to hold drawer state, only set css display none when exited */}
        <Transition
          appear
          in={UIState.showDrawer}
          timeout={{ enter: 0, exit: 1000 }}
        >
          {(state) => <Drawer state={state} />}
        </Transition>

        <Transition
          in={UIState.showRoulette}
          timeout={{ enter: 1000, exit: 0 }}
        >
          {(state) => state !== "exited" && <Roulette state={state} />}
        </Transition>

        <Transition
          in={UIState.showBag}
          timeout={{ enter: 1000, exit: 500 }}
          onExited={showDrawer}
        >
          {(state) => state !== "exited" && <Bag state={state} />}
        </Transition>

        <Transition
          in={UIState.showCheck}
          timeout={{ enter: 1000, exit: 500 }}
          onExited={showDrawer}
        >
          {(state) => state !== "exited" && <Check state={state} />}
        </Transition>

        <Transition
          in={UIState.showOverviewMap}
          timeout={{ enter: 500, exit: 500 }}
          onExited={showCheck}
        >
          {(state) => state !== "exited" && <OverviewMap state={state} />}
        </Transition>

        <Transition
          in={UIState.showGroceryStoreFieldCheck}
          timeout={{ enter: 500, exit: 500 }}
          onExited={showCheck}
        >
          {(state) =>
            state !== "exited" && <GroceryStoreFieldCheck state={state} />
          }
        </Transition>

        <Transition
          in={UIState.showWeaponStoreFieldCheck}
          timeout={{ enter: 500, exit: 500 }}
          onExited={showCheck}
        >
          {(state) =>
            state !== "exited" && <WeaponStoreFieldCheck state={state} />
          }
        </Transition>

        <Transition
          in={UIState.showMagicStoreFieldCheck}
          timeout={{ enter: 500, exit: 500 }}
          onExited={showCheck}
        >
          {(state) =>
            state !== "exited" && <MagicStoreFieldCheck state={state} />
          }
        </Transition>

        <Transition
          in={UIState.showJobStoreFieldCheck}
          timeout={{ enter: 500, exit: 500 }}
          onExited={showCheck}
        >
          {(state) =>
            state !== "exited" && <JobStoreFieldCheck state={state} />
          }
        </Transition>
      </div>
    </UIStateContext.Provider>
  );
}
