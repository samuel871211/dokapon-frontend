// Related third party imports.
import { Fragment, useContext, useReducer } from "react";
import classNames from "classnames";

// Local application/library specific imports.
import guide from "assets/images/guide.png";
// import ContextMenu from "components/ContextMenu";
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
import { gameProgressContext } from "reducers/gameProgress";
import {
  initUIState,
  UIStateContext,
  UIStateReducer,
} from "reducers/SelectCharacter/UIState";
import styles from "./SelectCharacter.module.css";

// Stateless vars declare.
const basicJobsExplanation = {
  warrior:
    "攻撃力でガンガン行く職業ですぅ。\n物理攻撃が得意ですけど、\n魔力が上がらないので魔法には弱いですぅ。",
  magician:
    "高い魔力でビシビシ行く職業ですぅ。\n魔法攻撃は強力ですけど、\n防御力が上がらないので打たれ弱いですぅ。",
  thief:
    "素早さがピカイチの職業ですぅ。\n素早く攻撃をよけたりしますけど、\n他にこれといった特徴が無いですぅ。",
  cleric:
    "HPが高い職業ですぅ。\n打たれ強さはありますけど、\n素早さが上がらないのでミスしやすいですぅ。",
  beginner:
    "職業にはつかない自由人ですぅ。\n何のメリットもなく、給料ももらえないので、\n生活はキビシイですぅ。",
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
  const { goalType, playersAttrs, currentPlayerNumber } = gameProgress;
  const { currentStep, selectedJob, showSelectCharacter } = UIState;
  const name = playersAttrs[currentPlayerNumber - 1].name;

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
              `第${digitToFullWidth[currentPlayerNumber]}個勇者\n勇者的性別為何？`,
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
                : [basicJobsExplanation[selectedJob]],
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
              `還需要${5 - currentPlayerNumber}個人。`,
              `想詢問第${currentPlayerNumber}位勇者`,
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

  // template
  return (
    <UIStateContext.Provider value={{ UIState, UIStateDispatch }}>
      <div
        className={classNames({
          [styles.container]: true,
          [styles.fadeOut]: !showSelectCharacter,
        })}
      >
        {/* <ContextMenu /> */}
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
