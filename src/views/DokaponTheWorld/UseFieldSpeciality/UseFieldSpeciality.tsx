// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import BottomDialog from "components/BottomDialog";
import CustomBorderBottom from "components/CustomBorderBottom";
import jobs from "data/jobs";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import gameProgressCtx from "reducers/gameProgress";
import styles from "./UseFieldSpeciality.module.css";
import fieldSpecialityTypesToJP from "data/fieldSpecialityTypesToJP";

// Stateless vars declare.

export default UseFieldSpeciality;

function UseFieldSpeciality() {
  const { t } = useTranslation();
  const { gameProgress } = useContext(gameProgressCtx);
  const { playersAttrs, currentPlayerIdx } = gameProgress;
  const currentPlayer = playersAttrs[currentPlayerIdx];
  const curPlayerJob = jobs[currentPlayer.job];
  const { name, type, briefExplanation } = curPlayerJob.fieldSpeciality;

  return (
    <div className={styles.useFieldSpecialityContainer}>
      <div className={styles.topArea}>
        <YellowBlock
          role="dialog"
          borderRadius="1.5rem"
          className={styles.fieldSpecialityDialog}
        >
          <div className={styles.line1}>
            <div className={styles.fieldSpecialityName}>{name}</div>
            <div className={styles.fieldSpecialityType}>
              {`<${t(fieldSpecialityTypesToJP[type])}>`}
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
