// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import styles from "./SelectNPCLevel.module.css";
import { gameProgressCtx } from "reducers/gameProgress";
import topAreaStyles from "../TopArea/TopArea.module.css";

export default SelectNPCLevel;

function SelectNPCLevel() {
  const { currentPlayerNPCLevel } = useMetaData();
  const { t } = useTranslation();
  return (
    <div
      className={`${topAreaStyles.verticalButtonGroup} ${styles.verticalButtonGroup}`}
    >
      <YellowBlock
        role="button"
        borderRadius="9999px"
        selected={currentPlayerNPCLevel === "weak"}
        className={styles.NPCLevelButton}
      >
        {t("弱い")}
      </YellowBlock>
      <YellowBlock
        role="button"
        borderRadius="9999px"
        selected={currentPlayerNPCLevel === "normal"}
        className={styles.NPCLevelButton}
      >
        {t("普通")}
      </YellowBlock>
      <YellowBlock
        role="button"
        borderRadius="9999px"
        selected={currentPlayerNPCLevel === "strong"}
        className={styles.NPCLevelButton}
      >
        {t("ズルい")}
      </YellowBlock>
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { currentPlayerIdx, playersAttrs } = gameProgress;
  const currentPlayerNPCLevel = playersAttrs[currentPlayerIdx].npcLevel;
  return { currentPlayerNPCLevel };
}
