// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./VS.module.css";
import gameProgressCtx from "reducers/gameProgress";
import useBattleCharacter from "hooks/useBattleCharacter";

// Stateless vars declare.
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;

export default VS;

function VS() {
  const {
    gameProgress: { players, currentPlayerIdx },
  } = useContext(gameProgressCtx);
  const currentPlayer = players[currentPlayerIdx];
  const { job, gender, color } = currentPlayer;
  const battleCharacter = useBattleCharacter();
  if (!battleCharacter) throw new Error("no battle character");
  const { characterType } = battleCharacter;

  const src1 = `${backendBaseUrl}/imgs/${job}_${gender}_${color}_vs.png`;
  const src2 =
    characterType === "monster"
      ? `${backendBaseUrl}/imgs/${battleCharacter.key}_vs.png`
      : `${backendBaseUrl}/imgs/${battleCharacter.job}_${battleCharacter.gender}_${battleCharacter.color}_vs.png`;
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
