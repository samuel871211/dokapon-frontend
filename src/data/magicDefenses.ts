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
    explanation: "魔力のカベを作り、\n魔法のダメージを減らす。\n魔法防御力30",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  asia1: {
    type: "回復系魔法",
    name: "キュア",
    price: 3950,
    defense: 40,
    explanation:
      "魔法のダメージを減らし、\nステータスを1つ回復する。\n魔法防御力40",
    fromMonsterIdxs: [],
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
    explanation: "魔法のダメージを減らし、\nHPを小回復する。\n魔法防御力30",
    fromMonsterIdxs: [8],
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
    explanation: "魔法のダメージを減らし、\n素早さを上げる。\n魔法防御力40",
    fromMonsterIdxs: [],
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
    explanation:
      "魔法のダメージを減らし、\nステータスを全て回復する。\n魔法防御力55",
    fromMonsterIdxs: [],
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
    explanation: "魔法のダメージを減らし、\n防御力を上げる。\n魔法防御力40",
    fromMonsterIdxs: [],
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
    explanation: "魔法のダメージを減らし、\n魔力を上げる。\n魔法防御力40",
    fromMonsterIdxs: [],
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
    explanation: "魔力のカベを作り、\n魔法のダメージを減らす。\n魔法防御力60",
    fromMonsterIdxs: [],
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
    explanation:
      "魔法のダメージを減らし、\nHPとステータスを小回復。\n魔法防御力50",
    fromMonsterIdxs: [],
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
    explanation:
      "魔法のダメージを減らし、\nどちらかの魔法を禁ずる。\n魔法防御力55",
    fromMonsterIdxs: [],
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
    explanation: "魔法のダメージを減らし、\n攻撃力を上げる。\n魔法防御力40",
    fromMonsterIdxs: [],
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
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  southAmerica1: {
    type: "防御系魔法",
    name: "ドマホガドラ",
    price: 86500,
    defense: 85,
    explanation: "魔力のカベを作り、\n魔法のダメージを減らす。\n魔法防御力85",
    fromMonsterIdxs: [],
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
    explanation: "魔法のダメージを減らし、\nHPを完全に回復する。\n魔法防御力60",
    fromMonsterIdxs: [],
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
    explanation:
      "魔法のダメージを減らし、\n魔力を攻撃力に加える。\n魔法防御力65",
    fromMonsterIdxs: [],
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
    explanation:
      "魔法のダメージを減らし、\n死亡時に生き返る体にする。\n魔法防御力60",
    fromMonsterIdxs: [110],
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
    explanation:
      "魔法のダメージを減らし、\nHPとステータスを全回復。\n魔法防御力55",
    fromMonsterIdxs: [],
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
    explanation:
      "魔法のダメージを減らし、\n4つのパラメータを上げる。\n魔法防御力60",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: ["Africa"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  arctic1: {
    type: "反擊系魔法",
    name: "マホリタン",
    price: 1680000,
    defense: 100,
    explanation: "",
    fromMonsterIdxs: [],
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
    type: "反擊系魔法",
    name: "バインド",
    price: 984000,
    defense: 60,
    explanation: "",
    fromMonsterIdxs: [],
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
export type MagicDefenseTypes = keyof typeof magicDefenses;
