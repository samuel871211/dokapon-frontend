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
import { Shield, Weapon } from "global";
import weaponStores from "data/weaponStores";
import CustomBorderBottom from "components/CustomBorderBottom";
import useTranslation from "hooks/useTranslation";
import { UIStateContext } from "reducers/Game/UIState";
import { userPreferenceContext } from "reducers/userPreference";
import YellowBlock from "layouts/YellowBlock";
import BottomDialogConfirmCircle from "components/BottomDialogConfirmCircle";
import styles from "./WeaponStoreFieldCheck.module.css";

// Stateless vars declare.
function dataRowIconText(item: Weapon | Shield | undefined) {
  if (!item) return "";
  if ("additionalDamageJobs" in item) return "AT";
  else return "DF";
}
function isWeapon(item: Weapon | Shield): item is Weapon {
  return "additionalDamageJobs" in item;
}
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
export default WeaponStoreFieldCheck;

/**
 * @todo 需要得知目前角色穿著的武器跟盾牌
 */
function WeaponStoreFieldCheck(props: {
  state: TransitionStatus;
}): JSX.Element {
  const { state } = props;
  const { t, handleKeyUpAttrs, curShowItems } = useMetaData(state);

  return (
    <div
      {...handleKeyUpAttrs}
      className={styles.weaponStoreFieldCheckContainer}
    >
      <div className={`${styles.topArea} ${transitionStyles.topArea[state]}`}>
        <YellowBlock role="title" className={styles.weaponStoreName}>
          {t("武器屋")}
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
              {curShowItems.map((item, idx) => (
                <div key={idx}>{item.price}</div>
              ))}
            </div>
            <div className={styles.dataList}>
              {curShowItems.map((item, idx) => (
                <div className={styles.dataRow} key={idx}>
                  <div className={styles.dataRowIcon}>
                    {dataRowIconText(item)}
                  </div>
                  <div className={styles.dataRowNumbers}>
                    <div>80</div>
                    <div> ➩</div>
                    <div data-larger={false} data-smaller={false}>
                      {isWeapon(item) ? item.attack : item.defense}
                    </div>
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
      showWeaponStoreFieldCheck,
      curClickVertex: { area },
    },
    UIStateDispatch,
  } = useContext(UIStateContext);
  const { userPreference } = useContext(userPreferenceContext);
  const { t } = useTranslation(userPreference.lang);
  const [curListPage, toggleCurListPage] = useState<0 | 1>(0);
  const curShowItems = weaponStores[area].filter(
    (item, index) => index >= 6 * curListPage && index < 6 * (curListPage + 1)
  );
  const handleKeyUpAttrs = showWeaponStoreFieldCheck
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
