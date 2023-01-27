// Related third party imports.

// Local application/library specific imports.
import villages from "data/villages";
import sevenContinents from "data/sevenContinents";
import areaTypesToJP from "data/areaTypesToJP";
import Pagination from "components/Pagination";
import YellowBlock from "layouts/YellowBlock";
import CustomBorderBottom from "components/CustomBorderBottom";
import TextWithBorderBottom from "components/TextWithBorderBottom";
import styles from "./VillagesDialog.module.css";
import globalStyles from "assets/styles/globalStyles.module.css";
import useTranslation from "hooks/useTranslation";
import classNames from "classnames";

// Stateless vars declare.

export default VillagesDialog;

/**
 * @todo 需要得知目前所有玩家各自擁有的村莊
 * @todo 字體有分紅、藍、黑色，黑色的邏輯尚不清楚，還沒實作
 * @todo Boss的ICON、角色的ICON
 */
function VillagesDialog(props: { curPage: number; curHoverIdx: number }) {
  const { t } = useTranslation();
  const { curPage, curHoverIdx } = props;
  return (
    <YellowBlock role="dialog" className={styles.collectMoneyFieldCheckDialog}>
      <div className={styles.topArea}>
        <div className={styles.topLeft}>
          <div className={styles.topLeftTitle}>AREA</div>
          <TextWithBorderBottom diameter="1rem" width="100%">
            <div className={styles.topLeftContent}>
              {t(areaTypesToJP[sevenContinents[curPage]])}
            </div>
          </TextWithBorderBottom>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topRightTitle}>MONEY</div>
          <TextWithBorderBottom diameter="1rem" width="100%">
            <div className={styles.topRightContent}>
              {parseInt("0").toLocaleString()}
            </div>
          </TextWithBorderBottom>
        </div>
        <div className={styles.topFloating}>
          <Pagination maxCount={7} curPage={curPage} />
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
          {villages[sevenContinents[curPage]].map((village, idx) => (
            <div
              key={village.name}
              className={classNames({
                [styles.listRow]: true,
                [globalStyles.hoverEffectGreenTransparent]: curHoverIdx === idx,
              })}
            >
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
  );
}
