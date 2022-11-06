// Related third party imports.
import { useState, useContext, KeyboardEvent } from "react";

// Local application/library specific imports.
import styles from "./BtnGroup.module.css";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import { gameProgressCtx } from "reducers/gameProgress";

// Stateless vars declare.

export default BtnGroup;

function BtnGroup() {
  const { t } = useTranslation();
  const { selectedBtnIdx } = useMetaData();
  return (
    <div>
      <YellowBlock
        role="button"
        selected={selectedBtnIdx === 0}
        className={styles.btn}
        borderRadius="9999px"
      >
        <img className={styles.img} />
        {t("はじめから")}
      </YellowBlock>
      <YellowBlock
        role="button"
        selected={selectedBtnIdx === 1}
        className={styles.btn}
        borderRadius="9999px"
      >
        <img className={styles.img} />
        {t("フリー対戦")}
      </YellowBlock>
      <YellowBlock
        role="button"
        selected={selectedBtnIdx === 2}
        className={styles.btn}
        borderRadius="9999px"
      >
        <img className={styles.img} />
        {t("図鑑")}
      </YellowBlock>
      <YellowBlock
        role="button"
        selected={selectedBtnIdx === 3}
        className={styles.btn}
        borderRadius="9999px"
      >
        <img className={styles.img} />
        {t("設定")}
      </YellowBlock>
    </div>
  );
}

function useMetaData() {
  const [selectedBtnIdx, setSelectedBtnIdx] = useState(0);
  const { gameProgress, setGameProgress } = useContext(gameProgressCtx);
  const { gamePadSetting } = gameProgress;
  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        setSelectedBtnIdx(selectedBtnIdx === 0 ? 3 : selectedBtnIdx - 1);
        return;
      case gamePadSetting.arrowDown:
        setSelectedBtnIdx(selectedBtnIdx === 3 ? 0 : selectedBtnIdx + 1);
        return;
      case gamePadSetting.circle: {
        switch (selectedBtnIdx) {
          case 0:
            setGameProgress((prev) => {
              prev.currentView = "StoryModeSelectCharacter";
              return { ...prev };
            });
            return;
          case 1:
            setGameProgress((prev) => {
              prev.currentView = "BattleModeSelectCharacter";
              return { ...prev };
            });
            return;
          case 2:
            // UIStateDispatch({
            //   type: "showBook",
            //   payload: true,
            // });
            // UIStateDispatch({
            //   type: "showBtnGroup",
            //   payload: false,
            // });
            return;
          case 3:
            // UIStateDispatch({
            //   type: "showSetting",
            //   payload: true,
            // });
            // UIStateDispatch({
            //   type: "showBtnGroup",
            //   payload: false,
            // });
            return;
          default:
            return;
        }
      }
      default:
        return;
    }
  }

  return { selectedBtnIdx };
}
