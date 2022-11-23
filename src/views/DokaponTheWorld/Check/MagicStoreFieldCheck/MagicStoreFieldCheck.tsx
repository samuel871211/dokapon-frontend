// Related third party imports.
import { useContext, useState } from "react";

// Local application/library specific imports.
import CustomBorderBottom from "components/CustomBorderBottom";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import styles from "./MagicStoreFieldCheck.module.css";
import magicStores from "data/magicStores";
import BottomDialog from "components/BottomDialog";
import { gameProgressCtx } from "reducers/gameProgress";

// Stateless vars declare.

export default MagicStoreFieldCheck;

function MagicStoreFieldCheck() {
  const { t } = useTranslation();
  const { curShowItems } = useMetaData();

  return (
    <div className={styles.magicStoreFieldCheckContainer}>
      <div className={styles.topArea}>
        <YellowBlock role="title" className={styles.magicStoreName}>
          {t("魔法屋")}
        </YellowBlock>
        <YellowBlock role="dialog" className={styles.itemList}>
          <div className={styles.listHead}>
            <div className={styles.th}>NAME</div>
            <div className={styles.th}>PRICE</div>
            <div className={styles.th}>DATA</div>
          </div>
          <CustomBorderBottom width="97.5%" />
          <div className={styles.listBody}>
            <div className={styles.left}>
              <div className={styles.arrowIcon}></div>
            </div>
            <div className={styles.nameList}>
              {curShowItems.map((item) => (
                <div className={styles.name} key={item.name}>
                  <div className={styles.icon}></div>
                  <div>{t(item.name)}</div>
                </div>
              ))}
            </div>
            <div className={styles.priceList}>
              {curShowItems.map((curShowItem, idx) => (
                <div key={idx}>{curShowItem.price}</div>
              ))}
            </div>
            <div className={styles.dataList}>
              {curShowItems.map((curShowItem, idx) => (
                <div key={idx}>{curShowItem.type}</div>
              ))}
            </div>
            <div className={styles.right}>
              <div className={styles.arrowIcon}></div>
            </div>
          </div>
        </YellowBlock>
      </div>
      <BottomDialog show showConfirmCircle></BottomDialog>
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { curListPage } =
    gameProgress.DokaponTheWorldState.MagicStoreFieldCheckState;
  const {
    curClickVertex: { area },
  } = gameProgress.DokaponTheWorldState;
  const curShowItems = magicStores[area].filter(
    (item, index) => index >= 6 * curListPage && index < 6 * (curListPage + 1)
  );
  return { curShowItems };
}
