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
import areaTypesToJP from "utils/areaTypesToJP";
import CustomBorderBottom from "components/CustomBorderBottom";
import useTranslation from "hooks/useTranslation";
import { UIStateContext } from "reducers/Game/UIState";
import { userPreferenceContext } from "reducers/userPreference";
import YellowBlock from "layouts/YellowBlock";
import BottomDialogConfirmCircle from "components/BottomDialogConfirmCircle";
import styles from "./VillageFieldCheck.module.css";

// Stateless vars declare.
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
export default VillageFieldCheck;

function VillageFieldCheck(props: { state: TransitionStatus }): JSX.Element {
  const { state } = props;
  const { t, handleKeyUpAttrs, area } = useMetaData(state);

  return (
    <div {...handleKeyUpAttrs} className={styles.villageFieldCheckContainer}>
      <div className={`${styles.topArea} ${transitionStyles.topArea[state]}`}>
        <div className={styles.empty}></div>
        <YellowBlock role="dialog" className={styles.villageDetail}>
          <div className={styles.villageArea}>
            <div>AREA</div>
            <div>{`${t(areaTypesToJP(area))}${t("エリア")}`}</div>
            <CustomBorderBottom />
          </div>
          <div className={styles.namePayTotal}>
            <div className={styles.line1}>NAME</div>
            <div className={styles.line1}>PAY</div>
            <div className={styles.line1}>TOTAL</div>
            <div className={styles.line2}>
              <div className={styles.icon}></div>
              <span>一二三四村</span>
            </div>
            <div className={styles.line2}>
              <span>50000</span>
              <div className={styles.icon}></div>
            </div>
            <div className={styles.line2}>
              <span>12345</span>
              <div className={styles.icon}></div>
            </div>
          </div>
        </YellowBlock>
      </div>
      <div
        className={`${styles.bottomArea} ${transitionStyles.bottomArea[state]}`}
      >
        <YellowBlock role="dialog" className={styles.messageContainer}>
          {t(`
            手に入れると、お金や特産品などがもらえるマス。
            泊まるとHPが全回復する。
            モンスターがいる場合、戦闘になる。
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
    UIState: {
      showVillageFieldCheck,
      curClickVertex: { area },
    },
    UIStateDispatch,
  } = useContext(UIStateContext);
  const { userPreference } = useContext(userPreferenceContext);
  const { t } = useTranslation(userPreference.lang);
  const handleKeyUpAttrs = showVillageFieldCheck && {
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
          type: "showVillageFieldCheck",
          payload: false,
        });
        break;
    }
  }
  useEffect(() => {
    if (state === "entered") focusElement.current?.focus();
  }, [state]);
  return { handleKeyUpAttrs, t, area };
}
