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
  const {
    showVertexNameAndDistance,
    showCheckTip,
    curHoverVertexDistance,
    curHoverVertexName,
  } = useMetaData();

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
      {showVertexNameAndDistance ? (
        <div className={styles.nodeAttrsAndDistance}>
          <div className={styles.nodeType}>{curHoverVertexName}</div>
          <div className={styles.nodeDistance}>
            總共是 <b>{curHoverVertexDistance}</b> 步
          </div>
        </div>
      ) : null}
      <div className={styles.minimap}></div>
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const {
    showVertexNameAndDistance,
    showCheckTip,
    curHoverVertexDistance,
    curHoverVertexName,
  } = gameProgress.DokaponTheWorldState.CheckState;
  return {
    showVertexNameAndDistance,
    showCheckTip,
    curHoverVertexDistance,
    curHoverVertexName,
  };
}
