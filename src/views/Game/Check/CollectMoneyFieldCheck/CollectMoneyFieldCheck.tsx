// Related third party imports.
import CustomBorderBottom from "components/CustomBorderBottom";
import YellowBlock from "layouts/YellowBlock";
import { useEffect, useRef } from "react";
import { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import styles from "./CollectMoneyFieldCheck.module.css";

// Stateless vars declare.
const money = 999999999;
const areaName = "名稱名稱名稱名稱";

export default CollectMoneyFieldCheck;

function CollectMoneyFieldCheck(props: { state: TransitionStatus }) {
  const { state } = props;
  const { focusElement } = useMetaData(state);
  return (
    <div className={styles.collectMoneyFieldCheckContainer}>
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
        </div>
        <div className={styles.bottomArea}></div>
      </YellowBlock>
    </div>
  );
}

function useMetaData(state: TransitionStatus) {
  const focusElement = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (state === "entered") focusElement.current?.focus();
  }, [state]);
  return { focusElement };
}
