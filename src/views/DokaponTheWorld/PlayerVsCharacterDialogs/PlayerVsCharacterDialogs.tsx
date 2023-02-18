// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import isPlayer from "utils/isPlayer";
import type { MonsterAttrs, PlayerAttrs } from "global";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import AttrCircle from "components/AttrCircle";
import CustomBorderBottom from "components/CustomBorderBottom";
import TextWithBorderBottom from "components/TextWithBorderBottom";
import FullHpBar from "components/FullHpBar";
import { weapons } from "data/weapons";
import { shields } from "data/shields";
import magicAttacks from "data/magicAttacks";
import magicDefenses from "data/magicDefenses";
import { accessories } from "data/accessories";
import jobs from "data/jobs";
import gameProgressCtx from "reducers/gameProgress";
import styles from "./PlayerVsCharacterDialogs.module.css";
import { monsters } from "data/monsters";

// Stateless vars declare.

export default PlayerVsCharacterDialogs;

function PlayerVsCharacterDialogs() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { playersAttrs, currentPlayerIdx, DokaponTheWorldState } = gameProgress;
  const { curClickedCharacters } = DokaponTheWorldState;
  const { curPage } = DokaponTheWorldState.PlayerVsCharacterDialogState;
  const { selectedIdx } = DokaponTheWorldState.SelectCharacterToCompareState;
  const currentPlayer = playersAttrs[currentPlayerIdx];
  const curClickedCharacter = curClickedCharacters[selectedIdx];
  const { characterType } = curClickedCharacter;
  const isMonsterOrEnemy = characterType === "monster";

  return (
    <div className={styles.playerVsCharacterDialogsContainer}>
      <div className={styles.playerVsCharacterDialogBlock}>
        {curPage === 0 && <PlayerPage playerAttrs={currentPlayer} />}
        {curPage === 1 && <ItemsPage playerAttrs={currentPlayer} />}
        {curPage === 2 && <MagicBooksPage playerAttrs={currentPlayer} />}
      </div>
      <div className={styles.playerVsCharacterDialogBlock}>
        {isMonsterOrEnemy && (
          <MonsterOrEnemyDialog attrs={curClickedCharacter} />
        )}
        {curPage === 0 && isPlayer(curClickedCharacter) && (
          <PlayerPage playerAttrs={curClickedCharacter} />
        )}
        {curPage === 1 && isPlayer(curClickedCharacter) && (
          <ItemsPage playerAttrs={curClickedCharacter} />
        )}
        {curPage === 2 && isPlayer(curClickedCharacter) && (
          <MagicBooksPage playerAttrs={curClickedCharacter} />
        )}
      </div>
    </div>
  );
}

function PlayerPage(props: { playerAttrs: PlayerAttrs }) {
  const { playerAttrs } = props;
  return (
    <YellowBlock
      role="dialog"
      borderRadius="1.5rem"
      className={styles.playerVsCharacterDialogContainerType1}
    >
      <div className={styles.dialogTopArea}>
        <div className={styles.flexRow}>
          <div className={styles.rowHead}>NAME</div>
          <div className={styles.rowRight}>
            <div className={styles.nameArea}>{playerAttrs.name}</div>
            <CustomBorderBottom />
          </div>
        </div>
        <div className={styles.flexRow}>
          <div className={styles.rowHead}>JOB</div>
          <div className={styles.rowRight}>
            <div className={styles.jobArea}>{playerAttrs.job}</div>
            <CustomBorderBottom />
          </div>
        </div>
        <div className={`${styles.flexRow} ${styles.row3}`}>
          <AttrCircle
            className={styles.attrCircle}
            attr="LV"
            value={playerAttrs.level}
            fontSize="2rem"
          />
          <FullHpBar hp={playerAttrs.hp} className={styles.fullHpBar} />
        </div>
        <div className={`${styles.flexRow} ${styles.row4}`}>
          <AttrCircle
            className={styles.attrCircle}
            attr="AT"
            value={playerAttrs.attack.total}
            fontSize="2rem"
          />
          <AttrCircle
            className={styles.attrCircle}
            attr="DF"
            value={playerAttrs.defense.total}
            fontSize="2rem"
          />
          <AttrCircle
            className={styles.attrCircle}
            attr="MG"
            value={playerAttrs.magic.total}
            fontSize="2rem"
          />
          <AttrCircle
            className={styles.attrCircle}
            attr="SP"
            value={playerAttrs.speed.total}
            fontSize="2rem"
          />
        </div>
        <div className={styles.flexRow}></div>
      </div>
      <div className={styles.dialogCenterArea}>
        <div>L</div>
        <div>R</div>
      </div>
      <div className={styles.dialogBottomArea}>
        <TextWithBorderBottom className={styles.bottomRow} diameter="1.5rem">
          <div className={styles.equipmentName}>
            {weapons[playerAttrs.weapon]?.name}
          </div>
          <div className={styles.equipmentCirle}>AT</div>
          <div className={styles.equipmentNumber}>
            {weapons[playerAttrs.weapon]?.attack}
          </div>
        </TextWithBorderBottom>
        <TextWithBorderBottom className={styles.bottomRow} diameter="1.5rem">
          <div className={styles.equipmentName}>
            {shields[playerAttrs.shield]?.name}
          </div>
          <div className={styles.equipmentCirle}>DF</div>
          <div className={styles.equipmentNumber}>
            {shields[playerAttrs.shield]?.defense}
          </div>
        </TextWithBorderBottom>
        <TextWithBorderBottom className={styles.bottomRow} diameter="1.5rem">
          {magicAttacks[playerAttrs.magicAttack]?.name}
        </TextWithBorderBottom>
        <TextWithBorderBottom className={styles.bottomRow} diameter="1.5rem">
          {magicDefenses[playerAttrs.magicDefense]?.name}
        </TextWithBorderBottom>
        <TextWithBorderBottom className={styles.bottomRow} diameter="1.5rem">
          {accessories[playerAttrs.accessory]?.name}
        </TextWithBorderBottom>
      </div>
    </YellowBlock>
  );
}

function MonsterOrEnemyDialog(props: { attrs: MonsterAttrs }) {
  const { attrs } = props;
  const monsterRecord = monsters[attrs.name];
  return (
    <YellowBlock
      role="dialog"
      borderRadius="1.5rem"
      className={styles.playerVsCharacterDialogContainerType1}
    >
      <div className={styles.dialogTopArea}>
        <div className={styles.flexRow}>
          <div className={styles.rowHead}>NAME</div>
          <div className={styles.rowRight}>
            <div className={styles.nameArea}>{monsterRecord.name}</div>
            <CustomBorderBottom />
          </div>
        </div>
        <div className={styles.flexRow}></div>
        <div className={`${styles.flexRow} ${styles.row3}`}>
          <AttrCircle
            className={styles.attrCircle}
            attr="LV"
            value={monsterRecord.level}
            fontSize="2rem"
          />
          <FullHpBar
            hp={{ current: attrs.hp.current, total: monsterRecord.hp }}
            className={styles.fullHpBar}
          />
        </div>
        <div className={`${styles.flexRow} ${styles.row4}`}>
          <AttrCircle
            className={styles.attrCircle}
            attr="AT"
            value={monsterRecord.attack}
            fontSize="2rem"
          />
          <AttrCircle
            className={styles.attrCircle}
            attr="DF"
            value={monsterRecord.defense}
            fontSize="2rem"
          />
          <AttrCircle
            className={styles.attrCircle}
            attr="MG"
            value={monsterRecord.magic}
            fontSize="2rem"
          />
          <AttrCircle
            className={styles.attrCircle}
            attr="SP"
            value={monsterRecord.speed}
            fontSize="2rem"
          />
        </div>
        <div className={styles.flexRow}></div>
      </div>
      <div className={styles.dialogCenterArea}>
        <div>L</div>
        <div>R</div>
      </div>
      <div className={styles.dialogBottomArea}>
        <TextWithBorderBottom className={styles.bottomRow} diameter="1.5rem">
          <div className={styles.td1Label}>EXP</div>
          <div className={styles.td2Number}>
            {monsterRecord.exp.toLocaleString()}
          </div>
          <div className={styles.td3Unit}>EXP</div>
        </TextWithBorderBottom>
        <TextWithBorderBottom className={styles.bottomRow} diameter="1.5rem">
          <div className={styles.td1Label}>MONEY</div>
          <div
            className={styles.td2Number}
          >{`${monsterRecord.money.toLocaleString()}D`}</div>
        </TextWithBorderBottom>
        <TextWithBorderBottom className={styles.bottomRow} diameter="1.5rem">
          {monsterRecord.magicAttack ? (
            magicAttacks[monsterRecord.magicAttack]?.name
          ) : (
            <div className={styles.redLine}></div>
          )}
        </TextWithBorderBottom>
        <TextWithBorderBottom className={styles.bottomRow} diameter="1.5rem">
          {monsterRecord.magicDefense ? (
            magicDefenses[monsterRecord.magicDefense]?.name
          ) : (
            <div className={styles.redLine}></div>
          )}
        </TextWithBorderBottom>
        <TextWithBorderBottom
          className={styles.bottomRow}
          diameter="1.5rem"
        ></TextWithBorderBottom>
      </div>
    </YellowBlock>
  );
}

function ItemsPage(props: { playerAttrs: PlayerAttrs }) {
  const { playerAttrs } = props;
  const { items } = playerAttrs.possession;
  const cur = items.length;
  const max = jobs[playerAttrs.job].bagSpace.items;
  const maxList = Array(max).fill(0);
  const { t } = useTranslation();
  return (
    <YellowBlock
      role="dialog"
      borderRadius="1.5rem"
      className={styles.playerVsCharacterDialogContainerType2}
    >
      <div className={styles.dialogLeft}>
        <div className={styles.leftLine1}>{t("アイテム")}</div>
        <div className={styles.leftLine2}>{`${cur}／${max}`}</div>
      </div>
      <div className={styles.dialogRight}>
        {maxList.map((num, idx) => (
          <TextWithBorderBottom
            key={idx}
            diameter="1.2rem"
            className={styles.possessionRow}
          >
            {items[idx]?.name}
          </TextWithBorderBottom>
        ))}
      </div>
      <div className={styles.dialogCenterArea}>
        <div>L</div>
        <div>R</div>
      </div>
    </YellowBlock>
  );
}

function MagicBooksPage(props: { playerAttrs: PlayerAttrs }) {
  const { playerAttrs } = props;
  const { magicBooks } = playerAttrs.possession;
  const cur = magicBooks.length;
  const max = jobs[playerAttrs.job].bagSpace.magicBooks;
  const maxList = Array(max).fill(0);
  const { t } = useTranslation();
  return (
    <YellowBlock
      role="dialog"
      borderRadius="1.5rem"
      className={styles.playerVsCharacterDialogContainerType2}
    >
      <div className={styles.dialogLeft}>
        <div className={styles.leftLine1}>{t("魔法")}</div>
        <div className={styles.leftLine2}>{`${cur}／${max}`}</div>
      </div>
      <div className={styles.dialogRight}>
        {maxList.map((num, idx) => (
          <TextWithBorderBottom
            key={idx}
            diameter="1.2rem"
            className={styles.possessionRow}
          >
            {magicBooks[idx]?.name}
          </TextWithBorderBottom>
        ))}
      </div>
      <div className={styles.dialogCenterArea}>
        <div>L</div>
        <div>R</div>
      </div>
    </YellowBlock>
  );
}
