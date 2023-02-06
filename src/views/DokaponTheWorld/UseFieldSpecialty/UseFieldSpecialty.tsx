// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import BottomDialog from "components/BottomDialog";
import CustomBorderBottom from "components/CustomBorderBottom";
import jobs from "data/jobs";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import gameProgressCtx from "reducers/gameProgress";
import styles from "./UseFieldSpecialty.module.css";
import fieldSpecialtyTypesToJP from "data/fieldSpecialtyTypesToJP";

// Stateless vars declare.

export default UseFieldSpecialty;

function UseFieldSpecialty() {
  const { t } = useTranslation();
  const { gameProgress } = useContext(gameProgressCtx);
  const { playersAttrs, currentPlayerIdx } = gameProgress;
  const currentPlayer = playersAttrs[currentPlayerIdx];
  const curPlayerJob = jobs[currentPlayer.job];
  const { name, type, briefExplanation } = curPlayerJob.fieldSpecialty;

  return (
    <div className={styles.useFieldSpecialtyContainer}>
      <div className={styles.topArea}>
        <YellowBlock
          role="dialog"
          borderRadius="1.5rem"
          className={styles.fieldSpecialtyDialog}
        >
          <div className={styles.line1}>
            <div className={styles.fieldSpecialtyName}>{name}</div>
            <div className={styles.fieldSpecialtyType}>
              {`<${t(fieldSpecialtyTypesToJP[type])}>`}
            </div>
          </div>
          <CustomBorderBottom />
          <div className={styles.line2}>{briefExplanation}</div>
        </YellowBlock>
      </div>
      {type === "manual" && <BottomDialog show showConfirmDialog />}
    </div>
  );
}
