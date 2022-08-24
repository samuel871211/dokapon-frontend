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

const magicDefenseList: magicDefense[] = [
  {
    name: "マホガド",
    price: 0,
    defense: 30,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
    name: "ドリカバ",
    price: 0,
    defense: 50,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
];

const magicDefenses = satisfiesRecords<magicDefense>()({
  basic: {
    name: "マホガド",
    price: 0,
    defense: 30,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  asia1: {
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
  enemy: {
    name: "ドリカバ",
    price: 0,
    defense: 50,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  southAmerica1: {
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
  arctic1: {
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
  antarctica1: {
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
