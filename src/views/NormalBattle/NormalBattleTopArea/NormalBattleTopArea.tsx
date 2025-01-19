// Related third party imports.

// Local application/library specific imports.
import YellowBlock from "layouts/YellowBlock";
import AttrCircle from "components/AttrCircle";
import FullHpBar from "components/FullHpBar";
import TextWithBorderBottom from "components/TextWithBorderBottom";
import styles from "./NormalBattleTopArea.module.css";
import useTranslation from "hooks/useTranslation";
import type { PlayerInstance } from "global";
import useBattleCharacter from "hooks/useBattleCharacter";

// Stateless vars declare.
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;

export default NormalBattleTopArea;

function NormalBattleTopArea(props: {
  currentPlayer: PlayerInstance;
  showTwinkleButtons?: boolean;
}) {
  const { t } = useTranslation();
  const { currentPlayer, showTwinkleButtons } = props;
  const { job, gender, color } = currentPlayer;
  const battleCharacter = useBattleCharacter();
  const { characterType } = battleCharacter;
  const battleCharacterImgSrc =
    characterType === "monster"
      ? `${backendBaseUrl}/imgs/${battleCharacter.key}_vs.png`
      : `${backendBaseUrl}/imgs/${battleCharacter.job}_${battleCharacter.gender}_${battleCharacter.color}_vs.png`;

  return (
    <>
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
          {showTwinkleButtons && (
            <div className={`${styles.leftTwinkleButton} ${styles.twinkle}`}>
              L 說明
            </div>
          )}
        </YellowBlock>
        <YellowBlock role="dialog" className={styles.battleCharacter4}>
          <div className={styles.attrRow}>
            <div className={styles.attrText1}>{currentPlayer.attack.total}</div>
            <AttrCircle attr="AT" width="20%" height="100%" />
            <div className={styles.attrText2}>
              {battleCharacter.attack.total}
            </div>
          </div>
          <div className={styles.attrRow}>
            <div className={styles.attrText1}>
              {currentPlayer.defense.total}
            </div>
            <AttrCircle attr="DF" width="20%" height="100%" />
            <div className={styles.attrText2}>
              {battleCharacter.defense.total}
            </div>
          </div>
          <div className={styles.attrRow}>
            <div className={styles.attrText1}>{currentPlayer.magic.total}</div>
            <AttrCircle attr="MG" width="20%" height="100%" />
            <div className={styles.attrText2}>
              {battleCharacter.magic.total}
            </div>
          </div>
          <div className={styles.attrRow}>
            <div className={styles.attrText1}>{currentPlayer.speed.total}</div>
            <AttrCircle attr="SP" width="20%" height="100%" />
            <div className={styles.attrText2}>
              {battleCharacter.speed.total}
            </div>
          </div>
        </YellowBlock>
        <YellowBlock role="dialog" className={styles.characterInfoRight}>
          <div className={styles.characterInfoRow1}>
            <div className={styles.characterLevel}>
              <AttrCircle
                attr="LV"
                value={battleCharacter.level}
                fontSize="2rem"
              />
            </div>
            <TextWithBorderBottom
              diameter="1rem"
              className={styles.characterName}
            >
              {characterType === "monster"
                ? t(battleCharacter.name)
                : battleCharacter.name}
            </TextWithBorderBottom>
          </div>
          <div className={styles.characterInfoRow2}>
            <FullHpBar hp={battleCharacter.hp} />
          </div>
          {showTwinkleButtons && (
            <div className={`${styles.rightTwinkleButton} ${styles.twinkle}`}>
              予測 R
            </div>
          )}
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
          <img height="100%" src={battleCharacterImgSrc} />
        </div>
      </div>
    </>
  );
}
