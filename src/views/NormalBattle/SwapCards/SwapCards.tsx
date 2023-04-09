// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import YellowBlock from "layouts/YellowBlock";
import styles from "./SwapCards.module.css";
import FullHpBar from "components/FullHpBar";
import gameProgressCtx from "reducers/gameProgress";
import AttrCircle from "components/AttrCircle";
import TextWithBorderBottom from "components/TextWithBorderBottom";

// Stateless vars declare.
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;

export default SwapCards;

function SwapCards() {
  const {
    gameProgress: {
      playersAttrs,
      currentPlayerIdx,
      NormalBattleState: {
        SwapCardState: { isCardSwiched },
      },
    },
  } = useContext(gameProgressCtx);
  const currentPlayer = playersAttrs[currentPlayerIdx];
  const { job, gender, color } = currentPlayer;
  return (
    <div className={styles.swapCardContainer}>
      <div className={styles.topArea}>
        <YellowBlock role="dialog" className={styles.characterInfoLeft}>
          <div className={styles.characterInfoRow1}>
            <div className={styles.characterLevel}>
              <AttrCircle
                attr="LV"
                value={currentPlayer.level}
                fontSize="2rem"
              />
            </div>
            <TextWithBorderBottom
              diameter="1rem"
              className={styles.characterName}
            >
              {currentPlayer.name}
            </TextWithBorderBottom>
          </div>
          <div className={styles.characterInfoRow2}>
            <FullHpBar hp={currentPlayer.hp} />
          </div>
        </YellowBlock>
        <YellowBlock role="dialog" className={styles.attrs4}>
          <div className={styles.attrRow}>
            <div className={styles.attrText1}>{currentPlayer.attack.total}</div>
            <AttrCircle attr="AT" width="20%" height="100%" />
            <div className={styles.attrText2}>{currentPlayer.attack.total}</div>
          </div>
          <div className={styles.attrRow}>
            <div className={styles.attrText1}>
              {currentPlayer.defense.total}
            </div>
            <AttrCircle attr="DF" width="20%" height="100%" />
            <div className={styles.attrText2}>
              {currentPlayer.defense.total}
            </div>
          </div>
          <div className={styles.attrRow}>
            <div className={styles.attrText1}>{currentPlayer.magic.total}</div>
            <AttrCircle attr="MG" width="20%" height="100%" />
            <div className={styles.attrText2}>{currentPlayer.magic.total}</div>
          </div>
          <div className={styles.attrRow}>
            <div className={styles.attrText1}>{currentPlayer.speed.total}</div>
            <AttrCircle attr="SP" width="20%" height="100%" />
            <div className={styles.attrText2}>{currentPlayer.speed.total}</div>
          </div>
        </YellowBlock>
        <YellowBlock role="dialog" className={styles.characterInfoRight}>
          <div className={styles.characterInfoRow1}>
            <div className={styles.characterLevel}>
              <AttrCircle
                attr="LV"
                value={currentPlayer.level}
                fontSize="2rem"
              />
            </div>
            <TextWithBorderBottom
              diameter="1rem"
              className={styles.characterName}
            >
              {currentPlayer.name}
            </TextWithBorderBottom>
          </div>
          <div className={styles.characterInfoRow2}>
            <FullHpBar hp={currentPlayer.hp} />
          </div>
        </YellowBlock>
      </div>
      <div className={styles.centerArea}>
        <div className={styles.imgContainer1}>
          <img
            height="100%"
            src={`${backendBaseUrl}/imgs/${job}_${gender}_${color}_prepare.png`}
          />
        </div>
        <div className={styles.imgContainer2}>
          <img
            height="100%"
            src={`${backendBaseUrl}/imgs/${job}_${gender}_${color}_prepare.png`}
          />
        </div>
      </div>
      <div className={styles.bottomArea}>
        <div className={styles.card1Container} data-switched={isCardSwiched}>
          <div className={styles.card}></div>
        </div>
        <div className={styles.direction4}>
          <div className={styles.directionTop}>▲</div>
          <div className={styles.directionLeft}>◀</div>
          <div className={styles.directionRight}>▶</div>
          <div className={styles.directionBottom}>▼</div>
        </div>
        <div className={styles.card2Container} data-switched={isCardSwiched}>
          <div className={styles.card}></div>
        </div>
      </div>
    </div>
  );
}
