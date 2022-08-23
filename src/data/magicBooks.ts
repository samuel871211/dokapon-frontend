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

const magicBookList: MagicBook[] = [
  {
    type: "damage",
    name: "マグ",
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
  {
    type: "damage",
    name: "マグファ",
    price: 1,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "damage",
    name: "マグファイア",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "damage",
    name: "コチ",
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
  {
    type: "damage",
    name: "コチリコ",
    price: 900,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "damage",
    name: "コチコッチン",
    price: 2,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "damage",
    name: "ゴロ",
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
  {
    type: "damage",
    name: "ゴロピカ",
    price: 800,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "damage",
    name: "ゴロサンダー",
    price: 1500,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "damage",
    name: "ヒュ",
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
  {
    type: "damage",
    name: "ヒュウイ",
    price: 1,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "damage",
    name: "ヒュギューオ",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "damage",
    name: "グラ",
    price: 1,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "damage",
    name: "グラゴゴ",
    price: 2,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "damage",
    name: "グラズシーン",
    price: 4,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "damage",
    name: "ポカドン",
    price: 9,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "status",
    name: "ヨワッチ",
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
  {
    type: "status",
    name: "フニャリ",
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
  {
    type: "status",
    name: "ポケラ",
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
  {
    type: "status",
    name: "ノロー",
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
  {
    type: "status",
    name: "ダウン",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "status",
    name: "バキュムーン",
    price: 64,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "status",
    name: "ドクラマグラ",
    price: 600,
    explanation: "",
    fromMonsters: ["ヤドクガエル"],
    fromVerticesQuery: [],
  },
  {
    type: "status",
    name: "ビクビク",
    price: 200,
    explanation: "",
    fromMonsters: ["ビクビクゴースト"],
    fromVerticesQuery: [],
  },
  {
    type: "status",
    name: "ピョコタン",
    price: 5,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "status",
    name: "ツカエンゾ",
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
  {
    type: "status",
    name: "プリオン",
    price: 6,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "status",
    name: "シニガーミ",
    price: 0,
    explanation: "",
    fromMonsters: ["フックの魂"],
    fromVerticesQuery: [],
  },
  {
    type: "status",
    name: "ネムネム",
    price: 0,
    explanation: "",
    fromMonsters: ["キラーフラワー"],
    fromVerticesQuery: [],
  },
  {
    type: "status",
    name: "マビン",
    price: 8,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "other",
    name: "デロン",
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
  {
    type: "other",
    name: "ムラデロン",
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
  {
    type: "other",
    name: "ミナデロン",
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
  {
    type: "other",
    name: "ヘルプュウ",
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
  {
    type: "other",
    name: "メッセヨ",
    price: 2,
    explanation: "",
    fromMonsters: ["クビカリ族"],
    fromVerticesQuery: [],
  },
  {
    type: "other",
    name: "ショバチェン",
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
  {
    type: "other",
    name: "ネンドリーキ",
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
  {
    type: "other",
    name: "バランバ",
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
  {
    type: "other",
    name: "オールゼロ",
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
  {
    type: "other",
    name: "ビビデブゥ",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    type: "other",
    name: "ヘイカモン",
    price: 20,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
];

const magicBooks = satisfiesRecords<MagicBook>()({
  damageFire1: {
    type: "damage",
    name: "マグ",
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
    type: "damage",
    name: "マグファ",
    price: 1,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageFire3: {
    type: "damage",
    name: "マグファイア",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageIce1: {
    type: "damage",
    name: "コチ",
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
    type: "damage",
    name: "コチリコ",
    price: 900,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageIce3: {
    type: "damage",
    name: "コチコッチン",
    price: 2,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageThunder1: {
    type: "damage",
    name: "ゴロ",
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
    type: "damage",
    name: "ゴロピカ",
    price: 800,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageThunder3: {
    type: "damage",
    name: "ゴロサンダー",
    price: 1500,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageWind1: {
    type: "damage",
    name: "ヒュ",
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
    type: "damage",
    name: "ヒュウイ",
    price: 1,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageWind3: {
    type: "damage",
    name: "ヒュギューオ",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageEarth1: {
    type: "damage",
    name: "グラ",
    price: 1,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageEarth2: {
    type: "damage",
    name: "グラゴゴ",
    price: 2,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageEarth3: {
    type: "damage",
    name: "グラズシーン",
    price: 4,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  damageMap: {
    type: "damage",
    name: "ポカドン",
    price: 9,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  statusAttackDown: {
    type: "status",
    name: "ヨワッチ",
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
    type: "status",
    name: "フニャリ",
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
    type: "status",
    name: "ポケラ",
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
    type: "status",
    name: "ノロー",
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
    type: "status",
    name: "ダウン",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  statusAbsorb: {
    type: "status",
    name: "バキュムーン",
    price: 64,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  statusPoison: {
    type: "status",
    name: "ドクラマグラ",
    price: 600,
    explanation: "",
    fromMonsters: ["ヤドクガエル"],
    fromVerticesQuery: [],
  },
  statusStartled: {
    type: "status",
    name: "ビクビク",
    price: 200,
    explanation: "",
    fromMonsters: ["ビクビクゴースト"],
    fromVerticesQuery: [],
  },
  statusCurse: {
    type: "status",
    name: "ピョコタン",
    price: 5,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  statusSeal: {
    type: "status",
    name: "ツカエンゾ",
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
    type: "status",
    name: "プリオン",
    price: 6,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  statusDeath: {
    type: "status",
    name: "シニガーミ",
    price: 0,
    explanation: "",
    fromMonsters: ["フックの魂"],
    fromVerticesQuery: [],
  },
  statusSleep: {
    type: "status",
    name: "ネムネム",
    price: 0,
    explanation: "",
    fromMonsters: ["キラーフラワー"],
    fromVerticesQuery: [],
  },
  statusPrison: {
    type: "status",
    name: "マビン",
    price: 8,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  otherMonsterSummon: {
    type: "other",
    name: "デロン",
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
    type: "other",
    name: "ムラデロン",
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
    type: "other",
    name: "ミナデロン",
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
    type: "other",
    name: "ヘルプュウ",
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
    type: "other",
    name: "メッセヨ",
    price: 2,
    explanation: "",
    fromMonsters: ["クビカリ族"],
    fromVerticesQuery: [],
  },
  otherLocationSwap: {
    type: "other",
    name: "ショバチェン",
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
    type: "other",
    name: "ネンドリーキ",
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
    type: "other",
    name: "バランバ",
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
    type: "other",
    name: "オールゼロ",
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
    type: "other",
    name: "ビビデブゥ",
    price: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  otherLocationSummon: {
    type: "other",
    name: "ヘイカモン",
    price: 20,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
});

export default magicBooks;
