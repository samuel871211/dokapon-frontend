// Related third party imports.
import { useContext } from "react";
import classNames from "classnames";

// Local application/library specific imports.
import { Shield, Weapon } from "global";
import weaponStores from "data/weaponStores";
import CustomBorderBottom from "components/CustomBorderBottom";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import styles from "./WeaponStoreFieldCheck.module.css";
import gameProgressCtx from "reducers/gameProgress";
import BottomDialog from "components/BottomDialog";
import weapons from "data/weapons";
import shields from "data/shields";

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

function WeaponStoreFieldCheck() {
  const { t } = useTranslation();
  const { curShowItems, curPlayerWeapon, curPlayerShield } = useMetaData();

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
                    <div>
                      {isWeapon(item)
                        ? curPlayerWeapon.attack
                        : curPlayerShield.defense}
                    </div>
                    <div> ➩</div>
                    <div
                      data-larger={
                        isWeapon(item)
                          ? curPlayerWeapon.attack < item.attack
                          : curPlayerShield.defense < item.defense
                      }
                      data-smaller={
                        isWeapon(item)
                          ? curPlayerWeapon.attack > item.attack
                          : curPlayerShield.defense > item.defense
                      }
                    >
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
  const { curListPage } =
    gameProgress.DokaponTheWorldState.WeaponStoreFieldCheckState;
  const { curCenterVertex } = gameProgress.DokaponTheWorldState;
  const curPlayer = gameProgress.playersAttrs[gameProgress.currentPlayerIdx];
  const curPlayerWeapon = weapons[curPlayer.weapon];
  const curPlayerShield = shields[curPlayer.shield];
  const weaponStore = weaponStores[curCenterVertex.area];
  const curShowItems = weaponStore.filter(
    (item, index) => index >= 6 * curListPage && index < 6 * (curListPage + 1)
  );
  return { curShowItems, curPlayerWeapon, curPlayerShield };
}
