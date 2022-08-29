// Standard library imports.

// Related third party imports.
import {
  useContext,
  useRef,
  SyntheticEvent,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";
import type { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import CustomBorderBottom from "components/CustomBorderBottom";
import useTranslation from "hooks/useTranslation";
import { UIStateContext } from "reducers/Game/UIState";
import { userPreferenceContext } from "reducers/userPreference";
import YellowBlock from "layouts/YellowBlock";
import BottomDialogConfirmCircle from "components/BottomDialogConfirmCircle";
import styles from "./JobStoreFieldCheck.module.css";
import JobStore from "data/jobStore";

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
export default JobStoreFieldCheck;

/**
 * @todo 根據現在的角色，filter可轉職的職業
 */
function JobStoreFieldCheck(props: { state: TransitionStatus }): JSX.Element {
  const { state } = props;
  const { t, handleKeyUpAttrs, curShowItems } = useMetaData(state);

  return (
    <div {...handleKeyUpAttrs} className={styles.jobStoreFieldCheckContainer}>
      <div className={`${styles.topArea} ${transitionStyles.topArea[state]}`}>
        <YellowBlock role="title" className={styles.jobStoreName}>
          {t("職安")}
        </YellowBlock>
        <YellowBlock role="dialog" className={styles.itemList}>
          <div className={styles.listHead}>
            <div className={styles.th}>NAME</div>
            <div className={styles.th}>PRICE</div>
            <div className={styles.th}>DATA</div>
          </div>
          <CustomBorderBottom width="97.5%" />
          <div className={styles.listBody}>
            <div className={styles.left}>
              <div className={styles.arrowIcon}></div>
            </div>
            <div className={styles.nameList}>
              {curShowItems.map((item) => (
                <div className={styles.name} key={item.name}>
                  <div className={styles.icon}></div>
                  <div>{t(item.name)}</div>
                </div>
              ))}
            </div>
            <div className={styles.priceList}>
              <div>{curShowItems[0]?.price}</div>
              <div>{curShowItems[1]?.price}</div>
              <div>{curShowItems[2]?.price}</div>
              <div>{curShowItems[3]?.price}</div>
              <div>{curShowItems[4]?.price}</div>
              <div>{curShowItems[5]?.price}</div>
            </div>
            <div className={styles.dataList}>
              <div>{curShowItems[0]?.bagSpace.item}</div>
              <div>{curShowItems[1]?.bagSpace.item}</div>
              <div>{curShowItems[2]?.bagSpace.item}</div>
              <div>{curShowItems[3]?.bagSpace.item}</div>
              <div>{curShowItems[4]?.bagSpace.item}</div>
              <div>{curShowItems[5]?.bagSpace.item}</div>
            </div>
            <div className={styles.right}>
              <div className={styles.arrowIcon}></div>
            </div>
          </div>
        </YellowBlock>
      </div>
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
  const {
    UIState: { showJobStoreFieldCheck },
    UIStateDispatch,
  } = useContext(UIStateContext);
  const { userPreference } = useContext(userPreferenceContext);
  const { t } = useTranslation(userPreference.lang);
  const [curListPage, toggleCurListPage] = useState(0);
  const curShowItems = JobStore.filter(
    (item, index) => index >= 6 * curListPage && index < 6 * (curListPage + 1)
  );
  const handleKeyUpAttrs = showJobStoreFieldCheck
    ? {
        tabIndex: 0,
        onBlur: (event: SyntheticEvent<HTMLDivElement>) =>
          event.currentTarget?.focus(),
        ref: focusElement,
        onKeyUp: handleKeyUp,
      }
    : {};
  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case userPreference.R1:
      case userPreference.R2:
        if (curListPage === 3) toggleCurListPage(0);
        else toggleCurListPage(curListPage + 1);
        break;
      case userPreference.L1:
      case userPreference.L2:
        if (curListPage === 0) toggleCurListPage(3);
        else toggleCurListPage(curListPage - 1);
        break;
      case userPreference.circle:
      case userPreference.triangle:
      case userPreference.square:
      case userPreference.cross:
        UIStateDispatch({
          type: "showJobStoreFieldCheck",
          payload: false,
        });
        toggleCurListPage(0);
        break;
    }
  }
  useEffect(() => {
    if (state === "entered") focusElement.current?.focus();
  }, [state]);
  return { handleKeyUpAttrs, t, curShowItems };
}
