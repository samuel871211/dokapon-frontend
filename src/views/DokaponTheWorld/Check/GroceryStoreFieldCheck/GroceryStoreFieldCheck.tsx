// Related third party imports.
import { useContext, useState } from "react";

// Local application/library specific imports.
import CustomBorderBottom from "components/CustomBorderBottom";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import styles from "./GroceryStoreFieldCheck.module.css";
import groceryStores from "data/groceryStores";
import gameProgressCtx from "reducers/gameProgress";
import BottomDialog from "components/BottomDialog";

// Stateless vars declare.

export default GroceryStoreFieldCheck;

function GroceryStoreFieldCheck() {
  const { t } = useTranslation();
  const { curShowItems } = useMetaData();

  return (
    <div className={styles.groceryStoreFieldCheckContainer}>
      <div className={styles.topArea}>
        <YellowBlock
          role="title"
          className={styles.groceryStoreName}
          borderRadius="1.5rem"
        >
          {t("アイテム屋")}
        </YellowBlock>
        <YellowBlock
          borderRadius="1.5rem"
          role="dialog"
          className={styles.itemList}
        >
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
  const {
    curClickVertex: { area },
  } = gameProgress.DokaponTheWorldState;
  const { curListPage } =
    gameProgress.DokaponTheWorldState.GroceryStoreFieldCheckState;
  const curShowItems = groceryStores[area].filter(
    (item, index) => index >= 6 * curListPage && index < 6 * (curListPage + 1)
  );

  return { curShowItems };
}
