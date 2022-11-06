// Related third party imports.
import { createContext, Dispatch, SetStateAction } from "react";

// Local application/library specific imports.
import { GameProgress, Vertex } from "global";

// Stateless vars declare.
const initGameProgress: GameProgress = {
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
  currentView: "DokaponTheWorld",
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
  DokaponTheWorld: {
    curComponent: "Drawer",
    curClickVertex: {} as Vertex,
    showVertexAttrsAndDistance: false,
    showCheckTip: true,
    Drawer: { selectedIdx: 0 },
    Bag: {
      currentBag: "items",
      selectedIdx: 0,
    },
    Roulette: { result: -1 },
    GroceryStoreFieldCheck: { curListPage: 0 },
    JobStoreFieldCheck: { curListPage: 0 },
    MagicStoreFieldCheck: { curListPage: 0 },
    WeaponStoreFieldCheck: { curListPage: 0 },
  },
  playersAttrs: [
    {
      level: 1,
      attack: {
        total: 17,
        base: 15,
        weapon: 2,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      defense: {
        total: 17,
        base: 15,
        weapon: 0,
        shield: 2,
        buffRatio: 1,
        nerfRatio: 1,
      },
      speed: {
        total: 15,
        base: 15,
        weapon: 0,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      magic: {
        total: 15,
        base: 15,
        weapon: 0,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      hp: {
        current: 150,
        total: 150,
        base: 150,
        weapon: 0,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      currentArea: "Asia",
      currentVertex: "571e15e0-7324-4e98-925e-2aac78952e6c",
      gender: "male",
      name: "",
      color: "red",
      job: "warrior",
      isNPC: false,
      npcLevel: "weak",
      controllerNumber: 1,
      jobsMasterStatus: {
        beginner: {
          level: 1,
          rounds: 0,
        },
        warrior: {
          level: 1,
          rounds: 0,
        },
        magician: {
          level: 1,
          rounds: 0,
        },
        cleric: {
          level: 1,
          rounds: 0,
        },
        thief: {
          level: 1,
          rounds: 0,
        },
        knight: {
          level: 1,
          rounds: 0,
        },
        archmage: {
          level: 1,
          rounds: 0,
        },
        priest: {
          level: 1,
          rounds: 0,
        },
        bladeMaster: {
          level: 1,
          rounds: 0,
        },
        necromancer: {
          level: 1,
          rounds: 0,
        },
        exorcist: {
          level: 1,
          rounds: 0,
        },
        pirate: {
          level: 1,
          rounds: 0,
        },
        ninja: {
          level: 1,
          rounds: 0,
        },
        gamester: {
          level: 1,
          rounds: 0,
        },
        beastTamer: {
          level: 1,
          rounds: 0,
        },
        robot: {
          level: 1,
          rounds: 0,
        },
        carpenter: {
          level: 1,
          rounds: 0,
        },
        nurse: {
          level: 1,
          rounds: 0,
        },
        monk: {
          level: 1,
          rounds: 0,
        },
        dancer: {
          level: 1,
          rounds: 0,
        },
        alien: {
          level: 1,
          rounds: 0,
        },
        queen: {
          level: 1,
          rounds: 0,
        },
        gladiator: {
          level: 1,
          rounds: 0,
        },
        elves: {
          level: 1,
          rounds: 0,
        },
        royal: {
          level: 1,
          rounds: 0,
        },
        devil: {
          level: 1,
          rounds: 0,
        },
        anotherDevil: {
          level: 1,
          rounds: 0,
        },
      },
      availableJobs: ["beginner", "warrior", "magician", "cleric", "thief"],
      possession: {
        items: [],
        magicBooks: [],
        money: 0,
        treasury: 0,
      },
    },
    {
      level: 1,
      attack: {
        total: 17,
        base: 15,
        weapon: 2,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      defense: {
        total: 17,
        base: 15,
        weapon: 0,
        shield: 2,
        buffRatio: 1,
        nerfRatio: 1,
      },
      speed: {
        total: 15,
        base: 15,
        weapon: 0,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      magic: {
        total: 15,
        base: 15,
        weapon: 0,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      hp: {
        current: 150,
        total: 150,
        base: 150,
        weapon: 0,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      currentArea: "Asia",
      currentVertex: "571e15e0-7324-4e98-925e-2aac78952e6c",
      gender: "male",
      name: "",
      color: "red",
      job: "warrior",
      isNPC: true,
      npcLevel: "weak",
      controllerNumber: 1,
      jobsMasterStatus: {
        beginner: {
          level: 1,
          rounds: 0,
        },
        warrior: {
          level: 1,
          rounds: 0,
        },
        magician: {
          level: 1,
          rounds: 0,
        },
        cleric: {
          level: 1,
          rounds: 0,
        },
        thief: {
          level: 1,
          rounds: 0,
        },
        knight: {
          level: 1,
          rounds: 0,
        },
        archmage: {
          level: 1,
          rounds: 0,
        },
        priest: {
          level: 1,
          rounds: 0,
        },
        bladeMaster: {
          level: 1,
          rounds: 0,
        },
        necromancer: {
          level: 1,
          rounds: 0,
        },
        exorcist: {
          level: 1,
          rounds: 0,
        },
        pirate: {
          level: 1,
          rounds: 0,
        },
        ninja: {
          level: 1,
          rounds: 0,
        },
        gamester: {
          level: 1,
          rounds: 0,
        },
        beastTamer: {
          level: 1,
          rounds: 0,
        },
        robot: {
          level: 1,
          rounds: 0,
        },
        carpenter: {
          level: 1,
          rounds: 0,
        },
        nurse: {
          level: 1,
          rounds: 0,
        },
        monk: {
          level: 1,
          rounds: 0,
        },
        dancer: {
          level: 1,
          rounds: 0,
        },
        alien: {
          level: 1,
          rounds: 0,
        },
        queen: {
          level: 1,
          rounds: 0,
        },
        gladiator: {
          level: 1,
          rounds: 0,
        },
        elves: {
          level: 1,
          rounds: 0,
        },
        royal: {
          level: 1,
          rounds: 0,
        },
        devil: {
          level: 1,
          rounds: 0,
        },
        anotherDevil: {
          level: 1,
          rounds: 0,
        },
      },
      availableJobs: ["beginner", "warrior", "magician", "cleric", "thief"],
      possession: {
        items: [],
        magicBooks: [],
        money: 0,
        treasury: 0,
      },
    },
    {
      level: 1,
      attack: {
        total: 17,
        base: 15,
        weapon: 2,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      defense: {
        total: 17,
        base: 15,
        weapon: 0,
        shield: 2,
        buffRatio: 1,
        nerfRatio: 1,
      },
      speed: {
        total: 15,
        base: 15,
        weapon: 0,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      magic: {
        total: 15,
        base: 15,
        weapon: 0,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      hp: {
        current: 150,
        total: 150,
        base: 150,
        weapon: 0,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      currentArea: "Asia",
      currentVertex: "571e15e0-7324-4e98-925e-2aac78952e6c",
      gender: "male",
      name: "",
      color: "red",
      job: "warrior",
      isNPC: true,
      npcLevel: "weak",
      controllerNumber: 1,
      jobsMasterStatus: {
        beginner: {
          level: 1,
          rounds: 0,
        },
        warrior: {
          level: 1,
          rounds: 0,
        },
        magician: {
          level: 1,
          rounds: 0,
        },
        cleric: {
          level: 1,
          rounds: 0,
        },
        thief: {
          level: 1,
          rounds: 0,
        },
        knight: {
          level: 1,
          rounds: 0,
        },
        archmage: {
          level: 1,
          rounds: 0,
        },
        priest: {
          level: 1,
          rounds: 0,
        },
        bladeMaster: {
          level: 1,
          rounds: 0,
        },
        necromancer: {
          level: 1,
          rounds: 0,
        },
        exorcist: {
          level: 1,
          rounds: 0,
        },
        pirate: {
          level: 1,
          rounds: 0,
        },
        ninja: {
          level: 1,
          rounds: 0,
        },
        gamester: {
          level: 1,
          rounds: 0,
        },
        beastTamer: {
          level: 1,
          rounds: 0,
        },
        robot: {
          level: 1,
          rounds: 0,
        },
        carpenter: {
          level: 1,
          rounds: 0,
        },
        nurse: {
          level: 1,
          rounds: 0,
        },
        monk: {
          level: 1,
          rounds: 0,
        },
        dancer: {
          level: 1,
          rounds: 0,
        },
        alien: {
          level: 1,
          rounds: 0,
        },
        queen: {
          level: 1,
          rounds: 0,
        },
        gladiator: {
          level: 1,
          rounds: 0,
        },
        elves: {
          level: 1,
          rounds: 0,
        },
        royal: {
          level: 1,
          rounds: 0,
        },
        devil: {
          level: 1,
          rounds: 0,
        },
        anotherDevil: {
          level: 1,
          rounds: 0,
        },
      },
      availableJobs: ["beginner", "warrior", "magician", "cleric", "thief"],
      possession: {
        items: [],
        magicBooks: [],
        money: 0,
        treasury: 0,
      },
    },
    {
      level: 1,
      attack: {
        total: 17,
        base: 15,
        weapon: 2,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      defense: {
        total: 17,
        base: 15,
        weapon: 0,
        shield: 2,
        buffRatio: 1,
        nerfRatio: 1,
      },
      speed: {
        total: 15,
        base: 15,
        weapon: 0,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      magic: {
        total: 15,
        base: 15,
        weapon: 0,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      hp: {
        current: 150,
        total: 150,
        base: 150,
        weapon: 0,
        shield: 0,
        buffRatio: 1,
        nerfRatio: 1,
      },
      currentArea: "Asia",
      currentVertex: "571e15e0-7324-4e98-925e-2aac78952e6c",
      gender: "male",
      name: "",
      color: "red",
      job: "warrior",
      isNPC: true,
      npcLevel: "weak",
      controllerNumber: 1,
      jobsMasterStatus: {
        beginner: {
          level: 1,
          rounds: 0,
        },
        warrior: {
          level: 1,
          rounds: 0,
        },
        magician: {
          level: 1,
          rounds: 0,
        },
        cleric: {
          level: 1,
          rounds: 0,
        },
        thief: {
          level: 1,
          rounds: 0,
        },
        knight: {
          level: 1,
          rounds: 0,
        },
        archmage: {
          level: 1,
          rounds: 0,
        },
        priest: {
          level: 1,
          rounds: 0,
        },
        bladeMaster: {
          level: 1,
          rounds: 0,
        },
        necromancer: {
          level: 1,
          rounds: 0,
        },
        exorcist: {
          level: 1,
          rounds: 0,
        },
        pirate: {
          level: 1,
          rounds: 0,
        },
        ninja: {
          level: 1,
          rounds: 0,
        },
        gamester: {
          level: 1,
          rounds: 0,
        },
        beastTamer: {
          level: 1,
          rounds: 0,
        },
        robot: {
          level: 1,
          rounds: 0,
        },
        carpenter: {
          level: 1,
          rounds: 0,
        },
        nurse: {
          level: 1,
          rounds: 0,
        },
        monk: {
          level: 1,
          rounds: 0,
        },
        dancer: {
          level: 1,
          rounds: 0,
        },
        alien: {
          level: 1,
          rounds: 0,
        },
        queen: {
          level: 1,
          rounds: 0,
        },
        gladiator: {
          level: 1,
          rounds: 0,
        },
        elves: {
          level: 1,
          rounds: 0,
        },
        royal: {
          level: 1,
          rounds: 0,
        },
        devil: {
          level: 1,
          rounds: 0,
        },
        anotherDevil: {
          level: 1,
          rounds: 0,
        },
      },
      availableJobs: ["beginner", "warrior", "magician", "cleric", "thief"],
      possession: {
        items: [],
        magicBooks: [],
        money: 0,
        treasury: 0,
      },
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
const gameProgressCtx = createContext<{
  gameProgress: GameProgress;
  setGameProgress: Dispatch<SetStateAction<GameProgress>>;
}>({
  gameProgress: initGameProgress,
  setGameProgress: () => {
    throw new Error("context value no provided");
  },
});

export { initGameProgress, gameProgressCtx };
