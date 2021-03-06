import { Dispatch } from "react";

export = Dokapon;
export as namespace Dokapon;

declare namespace Dokapon {
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
    | "MagicField"
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
  type ColorTypes =
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
  type BasicJobTypes = "warrior" | "magician" | "thief" | "cleric" | "beginner";
  type NPCLevelTypes = "weak" | "normal" | "strong";
  type GenderTypes = "male" | "female" | "other";
  type GoalTypes = "period" | "money";
  type CharacterTypes = "player" | "npcPlayer" | "enemy" | "allied";
  type CharacterAttrs = {
    name: string;
    isNPC: boolean;
  };
  type PlayerAttrs = CharacterAttrs & {
    gender: GenderTypes;
    color: ColorTypes;
    job: JobTypes;
    isNPC: false;
  };
  type NPCPlayerAttrs = CharacterAttrs & {
    gender: GenderTypes;
    color: ColorTypes;
    job: JobTypes;
    isNPC: true;
    npcLevel: NPCLevelTypes;
  };
  type EnemyAttrs = CharacterAttrs & {
    job: JobTypes;
    isNPC: true;
  };
  type AlliedAttrs = CharacterAttrs & {
    isNPC: true;
  };
  type GameProgress = {
    /**
     * ???????????????????????????????????????
     */
    readonly timeStamp: string;
    goalType: GoalTypes;
    goalInput: number;
    numberOfPlayers: number;
    currentPlayer: number;
    playersAttrs: [
      PlayerAttrs | NPCPlayerAttrs,
      PlayerAttrs | NPCPlayerAttrs,
      PlayerAttrs | NPCPlayerAttrs,
      PlayerAttrs | NPCPlayerAttrs
    ];
  };
  export type Shield = {
    name: string;
    price: number;
    attack: number;
    defense: number;
    magic: number;
    speed: number;
    hp: number;
    explanation: string;
    /**
     * Monster????????????fromAreas
     */
    fromMonsters: string[];
    fromVerticesQuery: {
      areas: AreaTypes[];
      vertexTypes: VertexTypes[];
    }[];
  };
  export type Weapon = Shield & { additionalDamageJobs: JobTypes[] };
  export type Decoration = Shield;
  export type MagicBook = {
    type: "damage" | "status" | "other";
    name: string;
    price: number;
    explanation: string;
    /**
     * Monster????????????fromAreas
     */
    fromMonsters: string[];
    fromVerticesQuery: {
      areas: AreaTypes[];
      vertexTypes: VertexTypes[];
    }[];
  };
  export type magicAttack = {
    name: string;
    price: number;
    damage?: "small" | "medium" | "large";
    explanation: string;
    /**
     * Monster????????????fromAreas
     */
    fromMonsters: string[];
    fromVerticesQuery: {
      areas: AreaTypes[];
      vertexTypes: VertexTypes[];
    }[];
  };
  export type magicDefense = {
    name: string;
    price: number;
    defense: number;
    explanation: string;
    /**
     * Monster????????????fromAreas
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
      | "?????????????????????"
      | "?????????????????????"
      | "?????????????????????"
      | "?????????????????????"
      | "?????????????????????";
    description: string;
    price: number;
    name: string;
  };
  export type JobTypes =
    | "beginner"
    | "warrior"
    | "magician"
    | "cleric"
    | "thief"
    | "knight"
    | "archMage"
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
    type: JobTypes;
    name: string;
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
      gameProgressDispatch: Dispatch<Action>;
    };
    type Action =
      | {
          type: "goalType";
          payload: GoalTypes;
        }
      | {
          type: "goalInput";
          payload: number;
        }
      | {
          type: "numberOfPlayers" | "currentPlayer";
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
  namespace SelectCharacter {
    type Steps =
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
      selectedJob: Dokapon.BasicJobTypes | "";
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
      UIStateDispatch: Dispatch<Action>;
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
      UIStateDispatch: Dispatch<Action>;
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
      userPreferenceDispatch: Dispatch<Action>;
    };
  }
  namespace Game {
    type UIState = {
      showDrawer: boolean;
      /**
       * Drawer????????????item(??????)
       */
      showRoulette: boolean;
      /**
       * Drawer????????????item(??????)
       */
      showBag: boolean;
      /**
       * Drawer????????????item(??????)
       */
      showTalent: boolean;
      /**
       * Drawer????????????item(??????)
       */
      showData: boolean;
      /**
       * Drawer????????????item(??????)
       */
      showCheck: boolean;
      /**
       * ??????Drawer????????????item(??????)??????
       *
       * ?????????start???????????????????????????????????????overviewmap
       *
       * ????????????mainWorld??????????????????
       */
      showOverviewMap: boolean;
      /**
       * Check(??????)????????????overviewMap
       *
       * ????????????view??????component
       *
       * ???????????????????????????focus Check??????overviewMap
       */
      isCheckTopLayer: boolean;
      /**
       * ??????????????????????????????true
       */
      isPaperTopLayer: boolean;
      /**
       * Check(??????)?????????????????????dialog
       *
       * ???????????????hover???vertex????????????
       */
      showVertexAttrsAndDistance: boolean;
      /**
       * Check(??????)????????????dialog
       *
       * ?????????mainWorld??????...
       *
       * ?????????????????????minimap
       */
      showMinimap: boolean;
      /**
       * Check(??????)????????????dialog
       */
      showCheckTip: boolean;

      showBattleFieldCheck: boolean;
      showMagicFieldCheck: boolean;
      showTreasureFieldCheck: boolean;
      showCollectMoneyFieldCheck: boolean;
      CheckshowCollectAllMoneyField: boolean;
      CheckshowGoldTreasureField: boolean;
      CheckshowRedTreasureField: boolean;
      CheckshowWhiteTreasureField: boolean;
      CheckshowKeyTreasureField: boolean;
      CheckshowWorldTransferField: boolean;
      showChruchFieldCheck: boolean;
      showWeaponStoreFieldCheck: boolean;
      showJobStoreFieldCheck: boolean;
      showGroceryStoreFieldCheck: boolean;
      showMagicStoreFieldCheck: boolean;
      showVillageFieldCheck: boolean;
      showCaveFieldCheck: boolean;
      showCastleFieldCheck: boolean;
      showDamageFieldCheck: boolean;
      curHoverVertex: Vertex;
      curClickVertex: Vertex;
      // showNodeDescription: boolean;
      // showBankList: boolean;
      // showVillageStatus: boolean;
      // showVillageValueList: boolean;
    };
    type Action = {
      type: // keyof UIState
      | "showDrawer"
        | "showRoulette"
        | "showBag"
        | "showTalent"
        | "showData"
        | "showCheck"
        | "isPaperTopLayer"
        | "isCheckTopLayer"
        | "showOverviewMap"
        | "showVertexAttrsAndDistance"
        | "showMinimap"
        | "showNodeDescription"
        | "showCheckTip"
        | "showGroceryStoreFieldCheck"
        | "showBankList"
        | "showVillageStatus"
        | "showVillageValueList";
      payload: boolean;
    };
    type Context = {
      UIState: UIState;
      UIStateDispatch: Dispatch<Action>;
    };
  }
}
