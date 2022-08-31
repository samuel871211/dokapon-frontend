// Standard library imports.

// Related third party imports.
import {
  useContext,
  useRef,
  SyntheticEvent,
  KeyboardEvent,
  useEffect,
} from "react";
import type { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import useTranslation from "hooks/useTranslation";
import { UIStateContext } from "reducers/Game/UIState";
import { userPreferenceContext } from "reducers/userPreference";
import YellowBlock from "layouts/YellowBlock";
import BottomDialogConfirmCircle from "components/BottomDialogConfirmCircle";
import styles from "./OnlyBottomDialogFieldCheck.module.css";

// Stateless vars declare.
const transitionStyles = {
  bottomArea: {
    entering: "",
    entered: styles.bottomAreaEntered,
    exiting: "",
    exited: "",
    unmounted: "",
  },
};
// const bottomDialogTexts = {
//   BattleField:
//   KeyTreasureField:
//   MagicField:
//   RedTreasureField:
//   TreasureField:
//   WhiteTreasureField:
//   WorldTransferField:
//   GoldTreasureField:
//   DamageField:
// }

export default OnlyBottomDialogFieldCheck;

function OnlyBottomDialogFieldCheck(props: {
  state: TransitionStatus;
}): JSX.Element {
  const { state } = props;
  const { t, handleKeyUpAttrs } = useMetaData(state);

  return (
    <div {...handleKeyUpAttrs} className={styles.fieldCheckContainer}>
      <div className={styles.topArea}></div>
      <div
        className={`${styles.bottomArea} ${transitionStyles.bottomArea[state]}`}
      >
        <YellowBlock role="dialog" className={styles.messageContainer}>
          <div>{t("転職ができるマス。")}</div>
          <div>{t("土、日曜が定休日。")}</div>
          <BottomDialogConfirmCircle />
        </YellowBlock>
      </div>
    </div>
  );
}

function useMetaData(state: TransitionStatus) {
  const focusElement = useRef<HTMLDivElement>(null);
  const { UIStateDispatch } = useContext(UIStateContext);
  const { userPreference } = useContext(userPreferenceContext);
  const { t } = useTranslation(userPreference.lang);
  const handleKeyUpAttrs = state === "entered" && {
    tabIndex: 0,
    onBlur: (event: SyntheticEvent<HTMLDivElement>) =>
      event.currentTarget?.focus(),
    ref: focusElement,
    onKeyUp: handleKeyUp,
  };
  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case userPreference.circle:
      case userPreference.triangle:
      case userPreference.square:
      case userPreference.cross:
        UIStateDispatch({
          type: "showBattleFieldCheck",
          payload: false,
        });
        break;
    }
  }
  useEffect(() => {
    if (state === "entered") focusElement.current?.focus();
  }, [state]);
  return { handleKeyUpAttrs, t };
}
