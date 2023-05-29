// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import AttrCircle from "components/AttrCircle";
import { SomeKindOfIcon } from "components/Icons";
import CustomBorderBottom from "components/CustomBorderBottom";
import styles from "./Drawer.module.css";
import useTranslation from "hooks/useTranslation";
import gameProgressCtx from "reducers/gameProgress";
import { PlayerInstance } from "global";
import FullHpBar from "components/FullHpBar";

// Stateless vars declare.
// class Node {
//   public value = 0;
//   public next: Node | undefined = undefined;
//   constructor(value: number) {
//     this.value = value;
//     this.next = undefined;
//   }
// }
// const zero = new Node(0);
// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// zero.next = one;
// one.next = two;
// two.next = three;
// three.next = zero;
const weekToChinese = ["月", "火", "水", "木", "金", "土", "日"];
const weekToEnglish = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;

export default Drawer;

function Drawer() {
  const { t } = useTranslation();
  const {
    selectedIdx,
    currentWeek,
    currentDayOfWeek,
    currentPlayer,
    getNthNextPlayerByCurPlayerIdx,
  } = useMetaData();
  return (
    <div className={styles.drawerContainer}>
      <div className={styles.topLeft}>
        <div className={styles.weeklyInfo}>
          <div>
            <div className={styles.week}>
              <div>week</div>
              <div>{currentWeek}</div>
            </div>
            <div className={styles.activity}>職安休</div>
          </div>
          <div>
            <div className={styles.weekIcon}>
              <div>{weekToChinese[currentDayOfWeek - 1]}</div>
              <div>{weekToEnglish[currentDayOfWeek - 1]}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.topRight}>
        <div className={styles.detailedPlayerInfos}>
          <div>
            <div className={styles.playerImg}>
              <img
                width="100%"
                height="100%"
                src={`${backendBaseUrl}/imgs/${currentPlayer.job}_${currentPlayer.gender}_${currentPlayer.color}_front.png`}
              />
            </div>
            <div className={styles.ranking}>
              <div>
                RANKING
                <span> 2</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className={styles.verticalCircles}>
                <AttrCircle
                  attr="LV"
                  value={currentPlayer.level}
                  fontSize="2rem"
                />
              </div>
              <div className={styles.verticalCircles}>
                <AttrCircle
                  attr="AT"
                  value={currentPlayer.attack.total}
                  fontSize="2rem"
                />
              </div>
            </div>
            <div>
              <div className={styles.playerArea}>
                <div>PLAYER</div>
                <div>{currentPlayer.name}</div>
                <CustomBorderBottom />
              </div>
              <div className={styles.circlesContainer}>
                <div>
                  <AttrCircle
                    attr="DF"
                    value={currentPlayer.defense.total}
                    fontSize="2rem"
                  />
                </div>
                <div>
                  <AttrCircle
                    attr="MG"
                    value={currentPlayer.magic.total}
                    fontSize="2rem"
                  />
                </div>
                <div>
                  <AttrCircle
                    attr="SP"
                    value={currentPlayer.speed.total}
                    fontSize="2rem"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className={styles.moneyArea}>
                <div>MONEY</div>
                <div>{currentPlayer.possession.money.toLocaleString()}</div>
                <CustomBorderBottom />
              </div>
              <div className={styles.hpArea}>
                <div style={{ width: "85%", height: "80%" }}>
                  <FullHpBar hp={currentPlayer.hp} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomLeft}>
        <FloatingActionBtn selected={selectedIdx === 0}>
          {t("移動")}
        </FloatingActionBtn>
        <FloatingActionBtn selected={selectedIdx === 1}>
          {t("カバン")}
        </FloatingActionBtn>
        <FloatingActionBtn selected={selectedIdx === 2}>
          {t("チェック")}
        </FloatingActionBtn>
        <FloatingActionBtn selected={selectedIdx === 3}>
          {t("特技")}
        </FloatingActionBtn>
        <FloatingActionBtn selected={selectedIdx === 4}>
          {t("データ")}
        </FloatingActionBtn>
      </div>
      <div className={styles.bottomRight}>
        <BriefPlayerInfos playerAttrs={getNthNextPlayerByCurPlayerIdx(1)} />
        <BriefPlayerInfos playerAttrs={getNthNextPlayerByCurPlayerIdx(2)} />
        <BriefPlayerInfos playerAttrs={getNthNextPlayerByCurPlayerIdx(3)} />
      </div>
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const {
    DokaponTheWorldState,
    currentWeek,
    currentDayOfWeek,
    currentPlayerIdx,
    players,
  } = gameProgress;
  const currentPlayer = players[currentPlayerIdx];
  const { selectedIdx } = DokaponTheWorldState.DrawerState;
  function getNthNextPlayerByCurPlayerIdx(n: 1 | 2 | 3) {
    if (n === 1) return players[currentPlayerIdx + 1] || players[0];
    if (n === 2 && currentPlayerIdx <= 1) return players[currentPlayerIdx + 2];
    if (n === 2 && currentPlayerIdx >= 2) return players[currentPlayerIdx - 2];
    if (n === 3 && currentPlayerIdx === 0) return players[currentPlayerIdx + 3];
    if (n === 3 && currentPlayerIdx > 0) return players[currentPlayerIdx - 1];
    return players[0];
  }
  return {
    selectedIdx,
    currentWeek,
    currentDayOfWeek,
    currentPlayer,
    getNthNextPlayerByCurPlayerIdx,
  };
}

function FloatingActionBtn(props: { selected: boolean; children: string }) {
  const { selected, children } = props;
  return (
    <div className={styles.floatingActionBtn}>
      <div>
        <SomeKindOfIcon />
      </div>
      <div style={{ opacity: selected ? 1 : 0 }}>
        <div>{children}</div>
      </div>
    </div>
  );
}

function BriefPlayerInfos(props: { playerAttrs: PlayerInstance }) {
  const { playerAttrs } = props;
  return (
    <div className={styles.briefPlayerInfos}>
      <div>
        <img
          width="100%"
          height="100%"
          src={`${backendBaseUrl}/imgs/${playerAttrs.job}_${playerAttrs.gender}_${playerAttrs.color}_front.png`}
        />
      </div>
      <div>
        <div>
          <div className={styles.level}>
            <AttrCircle attr="LV" value={playerAttrs.level} fontSize="1.6rem" />
          </div>
          <div className={styles.nameArea}>
            <div>{playerAttrs.name}</div>
            <CustomBorderBottom />
          </div>
        </div>
        <div>
          <div className={styles.briefHPArea}>
            <div>HP</div>
            <div
              className={styles.hpBar}
              style={{
                width: `${
                  (playerAttrs.hp.current / playerAttrs.hp.total) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
