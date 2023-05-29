// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./SwapCards.module.css";
import gameProgressCtx from "reducers/gameProgress";
import NormalBattleTopArea from "../NormalBattleTopArea";

// Stateless vars declare.

export default SwapCards;

function SwapCards() {
  const {
    gameProgress: {
      players,
      currentPlayerIdx,
      NormalBattleState: {
        isLeftPlayerCurAttack,
        SwapCardState: { isCardSwitch, isCardOpen },
      },
    },
  } = useContext(gameProgressCtx);
  const currentPlayer = players[currentPlayerIdx];

  return (
    <div className={styles.swapCardContainer}>
      <NormalBattleTopArea currentPlayer={currentPlayer} />
      <div className={styles.bottomArea}>
        <div className={styles.card1Container} data-switched={isCardSwitch}>
          <div className={styles.card} data-opened={isCardOpen}>
            <div className={styles.cardFront}></div>
            <div className={styles.cardBack} data-first={isLeftPlayerCurAttack}>
              {isLeftPlayerCurAttack ? "先攻" : "後攻"}
            </div>
          </div>
        </div>
        <div className={styles.direction4}>
          <div className={styles.directionTop}>▲</div>
          <div className={styles.directionLeft}>◀</div>
          <div className={styles.directionRight}>▶</div>
          <div className={styles.directionBottom}>▼</div>
        </div>
        <div className={styles.card2Container} data-switched={isCardSwitch}>
          <div className={styles.card} data-opened={isCardOpen}>
            <div className={styles.cardFront}></div>
            <div
              className={styles.cardBack}
              data-first={!isLeftPlayerCurAttack}
            >
              {!isLeftPlayerCurAttack ? "先攻" : "後攻"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
