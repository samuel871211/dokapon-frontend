// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./SelectGoalType.module.css";
import YellowBlock from "layouts/YellowBlock";
import SVGIcon from "layouts/SVGIcon";
import useTranslation from "hooks/useTranslation";
import { newGameProgressContext } from "reducers/newGameProgress";

// Stateless vars declare.

export default SelectGoalType;

function SelectGoalType() {
  const { t } = useTranslation();
  const { goalType } = useMetaData();

  return (
    <div className={styles.topRightContentArea}>
      <YellowBlock
        role="button"
        borderRadius="9999px"
        selected={goalType === "period"}
        className={styles.goalTypeButton}
      >
        <SVGIcon height="3.5rem"></SVGIcon>
        {t("期間を目標")}
      </YellowBlock>
      <YellowBlock
        role="button"
        borderRadius="9999px"
        selected={goalType === "money"}
        className={styles.goalTypeButton}
      >
        <SVGIcon height="3.5rem"></SVGIcon>
        {t("お金を目標")}
      </YellowBlock>
    </div>
  );
}

function useMetaData() {
  const { newGameProgress } = useContext(newGameProgressContext);
  const { goalType } = newGameProgress;
  return { goalType };
}
