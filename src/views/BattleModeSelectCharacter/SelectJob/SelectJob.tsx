// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import jobsToJP from "data/jobsToJP";
import { basicJobs } from "data/jobs";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import styles from "./SelectJob.module.css";
import gameProgressCtx from "reducers/gameProgress";
import topAreaStyles from "../TopArea/TopArea.module.css";

// Stateless vars declare.
// const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;

export default SelectJob;

function SelectJob() {
  const { t } = useTranslation();
  const { currentPlayerJob } = useMetaData();
  return (
    <div className={topAreaStyles.verticalButtonGroup}>
      {basicJobs.map((basicJob) => (
        <YellowBlock
          key={basicJob}
          role="button"
          className={styles.jobButton}
          borderRadius="9999px"
          selected={currentPlayerJob === basicJob}
        >
          {t(jobsToJP[basicJob])}
        </YellowBlock>
      ))}
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { playersAttrs, currentPlayerIdx } = gameProgress;
  const currentPlayerJob = playersAttrs[currentPlayerIdx].job;
  return { currentPlayerJob };
}
