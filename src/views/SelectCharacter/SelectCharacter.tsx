// Related third party imports.
import { Fragment, useContext, useEffect, useReducer } from "react";
import classNames from "classnames";

// Local application/library specific imports.
import guide from "assets/images/guide.png";
import { BASICJOBS } from "graphics/characters";
import ContextMenu from "components/ContextMenu";
import TitleArea from "./TitleArea";
import NPCDialog from "components/NPCDialog";
import NPCTopLeftImgArea from "./NPCTopLeftImgArea";
import SelectGoalType from "./SelectGoalType";
import SelectNumberOfPlayers from "./SelectNumberOfPlayers";
import SelectGender from "./SelectGender";
import SelectColor from "./SelectColor";
import SelectJob from "./SelectJob";
import SelectNPCLevel from "./SelectNPCLevel";
import GoalInputDialog from "./GoalInputDialog";
import NPCGenerateDialog from "./NPCGenerateDialog";
import NameInputDialog from "./NameInputDialog";
import SelectOrderAndController from "./SelectOrderAndController";
import registerWindowResizeEvtHandler from "utils/windowResizeEvtHandler";
import { gameProgressContext } from "reducers/gameProgress";
import { userPreferenceContext } from "reducers/userPreference";
import {
  initUIState,
  UIStateContext,
  UIStateReducer,
} from "reducers/SelectCharacter/UIState";
import styles from "./SelectCharacter.module.css";
import indexStyles from "index.module.css";

// Stateless vars declare.
const aspectRatioStyles = {
  "16:9": indexStyles.wideAspectRatio,
  "4:3": indexStyles.traditionalAspectRatio,
  stretch: indexStyles.stretchAspectRatio,
};
const digitToFullWidth = ["", "１", "２", "３", "４"];

const Components = {
  SelectGoalType: <SelectGoalType />,
  GoalInputDialog: <GoalInputDialog />,
  SelectNumberOfPlayers: <SelectNumberOfPlayers />,
  OnlyOnePlayer: <SelectNumberOfPlayers />,
  SelectGender: <SelectGender />,
  BeforeNameInput: "",
  NameInputDialog: <NameInputDialog />,
  SelectColor: <SelectColor />,
  SelectJob: <SelectJob />,
  BeforeNPCGenerateDialog: "",
  NPCGenerateDialog: <NPCGenerateDialog />,
  SelectNPCLevel: <SelectNPCLevel />,
  PlayerAttrsCollected: <SelectOrderAndController />,
  SelectController: <SelectOrderAndController />,
  SelectControllerConfirm: <SelectOrderAndController />,
  SelectOrderStep1: <SelectOrderAndController />,
  SelectOrderStep2: <SelectOrderAndController />,
  SelectOrderStep3: "",
};

export default SelectCharacter;

function SelectCharacter(): JSX.Element {
  // data
  const { gameProgress } = useContext(gameProgressContext);
  const [UIState, UIStateDispatch] = useReducer(UIStateReducer, initUIState);
  const { userPreference } = useContext(userPreferenceContext);
  const { goalType, playersAttrs, currentPlayer } = gameProgress;
  const { currentStep, selectedJob, showSelectCharacter } = UIState;
  const name = playersAttrs[currentPlayer - 1].name;

  function steps(step: typeof currentStep) {
    switch (step) {
      case "SelectGoalType":
        return {
          title: "自由模式設定",
          npcDialog: {
            messages: ["要選擇什麼遊戲模式呢？"],
            confirmBtnDisplay: false,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: false,
          },
        };
      case "GoalInputDialog":
        return {
          title: "",
          npcDialog: {
            messages: [`請選擇${goalType === "period" ? "期間" : "金額"}`],
            confirmBtnDisplay: false,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: false,
          },
        };
      case "SelectNumberOfPlayers":
        return {
          title: "遊玩人數",
          npcDialog: {
            messages: ["有幾個勇者呢？"],
            confirmBtnDisplay: false,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: false,
          },
        };
      case "OnlyOnePlayer":
        return {
          title: "遊玩人數",
          npcDialog: {
            messages: ["．．．只有１個人喔", "果然是邊緣人啊"],
            confirmBtnDisplay: true,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: true,
          },
        };
      case "SelectGender":
        return {
          title: "性別選擇",
          npcDialog: {
            messages: [
              `第${digitToFullWidth[currentPlayer]}個勇者\n勇者的性別為何？`,
            ],
            confirmBtnDisplay: false,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: false,
          },
        };
      case "BeforeNameInput":
        return {
          title: "",
          npcDialog: {
            messages: ["請教勇者的名字"],
            confirmBtnDisplay: true,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: true,
          },
        };
      case "NameInputDialog":
        return {
          title: "",
          npcDialog: {
            messages: [""],
            confirmBtnDisplay: false,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: false,
          },
        };
      case "SelectColor":
        return {
          title: "顏色選擇",
          npcDialog: {
            messages: [`想詢問${name}\n勇者喜歡什麼顏色`],
            confirmBtnDisplay: false,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: false,
          },
        };
      case "SelectJob":
        return {
          title: "職業選擇",
          npcDialog: {
            messages:
              selectedJob === ""
                ? [`${name}\n勇者偏好什麼職業`]
                : [BASICJOBS[selectedJob].chineseIntro],
            confirmBtnDisplay: false,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: false,
          },
        };
      case "BeforeNPCGenerateDialog":
        return {
          title: "",
          npcDialog: {
            messages: [
              "國王招募的勇者有4人。",
              "換句話說現在還缺少勇者。",
              `還需要${5 - currentPlayer}個人。`,
              `想詢問第${currentPlayer}位勇者`,
            ],
            confirmBtnDisplay: true,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: true,
          },
        };
      case "NPCGenerateDialog":
        return {
          title: "",
          npcDialog: {
            messages: [
              "我們打算招募以下這位勇者\n如果你覺得不喜歡，可以再更改",
            ],
            confirmBtnDisplay: false,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: false,
          },
        };
      case "SelectNPCLevel":
        return {
          title: "強度選擇",
          npcDialog: {
            messages: ["強度要多強呢"],
            confirmBtnDisplay: false,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: false,
          },
        };
      case "PlayerAttrsCollected":
        return {
          title: "",
          npcDialog: {
            messages: ["至此四位勇士都到齊了!"],
            confirmBtnDisplay: true,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: true,
          },
        };
      case "SelectController":
        return {
          title: "",
          npcDialog: {
            messages: ["請決定要使用哪個搖桿!"],
            confirmBtnDisplay: false,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: false,
          },
        };
      case "SelectControllerConfirm":
        return {
          title: "",
          npcDialog: {
            messages: ["這個成員配置可以嗎？"],
            confirmBtnDisplay: false,
            confirmDialogDisplay: true,
            shouldHandleKeyEvent: false,
          },
        };
      case "SelectOrderStep1":
        return {
          title: "",
          npcDialog: {
            messages: ["接著來決定順序吧!"],
            confirmBtnDisplay: false,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: false,
          },
        };
      case "SelectOrderStep2":
        return {
          title: "",
          npcDialog: {
            messages: ["就這麼決定了!"],
            confirmBtnDisplay: true,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: false,
          },
        };
      case "SelectOrderStep3":
        return {
          title: "",
          npcDialog: {
            messages: ["那麼，就帶你去多卡波王國吧!"],
            confirmBtnDisplay: true,
            confirmDialogDisplay: false,
            shouldHandleKeyEvent: true,
          },
        };
    }
  }

  useEffect(registerWindowResizeEvtHandler, []);

  // template
  return (
    <UIStateContext.Provider value={{ UIState, UIStateDispatch }}>
      <div
        className={classNames({
          [styles.container]: true,
          [styles.fadeOut]: !showSelectCharacter,
          [aspectRatioStyles[userPreference.aspectRatio]]: true,
        })}
      >
        <ContextMenu />
        {currentStep === "NameInputDialog" && <NameInputDialog />}

        {currentStep !== "NameInputDialog" && (
          <Fragment>
            <div className={styles.topArea}>
              <div className={styles.topLeftArea}>
                <NPCTopLeftImgArea src={guide} alt="ナビイ" />
              </div>
              <div className={styles.topRightArea}>
                <TitleArea title={steps(currentStep).title} />
                {Components[currentStep]}
              </div>
            </div>
            <div className={styles.bottomArea}>
              <NPCDialog
                name="ナビイ"
                message={steps(currentStep).npcDialog.messages}
                confirmBtnDisplay={
                  steps(currentStep).npcDialog.confirmBtnDisplay
                }
                confirmDialogDisplay={
                  steps(currentStep).npcDialog.confirmDialogDisplay
                }
                shouldHandleKeyEvent={
                  steps(currentStep).npcDialog.shouldHandleKeyEvent
                }
              />
            </div>
          </Fragment>
        )}
      </div>
    </UIStateContext.Provider>
  );
}
