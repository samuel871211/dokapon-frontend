// Related third party imports.
import classNames from "classnames";
import { useCallback, useContext } from "react";

// Local application/library specific imports.
import styles from "./GoalInputDialog.module.css";
import YellowBlock from "layouts/YellowBlock";
import CustomBorderBottom from "components/CustomBorderBottom";
import useTranslation from "hooks/useTranslation";
import { gameProgressCtx } from "reducers/gameProgress";

// Stateless vars declare.

export default GoalInputDialog;

function GoalInputDialog() {
  const { t } = useTranslation();
  const { selectedIdx, goalInputLen, transferGoalInputToArray } = useMetaData();
  return (
    <div className={styles.topRightContentArea}>
      <YellowBlock
        role="dialog"
        borderRadius="1.5rem"
        className={styles.goalInputDialog}
      >
        <div>{t("目標期間")}</div>
        <CustomBorderBottom />
        <div className={styles.bottomArea}>
          <YellowBlock
            role="button"
            borderRadius="9999px"
            className={styles.goalInputBlock}
          >
            {Array(goalInputLen)
              .fill(0)
              .map((item, idx) => (
                <div
                  key={idx}
                  className={classNames(styles.goalInputButton, {
                    selectedEffectGreenYellow: selectedIdx === idx,
                  })}
                >
                  {transferGoalInputToArray("")[idx]}
                </div>
              ))}
          </YellowBlock>
        </div>
      </YellowBlock>
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const {
    goalType,
    goalInput,
    BattleModeSelectCharacter: { GoalInputDialog },
  } = gameProgress;
  const { selectedIdx } = GoalInputDialog;
  const goalInputLen = goalType === "period" ? 3 : 9;
  const transferGoalInputToArray = useCallback(
    (fillEmpty: string) => {
      const result = String(goalInput).split("");
      const initResultLen = result.length;
      for (let i = 0; i < goalInputLen - initResultLen; i++) {
        result.unshift(fillEmpty);
      }
      return result;
    },
    [goalInput, goalInputLen]
  );

  return {
    selectedIdx,
    goalInputLen,
    transferGoalInputToArray,
  };
}
