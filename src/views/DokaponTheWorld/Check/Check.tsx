// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./Check.module.css";
import useTranslation from "hooks/useTranslation";
import gameProgressCtx from "reducers/gameProgress";
import ids from "../ids";
import YellowBlock from "layouts/YellowBlock";

// Stateless vars declare.

export default Check;

/**
 * @todo 得知目前的`vertex.type`
 * @todo 如果為battleField，需知道地形
 * @todo 計算與目前玩家的距離
 * @todo 特殊vertex上面要有名稱(商店、村莊、洞窟......)
 */
function Check() {
  const { t } = useTranslation();
  const {
    curStepCount,
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
    <>
      <div className={styles.centeredCircle}></div>
      <YellowBlock
        role="dialog"
        borderRadius="1.5rem"
        className={styles.checkTipContainer}
        data-show={showCheckTip}
      >
        <div className={styles.checkTipColumn}>
          <div className={styles.checkTipIcon}>○</div>
          <div className={styles.checkTipText}>{t("マスチェック")}</div>
        </div>
        <div className={styles.checkTipColumn}>
          <div className={styles.checkTipIcon}>☐</div>
          <div className={styles.checkTipText}>{t("スピードUP")}</div>
        </div>
        <div className={styles.checkTipColumn}>
          <div className={styles.checkTipIcon}>▶</div>
          <div className={styles.checkTipText}>MAP</div>
        </div>
        <div className={styles.checkTipColumn}>
          <div className={styles.checkTipIcon}>✖</div>
          <div className={styles.checkTipText}>{t("戻る")}</div>
        </div>
      </YellowBlock>
      <YellowBlock
        role="dialog"
        borderRadius="1.5rem"
        className={styles.nodeAttrsAndDistance}
        data-show={showVertexNameAndDistance}
      >
        <div className={styles.nodeType}>{curHoverVertexName}</div>
        <div
          className={styles.nodeDistance}
          data-show={
            curHoverVertexDistance !== -1 &&
            curHoverVertexDistance <= curStepCount
          }
        >
          總共是 <b>{curHoverVertexDistance}</b> 步
        </div>
      </YellowBlock>
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
    </>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { curStepCount } = gameProgress.DokaponTheWorldState;
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
    curStepCount,
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
