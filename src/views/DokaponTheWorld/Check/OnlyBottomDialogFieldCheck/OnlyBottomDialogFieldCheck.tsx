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
import { userPreferenceContext } from "reducers/userPreference";
import YellowBlock from "layouts/YellowBlock";
import BottomDialogConfirmCircle from "components/BottomDialogConfirmCircle";
import styles from "./OnlyBottomDialogFieldCheck.module.css";
import classNames from "classnames";
import { TextsKeys } from "data/texts";

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

export default OnlyBottomDialogFieldCheck;

/**
 * 從下而上，slide in bottom dialog (一到三行，純顯示文字 + 右下角O)
 *
 * 離開(點選O X □ △)的時候，從上而下，slide out
 *
 * @param props.onClose 離開(點選O X □ △)的時候，要執行什麼function
 */
function OnlyBottomDialogFieldCheck(props: {
  state: TransitionStatus;
  dialogText: TextsKeys;
  onClose: () => void;
}): JSX.Element {
  const { state, dialogText } = props;
  const { t, handleKeyUpAttrs } = useMetaData(props);

  return (
    <div
      {...handleKeyUpAttrs}
      className={styles.onlyBottomDialogFieldCheckContainer}
    >
      <div className={styles.topArea}></div>
      <div
        className={classNames(
          styles.bottomArea,
          transitionStyles.bottomArea[state]
        )}
      >
        <YellowBlock role="dialog" className={styles.messageContainer}>
          {t(dialogText)
            .split("\n")
            .map((line) => (
              <div key={line}>{line}</div>
            ))}
          <BottomDialogConfirmCircle />
        </YellowBlock>
      </div>
    </div>
  );
}

function useMetaData(props: {
  state: TransitionStatus;
  dialogText: string;
  onClose: () => void;
}) {
  const { state, onClose } = props;
  const focusElement = useRef<HTMLDivElement>(null);
  const { userPreference } = useContext(userPreferenceContext);
  const { t } = useTranslation();
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
        onClose();
        break;
    }
  }
  useEffect(() => {
    if (state === "entered") focusElement.current?.focus();
  }, [state]);
  return { handleKeyUpAttrs, t };
}
