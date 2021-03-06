// Standard library imports.

// Related third party imports.
import {
  useContext,
  useRef,
  SyntheticEvent,
  KeyboardEvent,
  useEffect,
} from "react";
import { TransitionStatus, Transition } from "react-transition-group";
import classNames from "classnames";

// Local application/library specific imports.
import styles from "./Check.module.css";
import useTranslation from "hooks/useTranslation";
import { userPreferenceContext } from "reducers/userPreference";
import { UIStateContext } from "reducers/Game/UIState";

// Stateless vars declare.

// import WorldSvg from 'components/WorldSvg'
const transitionStyles = {
  checkTip: {
    entering: styles.fadeInEntering,
    entered: styles.fadeInEntered,
    exiting: styles.fadeOutExiting,
    exited: styles.fadeOutExited,
    unmounted: "",
  },
  nodeAttrsAndDistance: {
    entering: styles.fadeInEntering,
    entered: styles.fadeInEntered,
    exiting: styles.fadeOutExiting,
    exited: styles.fadeOutExited,
    unmounted: "",
  },
  minimap: {
    entering: styles.fadeInEntering,
    entered: styles.fadeInEntered,
    exiting: styles.fadeOutExiting,
    exited: styles.fadeOutExited,
    unmounted: "",
  },
  overviewMap: {
    entering: styles.fadeInEntering,
    entered: styles.fadeInEntered,
    exiting: styles.fadeOutExiting,
    exited: styles.fadeOutExited,
    unmounted: "",
  },
};

export default Check;

/**
 * 因為Check底下又有很多獨立的view級component(畫面佔整頁，且需要handleKeyUp的)
 *
 * 所以把這些component提升到跟Check同一個階層，確保showCheck跟isCheckTopLayer都true才focus
 */
function Check(props: { state: TransitionStatus }): JSX.Element {
  const { state: transitionStatusOfCheck } = props;
  const { t, UIState, handleKeyUpAttrs } = useMetaData(transitionStatusOfCheck);

  return (
    <div className={styles.checkContainer} {...handleKeyUpAttrs}>
      <Transition
        appear
        in={UIState.showCheckTip}
        timeout={{
          enter: transitionStatusOfCheck === "entered" ? 0 : 1000,
          exit: 500,
        }}
      >
        {(state) => (
          <div
            className={classNames(
              styles.checkTipContainer,
              transitionStyles.checkTip[state]
            )}
          >
            <div className={styles.checkTipColumn}>
              <div className={styles.checkTipIcon}>O</div>
              <div className={styles.checkTipText}>{t("マスチェック")}</div>
            </div>
            <div className={styles.checkTipColumn}>
              <div className={styles.checkTipIcon}>S</div>
              <div className={styles.checkTipText}>MAP</div>
            </div>
            <div className={styles.checkTipColumn}>
              <div className={styles.checkTipIcon}>X</div>
              <div className={styles.checkTipText}>{t("戻る")}</div>
            </div>
          </div>
        )}
      </Transition>
      <Transition
        in={UIState.showVertexAttrsAndDistance}
        timeout={{
          enter: transitionStatusOfCheck === "entered" ? 0 : 1000,
          exit: 500,
        }}
      >
        {(state) => (
          <div
            className={classNames(
              styles.nodeAttrsAndDistance,
              transitionStyles.nodeAttrsAndDistance[state]
            )}
          >
            <div className={styles.nodeType}>草原拉我</div>
            <div className={styles.nodeDistance}>
              總共是 <b>28</b> 步
            </div>
          </div>
        )}
      </Transition>
      <Transition
        appear
        in={UIState.showMinimap}
        timeout={{
          enter: transitionStatusOfCheck === "entered" ? 0 : 1000,
          exit: 500,
        }}
      >
        {(state) => (
          <div
            className={classNames(
              styles.minimap,
              transitionStyles.minimap[state]
            )}
          ></div>
        )}
      </Transition>
    </div>
  );
}

function useMetaData(state: TransitionStatus) {
  const { userPreference } = useContext(userPreferenceContext);
  const { UIState, UIStateDispatch } = useContext(UIStateContext);
  const focusElement = useRef<HTMLDivElement>(null);
  const { t } = useTranslation(userPreference.lang);
  const handleKeyUpAttrs =
    UIState.showCheck && UIState.isCheckTopLayer
      ? {
          tabIndex: 0,
          ref: focusElement,
          onBlur: (event: SyntheticEvent<HTMLDivElement>) =>
            event.currentTarget.focus(),
          onKeyUp: handleKeyUp,
        }
      : {};
  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case userPreference.circle:
        break;
      case userPreference.START:
        UIStateDispatch({
          type: "showOverviewMap",
          payload: true,
        });
        UIStateDispatch({
          type: "showMinimap",
          payload: false,
        });
        UIStateDispatch({
          type: "showCheckTip",
          payload: false,
        });
        UIStateDispatch({
          type: "showVertexAttrsAndDistance",
          payload: false,
        });
        UIStateDispatch({
          type: "isCheckTopLayer",
          payload: false,
        });
        break;
      case userPreference.cross:
        UIStateDispatch({
          type: "showCheck",
          payload: false,
        });
        UIStateDispatch({
          type: "showMinimap",
          payload: false,
        });
        UIStateDispatch({
          type: "showCheckTip",
          payload: false,
        });
        UIStateDispatch({
          type: "showVertexAttrsAndDistance",
          payload: false,
        });
        break;
    }
  }
  function autoFocus() {
    if (state === "entered" && UIState.isCheckTopLayer)
      focusElement.current?.focus();
  }
  useEffect(autoFocus, [state, UIState.isCheckTopLayer]);
  return { t, UIState, handleKeyUpAttrs };
}
