import { MagicBook } from "global";
import areas from "data/areas";

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

const magicBooks = satisfiesRecords<MagicBook>()({
  damageFire1: {
    type: "攻擊系魔法",
    name: "マグの書",
    price: 500,
    explanation: "指定した相手を発火させ、\n小ダメージを与える。\n攻撃力:${}",
    fromMonsterIdxs: [66],
    fromVerticesQuery: [
      {
        areas: ["Asia", "Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  damageFire2: {
    type: "攻擊系魔法",
    name: "マグファの書",
    price: 1,
    explanation: "指定した相手を炎でおおい、\n中ダメージを与える。\n攻撃力:${}",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  damageFire3: {
    type: "攻擊系魔法",
    name: "マグファイアの書",
    price: 0,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  damageIce1: {
    type: "攻擊系魔法",
    name: "コチの書",
    price: 400,
    explanation:
      "指定したマス内の相手を冷気でこおらせ、\n小ダメージを与える。\n攻撃力:${}",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: ["Asia", "Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  damageIce2: {
    type: "攻擊系魔法",
    name: "コチリコの書",
    price: 900,
    explanation:
      "指定したマス内の相手を足下からこおらせ、\n中ダメージを与える。\n攻撃力:${}",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  damageIce3: {
    type: "攻擊系魔法",
    name: "コチコッチンの書",
    price: 2,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  damageThunder1: {
    type: "攻擊系魔法",
    name: "ゴロの書",
    price: 300,
    explanation:
      "指定した相手の周りに雷を落とし、\nエリア内にいる全ての者に小ダメージを与える。\n攻撃力:${}",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: ["Asia", "Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  damageThunder2: {
    type: "攻擊系魔法",
    name: "ゴロピカの書",
    price: 800,
    explanation:
      "指定した相手の周りに雷柱を立て、\nエリア内にいる全ての者に中ダメージを与える。\n攻撃力:${}",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  damageThunder3: {
    type: "攻擊系魔法",
    name: "ゴロサンダーの書",
    price: 1500,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  damageWind1: {
    type: "攻擊系魔法",
    name: "ヒュの書",
    price: 500,
    explanation:
      "同マップ内にカマイタチを発生させ、\n人間に小ダメージを与える。(まれに吹き飛ぶ)\n攻撃力:${}",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: ["Asia", "Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  damageWind2: {
    type: "攻擊系魔法",
    name: "ヒュウイの書",
    price: 1,
    explanation:
      "同マップ内に小さな台風を発生させ、\n人間に中ダメージを与える。(まれに吹き飛ぶ)\n攻擊力:${}",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  damageWind3: {
    type: "攻擊系魔法",
    name: "ヒュギューオの書",
    price: 0,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  damageEarth1: {
    type: "攻擊系魔法",
    name: "グラの書",
    price: 1,
    explanation:
      "世界各地に小さな地震を起こし、\n人間に小ダメージを与える。\n攻撃力:${}",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  damageEarth2: {
    type: "攻擊系魔法",
    name: "グラゴゴの書",
    price: 2,
    explanation:
      "世界各地に大地震を起こし、\n人間に中ダメージを与える。\n攻撃力:${}",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  damageEarth3: {
    type: "攻擊系魔法",
    name: "グラズシーンの書",
    price: 4,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  damageMap: {
    type: "攻擊系魔法",
    name: "ポカドンの書",
    price: 9,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  statusAttackDown: {
    type: "弱体系魔法",
    name: "ヨワッチの書",
    price: 100,
    explanation:
      "指定した相手に力が抜けるオーラを当て、\nしばらくの間、攻撃力を下げる。",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  statusDefenseDown: {
    type: "弱体系魔法",
    name: "フニャリの書",
    price: 100,
    explanation:
      "指定した相手に体がフニャフニャになるオーラを当て、\nしばらくの間、防御力を下げる。",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  statusMagicDown: {
    type: "弱体系魔法",
    name: "ポケラの書",
    price: 100,
    explanation:
      "指定した相手に頭がスカスカになるオーラを当て、\nしばらくの間、魔力を下げる。",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  statusSpeedDown: {
    type: "弱体系魔法",
    name: "ノローの書",
    price: 100,
    explanation:
      "指定した相手に重くまとわりつくオーラを当て、\nしばらくの間、素早さを下げる。",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: ["Asia", "NorthAmerica"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  statusAllDown: {
    type: "弱体系魔法",
    name: "ダウンの書",
    price: 0,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  /**
   * @todo type待確定
   */
  statusAbsorb: {
    type: "反擊系魔法",
    name: "バキュムーンの書",
    price: 64,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  statusPoison: {
    type: "変化系魔法",
    name: "ドクラマグラの書",
    price: 600,
    explanation:
      "指定した相手に毒ガスを吹き付け、\n${}毒状態にする。\n毎ターンHP減少。",
    fromMonsterIdxs: [70],
    fromVerticesQuery: [],
  },
  statusStartled: {
    type: "変化系魔法",
    name: "ビクビクの書",
    price: 200,
    explanation: "指定した相手をビビらせて\n${}おくびょう状態にする。",
    fromMonsterIdxs: [27],
    fromVerticesQuery: [],
  },
  statusCurse: {
    type: "変化系魔法",
    name: "ピョコタンの書",
    price: 5,
    explanation: "指定した相手にカエルの呪いをかけ\n${}ピョコタン状態にする。",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  statusSeal: {
    type: "変化系魔法",
    name: "ツカエンゾの書",
    price: 800,
    explanation: "指定した相手に封印をほどこし\n${}封印状態にする。",
    fromMonsterIdxs: [30],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  statusViral: {
    type: "弱体系魔法",
    name: "プリオンの書",
    price: 6,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  statusDeath: {
    type: "邢魔系魔法",
    name: "シニガーミの書",
    price: 0,
    explanation: "",
    fromMonsterIdxs: [75],
    fromVerticesQuery: [],
  },
  /**
   * @todo type待確定
   */
  statusSleep: {
    type: "反擊系魔法",
    name: "ネムネムの書",
    price: 0,
    explanation: "",
    fromMonsterIdxs: [71],
    fromVerticesQuery: [],
  },
  /**
   * @todo type待確定
   */
  statusPrison: {
    type: "反擊系魔法",
    name: "マビンの書",
    price: 8,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  summonMonster: {
    type: "召喚系魔法",
    name: "デロンの書",
    price: 100,
    explanation:
      "モンスター召喚呪文で\n指定した相手のいるマスにモンスターを出現させる。",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  summonBoss: {
    type: "召喚系魔法",
    name: "ムラデロンの書",
    price: 30,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: [],
        vertexTypes: [],
      },
    ],
  },
  summonBosses: {
    type: "召喚系魔法",
    name: "ミナデロンの書",
    price: 0,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: [],
        vertexTypes: [],
      },
    ],
  },
  otherRecoverOpponent: {
    type: "特殊系魔法",
    name: "ヘルプュウの書",
    price: 150,
    explanation:
      "指定した相手かモンスターに回復の光を注ぎ、\nHPと${}を回復する。\nモンスターに使った場合、パラメータUP",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  otherDestroyBag: {
    type: "邢魔系魔法",
    name: "メッセヨの書",
    price: 2,
    explanation: "指定した相手のアイテムか魔法を\n1つ破壊する。",
    fromMonsterIdxs: [73],
    fromVerticesQuery: [],
  },
  /**
   * @todo type待確定
   */
  otherLocationSwap: {
    type: "反擊系魔法",
    name: "ショバチェンの書",
    price: 0,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: [],
        vertexTypes: [],
      },
    ],
  },
  /**
   * @todo type待確定
   */
  otherLocationMove: {
    type: "反擊系魔法",
    name: "ネンドリーキの書",
    price: 0,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: [],
        vertexTypes: [],
      },
    ],
  },
  /**
   * @todo type待確定
   */
  otherPossessionSwap: {
    type: "反擊系魔法",
    name: "バランバの書",
    price: 0,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: areas,
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  /**
   * @todo type待確定
   */
  otherVillageDestroy: {
    type: "反擊系魔法",
    name: "オールゼロの書",
    price: 0,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [
      {
        areas: ["Atlantis"],
        vertexTypes: ["MagicBookField"],
      },
    ],
  },
  /**
   * @todo type待確定
   */
  otherUltimate: {
    type: "反擊系魔法",
    name: "ビビデブゥの書",
    price: 0,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
  /**
   * @todo type待確定
   */
  otherLocationSummon: {
    type: "反擊系魔法",
    name: "ヘイカモンの書",
    price: 20,
    explanation: "",
    fromMonsterIdxs: [],
    fromVerticesQuery: [],
  },
});

export default magicBooks;
