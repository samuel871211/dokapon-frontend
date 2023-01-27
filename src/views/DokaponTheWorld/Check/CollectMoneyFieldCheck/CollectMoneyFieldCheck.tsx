// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./CollectMoneyFieldCheck.module.css";
import gameProgressCtx from "reducers/gameProgress";
import VillagesDialog from "components/VillagesDialog";

// Stateless vars declare.

export default CollectMoneyFieldCheck;

function CollectMoneyFieldCheck() {
  const { curListPage } = useMetaData();
  return (
    <div className={styles.collectMoneyFieldCheckContainer}>
      <VillagesDialog curPage={curListPage} curHoverIdx={-1} />
    </div>
  );
}

function useMetaData() {
  const {
    gameProgress: { DokaponTheWorldState },
  } = useContext(gameProgressCtx);
  const { curListPage } = DokaponTheWorldState.CollectMoneyFieldCheckState;
  return {
    curListPage,
  };
}
