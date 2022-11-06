// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./Check.module.css";
import useTranslation from "hooks/useTranslation";
import { gameProgressCtx } from "reducers/gameProgress";

// Stateless vars declare.

export default Check;

/**
 * 因為Check底下又有很多獨立的view級component(畫面佔整頁，且需要handleKeyUp的)
 *
 * 所以把這些component提升到跟Check同一個階層，確保showCheck跟isCheckTopLayer都true才focus
 */
function Check() {
  const { t } = useTranslation();
  const { showVertexAttrsAndDistance, showCheckTip } = useMetaData();

  return (
    <div className={styles.checkContainer}>
      {showCheckTip ? (
        <div className={styles.checkTipContainer}>
          <div className={styles.checkTipColumn}>
            <div className={styles.checkTipIcon}>O</div>
            <div className={styles.checkTipText}>{t("マスチェック")}</div>
          </div>
          <div className={styles.checkTipColumn}>
            <div className={styles.checkTipIcon}>S</div>
            <div className={styles.checkTipText}>MAP</div>
          </div>
          <div className={styles.checkTipColumn}>
            <div className={styles.checkTipIcon}>X</div>
            <div className={styles.checkTipText}>{t("戻る")}</div>
          </div>
        </div>
      ) : null}
      {showVertexAttrsAndDistance ? (
        <div className={styles.nodeAttrsAndDistance}>
          <div className={styles.nodeType}>草原拉我</div>
          <div className={styles.nodeDistance}>
            總共是 <b>28</b> 步
          </div>
        </div>
      ) : null}
      <div className={styles.minimap}></div>
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { DokaponTheWorld } = gameProgress;
  const { showVertexAttrsAndDistance, showCheckTip } =
    gameProgress.DokaponTheWorld;
  return { showVertexAttrsAndDistance, showCheckTip };
}
