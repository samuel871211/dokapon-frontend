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
    showMiniMap,
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
      <div className={styles.centeredCircle}></div>
      <div className={styles.checkTipContainer} data-show={showCheckTip}>
        <div className={styles.checkTipColumn}>
          <div className={styles.checkTipIcon}>O</div>
          <div className={styles.checkTipText}>{t("マスチェック")}</div>
        </div>
        <div className={styles.checkTipColumn}>
          <div className={styles.checkTipIcon}>▷</div>
          <div className={styles.checkTipText}>MAP</div>
        </div>
        <div className={styles.checkTipColumn}>
          <div className={styles.checkTipIcon}>X</div>
          <div className={styles.checkTipText}>{t("戻る")}</div>
        </div>
      </div>
      <div
        className={styles.nodeAttrsAndDistance}
        data-show={showVertexNameAndDistance}
      >
        <div className={styles.nodeType}>{curHoverVertexName}</div>
        <div
          className={styles.nodeDistance}
          data-show={curHoverVertexDistance !== -1}
        >
          總共是 <b>{curHoverVertexDistance}</b> 步
        </div>
      </div>
      <div className={styles.minimap} data-show={showMiniMap}>
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
    showMiniMap,
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
    showMiniMap,
    curHoverVertexDistance,
    curHoverVertexName,
    player1Position,
    player2Position,
    player3Position,
    player4Position,
    curAreaPosition,
  };
}
