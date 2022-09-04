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
              {curShowItems.map((job) => (
                <div className={styles.name} key={job.name}>
                  <div className={styles.icon}></div>
                  <div>{t(job.name)}</div>
                </div>
              ))}
            </div>
            <div className={styles.priceList}>
              {curShowItems.map((job) => (
                <div key={job.name}>{job.price.toLocaleString()}</div>
              ))}
            </div>
            <div className={styles.dataList}>
              {curShowItems.map((job) => (
                <div className={styles.dataListItem} key={job.name}>
                  <div className={styles.dataListItemIcon}>@</div>
                  <div className={styles.dataListItemBag}>
                    <div>ア：</div>
                    <b>{job.bagSpace.item}</b>
                  </div>
                  <div className={styles.dataListItemMagic}>
                    <div>魔：</div>
                    <b>{job.bagSpace.magic}</b>
                  </div>
                </div>
              ))}
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
        if (curListPage === 4) toggleCurListPage(0);
        else toggleCurListPage(curListPage + 1);
        break;
      case userPreference.L1:
      case userPreference.L2:
        if (curListPage === 0) toggleCurListPage(4);
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
        // 因為離開的時候，component會直接unmount，所以不需要把state重置
        // toggleCurListPage(0);
        break;
    }
  }
  useEffect(() => {
    if (state === "entered") focusElement.current?.focus();
  }, [state]);
  return { handleKeyUpAttrs, t, curShowItems };
}
