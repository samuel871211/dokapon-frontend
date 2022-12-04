// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./ButtonGroup.module.css";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import gameProgressCtx from "reducers/gameProgress";

// Stateless vars declare.

export default ButtonGroup;

function ButtonGroup() {
  const { t } = useTranslation();
  const { selectedIdx } = useMetaData();
  return (
    <div className={styles.buttonGroupContainer}>
      <h1 className={styles.title}>{t("ドカポン・ザ・ワールド")}</h1>
      <YellowBlock
        role="button"
        selected={selectedIdx === 0}
        className={styles.button}
        borderRadius="9999px"
      >
        <img className={styles.img} />
        {t("はじめから")}
      </YellowBlock>
      <YellowBlock
        role="button"
        selected={selectedIdx === 1}
        className={styles.button}
        borderRadius="9999px"
      >
        <img className={styles.img} />
        {t("フリー対戦")}
      </YellowBlock>
      <YellowBlock
        role="button"
        selected={selectedIdx === 2}
        className={styles.button}
        borderRadius="9999px"
      >
        <img className={styles.img} />
        {t("図鑑")}
      </YellowBlock>
      <YellowBlock
        role="button"
        selected={selectedIdx === 3}
        className={styles.button}
        borderRadius="9999px"
      >
        <img className={styles.img} />
        {t("設定")}
      </YellowBlock>
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { selectedIdx } = gameProgress.HomeState.ButtonGroupState;
  return { selectedIdx };
}
