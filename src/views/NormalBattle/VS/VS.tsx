// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./VS.module.css";
import gameProgressCtx from "reducers/gameProgress";

// Stateless vars declare.
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;

export default VS;

function VS() {
  const {
    gameProgress: { playersAttrs, currentPlayerIdx },
  } = useContext(gameProgressCtx);
  const currentPlayer = playersAttrs[currentPlayerIdx];
  const { job, gender, color } = currentPlayer;
  const src = `${backendBaseUrl}/imgs/${job}_${gender}_${color}_vs.png`;
  return (
    <div className={styles.vsContainer}>
      <div className={styles.row1}>
        <img src={src} height="100%" />
      </div>
      <div className={styles.row2}>VS</div>
      <div className={styles.row3}>
        <img src={src} height="100%" />
      </div>
    </div>
  );
}
