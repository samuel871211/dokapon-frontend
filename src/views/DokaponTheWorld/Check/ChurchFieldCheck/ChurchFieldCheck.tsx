// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import CustomBorderBottom from "components/CustomBorderBottom";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import styles from "./ChurchFieldCheck.module.css";
import BottomDialog from "components/BottomDialog";
import gameProgressCtx from "reducers/gameProgress";

// Stateless vars declare.
const tempMoneyList = [-999999999, 999999999, 0, 123456789];

export default ChurchFieldCheck;

function ChurchFieldCheck() {
  const { t } = useTranslation();
  const { players } = useMetaData();

  return (
    <div className={styles.churchFieldCheckContainer}>
      <div className={styles.topArea}>
        <YellowBlock
          role="title"
          borderRadius="1.5rem"
          className={styles.churchName}
        >
          {t("教会")}
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
              {players.map((playerAttrs, idx) => (
                <div className={styles.name} key={idx}>
                  <div className={styles.icon}></div>
                  <div>{playerAttrs.name}</div>
                </div>
              ))}
            </div>
            <div className={styles.bankList}>
              {players.map((playerAttrs, idx) => (
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
              {players.map((playerAttrs, idx) => (
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
  const { players } = gameProgress;
  return { players };
}
