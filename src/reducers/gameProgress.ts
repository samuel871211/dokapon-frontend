import { createContext } from "react";
import type { GameProgress } from "global";

const initGameProgress: GameProgress = {
  timeStamp: "",
  goalType: "period",
  goalInput: 1,
  numberOfPlayers: 1,
  currentPlayerNumber: 1,
  currentWeek: 1,
  currentDayOfWeek: 1,
  currentComponents: [],
  currentView: "SelectCharacter",
  componentsStates: {
    SelectGoalType: {
      show: true,
    },
    TitleArea: {
      show: true,
    },
    GoalInputDialog: {
      selectedIndex: 0,
    },
    NameInputDialog: {
      keyboardType: "hiragana",
      selectedSectionIdx: 0,
      selectedWordIdx: 0,
    },
    SelectColor: {
      selectedIndex: 0,
    },
    SelectJob: {
      selectedIndex: 0,
    },
    NPCGenerateDialog: {
      selectedIndex: 4,
    },
  },
  playersAttrs: [
    {
      gender: "male",
      name: "",
      color: "red",
      job: "warrior",
      isNPC: false,
      npcLevel: "",
      controllerNumber: 1,
    },
    {
      gender: "male",
      name: "",
      color: "red",
      job: "warrior",
      isNPC: true,
      npcLevel: "weak",
      controllerNumber: 0,
    },
    {
      gender: "male",
      name: "",
      color: "red",
      job: "warrior",
      isNPC: true,
      npcLevel: "weak",
      controllerNumber: 0,
    },
    {
      gender: "male",
      name: "",
      color: "red",
      job: "warrior",
      isNPC: true,
      npcLevel: "weak",
      controllerNumber: 0,
    },
  ],
  userPreference: {
    aspectRatio: "16:9",
    lang: "cn",
    gamePadSetting: {
      arrowUp: "arrowup",
      arrowDown: "arrowdown",
      arrowLeft: "arrowleft",
      arrowRight: "arrowright",
      triangle: "s",
      circle: "d",
      square: "z",
      cross: "x",
      L1: "q",
      L2: "1",
      R1: "e",
      R2: "3",
      SELECT: "c",
      ANALOG: "b",
      START: "v",
    },
  },
};

const gameProgressContext = createContext<GameProgress.Context>({
  gameProgress: initGameProgress,
  gameProgressDispatch: function (action: GameProgress.Action) {
    console.error("GameProgress.Context did not provide a value");
  },
});

function gameProgressReducer(
  state: GameProgress,
  action: GameProgress.Action
): GameProgress {
  switch (action.type) {
    case "updateAll":
      return { ...action.payload };
    case "goalType":
    case "goalInput":
    case "currentPlayerNumber": {
      return {
        ...state,
        [action.type]: action.payload,
      };
    }
    // after numberOfPlayers is determined, we can mark the rest players as NPC
    case "numberOfPlayers": {
      const newState = {
        ...state,
        [action.type]: action.payload,
      };
      newState.playersAttrs.forEach((playerAttrs, index) => {
        const isNPC = newState.numberOfPlayers <= index;
        if (isNPC) {
          playerAttrs.isNPC = true;
          playerAttrs.controllerNumber = 0;
          playerAttrs.npcLevel = "weak";
        } else {
          playerAttrs.isNPC = false;
          playerAttrs.controllerNumber = 1;
          playerAttrs.npcLevel = "";
        }
      });
      return newState;
    }
    case "npcLevel":
    case "gender":
    case "color":
    case "job":
    case "name": {
      const curPlayerIdx = state.currentPlayerNumber - 1;
      const newState = { ...state };
      const playerAttrs = {
        ...newState.playersAttrs[curPlayerIdx],
        [action.type]: action.payload,
      };
      newState.playersAttrs[curPlayerIdx] = playerAttrs;
      return newState;
    }
    case "controllerNumber": {
      const newState = { ...state };
      newState.playersAttrs.forEach((playerAttrs, index) => {
        playerAttrs.controllerNumber = action.payload[index];
      });
      return newState;
    }
    case "shuffle": {
      return {
        ...state,
        playersAttrs: [
          state.playersAttrs[action.payload[0]],
          state.playersAttrs[action.payload[1]],
          state.playersAttrs[action.payload[2]],
          state.playersAttrs[action.payload[3]],
        ],
      };
    }
  }
}

export { initGameProgress, gameProgressContext, gameProgressReducer };
