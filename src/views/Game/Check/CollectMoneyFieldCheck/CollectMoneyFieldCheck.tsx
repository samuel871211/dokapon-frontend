// Related third party imports.
import CustomBorderBottom from "components/CustomBorderBottom";
import YellowBlock from "layouts/YellowBlock";
import {
  useEffect,
  useRef,
  useState,
  SyntheticEvent,
  useContext,
  KeyboardEvent,
} from "react";
import { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import areaTypesToJP from "utils/areaTypesToJP";
import villages from "data/villages";
import sevenContinents from "data/sevenContinents";
import globalStyles from "assets/styles/globalStyles.module.css";
import styles from "./CollectMoneyFieldCheck.module.css";
import classNames from "classnames";
import { userPreferenceContext } from "reducers/userPreference";
import useTranslation from "hooks/useTranslation";

// Stateless vars declare.
const money = 999999999;

export default CollectMoneyFieldCheck;

/**
 * @todo 需要得知目前所有玩家各自擁有的村莊
 * @todo 需要得知目前玩家的金錢
 * @todo 字體有分紅、藍、黑色，黑色的邏輯尚不清楚，還沒實作
 * @todo Boss的ICON、角色的ICON
 */
function CollectMoneyFieldCheck(props: { state: TransitionStatus }) {
  const { state } = props;
  const { currentListPage, handleKeyUpAttrs, t } = useMetaData(state);
  return (
    <div
      className={styles.collectMoneyFieldCheckContainer}
      {...handleKeyUpAttrs}
    >
      <YellowBlock
        role="dialog"
        className={styles.collectMoneyFieldCheckDialog}
      >
        <div className={styles.topArea}>
          <div className={styles.topLeft}>
            <div className={styles.topLeftTitle}>AREA</div>
            <div className={styles.topLeftContent}>
              {t(areaTypesToJP(sevenContinents[currentListPage]))}
            </div>
            <CustomBorderBottom width="98%" />
          </div>
          <div className={styles.topRight}>
            <div className={styles.topRightTitle}>MONEY</div>
            <div className={styles.topRightContent}>
              {money.toLocaleString()}
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
              {Array(7)
                .fill(0)
                .map((item, idx) => (
                  <div
                    key={idx}
                    className={styles.circle}
                    data-selected={currentListPage === idx}
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
            {villages[sevenContinents[currentListPage]].map((village) => (
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

function useMetaData(state: TransitionStatus) {
  const focusElement = useRef<HTMLDivElement>(null);
  const [currentListPage, setCurrentListPage] = useState(0);
  const { userPreference } = useContext(userPreferenceContext);
  const { t } = useTranslation(userPreference.lang);
  const handleKeyUpAttrs = state === "entered" && {
    tabIndex: 0,
    ref: focusElement,
    onBlur: (event: SyntheticEvent<HTMLDivElement>) =>
      event.currentTarget.focus(),
    onKeyUp: handleKeyUp,
  };
  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case userPreference.L1:
      case userPreference.L2:
        setCurrentListPage(currentListPage === 0 ? 6 : currentListPage - 1);
        return;
      case userPreference.R1:
      case userPreference.R2:
        setCurrentListPage(currentListPage === 6 ? 0 : currentListPage + 1);
        return;
    }
  }
  useEffect(() => {
    if (state === "entered") focusElement.current?.focus();
  }, [state]);
  return { currentListPage, handleKeyUpAttrs, t };
}
