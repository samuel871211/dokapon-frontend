// Related third party imports.
import { ReactNode, useContext } from "react";
import classNames from "classnames";

// Local application/library specific imports.
import globalStyles from "assets/styles/globalStyles.module.css";
import gameProgressCtx from "reducers/gameProgress";
import styles from "./Data.module.css";
import AttrCircle from "components/AttrCircle";
import FullHpBar from "components/FullHpBar";
import TextWithBorderBottom from "components/TextWithBorderBottom";
import jobs from "data/jobs";
import jobsToJP from "data/jobsToJP";
import useTranslation from "hooks/useTranslation";
import { weaponList, weapons } from "data/weapons";
import { shieldList, shields } from "data/shields";
import magicAttacks from "data/magicAttacks";
import magicDefenses from "data/magicDefenses";
import { accessories, accessoryList } from "data/accessories";
import Pagination from "components/Pagination";
import { TextsKeys } from "data/texts";
import VillagesDialog from "components/VillagesDialog";
import ListDialog from "components/ListDialog";
import ListItem from "components/ListItem";
import { monsterList } from "data/monsters";
import { jobListInRenderOrder } from "data/jobs";
import { specialtyList } from "data/specialities";

// Stateless vars declare.
function getGenderColorByListIdx(listIdx: number) {
  if (listIdx === 44) return "transparent";
  if (listIdx % 2 === 0) return "red";
  return "blue";
}
const level1ToMaxPageIdx: { [key: string]: number } = Object.freeze({
  "02": 1,
  "04": 6,
  "20": 7,
  "21": 5,
  "22": 6,
});

/**
 * key = `${levelIdx}${curPage}`
 */
const explanationHelpTexts: { [key: string]: TextsKeys } = {
  "00": "ドカポンの心得",
  "01": "地形マスと宝箱マス",
  "02": "いろいろな建物",
  "03": "職安で就職活動",
  "04": "アイテムってなに?",
  "05": "フィールド魔法ってなに?",
  "06": "フィールド特技(マニュアル)",
  "07": "フィールド特技(オート)",
  "10": "攻撃側のコマンドの選びかた",
  "11": "防御側のコマンドの選びかた",
  "12": "バトル特技ってなに?",
  "13": "やったぜレベルアップ!",
  "14": "やったぜ熟練度アップ!",
  "15": "便利な機能を知っておこう!",
  "20": "4つ合わせて総資産",
  "21": "世界平和金庫を大切に⋯",
  "22": "特産品で王様のハートGET!",
  "23": "フィールドステータス異常",
  "24": "戦闘ステータス異常",
  "25": "パラメータステータス異常",
  "26": "最後の手段は⋯",
};
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
        DataState: { curLevel, level0Idx, level1Idxs, isCircleClicked },
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
            {levels === "04" && <DataVillages />}
            {levels === "05" && <DataRank />}

            {levels === "10" && !isCircleClicked && <JobListView />}
            {levels === "10" && isCircleClicked && <JobGridView />}
            {levels === "11" && !isCircleClicked && <MonsterListView />}
            {levels === "11" && isCircleClicked && <MonsterGridView />}
            {levels === "12" && !isCircleClicked && <WeaponListView />}
            {levels === "12" && isCircleClicked && <WeaponGridView />}
            {levels === "13" && !isCircleClicked && <ShieldListView />}
            {levels === "13" && isCircleClicked && <ShieldGridView />}
            {levels === "14" && !isCircleClicked && <AccessoryListView />}
            {levels === "14" && isCircleClicked && <AccessoryGridView />}
            {levels === "15" && !isCircleClicked && <SpecialtyListView />}
            {levels === "15" && isCircleClicked && <SpecialtyGridView />}

            {level0Idx === 2 && <Explanation />}

            {levels === "30" && <OptionBasic />}
            {levels === "31" && <OptionSetting />}
            {levels === "32" && <OptionMode />}
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
                : Array(currentPlayerJobMasterLevel).fill("☆")}
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
            <div className={styles.moneyText}>
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

function DataVillages() {
  const {
    gameProgress: {
      DokaponTheWorldState: {
        DataState: { curPage, curListIdx },
      },
    },
  } = useContext(gameProgressCtx);
  return (
    <VillagesDialog
      curPage={curPage}
      curHoverIdx={curListIdx}
      className={styles.villagesDialog}
    ></VillagesDialog>
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
/**
 * @todo gender icon
 */
function JobListView() {
  const { t } = useTranslation();
  const { gameProgress } = useContext(gameProgressCtx);
  const { playersAttrs, currentPlayerIdx } = gameProgress;
  const { availableJobs, gender, jobsMasterStatus } =
    playersAttrs[currentPlayerIdx];
  const { curListIdx, curListStartIdx } =
    gameProgress.DokaponTheWorldState.DataState;
  return (
    <ListDialog
      listTopic="job"
      showArrowUp={curListStartIdx > 0}
      showArrowDown={curListStartIdx < 45 - 10}
      availableCounts={availableJobs.length}
    >
      {jobListInRenderOrder.map(
        (jobType, idx) =>
          idx >= curListStartIdx &&
          idx < curListStartIdx + 10 && (
            <ListItem
              key={idx}
              selected={idx - curListStartIdx === curListIdx}
              className={styles.listItem}
            >
              <div className={styles.listLeftArea}>{idx + 1}</div>
              <div className={styles.listCenterArea}>
                <span
                  style={{ backgroundColor: getGenderColorByListIdx(idx) }}
                  className={styles.listJobColor}
                />
                {t(jobsToJP[jobType])}
              </div>
              <div className={styles.listRightArea}>
                <span className={styles.listJobMaster}>
                  {gender === "male" &&
                    idx % 2 === 0 &&
                    jobsMasterStatus[jobType].level === 5 &&
                    "MASTER"}
                  {gender === "female" &&
                    idx % 2 === 1 &&
                    jobsMasterStatus[jobType].level === 5 &&
                    "MASTER"}
                </span>
              </div>
            </ListItem>
          )
      )}
    </ListDialog>
  );
}
/**
 * @todo specialty before icon
 * @todo 切換page的時候，pagination會抖動
 */
function JobGridView() {
  const { t } = useTranslation();
  const { gameProgress } = useContext(gameProgressCtx);
  const { playersAttrs, currentPlayerIdx } = gameProgress;
  const { job, gender, color } = playersAttrs[currentPlayerIdx];
  const { listJobCurPage } = gameProgress.DokaponTheWorldState.DataState;
  return (
    <div className={styles.listGridViewContainer} data-theme="job">
      <div className={styles.topLeftGridItem}>
        <img
          width="100%"
          height="100%"
          src={`${backendBaseUrl}/imgs/${job}_${gender}_${color}_front.png`}
        />
      </div>
      <div className={styles.topRightGridItem}>
        <div className={styles.jobPagination}>
          <Pagination maxCount={2} curPage={listJobCurPage} />
        </div>
        <div className={styles.whiteText}>
          {listJobCurPage === 0 ? "JOB" : "LEVEL UP POINT"}
        </div>
        <TextWithBorderBottom
          className={styles.textWithBorderBottom}
          data-show={listJobCurPage === 0}
        >
          <div className={styles.jobText}>{t(jobsToJP[job])}</div>
        </TextWithBorderBottom>
        <TextWithBorderBottom
          className={styles.textWithBorderBottom}
          data-show={listJobCurPage === 1}
        >
          <div className={styles.levelUpPointArea}>
            <AttrCircle
              fontSize="2rem"
              attr="AT"
              value={`+${jobs[job].levelUpPoint.attack}`}
            />
            <AttrCircle
              fontSize="2rem"
              attr="DF"
              value={`+${jobs[job].levelUpPoint.defense}`}
            />
            <AttrCircle
              fontSize="2rem"
              attr="MG"
              value={`+${jobs[job].levelUpPoint.magic}`}
            />
            <AttrCircle
              fontSize="2rem"
              attr="SP"
              value={`+${jobs[job].levelUpPoint.speed}`}
            />
            <AttrCircle
              fontSize="2rem"
              attr="HP"
              value={`+${jobs[job].levelUpPoint.hp}`}
            />
          </div>
        </TextWithBorderBottom>
        <div className={styles.whiteText}>
          {listJobCurPage === 1 ? "PAY" : "BAG SPACE"}
        </div>
        <TextWithBorderBottom
          className={styles.textWithBorderBottom}
          data-show={listJobCurPage === 0}
        >
          <div className={styles.moneyText}>
            {jobs[job].pay.toLocaleString()}
          </div>
        </TextWithBorderBottom>
        <TextWithBorderBottom
          className={styles.textWithBorderBottom}
          data-show={listJobCurPage === 1}
        >
          <div className={styles.bagSpaceArea}>
            <div>{t("アイテム")}：</div>
            <span>{jobs[job].bagSpace.items}</span>
            <div>{t("魔法")}：</div>
            <span>{jobs[job].bagSpace.magicBooks}</span>
          </div>
        </TextWithBorderBottom>
      </div>
      <div className={styles.bottomRightGridItem}>
        <div className={styles.whiteText}>EXPLNATION</div>
        <div className={styles.jobExplanation} data-show={listJobCurPage === 0}>
          {jobs[job].fullExplanation.split("\n").map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
        <div
          className={styles.battleSpecialty}
          data-show={listJobCurPage === 1}
        >
          <div>
            {t("フィールド特技")}:{jobs[job].battleSpecialty.name}
          </div>
          {jobs[job].battleSpecialty.briefExplanation
            .split("\n")
            .map((line) => (
              <div key={line}>{line}</div>
            ))}
        </div>
        <div className={styles.fieldSpecialty} data-show={listJobCurPage === 1}>
          <div>{`${t("バトル特技")}:${jobs[job].fieldSpecialty.name}`}</div>
          {jobs[job].fieldSpecialty.fullExplanation.split("\n").map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
/**
 * @todo monster availableCounts
 */
function MonsterListView() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { t } = useTranslation();
  const { curListIdx, curListStartIdx } =
    gameProgress.DokaponTheWorldState.DataState;
  return (
    <ListDialog
      listTopic="monster"
      showArrowUp={curListStartIdx > 0}
      showArrowDown={curListStartIdx < monsterList.length - 10}
      availableCounts={monsterList.length}
    >
      {monsterList.map(
        (monsterFixedAttrs, idx) =>
          idx >= curListStartIdx &&
          idx < curListStartIdx + 10 && (
            <ListItem
              key={idx}
              selected={idx - curListStartIdx === curListIdx}
              className={styles.listItem}
            >
              <div className={styles.listLeftArea}>{idx + 1}</div>
              <div className={styles.listCenterArea}>
                {t(monsterFixedAttrs.name)}
              </div>
              <div className={`${styles.listRightArea} ${styles.flex}`}>
                <div className={styles.levelCirlce}>LV</div>
                <div className={styles.monsterLevel}>
                  {monsterFixedAttrs.level}
                </div>
              </div>
            </ListItem>
          )
      )}
    </ListDialog>
  );
}
/**
 * @todo monster圖片尚未製作
 */
function MonsterGridView() {
  const {
    gameProgress: {
      DokaponTheWorldState: {
        DataState: { curListIdx, curListStartIdx },
      },
    },
  } = useContext(gameProgressCtx);
  const { t } = useTranslation();
  const curMonster = monsterList[curListIdx + curListStartIdx];
  return (
    <div className={styles.listGridViewContainer} data-theme="monster">
      <div className={styles.topLeftGridItem}>還沒做圖</div>
      <div className={styles.topRightGridItem}>
        <div className={styles.line1}>
          <AttrCircle
            attr="LV"
            value={curMonster.level || "?"}
            width="15%"
            fontSize="2rem"
          />
          <TextWithBorderBottom className={styles.monsterName}>
            {t(curMonster.name)}
          </TextWithBorderBottom>
        </div>
        <div className={styles.line2}>
          <AttrCircle
            attr="AT"
            value={curMonster.attack || "?"}
            width="15%"
            fontSize="2rem"
          />
          <AttrCircle
            attr="DF"
            value={curMonster.defense || "?"}
            width="15%"
            fontSize="2rem"
          />
          <AttrCircle
            attr="MG"
            value={curMonster.magic || "?"}
            width="15%"
            fontSize="2rem"
          />
          <AttrCircle
            attr="SP"
            value={curMonster.speed || "?"}
            width="15%"
            fontSize="2rem"
          />
          <FullHpBar
            hp={{ current: curMonster.hp, total: curMonster.hp }}
            className={styles.monsterHpBar}
          />
        </div>
      </div>
      <div className={styles.centerRightGridItem}>
        <div>
          <span>{t("特技")}：</span>
          <span className={styles.monsterSpecialty}>
            {curMonster.specialty}
          </span>
        </div>
        <div>
          <span>{t("攻擊魔法")}：</span>
          <span className={styles.monsterMagicAttack}>
            {curMonster.magicAttack
              ? t(magicAttacks[curMonster.magicAttack].name)
              : null}
          </span>
        </div>
        <div>
          <span>{t("防御魔法")}：</span>
          <span className={styles.monsterMagicDefense}>
            {curMonster.magicDefense
              ? t(magicDefenses[curMonster.magicDefense].name)
              : null}
          </span>
        </div>
      </div>
      <div className={styles.bottomRightGridItem}>
        <div className={styles.whiteText}>EXPLANATION</div>
        <div className={styles.monsterExplanation}>
          {t(curMonster.explanation)
            .split("\n")
            .map((line) => (
              <div key={line}>{line}</div>
            ))}
        </div>
      </div>
    </div>
  );
}

/**
 * @todo 根據不同weapon類型，顯示不同weapon icon
 * @todo weapon availableCounts
 */
function WeaponListView() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { curListIdx, curListStartIdx } =
    gameProgress.DokaponTheWorldState.DataState;
  const { t } = useTranslation();

  return (
    <ListDialog
      listTopic="weapon"
      showArrowUp={curListStartIdx > 0}
      showArrowDown={curListStartIdx < weaponList.length - 10}
      availableCounts={weaponList.length}
    >
      {weaponList.map(
        (weapon, idx) =>
          idx >= curListStartIdx &&
          idx < curListStartIdx + 10 && (
            <ListItem
              key={idx}
              selected={idx - curListStartIdx === curListIdx}
              className={styles.listItem}
            >
              <div className={styles.listLeftArea}>{idx + 1}</div>
              <div className={styles.listCenterArea}>
                <span className={styles.listWeaponIcon} />
                {t(weapon.name)}
              </div>
              <div className={styles.listRightArea}>
                <span className={styles.listWeaponAT}>AT</span>
                <span className={styles.whiteText}>{weapon.attack}</span>
              </div>
            </ListItem>
          )
      )}
    </ListDialog>
  );
}
/**
 * @todo weapon圖片尚未製作
 */
function WeaponGridView() {
  const {
    gameProgress: {
      DokaponTheWorldState: {
        DataState: { curListIdx, curListStartIdx },
      },
    },
  } = useContext(gameProgressCtx);
  const { t } = useTranslation();
  const curWeapon = weaponList[curListIdx + curListStartIdx];
  return (
    <div className={styles.listGridViewContainer} data-theme="weapon">
      <div className={styles.topLeftGridItem}>還沒做圖</div>
      <div className={styles.topRightGridItem}>
        <div className={styles.whiteText}>NAME</div>
        <TextWithBorderBottom>
          <div className={styles.weaponName}>{t(curWeapon.name)}</div>
        </TextWithBorderBottom>
        <div className={styles.whiteText}>PRICE</div>
        <TextWithBorderBottom>
          <div className={styles.moneyText}>
            {curWeapon.price.toLocaleString()}
          </div>
        </TextWithBorderBottom>
      </div>
      <div className={styles.centerRightGridItem}>
        <div className={styles.whiteText}>POINT</div>
        <div className={styles.attrsGroup}>
          <AttrCircle attr="AT" value={curWeapon.attack} width="4rem" />
          <AttrCircle attr="DF" value={curWeapon.defense} width="4rem" />
          <AttrCircle attr="MG" value={curWeapon.magic} width="4rem" />
          <AttrCircle attr="SP" value={curWeapon.speed} width="4rem" />
          <AttrCircle attr="HP" value={curWeapon.hp} width="4rem" />
        </div>
      </div>
      <div className={styles.bottomRightGridItem}>
        <div className={styles.whiteText}>EXPLANATION</div>
        <div className={styles.weaponExplanation}>
          {t(curWeapon.explanation)
            .split("\n")
            .map((line) => (
              <div key={line}>{line}</div>
            ))}
        </div>
      </div>
    </div>
  );
}
/**
 * @todo shield availableCounts
 */
function ShieldListView() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { curListIdx, curListStartIdx } =
    gameProgress.DokaponTheWorldState.DataState;
  const { t } = useTranslation();

  return (
    <ListDialog
      listTopic="shield"
      showArrowUp={curListStartIdx > 0}
      showArrowDown={curListStartIdx < shieldList.length - 10}
      availableCounts={shieldList.length}
    >
      {shieldList.map(
        (shield, idx) =>
          idx >= curListStartIdx &&
          idx < curListStartIdx + 10 && (
            <ListItem
              key={idx}
              selected={idx - curListStartIdx === curListIdx}
              className={styles.listItem}
            >
              <div className={styles.listLeftArea}>{idx + 1}</div>
              <div className={styles.listCenterArea}>
                <span className={styles.listShieldIcon} />
                {t(shield.name)}
              </div>
              <div className={styles.listRightArea}>
                <span className={styles.listShieldDF}>DF</span>
                <span className={styles.whiteText}>{shield.attack}</span>
              </div>
            </ListItem>
          )
      )}
    </ListDialog>
  );
}
/**
 * @todo shield圖片尚未製作
 */
function ShieldGridView() {
  const {
    gameProgress: {
      DokaponTheWorldState: {
        DataState: { curListIdx, curListStartIdx },
      },
    },
  } = useContext(gameProgressCtx);
  const { t } = useTranslation();
  const curShield = shieldList[curListIdx + curListStartIdx];
  return (
    <div className={styles.listGridViewContainer} data-theme="shield">
      <div className={styles.topLeftGridItem}>還沒做圖</div>
      <div className={styles.topRightGridItem}>
        <div className={styles.whiteText}>NAME</div>
        <TextWithBorderBottom>
          <div className={styles.shieldName}>{t(curShield.name)}</div>
        </TextWithBorderBottom>
        <div className={styles.whiteText}>PRICE</div>
        <TextWithBorderBottom>
          <div className={styles.moneyText}>
            {curShield.price.toLocaleString()}
          </div>
        </TextWithBorderBottom>
      </div>
      <div className={styles.centerRightGridItem}>
        <div className={styles.whiteText}>POINT</div>
        <div className={styles.attrsGroup}>
          <AttrCircle attr="AT" value={curShield.attack} width="4rem" />
          <AttrCircle attr="DF" value={curShield.defense} width="4rem" />
          <AttrCircle attr="MG" value={curShield.magic} width="4rem" />
          <AttrCircle attr="SP" value={curShield.speed} width="4rem" />
          <AttrCircle attr="HP" value={curShield.hp} width="4rem" />
        </div>
      </div>
      <div className={styles.bottomRightGridItem}>
        <div className={styles.whiteText}>EXPLANATION</div>
        <div className={styles.shieldExplanation}>
          {t(curShield.explanation)
            .split("\n")
            .map((line) => (
              <div key={line}>{line}</div>
            ))}
        </div>
      </div>
    </div>
  );
}
/**
 * @todo 根據不同accessory，顯示不同accessory icon
 * @todo accessory availableCounts
 */
function AccessoryListView() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { curListIdx, curListStartIdx } =
    gameProgress.DokaponTheWorldState.DataState;
  const { t } = useTranslation();

  return (
    <ListDialog
      listTopic="accessory"
      showArrowUp={curListStartIdx > 0}
      showArrowDown={curListStartIdx < accessoryList.length - 10}
      availableCounts={accessoryList.length}
    >
      {accessoryList.map(
        (accessory, idx) =>
          idx >= curListStartIdx &&
          idx < curListStartIdx + 10 && (
            <ListItem
              key={idx}
              selected={idx - curListStartIdx === curListIdx}
              className={styles.listItem}
            >
              <div className={styles.listLeftArea}>{idx + 1}</div>
              <div className={styles.listCenterArea}>
                <span className={styles.listAccessoryIcon} />
                {t(accessory.name)}
              </div>
            </ListItem>
          )
      )}
    </ListDialog>
  );
}
function AccessoryGridView() {
  const {
    gameProgress: {
      DokaponTheWorldState: {
        DataState: { curListIdx, curListStartIdx },
      },
    },
  } = useContext(gameProgressCtx);
  const { t } = useTranslation();
  const curAccessory = accessoryList[curListIdx + curListStartIdx];
  return (
    <div className={styles.listGridViewContainer} data-theme="accessory">
      <div className={styles.topRightGridItem}>
        <div className={styles.whiteText}>NAME</div>
        <TextWithBorderBottom>
          <div className={styles.accessoryName}>{t(curAccessory.name)}</div>
        </TextWithBorderBottom>
        <div className={styles.whiteText}>PRICE</div>
        <TextWithBorderBottom>
          <div className={styles.moneyText}>
            {curAccessory.price.toLocaleString()}
          </div>
        </TextWithBorderBottom>
      </div>
      <div className={styles.centerRightGridItem}>
        <div className={styles.whiteText}>POINT</div>
        <div className={styles.attrsGroup}>
          <AttrCircle attr="AT" value={curAccessory.attack} width="4rem" />
          <AttrCircle attr="DF" value={curAccessory.defense} width="4rem" />
          <AttrCircle attr="MG" value={curAccessory.magic} width="4rem" />
          <AttrCircle attr="SP" value={curAccessory.speed} width="4rem" />
          <AttrCircle attr="HP" value={curAccessory.hp} width="4rem" />
        </div>
      </div>
      <div className={styles.bottomRightGridItem}>
        <div className={styles.whiteText}>EXPLANATION</div>
        <div className={styles.accessoryExplanation}>
          {t(curAccessory.explanation)
            .split("\n")
            .map((line) => (
              <div key={line}>{line}</div>
            ))}
        </div>
      </div>
    </div>
  );
}
/**
 * @todo 根據不同specialty，顯示不同specialty icon
 * @todo specialty availableCounts
 */
function SpecialtyListView() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { curListIdx, curListStartIdx } =
    gameProgress.DokaponTheWorldState.DataState;
  const { t } = useTranslation();

  return (
    <ListDialog
      listTopic="specialty"
      showArrowUp={curListStartIdx > 0}
      showArrowDown={curListStartIdx < specialtyList.length - 10}
      availableCounts={specialtyList.length}
    >
      {specialtyList.map(
        (specialty, idx) =>
          idx >= curListStartIdx &&
          idx < curListStartIdx + 10 && (
            <ListItem
              key={idx}
              selected={idx - curListStartIdx === curListIdx}
              className={styles.listItem}
            >
              <div className={styles.listLeftArea}>{idx + 1}</div>
              <div className={styles.listCenterArea}>
                <span className={styles.listSpecialtyIcon} />
                {t(specialty.name)}
              </div>
              <div className={styles.listRightArea}>{specialty.areaName}</div>
            </ListItem>
          )
      )}
    </ListDialog>
  );
}
function SpecialtyGridView() {
  const {
    gameProgress: {
      DokaponTheWorldState: {
        DataState: { curListIdx, curListStartIdx },
      },
    },
  } = useContext(gameProgressCtx);
  const { t } = useTranslation();
  const curSpecialty = specialtyList[curListIdx + curListStartIdx];
  return (
    <div className={styles.listGridViewContainer} data-theme="specialty">
      <div className={styles.bottomRightGridItem}>
        <div className={styles.whiteText}>EXPLANATION</div>
        <div className={styles.specialtyExplanation}>
          {t(curSpecialty.explanation)
            .split("\n")
            .map((line) => (
              <div key={line}>{line}</div>
            ))}
        </div>
      </div>
    </div>
  );
}
function Explanation() {
  const {
    gameProgress: {
      DokaponTheWorldState: {
        DataState: { curPage, level0Idx, level1Idxs },
      },
    },
  } = useContext(gameProgressCtx);
  const { t } = useTranslation();
  const level1Idx = level1Idxs[level0Idx];
  const levels = `${level1Idx}${curPage}`;
  return (
    <div className={styles.explanationContainer}>
      <div className={styles.explanationTopArea}>
        <div className={styles.whiteText}>HELP</div>
        <TextWithBorderBottom
          width="100%"
          className={styles.explanationTopAreaText}
        >
          {t(explanationHelpTexts[`${level1Idx}${curPage}`])}
        </TextWithBorderBottom>
        <Pagination
          maxCount={level1ToMaxPageIdx[`${level0Idx}${level1Idx}`] + 1}
          curPage={curPage}
          className={styles.explanationMapPagination}
        />
      </div>
      {levels === "00" && <Explanation00Content />}
      {levels === "01" && <Explanation01Content />}
      {levels === "02" && <Explanation02Content />}
      {levels === "03" && <Explanation03Content />}
      {levels === "04" && <Explanation04Content />}
      {levels === "05" && <Explanation05Content />}
      {levels === "06" && <Explanation06Content />}
      {levels === "07" && <Explanation07Content />}
      {levels === "10" && <Explanation10Content />}
      {levels === "11" && <Explanation11Content />}
      {levels === "12" && <Explanation12Content />}
      {levels === "13" && <Explanation13Content />}
      {levels === "14" && <Explanation14Content />}
      {levels === "15" && <Explanation15Content />}
      {levels === "20" && <Explanation20Content />}
      {levels === "21" && <Explanation21Content />}
      {levels === "22" && <Explanation22Content />}
      {levels === "23" && <Explanation23Content />}
      {levels === "24" && <Explanation24Content />}
      {levels === "25" && <Explanation25Content />}
      {levels === "26" && <Explanation26Content />}
    </div>
  );
}
function Explanation00Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      {t(
        "ゲームをクリアするまでに、\n最も多くらお金をかせいだ人が\nドカポンでは勝者だ!\n他の勇者は全員ライバルだ!\n思いっきり邢魔をして、\n自分の有利になるようにしよう!\n情けは禁物!\nそれがドカポンの鉄則だぞ!"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </div>
  );
}
function Explanation01Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      <div className={styles.blueText}>{t("地形マス")}⇨</div>
      {t(
        "ほとんどがモンスターとの戦闘になる。\nたま〜にイベントが起こり、\n変な人が現われるかも。"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
      <div className={styles.blueText}>{t("宝箱マス")}⇨</div>
      {t(
        "アイテムやフィールド魔法が\n手に入る。いろいろな宝箱があるから\n自分の欲しい物の入っている\n宝箱に止まろう。"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </div>
  );
}
function Explanation02Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      <div className={styles.blueText}>{t("城マス")}⇨</div>
      <div>{t("お金を入れたり、王様に贈り物ができる。")}</div>
      <div className={styles.blueText}>{t("村マス")}⇨</div>
      <div>{t("上納金や特産品がもらえる。")}</div>
      <div className={styles.blueText}>{t("店マス")}⇨</div>
      <div>{t("道具や装備など、いろいろな物が買える。")}</div>
      <div className={styles.blueText}>{t("教会マス")}⇨</div>
      {t(
        "ステータス異常を治してくれたりする。\n死亡時は最後に立ち寄った教会で復活。"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </div>
  );
}
function Explanation03Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      {t("職安マスでは転職ができる。\n職業によって異なることは以下の通り。")
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
      <div>★{t("フィールド特技")}</div>
      <div>★{t("バトル特技")}</div>
      <div>★{t("持てる持ち物の数")}</div>
      <div>★{t("給料")}</div>
      <div>★{t("レベルUP時の上昇パラメータ")}</div>
      {t("上昇するパラメータは特に重要!\nバランス良くパラメータを上げよう!")
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </div>
  );
}
function Explanation04Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      {t(
        "アイテムを使うと、\nHPが回復したり、攻撃力が上がったりと、\n自分に対して良いことが起こる効果が多い。\n特にルーレットの数を増やせるバインは、\nいつも何個か持っておこう。\nドカポンでは目的地に\n早くたどり着くことが大切だ。\nライバル達より早く進むためには\nバインは欠かせないアイテムなのだ!"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </div>
  );
}
function Explanation05Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      {t(
        "フィールド魔法は、\n相手にダメージを与えたり、\n相手をステータス異常にしたりするなど、\n相手に対して邢魔をする効果を持っている。\nフィールド魔法は\n魔力が高い人が使うほど、\nダメージが上がる。\n自分より素早さが高い相手には\n当たり難くなるので注意しよう。"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </div>
  );
}
function Explanation06Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      {t(
        "フィールド特技とは、各職業が持つ、\nフィールド上で使える特別な技のこと。\n大きく分けて2つのタイプある。"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
      <br />
      <div>{t("マニュアル特技")}</div>
      <div>★{t("自分で使用して発動させるタイプの特技。")}</div>
      {t(
        "いつでも自由に使えるが、\n使用すると、カバンは使えなくなる。\n逆にカバンを使うと、特技は使えなくなる。"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </div>
  );
}
function Explanation07Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      <div>{t("う1つのタイプは⋯。")}</div>
      <br />
      <div>{t("オート特技")}</div>
      <div>★{t("自分で使用して発動させるタイプの特技。")}</div>
      {t(
        "自分で自由に使えないのは不便だが、\n特技が発動しても、カバンは使える。\nアイテムや フィールド魔法を\n複数回使えるオート特技もある。"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </div>
  );
}
function Explanation10Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      <div>{t("防御側の裏を読んでコマンドを選べ!")}</div>
      <div>
        <span>{t("攻撃")}⇨</span>
        <span>{t("防御に弱い")}</span>
      </div>
      <div>{t("相手に安全にダメージを与える!")}</div>
      <div>
        <span>{t("必殺")}⇨</span>
        <span>{t("反撃に弱い")}</span>
      </div>
      <div>{t("一撃必殺! だが反撃されるとピンチ!")}</div>
      <div>
        <span>{t("攻擊魔法")}⇨</span>
        <span>{t("防御魔法に弱い")}</span>
      </div>
      <div>{t("装備している攻撃魔法で攻撃!")}</div>
      <div>
        <span>{t("特技")}</span>
      </div>
      <div>{t("職業ごとのバトル特技を使う!")}</div>
    </div>
  );
}
function Explanation11Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      <div>{t("攻撃側のコマンドを予想して選べ!")}</div>
      <div>
        <span>{t("防御")}⇨</span>
        <span>{t("攻撃に強い!")}</span>
      </div>
      <div>{t("攻撃のダメージを減らせる!")}</div>
      <div>
        <span>{t("反擊")}⇨</span>
        <span>{t("必殺に強い!")}</span>
      </div>
      <div>{t("必殺をかわして、カウンター攻撃!")}</div>
      <div>
        <span>{t("防御魔法")}⇨</span>
        <span>{t("攻撃魔法に強い!")}</span>
      </div>
      <div>{t("攻撃魔法を、防御魔法で防御!")}</div>
      <div>
        <span>{t("降参")}</span>
      </div>
      <div>{t("勝てない相手には迷わず降参!")}</div>
    </div>
  );
}
function Explanation12Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      {t(
        "バトル特技とは、\n職業ごとに持っている\n戦闘で使える特別な技のこと。\n防御側に防がれることは無いが、\nたまにミスをするバトル特技もある。\n使いかたによっては、戦闘を有利に\nすすめることができるので、\n自分の バトル特技をしっかり覚えておこう!"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </div>
  );
}
function Explanation13Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      {t(
        "戦闘に勝利して経験値がたまると、\nレベルアップするぞ!\nレベルアップすると、HPが完全回復して、\nさらにパラメータが上がる。\n上昇するパラメータは職業ごとに\n違うので要注意!\n同じ職業にずっとついていると\nパラメータがかたよってしまうので\n弱点ができないように気をつけよう!"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </div>
  );
}
function Explanation14Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      {t(
        "戦闘で勝利していくと、\n職業の熟練度が上がる。\n熟練度は5段階あり、熟練度が上がると、\n給料も上がり、さらに他の職業に\n転職できるようになる場合もある。\n転職しても、一度上がった熟練度は\n下がらないので、安心して転職しよう!\nマスターになると、レベルUP時に追加で\n何らかのパラメータがUPするようになる!"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </div>
  );
}
function Explanation15Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      <div>{t("戦闘で知っておきたい便利な機能!")}</div>
      <br />
      <div>{t("説明")}</div>
      {t("攻撃側の攻撃魔法、バトル特技、\n防御側の防御魔法の説明が読める。")
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
      <div>{t("予測")}</div>
      {t(
        "お互いの選んだコマンドで\n結果がどうなるか予測してくれる。\n始めて出会ったモンスターは予測できない。"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </div>
  );
}
function Explanation20Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      <div>{t("4種の資産を合わせて、総資産と言う。")}</div>
      <br />
      <div>
        <span>{t("所持金")}⇨</span>
        <span>{t("手持ちのお金。")}</span>
      </div>
      <div>
        <span>{t("金庫")}⇨</span>
        <span>{t("世界平和金庫に入れたお金。")}</span>
      </div>
      <div className={styles.inlineBlockContainer}>
        <span>{t("特産品")}⇨</span>
        <span>
          {t(
            "プレゼントした特産品の\n価値の合計を、王様が\nこっそり資産に加えてくれる。"
          )
            .split("\n")
            .map((line) => (
              <div key={line}>{line}</div>
            ))}
        </span>
      </div>
      <div>
        <span>{t("村価値")}⇨</span>
        <span>{t("統治している村の価値の合計。")}</span>
      </div>
    </div>
  );
}
function Explanation21Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      {t(
        "世界平和金庫にお金を入れれば\n世界は少し平和になる(気がする)。\n金庫に入れたお金は資産として\nカウントされる。金庫に入れたお金は\n奪われることは無いので、所持金が\n貯まったら、金庫に入れるのが一番安全。\nしかし、金庫に入れたお金は一度入れたら\n二度と引き出せないので、\n入れる金額には注意しよう!"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </div>
  );
}
function Explanation22Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      {t(
        "特産品は、統治された村でたまにもらえる。\n特産品は店で売ってもお金になるが、\n王様にあげると、喜んだ王様が\nこっそりと特産品の価値を\n資産に加えてくれる。\n特産品は、店で売るよりも、王様に\nあげたほうが何倍も価値が高い場合が多い。\nただし王様の嫌いな特産品をあげてしまうと、\n怒った王様が特産品の資産を下げてしまう。"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </div>
  );
}
function Explanation23Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      <div>
        <span>{t("毒")}⇨</span>
        <span>{t("毎ターンHPが減る。")}</span>
      </div>
      <div>
        <span>{t("コロリ")}⇨</span>
        <span>{t("強力な毒。人に感染し死亡する。")}</span>
      </div>
      <div>
        <span>{t("ピヨコタン")}⇨</span>
        <span>{t("1マスしか歩けなくなる。")}</span>
      </div>
      <div>
        <span>{t("おくびょう")}⇨</span>
        <span>{t("人のいるマスに止まれない。")}</span>
      </div>
      <div>
        <span>{t("封印")}⇨</span>
        <span>{t("カバンコマンドが使えなくなる。")}</span>
      </div>
      <div>
        <span>{t("プリオン")}⇨</span>
        <span>{t("パラメータが下がり毒になる。")}</span>
      </div>
      <div>
        <span>{t("死神")}⇨</span>
        <span>{t("5ターンで死亡。かけた相手を倒せ!")}</span>
      </div>
      <div>
        <span>{t("睡眠")}⇨</span>
        <span>{t("眠ってしまって何もできない。")}</span>
      </div>
      <div>
        <span>{t("犯罪者")}⇨</span>
        <span>{t("賞金首になり、建物に入れない。")}</span>
      </div>
    </div>
  );
}
function Explanation24Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      <div>
        <span>{t("呪い")}⇨</span>
        <span>{t("たまに自分を攻撃してしまう。")}</span>
      </div>
      <div>
        <span>{t("混乱")}⇨</span>
        <span>{t("たまに違ったコマンドを選択する。")}</span>
      </div>
      <div>
        <span>{t("暗闇")}⇨</span>
        <span>{t("攻撃をミスしやすくなる。")}</span>
      </div>
      <div>
        <span>{t("流血")}⇨</span>
        <span>{t("ダメージを受けると追加ダメージ。")}</span>
      </div>
      <div>
        <span>{t("禁止")}⇨</span>
        <span>{t("何らかのコマンドが使えなくなる。")}</span>
      </div>
      <div>
        <span>{t("魅了")}⇨</span>
        <span>{t("攻撃側のコマンドが使えなくなる。")}</span>
      </div>
      <div>
        <span>{t("石化")}⇨</span>
        <span>{t("動けないが物理攻撃を受けない。")}</span>
      </div>
      <div>
        <span>{t("マヒ")}⇨</span>
        <span>{t("マヒして何もできなくなる。")}</span>
      </div>
      <div>
        <span>{t("睡眠")}⇨</span>
        <span>{t("眠ってしまって何もできない。")}</span>
      </div>
    </div>
  );
}
function Explanation25Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      <div>
        <span>{t("ATダウン")}⇨</span>
        <span>{t("攻撃力が下がる。")}</span>
      </div>
      <div>
        <span>{t("DFダウン")}⇨</span>
        <span>{t("防御力が下がる。")}</span>
      </div>
      <div>
        <span>{t("MGダウン")}⇨</span>
        <span>{t("魔力が下がる。")}</span>
      </div>
      <div>
        <span>{t("SPダウン")}⇨</span>
        <span>{t("素早さが下がる。")}</span>
      </div>
      <div>
        <span>{t("ALLダウン")}⇨</span>
        <span>{t("4つのパラメータが下がる。")}</span>
      </div>
    </div>
  );
}
function Explanation26Content() {
  const { t } = useTranslation();
  return (
    <div className={styles.explanationBottomArea}>
      {t(
        "ビリのまま数週間が経過すると\n体中に暗黒闘気が満ちてくる。\n暗黒闘気が体から放出されると\n魔界の住人が 闇のタマゴという\nアイテムを持ってきてくれるようになる。\n全てを捨てて 闇のタマゴを使えば、\n一定期間、強大な力を得られる。\nしかし、 闇のタマゴを使わずに\nビリのままで持ち続けると⋯"
      )
        .split("\n")
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </div>
  );
}
/**
 * @todo 暫時不做，因為很多聲音特效其實也做不到
 */
function OptionBasic() {
  const { t } = useTranslation();
  return (
    <div className={styles.optionContainer}>
      <div className={styles.optionTopArea}>
        <div className={styles.setupText}>SET UP</div>
        <div className={styles.optionTitle}>{t("基本設定")}</div>
        <div className={styles.moreInfoIcon}>▲{t("ヘルプ")}</div>
      </div>
      <div className={styles.optionCenterArea}></div>
      <div className={styles.optionBottomArea}>
        <div>O{t("決定")}</div>
        <div>X{t("キャンセル")}</div>
      </div>
    </div>
  );
}
function OptionSetting() {
  const { t } = useTranslation();
  const {
    gameProgress: {
      playersAttrs,
      DokaponTheWorldState: {
        DataState: { optionSettingSelectedIdx },
      },
    },
  } = useContext(gameProgressCtx);

  return (
    <div className={styles.optionContainer}>
      <div className={styles.optionTopArea}>
        <div className={styles.setupText}>SET UP</div>
        <div className={styles.optionTitle}>{t("操作設定")}</div>
        <div className={styles.moreInfoIcon}>▲{t("ヘルプ")}</div>
      </div>
      <div className={styles.optionCenterArea}>
        {playersAttrs.map((playerAttr, idx) => (
          <div className={styles.playerRow} key={playerAttr.name}>
            <div className={styles.playerRowLeft}>{playerAttr.name}</div>
            <ListItem
              selected={optionSettingSelectedIdx === idx}
              className={styles.playerRowRight}
            ></ListItem>
          </div>
        ))}
      </div>
      <div className={styles.optionBottomArea}>
        <div>O{t("決定")}</div>
        <div>X{t("キャンセル")}</div>
      </div>
    </div>
  );
}
function OptionMode() {
  const { t } = useTranslation();
  const {
    gameProgress: {
      DokaponTheWorldState: {
        DataState: { optionModeSelectedIdx },
      },
    },
  } = useContext(gameProgressCtx);
  return (
    <div className={styles.optionContainer}>
      <div className={styles.optionTopArea}>
        <div className={styles.setupText}>SET UP</div>
        <div className={styles.optionTitle}>フリーモード設定</div>
        <div className={styles.moreInfoIcon}>▲{t("ヘルプ")}</div>
      </div>
      <div className={styles.optionCenterArea}>
        <div className={styles.weekTopArea}>
          <div>{t("プレイする週数")}</div>
          <div className={styles.weekNumberRow}>
            <span
              className={classNames({
                [globalStyles.hoverEffectGreenTransparent]:
                  optionModeSelectedIdx === 0,
              })}
            >
              9
            </span>
            <span
              className={classNames({
                [globalStyles.hoverEffectGreenTransparent]:
                  optionModeSelectedIdx === 1,
              })}
            >
              9
            </span>
            <span
              className={classNames({
                [globalStyles.hoverEffectGreenTransparent]:
                  optionModeSelectedIdx === 2,
              })}
            >
              9
            </span>
            <div>週</div>
          </div>
        </div>
        <div className={styles.weekBottomArea}>
          {t(
            "遊ぶ週数を設定できる。\n設定した週数になるとゲーム終了。\nその時、総資産が一番高い人の勝ち。"
          )
            .split("\n")
            .map((line) => (
              <div key={line}>{line}</div>
            ))}
        </div>
      </div>
      <div className={styles.optionBottomArea}>
        <div>O{t("決定")}</div>
        <div>X{t("キャンセル")}</div>
      </div>
    </div>
  );
}
