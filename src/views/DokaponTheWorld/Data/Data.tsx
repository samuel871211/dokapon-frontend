// Related third party imports.
import { ReactNode, useContext } from "react";
import classNames from "classnames";

// Local application/library specific imports.
import gameProgressCtx from "reducers/gameProgress";
import styles from "./Data.module.css";
import AttrCircle from "components/AttrCircle";
import FullHpBar from "components/FullHpBar";
import TextWithBorderBottom from "components/TextWithBorderBottom";
import jobs from "data/jobs";
import jobsToJP from "data/jobsToJP";
import useTranslation from "hooks/useTranslation";
import weapons from "data/weapons";
import shields from "data/shields";
import magicAttacks from "data/magicAttacks";
import magicDefenses from "data/magicDefenses";
import decorations from "data/decorations";
import Pagination from "components/Pagination";
import { TextsKeys } from "data/texts";

// Stateless vars declare.
const exp = 123456;
const arrayOf12 = Array(12).fill(0);
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;
const level1ButtonTexts: TextsKeys[][] = [
  ["強さ", "装備", "所持", "資産", "統治", "順位"],
  ["職業", "魔物", "武器", "盾", "装飾品", "特產品"],
  ["マップ", "戦闘", "その他"],
  ["基本", "操作", "モード"],
];

export default Data;

function Data() {
  const { t } = useTranslation();
  const {
    gameProgress: {
      DokaponTheWorldState: {
        DataState: { curLevel, level0Idx, level1Idxs },
      },
    },
  } = useContext(gameProgressCtx);
  return (
    <div className={styles.dataContainer} data-slide-left={curLevel !== 0}>
      <div className={styles.level0ButtonGroup}>
        <div
          className={styles.level0Button}
          data-selected={curLevel === 0 && level0Idx === 0}
        >
          <div>{t("情報")}</div>
        </div>
        <div
          className={styles.level0Button}
          data-selected={curLevel === 0 && level0Idx === 1}
        >
          <div>{t("図鑑")}</div>
        </div>
        <div
          className={styles.level0Button}
          data-selected={curLevel === 0 && level0Idx === 2}
        >
          <div>{t("説明")}</div>
        </div>
        <div
          className={styles.level0Button}
          data-selected={curLevel === 0 && level0Idx === 3}
        >
          <div>{t("設定")}</div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.rightTop}>DATA</div>
        <div className={styles.rightBottom}>
          <div className={styles.rightBottomButtonGroup}>
            {level1ButtonTexts[level0Idx].map((btnText, level1Idx) => (
              <div
                key={btnText}
                className={styles.level1Button}
                data-selected={level1Idx === level1Idxs[level0Idx]}
                data-hovered={
                  curLevel === 1 && level1Idx === level1Idxs[level0Idx]
                }
              >
                <div>{t(btnText)}</div>
              </div>
            ))}
          </div>
          <div className={styles.variableContent}>
            {/* <Strength/> */}
            {/* <Equipment/> */}
            {/* <Bag/> */}
            <DataAssets />
          </div>
        </div>
      </div>
    </div>
  );
}

function Strength() {
  const { t } = useTranslation();
  const { gameProgress } = useContext(gameProgressCtx);
  const { playersAttrs, currentPlayerIdx } = gameProgress;
  const currentPlayer = playersAttrs[currentPlayerIdx];
  const { job } = currentPlayer;
  const currentPlayerJobMasterLevel = currentPlayer.jobsMasterStatus[job].level;
  return (
    <PlayerImgAndBasicAttrsArea>
      <div className={styles.expArea}>
        <div className={styles.expAreaLeft}>經驗值:</div>
        <div className={styles.expAreaRight}>
          <div className={styles.numberTitle}>EXP</div>
          <TextWithBorderBottom
            width="100%"
            diameter="1rem"
            className={styles.expTextWithBorderBottom}
          >
            <div className={styles.expTextarea}>
              {exp.toLocaleString()}
              <span>EXP</span>
            </div>
          </TextWithBorderBottom>
          <div className={styles.numberTitle}>NEXT</div>
          <TextWithBorderBottom
            width="100%"
            diameter="1rem"
            className={styles.expTextWithBorderBottom}
          >
            <div className={styles.expTextarea}>
              {exp.toLocaleString()}
              <span>EXP</span>
            </div>
          </TextWithBorderBottom>
        </div>
      </div>
      <div className={styles.jobAndPayArea}>
        <div className={styles.jobArea}>
          <div className={styles.jobAndPayText}>
            JOB
            <span>
              {currentPlayerJobMasterLevel === 5
                ? "MASTER"
                : Array(currentPlayerJobMasterLevel)
                    .fill(0)
                    .map((item) => "☆")}
            </span>
          </div>
          <TextWithBorderBottom
            width="100%"
            diameter="1rem"
            className={styles.jobText}
          >
            {t(jobsToJP[currentPlayer.job])}
          </TextWithBorderBottom>
        </div>
        <div className={styles.payArea}>
          <div className={styles.jobAndPayText}>PAY</div>
          <TextWithBorderBottom width="100%" diameter="1rem">
            <div className={styles.payText}>
              {jobs[currentPlayer.job].pay.toLocaleString()}
            </div>
          </TextWithBorderBottom>
        </div>
      </div>
    </PlayerImgAndBasicAttrsArea>
  );
}

function Equipment() {
  const { t } = useTranslation();
  const { gameProgress } = useContext(gameProgressCtx);
  const { playersAttrs, currentPlayerIdx } = gameProgress;
  const currentPlayer = playersAttrs[currentPlayerIdx];
  return (
    <PlayerImgAndBasicAttrsArea>
      <div className={styles.equipmentArea}>
        <TextWithBorderBottom diameter="1rem" className={styles.equipmentRow}>
          <div className={styles.equipmentIconAndName}>
            {t(weapons[currentPlayer.weapon].name)}
          </div>
          <div className={styles.attrCircleArea}>AT</div>
          <div className={styles.equipmentNumber}>
            {weapons[currentPlayer.weapon].attack}
          </div>
        </TextWithBorderBottom>
        <TextWithBorderBottom diameter="1rem" className={styles.equipmentRow}>
          <div className={styles.equipmentIconAndName}>
            {t(shields[currentPlayer.shield].name)}
          </div>
          <div className={styles.attrCircleArea}>DF</div>
          <div className={styles.equipmentNumber}>
            {shields[currentPlayer.shield].defense}
          </div>
        </TextWithBorderBottom>
        <TextWithBorderBottom diameter="1rem" className={styles.equipmentRow}>
          <div className={styles.equipmentIconAndName}>
            {t(magicAttacks[currentPlayer.magicAttack].name)}
          </div>
        </TextWithBorderBottom>
        <TextWithBorderBottom diameter="1rem" className={styles.equipmentRow}>
          <div className={styles.equipmentIconAndName}>
            {t(magicDefenses[currentPlayer.magicDefense].name)}
          </div>
        </TextWithBorderBottom>
        <TextWithBorderBottom diameter="1rem" className={styles.equipmentRow}>
          <div className={styles.equipmentIconAndName}>
            {t(decorations[currentPlayer.decoration].name)}
          </div>
        </TextWithBorderBottom>
      </div>
    </PlayerImgAndBasicAttrsArea>
  );
}

function Bag() {
  const selectedBag = "items";
  const { t } = useTranslation();
  const { gameProgress } = useContext(gameProgressCtx);
  const { playersAttrs, currentPlayerIdx } = gameProgress;
  const currentPlayer = playersAttrs[currentPlayerIdx];
  const maxSpace = jobs[currentPlayer.job].bagSpace[selectedBag];
  const usedSpace = currentPlayer.possession.items.length;
  return (
    <PlayerImgAndBasicAttrsArea>
      <div className={styles.bagPaginationContainer}>
        <Pagination maxCount={2} curPage={selectedBag === "items" ? 0 : 1} />
      </div>
      <div className={styles.bagArea}>
        <div className={styles.bagInfo}>
          <div className={styles.bagName}>
            {selectedBag === "items" ? t("アイテム") : t("魔法")}
          </div>
          <div className={styles.bagSpace}>{`${usedSpace}／${maxSpace}`}</div>
        </div>
        <div className={styles.bagItems}>
          {arrayOf12.map((item, idx) => (
            <TextWithBorderBottom
              className={styles.bagItem}
              diameter="1rem"
              key={idx}
            >
              {currentPlayer.possession[selectedBag][idx]?.name}
            </TextWithBorderBottom>
          ))}
        </div>
      </div>
    </PlayerImgAndBasicAttrsArea>
  );
}

/**
 * @todo assets有分 1. 所持金 2.金庫 3.特產品 4.村價值 5.總資產
 */
function DataAssets() {
  return (
    <PlayerImgAndBasicAttrsArea>
      <div className={styles.assetsArea}>
        <TextWithBorderBottom diameter="1rem" className={styles.assetRow}>
          <div className={styles.assetsTitle}>所持金</div>
          <div
            className={classNames({
              [styles.assetNumberAndUnit]: true,
              [styles.redText]: exp < 0,
            })}
          >
            {exp.toLocaleString()}
          </div>
        </TextWithBorderBottom>
        <TextWithBorderBottom diameter="1rem" className={styles.assetRow}>
          <div className={styles.assetsTitle}>金庫</div>
          <div
            className={classNames({
              [styles.assetNumberAndUnit]: true,
              [styles.redText]: exp < 0,
            })}
          >
            {exp.toLocaleString()}
          </div>
        </TextWithBorderBottom>
        <TextWithBorderBottom diameter="1rem" className={styles.assetRow}>
          <div className={styles.assetsTitle}>特產品</div>
          <div
            className={classNames({
              [styles.assetNumberAndUnit]: true,
              [styles.redText]: exp < 0,
            })}
          >
            {exp.toLocaleString()}
          </div>
        </TextWithBorderBottom>
        <TextWithBorderBottom diameter="1rem" className={styles.assetRow}>
          <div className={styles.assetsTitle}>村價值</div>
          <div
            className={classNames({
              [styles.assetNumberAndUnit]: true,
              [styles.redText]: exp < 0,
            })}
          >
            {exp.toLocaleString()}
          </div>
        </TextWithBorderBottom>
      </div>
      <div className={styles.assetsTotalArea}>
        <TextWithBorderBottom diameter="1rem">
          <div className={styles.assetsTitle}>資產</div>
          <div
            className={classNames({
              [styles.assetNumberAndUnit]: true,
              [styles.redText]: exp < 0,
            })}
          >
            {exp.toLocaleString()}
          </div>
        </TextWithBorderBottom>
      </div>
    </PlayerImgAndBasicAttrsArea>
  );
}

function PlayerImgAndBasicAttrsArea(props: { children?: ReactNode }) {
  const { children } = props;
  const { gameProgress } = useContext(gameProgressCtx);
  const { playersAttrs, currentPlayerIdx } = gameProgress;
  const currentPlayer = playersAttrs[currentPlayerIdx];
  const { job, gender, color } = currentPlayer;
  return (
    <div className={styles.strengthContainer}>
      <div className={styles.playerImageAndRanking}>
        <div className={styles.playerImageContainer}>
          <img
            src={`${backendBaseUrl}/imgs/${job}_${gender}_${color}_front.png`}
          />
        </div>
        <div className={styles.ranking}>
          <div>
            RANKING
            <span>4</span>
          </div>
        </div>
      </div>
      <div className={styles.basicAttrsArea}>
        <div className={`${styles.levelBox} ${styles.xyCenter}`}>
          <AttrCircle
            attr="LV"
            value={currentPlayer.level}
            fontSize="2rem"
            height="100%"
          />
        </div>
        <div className={styles.nameBox}>
          <div className={styles.nameTitle}>NAME</div>
          <TextWithBorderBottom
            width="100%"
            diameter="1rem"
            className={styles.playerName}
          >
            {currentPlayer.name}
          </TextWithBorderBottom>
        </div>
        <div className={`${styles.attackBox} ${styles.xyCenter}`}>
          <AttrCircle
            attr="AT"
            value={currentPlayer.attack.total}
            fontSize="2rem"
            height="100%"
          />
        </div>
        <div className={`${styles.defenseBox} ${styles.xyCenter}`}>
          <AttrCircle
            attr="DF"
            value={currentPlayer.defense.total}
            fontSize="2rem"
            height="100%"
          />
        </div>
        <div className={`${styles.magicBox} ${styles.xyCenter}`}>
          <AttrCircle
            attr="MG"
            value={currentPlayer.magic.total}
            fontSize="2rem"
            height="100%"
          />
        </div>
        <div className={`${styles.speedBox} ${styles.xyCenter}`}>
          <AttrCircle
            attr="SP"
            value={currentPlayer.speed.total}
            fontSize="2rem"
            height="100%"
          />
        </div>
        <div className={`${styles.hpBox} ${styles.xyCenter}`}>
          <FullHpBar hp={currentPlayer.hp} />
        </div>
      </div>
      {children}
    </div>
  );
}
