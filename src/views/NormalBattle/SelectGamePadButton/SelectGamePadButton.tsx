// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import NormalBattleTopArea from "../NormalBattleTopArea";
import gameProgressCtx from "reducers/gameProgress";
import swapCardStyles from "../SwapCards/SwapCards.module.css";
import styles from "./SelectGamePadButton.module.css";
import YellowBlock from "layouts/YellowBlock";
import magicAttacks from "data/magicAttacks";
import magicDefenses from "data/magicDefenses";
import useTranslation from "hooks/useTranslation";
import jobs from "data/jobs";
import useBattleCharacter from "hooks/useBattleCharacter";
import TextWithBorderBottom from "components/TextWithBorderBottom";
// import { MagicAttackIcon } from "components/Icons";
import {
  MagicAttackIcon,
  BattleSpecialityIcon,
  MagicDefenseIcon,
} from "components/Icons";

// Stateless vars declare.
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;

export default SelectGamePadButton;

function SelectGamePadButton() {
  const { t } = useTranslation();
  const {
    gameProgress: {
      players,
      currentPlayerIdx,
      NormalBattleState: {
        isLeftPlayerCurAttack,
        isLeftPlayerCurSelect,
        SelectGamePadButtonState: { rightDialogOpen, leftDialogOpen },
      },
    },
  } = useContext(gameProgressCtx);
  const battleCharacter = useBattleCharacter();
  const currentPlayer = players[currentPlayerIdx];
  return (
    <div className={swapCardStyles.swapCardContainer}>
      <NormalBattleTopArea
        currentPlayer={currentPlayer}
        showTwinkleButtons={!leftDialogOpen && !rightDialogOpen}
      ></NormalBattleTopArea>
      <div className={swapCardStyles.bottomArea}>
        <div
          className={styles.gamePadContainer}
          aria-disabled={!isLeftPlayerCurSelect}
        >
          <div className={styles.attackNotice} data-red={isLeftPlayerCurAttack}>
            {isLeftPlayerCurAttack ? t("攻擊側") : t("防禦側")}
          </div>
          <div className={styles.gamePadRow1}>
            <YellowBlock
              role="title"
              borderRadius="9999px"
              className={`${styles.gamePadKeyArea} ${styles.triangleKey}`}
            >
              <div className={styles.gamePadKeyTitle}>MAGIC</div>
              <div className={styles.gamePadKeyContent}>
                {isLeftPlayerCurAttack
                  ? t(magicAttacks[currentPlayer.magicAttack].name)
                  : t(magicDefenses[currentPlayer.magicDefense].name)}
              </div>
              <div className={styles.gamePadKeyIcon}>&#9651;</div>
            </YellowBlock>
          </div>
          <div className={styles.gamePadRow2}>
            <YellowBlock
              role="title"
              borderRadius="9999px"
              className={`${styles.gamePadKeyArea} ${styles.squareKey}`}
            >
              <div className={styles.gamePadKeyTitle}>
                {isLeftPlayerCurAttack ? "CRITCAL" : "COUNTER"}
              </div>
              <div className={styles.gamePadKeyContent}>
                {isLeftPlayerCurAttack ? t("必殺") : t("反擊")}
              </div>
              <div className={styles.gamePadKeyIcon}>&#9633;</div>
            </YellowBlock>
            <YellowBlock
              role="title"
              borderRadius="9999px"
              className={`${styles.gamePadKeyArea} ${styles.circleKey}`}
            >
              <div className={styles.gamePadKeyTitle}>
                {isLeftPlayerCurAttack ? "ATTACK" : "GUARD"}
              </div>
              <div className={styles.gamePadKeyContent}>
                {isLeftPlayerCurAttack ? t("攻擊") : t("防禦")}
              </div>
              <div className={styles.gamePadKeyIcon}>&#9675;</div>
            </YellowBlock>
          </div>
          <div className={styles.gamePadRow3}>
            <YellowBlock
              role="title"
              borderRadius="9999px"
              className={`${styles.gamePadKeyArea} ${styles.crossKey}`}
            >
              <div className={styles.gamePadKeyTitle}>
                {isLeftPlayerCurAttack ? "ABILITY" : "GIVE UP"}
              </div>
              <div className={styles.gamePadKeyContent}>
                {isLeftPlayerCurAttack
                  ? t(jobs[currentPlayer.job].battleSpecialty.name)
                  : t("降参")}
              </div>
              <div className={styles.gamePadKeyIcon}>&#9587;</div>
            </YellowBlock>
          </div>
        </div>
        <div
          className={styles.gamePadContainer}
          aria-disabled={isLeftPlayerCurSelect}
        >
          <div
            className={styles.attackNotice}
            data-red={!isLeftPlayerCurAttack}
          >
            {!isLeftPlayerCurAttack ? t("攻擊側") : t("防禦側")}
          </div>
          <div className={styles.gamePadRow1}>
            <YellowBlock
              role="title"
              borderRadius="9999px"
              className={`${styles.gamePadKeyArea} ${styles.triangleKey}`}
            >
              <div className={styles.gamePadKeyTitle}>MAGIC</div>
              <div className={styles.gamePadKeyContent}>
                {!isLeftPlayerCurAttack
                  ? t(magicAttacks[currentPlayer.magicAttack].name)
                  : t(magicDefenses[currentPlayer.magicDefense].name)}
              </div>
              <div className={styles.gamePadKeyIcon}>&#9651;</div>
            </YellowBlock>
          </div>
          <div className={styles.gamePadRow2}>
            <YellowBlock
              role="title"
              borderRadius="9999px"
              className={`${styles.gamePadKeyArea} ${styles.squareKey}`}
            >
              <div className={styles.gamePadKeyTitle}>
                {!isLeftPlayerCurAttack ? "CRITCAL" : "COUNTER"}
              </div>
              <div className={styles.gamePadKeyContent}>
                {!isLeftPlayerCurAttack ? t("必殺") : t("反擊")}
              </div>
              <div className={styles.gamePadKeyIcon}>&#9633;</div>
            </YellowBlock>
            <YellowBlock
              role="title"
              borderRadius="9999px"
              className={`${styles.gamePadKeyArea} ${styles.circleKey}`}
            >
              <div className={styles.gamePadKeyTitle}>
                {isLeftPlayerCurAttack ? "ATTACK" : "GUARD"}
              </div>
              <div className={styles.gamePadKeyContent}>
                {isLeftPlayerCurAttack ? t("攻擊") : t("防禦")}
              </div>
              <div className={styles.gamePadKeyIcon}>&#9675;</div>
            </YellowBlock>
          </div>
          <div className={styles.gamePadRow3}>
            <YellowBlock
              role="title"
              borderRadius="9999px"
              className={`${styles.gamePadKeyArea} ${styles.crossKey}`}
            >
              <div className={styles.gamePadKeyTitle}>
                {!isLeftPlayerCurAttack ? "ABILITY" : "GIVE UP"}
              </div>
              <div className={styles.gamePadKeyContent}>
                {!isLeftPlayerCurAttack
                  ? t(jobs[currentPlayer.job].battleSpecialty.name)
                  : t("降参")}
              </div>
              <div className={styles.gamePadKeyIcon}>&#9587;</div>
            </YellowBlock>
          </div>
        </div>
      </div>
      <div
        className={styles.leftDialogContainer}
        aria-haspopup={leftDialogOpen}
      >
        <YellowBlock
          role="dialog"
          borderRadius="1.5rem"
          className={styles.leftDialogTopArea}
        >
          <div className={styles.textAndImage}>
            <div data-attack={true}>{t("攻擊側")}</div>
            <div className={styles.imgContainer}>
              <img
                src={`${backendBaseUrl}/imgs/${currentPlayer.job}_${currentPlayer.gender}_${currentPlayer.color}_front.png`}
              />
            </div>
          </div>
          <div className={styles.dialogContent}>
            <TextWithBorderBottom width="100%" diameter="var(--diameter)">
              <MagicAttackIcon />
              {t(magicAttacks[currentPlayer.magicAttack].name)}
            </TextWithBorderBottom>
            <div className={styles.dialogContentExplanation}>
              {t(magicAttacks[currentPlayer.magicAttack].explanation)
                .split("\n")
                .map((line) => (
                  <div key={line}>{line}</div>
                ))}
            </div>
          </div>
          <div className={styles.dialogContent}>
            <TextWithBorderBottom width="100%" diameter="var(--diameter)">
              <BattleSpecialityIcon />
              {t(jobs[currentPlayer.job].battleSpecialty.name)}
            </TextWithBorderBottom>
            <div className={styles.dialogContentExplanation}>
              {t(jobs[currentPlayer.job].battleSpecialty.fullExplanation)
                .split("\n")
                .map((line) => (
                  <div key={line}>{line}</div>
                ))}
            </div>
          </div>
        </YellowBlock>
        <YellowBlock
          role="dialog"
          borderRadius="1.5rem"
          className={styles.leftDialogBottomArea}
        >
          <div className={styles.textAndImage}>
            <div data-attack={false}>{t("防禦側")}</div>
            <div className={styles.imgContainer}>
              <img
                src={`${backendBaseUrl}/imgs/${currentPlayer.job}_${currentPlayer.gender}_${currentPlayer.color}_front.png`}
              />
            </div>
          </div>
          <div className={styles.dialogContent}>
            <TextWithBorderBottom width="100%" diameter="var(--diameter)">
              <MagicDefenseIcon />
              {t(magicDefenses[currentPlayer.magicDefense].name)}
            </TextWithBorderBottom>
            <div className={styles.dialogContentExplanation}>
              {t(magicDefenses[currentPlayer.magicDefense].explanation)
                .split("\n")
                .map((line) => (
                  <div key={line}>{line}</div>
                ))}
            </div>
          </div>
        </YellowBlock>
      </div>
      <div
        className={styles.rightDialogContainer}
        aria-haspopup={rightDialogOpen}
      ></div>
    </div>
  );
}
