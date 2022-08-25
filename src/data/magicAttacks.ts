import { magicAttack } from "global";

/**
 * https://stackoverflow.com/questions/70956050/how-do-i-declare-object-value-type-without-declaring-key-type
 *
 * 可以在不宣告key type的情況，宣告value的型別
 *
 * 如此一來，key就可以透過TS自動解析成union type
 */
function satisfiesRecords<valueType>() {
  return <K extends PropertyKey>(record: Record<K, valueType>) => record;
}

const magicAttacks = satisfiesRecords<magicAttack>()({
  basicAndEurope1: {
    type: "反擊系魔法",
    name: "ヨワッチ",
    price: 800,
    damage: "small",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  asia1: {
    type: "反擊系魔法",
    name: "フニャリ",
    price: 800,
    damage: "small",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  asia2: {
    type: "反擊系魔法",
    name: "ポケラ",
    price: 800,
    damage: "small",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  asia3: {
    type: "反擊系魔法",
    name: "ノロー",
    price: 800,
    damage: "small",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  asia4: {
    type: "反擊系魔法",
    name: "フリジ",
    price: 20000,
    damage: "small",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  europe2Andafrica1: {
    type: "反擊系魔法",
    name: "ゼニゲット",
    price: 12000,
    damage: "small",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe", "Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  europe3: {
    type: "反擊系魔法",
    name: "ハリー",
    price: 23000,
    damage: "small",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  russia1: {
    type: "反擊系魔法",
    name: "クルパー",
    price: 39800,
    damage: "small",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  russia2: {
    type: "反擊系魔法",
    name: "ドクラマグラ",
    price: 46000,
    damage: "small",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  russia3: {
    type: "反擊系魔法",
    name: "エレク",
    price: 60000,
    damage: "small",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  russia4: {
    type: "反擊系魔法",
    name: "バーン",
    price: 65000,
    damage: "small",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  northAmerica1: {
    type: "反擊系魔法",
    name: "ＤＦマホケス",
    price: 84000,
    damage: "small",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  northAmerica2: {
    type: "反擊系魔法",
    name: "フリーズ",
    price: 120000,
    damage: "medium",
    explanation: "",
    fromMonsters: ["氷玉"],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  northAmerica3: {
    type: "反擊系魔法",
    name: "ハリーク",
    price: 135000,
    damage: "medium",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
      {
        areas: ["EuropeCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  southAmerica1: {
    type: "反擊系魔法",
    name: "ハズシャーン",
    price: 152000,
    damage: "small",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  southAmerica2: {
    type: "反擊系魔法",
    name: "ＡＴマホケス",
    price: 198000,
    damage: "small",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  southAmerica3: {
    type: "反擊系魔法",
    name: "エレクト",
    price: 280000,
    damage: "medium",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  southAmerica4: {
    type: "反擊系魔法",
    name: "バーニー",
    price: 290000,
    damage: "medium",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  oceania1: {
    type: "反擊系魔法",
    name: "ウラミム",
    price: 258000,
    damage: "small",
    explanation: "",
    fromMonsters: ["マサイハンター"],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  oceania2: {
    type: "反擊系魔法",
    name: "フリーザー",
    price: 450000,
    damage: "large",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  oceania3: {
    type: "反擊系魔法",
    name: "ハリケーン",
    price: 480000,
    damage: "large",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  africa2: {
    type: "反擊系魔法",
    name: "ラストルズ",
    price: 365000,
    damage: "medium",
    explanation: "",
    fromMonsters: ["サビトマトガエル"],
    fromVerticesQuery: [
      {
        areas: ["Africa"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  africa3: {
    type: "反擊系魔法",
    name: "エレクトラ",
    price: 750000,
    damage: "large",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Africa"],
        vertexTypes: ["MagicStoreField"],
      },
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  africa4: {
    type: "反擊系魔法",
    name: "バーニング",
    price: 800000,
    damage: "large",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Africa"],
        vertexTypes: ["MagicStoreField"],
      },
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  sleep: {
    type: "反擊系魔法",
    name: "ネムネム",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["AfricaCave"],
        vertexTypes: ["KeyTreasureField"],
      },
    ],
  },
  arctic1: {
    type: "反擊系魔法",
    name: "レベゲット",
    price: 1130000,
    damage: "small",
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["ArcticCave"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  antarctica1: {
    type: "反擊系魔法",
    name: "ゴウトゥヘル",
    price: 1666000,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["AntarcticaCave"],
        vertexTypes: ["MagicStoreField"],
      },
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  enemy: {
    type: "反擊系魔法",
    name: "エネゲット",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
});
export default magicAttacks;
