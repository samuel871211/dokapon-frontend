// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./Check.module.css";
import useTranslation from "hooks/useTranslation";
import { gameProgressCtx } from "reducers/gameProgress";

// Stateless vars declare.

export default Check;

/**
 * @todo 得知目前的`vertex.type`
 * @todo 如果為battleField，需知道地形
 * @todo 計算與目前玩家的距離
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
  const { showVertexAttrsAndDistance, showCheckTip } =
    gameProgress.DokaponTheWorldState;
  return { showVertexAttrsAndDistance, showCheckTip };
}
