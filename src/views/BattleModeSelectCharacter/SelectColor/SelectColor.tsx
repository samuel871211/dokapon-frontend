// Related third party imports.
import { useContext, useMemo } from "react";

// Local application/library specific imports.
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import gameProgressCtx from "reducers/gameProgress";
import topAreaStyles from "../TopArea/TopArea.module.css";
import colors from "data/colors";
import colorsToRGB from "data/colorsToRGB";
import colorsToJP from "data/colorsToJP";
import styles from "./SelectColor.module.css";

// Stateless vars declare.

export default SelectColor;

function SelectColor() {
  const { t } = useTranslation();
  const { currentPlayer, remainColors } = useMetaData();
  return (
    <div className={topAreaStyles.verticalButtonGroup}>
      {remainColors.map((remainColor) => (
        <YellowBlock
          key={remainColor}
          role="button"
          className={styles.colorButton}
          borderRadius="9999px"
          selected={remainColor === currentPlayer.color}
        >
          <div style={{ backgroundColor: colorsToRGB[remainColor] }} />
          <div>{t(colorsToJP[remainColor])}</div>
        </YellowBlock>
      ))}
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { players, currentPlayerIdx } = gameProgress;
  const remainColors = useMemo(() => {
    const usedColors = players
      .slice(0, currentPlayerIdx)
      .map((playerAttrs) => playerAttrs.color);
    return colors.filter((color) => !usedColors.includes(color));
  }, [players, currentPlayerIdx]);
  const currentPlayer = players[currentPlayerIdx];
  return { currentPlayer, remainColors };
}
