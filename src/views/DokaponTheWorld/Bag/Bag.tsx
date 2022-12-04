// Related third party imports.
import classNames from "classnames";
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./Bag.module.css";
import useTranslation from "hooks/useTranslation";
import SomeKindOfIcon from "components/icons";
import gameProgressCtx from "reducers/gameProgress";
import jobs from "data/jobs";
import BottomDialog from "components/BottomDialog";

// Stateless vars declare.

export default Bag;

function Bag() {
  const { possession, selectedIdx, currentBag, bagSpace } = useMetaData();
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
            {Array(bagSpace.items)
              .fill("")
              .map((empty, idx) => (
                <Item
                  key={idx}
                  selected={currentBag === "items" && selectedIdx === idx}
                  text={possession.items[idx]?.description}
                  icon={<SomeKindOfIcon />}
                />
              ))}
          </div>
          <div
            style={{ zIndex: currentBag === "magicBooks" ? 2 : 1 }}
            className={styles.magicContainer}
          >
            {Array(bagSpace.magicBooks)
              .fill("")
              .map((empty, idx) => (
                <Item
                  key={idx}
                  selected={currentBag === "magicBooks" && selectedIdx === idx}
                  text={possession.magicBooks[idx]?.explanation}
                  icon={<SomeKindOfIcon />}
                />
              ))}
          </div>
        </div>
      </div>
      <BottomDialog show />
    </div>
  );
}

function Item(props: { selected: boolean; text: string; icon: JSX.Element }) {
  const { selected, text, icon } = props;
  return (
    <div className={styles.item}>
      <div
        className={classNames({
          [styles.itemContent]: true,
          [styles.hoverEffect]: selected,
        })}
      >
        <div className={styles.iconContainer}>{icon}</div>
        <div className={styles.itemText}>{text}</div>
      </div>
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { currentPlayerIdx, playersAttrs, DokaponTheWorldState } = gameProgress;
  const currentPlayer = playersAttrs[currentPlayerIdx];
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
