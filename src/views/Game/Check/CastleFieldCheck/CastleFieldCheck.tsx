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
import CustomBorderBottom from "components/CustomBorderBottom";
import useTranslation from "hooks/useTranslation";
import { UIStateContext } from "reducers/Game/UIState";
import { userPreferenceContext } from "reducers/userPreference";
import YellowBlock from "layouts/YellowBlock";
import BottomDialogConfirmCircle from "components/BottomDialogConfirmCircle";
import styles from "./CastleFieldCheck.module.css";

// Stateless vars declare.
const tempMoneyList = [-999999999, 999999999, 0, 123456789];
const transitionStyles = {
  topArea: {
    entering: "",
    entered: styles.topAreaEntered,
    exiting: "",
    exited: "",
    unmounted: "",
  },
  bottomArea: {
    entering: "",
    entered: styles.bottomAreaEntered,
    exiting: "",
    exited: "",
    unmounted: "",
  },
};
export default CastleFieldCheck;

function CastleFieldCheck(props: { state: TransitionStatus }): JSX.Element {
  const { state } = props;
  const { t, handleKeyUpAttrs } = useMetaData(state);

  return (
    <div {...handleKeyUpAttrs} className={styles.castleFieldCheckContainer}>
      <div className={`${styles.topArea} ${transitionStyles.topArea[state]}`}>
        <YellowBlock role="title" className={styles.castleName}>
          {t("ドカポン城")}
        </YellowBlock>
        <YellowBlock role="dialog" className={styles.itemList}>
          <div className={styles.listHead}>
            <div className={styles.th}>{t("名前")}</div>
            <div className={styles.th}>{t("金庫")}</div>
            <div className={styles.th}>{t("特產品")}</div>
          </div>
          <CustomBorderBottom width="97.5%" />
          <div className={styles.listBody}>
            <div className={styles.nameList}>
              {Array(4)
                .fill(0)
                .map((item, idx) => (
                  <div className={styles.name} key={idx}>
                    <div className={styles.icon}></div>
                    <div>人的名字共八個字</div>
                  </div>
                ))}
            </div>
            <div className={styles.bankList}>
              {tempMoneyList.map((item) => (
                <div
                  key={item}
                  data-positive={item > 0}
                  data-negative={item < 0}
                >
                  {item.toLocaleString()}
                </div>
              ))}
            </div>
            <div className={styles.specialityList}>
              {tempMoneyList.map((item) => (
                <div
                  key={item}
                  data-positive={item > 0}
                  data-negative={item < 0}
                >
                  {item.toLocaleString()}
                </div>
              ))}
            </div>
          </div>
        </YellowBlock>
      </div>
      <div
        className={`${styles.bottomArea} ${transitionStyles.bottomArea[state]}`}
      >
        <YellowBlock role="dialog" className={styles.messageContainer}>
          {t(`
            世界の中心、スタートマス。
            集めたお金をここにある世界平和金庫に戻そう!
            全てのステータス異常を無料で回復してくれる。
          `)
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

function useMetaData(state: TransitionStatus) {
  const focusElement = useRef<HTMLDivElement>(null);
  const {
    UIState: { showCastleFieldCheck },
    UIStateDispatch,
  } = useContext(UIStateContext);
  const { userPreference } = useContext(userPreferenceContext);
  const { t } = useTranslation(userPreference.lang);
  const handleKeyUpAttrs = showCastleFieldCheck && {
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
          type: "showCastleFieldCheck",
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
