// Related third party imports.

// Local application/library specific imports.
import CustomBorderBottom from "components/CustomBorderBottom";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import styles from "./CastleFieldCheck.module.css";
import BottomDialog from "components/BottomDialog";
import { useContext } from "react";
import gameProgressCtx from "reducers/gameProgress";

// Stateless vars declare.

export default CastleFieldCheck;

function CastleFieldCheck() {
  const { t } = useTranslation();
  const { playersAttrs } = useMetaData();

  return (
    <div className={styles.castleFieldCheckContainer}>
      <div className={styles.topArea}>
        <YellowBlock
          role="title"
          borderRadius="1.5rem"
          className={styles.castleName}
        >
          {t("ドカポン城")}
        </YellowBlock>
        <YellowBlock
          role="dialog"
          borderRadius="1.5rem"
          className={styles.itemList}
        >
          <div className={styles.listHead}>
            <div className={styles.th}>{t("名前")}</div>
            <div className={styles.th}>{t("金庫")}</div>
            <div className={styles.th}>{t("特產品")}</div>
          </div>
          <CustomBorderBottom width="97.5%" />
          <div className={styles.listBody}>
            <div className={styles.nameList}>
              {playersAttrs.map((playerAttrs, idx) => (
                <div className={styles.name} key={idx}>
                  <div className={styles.icon}></div>
                  <div>{playerAttrs.name}</div>
                </div>
              ))}
            </div>
            <div className={styles.bankList}>
              {playersAttrs.map((playerAttrs, idx) => (
                <div
                  key={idx}
                  data-positive={playerAttrs.possession.money > 0}
                  data-negative={playerAttrs.possession.money < 0}
                >
                  {playerAttrs.possession.money.toLocaleString()}
                </div>
              ))}
            </div>
            <div className={styles.specialtyList}>
              {playersAttrs.map((playerAttrs, idx) => (
                <div
                  key={idx}
                  data-positive={playerAttrs.possession.treasury > 0}
                  data-negative={playerAttrs.possession.treasury < 0}
                >
                  {playerAttrs.possession.treasury.toLocaleString()}
                </div>
              ))}
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
  const { playersAttrs } = gameProgress;
  return { playersAttrs };
}
