import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import styles from "./WalkToAvailableVertices.module.css";

export default WalkToAvailableVertices;

function WalkToAvailableVertices() {
  const { t } = useTranslation();
  return (
    <>
      <YellowBlock
        role="dialog"
        borderRadius="1.5rem"
        className={styles.topLeftDialog}
      >
        <div className={styles.topLeftDialogRow}>
          <span>○</span>
          {t("決定")}
        </div>
        <div className={styles.topLeftDialogRow}>
          <span>▲</span>
          {t("マスチェック")}
        </div>
        <div className={styles.topLeftDialogRow}>
          <span>✖</span>
          {t("戻る")}
        </div>
      </YellowBlock>
    </>
  );
}
