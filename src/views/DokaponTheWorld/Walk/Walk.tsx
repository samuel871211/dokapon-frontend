// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import styles from "./Walk.module.css";
import gameProgressCtx from "reducers/gameProgress";
import BottomDialog from "components/BottomDialog";

// Stateless vars declare.

export default Walk;

function Walk() {
  const { t } = useTranslation();
  const {
    gameProgress: {
      DokaponTheWorldState: { curStepCount, curPath },
    },
  } = useContext(gameProgressCtx);
  return (
    <>
      <YellowBlock
        role="dialog"
        borderRadius="1.5rem"
        className={styles.topLeftDialog}
      >
        <div className={styles.topLeftDialogRow}>
          <span>○</span>
          {t("チェック")}
        </div>
        <div className={styles.topLeftDialogRow}>
          <span>☐</span>
          {t("おまかせ")}
        </div>
        <div className={styles.topLeftDialogRow}>
          <span>▲</span>
          {t("データ")}
        </div>
        <div className={styles.topLeftDialogRow}>
          <span>▶</span>
          MAP
        </div>
      </YellowBlock>
      <YellowBlock
        role="dialog"
        borderRadius="1.5rem"
        className={styles.topBottomDialog}
      >
        <span>{t("あと")}</span>
        <span>{curStepCount - (curPath.length - 1)}</span>
        <span>{t("步")}</span>
      </YellowBlock>
      <div className={styles.bottomDialogContainer}>
        <BottomDialog
          show={curPath.length - 1 === curStepCount}
          showConfirmDialog
        />
      </div>
    </>
  );
}
