import { magicDefense } from "global";

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

const magicDefenses = satisfiesRecords<magicDefense>()({
  /**
   * @todo type待確定
   */
  basic: {
    type: "反擊系魔法",
    name: "マホガド",
    price: 0,
    defense: 30,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  asia1: {
    type: "回復系魔法",
    name: "キュア",
    price: 3950,
    defense: 40,
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
    type: "回復系魔法",
    name: "リカバ",
    price: 6600,
    defense: 30,
    explanation: "",
    fromMonsters: ["霊幻導師"],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  europe1: {
    type: "強化系魔法",
    name: "ドギューン",
    price: 10500,
    defense: 40,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  europe2: {
    type: "回復系魔法",
    name: "ドキュア",
    price: 21000,
    defense: 55,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  europe3: {
    type: "強化系魔法",
    name: "ガチコン",
    price: 24800,
    defense: 40,
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
    type: "強化系魔法",
    name: "シャキット",
    price: 24800,
    defense: 40,
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
    type: "防御系魔法",
    name: "ドマホガド",
    price: 35000,
    defense: 60,
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
    type: "回復系魔法",
    name: "リキュア",
    price: 42800,
    defense: 50,
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
    name: "マホタブー",
    price: 55000,
    defense: 55,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  northAmerica3: {
    type: "強化系魔法",
    name: "ガッツリ",
    price: 63000,
    defense: 40,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  /**
   * @todo type待確定
   */
  enemy: {
    type: "反擊系魔法",
    name: "ドリカバ",
    price: 0,
    defense: 50,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  southAmerica1: {
    type: "防御系魔法",
    name: "ドマホガドラ",
    price: 86500,
    defense: 85,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  southAmerica2AndOceania3: {
    type: "回復系魔法",
    name: "ドリカバラ",
    price: 214800,
    defense: 60,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica", "Oceania"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  oceania1: {
    type: "強化系魔法",
    name: "キリガッツ",
    price: 126500,
    defense: 65,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  oceania2: {
    type: "補助系魔法",
    name: "リバイブ",
    price: 165800,
    defense: 60,
    explanation: "",
    fromMonsters: ["ネクロマンサー"],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  africa1: {
    type: "回復系魔法",
    name: "ドリキュアラ",
    price: 865000,
    defense: 55,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Africa"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  africa2: {
    type: "強化系魔法",
    name: "ミナアップ",
    price: 958000,
    defense: 60,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Africa"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  /**
   * @todo type待確定
   */
  arctic1: {
    type: "反擊系魔法",
    name: "マホリタン",
    price: 1680000,
    defense: 100,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["ArcticCave"],
        vertexTypes: ["MagicStoreField"],
      },
      {
        areas: ["Atlantis"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  /**
   * @todo type待確定
   */
  antarctica1: {
    type: "反擊系魔法",
    name: "バインド",
    price: 984000,
    defense: 60,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["AntarcticaCave"],
        vertexTypes: ["MagicStoreField"],
      },
      {
        areas: ["Atlantis"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
});

export default magicDefenses;
