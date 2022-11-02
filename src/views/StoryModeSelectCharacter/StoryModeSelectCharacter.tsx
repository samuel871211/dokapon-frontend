// Related third party imports.
import { KeyboardEvent, useContext, useEffect, useRef, useMemo } from "react";

// Local application/library specific imports.
import NameInputDialog from "../BattleModeSelectCharacter/NameInputDialog";
import NPCGenerateDialog from "../BattleModeSelectCharacter/NPCGenerateDialog";
import SelectColor from "../BattleModeSelectCharacter/SelectColor";
import SelectController from "../BattleModeSelectCharacter/SelectController";
import SelectGender from "../BattleModeSelectCharacter/SelectGender";
import SelectJob from "../BattleModeSelectCharacter/SelectJob";
import SelectNumberOfPlayers from "../BattleModeSelectCharacter/SelectNumberOfPlayers";
import ThereShouldBeFourPlayers from "../BattleModeSelectCharacter/ThereShouldBeFourPlayers";
import SelectNPCLevel from "../BattleModeSelectCharacter/SelectNPCLevel";
import YellowBlock from "layouts/YellowBlock";
import BottomDialog from "components/BottomDialog";

import useTranslation from "hooks/useTranslation";
import guide from "assets/images/guide.png";
import topAreaStyles from "../BattleModeSelectCharacter/TopArea/TopArea.module.css";
import styles from "./StoryModeSelectCharacter.module.css";
import { newGameProgressContext } from "reducers/newGameProgress";
import type {
  BasicJobTypes,
  BottomDialogProps,
  StoryModeSelectCharacterComponentTypes,
} from "global";
import nameInputChars from "data/nameInputChars";
import colors from "data/colors";
import npcLevels from "data/npcLevels";
import { basicJobs } from "data/jobs";
import { TextsKeys } from "data/texts";
import { basicGenders } from "data/genders";
import { nameInputCharList } from "data/nameInputChars";
import { getRandomIntInclusive } from "utils/math";

// Stateless vars declare.
const emptyWord = "　";
const defaultGoalInput = 1;
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;
const basicJobsDescriptions: { [key in BasicJobTypes]: TextsKeys } = {
  warrior:
    "攻撃力でガンガン行く職業ですぅ。\n物理攻撃が得意ですけど、\n魔力が上がらないので魔法には弱いですぅ。",
  magician:
    "高い魔力でビシビシ行く職業ですぅ。\n魔法攻撃は強力ですけど、\n防御力が上がらないので打たれ弱いですぅ。",
  thief:
    "素早さがピカイチの職業ですぅ。\n素早く攻撃をよけたりしますけど、\n他にこれといった特徴が無いですぅ。",
  beginner:
    "職業にはつかない自由人ですぅ。\n何のメリットもなく、給料ももらえないので、\n生活はキビシイですぅ。",
  cleric:
    "HPが高い職業ですぅ。\n打たれ強さはありますけど、\n素早さが上がらないのでミスしやすいですぅ。",
};
/**
 * TextsKeys若有包含{variable}，會在進入`bottomDialogSentencesQueue`的時候做轉換
 */
const bottomDialogTexts: {
  [key in StoryModeSelectCharacterComponentTypes]: TextsKeys[];
} = {
  SelectNumberOfPlayers: ["勇者様は何人いるんですか?"],
  OnlyOnePlayer: ["⋯一人ぼっちですか。", "さみしいですね⋯。"],
  SelectGender: ["{playerNumber}人目の勇者様。\n勇者様の性別は何ですか?"],
  AskForName: ["勇者様の名前を教えてください。"],
  NameInputDialog: [],
  SelectColor: [
    `それでは{name}様にお聞きしますぅ。\n勇者様は何色がお好きですか?`,
  ],
  SelectJob: ["{name}様。\n勇者様はどの職業につきますか?"],
  ThereShouldBeFourPlayers: [
    "王様が募集している勇者様は4人ですぅ。",
    "ということは勇者様が足りません。",
    "あと{remainPlayerCount}人必要ですぅ。",
  ],
  AskForNthNPC: ["{playerNumber}人目の勇者様についてお聞きしますぅ。"],
  NPCGenerateDialog: [
    "こんな方を募集します。\n気に入らない場所があったら直してください。",
  ],
  SelectNPCLevel: ["強さはどのくらいの人がよろしいですか?"],
  SelectNPCColor: ["どんな色の人がよろしいですか?"],
  SelectNPCGender: ["男女どちらがお好みですか?"],
  SelectNPCJob: ["どんな職業の人がよろしいですか?"],
  FourPlayersGenerated: [
    "分かりました!",
    "それでは探してきますう!",
    "勇者様~!",
    "これで4人の勇者様が全員そろいました!",
  ],
  SelectController: ["使うコントローラを決めてください!"],
  SelectControllerConfirm: ["このメンバーでよろしいですね?"],
  ShuffleOrder: ["それでは順番を決めますう!"],
  ShuffleOrderComplete: ["以上のように決まりました!"],
  TakePlayerToDokaponTheWorld: [
    "それでは、みなさんを\nドカポン王国にご案内しますう。",
    "でも、みなさん自身が次元の壁を\n越えることはできません。",
    "なので、魔法を使って心の一部だけ、\nこちらの次元に連れてきますう。",
    "それでは行きますよー!",
    "えーいっ!",
    "ドカっと一発勇者でポーンっ!",
  ],
};
const StepsProps: {
  [key in StoryModeSelectCharacterComponentTypes]: {
    /**
     * 目前只有`NameInputDialog`會需要把這個隱藏
     */
    showTopArea: boolean;
    /**
     * 如果為空字串，則`TopRightTitleArea`就會隱藏
     */
    topRightTitle: TextsKeys;
    /**
     * 目前只有`SelectColor`, `SelectJob`, `SelectNPCJob`, `SelectNPCColor`會顯示
     */
    showTopRightImg: boolean;
    Component: () => JSX.Element;
    bottomDialogProps: BottomDialogProps;
  };
} = {
  SelectNumberOfPlayers: {
    showTopArea: true,
    topRightTitle: "プレイヤ一人数",
    showTopRightImg: false,
    Component: SelectNumberOfPlayers,
    bottomDialogProps: {
      show: true,
    },
  },
  OnlyOnePlayer: {
    showTopArea: true,
    topRightTitle: "プレイヤ一人数",
    showTopRightImg: false,
    /**
     * 如果只有選擇一人遊玩的話，NPC會吐槽你兩句
     *
     * 但上一個Component不會消失
     */
    Component: SelectNumberOfPlayers,
    bottomDialogProps: {
      show: true,
      showConfirmCircle: true,
    },
  },
  SelectGender: {
    showTopArea: true,
    topRightTitle: "性別選択",
    showTopRightImg: false,
    Component: SelectGender,
    bottomDialogProps: {
      show: true,
    },
  },
  AskForName: {
    showTopArea: true,
    topRightTitle: "",
    showTopRightImg: false,
    Component: () => <></>,
    bottomDialogProps: {
      show: true,
      showConfirmCircle: true,
    },
  },
  NameInputDialog: {
    showTopArea: false,
    topRightTitle: "",
    showTopRightImg: false,
    Component: NameInputDialog,
    bottomDialogProps: {
      show: false,
    },
  },
  SelectColor: {
    showTopArea: true,
    topRightTitle: "色選択",
    showTopRightImg: true,
    Component: SelectColor,
    bottomDialogProps: {
      show: true,
    },
  },
  SelectJob: {
    showTopArea: true,
    topRightTitle: "職業選択",
    showTopRightImg: true,
    Component: SelectJob,
    bottomDialogProps: {
      show: true,
    },
  },
  ThereShouldBeFourPlayers: {
    showTopArea: true,
    topRightTitle: "",
    showTopRightImg: false,
    Component: ThereShouldBeFourPlayers,
    bottomDialogProps: {
      show: true,
      showConfirmCircle: true,
    },
  },
  AskForNthNPC: {
    showTopArea: true,
    topRightTitle: "",
    showTopRightImg: false,
    Component: () => <></>,
    bottomDialogProps: {
      show: true,
      showConfirmCircle: true,
    },
  },
  NPCGenerateDialog: {
    showTopArea: true,
    topRightTitle: "",
    showTopRightImg: false,
    Component: NPCGenerateDialog,
    bottomDialogProps: {
      show: true,
    },
  },
  SelectNPCLevel: {
    showTopArea: true,
    topRightTitle: "強さ選択",
    showTopRightImg: false,
    Component: SelectNPCLevel,
    bottomDialogProps: {
      show: true,
    },
  },
  SelectNPCGender: {
    showTopArea: true,
    topRightTitle: "性別選択",
    showTopRightImg: false,
    Component: SelectGender,
    bottomDialogProps: {
      show: true,
    },
  },
  SelectNPCColor: {
    showTopArea: true,
    topRightTitle: "色選択",
    showTopRightImg: true,
    Component: SelectColor,
    bottomDialogProps: {
      show: true,
    },
  },
  SelectNPCJob: {
    showTopArea: true,
    topRightTitle: "職業選択",
    showTopRightImg: true,
    Component: SelectJob,
    bottomDialogProps: {
      show: true,
    },
  },
  FourPlayersGenerated: {
    showTopArea: true,
    topRightTitle: "",
    showTopRightImg: false,
    Component: SelectController,
    bottomDialogProps: {
      show: true,
      showConfirmCircle: true,
    },
  },
  SelectController: {
    showTopArea: true,
    topRightTitle: "",
    showTopRightImg: false,
    Component: SelectController,
    bottomDialogProps: {
      show: true,
    },
  },
  SelectControllerConfirm: {
    showTopArea: true,
    topRightTitle: "",
    showTopRightImg: false,
    Component: SelectController,
    bottomDialogProps: {
      show: true,
      showConfirmDialog: true,
    },
  },
  ShuffleOrder: {
    showTopArea: true,
    topRightTitle: "",
    showTopRightImg: false,
    Component: SelectController,
    bottomDialogProps: {
      show: true,
    },
  },
  ShuffleOrderComplete: {
    showTopArea: true,
    topRightTitle: "",
    showTopRightImg: false,
    Component: SelectController,
    bottomDialogProps: {
      show: true,
      showConfirmCircle: true,
    },
  },
  TakePlayerToDokaponTheWorld: {
    showTopArea: true,
    topRightTitle: "",
    showTopRightImg: false,
    Component: () => <></>,
    bottomDialogProps: {
      show: true,
      showConfirmCircle: true,
    },
  },
};

export default StoryModeSelectCharacter;

function StoryModeSelectCharacter() {
  const { containerRefEl, handleKeyUp, curComponent, exampleCharacterImgSrc } =
    useMetaData();
  const {
    showTopArea,
    showTopRightImg,
    topRightTitle,
    Component,
    bottomDialogProps,
  } = StepsProps[curComponent];
  const showTopRightTitleArea = topRightTitle !== "";
  const { t } = useTranslation();
  return (
    <div
      className={styles.battleModeSelectCharacter}
      tabIndex={0}
      onBlur={(e) => e.currentTarget.focus()}
      onKeyUp={handleKeyUp}
      ref={containerRefEl}
    >
      <div className={topAreaStyles.topArea} data-show={showTopArea}>
        <div className={topAreaStyles.topLeftArea}>
          <div className={topAreaStyles.topLeftImgContainer}>
            <img src={guide} alt={t("ナビイ")} width="100%"></img>
          </div>
        </div>
        <div className={topAreaStyles.topRightArea}>
          <div
            className={topAreaStyles.topRightTitleArea}
            data-show={showTopRightTitleArea}
          >
            <YellowBlock
              role="title"
              className={topAreaStyles.topRightTitle}
              borderRadius="9999px"
            >
              {t(topRightTitle)}
            </YellowBlock>
          </div>
          <div
            className={topAreaStyles.topRightContentArea}
            data-flex={showTopRightImg}
          >
            <div
              className={topAreaStyles.exampleImgContainer}
              data-show={showTopRightImg}
            >
              <img
                alt="example character image"
                src={exampleCharacterImgSrc}
                width="100%"
              ></img>
            </div>
            <Component />
          </div>
        </div>
      </div>
      <BottomDialog name={t("ナビイ")} {...bottomDialogProps}></BottomDialog>
      {!showTopArea && <Component />}
    </div>
  );
}

function useMetaData() {
  const { t } = useTranslation();
  const containerRefEl = useRef<HTMLDivElement>(null);
  const { newGameProgress, setNewGameProgress } = useContext(
    newGameProgressContext
  );
  const {
    isHoverOnConfirm,
    numberOfPlayers,
    gamePadSetting,
    StoryModeSelectCharacter,
    currentPlayerIdx,
    playersAttrs,
    bottomDialogSentencesQueue,
  } = newGameProgress;
  /**
   * 搖桿的 O, X, 正方形, 三角形
   */
  const mainFourKeys = [
    gamePadSetting.circle,
    gamePadSetting.cross,
    gamePadSetting.triangle,
    gamePadSetting.square,
  ];
  const currentPlayer = playersAttrs[currentPlayerIdx];
  const exampleCharacterImgSrc =
    backendBaseUrl +
    "/imgs/" +
    `${currentPlayer.job}_` +
    `${currentPlayer.gender}_` +
    `${currentPlayer.color}_` +
    "front.png";
  const {
    curComponent,
    NameInputDialog,
    NPCGenerateDialog,
    SelectNPCColor,
    SelectNPCJob,
    SelectNPCGender,
    SelectNPCLevel,
    ShuffleOrder,
  } = StoryModeSelectCharacter;
  /**
   * 根據`playersAttrs`跟`currentPlayerIdx`的變動，重新計算剩餘可用的顏色
   */
  const remainColors = useMemo(() => {
    const usedColors = playersAttrs
      .slice(0, currentPlayerIdx)
      .map((playerAttrs) => playerAttrs.color);
    return colors.filter((color) => !usedColors.includes(color));
  }, [playersAttrs, currentPlayerIdx]);
  function handleKeyUp(e: KeyboardEvent<HTMLDivElement>) {
    switch (curComponent) {
      case "SelectNumberOfPlayers":
        return handleSelectNumberOfPlayers(e);
      case "OnlyOnePlayer":
        return handleOnlyOnePlayer(e);
      case "SelectGender":
        return handleSelectGender(e);
      case "AskForName":
        return handleAskForName(e);
      case "NameInputDialog":
        return handleNameInputDialog(e);
      case "SelectColor":
        return handleSelectColor(e);
      case "SelectJob":
        return handleSelectJob(e);
      case "ThereShouldBeFourPlayers":
        return handleThereShouldBeFourPlayers(e);
      case "AskForNthNPC":
        return handleAskForNthNPC(e);
      case "NPCGenerateDialog":
        return handleNPCGenerateDialog(e);
      case "SelectNPCLevel":
        return handleSelectNPCLevel(e);
      case "SelectNPCGender":
        return handleSelectNPCGender(e);
      case "SelectNPCColor":
        return handleSelectNPCColor(e);
      case "SelectNPCJob":
        return handleSelectNPCJob(e);
      case "FourPlayersGenerated":
        return handleFourPlayersGenerated(e);
      case "SelectController":
        return handleSelectController(e);
      case "SelectControllerConfirm":
        return handleSelectControllerConfirm(e);
      case "ShuffleOrder":
        return handleShuffleOrder(e);
      case "ShuffleOrderComplete":
        return handleShuffleOrderComplete(e);
      case "TakePlayerToDokaponTheWorld":
        return handleTakePlayerToDokaponTheWorld(e);
      default:
        /**
         * 滑鼠hover上去，型別應該要是`never`，才代表所有case都有涵蓋到
         */
        curComponent;
    }
  }
  function handleSelectNumberOfPlayers(e: KeyboardEvent<HTMLDivElement>) {
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        newGameProgress.numberOfPlayers =
          numberOfPlayers === 1 ? 4 : numberOfPlayers - 1;
        break;
      case gamePadSetting.arrowDown:
        newGameProgress.numberOfPlayers =
          numberOfPlayers === 4 ? 1 : numberOfPlayers + 1;
        break;
      case gamePadSetting.circle:
        StoryModeSelectCharacter.curComponent =
          numberOfPlayers === 1 ? "OnlyOnePlayer" : "SelectGender";

        // 重新assign每個玩家的isNPC
        playersAttrs.forEach((playerAttrs, playerIdx) => {
          const isNPC = playerIdx >= numberOfPlayers;
          playerAttrs.isNPC = isNPC;
          playerAttrs.npcLevel = isNPC ? "weak" : "";
        });
        break;
    }
    setNewGameProgress({ ...newGameProgress });
  }
  function handleOnlyOnePlayer(e: KeyboardEvent<HTMLDivElement>) {
    const isMainFourKeys = mainFourKeys.includes(e.key.toLowerCase());
    if (!isMainFourKeys) return;
    bottomDialogSentencesQueue.shift();
    if (bottomDialogSentencesQueue.length === 0) {
      StoryModeSelectCharacter.curComponent = "SelectGender";
    }
    setNewGameProgress({ ...newGameProgress });
  }
  function handleSelectGender(e: KeyboardEvent<HTMLDivElement>) {
    const { gender: curGender } = currentPlayer;
    const isFirstPlayer = currentPlayerIdx === 0;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowRight:
      case gamePadSetting.arrowLeft:
        currentPlayer.gender = curGender === "male" ? "female" : "male";
        break;
      case gamePadSetting.cross:
        StoryModeSelectCharacter.curComponent = isFirstPlayer
          ? "SelectNumberOfPlayers"
          : "SelectJob";
        newGameProgress.currentPlayerIdx = isFirstPlayer
          ? 0
          : currentPlayerIdx - 1;
        break;
      case gamePadSetting.circle:
        StoryModeSelectCharacter.curComponent = "AskForName";
        break;
    }
    setNewGameProgress({ ...newGameProgress });
  }
  function handleAskForName(e: KeyboardEvent<HTMLDivElement>) {
    const isMainFourKeys = mainFourKeys.includes(e.key.toLowerCase());
    if (!isMainFourKeys) return;

    StoryModeSelectCharacter.curComponent = "NameInputDialog";
    const { name: curName } = currentPlayer;

    // reset NameInputDialog previous player UI State
    NameInputDialog.keyboardType = "hiragana";
    NameInputDialog.selectedSectionIdx = 0;
    NameInputDialog.selectedWordIdx = 0;
    NameInputDialog.curNameInputIdx =
      curName.length === 0 ? 0 : curName.length - 1;
    NameInputDialog.nameInputArray = curName.padEnd(8, emptyWord).split("");

    setNewGameProgress({ ...newGameProgress });
  }
  function handleNameInputDialog(e: KeyboardEvent<HTMLDivElement>) {
    const {
      nameInputArray,
      curNameInputIdx,
      selectedSectionIdx,
      selectedWordIdx,
      keyboardType,
    } = NameInputDialog;
    const isKeySection = selectedSectionIdx === 0 || selectedSectionIdx === 1;
    const isMenuSection = selectedSectionIdx === 2;
    const isReachingTop =
      (isKeySection && selectedWordIdx >= 0 && selectedWordIdx <= 4) ||
      (isMenuSection && selectedWordIdx === 0);
    const isReachingEnd =
      (isKeySection && selectedWordIdx >= 40 && selectedWordIdx <= 44) ||
      (isMenuSection && selectedWordIdx === 8);
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        if (isKeySection) {
          NameInputDialog.selectedWordIdx = isReachingTop
            ? selectedWordIdx + 40
            : selectedWordIdx - 5;
        } else if (isMenuSection) {
          NameInputDialog.selectedWordIdx = isReachingTop
            ? 8
            : selectedWordIdx - 1;
        }
        setNewGameProgress({ ...newGameProgress });
        return;
      case gamePadSetting.arrowDown:
        if (isKeySection) {
          NameInputDialog.selectedWordIdx = isReachingEnd
            ? selectedWordIdx - 40
            : selectedWordIdx + 5;
        } else if (isMenuSection) {
          NameInputDialog.selectedWordIdx = isReachingEnd
            ? 0
            : selectedWordIdx + 1;
        }
        setNewGameProgress({ ...newGameProgress });
        return;
      case gamePadSetting.arrowLeft:
        switch (selectedSectionIdx) {
          case 0:
            if (selectedWordIdx % 5 === 0) {
              NameInputDialog.selectedSectionIdx = 2;
              NameInputDialog.selectedWordIdx = Math.floor(selectedWordIdx / 5);
            } else if (selectedWordIdx % 5 !== 0) {
              NameInputDialog.selectedWordIdx = selectedWordIdx - 1;
            }
            setNewGameProgress({ ...newGameProgress });
            return;
          case 1:
            if (selectedWordIdx % 5 === 0) {
              NameInputDialog.selectedSectionIdx = 0;
              NameInputDialog.selectedWordIdx = selectedWordIdx + 4;
            } else if (selectedWordIdx % 5 !== 0) {
              NameInputDialog.selectedWordIdx = selectedWordIdx - 1;
            }
            setNewGameProgress({ ...newGameProgress });
            return;
          case 2:
            NameInputDialog.selectedSectionIdx = 1;
            NameInputDialog.selectedWordIdx = selectedWordIdx * 5 + 4;
            setNewGameProgress({ ...newGameProgress });
            return;
        }
        return;
      case gamePadSetting.arrowRight:
        switch (selectedSectionIdx) {
          case 0:
            if (selectedWordIdx % 5 === 4) {
              NameInputDialog.selectedSectionIdx = 1;
              NameInputDialog.selectedWordIdx = selectedWordIdx - 4;
            } else if (selectedWordIdx % 5 !== 4) {
              NameInputDialog.selectedWordIdx = selectedWordIdx + 1;
            }
            setNewGameProgress({ ...newGameProgress });
            return;
          case 1:
            if (selectedWordIdx % 5 === 4) {
              NameInputDialog.selectedSectionIdx = 2;
              NameInputDialog.selectedWordIdx = Math.floor(selectedWordIdx / 5);
            } else if (selectedWordIdx % 5 !== 4) {
              NameInputDialog.selectedWordIdx = selectedWordIdx + 1;
            }
            setNewGameProgress({ ...newGameProgress });
            return;
          case 2:
            NameInputDialog.selectedSectionIdx = 0;
            NameInputDialog.selectedWordIdx = selectedWordIdx * 5;
            setNewGameProgress({ ...newGameProgress });
            return;
        }
        return;
      case gamePadSetting.circle:
        switch (selectedSectionIdx) {
          case 0:
          case 1: {
            const keyboardKeys = nameInputChars[keyboardType];
            const keyboardSection = keyboardKeys[selectedSectionIdx];
            const keyboardWord = keyboardSection[selectedWordIdx];
            // 有些keyboardKey會是空字串，但一樣可以hover上去，只是按了沒反應
            if (keyboardWord === emptyWord) return;

            // replace/add word to current idx
            const newNameInputArray = [...nameInputArray];
            newNameInputArray[curNameInputIdx] = keyboardWord;
            NameInputDialog.nameInputArray = newNameInputArray;

            if (curNameInputIdx === 7) {
              // focus to 'ＯＫ' when input complete
              NameInputDialog.selectedSectionIdx = 2;
              NameInputDialog.selectedWordIdx = 8;
            } else {
              // otherwise, focus to next idx
              NameInputDialog.curNameInputIdx = curNameInputIdx + 1;
            }
            setNewGameProgress({ ...newGameProgress });
            return;
          }
          case 2: {
            const word = nameInputChars.menu[selectedWordIdx];
            switch (word) {
              case "平假名":
                NameInputDialog.keyboardType = "hiragana";
                break;
              case "片假名":
                NameInputDialog.keyboardType = "katakana";
                break;
              case "ＡＢＣ":
                NameInputDialog.keyboardType = "special";
                break;
              case "前進":
                NameInputDialog.curNameInputIdx =
                  curNameInputIdx === 7 ? 7 : curNameInputIdx + 1;
                break;
              case "後退":
                NameInputDialog.curNameInputIdx =
                  curNameInputIdx === 0 ? 0 : curNameInputIdx - 1;
                break;
              case "刪除":
                if (nameInputArray[curNameInputIdx] !== emptyWord) {
                  const newNameInputArray = [...nameInputArray];
                  for (let idx = 7; idx >= curNameInputIdx; idx--) {
                    if (newNameInputArray[idx] !== emptyWord) {
                      newNameInputArray[idx] = emptyWord;
                      NameInputDialog.nameInputArray = newNameInputArray;
                      break;
                    }
                  }
                  break;
                }
                NameInputDialog.curNameInputIdx =
                  curNameInputIdx === 0 ? 0 : curNameInputIdx - 1;
                break;
              case "ＯＫ": {
                const emptyWords = nameInputArray.filter(
                  (word) => word === emptyWord
                );
                if (emptyWords.length === nameInputArray.length) break;
                currentPlayer.name = nameInputArray.join("").trim();
                StoryModeSelectCharacter.curComponent = "SelectColor";
                currentPlayer.color = remainColors[0];
                break;
              }
              default:
                break;
            }
            setNewGameProgress({ ...newGameProgress });
            return;
          }
        }
        break;
      case gamePadSetting.cross: {
        const hasWordToDelete = nameInputArray[curNameInputIdx] !== emptyWord;
        const isAtStartIndex = curNameInputIdx === 0;

        if (hasWordToDelete) {
          nameInputArray[curNameInputIdx] = emptyWord;
          NameInputDialog.nameInputArray = [...nameInputArray];
        }

        if (isAtStartIndex && !hasWordToDelete) {
          StoryModeSelectCharacter.curComponent = "SelectGender";
        }

        if (!isAtStartIndex && !hasWordToDelete) {
          NameInputDialog.curNameInputIdx = curNameInputIdx - 1;
        }

        setNewGameProgress({ ...newGameProgress });
        return;
      }
    }
  }
  function handleSelectColor(e: KeyboardEvent<HTMLDivElement>) {
    let curColorIdx = remainColors.indexOf(currentPlayer.color);
    // 如果是不合法的顏色，就先強制改成正確的
    if (curColorIdx === -1) {
      curColorIdx = 0;
      currentPlayer.color = remainColors[0];
    }
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        curColorIdx =
          curColorIdx === 0 ? remainColors.length - 1 : curColorIdx - 1;
        currentPlayer.color = remainColors[curColorIdx];
        break;
      case gamePadSetting.arrowDown:
        curColorIdx =
          curColorIdx === remainColors.length - 1 ? 0 : curColorIdx + 1;
        currentPlayer.color = remainColors[curColorIdx];
        break;
      case gamePadSetting.circle:
        StoryModeSelectCharacter.curComponent = "SelectJob";
        break;
      case gamePadSetting.cross:
        StoryModeSelectCharacter.curComponent = "AskForName";
        break;
    }
    setNewGameProgress({ ...newGameProgress });
  }
  function handleSelectJob(e: KeyboardEvent<HTMLDivElement>) {
    const isFourPlayersGenerated = currentPlayerIdx === 3;
    const isNextPlayerNPC =
      !isFourPlayersGenerated && currentPlayerIdx + 1 >= numberOfPlayers;
    const isNextPlayerReal = !isNextPlayerNPC && !isFourPlayersGenerated;
    let curJobIdx = basicJobs.indexOf(currentPlayer.job);
    // 如果是不合法的職業，就先強制改成正確的
    if (curJobIdx === -1) {
      currentPlayer.job = basicJobs[0];
      curJobIdx = 0;
    }
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        curJobIdx = curJobIdx === 0 ? basicJobs.length - 1 : curJobIdx - 1;
        currentPlayer.job = basicJobs[curJobIdx];
        bottomDialogSentencesQueue.length = 0;
        bottomDialogSentencesQueue.push(
          t(basicJobsDescriptions[basicJobs[curJobIdx] as BasicJobTypes])
        );
        break;
      case gamePadSetting.arrowDown:
        curJobIdx = curJobIdx === basicJobs.length - 1 ? 0 : curJobIdx + 1;
        currentPlayer.job = basicJobs[curJobIdx];
        bottomDialogSentencesQueue.length = 0;
        bottomDialogSentencesQueue.push(
          t(basicJobsDescriptions[currentPlayer.job as BasicJobTypes])
        );
        break;
      case gamePadSetting.circle: {
        if (isNextPlayerNPC) {
          StoryModeSelectCharacter.curComponent = "ThereShouldBeFourPlayers";
          newGameProgress.currentPlayerIdx = currentPlayerIdx + 1;
        } else if (isNextPlayerReal) {
          StoryModeSelectCharacter.curComponent = "SelectGender";
          newGameProgress.currentPlayerIdx = currentPlayerIdx + 1;
        } else if (isFourPlayersGenerated) {
          StoryModeSelectCharacter.curComponent = "FourPlayersGenerated";
        }
        break;
      }
      case gamePadSetting.cross:
        StoryModeSelectCharacter.curComponent = "SelectColor";
        break;
    }
    setNewGameProgress({ ...newGameProgress });
    return;
  }
  function handleThereShouldBeFourPlayers(e: KeyboardEvent<HTMLDivElement>) {
    const isMainFourKeys = mainFourKeys.includes(e.key.toLowerCase());
    if (!isMainFourKeys) return;

    bottomDialogSentencesQueue.shift();
    if (bottomDialogSentencesQueue.length === 0) {
      StoryModeSelectCharacter.curComponent = "AskForNthNPC";
    }
    setNewGameProgress({ ...newGameProgress });
  }
  function handleAskForNthNPC(e: KeyboardEvent<HTMLDivElement>) {
    StoryModeSelectCharacter.curComponent = "NPCGenerateDialog";

    // shuffle nth NPC player
    const npcPlayer = playersAttrs[currentPlayerIdx];
    if (!npcPlayer) throw new Error("npcPlayer not exist");
    if (!npcPlayer.isNPC) throw new Error("npcPlayer is not NPC");

    const newColorIdx = getRandomIntInclusive(0, remainColors.length - 1);
    const newJobIdx = getRandomIntInclusive(0, basicJobs.length - 1);
    const newNPCLevelIdx = getRandomIntInclusive(0, npcLevels.length - 1);
    const newGenderIdx = getRandomIntInclusive(0, basicGenders.length - 1);
    const newNameIdx = getRandomIntInclusive(0, nameInputCharList.length - 1);

    npcPlayer.color = remainColors[newColorIdx];
    npcPlayer.job = basicJobs[newJobIdx];
    npcPlayer.npcLevel = npcLevels[newNPCLevelIdx];
    npcPlayer.gender = basicGenders[newGenderIdx];
    npcPlayer.name = nameInputCharList[newNameIdx];

    SelectNPCLevel.prevSelectedNPCLevel = npcLevels[newNPCLevelIdx];
    SelectNPCColor.prevSelectedColor = remainColors[newColorIdx];
    SelectNPCGender.prevSelectedGender = basicGenders[newGenderIdx];
    SelectNPCJob.prevSelectedJob = basicJobs[newJobIdx];

    setNewGameProgress({ ...newGameProgress });
  }
  function handleNPCGenerateDialog(e: KeyboardEvent<HTMLDivElement>) {
    if (!currentPlayer.isNPC) throw new Error("currentPlayer is not NPC");

    const { selectedIdx } = NPCGenerateDialog;
    const isPrevPlayerNPC =
      numberOfPlayers <= 2 && numberOfPlayers <= currentPlayerIdx - 1;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        NPCGenerateDialog.selectedIdx = selectedIdx === 0 ? 4 : selectedIdx - 1;
        break;
      case gamePadSetting.arrowDown:
        NPCGenerateDialog.selectedIdx = selectedIdx === 4 ? 0 : selectedIdx + 1;
        break;
      case gamePadSetting.circle: {
        const ButtonStepMapping: StoryModeSelectCharacterComponentTypes[] = [
          "SelectNPCLevel",
          "SelectNPCGender",
          "SelectNPCColor",
          "SelectNPCJob",
          currentPlayerIdx === 3 ? "FourPlayersGenerated" : "AskForNthNPC",
        ];
        StoryModeSelectCharacter.curComponent = ButtonStepMapping[selectedIdx];
        SelectNPCGender.prevSelectedGender = currentPlayer.gender;
        SelectNPCColor.prevSelectedColor = currentPlayer.color;
        SelectNPCJob.prevSelectedJob = currentPlayer.job;
        SelectNPCLevel.prevSelectedNPCLevel = currentPlayer.npcLevel;
        if (currentPlayerIdx !== 3 && selectedIdx === 4)
          newGameProgress.currentPlayerIdx = currentPlayerIdx + 1;
        break;
      }
      case gamePadSetting.cross:
        StoryModeSelectCharacter.curComponent = isPrevPlayerNPC
          ? "AskForNthNPC"
          : "SelectJob";
        newGameProgress.currentPlayerIdx = currentPlayerIdx - 1;
        break;
    }
    setNewGameProgress({ ...newGameProgress });
  }
  function handleSelectNPCLevel(e: KeyboardEvent<HTMLDivElement>) {
    if (currentPlayer.npcLevel === "") return;

    const { prevSelectedNPCLevel } = SelectNPCLevel;
    let curNPCLevelIdx = npcLevels.indexOf(currentPlayer.npcLevel);
    // 如果是不合法的強度，就先強制改成正確的
    if (curNPCLevelIdx === -1) {
      curNPCLevelIdx = 0;
      currentPlayer.npcLevel = npcLevels[0];
    }
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        curNPCLevelIdx = curNPCLevelIdx === 0 ? 2 : curNPCLevelIdx - 1;
        currentPlayer.npcLevel = npcLevels[curNPCLevelIdx];
        break;
      case gamePadSetting.arrowDown:
        curNPCLevelIdx = curNPCLevelIdx === 2 ? 0 : curNPCLevelIdx + 1;
        currentPlayer.npcLevel = npcLevels[curNPCLevelIdx];
        break;
      case gamePadSetting.circle:
        StoryModeSelectCharacter.curComponent = "NPCGenerateDialog";
        break;
      case gamePadSetting.cross:
        currentPlayer.npcLevel = prevSelectedNPCLevel;
        StoryModeSelectCharacter.curComponent = "NPCGenerateDialog";
        break;
    }
    setNewGameProgress({ ...newGameProgress });
  }
  function handleSelectNPCGender(e: KeyboardEvent<HTMLDivElement>) {
    const { prevSelectedGender } = SelectNPCGender;
    const { gender: curGender } = currentPlayer;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowRight:
      case gamePadSetting.arrowLeft:
        currentPlayer.gender = curGender === "male" ? "female" : "male";
        break;
      case gamePadSetting.circle:
        StoryModeSelectCharacter.curComponent = "NPCGenerateDialog";
        break;
      case gamePadSetting.cross:
        currentPlayer.gender = prevSelectedGender;
        StoryModeSelectCharacter.curComponent = "NPCGenerateDialog";
        break;
    }
    setNewGameProgress({ ...newGameProgress });
  }
  function handleSelectNPCColor(e: KeyboardEvent<HTMLDivElement>) {
    const { prevSelectedColor } = SelectNPCColor;
    let curColorIdx = remainColors.indexOf(currentPlayer.color);
    // 如果是不合法的顏色，就先強制改成正確的
    if (curColorIdx === -1) {
      curColorIdx = 0;
      currentPlayer.color = remainColors[0];
    }
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp: {
        if (curColorIdx === 0) curColorIdx = remainColors.length - 1;
        else curColorIdx -= 1;
        currentPlayer.color = remainColors[curColorIdx];
        break;
      }
      case gamePadSetting.arrowDown: {
        if (curColorIdx === remainColors.length - 1) curColorIdx = 0;
        else curColorIdx += 1;
        currentPlayer.color = remainColors[curColorIdx];
        break;
      }
      case gamePadSetting.circle:
        StoryModeSelectCharacter.curComponent = "NPCGenerateDialog";
        break;
      case gamePadSetting.cross:
        currentPlayer.color = prevSelectedColor;
        StoryModeSelectCharacter.curComponent = "NPCGenerateDialog";
        break;
    }
    setNewGameProgress({ ...newGameProgress });
  }
  function handleSelectNPCJob(e: KeyboardEvent<HTMLDivElement>) {
    const { prevSelectedJob } = SelectNPCJob;
    let curJobIdx = basicJobs.indexOf(currentPlayer.job);
    // 如果是不合法的職業，就先強制改成正確的
    if (curJobIdx === -1) {
      currentPlayer.job = basicJobs[0];
      curJobIdx = 0;
    }
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        curJobIdx = curJobIdx === 0 ? basicJobs.length - 1 : curJobIdx - 1;
        currentPlayer.job = basicJobs[curJobIdx];
        break;
      case gamePadSetting.arrowDown:
        curJobIdx = curJobIdx === basicJobs.length - 1 ? 0 : curJobIdx + 1;
        currentPlayer.job = basicJobs[curJobIdx];
        break;
      case gamePadSetting.circle:
        StoryModeSelectCharacter.curComponent = "NPCGenerateDialog";
        break;
      case gamePadSetting.cross:
        currentPlayer.job = prevSelectedJob;
        StoryModeSelectCharacter.curComponent = "NPCGenerateDialog";
        break;
    }
    setNewGameProgress({ ...newGameProgress });
  }
  function handleFourPlayersGenerated(e: KeyboardEvent<HTMLDivElement>) {
    const isMainFourKeys = mainFourKeys.includes(e.key.toLowerCase());
    if (!isMainFourKeys) return;

    bottomDialogSentencesQueue.shift();
    if (bottomDialogSentencesQueue.length === 0) {
      StoryModeSelectCharacter.curComponent = "SelectController";
    }
    // 選擇controller的時候，預設會從第0個人開始選
    newGameProgress.currentPlayerIdx = 0;
    setNewGameProgress({ ...newGameProgress });
  }
  function handleSelectController(e: KeyboardEvent<HTMLDivElement>) {
    const { controllerNumber } = currentPlayer;
    const maxPlayerIdx = numberOfPlayers - 1;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
        newGameProgress.currentPlayerIdx =
          currentPlayerIdx === 0 ? maxPlayerIdx : currentPlayerIdx - 1;
        break;
      case gamePadSetting.arrowDown:
        newGameProgress.currentPlayerIdx =
          currentPlayerIdx === maxPlayerIdx ? 0 : currentPlayerIdx + 1;
        break;
      case gamePadSetting.arrowRight:
        currentPlayer.controllerNumber =
          controllerNumber === 4 ? 4 : controllerNumber + 1;
        break;
      case gamePadSetting.arrowLeft:
        currentPlayer.controllerNumber =
          controllerNumber === 1 ? 1 : controllerNumber - 1;
        break;
      case gamePadSetting.circle: {
        const isValidControllerNumber = controllerNumber <= 2;
        if (isValidControllerNumber) {
          StoryModeSelectCharacter.curComponent = "SelectControllerConfirm";
          break;
        }
        bottomDialogSentencesQueue.length = 0;
        bottomDialogSentencesQueue.push(
          t("つながっていないコントローラが\n選ばれていますよ!")
        );
        break;
      }
      case gamePadSetting.cross:
        StoryModeSelectCharacter.curComponent = "AskForNthNPC";
        newGameProgress.currentPlayerIdx = 3;
        break;
    }
    setNewGameProgress({ ...newGameProgress });
  }
  function handleSelectControllerConfirm(e: KeyboardEvent<HTMLDivElement>) {
    const { shuffleIndexes } = ShuffleOrder;
    switch (e.key.toLowerCase()) {
      case gamePadSetting.arrowUp:
      case gamePadSetting.arrowDown:
        newGameProgress.isHoverOnConfirm = !isHoverOnConfirm;
        break;
      case gamePadSetting.circle:
        StoryModeSelectCharacter.curComponent = isHoverOnConfirm
          ? "ShuffleOrder"
          : "SelectController";
        if (isHoverOnConfirm) {
          ShuffleOrder.intervalId = window.setInterval(() => {
            shuffleIndexes.shuffle();
            setNewGameProgress({ ...newGameProgress });
          }, 50);
        }
        break;
    }
    setNewGameProgress({ ...newGameProgress });
  }
  function handleShuffleOrder(e: KeyboardEvent<HTMLDivElement>) {
    const isMainFourKeys = mainFourKeys.includes(e.key.toLowerCase());
    if (!isMainFourKeys) return;

    window.clearInterval(ShuffleOrder.intervalId);
    StoryModeSelectCharacter.curComponent = "ShuffleOrderComplete";
    setNewGameProgress({ ...newGameProgress });
  }
  function handleShuffleOrderComplete(e: KeyboardEvent<HTMLDivElement>) {
    const isMainFourKeys = mainFourKeys.includes(e.key.toLowerCase());
    if (!isMainFourKeys) return;

    StoryModeSelectCharacter.curComponent = "TakePlayerToDokaponTheWorld";
    setNewGameProgress({ ...newGameProgress });
  }
  function handleTakePlayerToDokaponTheWorld(e: KeyboardEvent<HTMLDivElement>) {
    const isMainFourKeys = mainFourKeys.includes(e.key.toLowerCase());
    if (!isMainFourKeys) return;

    bottomDialogSentencesQueue.shift();
    if (bottomDialogSentencesQueue.length === 0) {
      newGameProgress.currentView = "BetweenDimensions";
    }
    setNewGameProgress({ ...newGameProgress });
  }
  function handleBottomDialogSentencesQueue() {
    bottomDialogSentencesQueue.length = 0;
    for (const sentence of bottomDialogTexts[curComponent]) {
      const translatedSentence = t(sentence)
        .replace("{playerNumber}", String(currentPlayerIdx + 1))
        .replace("{name}", currentPlayer.name)
        .replace("{remainPlayerCount}", String(3 - currentPlayerIdx + 1));
      bottomDialogSentencesQueue.push(translatedSentence);
    }
    setNewGameProgress({ ...newGameProgress });
  }
  useEffect(handleBottomDialogSentencesQueue, [curComponent]);
  useEffect(() => containerRefEl.current?.focus(), []);
  return {
    containerRefEl,
    handleKeyUp,
    curComponent,
    exampleCharacterImgSrc,
  };
}
