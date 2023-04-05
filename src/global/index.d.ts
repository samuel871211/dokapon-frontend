import { AccessoryTypes } from "data/accessories";
import { MagicAttackTypes } from "data/magicAttacks";
import { MagicDefenseTypes } from "data/magicDefenses";
import { MonsterTypes } from "data/monsters";
import { shieldTypes } from "data/shields";
import type { TextsKeys } from "data/texts";
import { weaponTypes } from "data/weapons";

export type ListTopics =
  | "job"
  | "monster"
  | "weapon"
  | "shield"
  | "accessory"
  | "specialty";
export type GraphJSON = {
  vertices: Vertex[];
  edges: Edge[];
};
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
  // | "GraphUI"
  | "Walk"
  // | "WalkConfirm"
  | "WalkToAvailableVertices"
  | "Drawer"
  | "OverviewMap"
  | "Bag"
  | "Check"
  | "Roulette"
  | "Data"
  | "UseFieldSpecialty"
  | "BattleFieldCheck"
  | "CastleFieldCheck"
  | "ChurchFieldCheck"
  | "CaveFieldCheck"
  | "BeforeCollectMoneyFieldCheck"
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
  | "WorldTransferFieldCheck"
  | "PlayerVsCharacterDialogs"
  | "SelectCharacterToCompare";
export type NormalBattleComponentTypes =
  | "VS"
  | "ShowVertexTypography"
  | "SwapCards";
export type HomeComponentTypes = "ButtonGroup" | "Settings" | "Book";
export type GameProgress = {
  timeStamp: string;
  /**
   * `BottomDialog`的ConfirmDialog
   */
  isHoverOnConfirmBtn: boolean;
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
  /**
   * Assume sentences are already tranlated.
   */
  bottomDialogSentencesQueue: string[];
  currentView: ViewTypes;
  playersAttrs: [PlayerAttrs, PlayerAttrs, PlayerAttrs, PlayerAttrs];
  gamePadSetting: { [key in GamePadKeyTypes]: string };
  userPreference: {
    lang: LangTypes;
    aspectRatio: AspectRatioTypes;
  };
  HomeState: {
    curComponent: HomeComponentTypes;
    ButtonGroupState: {
      /**
       * 0 ~ 3
       */
      selectedIdx: number;
    };
    SettingsState: {
      showKeyMappingDialog: boolean;
      currentAxis: {
        /**
         * 0 ~ 9
         */
        row: number;
        /**
         * 0 ~ 2
         */
        col: number;
      };
      /**
       * 使用者如果選擇`取消`，要回到設定前的狀態
       */
      prevGamePadSetting: GameProgress["gamePadSetting"];
    };
  };
  BattleModeSelectCharacterState: {
    curComponent: BattleModeSelectCharacterComponentTypes;
    GoalInputDialogState: {
      selectedIdx: number;
    };
    NameInputDialogState: {
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
    NPCGenerateDialogState: {
      /**
       * 0 ~ 4
       *
       * @default 4
       */
      selectedIdx: number;
    };
    SelectNPCLevelState: {
      prevSelectedNPCLevel: NPCLevelTypes;
    };
    SelectNPCGenderState: {
      prevSelectedGender: GenderTypes;
    };
    SelectNPCColorState: {
      prevSelectedColor: ColorTypes;
    };
    SelectNPCJobState: {
      prevSelectedJob: JobTypes;
    };
    ShuffleOrderState: {
      /**
       * length = 4
       *
       * `number` from 0 ~ 3
       */
      shuffleIndexes: number[];
      intervalId: number;
    };
  };
  StoryModeSelectCharacterState: {
    curComponent: StoryModeSelectCharacterComponentTypes;
    NameInputDialogState: {
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
    NPCGenerateDialogState: {
      /**
       * 0 ~ 4
       *
       * @default 4
       */
      selectedIdx: number;
    };
    SelectNPCLevelState: {
      prevSelectedNPCLevel: NPCLevelTypes;
    };
    SelectNPCGenderState: {
      prevSelectedGender: GenderTypes;
    };
    SelectNPCColorState: {
      prevSelectedColor: ColorTypes;
    };
    SelectNPCJobState: {
      prevSelectedJob: JobTypes;
    };
    ShuffleOrderState: {
      /**
       * length = 4
       *
       * `number` from 0 ~ 3
       */
      shuffleIndexes: number[];
      intervalId: number;
    };
  };
  DokaponTheWorldState: {
    /**
     * 顛倒的stack，進出都在開頭
     */
    curComponents: DokaponTheWorldComponentTypes[];
    curCenterVertex: Vertex;
    curClickedCharacters: (PlayerAttrs | MonsterAttrs)[];
    /**
     * @default -1
     */
    curStepCount: number;
    curPath: VertexBriefProps[];
    bossMonsters: MonsterAttrs[];
    enemies: PlayerAttrs[];
    DataState: {
      /**
       * 0 ~ 2
       */
      curLevel: number;
      /**
       * 有pagination的Component會用到
       */
      curPage: number;
      /**
       * @default 0
       */
      curListStartIdx: number;
      /**
       * @default -1
       */
      curListIdx: number;
      /**
       * 0 ~ 3
       */
      level0Idx: number;
      /**
       * [0 ~ 5, 0 ~ 5, 0 ~ 2, 0 ~ 2]
       */
      level1Idxs: [number, number, number, number];
      /**
       * 根據此值，決定渲染list或是其他information
       */
      isCircleClicked: boolean;
      /**
       * 0 ~ 1
       */
      listJobCurPage: number;
      /**
       * @default -1
       *
       * -1 ~ 3
       */
      optionSettingSelectedIdx: number;
      /**
       * @default -1
       *
       * -1 ~ 2
       */
      optionModeSelectedIdx: number;
    };
    GraphUIState: {
      SVGTranslate: Position;
    };
    CheckState: {
      showVertexNameAndDistance: boolean;
      showCheckTip: boolean;
      showMiniMap: boolean;
      /**
       * 0 ~ 30
       */
      curHoverVertexDistance: number;
      curHoverVertexName: string;
      // curHoverVertex: Vertex | undefined;
      miniMap: {
        player1Position: Position;
        player2Position: Position;
        player3Position: Position;
        player4Position: Position;
        curAreaPosition: Position;
      };
    };
    DrawerState: {
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
    BagState: {
      currentBag: "items" | "magicBooks";
      selectedIdx: number;
    };
    GroceryStoreFieldCheckState: {
      /**
       * @default 0
       *
       * 退出的時候，要reset回0
       */
      curListPage: number;
    };
    JobStoreFieldCheckState: {
      /**
       * @default 0
       *
       * 退出的時候，要reset回0
       */
      curListPage: number;
    };
    MagicStoreFieldCheckState: {
      /**
       * @default 0
       *
       * 退出的時候，要reset回0
       */
      curListPage: number;
    };
    WeaponStoreFieldCheckState: {
      /**
       * @default 0
       *
       * 退出的時候，要reset回0
       */
      curListPage: number;
    };
    CollectMoneyFieldCheckState: {
      /**
       * 0 ~ 6
       *
       * @default 0
       *
       * 退出的時候，要reset回0
       */
      curListPage: number;
    };
    PlayerVsCharacterDialogState: {
      /**
       * @default 0
       *
       * 退出的時候，要reset回0
       */
      curPage: number;
    };
    SelectCharacterToCompareState: {
      /**
       * @default 0
       *
       * 退出的時候，要reset回0
       */
      selectedIdx: number;
    };
  };
  NormalBattleState: {
    curComponent: NormalBattleComponentTypes;
  };
};
export type ViewTypes =
  | "Home"
  | "BattleModeSelectCharacter"
  | "StoryModeSelectCharacter"
  | "DokaponTheWorld"
  | "NormalBattle";
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
export type VertexBriefProps = { id: VertexId; idx: number };
export type VertexId = string;
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
  | "OceaniaCaveB1"
  | "OceaniaCaveB2"
  | "Africa"
  | "AfricaCave"
  | "AfricaCaveB2"
  | "AfricaCaveB3Right"
  | "AfricaCaveB3Left"
  | "AfricaCaveB3Center"
  | "Arctic"
  | "ArcticCave"
  | "ArcticCaveB2"
  | "ArcticCaveB3"
  | "Antarctica"
  | "AntarcticaCave"
  | "AntarcticaCaveB2"
  | "AntarcticaCaveB3"
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
/**
 * @todo 將 玩家、NPC玩家、敵人、同伴、Boss、Monster的屬性區分
 */
export type CharacterTypes =
  | "player"
  | "npcPlayer"
  | "enemy"
  | "allied"
  | "monster";
type MonsterAttrs = {
  name: MonsterTypes;
  characterType: "monster";
  attack: {
    buffRatio: number;
    nerfRatio: number;
  };
  defense: {
    buffRatio: number;
    nerfRatio: number;
  };
  magic: {
    buffRatio: number;
    nerfRatio: number;
  };
  speed: {
    buffRatio: number;
    nerfRatio: number;
  };
  hp: {
    current: number;
  };
  area: AreaTypes;
  /**
   * 因為地圖的JSON資料不會變，所以可以直接用index當作reference
   */
  vertexIdx: number;
};
type PlayerAttrs = {
  name: string;
  isNPC: boolean;
  characterType: "player" | "npcPlayer";
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
  area: AreaTypes;
  /**
   * 因為地圖的JSON資料不會變，所以可以直接用index當作reference
   */
  vertexIdx: number;
  gender: GenderTypes;
  color: ColorTypes;
  job: JobTypes;
  weapon: weaponTypes;
  shield: shieldTypes;
  magicAttack: MagicAttackTypes;
  magicDefense: MagicDefenseTypes;
  accessory: AccessoryTypes;
  /**
   * 各職業master是5等
   *
   * 各職業，每升1等需要的回合數不一樣
   */
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
export type Shield = {
  name: TextsKeys;
  price: number;
  attack: number;
  defense: number;
  magic: number;
  speed: number;
  hp: number;
  explanation: TextsKeys;
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
export type Accessory = Shield;
export type Specialty = {
  name: TextsKeys;
  areaName: TextsKeys;
  explanation: TextsKeys;
};
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
  | "補助系魔法"
  | "吸收系魔法";
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
export type MonsterFixedAttrs = {
  name: TextsKeys;
  level: number;
  attack: number;
  defense: number;
  magic: number;
  speed: number;
  hp: number;
  specialty?: string;
  magicAttack?: MagicAttackTypes;
  magicDefense?: MagicDefenseTypes;
  exp: number;
  money: number;
  isBoss: boolean;
  fromAreas: AreaTypes[];
  explanation: TextsKeys;
  possession: {
    name: string;
    isItem?: true;
    isMagic?: true;
    isWeapon?: true;
    isShield?: true;
    isAccessory?: true;
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
export type FieldSpecialtyTypes = "manual" | "auto";
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
  briefExplanation: string;
  fullExplanation: string;
  fieldSpecialty: {
    name: TextsKeys;
    briefExplanation: TextsKeys;
    fullExplanation: TextsKeys;
    type: FieldSpecialtyTypes;
  };
  battleSpecialty: {
    name: TextsKeys;
    briefExplanation: TextsKeys;
    fullExplanation: TextsKeys;
  };
  allowMale: true;
  allowFemale: true;
  weeklyBonus?: unknown;
  /**
   * @todo 轉職條件
   */
  condition?: unknown;
};
