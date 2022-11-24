// Related third party imports.
import { createContext, Dispatch, SetStateAction } from "react";

// Local application/library specific imports.
import type { GameProgress, Vertex } from "global";

// Stateless vars declare.
const initGameProgress: GameProgress = {
  timeStamp: "",
  isHoverOnConfirmBtn: false,
  goalType: "period",
  goalInput: 1,
  numberOfPlayers: 1,
  currentPlayerIdx: 0,
  currentDayOfWeek: 1,
  currentWeek: 1,
  bottomDialogSentencesQueue: [],
  currentView: "Home",
  HomeState: {
    curComponent: "ButtonGroup",
    ButtonGroupState: { selectedIdx: 0 },
    SettingsState: {
      showKeyMappingDialog: false,
      currentAxis: { row: 0, col: 0 },
      prevGamePadSetting: {
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
  },
  BattleModeSelectCharacterState: {
    curComponent: "SelectGoalType",
    GoalInputDialogState: { selectedIdx: 0 },
    NameInputDialogState: {
      selectedSectionIdx: 0,
      selectedWordIdx: 0,
      keyboardType: "hiragana",
      nameInputArray: ["　", "　", "　", "　", "　", "　", "　", "　"],
      curNameInputIdx: 0,
    },
    NPCGenerateDialogState: { selectedIdx: 4 },
    SelectNPCColorState: { prevSelectedColor: "red" },
    SelectNPCGenderState: { prevSelectedGender: "male" },
    SelectNPCJobState: { prevSelectedJob: "beginner" },
    SelectNPCLevelState: { prevSelectedNPCLevel: "weak" },
    ShuffleOrderState: {
      shuffleIndexes: [0, 1, 2, 3],
      intervalId: 0,
    },
  },
  StoryModeSelectCharacterState: {
    curComponent: "SelectNumberOfPlayers",
    NameInputDialogState: {
      selectedSectionIdx: 0,
      selectedWordIdx: 0,
      keyboardType: "hiragana",
      nameInputArray: ["　", "　", "　", "　", "　", "　", "　", "　"],
      curNameInputIdx: 0,
    },
    NPCGenerateDialogState: { selectedIdx: 4 },
    SelectNPCColorState: { prevSelectedColor: "red" },
    SelectNPCGenderState: { prevSelectedGender: "male" },
    SelectNPCJobState: { prevSelectedJob: "beginner" },
    SelectNPCLevelState: { prevSelectedNPCLevel: "weak" },
    ShuffleOrderState: {
      shuffleIndexes: [0, 1, 2, 3],
      intervalId: 0,
    },
  },
  DokaponTheWorldState: {
    curComponents: ["Drawer"],
    curClickVertex: {
      position: {
        x: 4960,
        y: 2940,
      },
      name: "CastleField",
      id: "571e15e0-7324-4e98-925e-2aac78952e6c",
      left: "ca9c14d0-8009-4bdd-b60b-907d7aca81a4",
      right: "09eff9ac-05cf-418c-9f8b-04547ea045b2",
      edges: [
        "deb81b1e-097c-442a-bb12-af84909d8999",
        "36e56502-933e-4105-b0c7-c8db8e4f8cde",
      ],
      area: "Asia",
    },
    showVertexAttrsAndDistance: false,
    showCheckTip: true,
    DrawerState: { selectedIdx: 0 },
    BagState: {
      currentBag: "items",
      selectedIdx: 0,
    },
    RouletteState: { result: -1 },
    GroceryStoreFieldCheckState: { curListPage: 0 },
    JobStoreFieldCheckState: { curListPage: 0 },
    MagicStoreFieldCheckState: { curListPage: 0 },
    WeaponStoreFieldCheckState: { curListPage: 0 },
    CollectMoneyFieldCheckState: { curListPage: 0 },
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
      currentVertexIdx: 36,
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
      currentVertexIdx: 36,
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
      currentVertexIdx: 36,
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
      currentVertexIdx: 36,
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
    throw new Error("context value not provided");
  },
});

export { initGameProgress, gameProgressCtx };
