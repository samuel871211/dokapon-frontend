// Standard library imports.

// Related third party imports.
import { useContext, useEffect, useReducer } from "react";
import { Transition } from "react-transition-group";

// Local application/library specific imports.
import styles from "./Home.module.css";
import useTranslation from "hooks/useTranslation";
import Settings from "./Settings";
import BtnGroup from "./BtnGroup";
import KeyMappingDialog from "./KeyMappingDialog";
import { userPreferenceContext } from "reducers/userPreference";
import {
  initUIState,
  UIStateContext,
  UIStateReducer,
} from "reducers/Home/UIState";
import registerWindowResizeEvtHandler from "utils/windowResizeEvtHandler";
import indexStyles from "index.module.css";

// Stateless vars declare.

const aspectRatioStyles = {
  "16:9": indexStyles.wideAspectRatio,
  "4:3": indexStyles.traditionalAspectRatio,
  stretch: indexStyles.stretchAspectRatio,
};

export default Home;

function Home(): JSX.Element {
  const [UIState, UIStateDispatch] = useReducer(UIStateReducer, initUIState);
  const { userPreference } = useContext(userPreferenceContext);
  const { t } = useTranslation(userPreference.lang);
  useEffect(registerWindowResizeEvtHandler, []);
  return (
    <UIStateContext.Provider value={{ UIState, UIStateDispatch }}>
      <div
        className={`${styles.container} ${
          aspectRatioStyles[userPreference.aspectRatio]
        }`}
      >
        <div className={styles.view1}>
          <h1 className={styles.title}>{t("ドカポン・ザ・ワールド")}</h1>
          <Transition appear in={UIState.showBtnGroup} timeout={1000}>
            {(state) => <BtnGroup state={state} />}
          </Transition>
        </div>
        <Transition in={UIState.showSetting} timeout={1000}>
          {(state) => <Settings state={state} />}
        </Transition>
        <Transition in={UIState.showKeyMappingDialog} timeout={1000}>
          {(state) => <KeyMappingDialog state={state} />}
        </Transition>
      </div>
    </UIStateContext.Provider>
  );
}
