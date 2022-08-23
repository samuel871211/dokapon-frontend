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

const magicAttackList: magicAttack[] = [
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
    name: "エネゲット",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
];

const magicAttacks = satisfiesRecords<magicAttack>()({
  basicAndEurope1: {
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
  europe1AndAfrica1: {
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
  europe2: {
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
  africa1: {
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
  africa2: {
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
  africa3: {
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
    name: "エネゲット",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
});
export default magicAttacks;
