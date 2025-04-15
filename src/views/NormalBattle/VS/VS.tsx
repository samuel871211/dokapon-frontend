// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./VS.module.css";
import gameProgressCtx from "reducers/gameProgress";
import useBattleCharacter from "hooks/useBattleCharacter";

// Stateless vars declare.

export default VS;

function VS() {
  const {
    gameProgress: { players, currentPlayerIdx },
  } = useContext(gameProgressCtx);
  const currentPlayer = players[currentPlayerIdx];
  const { job, gender, color } = currentPlayer;
  const battleCharacter = useBattleCharacter();
  const { characterType } = battleCharacter;

  const src1 = `/imgs/${job}_${gender}_${color}_vs.png`;
  const src2 =
    characterType === "monster"
      ? `/imgs/${battleCharacter.key}_vs.png`
      : `/imgs/${battleCharacter.job}_${battleCharacter.gender}_${battleCharacter.color}_vs.png`;
  return (
    <div className={styles.vsContainer}>
      <div className={styles.row1}>
        <img src={src1} height="100%" />
      </div>
      <div className={styles.row2}>VS</div>
      <div className={styles.row3}>
        <img src={src2} height="100%" />
      </div>
    </div>
  );
}
