// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import npcLevelsToJP from "data/npcLevelsToJP";
import colorsToJP from "data/colorsToJP";
import gendersToJP from "data/gendersToJP";
import jobsToJP from "data/jobsToJP";
import styles from "./NPCGenerateDialog.module.css";
import CustomBorderBottom from "components/CustomBorderBottom";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import { gameProgressCtx } from "reducers/gameProgress";

// Stateless vars declare.
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;

export default NPCGenerateDialog;

function NPCGenerateDialog() {
  const { t } = useTranslation();
  const { currentPlayer, imgSrc, selectedIdx } = useMetaData();
  if (!currentPlayer.isNPC) throw new Error("current player is not NPC");

  return (
    <YellowBlock
      role="dialog"
      borderRadius="1.5rem"
      className={styles.NPCGenerateDialog}
    >
      <div className={styles.title}>{t("勇者募集!!")}</div>
      <CustomBorderBottom width="100%" />
      <div className={styles.bottomArea}>
        <div className={styles.bottomLeftArea}>
          <img src={imgSrc} alt="NPC Image" />
        </div>
        <div className={styles.bottomRightArea}>
          <YellowBlock
            role="button"
            borderRadius="9999px"
            selected={selectedIdx === 0}
            className={styles.button}
          >
            {t(npcLevelsToJP[currentPlayer.npcLevel])}
          </YellowBlock>
          <YellowBlock
            role="button"
            borderRadius="9999px"
            selected={selectedIdx === 1}
            className={styles.button}
          >
            {t(gendersToJP[currentPlayer.gender])}
          </YellowBlock>
          <YellowBlock
            role="button"
            borderRadius="9999px"
            selected={selectedIdx === 2}
            className={styles.button}
          >
            {t(colorsToJP[currentPlayer.color])}
          </YellowBlock>
          <YellowBlock
            role="button"
            borderRadius="9999px"
            selected={selectedIdx === 3}
            className={styles.button}
          >
            {t(jobsToJP[currentPlayer.job])}
          </YellowBlock>
          <YellowBlock
            role="button"
            borderRadius="9999px"
            data-selected={selectedIdx === 4}
            className={`${styles.button} ${styles.confirmBtn}`}
          >
            {t("決定")}
          </YellowBlock>
        </div>
      </div>
    </YellowBlock>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { playersAttrs, currentPlayerIdx, currentView } = gameProgress;
  if (
    currentView !== "BattleModeSelectCharacter" &&
    currentView !== "StoryModeSelectCharacter"
  )
    throw new Error("currentView is not SelectCharacter");

  const { selectedIdx } = gameProgress[currentView].NPCGenerateDialog;
  const currentPlayer = playersAttrs[currentPlayerIdx];
  const { job, gender, color } = playersAttrs[currentPlayerIdx];
  const imgSrc = `${backendBaseUrl}/imgs/${job}_${gender}_${color}_front.png`;
  return { currentPlayer, imgSrc, selectedIdx };
}
