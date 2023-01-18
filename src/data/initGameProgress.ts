import type { GameProgress } from "global";

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
    // curClickedBossMonsterIdx: -1,
    // curClickedEnemyIdx: -1,
    // curClickedPlayersIdx: [],
    // curClickedPlayers: [],
    // curClickedCharactersCount: 0,
    curClickedCharacters: [],
    // curClickedCharacterIdx: -1,
    enemies: [],
    bossMonsters: [
      {
        name: "monkeyHero",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 124 },
        area: "Asia",
        vertexIdx: 47,
      },
      {
        name: "pigsy",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 180 },
        area: "Asia",
        vertexIdx: 56,
      },
      {
        name: "pigsy",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 180 },
        area: "Asia",
        vertexIdx: 43,
      },
      {
        name: "kappa",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 94 },
        area: "Asia",
        vertexIdx: 25,
      },
      {
        name: "monkeyHero",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 124 },
        area: "Asia",
        vertexIdx: 40,
      },
      {
        name: "monkeyHero",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 124 },
        area: "Asia",
        vertexIdx: 66,
      },
      {
        name: "pigsy",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 180 },
        area: "Asia",
        vertexIdx: 83,
      },
      {
        name: "pigsy",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 180 },
        area: "Asia",
        vertexIdx: 69,
      },
      {
        name: "pigsy",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 180 },
        area: "Asia",
        vertexIdx: 9,
      },
      {
        name: "knightPurple",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 260 },
        area: "Europe",
        vertexIdx: 152,
      },
      {
        name: "knightGray",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 300 },
        area: "Europe",
        vertexIdx: 133,
      },
      {
        name: "knightBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 210 },
        area: "Europe",
        vertexIdx: 146,
      },
      {
        name: "knightBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 210 },
        area: "Europe",
        vertexIdx: 126,
      },
      {
        name: "knightGray",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 300 },
        area: "Europe",
        vertexIdx: 169,
      },
      {
        name: "knightBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 210 },
        area: "Europe",
        vertexIdx: 128,
      },
      {
        name: "knightPurple",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 260 },
        area: "Europe",
        vertexIdx: 110,
      },
      {
        name: "knightBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 210 },
        area: "Europe",
        vertexIdx: 105,
      },
      {
        name: "knightPurple",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 260 },
        area: "Europe",
        vertexIdx: 97,
      },
      {
        name: "snowmanNormal",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 553 },
        area: "Russia",
        vertexIdx: 201,
      },
      {
        name: "snowmanSmall",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 380 },
        area: "Russia",
        vertexIdx: 216,
      },
      {
        name: "snowmanNormal",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 553 },
        area: "Russia",
        vertexIdx: 224,
      },
      {
        name: "snowmanSmall",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 380 },
        area: "Russia",
        vertexIdx: 192,
      },
      {
        name: "snowmanNormal",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 553 },
        area: "Russia",
        vertexIdx: 188,
      },
      {
        name: "snowmanSmall",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 380 },
        area: "Russia",
        vertexIdx: 239,
      },
      {
        name: "snowmanSmall",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 380 },
        area: "Russia",
        vertexIdx: 260,
      },
      {
        name: "snowmanNormal",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 553 },
        area: "Russia",
        vertexIdx: 174,
      },
      {
        name: "snowmanSmall",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 380 },
        area: "Russia",
        vertexIdx: 269,
      },
      {
        name: "indiantTotemBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 500 },
        area: "NorthAmerica",
        vertexIdx: 319,
      },
      {
        name: "indiantTotemBlack",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 795 },
        area: "NorthAmerica",
        vertexIdx: 417,
      },
      {
        name: "indiantTotemBlack",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 795 },
        area: "NorthAmerica",
        vertexIdx: 359,
      },
      {
        name: "indiantTotemBlack",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 795 },
        area: "NorthAmerica",
        vertexIdx: 320,
      },
      {
        name: "indiantTotemBlack",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 500 },
        area: "NorthAmerica",
        vertexIdx: 338,
      },
      {
        name: "indiantTotemBlack",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 795 },
        area: "NorthAmerica",
        vertexIdx: 367,
      },
      {
        name: "indiantTotemBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 500 },
        area: "NorthAmerica",
        vertexIdx: 391,
      },
      {
        name: "indiantTotemBlack",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 795 },
        area: "NorthAmerica",
        vertexIdx: 371,
      },
      {
        name: "indiantTotemBlack",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 795 },
        area: "NorthAmerica",
        vertexIdx: 427,
      },
      {
        name: "golemBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 795 },
        area: "SouthAmerica",
        vertexIdx: 513,
      },
      {
        name: "golemBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 795 },
        area: "SouthAmerica",
        vertexIdx: 496,
      },
      {
        name: "golemBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 795 },
        area: "SouthAmerica",
        vertexIdx: 490,
      },
      {
        name: "golemBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 795 },
        area: "SouthAmerica",
        vertexIdx: 430,
      },
      {
        name: "golemBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 795 },
        area: "SouthAmerica",
        vertexIdx: 506,
      },
      {
        name: "golemBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 795 },
        area: "SouthAmerica",
        vertexIdx: 523,
      },
      {
        name: "golemBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 795 },
        area: "SouthAmerica",
        vertexIdx: 487,
      },
      {
        name: "golemBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 795 },
        area: "SouthAmerica",
        vertexIdx: 475,
      },
      {
        name: "golemBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 611 },
        area: "SouthAmerica",
        vertexIdx: 461,
      },
      {
        name: "frillLizard",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 693 },
        area: "Oceania",
        vertexIdx: 569,
      },
      {
        name: "frillLizard",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 693 },
        area: "Oceania",
        vertexIdx: 597,
      },
      {
        name: "weasel",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 915 },
        area: "Oceania",
        vertexIdx: 601,
      },
      {
        name: "weasel",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 915 },
        area: "Oceania",
        vertexIdx: 664,
      },
      {
        name: "weasel",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 915 },
        area: "Oceania",
        vertexIdx: 678,
      },
      {
        name: "birdYellow",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 883 },
        area: "Africa",
        vertexIdx: 721,
      },
      {
        name: "birdYellow",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 883 },
        area: "Africa",
        vertexIdx: 807,
      },
      {
        name: "birdYellow",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 883 },
        area: "Africa",
        vertexIdx: 790,
      },
      {
        name: "volcanoBrown",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 705 },
        area: "Africa",
        vertexIdx: 772,
      },
      {
        name: "lionPurple",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 860 },
        area: "Africa",
        vertexIdx: 814,
      },
      {
        name: "lionPurple",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 860 },
        area: "Africa",
        vertexIdx: 822,
      },
      {
        name: "lionPurple",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 860 },
        area: "Africa",
        vertexIdx: 759,
      },
      {
        name: "birdYellow",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 883 },
        area: "Africa",
        vertexIdx: 730,
      },
      {
        name: "birdYellow",
        characterType: "monster",
        attack: { buffRatio: 1, nerfRatio: 1 },
        defense: { buffRatio: 1, nerfRatio: 1 },
        magic: { buffRatio: 1, nerfRatio: 1 },
        speed: { buffRatio: 1, nerfRatio: 1 },
        hp: { current: 883 },
        area: "Africa",
        vertexIdx: 867,
      },
    ],
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
    GraphUIState: {
      SVGTranslate: { x: 0, y: 0 },
    },
    CheckState: {
      showVertexNameAndDistance: false,
      showCheckTip: true,
      showMiniMap: false,
      curHoverVertexDistance: 0,
      curHoverVertexName: "",
      // curHoverVertex: undefined,
      miniMap: {
        player1Position: { x: 0, y: 0 },
        player2Position: { x: 0, y: 0 },
        player3Position: { x: 0, y: 0 },
        player4Position: { x: 0, y: 0 },
        curAreaPosition: { x: 0, y: 0 },
      },
    },
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
    PlayerVsCharacterDialogState: { curPage: 0 },
    SelectCharacterToCompareState: { selectedIdx: 0 },
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
      area: "Asia",
      vertexIdx: 36,
      gender: "male",
      name: "",
      weapon: "swordNormal",
      shield: "shieldPaper",
      magicAttack: "basicAndEurope1",
      magicDefense: "basic",
      decoration: "decorationAttack1",
      color: "red",
      job: "warrior",
      isNPC: false,
      characterType: "player",
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
      area: "Asia",
      vertexIdx: 36,
      gender: "male",
      name: "",
      weapon: "swordNormal",
      shield: "shieldPaper",
      magicAttack: "basicAndEurope1",
      magicDefense: "basic",
      decoration: "decorationAttack1",
      color: "red",
      job: "warrior",
      isNPC: true,
      characterType: "npcPlayer",
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
      area: "Asia",
      vertexIdx: 36,
      gender: "male",
      name: "",
      weapon: "swordNormal",
      shield: "shieldPaper",
      magicAttack: "basicAndEurope1",
      magicDefense: "basic",
      decoration: "decorationAttack1",
      color: "red",
      job: "warrior",
      isNPC: true,
      characterType: "npcPlayer",
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
      area: "Asia",
      vertexIdx: 36,
      gender: "male",
      name: "",
      weapon: "swordNormal",
      shield: "shieldPaper",
      magicAttack: "basicAndEurope1",
      magicDefense: "basic",
      decoration: "decorationAttack1",
      color: "red",
      job: "warrior",
      isNPC: true,
      characterType: "npcPlayer",
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

export default initGameProgress;