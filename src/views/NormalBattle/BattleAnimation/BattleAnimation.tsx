// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./BattleAnimation.module.css";
import useBattleCharacter from "hooks/useBattleCharacter";
import gameProgressCtx from "reducers/gameProgress";
import getCharacterImgURL from "utils/getCharacterImgURL";

// Stateless vars declare.

export default BattleAnimation;

/**
 * @todo 右邊的戰鬥畫面 UI
 */
function BattleAnimation() {
  const {
    leftSelectedButton,
    rightSelectedButton,
    currentPlayer,
    battleCharacter,
    isLeftPlayerCurAttack,
  } = useMetaData();
  return (
    <div className={styles.battleAnimationRightContainer}>
      <div className={styles.characterContainer}>
        <img src={getCharacterImgURL(currentPlayer, "prepare")} />
      </div>
      <div></div>
    </div>
  );
}

function useMetaData() {
  const {
    gameProgress: {
      players,
      currentPlayerIdx,
      NormalBattleState: {
        leftSelectedButton,
        rightSelectedButton,
        isLeftPlayerCurAttack,
      },
    },
  } = useContext(gameProgressCtx);
  const currentPlayer = players[currentPlayerIdx];
  const battleCharacter = useBattleCharacter();

  return {
    leftSelectedButton,
    rightSelectedButton,
    currentPlayer,
    battleCharacter,
    isLeftPlayerCurAttack,
  };
}
