import type { TextsKeys } from "data/texts";

export = Dokapon;
export as namespace Dokapon;

declare namespace Dokapon {
  export type BottomDialogProps = {
    // dialogTexts: TextsKeys[];
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
  export type NewGameProgress = {
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
    playersAttrs: [
      PlayerAttrs | NPCPlayerAttrs,
      PlayerAttrs | NPCPlayerAttrs,
      PlayerAttrs | NPCPlayerAttrs,
      PlayerAttrs | NPCPlayerAttrs
    ];
    userPreference: {
      lang: LangTypes;
      aspectRatio: AspectRatioTypes;
    };
    gamePadSetting: {
      [key in GamePadKeyTypes]: string;
    };
  };
  export type ViewTypes =
    | "Home"
    | "BattleModeSelectCharacter"
    | "StoryModeSelectCharacter"
    | "DokaponTheWorld"
    | "BetweenDimensions";
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
    | "Atlantis";
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
    gender: GenderTypes;
    color: ColorTypes;
    job: JobTypes;
    jobsMasterStatus?: { [key in JobTypes]: { level: number; rounds: number } };
    possession?: {
      items: Item[];
      magicBooks: MagicBook[];
    };
    isNPC: false;
    npcLevel: "";
    controllerNumber: number;
  };
  type NPCPlayerAttrs = CharacterAttrs & {
    gender: GenderTypes;
    color: ColorTypes;
    job: JobTypes;
    jobsMasterStatus?: { [key in JobTypes]: { level: number; rounds: number } };
    possession?: {
      items: Item[];
      magicBooks: MagicBook[];
    };
    isNPC: true;
    npcLevel: NPCLevelTypes;
    controllerNumber: number;
  };
  type EnemyAttrs = CharacterAttrs & {
    job: JobTypes;
    isNPC: true;
  };
  type AlliedAttrs = CharacterAttrs & {
    isNPC: true;
  };
  type ComponentTypes =
    | "NPCTopLeftImgArea"
    | "TitleArea"
    | "NPCDialog"
    | "SelectGoalType"
    | "GoalInputDialog"
    | "SelectNumberOfPlayers"
    | "SelectGender"
    | "NameInputDialog"
    | "SelectColor"
    | "SelectJob"
    | "NPCGenerateDialog"
    | "SelectNPCLevel"
    | "SelectOrderAndController";
  type GameProgress = {
    /**
     * 資料送到後端的時候才會產生
     */
    readonly timeStamp: string;
    goalType: GoalTypes;
    /**
     * `goalType`為money的時候，`goalInput`區間為 1 ~ 999,999,999
     *
     * `goalType`為period的時候，`goalInput`區間為 1 ~ 999
     */
    goalInput: number;
    /**
     * 1 ~ 4
     */
    numberOfPlayers: number;
    /**
     * 1 ~ 4
     */
    currentPlayerNumber: number;
    /**
     * 1 ~ 999
     */
    currentWeek: number;
    /**
     * 1 ~ 7
     */
    currentDayOfWeek: number;
    currentView:
      | "Home"
      | "SelectCharacter"
      | "GameStartIndex"
      | "Battle"
      | "WeaponStore"
      | "MagicStore"
      | "GroceryStore"
      | "JobStore"
      // 驚嘆號代表是地圖隨機出現的事件
      | "beggarGrandpa!"
      | "goddess!"
      | "keroro!"
      | "trader!"
      | "weapon!"
      | "deliveryBird!"
      | "houseOfKill!"
      | "paperScissors!"
      | "photographer!"
      | "bigEater!"
      | "chef!"
      | "darkDweller!"
      | "job!"
      | "nurse!";
    currentComponents: ComponentTypes[];
    componentsStates: {
      SelectGoalType: {
        show: boolean;
      };
      TitleArea: {
        show: boolean;
      };
      GoalInputDialog: {
        selectedIndex: number;
      };
      NameInputDialog: {
        selectedSectionIdx: 0 | 1 | 2;
        selectedWordIdx: number;
        keyboardType: "hiragana" | "katakana" | "special";
      };
      SelectColor: {
        selectedIndex: number;
      };
      SelectJob: {
        selectedIndex: number;
      };
      NPCGenerateDialog: {
        selectedIndex: number;
      };
    };
    playersAttrs: [
      PlayerAttrs | NPCPlayerAttrs,
      PlayerAttrs | NPCPlayerAttrs,
      PlayerAttrs | NPCPlayerAttrs,
      PlayerAttrs | NPCPlayerAttrs
    ];
    userPreference: {
      lang: LangTypes;
      aspectRatio: AspectRatioTypes;
      gamePadSetting: {
        [key in GamePadKeyTypes]: string;
      };
    };
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
      item: number;
      magic: number;
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
  namespace GameProgress {
    type Context = {
      gameProgress: GameProgress;
      gameProgressDispatch: (val: Action) => void;
    };
    type Action =
      | {
          type: "updateAll";
          payload: GameProgress;
        }
      | {
          type: "goalType";
          payload: GoalTypes;
        }
      | {
          type: "goalInput";
          payload: number;
        }
      | {
          type: "numberOfPlayers" | "currentPlayerNumber";
          payload: number;
        }
      | {
          type: "controllerNumber" | "shuffle";
          payload: number[];
        }
      | {
          type: "gender";
          payload: GenderTypes;
        }
      | {
          type: "name";
          payload: string;
        }
      | {
          type: "color";
          payload: ColorTypes;
        }
      | {
          type: "job";
          payload: BasicJobTypes;
        }
      | {
          type: "npcLevel";
          payload: NPCLevelTypes;
        };
  }
  // namespace Shapes {
  //   type ElementTypes = "";
  //   type LinkTypes = "";
  // }
  export namespace SelectCharacter {
    export type Steps =
      | "SelectGoalType"
      | "GoalInputDialog"
      | "SelectNumberOfPlayers"
      | "OnlyOnePlayer"
      | "SelectGender"
      | "BeforeNameInput"
      | "NameInputDialog"
      | "SelectColor"
      | "SelectJob"
      | "BeforeNPCGenerateDialog"
      | "NPCGenerateDialog"
      | "SelectNPCLevel"
      | "PlayerAttrsCollected"
      | "SelectController"
      | "SelectControllerConfirm"
      | "SelectOrderStep1"
      | "SelectOrderStep2"
      | "SelectOrderStep3";
    type UIState = {
      showTitleArea: boolean;
      showNPCTopLeftImgArea: boolean;
      showNPCDialog: boolean;
      showConfirmDialog: boolean;
      showSelectCharacter: boolean;
      selectedJob: BasicJobTypes | "";
      confirmDialogSelectedIdx: number;
      npcsAttrsRegenerated: [boolean, boolean, boolean, boolean];
      currentStep: Steps;
    };
    type Action =
      | {
          type:
            | "showTitleArea"
            | "showNPCTopLeftImgArea"
            | "showNPCDialog"
            | "showConfirmDialog"
            | "showSelectCharacter";
          payload: boolean;
        }
      | {
          type: "selectedJob";
          payload: UIState["selectedJob"];
        }
      | {
          type: "confirmDialogSelectedIdx";
          payload: UIState["confirmDialogSelectedIdx"];
        }
      | {
          type: "npcsAttrsRegenerated";
          payload: UIState["npcsAttrsRegenerated"];
        }
      | {
          type: "currentStep";
          payload: UIState["currentStep"];
        };
    type Context = {
      UIState: UIState;
      UIStateDispatch: (val: Action) => void;
    };
  }
  namespace Home {
    type UIState = {
      showBtnGroup: boolean;
      showSetting: boolean;
      showBook: boolean;
      showKeyMappingDialog: boolean;
    };
    type Action = {
      type:
        | "showBtnGroup"
        | "showSetting"
        | "showBook"
        | "showKeyMappingDialog";
      payload: boolean;
    };
    type Context = {
      UIState: UIState;
      UIStateDispatch: (val: Action) => void;
    };
  }
  namespace Settings {
    type UserPreference = {
      lang: LangTypes;
      aspectRatio: AspectRatioTypes;
    } & {
      [key in GamePadKeyTypes]: string;
    };
    type Action =
      | {
          type: "update";
          payload: UserPreference;
        }
      | {
          type: GamePadKeyTypes;
          payload: string;
        }
      | {
          type: "aspectRatio";
          payload: AspectRatioTypes;
        }
      | {
          type: "lang";
          payload: LangTypes;
        };
    type Context = {
      userPreference: UserPreference;
      userPreferenceDispatch: (val: Action) => void;
    };
  }
  namespace Game {
    type UIState = {
      showDrawer: boolean;
      /**
       * Drawer的第一個item(移動)
       */
      showRoulette: boolean;
      /**
       * Drawer的第二個item(背包)
       */
      showBag: boolean;
      /**
       * Drawer的第四個item(技能)
       */
      showTalent: boolean;
      /**
       * Drawer的第五個item(資訊)
       */
      showData: boolean;
      /**
       * Drawer的第三個item(查看)
       */
      showCheck: boolean;
      /**
       * 進入Drawer的第三個item(查看)之後
       *
       * 再點擊start對應的鍵盤按鍵，就可以進到overviewmap
       *
       * 但只有在mainWorld才有這個選項
       */
      showOverviewMap: boolean;
      /**
       * Check(查看)底下又有overviewMap
       *
       * 兩者皆為view級的component
       *
       * 根據此值，來決定要focus Check或是overviewMap
       */
      isCheckTopLayer: boolean;
      /**
       * 骰完骰子之後，會變成true
       */
      isPaperTopLayer: boolean;
      /**
       * Check(查看)底下的其中一個dialog
       *
       * 使用者滑鼠hover到vertex才會觸發
       */
      showVertexAttrsAndDistance: boolean;
      /**
       * Check(查看)右上角的dialog
       *
       * 只有在mainWorld才有...
       *
       * 洞窟裡面不會有minimap
       */
      showMinimap: boolean;
      /**
       * Check(查看)左上角的dialog
       */
      showCheckTip: boolean;
      showBattleFieldCheck: boolean;
      showMagicBookFieldCheck: boolean;
      showTreasureFieldCheck: boolean;
      showGoldTreasureFieldCheck: boolean;
      showRedTreasureFieldCheck: boolean;
      showWhiteTreasureFieldCheck: boolean;
      showKeyTreasureFieldCheck: boolean;
      showWorldTransferFieldCheck: boolean;
      showDamageFieldCheck: boolean;
      // 洞窟，根據不同地區，顯示不同文字
      showCaveFieldCheck: boolean;
      // 集金類型
      showCollectMoneyFieldCheck: boolean;
      showCollectAllMoneyFieldCheck: boolean;
      // 商店類型
      showWeaponStoreFieldCheck: boolean;
      showJobStoreFieldCheck: boolean;
      showGroceryStoreFieldCheck: boolean;
      showMagicStoreFieldCheck: boolean;
      // 村莊類型
      showVillageFieldCheck: boolean;
      // 金庫類型
      showChruchFieldCheck: boolean;
      showCastleFieldCheck: boolean;
      curHoverVertex: Vertex;
      curClickVertex: Vertex;
    };
    type Action =
      | {
          type:
            | "showDrawer"
            | "showRoulette"
            | "showBag"
            | "showTalent"
            | "showData"
            | "showCheck"
            | "showOverviewMap"
            | "isCheckTopLayer"
            | "isPaperTopLayer"
            | "showVertexAttrsAndDistance"
            | "showMinimap"
            | "showCheckTip"
            //
            | "showBattleFieldCheck"
            | "showMagicBookFieldCheck"
            | "showTreasureFieldCheck"
            | "showGoldTreasureFieldCheck"
            | "showRedTreasureFieldCheck"
            | "showWhiteTreasureFieldCheck"
            | "showKeyTreasureFieldCheck"
            | "showWorldTransferFieldCheck"
            | "showDamageFieldCheck"
            //
            | "showCaveFieldCheck"
            //
            | "showCollectMoneyFieldCheck"
            | "showCollectAllMoneyFieldCheck"
            //
            | "showWeaponStoreFieldCheck"
            | "showJobStoreFieldCheck"
            | "showGroceryStoreFieldCheck"
            | "showMagicStoreFieldCheck"
            //
            | "showVillageFieldCheck"
            //
            | "showChruchFieldCheck"
            | "showCastleFieldCheck";
          payload: boolean;
        }
      | {
          type: "curHoverVertex" | "curClickVertex";
          payload: Vertex;
        };
    type Context = {
      UIState: UIState;
      UIStateDispatch: (val: Action) => void;
    };
  }
}
