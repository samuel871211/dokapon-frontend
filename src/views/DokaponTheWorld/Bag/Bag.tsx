// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./Bag.module.css";
import useTranslation from "hooks/useTranslation";
import { SomeKindOfIcon } from "components/Icons";
import gameProgressCtx from "reducers/gameProgress";
import jobs from "data/jobs";
import ListItem from "components/ListItem";
import BottomDialog from "components/BottomDialog";

// Stateless vars declare.

export default Bag;

function Bag() {
  const { possession, selectedIdx, currentBag, bagSpace } = useMetaData();
  const arrOfMaxItem = Array(bagSpace.items).fill(0);
  const arrOfMaxMagicBooks = Array(bagSpace.magicBooks).fill(0);
  const { t } = useTranslation();
  return (
    <div className={styles.bagContainer}>
      <div className={styles.topArea}>
        <div className={styles.swiperContainer}>
          <div className={styles.swiper}>
            <div className={styles.square}>L</div>
            <div className={styles.swiperText}>
              {currentBag === "items" ? t("アイテム") : t("魔法")}
            </div>
            <div className={styles.square}>R</div>
          </div>
        </div>
      </div>
      <div className={styles.centerArea}>
        <div className={styles.itemAndMagicContainer}>
          <div
            style={{ zIndex: currentBag === "items" ? 2 : 1 }}
            className={styles.itemContainer}
          >
            {arrOfMaxItem.map((empty, idx) => (
              <ListItem
                key={idx}
                className={styles.listItem}
                selected={currentBag === "items" && selectedIdx === idx}
              >
                <div className={styles.iconContainer}>
                  <SomeKindOfIcon />
                </div>
                <div className={styles.itemText}>
                  {possession.items[idx]?.description}
                </div>
              </ListItem>
            ))}
          </div>
          <div
            style={{ zIndex: currentBag === "magicBooks" ? 2 : 1 }}
            className={styles.magicContainer}
          >
            {arrOfMaxMagicBooks.map((empty, idx) => (
              <ListItem
                key={idx}
                className={styles.listItem}
                selected={currentBag === "magicBooks" && selectedIdx === idx}
              >
                <div className={styles.iconContainer}>
                  <SomeKindOfIcon />
                </div>
                <div className={styles.itemText}>
                  {possession.magicBooks[idx]?.explanation}
                </div>
              </ListItem>
            ))}
          </div>
        </div>
      </div>
      <BottomDialog show />
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { currentPlayerIdx, players, DokaponTheWorldState } = gameProgress;
  const currentPlayer = players[currentPlayerIdx];
  const { selectedIdx, currentBag } = DokaponTheWorldState.BagState;
  const { possession } = currentPlayer;
  const { bagSpace } = jobs[currentPlayer.job];
  return {
    possession,
    selectedIdx,
    currentBag,
    bagSpace,
  };
}
