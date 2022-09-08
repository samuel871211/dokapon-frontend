// Related third party imports.
import CustomBorderBottom from "components/CustomBorderBottom";
import YellowBlock from "layouts/YellowBlock";
import {
  useEffect,
  useRef,
  useState,
  SyntheticEvent,
  useContext,
  KeyboardEvent,
} from "react";
import { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import globalStyles from "assets/styles/globalStyles.module.css";
import styles from "./CollectMoneyFieldCheck.module.css";
import classNames from "classnames";
import { userPreferenceContext } from "reducers/userPreference";

// Stateless vars declare.
const price = 195000;
const money = 999999999;
const areaName = "名稱名稱名稱名稱";

export default CollectMoneyFieldCheck;

function CollectMoneyFieldCheck(props: { state: TransitionStatus }) {
  const { state } = props;
  const { currentListPage, handleKeyUpAttrs } = useMetaData(state);
  return (
    <div
      className={styles.collectMoneyFieldCheckContainer}
      {...handleKeyUpAttrs}
    >
      <YellowBlock
        role="dialog"
        className={styles.collectMoneyFieldCheckDialog}
      >
        <div className={styles.topArea}>
          <div className={styles.topLeft}>
            <div className={styles.topLeftTitle}>AREA</div>
            <div className={styles.topLeftContent}>{areaName}</div>
            <CustomBorderBottom width="98%" />
          </div>
          <div className={styles.topRight}>
            <div className={styles.topRightTitle}>MONEY</div>
            <div className={styles.topRightContent}>
              {money.toLocaleString()}
            </div>
            <CustomBorderBottom width="98%" />
          </div>
          <div className={styles.topFloating}>
            <div className={styles.topFloatingLeft}>
              <div className={styles.leftTriangle}></div>
              <div className={styles.leftText}>L</div>
            </div>
            <div
              className={classNames(
                styles.topFloatingCenter,
                globalStyles.hoverEffectGreenTransparent
              )}
            >
              {Array(7)
                .fill(0)
                .map((item, idx) => (
                  <div
                    key={idx}
                    className={styles.circle}
                    data-selected={currentListPage === idx}
                  />
                ))}
            </div>
            <div className={styles.topFloatingRight}>
              <div className={styles.rightText}>R</div>
              <div className={styles.rightTriangle}></div>
            </div>
          </div>
        </div>
        <div className={styles.bottomArea}>
          <div className={styles.listHead}>
            <div>村名</div>
            <div>價值</div>
            <div>たまっている額</div>
          </div>
          <CustomBorderBottom width="99%" />
          <div className={styles.listBody}>
            <div className={styles.listRow}>
              <div className={styles.villageName}>拉家鴿村</div>
              <div className={styles.villagePrice}>
                {price.toLocaleString()}
              </div>
              <div className={styles.villageAccumulatedPrice}>
                {money.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </YellowBlock>
    </div>
  );
}

function useMetaData(state: TransitionStatus) {
  const focusElement = useRef<HTMLDivElement>(null);
  const [currentListPage, setCurrentListPage] = useState(0);
  const { userPreference } = useContext(userPreferenceContext);
  const handleKeyUpAttrs = state === "entered" && {
    tabIndex: 0,
    ref: focusElement,
    onBlur: (event: SyntheticEvent<HTMLDivElement>) =>
      event.currentTarget.focus(),
    onKeyUp: handleKeyUp,
  };
  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case userPreference.L1:
      case userPreference.L2:
        setCurrentListPage(currentListPage === 0 ? 6 : currentListPage - 1);
        return;
      case userPreference.R1:
      case userPreference.R2:
        setCurrentListPage(currentListPage === 6 ? 0 : currentListPage + 1);
        return;
    }
  }
  useEffect(() => {
    if (state === "entered") focusElement.current?.focus();
  }, [state]);
  return { currentListPage, handleKeyUpAttrs };
}
