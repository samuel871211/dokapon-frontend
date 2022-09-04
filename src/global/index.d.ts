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
     * 資料送到後端的時候才會產生
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
    name: string;
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
    name: string;
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
    name: string;
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
    name: string;
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
      UIStateDispatch: Dispatch<Action>;
    };
  }
}
