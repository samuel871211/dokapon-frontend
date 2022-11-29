// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import CustomBorderBottom from "components/CustomBorderBottom";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import styles from "./JobStoreFieldCheck.module.css";
import jobs from "data/jobs";
import BottomDialog from "components/BottomDialog";
import { gameProgressCtx } from "reducers/gameProgress";

// Stateless vars declare.

export default JobStoreFieldCheck;

function JobStoreFieldCheck() {
  const { t } = useTranslation();
  const { curShowJobs } = useMetaData();

  return (
    <div className={styles.jobStoreFieldCheckContainer}>
      <div className={styles.topArea}>
        <YellowBlock
          role="title"
          borderRadius="1.5rem"
          className={styles.jobStoreName}
        >
          {t("職安")}
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
              {curShowJobs.map((job) => (
                <div className={styles.name} key={jobs[job].name}>
                  <div className={styles.icon}></div>
                  <div>{t(jobs[job].name)}</div>
                </div>
              ))}
            </div>
            <div className={styles.priceList}>
              {curShowJobs.map((job) => (
                <div key={jobs[job].name}>
                  {jobs[job].price.toLocaleString()}
                </div>
              ))}
            </div>
            <div className={styles.dataList}>
              {curShowJobs.map((job) => (
                <div className={styles.dataListItem} key={jobs[job].name}>
                  <div className={styles.dataListItemIcon}>@</div>
                  <div className={styles.dataListItemBag}>
                    <div>ア：</div>
                    <b>{jobs[job].bagSpace.items}</b>
                  </div>
                  <div className={styles.dataListItemMagic}>
                    <div>魔：</div>
                    <b>{jobs[job].bagSpace.magicBooks}</b>
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
  const { currentPlayerIdx, playersAttrs } = gameProgress;
  const { availableJobs } = playersAttrs[currentPlayerIdx];
  const { curListPage } =
    gameProgress.DokaponTheWorldState.JobStoreFieldCheckState;
  const curShowJobs = availableJobs.filter(
    (item, index) => index >= 6 * curListPage && index < 6 * (curListPage + 1)
  );
  return { curShowJobs };
}
