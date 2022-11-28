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
    type: "弱体系魔法",
    name: "ヨワッチ",
    price: 800,
    damage: "small",
    explanation:
      "カが抜けるオーラで\n小ダメージを与えた上、\n相手の攻撃力を下げる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  asia1: {
    type: "弱体系魔法",
    name: "フニャリ",
    price: 800,
    damage: "small",
    explanation:
      "体をほぐすオーラで\n小ダメージを与えた上、\n相手の防御力を下げる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  asia2: {
    type: "弱体系魔法",
    name: "ポケラ",
    price: 800,
    damage: "small",
    explanation:
      "頭がボケるオーラで\n小ダメージを与えた上、\n相手の魔力を下げる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  asia3: {
    type: "弱体系魔法",
    name: "ノロー",
    price: 800,
    damage: "small",
    explanation:
      "まとわりつくオーラで\n小ダメージを与えた上、\n相手の素早さを下げる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  asia4: {
    type: "攻擊系魔法",
    name: "フリジ",
    price: 20000,
    damage: "small",
    explanation:
      "相手を氷でつつみ\n小ダメージを与える。\n攻撃力を下げることもある。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  europe2AndAfrica1: {
    type: "邢魔系魔法",
    name: "ゼニゲット",
    price: 12000,
    damage: "small",
    explanation:
      "サイフから金を吹き出させ、\n小ダメージを与えた上、\n相手の所持金の1/5を奪う。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe", "Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  europe3: {
    type: "攻擊系魔法",
    name: "ハリー",
    price: 23000,
    damage: "small",
    explanation:
      "相手の周りにカマイタチを\n生み、小ダメージを与える。\n素早さを下げることもある。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  russia1: {
    type: "変化系魔法",
    name: "クルパー",
    price: 39800,
    damage: "small",
    explanation:
      "精神を超音波で崩壊させ\n小ダメージを与えた上、\n相手を${}混乱状態にする。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  russia2: {
    type: "変化系魔法",
    name: "ドクラマグラ",
    price: 46000,
    damage: "small",
    explanation:
      "地から毒ガスをふき出させ\n小ダメージを与えた上、\n相手を${}毒状態にする。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  russia3: {
    type: "攻擊系魔法",
    name: "エレク",
    price: 60000,
    damage: "small",
    explanation:
      "相手の頭上に雷を落とし\n小ダメージを与える。\n魔力を下げることもある。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  russia4: {
    type: "攻擊系魔法",
    name: "バーン",
    price: 65000,
    damage: "small",
    explanation:
      "相手の周りに炎を吹き出させ\n小ダメージを与える。\n防御力を下げることもある。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  northAmerica1: {
    type: "破壊系魔法",
    name: "ＤＦマホケス",
    price: 84000,
    damage: "small",
    explanation:
      "魔カエネルギーを発射し\n小ダメージを与えた上、\n相手の防御魔法を消し去る。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  northAmerica2: {
    type: "攻擊系魔法",
    name: "フリーズ",
    price: 120000,
    damage: "medium",
    explanation:
      "相手の足下から氷を突き出し\n中ダメージを与える。\n攻撃力を下げることもある。",
    fromMonsters: ["氷玉"],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  northAmerica3: {
    type: "攻擊系魔法",
    name: "ハリーク",
    price: 135000,
    damage: "medium",
    explanation:
      "相手を竜巻でつつみ\n中ダメージを与える。\n素早さを下げることもある。",
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
    type: "変化系魔法",
    name: "ハズシャーン",
    price: 152000,
    damage: "small",
    explanation:
      "まぶしい光で目をくらませ\n小ダメージを与えた上、\n相手を${}メもう目状態にする。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  southAmerica2: {
    type: "破壊系魔法",
    name: "ＡＴマホケス",
    price: 198000,
    damage: "small",
    explanation:
      "魔カエネルギーを発射し\n小ダメージを与えた上、\n相手の攻撃魔法を消し去る。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  southAmerica3: {
    type: "攻擊系魔法",
    name: "エレクト",
    price: 280000,
    damage: "medium",
    explanation:
      "相手の頭上で放電現象を\n起こし、中ダメージを与える。\n魔力を下げることもある。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  southAmerica4: {
    type: "攻擊系魔法",
    name: "バーニー",
    price: 290000,
    damage: "medium",
    explanation:
      "相手を炎のドームでつつみ\n中ダメージを与える。\n防御力を下げることもある。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  oceania1: {
    type: "変化系魔法",
    name: "ウラミム",
    price: 258000,
    damage: "small",
    explanation:
      "おん念エネルギーを集め\n小ダメージを与えた上、\n相手を${}呪い状態にする。",
    fromMonsters: ["マサイハンター"],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  oceania2: {
    type: "攻擊系魔法",
    name: "フリーザー",
    price: 450000,
    damage: "large",
    explanation:
      "相手の周りの大気をこおらせ\n大ダメージを与える。\n攻撃力を下げることもある。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  oceania3: {
    type: "攻擊系魔法",
    name: "ハリケーン",
    price: 480000,
    damage: "large",
    explanation:
      "相手を巨大な竜巻でつつみ\n込み、大ダメージを与える。\n素早さを下げることもある。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  africa2: {
    type: "破壊系魔法",
    name: "ラストルズ",
    price: 365000,
    damage: "medium",
    explanation:
      "強いさんの雨を降らせて\n中ダメージを与えた上、\n相手の装備を破壊する。",
    fromMonsters: ["サビトマトガエル"],
    fromVerticesQuery: [
      {
        areas: ["Africa"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  africa3: {
    type: "攻擊系魔法",
    name: "エレクトラ",
    price: 750000,
    damage: "large",
    explanation:
      "相手に連続雷撃を加え\n大ダメージを与える。\n魔力を下げることもある。",
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
    type: "攻擊系魔法",
    name: "バーニング",
    price: 800000,
    damage: "large",
    explanation:
      "相手の周りで大爆発を起こし\n大ダメージを与える。\n防御力を下げることもある。",
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
  /**
   * @todo type待確定
   */
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
    type: "吸收系魔法",
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
    type: "召喚系魔法",
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
  /**
   * @todo type待確定
   */
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
