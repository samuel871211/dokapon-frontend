// Related third party imports.
import { useContext } from "react";
import classNames from "classnames";

// Local application/library specific imports.
import areaTypesToJP from "utils/areaTypesToJP";
import villages from "data/villages";
import sevenContinents from "data/sevenContinents";
import globalStyles from "assets/styles/globalStyles.module.css";
import styles from "./CollectMoneyFieldCheck.module.css";
import useTranslation from "hooks/useTranslation";
import CustomBorderBottom from "components/CustomBorderBottom";
import YellowBlock from "layouts/YellowBlock";
import { gameProgressCtx } from "reducers/gameProgress";

// Stateless vars declare.
const ArrOf7 = [0, 0, 0, 0, 0, 0, 0];

export default CollectMoneyFieldCheck;

/**
 * @todo 需要得知目前所有玩家各自擁有的村莊
 * @todo 字體有分紅、藍、黑色，黑色的邏輯尚不清楚，還沒實作
 * @todo Boss的ICON、角色的ICON
 */
function CollectMoneyFieldCheck() {
  const { t } = useTranslation();
  const { curListPage, currentPlayerMoney } = useMetaData();
  return (
    <div className={styles.collectMoneyFieldCheckContainer}>
      <YellowBlock
        role="dialog"
        className={styles.collectMoneyFieldCheckDialog}
      >
        <div className={styles.topArea}>
          <div className={styles.topLeft}>
            <div className={styles.topLeftTitle}>AREA</div>
            <div className={styles.topLeftContent}>
              {t(areaTypesToJP(sevenContinents[curListPage]))}
            </div>
            <CustomBorderBottom width="98%" />
          </div>
          <div className={styles.topRight}>
            <div className={styles.topRightTitle}>MONEY</div>
            <div className={styles.topRightContent}>
              {currentPlayerMoney.toLocaleString()}
            </div>
            <CustomBorderBottom width="98%" />
          </div>
          <div className={styles.topFloating}>
            <div className={styles.topFloatingLeft}>
              <div className={styles.leftTriangle}></div>
              <div className={styles.leftText}>L</div>
            </div>
            <div
              className={classNames(
                styles.topFloatingCenter,
                globalStyles.hoverEffectGreenTransparent
              )}
            >
              {ArrOf7.map((item, idx) => (
                <div
                  key={idx}
                  className={styles.circle}
                  data-selected={curListPage === idx}
                />
              ))}
            </div>
            <div className={styles.topFloatingRight}>
              <div className={styles.rightText}>R</div>
              <div className={styles.rightTriangle}></div>
            </div>
          </div>
        </div>
        <div className={styles.bottomArea}>
          <div className={styles.listHead}>
            <div>{t("村名")}</div>
            <div>{t("價值")}</div>
            <div>{t("たまっている額")}</div>
          </div>
          <CustomBorderBottom width="99%" />
          <div className={styles.listBody}>
            {villages[sevenContinents[curListPage]].map((village) => (
              <div className={styles.listRow} key={village.name}>
                <div className={styles.villageName}>{t(village.name)}</div>
                <div className={styles.villagePrice}>
                  {village.value.toLocaleString()}
                </div>
                <div className={styles.villageAccumulatedPrice}>
                  {parseInt("0").toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </YellowBlock>
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const currentPlayer =
    gameProgress.playersAttrs[gameProgress.currentPlayerIdx];
  const { curListPage } =
    gameProgress.DokaponTheWorldState.CollectMoneyFieldCheckState;
  return {
    curListPage,
    currentPlayerMoney: currentPlayer.possession.money,
  };
}
