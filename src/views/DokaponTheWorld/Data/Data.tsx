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
import accessories from "data/accessories";
import Pagination from "components/Pagination";
import { TextsKeys } from "data/texts";
import VillagesDialog from "components/VillagesDialog";
import ListDialog from "components/ListDialog";
import ListItem from "components/ListItem";

// Stateless vars declare.
const exp = 123456;
const arrayOf12 = Array(12).fill(0);
const arrayOf10 = Array(10).fill(0);
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
        DataState: { curLevel, level0Idx, level1Idxs, curPage, curListIdx },
      },
    },
  } = useContext(gameProgressCtx);
  const curLevel1Idx = level1Idxs[level0Idx];
  const levels = `${level0Idx}${curLevel1Idx}`;
  return (
    <div className={styles.dataContainer} data-slide-left={curLevel !== 0}>
      <div className={styles.level0ButtonGroup}>
        <span></span>
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
                data-selected={level1Idx === curLevel1Idx}
                data-hovered={curLevel === 1 && level1Idx === curLevel1Idx}
              >
                <div>{t(btnText)}</div>
              </div>
            ))}
          </div>
          <div className={styles.variableContent}>
            {levels === "00" && <DataStrength />}
            {levels === "01" && <DataEquipment />}
            {levels === "02" && <DataBag />}
            {levels === "03" && <DataAssets />}
            {levels === "04" && (
              <VillagesDialog
                curPage={curPage}
                curHoverIdx={curListIdx}
                className={styles.villagesDialog}
              />
            )}
            {levels === "05" && <DataRank />}

            {levels === "10" && <ListJobs />}
            {levels === "11" && <ListMonsters />}
            {levels === "12" && <ListWeapons />}
            {levels === "13" && <ListShields />}
            {levels === "14" && <ListAccessories />}
            {levels === "15" && <ListSpecialty />}

            {levels === "20" && "地圖"}
            {levels === "21" && "戰鬥"}
            {levels === "22" && "其他"}

            {levels === "30" && "基本"}
            {levels === "31" && "操作"}
            {levels === "32" && "模式"}
          </div>
        </div>
      </div>
    </div>
  );
}

function DataStrength() {
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

function DataEquipment() {
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
            {t(accessories[currentPlayer.accessory].name)}
          </div>
        </TextWithBorderBottom>
      </div>
    </PlayerImgAndBasicAttrsArea>
  );
}

function DataBag() {
  const { t } = useTranslation();
  const { gameProgress } = useContext(gameProgressCtx);
  const { playersAttrs, currentPlayerIdx } = gameProgress;
  const currentPlayer = playersAttrs[currentPlayerIdx];
  const { curPage } = gameProgress.DokaponTheWorldState.DataState;
  const selectedBag = curPage === 0 ? "items" : "magicBooks";
  const maxSpace = jobs[currentPlayer.job].bagSpace[selectedBag];
  const usedSpace = currentPlayer.possession.items.length;
  return (
    <PlayerImgAndBasicAttrsArea>
      <div className={styles.bagPaginationContainer}>
        <Pagination maxCount={2} curPage={curPage} />
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
  const { t } = useTranslation();
  return (
    <PlayerImgAndBasicAttrsArea>
      <div className={styles.assetsArea}>
        <TextWithBorderBottom diameter="1rem" className={styles.assetRow}>
          <div className={styles.assetsTitle}>{t("所持金")}</div>
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
          <div className={styles.assetsTitle}>{t("金庫")}</div>
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
          <div className={styles.assetsTitle}>{t("特產品")}</div>
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
          <div className={styles.assetsTitle}>{t("村價值")}</div>
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
          <div className={styles.assetsTitle}>{t("資産")}</div>
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

/**
 * @todo 根據所持金來決定rank順序
 */
function DataRank() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { t } = useTranslation();
  const { playersAttrs } = gameProgress;
  return (
    <div className={styles.dataRankContainer}>
      {playersAttrs.map((playerAttrs, idx) => (
        <div className={styles.playerRankArea} key={idx}>
          <div className={styles.rankNumber}>1</div>
          <TextWithBorderBottom className={styles.rankLeft} diameter="1rem">
            <div
              style={{ backgroundColor: playerAttrs.color }}
              className={styles.playerColorIcon}
            ></div>
            <div>{playerAttrs.name}</div>
          </TextWithBorderBottom>
          <TextWithBorderBottom className={styles.rankRightTop} diameter="1rem">
            <div className={styles.rankRightTopText}>
              {playerAttrs.possession.money}
            </div>
          </TextWithBorderBottom>
          <TextWithBorderBottom
            className={styles.rankRightBottom}
            diameter="1rem"
          >
            <div className={styles.rankRightBottomText1}>{t("所持金")}</div>
            <div className={styles.rankRightBottomText2}>
              {playerAttrs.possession.money}
            </div>
          </TextWithBorderBottom>
        </div>
      ))}
    </div>
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

function ListJobs() {
  return (
    <ListDialog listTopic="job" showArrowUp showArrowDown>
      {arrayOf10.map((zero, idx) => (
        <ListItem key={idx} selected={false} className={styles.listItem}>
          {idx}
        </ListItem>
      ))}
    </ListDialog>
  );
}

function ListMonsters() {
  return (
    <ListDialog listTopic="monster" showArrowUp showArrowDown>
      {arrayOf10.map((zero, idx) => (
        <ListItem key={idx} selected={false} className={styles.listItem}>
          {idx}
        </ListItem>
      ))}
    </ListDialog>
  );
}

function ListWeapons() {
  return (
    <ListDialog listTopic="weapon" showArrowUp showArrowDown>
      {arrayOf10.map((zero, idx) => (
        <ListItem key={idx} selected={false} className={styles.listItem}>
          {idx}
        </ListItem>
      ))}
    </ListDialog>
  );
}

function ListShields() {
  return (
    <ListDialog listTopic="shield" showArrowUp showArrowDown>
      {arrayOf10.map((zero, idx) => (
        <ListItem key={idx} selected={false} className={styles.listItem}>
          {idx}
        </ListItem>
      ))}
    </ListDialog>
  );
}

function ListAccessories() {
  return (
    <ListDialog listTopic="accessory" showArrowUp showArrowDown>
      {arrayOf10.map((zero, idx) => (
        <ListItem key={idx} selected={false} className={styles.listItem}>
          {idx}
        </ListItem>
      ))}
    </ListDialog>
  );
}

function ListSpecialty() {
  return (
    <ListDialog listTopic="specialty" showArrowUp showArrowDown>
      {arrayOf10.map((zero, idx) => (
        <ListItem key={idx} selected={false} className={styles.listItem}>
          {idx}
        </ListItem>
      ))}
    </ListDialog>
  );
}
