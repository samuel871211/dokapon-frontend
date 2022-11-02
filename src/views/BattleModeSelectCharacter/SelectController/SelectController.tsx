// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import CustomBorderBottom from "components/CustomBorderBottom";
import YellowBlock from "layouts/YellowBlock";
import { newGameProgressContext } from "reducers/newGameProgress";
import styles from "./SelectController.module.css";
import useTranslation from "hooks/useTranslation";
import npcLevelsToJP from "data/npcLevelsToJP";
import classNames from "classnames";

// Stateless vars declare.
const gatherToCenter = [
  styles.gatherToCenter0,
  styles.gatherToCenter1,
  styles.gatherToCenter2,
  styles.gatherToCenter3,
];

const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;

export default SelectController;

function SelectController() {
  const {
    currentPlayerIdx,
    playersAttrs,
    numberOfPlayers,
    shuffleIndexes,
    showOrderNumber,
    showControllerButton,
    showControllerConfirm,
    shouldGatherToCenter,
  } = useMetaData();
  const { t } = useTranslation();
  return (
    <div className={styles.selectControllerContainer}>
      {playersAttrs.map((playerAttrs, playerIdx) => (
        <YellowBlock
          key={playerIdx}
          role="dialog"
          style={{ zIndex: shuffleIndexes[playerIdx] }}
          className={classNames(styles.playerCardContainer, {
            [gatherToCenter[playerIdx]]: shouldGatherToCenter,
          })}
        >
          <div className={styles.orderNumber} data-show={showOrderNumber}>
            {playerIdx}
          </div>
          <img
            src={`${backendBaseUrl}/imgs/${playerAttrs.job}_${playerAttrs.gender}_${playerAttrs.color}_front.png`}
          ></img>
          <div className={styles.nameContainer}>
            <span className={styles.nameArea}>{playerAttrs.name}</span>
            <CustomBorderBottom />
          </div>
          <YellowBlock
            role="dialog"
            borderRadius="9999px"
            className={styles.selectControllerButton}
            data-mimic={false}
            data-show={
              currentPlayerIdx === playerIdx &&
              showControllerButton &&
              numberOfPlayers > playerIdx
            }
            data-valid={playerAttrs.controllerNumber <= 2}
            // 為了讓按鈕hover動畫跟三角形閃爍動畫同步
            // 這邊的selected要常駐
            // 並且下方會有一個模仿元素
            // 沒有選取到的話，就會代替原本的按鈕出現
            selected
          >
            <div
              className={styles.leftTriangle}
              data-show={
                currentPlayerIdx === playerIdx &&
                playerAttrs.controllerNumber !== 1
              }
            ></div>
            <div className={styles.centeredText}>
              {`${t("コントローラ")}${playerAttrs.controllerNumber}`}
            </div>
            <div
              className={styles.rightTriangle}
              data-show={
                currentPlayerIdx === playerIdx &&
                playerAttrs.controllerNumber !== 4
              }
            ></div>
          </YellowBlock>
          <YellowBlock
            role="dialog"
            borderRadius="9999px"
            className={styles.selectControllerButton}
            data-mimic={true}
            data-show={
              currentPlayerIdx !== playerIdx &&
              showControllerButton &&
              numberOfPlayers > playerIdx
            }
            data-valid={playerAttrs.controllerNumber <= 2}
          >
            <div className={styles.leftTriangle} data-show={false}></div>
            <div className={styles.centeredText}>
              {`${t("コントローラ")}${playerAttrs.controllerNumber}`}
            </div>
            <div className={styles.rightTriangle} data-show={false}></div>
          </YellowBlock>
          <YellowBlock
            role="dialog"
            borderRadius="9999px"
            className={styles.controllerConfirmContainer}
            data-show={showControllerConfirm}
          >
            {playerAttrs.npcLevel === ""
              ? `${t("コントローラ")}${playerAttrs.controllerNumber}`
              : `${t(npcLevelsToJP[playerAttrs.npcLevel])}`}
          </YellowBlock>
        </YellowBlock>
      ))}
    </div>
  );
}

function useMetaData() {
  const { newGameProgress } = useContext(newGameProgressContext);
  const { playersAttrs, numberOfPlayers, currentPlayerIdx, currentView } =
    newGameProgress;
  if (
    currentView !== "BattleModeSelectCharacter" &&
    currentView !== "StoryModeSelectCharacter"
  )
    throw new Error("currentView is not SelectCharacter");

  const { curComponent, ShuffleOrder } = newGameProgress[currentView];
  const { shuffleIndexes } = ShuffleOrder;
  const showOrderNumber = curComponent === "ShuffleOrderComplete";
  const showControllerButton = curComponent === "SelectController";
  const showControllerConfirm = curComponent === "SelectControllerConfirm";
  const shouldGatherToCenter = curComponent === "ShuffleOrder";
  return {
    currentPlayerIdx,
    playersAttrs,
    numberOfPlayers,
    shuffleIndexes,
    showOrderNumber,
    showControllerButton,
    showControllerConfirm,
    shouldGatherToCenter,
  };
}
