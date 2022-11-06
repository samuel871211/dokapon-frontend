// Related third party imports.
import { useContext, useState } from "react";

// Local application/library specific imports.
import { Shield, Weapon } from "global";
import weaponStores from "data/weaponStores";
import CustomBorderBottom from "components/CustomBorderBottom";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import BottomDialogConfirmCircle from "components/BottomDialogConfirmCircle";
import styles from "./WeaponStoreFieldCheck.module.css";
import { gameProgressCtx } from "reducers/gameProgress";
import BottomDialog from "components/BottomDialog";

// Stateless vars declare.
function dataRowIconText(item: Weapon | Shield | undefined) {
  if (!item) return "";
  if ("additionalDamageJobs" in item) return "AT";
  else return "DF";
}
function isWeapon(item: Weapon | Shield): item is Weapon {
  return "additionalDamageJobs" in item;
}

export default WeaponStoreFieldCheck;

/**
 * @todo 需要得知目前角色穿著的武器跟盾牌
 */
function WeaponStoreFieldCheck() {
  const { t } = useTranslation();
  const { curShowItems } = useMetaData();

  return (
    <div className={styles.weaponStoreFieldCheckContainer}>
      <div className={styles.topArea}>
        <YellowBlock
          role="title"
          borderRadius="1.5rem"
          className={styles.weaponStoreName}
        >
          {t("武器屋")}
        </YellowBlock>
        <YellowBlock
          role="dialog"
          borderRadius="1.5rem"
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
              {curShowItems.map((item, idx) => (
                <div key={idx}>{item.price}</div>
              ))}
            </div>
            <div className={styles.dataList}>
              {curShowItems.map((item, idx) => (
                <div className={styles.dataRow} key={idx}>
                  <div className={styles.dataRowIcon}>
                    {dataRowIconText(item)}
                  </div>
                  <div className={styles.dataRowNumbers}>
                    <div>80</div>
                    <div> ➩</div>
                    <div data-larger={false} data-smaller={false}>
                      {isWeapon(item) ? item.attack : item.defense}
                    </div>
                  </div>
                </div>
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
  const { curListPage } = gameProgress.DokaponTheWorld.WeaponStoreFieldCheck;
  const {
    curClickVertex: { area },
  } = gameProgress.DokaponTheWorld;
  const curShowItems = weaponStores[area].filter(
    (item, index) => index >= 6 * curListPage && index < 6 * (curListPage + 1)
  );
  return { curShowItems };
}
