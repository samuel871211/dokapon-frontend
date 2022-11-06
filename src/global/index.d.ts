import type { TextsKeys } from "data/texts";

export type BottomDialogProps = {
  /**
   * It uses `display: none` to hide Component if not show
   *
   * @default false
   */
  show: boolean;
  /**
   * `small` allow 2 lines of `dialogText`
   *
   * `normal` allow 3 lines of `dialogText`
   *
   * @default "normal"
   */
  size?: "small" | "normal";
  /**
   * If empty, it will not render the the top left name block.
   *
   * Assume `name` is already translated.
   */
  name?: string;
  /**
   * @todo 如果`dialogText`的顯示是word by word，最後一個字顯示完，才會出現這個
   *
   * If enabled, `showConfirmDialog` must be false
   *
   * @default false
   */
  showConfirmCircle?: true;
  /**
   * If enabled, `showConfirmCircle` must be false
   *
   * @default false
   */
  showConfirmDialog?: true;
};
export type BattleModeSelectCharacterComponentTypes =
  | "SelectGoalType"
  | "GoalInputDialog"
  | "SelectNumberOfPlayers"
  | "OnlyOnePlayer"
  | "SelectGender"
  | "AskForName"
  | "NameInputDialog"
  | "SelectColor"
  | "SelectJob"
  | "ThereShouldBeFourPlayers"
  | "AskForNthNPC"
  | "NPCGenerateDialog"
  | "SelectNPCLevel"
  | "SelectNPCGender"
  | "SelectNPCColor"
  | "SelectNPCJob"
  | "FourPlayersGenerated"
  | "SelectController"
  | "SelectControllerConfirm"
  | "ShuffleOrder"
  | "ShuffleOrderComplete"
  | "TakePlayerToDokaponTheWorld";
export type StoryModeSelectCharacterComponentTypes =
  | "SelectNumberOfPlayers"
  | "OnlyOnePlayer"
  | "SelectGender"
  | "AskForName"
  | "NameInputDialog"
  | "SelectColor"
  | "SelectJob"
  | "ThereShouldBeFourPlayers"
  | "AskForNthNPC"
  | "NPCGenerateDialog"
  | "SelectNPCLevel"
  | "SelectNPCGender"
  | "SelectNPCColor"
  | "SelectNPCJob"
  | "FourPlayersGenerated"
  | "SelectController"
  | "SelectControllerConfirm"
  | "ShuffleOrder"
  | "ShuffleOrderComplete"
  | "TakePlayerToDokaponTheWorld";
export type DokaponTheWorldComponentTypes =
  | "GraphUI"
  | "Drawer"
  | "OverviewMap"
  | "Bag"
  | "Check"
  | "Roulette"
  | "BattleFieldCheck"
  | "CastleFieldCheck"
  | "ChurchFieldCheck"
  | "CollectMoneyFieldCheck"
  | "DamageFieldCheck"
  | "GoldTreasureFieldCheck"
  | "GroceryStoreFieldCheck"
  | "JobStoreFieldCheck"
  | "KeyTreasureFieldCheck"
  | "MagicBookFieldCheck"
  | "MagicStoreFieldCheck"
  | "RedTreasureFieldCheck"
  | "TreasureFieldCheck"
  | "VillageFieldCheck"
  | "WeaponStoreFieldCheck"
  | "WhiteTreasureFieldCheck"
  | "WorldTransferFieldCheck";
export type GameProgress = {
  timeStamp: string;
  /**
   * `BottomDialog`的ConfirmDialog
   */
  isHoverOnConfirm: boolean;
  goalType: GoalTypes;
  /**
   * `1 ~ 999` if `goalType === 'period'`
   *
   * `1 ~ 999,999,999` if `goalType === 'money'`
   */
  goalInput: number;
  /**
   * 1 ~ 4
   */
  numberOfPlayers: number;
  /**
   * 0 ~ 3
   */
  currentPlayerIdx: number;
  /**
   * 1 ~ 7
   */
  currentDayOfWeek: number;
  /**
   * 1 ~ 999
   */
  currentWeek: number;
  curSentenceIdx: number;
  /**
   * Assume sentences are already tranlated.
   */
  bottomDialogSentencesQueue: string[];
  currentView: ViewTypes;
  Home: Record<string, never>;
  BattleModeSelectCharacter: {
    curComponent: BattleModeSelectCharacterComponentTypes;
    GoalInputDialog: { selectedIdx: number };
    NameInputDialog: {
      /**
       * length = 8
       *
       * 如為空字串，請使用全形的空白符號來填充
       */
      nameInputArray: string[];
      /**
       * 0 ~ 7
       */
      curNameInputIdx: number;
      /**
       * 0 ~ 2
       */
      selectedSectionIdx: number;
      selectedWordIdx: number;
      keyboardType: "hiragana" | "katakana" | "special";
    };
    NPCGenerateDialog: {
      /**
       * 0 ~ 4
       *
       * @default 4
       */
      selectedIdx: number;
    };
    SelectNPCLevel: {
      prevSelectedNPCLevel: NPCLevelTypes;
    };
    SelectNPCGender: {
      prevSelectedGender: GenderTypes;
    };
    SelectNPCColor: {
      prevSelectedColor: ColorTypes;
    };
    SelectNPCJob: {
      prevSelectedJob: JobTypes;
    };
    ShuffleOrder: {
      /**
       * length = 4
       *
       * `number` from 0 ~ 3
       */
      shuffleIndexes: number[];
      intervalId: number;
    };
  };
  StoryModeSelectCharacter: {
    curComponent: StoryModeSelectCharacterComponentTypes;
    NameInputDialog: {
      /**
       * length = 8
       *
       * 如為空字串，請使用全形的空白符號來填充
       */
      nameInputArray: string[];
      /**
       * 0 ~ 7
       */
      curNameInputIdx: number;
      /**
       * 0 ~ 2
       */
      selectedSectionIdx: number;
      selectedWordIdx: number;
      keyboardType: "hiragana" | "katakana" | "special";
    };
    NPCGenerateDialog: {
      /**
       * 0 ~ 4
       *
       * @default 4
       */
      selectedIdx: number;
    };
    SelectNPCLevel: {
      prevSelectedNPCLevel: NPCLevelTypes;
    };
    SelectNPCGender: {
      prevSelectedGender: GenderTypes;
    };
    SelectNPCColor: {
      prevSelectedColor: ColorTypes;
    };
    SelectNPCJob: {
      prevSelectedJob: JobTypes;
    };
    ShuffleOrder: {
      /**
       * length = 4
       *
       * `number` from 0 ~ 3
       */
      shuffleIndexes: number[];
      intervalId: number;
    };
  };
  DokaponTheWorld: {
    curComponent: DokaponTheWorldComponentTypes;
    curClickVertex: Vertex;
    showVertexAttrsAndDistance: boolean;
    showCheckTip: boolean;
    Drawer: {
      /**
       * 0 ~ 4
       *
       * 0 移動
       *
       * 1 背包
       *
       * 2 查看
       *
       * 3 技能
       *
       * 4 資訊
       */
      selectedIdx: number;
    };
    Bag: {
      currentBag: "items" | "magicBooks";
      selectedIdx: number;
    };
    Roulette: {
      /**
       * @default -1
       */
      result: number;
    };
    GroceryStoreFieldCheck: {
      /**
       * @default 0
       *
       * 退出的時候，要reset回0
       */
      curListPage: number;
    };
    JobStoreFieldCheck: {
      /**
       * @default 0
       *
       * 退出的時候，要reset回0
       */
      curListPage: number;
    };
    MagicStoreFieldCheck: {
      /**
       * @default 0
       *
       * 退出的時候，要reset回0
       */
      curListPage: number;
    };
    WeaponStoreFieldCheck: {
      /**
       * @default 0
       *
       * 退出的時候，要reset回0
       */
      curListPage: number;
    };
  };
  playersAttrs: [PlayerAttrs, PlayerAttrs, PlayerAttrs, PlayerAttrs];
  userPreference: {
    lang: LangTypes;
    aspectRatio: AspectRatioTypes;
  };
  /**
   * value must be lowercase
   */
  gamePadSetting: {
    [key in GamePadKeyTypes]: string;
  };
};
export type ViewTypes =
  | "Home"
  | "BattleModeSelectCharacter"
  | "StoryModeSelectCharacter"
  | "DokaponTheWorld";
// | "Home"
// | "SelectCharacter"
// | "GameStartIndex"
// | "Battle"
// | "WeaponStore"
// | "MagicStore"
// | "GroceryStore"
// | "JobStore"
// // 驚嘆號代表是地圖隨機出現的事件
// | "beggarGrandpa!"
// | "goddess!"
// | "keroro!"
// | "trader!"
// | "weapon!"
// | "deliveryBird!"
// | "houseOfKill!"
// | "paperScissors!"
// | "photographer!"
// | "bigEater!"
// | "chef!"
// | "darkDweller!"
// | "job!"
// | "nurse!";
export type Position = {
  x: number;
  y: number;
};
export type Area = {
  x: number;
  y: number;
  width: number;
  height: number;
};
export type CellId = string;
export type VertexTypes =
  | "BattleField"
  | "MagicBookField"
  | "TreasureField"
  | "CollectMoneyField"
  | "CollectAllMoneyField"
  | "GoldTreasureField"
  | "RedTreasureField"
  | "WhiteTreasureField"
  | "KeyTreasureField"
  | "WorldTransferField"
  | "ChruchField"
  | "WeaponStoreField"
  | "JobStoreField"
  | "GroceryStoreField"
  | "MagicStoreField"
  | "VillageField"
  | "CaveField"
  | "CastleField"
  | "DamageField";
export type TreasureFieldTypes =
  | "TreasureField"
  | "GoldTreasureField"
  | "RedTreasureField"
  | "WhiteTreasureField"
  | "KeyTreasureField";
export type EdgeTypes =
  | "OneWayHEdge"
  | "TwoWayHEdge"
  | "OneWayVEdge"
  | "TwoWayVEdge";
export type Directions = "top" | "left" | "right" | "bottom";
export type Cell = {
  name: VertexTypes | EdgeTypes;
  id: string;
};
export type Vertex = Cell & {
  name: VertexTypes;
  position: Position;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  edges: string[];
  area: AreaTypes;
  isHide?: true;
};
export type Edge = Cell & {
  name: EdgeTypes;
  start: Position;
  end: Position;
  startId: string;
  endId: string;
  isHide?: true;
};
export type AreaTypes =
  | "Asia"
  | "AsiaCave"
  | "Europe"
  | "EuropeCave"
  | "EuropeCaveLibrary"
  | "EuropeCaveCanteen"
  | "EuropeCaveHall"
  | "Russia"
  | "NorthAmerica"
  | "NorthAmericaCave"
  | "NorthAmericaCaveB2"
  | "SouthAmerica"
  | "SouthAmericaCave"
  | "SouthAmericaCaveB2"
  | "SouthAmericaCaveB3"
  | "Oceania"
  | "OceaniaCave"
  | "Africa"
  | "AfricaCave"
  | "AfricaCaveB2"
  | "AfricaCaveB3Right"
  | "AfricaCaveB3Left"
  | "AfricaCaveB3Center"
  | "Arctic"
  | "ArcticCave"
  | "Antarctica"
  | "AntarcticaCave"
  | "HawaiianIslands"
  | "HawaiianIslandsCave"
  | "HawaiianIslandsCaveB2Right"
  | "HawaiianIslandsCaveB2Left"
  | "HawaiianIslandsCaveB2Center"
  | "HawaiianIslandsCaveB3Right"
  | "HawaiianIslandsCaveB3Left"
  | "HawaiianIslandsCaveB3Center"
  | "Atlantis"
  | "BetweenDimensions";
export type LangTypes = "jp" | "en" | "cn";
export type GamePadKeyTypes =
  | "arrowUp"
  | "arrowDown"
  | "arrowLeft"
  | "arrowRight"
  | "triangle"
  | "circle"
  | "square"
  | "cross"
  | "L1"
  | "L2"
  | "R1"
  | "R2"
  | "SELECT"
  | "ANALOG"
  | "START";
export type AspectRatioTypes = "16:9" | "4:3" | "stretch";
export type ColorTypes =
  | "red"
  | "orange"
  | "yellow"
  | "lightGreen"
  | "darkGreen"
  | "lightBlue"
  | "darkBlue"
  | "pink"
  | "gray"
  | "white";
export type BasicJobTypes =
  | "warrior"
  | "magician"
  | "thief"
  | "cleric"
  | "beginner";
export type NPCLevelTypes = "weak" | "normal" | "strong";
export type GenderTypes = "male" | "female" | "other";
export type GoalTypes = "period" | "money";
export type CharacterTypes = "player" | "npcPlayer" | "enemy" | "allied";
type CharacterAttrs = {
  name: string;
  isNPC: boolean;
};
type PlayerAttrs = CharacterAttrs & {
  /**
   * 1 ~ 99
   */
  level: number;
  attack: {
    /**
     * 理想上的算法會是 (`base` + `weapon` + `shield`) * `buffRatio` * `nerfRatio`
     */
    total: number;
    base: number;
    weapon: number;
    shield: number;
    buffRatio: number;
    nerfRatio: number;
  };
  defense: {
    /**
     * 理想上的算法會是 (`base` + `weapon` + `shield`) * `buffRatio` * `nerfRatio`
     */
    total: number;
    base: number;
    weapon: number;
    shield: number;
    buffRatio: number;
    nerfRatio: number;
  };
  magic: {
    /**
     * 理想上的算法會是 (`base` + `weapon` + `shield`) * `buffRatio` * `nerfRatio`
     */
    total: number;
    base: number;
    weapon: number;
    shield: number;
    buffRatio: number;
    nerfRatio: number;
  };
  speed: {
    /**
     * 理想上的算法會是 (`base` + `weapon` + `shield`) * `buffRatio` * `nerfRatio`
     */
    total: number;
    base: number;
    weapon: number;
    shield: number;
    buffRatio: number;
    nerfRatio: number;
  };
  hp: {
    current: number;
    /**
     * 理想上的算法會是 (`base` + `weapon` + `shield`) * `buffRatio` * `nerfRatio`
     */
    total: number;
    base: number;
    weapon: number;
    shield: number;
    buffRatio: number;
    nerfRatio: number;
  };
  /**
   * use this to render map
   */
  currentArea: AreaTypes;
  /**
   * vertex id
   */
  currentVertex: string;
  gender: GenderTypes;
  color: ColorTypes;
  job: JobTypes;
  jobsMasterStatus: { [key in JobTypes]: { level: number; rounds: number } };
  availableJobs: JobTypes[];
  possession: {
    items: Item[];
    magicBooks: MagicBook[];
    money: number;
    treasury: number;
  };
  npcLevel: NPCLevelTypes;
  /**
   * 1 ~ 4
   */
  controllerNumber: number;
};
/**
 * 忍者、海盜那些敵人
 */
type EnemyAttrs = CharacterAttrs & {
  job: JobTypes;
  isNPC: true;
};
/**
 * 大洋洲的無尾熊
 */
type AlliedAttrs = CharacterAttrs & {
  isNPC: true;
};
export type Shield = {
  name: TextsKeys;
  price: number;
  attack: number;
  defense: number;
  magic: number;
  speed: number;
  hp: number;
  explanation: string;
  /**
   * Monster可關聯到fromAreas
   */
  fromMonsters: string[];
  fromVerticesQuery: {
    areas: AreaTypes[];
    vertexTypes: VertexTypes[];
  }[];
};
export type Weapon = Shield & { additionalDamageJobs: JobTypes[] };
export type Decoration = Shield;
export type MagicTypes =
  | "弱体系魔法"
  | "変化系魔法"
  | "召喚系魔法"
  | "特殊系魔法"
  | "邢魔系魔法"
  | "回復系魔法"
  | "攻擊系魔法"
  | "破壊系魔法"
  | "強化系魔法"
  | "防御系魔法"
  | "反擊系魔法"
  | "補助系魔法";
export type MagicBook = {
  type: MagicTypes;
  name: TextsKeys;
  price: number;
  explanation: string;
  /**
   * Monster可關聯到fromAreas
   */
  fromMonsters: string[];
  fromVerticesQuery: {
    areas: AreaTypes[];
    vertexTypes: VertexTypes[];
  }[];
};
export type magicAttack = {
  type: MagicTypes;
  name: TextsKeys;
  price: number;
  damage?: "small" | "medium" | "large";
  explanation: string;
  /**
   * Monster可關聯到fromAreas
   */
  fromMonsters: string[];
  fromVerticesQuery: {
    areas: AreaTypes[];
    vertexTypes: VertexTypes[];
  }[];
};
export type magicDefense = {
  type: MagicTypes;
  name: TextsKeys;
  price: number;
  defense: number;
  explanation: string;
  /**
   * Monster可關聯到fromAreas
   */
  fromMonsters: string[];
  fromVerticesQuery: {
    areas: AreaTypes[];
    vertexTypes: VertexTypes[];
  }[];
};
export type Monster = {
  name: string;
  level: number;
  attack: number;
  defense: number;
  magic: number;
  speed: number;
  hp: number;
  trick?: string;
  magicAttack?: string;
  magicDefense?: string;
  exp: number;
  money: number;
  isBoss: boolean;
  fromAreas: AreaTypes[];
  possession: {
    name: string;
    isItem?: true;
    isMagic?: true;
    isWeapon?: true;
    isShield?: true;
    isDecoration?: true;
  };
};
export type Item = {
  type:
    | "移動系アイテム"
    | "回復系アイテム"
    | "強化系アイテム"
    | "補助系アイテム"
    | "邪魔系アイテム";
  description: string;
  price: number;
  name: TextsKeys;
};
export type JobTypes =
  | "beginner"
  | "warrior"
  | "magician"
  | "cleric"
  | "thief"
  | "knight"
  | "archmage"
  | "priest"
  | "bladeMaster"
  | "necromancer"
  | "exorcist"
  | "pirate"
  | "ninja"
  | "gamester"
  | "beastTamer"
  | "robot"
  | "carpenter"
  | "nurse"
  | "monk"
  | "dancer"
  | "alien"
  | "queen"
  | "gladiator"
  | "elves"
  | "royal"
  | "devil"
  | "anotherDevil";
export type Job = {
  // type: JobTypes;
  name: TextsKeys;
  levelUpPoint: {
    attack: number;
    defense: number;
    magic: number;
    speed: number;
    hp: number;
  };
  masterPoint: {
    attack: number;
    defense: number;
    magic: number;
    speed: number;
    hp: number;
  };
  bagSpace: {
    items: number;
    magicBooks: number;
  };
  masterRounds: number;
  price: number;
  pay: number;
  explanation: string;
  fieldSpeciality: {
    name: string;
    briefExplanation: string;
    fullExplanation: string;
  };
  battleSpeciality: {
    name: string;
    briefExplanation: string;
    fullExplanation: string;
  };
  allowMale: true;
  allowFemale: true;
  weeklyBonus?: unknown;
  condition?: unknown;
};
