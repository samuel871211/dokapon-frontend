// Related third party imports.
import { createContext, Dispatch, SetStateAction } from "react";

// Local application/library specific imports.
import { NewGameProgress } from "global";

// Stateless vars declare.
const initNewGameProgress: NewGameProgress = {
  timeStamp: "",
  isHoverOnConfirm: false,
  goalType: "period",
  goalInput: 1,
  numberOfPlayers: 1,
  currentPlayerIdx: 0,
  currentDayOfWeek: 1,
  currentWeek: 1,
  curSentenceIdx: 0,
  bottomDialogSentencesQueue: [],
  currentView: "Home",
  Home: {},
  BattleModeSelectCharacter: {
    curComponent: "SelectGoalType",
    GoalInputDialog: { selectedIdx: 0 },
    NameInputDialog: {
      selectedSectionIdx: 0,
      selectedWordIdx: 0,
      keyboardType: "hiragana",
      nameInputArray: ["　", "　", "　", "　", "　", "　", "　", "　"],
      curNameInputIdx: 0,
    },
    NPCGenerateDialog: { selectedIdx: 4 },
    SelectNPCColor: { prevSelectedColor: "red" },
    SelectNPCGender: { prevSelectedGender: "male" },
    SelectNPCJob: { prevSelectedJob: "beginner" },
    SelectNPCLevel: { prevSelectedNPCLevel: "weak" },
    ShuffleOrder: {
      shuffleIndexes: [0, 1, 2, 3],
      intervalId: 0,
    },
  },
  StoryModeSelectCharacter: {
    curComponent: "SelectNumberOfPlayers",
    NameInputDialog: {
      selectedSectionIdx: 0,
      selectedWordIdx: 0,
      keyboardType: "hiragana",
      nameInputArray: ["　", "　", "　", "　", "　", "　", "　", "　"],
      curNameInputIdx: 0,
    },
    NPCGenerateDialog: { selectedIdx: 4 },
    SelectNPCColor: { prevSelectedColor: "red" },
    SelectNPCGender: { prevSelectedGender: "male" },
    SelectNPCJob: { prevSelectedJob: "beginner" },
    SelectNPCLevel: { prevSelectedNPCLevel: "weak" },
    ShuffleOrder: {
      shuffleIndexes: [0, 1, 2, 3],
      intervalId: 0,
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
      controllerNumber: 1,
    },
    {
      gender: "male",
      name: "",
      color: "red",
      job: "warrior",
      isNPC: true,
      npcLevel: "weak",
      controllerNumber: 1,
    },
    {
      gender: "male",
      name: "",
      color: "red",
      job: "warrior",
      isNPC: true,
      npcLevel: "weak",
      controllerNumber: 1,
    },
  ],
  userPreference: {
    lang: "cn",
    aspectRatio: "16:9",
  },
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
};
const newGameProgressContext = createContext<{
  newGameProgress: NewGameProgress;
  setNewGameProgress: Dispatch<SetStateAction<NewGameProgress>>;
}>({
  newGameProgress: initNewGameProgress,
  setNewGameProgress: () => {
    throw new Error("context value no provided");
  },
});

export { initNewGameProgress, newGameProgressContext };
