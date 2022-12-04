// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./SelectNumberOfPlayers.module.css";
import YellowBlock from "layouts/YellowBlock";
import useTranslation from "hooks/useTranslation";
import gameProgressCtx from "reducers/gameProgress";
import SVGIcon from "layouts/SVGIcon";

// Stateless vars declare.

export default SelectNumberOfPlayers;

function SelectNumberOfPlayers() {
  const { numberOfPlayers } = useMetaData();

  return (
    <div className={styles.topRightContentArea}>
      <YellowBlock
        role="button"
        borderRadius="9999px"
        className={styles.numberOfPlayersButton}
        selected={numberOfPlayers === 1}
      >
        <div className={styles.svgIcons}>
          <SVGIcon height="4rem"></SVGIcon>
          <SVGIcon height="4rem"></SVGIcon>
          <SVGIcon height="4rem"></SVGIcon>
          <SVGIcon height="4rem"></SVGIcon>
        </div>
        <div>1人</div>
      </YellowBlock>
      <YellowBlock
        role="button"
        borderRadius="9999px"
        className={styles.numberOfPlayersButton}
        selected={numberOfPlayers === 2}
      >
        <div className={styles.svgIcons}>
          <SVGIcon height="4rem"></SVGIcon>
          <SVGIcon height="4rem"></SVGIcon>
          <SVGIcon height="4rem"></SVGIcon>
          <SVGIcon height="4rem"></SVGIcon>
        </div>
        <div>2人</div>
      </YellowBlock>
      <YellowBlock
        role="button"
        borderRadius="9999px"
        className={styles.numberOfPlayersButton}
        selected={numberOfPlayers === 3}
      >
        <div className={styles.svgIcons}>
          <SVGIcon height="4rem"></SVGIcon>
          <SVGIcon height="4rem"></SVGIcon>
          <SVGIcon height="4rem"></SVGIcon>
          <SVGIcon height="4rem"></SVGIcon>
        </div>
        <div>3人</div>
      </YellowBlock>
      <YellowBlock
        role="button"
        borderRadius="9999px"
        className={styles.numberOfPlayersButton}
        selected={numberOfPlayers === 4}
      >
        <div className={styles.svgIcons}>
          <SVGIcon height="4rem"></SVGIcon>
          <SVGIcon height="4rem"></SVGIcon>
          <SVGIcon height="4rem"></SVGIcon>
          <SVGIcon height="4rem"></SVGIcon>
        </div>
        <div>4人</div>
      </YellowBlock>
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { numberOfPlayers } = gameProgress;
  return { numberOfPlayers };
}
