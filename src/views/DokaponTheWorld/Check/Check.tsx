// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./Check.module.css";
import useTranslation from "hooks/useTranslation";
import gameProgressCtx from "reducers/gameProgress";
import ids from "../ids";

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
    player1Position,
    player2Position,
    player3Position,
    player4Position,
    curAreaPosition,
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
          <div
            className={styles.nodeDistance}
            data-show={curHoverVertexDistance !== -1}
          >
            總共是 <b>{curHoverVertexDistance}</b> 步
          </div>
        </div>
      ) : null}
      <div className={styles.minimap}>
        <div
          id={ids.miniMapCurArea}
          className={styles.currentArea}
          style={{
            top: `${curAreaPosition.y}%`,
            left: `${curAreaPosition.x}%`,
          }}
        />
      </div>
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
    miniMap: {
      player1Position,
      player2Position,
      player3Position,
      player4Position,
      curAreaPosition,
    },
  } = gameProgress.DokaponTheWorldState.CheckState;
  return {
    showVertexNameAndDistance,
    showCheckTip,
    curHoverVertexDistance,
    curHoverVertexName,
    player1Position,
    player2Position,
    player3Position,
    player4Position,
    curAreaPosition,
  };
}
