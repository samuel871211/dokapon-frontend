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
import styles from "./GroceryStoreFieldCheck.module.css";
import groceryStores from "data/groceryStores";

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
export default GroceryStoreFieldCheck;

function GroceryStoreFieldCheck(props: {
  state: TransitionStatus;
}): JSX.Element {
  const { state } = props;
  const { t, handleKeyUpAttrs, curShowItems } = useMetaData(state);

  return (
    <div
      {...handleKeyUpAttrs}
      className={styles.groceryStoreFieldCheckContainer}
    >
      <div className={`${styles.topArea} ${transitionStyles.topArea[state]}`}>
        <YellowBlock role="title" className={styles.groceryStoreName}>
          {t("アイテム屋")}
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
              <div>{t(curShowItems[0]?.type)}</div>
              <div>{t(curShowItems[1]?.type)}</div>
              <div>{t(curShowItems[2]?.type)}</div>
              <div>{t(curShowItems[3]?.type)}</div>
              <div>{t(curShowItems[4]?.type)}</div>
              <div>{t(curShowItems[5]?.type)}</div>
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
          <div>{t("アイテムが買えるマス。")}</div>
          <div>{t("水曜が定休日。")}</div>
          <div>{t("日曜は特売日。")}</div>
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
      showGroceryStoreFieldCheck,
      curClickVertex: { area },
    },
    UIStateDispatch,
  } = useContext(UIStateContext);
  const { userPreference } = useContext(userPreferenceContext);
  const { t } = useTranslation(userPreference.lang);
  const [curListPage, toggleCurListPage] = useState<0 | 1>(0);
  const curShowItems = groceryStores[area].filter(
    (item, index) => index >= 6 * curListPage && index < 6 * (curListPage + 1)
  );
  const handleKeyUpAttrs = showGroceryStoreFieldCheck
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
      case userPreference.L1:
      case userPreference.L2:
        toggleCurListPage(curListPage === 0 ? 1 : 0);
        break;
      case userPreference.circle:
      case userPreference.triangle:
      case userPreference.square:
      case userPreference.cross:
        UIStateDispatch({
          type: "showGroceryStoreFieldCheck",
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
