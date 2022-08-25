import { MagicBook } from "global";
import areas from "constants/areas";

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
    type: "反擊系魔法",
    name: "マグの書",
    price: 500,
    explanation: "",
    fromMonsters: ["ケルベロス"],
    fromVerticesQuery: [
      {
        areas: ["Asia", "Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  damageFire2: {
    type: "反擊系魔法",
    name: "マグファの書",
    price: 1,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageFire3: {
    type: "反擊系魔法",
    name: "マグファイアの書",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageIce1: {
    type: "反擊系魔法",
    name: "コチの書",
    price: 400,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia", "Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  damageIce2: {
    type: "反擊系魔法",
    name: "コチリコの書",
    price: 900,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageIce3: {
    type: "反擊系魔法",
    name: "コチコッチンの書",
    price: 2,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageThunder1: {
    type: "反擊系魔法",
    name: "ゴロの書",
    price: 300,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia", "Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  damageThunder2: {
    type: "反擊系魔法",
    name: "ゴロピカの書",
    price: 800,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageThunder3: {
    type: "反擊系魔法",
    name: "ゴロサンダーの書",
    price: 1500,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageWind1: {
    type: "反擊系魔法",
    name: "ヒュの書",
    price: 500,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia", "Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  damageWind2: {
    type: "反擊系魔法",
    name: "ヒュウイの書",
    price: 1,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageWind3: {
    type: "反擊系魔法",
    name: "ヒュギューオの書",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageEarth1: {
    type: "反擊系魔法",
    name: "グラの書",
    price: 1,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageEarth2: {
    type: "反擊系魔法",
    name: "グラゴゴの書",
    price: 2,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageEarth3: {
    type: "反擊系魔法",
    name: "グラズシーンの書",
    price: 4,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageMap: {
    type: "反擊系魔法",
    name: "ポカドンの書",
    price: 9,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  statusAttackDown: {
    type: "反擊系魔法",
    name: "ヨワッチの書",
    price: 100,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  statusDefenseDown: {
    type: "反擊系魔法",
    name: "フニャリの書",
    price: 100,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  statusMagicDown: {
    type: "反擊系魔法",
    name: "ポケラの書",
    price: 100,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  statusSpeedDown: {
    type: "反擊系魔法",
    name: "ノローの書",
    price: 100,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  statusAllDown: {
    type: "反擊系魔法",
    name: "ダウンの書",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  statusAbsorb: {
    type: "反擊系魔法",
    name: "バキュムーンの書",
    price: 64,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  statusPoison: {
    type: "反擊系魔法",
    name: "ドクラマグラの書",
    price: 600,
    explanation: "",
    fromMonsters: ["ヤドクガエル"],
    fromVerticesQuery: [],
  },
  statusStartled: {
    type: "反擊系魔法",
    name: "ビクビクの書",
    price: 200,
    explanation: "",
    fromMonsters: ["ビクビクゴースト"],
    fromVerticesQuery: [],
  },
  statusCurse: {
    type: "反擊系魔法",
    name: "ピョコタンの書",
    price: 5,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  statusSeal: {
    type: "反擊系魔法",
    name: "ツカエンゾの書",
    price: 800,
    explanation: "",
    fromMonsters: ["ヴァンパイア"],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  statusViral: {
    type: "反擊系魔法",
    name: "プリオンの書",
    price: 6,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  statusDeath: {
    type: "反擊系魔法",
    name: "シニガーミの書",
    price: 0,
    explanation: "",
    fromMonsters: ["フックの魂"],
    fromVerticesQuery: [],
  },
  statusSleep: {
    type: "反擊系魔法",
    name: "ネムネムの書",
    price: 0,
    explanation: "",
    fromMonsters: ["キラーフラワー"],
    fromVerticesQuery: [],
  },
  statusPrison: {
    type: "反擊系魔法",
    name: "マビンの書",
    price: 8,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  otherMonsterSummon: {
    type: "反擊系魔法",
    name: "デロンの書",
    price: 100,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  otherBossSummon: {
    type: "反擊系魔法",
    name: "ムラデロンの書",
    price: 30,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: [],
        vertexTypes: [],
      },
    ],
  },
  otherBossesSummon: {
    type: "反擊系魔法",
    name: "ミナデロンの書",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: [],
        vertexTypes: [],
      },
    ],
  },
  otherRecoverOpponent: {
    type: "反擊系魔法",
    name: "ヘルプュウの書",
    price: 150,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["MagicStoreField"],
      },
    ],
  },
  otherDestroyBag: {
    type: "反擊系魔法",
    name: "メッセヨの書",
    price: 2,
    explanation: "",
    fromMonsters: ["クビカリ族"],
    fromVerticesQuery: [],
  },
  otherLocationSwap: {
    type: "反擊系魔法",
    name: "ショバチェンの書",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: [],
        vertexTypes: [],
      },
    ],
  },
  otherLocationMove: {
    type: "反擊系魔法",
    name: "ネンドリーキの書",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: [],
        vertexTypes: [],
      },
    ],
  },
  otherPossessionSwap: {
    type: "反擊系魔法",
    name: "バランバの書",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: areas,
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  otherVillageDestroy: {
    type: "反擊系魔法",
    name: "オールゼロの書",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Atlantis"],
        vertexTypes: ["MagicField"],
      },
    ],
  },
  otherUltimate: {
    type: "反擊系魔法",
    name: "ビビデブゥの書",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  otherLocationSummon: {
    type: "反擊系魔法",
    name: "ヘイカモンの書",
    price: 20,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
});

export default magicBooks;
