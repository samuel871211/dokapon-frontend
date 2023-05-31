// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import villages from "data/villages";
import areaTypesToJP from "data/areaTypesToJP";
import CustomBorderBottom from "components/CustomBorderBottom";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import styles from "./VillageFieldCheck.module.css";
import BottomDialog from "components/BottomDialog";
import gameProgressCtx from "reducers/gameProgress";

// Stateless vars declare.

export default VillageFieldCheck;

function VillageFieldCheck() {
  const { t } = useTranslation();
  const { curCenterVertex, currentPlayer } = useMetaData();
  if (curCenterVertex.name !== "VillageField")
    throw new Error("curCenterVertex is not VillageField");

  const { area, villageIdx } = curCenterVertex;
  const possessionVillage = currentPlayer.possession.villages.find(
    (v) => v.area === area && v.idx === (villageIdx || 0)
  );
  const village = villages[area][villageIdx || 0];

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
            <div>
              {`${t(areaTypesToJP[curCenterVertex.area])}${t("エリア")}`}
            </div>
            <CustomBorderBottom />
          </div>
          <div className={styles.namePayTotal}>
            <div className={styles.line1}>NAME</div>
            <div className={styles.line1}>PAY</div>
            <div className={styles.line1}>TOTAL</div>
            <div className={styles.line2}>
              <div className={styles.icon}></div>
              <span>{t(village.name)}</span>
            </div>
            <div className={styles.line2}>
              <span>{village.value.toLocaleString()}</span>
              <div className={styles.icon}></div>
            </div>
            <div className={styles.line2}>
              <span>
                {possessionVillage
                  ? possessionVillage.accumulatedMoney.toLocaleString()
                  : 0}
              </span>
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
  const {
    gameProgress: {
      players,
      currentPlayerIdx,
      DokaponTheWorldState: { curCenterVertex },
    },
  } = useContext(gameProgressCtx);
  const currentPlayer = players[currentPlayerIdx];
  return { curCenterVertex, currentPlayer };
}
