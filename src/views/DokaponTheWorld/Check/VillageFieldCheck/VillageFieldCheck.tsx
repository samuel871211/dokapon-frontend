// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import areaTypesToJP from "data/areaTypesToJP";
import CustomBorderBottom from "components/CustomBorderBottom";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import styles from "./VillageFieldCheck.module.css";
import BottomDialog from "components/BottomDialog";
import { gameProgressCtx } from "reducers/gameProgress";

// Stateless vars declare.

export default VillageFieldCheck;

/**
 * @todo village name
 * @todo village pay
 * @todo village total
 */
function VillageFieldCheck() {
  const { t } = useTranslation();
  const { area } = useMetaData();

  return (
    <div className={styles.villageFieldCheckContainer}>
      <div className={styles.topArea}>
        <div className={styles.empty}></div>
        <YellowBlock
          role="dialog"
          borderRadius="1.5rem"
          className={styles.villageDetail}
        >
          <div className={styles.villageArea}>
            <div>AREA</div>
            <div>{`${t(areaTypesToJP[area])}${t("エリア")}`}</div>
            <CustomBorderBottom />
          </div>
          <div className={styles.namePayTotal}>
            <div className={styles.line1}>NAME</div>
            <div className={styles.line1}>PAY</div>
            <div className={styles.line1}>TOTAL</div>
            <div className={styles.line2}>
              <div className={styles.icon}></div>
              <span>一二三四村</span>
            </div>
            <div className={styles.line2}>
              <span>50000</span>
              <div className={styles.icon}></div>
            </div>
            <div className={styles.line2}>
              <span>12345</span>
              <div className={styles.icon}></div>
            </div>
          </div>
        </YellowBlock>
      </div>
      <BottomDialog show showConfirmCircle></BottomDialog>
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const {
    curClickVertex: { area },
  } = gameProgress.DokaponTheWorldState;
  return { area };
}
