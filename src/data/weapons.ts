import { Weapon } from "global";
import {
  warriorJobTypes,
  magicianJobTypes,
  clericJobTypes,
  thiefJobTypes,
  gladiatorJobTypes,
} from "./jobs";

const weapons: Weapon[] = [
  {
    name: "やすものの剣",
    price: 50,
    attack: 2,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "竹ざお",
    price: 800,
    attack: 6,
    defense: 0,
    magic: 0,
    speed: 1,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "りりむロッド",
    price: 500000,
    attack: 7,
    defense: 0,
    magic: 50,
    speed: 0,
    hp: 0,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: ["白ミミック"],
    fromVerticesQuery: [
      {
        areas: [],
        vertexTypes: [],
      },
    ],
  },
  {
    name: "コメディステッキ",
    price: 1980,
    attack: 9,
    defense: 0,
    magic: 4,
    speed: 0,
    hp: 0,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "出刃ぼうちょう",
    price: 3650,
    attack: 13,
    defense: 0,
    magic: 0,
    speed: 2,
    hp: 0,
    additionalDamageJobs: thiefJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "こんぼう",
    price: 2800,
    attack: 16,
    defense: 0,
    magic: 0,
    speed: -3,
    hp: 0,
    additionalDamageJobs: clericJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "青龍刀",
    price: 8500,
    attack: 19,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "アツアツおでん",
    price: 120,
    attack: 22,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 20,
    additionalDamageJobs: ["alien"],
    explanation: "",
    fromMonsters: ["ハッカイ"],
    fromVerticesQuery: [],
  },
  {
    name: "にょいぼう",
    price: 6800,
    attack: 24,
    defense: 0,
    magic: 0,
    speed: 5,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: ["ゴクウ"],
    fromVerticesQuery: [],
  },
  {
    name: "聖なるナイフ",
    price: 14800,
    attack: 25,
    defense: 0,
    magic: 1,
    speed: 6,
    hp: 0,
    additionalDamageJobs: thiefJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "レイピア",
    price: 17600,
    attack: 27,
    defense: 0,
    magic: 0,
    speed: 4,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "兵士の槍",
    price: 20000,
    attack: 33,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "導師の杖",
    price: 26000,
    attack: 35,
    defense: 0,
    magic: 3,
    speed: 0,
    hp: 0,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ペロペロハンマー",
    price: 100,
    attack: 36,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 60,
    additionalDamageJobs: ["alien"],
    explanation: "",
    fromMonsters: ["フランケン"],
    fromVerticesQuery: [],
  },
  {
    name: "魔女ッ子ステッキ",
    price: 3200,
    attack: 37,
    defense: 0,
    magic: 12,
    speed: 0,
    hp: 0,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["AsiaCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "ジュリアナせんす",
    price: 74500,
    attack: 38,
    defense: 0,
    magic: 0,
    speed: 12,
    hp: 0,
    additionalDamageJobs: ["dancer"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "しゃくじょう",
    price: 4800,
    attack: 39,
    defense: 0,
    magic: 3,
    speed: 0,
    hp: 0,
    additionalDamageJobs: clericJobTypes,
    explanation: "",
    fromMonsters: ["惨憎法師"],
    fromVerticesQuery: [],
  },
  {
    name: "メイス",
    price: 26500,
    attack: 40,
    defense: 1,
    magic: 0,
    speed: -2,
    hp: 0,
    additionalDamageJobs: clericJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ハルバード",
    price: 34800,
    attack: 41,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "のうふのカマ",
    price: 38000,
    attack: 43,
    defense: 0,
    magic: 0,
    speed: 6,
    hp: 0,
    additionalDamageJobs: thiefJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ナイトランス",
    price: 39400,
    attack: 45,
    defense: 0,
    magic: 0,
    speed: 1,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: ["ブラックアーマー"],
    fromVerticesQuery: [],
  },
  {
    name: "メリケンサック",
    price: 51000,
    attack: 52,
    defense: 0,
    magic: 0,
    speed: 5,
    hp: 0,
    additionalDamageJobs: gladiatorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "クリムゾンワンド",
    price: 77500,
    attack: 54,
    defense: 0,
    magic: 2,
    speed: 0,
    hp: 0,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "聖騎士のつるぎ",
    price: 44000,
    attack: 55,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "エンジェルロッド",
    price: 158000,
    attack: 56,
    defense: 0,
    magic: 15,
    speed: 1,
    hp: 0,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: ["ラスプーチン"],
    fromVerticesQuery: [],
  },
  {
    name: "木こりのオノ",
    price: 62000,
    attack: 57,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "タンバリン",
    price: 57500,
    attack: 60,
    defense: 2,
    magic: 2,
    speed: 2,
    hp: 0,
    additionalDamageJobs: ["dancer"],
    explanation: "",
    fromMonsters: ["雪原人キッズ"],
    fromVerticesQuery: [],
  },
  {
    name: "巨大きづち",
    price: 65000,
    attack: 62,
    defense: 0,
    magic: 0,
    speed: -5,
    hp: 0,
    additionalDamageJobs: ["carpenter"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "スチールナイフ",
    price: 95000,
    attack: 63,
    defense: 0,
    magic: 0,
    speed: 6,
    hp: 0,
    additionalDamageJobs: thiefJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "雷めいのつるぎ",
    price: 35000,
    attack: 64,
    defense: 0,
    magic: 0,
    speed: 3,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: ["レッドブリキン"],
    fromVerticesQuery: [],
  },
  {
    name: "モーニングスター",
    price: 91500,
    attack: 65,
    defense: 0,
    magic: 0,
    speed: -2,
    hp: 0,
    additionalDamageJobs: clericJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "スピリットクラブ",
    price: 103800,
    attack: 70,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    additionalDamageJobs: clericJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ピンクの注射器",
    price: 106000,
    attack: 71,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 30,
    additionalDamageJobs: ["nurse"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "打ち出のこづち",
    price: 124000,
    attack: 75,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    additionalDamageJobs: ["carpenter"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmericaCave", "Oceania"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "シャーマンロッド",
    price: 142000,
    attack: 76,
    defense: 0,
    magic: 3,
    speed: 0,
    hp: 0,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ジャックのメス",
    price: 134000,
    attack: 77,
    defense: 0,
    magic: 0,
    speed: 3,
    hp: 10,
    additionalDamageJobs: ["nurse"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ハヤブサの槍",
    price: 206000,
    attack: 78,
    defense: 0,
    magic: 0,
    speed: 15,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: ["トーテマン"],
    fromVerticesQuery: [],
  },
  {
    name: "和銅一文字",
    price: 50000,
    attack: 80,
    defense: 0,
    magic: 0,
    speed: 2,
    hp: 0,
    additionalDamageJobs: thiefJobTypes,
    explanation: "",
    fromMonsters: ["ガママル"],
    fromVerticesQuery: [],
  },
  {
    name: "シルバーソード",
    price: 208000,
    attack: 83,
    defense: 1,
    magic: 3,
    speed: 0,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ピクシーロッド",
    price: 245000,
    attack: 84,
    defense: 0,
    magic: 15,
    speed: 0,
    hp: 0,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "バトルアックス",
    price: 150000,
    attack: 85,
    defense: 0,
    magic: 0,
    speed: -1,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "デジ剣",
    price: 210000,
    attack: 92,
    defense: 1,
    magic: 1,
    speed: 1,
    hp: 10,
    additionalDamageJobs: ["robot"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "パールカ",
    price: 9000,
    attack: 94,
    defense: 0,
    magic: -10,
    speed: -5,
    hp: 0,
    additionalDamageJobs: ["carpenter"],
    explanation: "",
    fromMonsters: ["雪原人ミチエーリ"],
    fromVerticesQuery: [],
  },
  {
    name: "黄金の杖",
    price: 1400000,
    attack: 95,
    defense: 0,
    magic: 18,
    speed: 0,
    hp: 0,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: ["テスカポリトカ"],
    fromVerticesQuery: [],
  },
  {
    name: "フラワーバトン",
    price: 254000,
    attack: 96,
    defense: 0,
    magic: 5,
    speed: 1,
    hp: 0,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ドカポソソード",
    price: 195100,
    attack: 99,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 50,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmericaCave"],
        vertexTypes: ["KeyTreasureField"],
      },
    ],
  },
  {
    name: "Mリング",
    price: 75000,
    attack: 100,
    defense: 0,
    magic: 0,
    speed: 8,
    hp: 0,
    additionalDamageJobs: ["queen"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmericaCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "ボーンダガー",
    price: 265000,
    attack: 107,
    defense: 0,
    magic: 0,
    speed: 3,
    hp: 0,
    additionalDamageJobs: thiefJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "バイラルフック",
    price: 300000,
    attack: 108,
    defense: 5,
    magic: 0,
    speed: 8,
    hp: 0,
    additionalDamageJobs: thiefJobTypes,
    explanation: "",
    fromMonsters: ["バイラル"],
    fromVerticesQuery: [],
  },
  {
    name: "ウォーリアスピア",
    price: 273000,
    attack: 110,
    defense: 0,
    magic: 0,
    speed: -1,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "おおかなづち",
    price: 280000,
    attack: 116,
    defense: 0,
    magic: 0,
    speed: -4,
    hp: 0,
    additionalDamageJobs: ["carpenter"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "真紅のロウソク",
    price: 397200,
    attack: 117,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 30,
    additionalDamageJobs: ["queen"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmericaCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "ギロチンアックス",
    price: 368000,
    attack: 118,
    defense: 0,
    magic: 0,
    speed: -2,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "バトルホーク",
    price: 158800,
    attack: 119,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 10,
    additionalDamageJobs: [],
    explanation: "",
    fromMonsters: ["族長タタンカ"],
    fromVerticesQuery: [],
  },
  {
    name: "コンバットナイフ",
    price: 394000,
    attack: 123,
    defense: 0,
    magic: 0,
    speed: 5,
    hp: 0,
    additionalDamageJobs: thiefJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "王者のツメ",
    price: 320000,
    attack: 126,
    defense: 0,
    magic: 0,
    speed: 8,
    hp: 0,
    additionalDamageJobs: thiefJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmericaCave"],
        vertexTypes: ["KeyTreasureField"],
      },
    ],
  },
  {
    name: "れんじゅの杖",
    price: 474000,
    attack: 127,
    defense: 0,
    magic: 4,
    speed: 0,
    hp: 0,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ヌイグルミ",
    price: 80000,
    attack: 128,
    defense: 0,
    magic: 12,
    speed: 2,
    hp: 0,
    additionalDamageJobs: ["alien"],
    explanation: "",
    fromMonsters: ["アリサ"],
    fromVerticesQuery: [],
  },
  {
    name: "しっぷう剣",
    price: 489000,
    attack: 130,
    defense: 0,
    magic: 0,
    speed: 8,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ぎしきのナイフ",
    price: 511500,
    attack: 131,
    defense: 0,
    magic: 0,
    speed: 8,
    hp: 0,
    additionalDamageJobs: thiefJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmericaCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "ドラゴンクロー",
    price: 538500,
    attack: 136,
    defense: 4,
    magic: 0,
    speed: 2,
    hp: 0,
    additionalDamageJobs: gladiatorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "アサシンダガー",
    price: 958000,
    attack: 140,
    defense: 0,
    magic: 0,
    speed: 6,
    hp: 0,
    additionalDamageJobs: thiefJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Africa"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "特大ノコギリ",
    price: 452000,
    attack: 142,
    defense: 0,
    magic: 0,
    speed: -3,
    hp: 0,
    additionalDamageJobs: ["carpenter"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ドリルランサー",
    price: 593000,
    attack: 146,
    defense: 0,
    magic: 0,
    speed: 3,
    hp: 0,
    additionalDamageJobs: ["robot"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ごくあく注射器",
    price: 638000,
    attack: 147,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 60,
    additionalDamageJobs: ["nurse"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "やいばのおうぎ",
    price: 610000,
    attack: 149,
    defense: 5,
    magic: 0,
    speed: 3,
    hp: 0,
    additionalDamageJobs: ["dancer"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Africa"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "スネークロッド",
    price: 44400,
    attack: 150,
    defense: 0,
    magic: 12,
    speed: 0,
    hp: 0,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: ["フリルドリザード"],
    fromVerticesQuery: [],
  },
  {
    name: "ルーンスタッフ",
    price: 715000,
    attack: 152,
    defense: 0,
    magic: 4,
    speed: 2,
    hp: 0,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Africa"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "マーメイドロッド",
    price: 600000,
    attack: 154,
    defense: 0,
    magic: 10,
    speed: 0,
    hp: 10,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "毒手",
    price: 5050,
    attack: 160,
    defense: 0,
    magic: 0,
    speed: 10,
    hp: 30,
    additionalDamageJobs: gladiatorJobTypes,
    explanation: "",
    fromMonsters: ["シャオロン"],
    fromVerticesQuery: [],
  },
  {
    name: "破壊のオノ",
    price: 732000,
    attack: 161,
    defense: 0,
    magic: 0,
    speed: -3,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Africa"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ピコピコハンマー",
    price: 1980,
    attack: 162,
    defense: 5,
    magic: 5,
    speed: 5,
    hp: 0,
    additionalDamageJobs: ["alien"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["AfricaCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "海神のモリ",
    price: 818000,
    attack: 164,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["OceaniaCave"],
        vertexTypes: ["KeyTreasureField"],
      },
    ],
  },
  {
    name: "コアラのぼう",
    price: 8000,
    attack: 165,
    defense: 1,
    magic: 1,
    speed: 1,
    hp: 10,
    additionalDamageJobs: ["alien"],
    explanation: "",
    fromMonsters: ["ウンフーク"],
    fromVerticesQuery: [],
  },
  {
    name: "メテオストライク",
    price: 802000,
    attack: 166,
    defense: 5,
    magic: 0,
    speed: -8,
    hp: 0,
    additionalDamageJobs: clericJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Africa"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "おしおき棒",
    price: 910000,
    attack: 171,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 50,
    additionalDamageJobs: ["queen"],
    explanation: "",
    fromMonsters: ["ホルス神"],
    fromVerticesQuery: [
      {
        areas: ["Africa", "AfricaCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "竜殺しの剣",
    price: 875000,
    attack: 175,
    defense: 5,
    magic: 0,
    speed: -3,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Africa", "AntarcticaCave"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "よみのカマ",
    price: 259,
    attack: 176,
    defense: 0,
    magic: -2,
    speed: -2,
    hp: 50,
    additionalDamageJobs: thiefJobTypes,
    explanation: "",
    fromMonsters: ["死の呼び子"],
    fromVerticesQuery: [],
  },
  {
    name: "燃える拳",
    price: 287600,
    attack: 180,
    defense: 0,
    magic: 0,
    speed: 10,
    hp: 10,
    additionalDamageJobs: gladiatorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Africa", "AfricaCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "王家のハンマー",
    price: 1122000,
    attack: 181,
    defense: 3,
    magic: 3,
    speed: -6,
    hp: 10,
    additionalDamageJobs: clericJobTypes,
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
    name: "めいふの杖",
    price: 1020000,
    attack: 185,
    defense: 0,
    magic: 16,
    speed: -3,
    hp: 0,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: ["マコンデ"],
    fromVerticesQuery: [],
  },
  {
    name: "ビートホーク",
    price: 1355000,
    attack: 190,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    additionalDamageJobs: ["robot"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["AfricaCave"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "狂剣ジャブロー",
    price: 1122000,
    attack: 193,
    defense: 2,
    magic: -2,
    speed: 0,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Antarctica", "Arctic"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "吹雪の杖",
    price: 1500000,
    attack: 199,
    defense: 0,
    magic: 10,
    speed: 0,
    hp: 0,
    additionalDamageJobs: magicianJobTypes,
    explanation: "",
    fromMonsters: ["ペギゴン"],
    fromVerticesQuery: [
      {
        areas: ["Atlantis"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "アトミックアイス",
    price: 1500000,
    attack: 203,
    defense: 3,
    magic: 5,
    speed: -5,
    hp: 0,
    additionalDamageJobs: clericJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Arctic", "Antarctica"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "ゴッドブロー",
    price: 1320000,
    attack: 205,
    defense: 0,
    magic: 10,
    speed: 15,
    hp: 0,
    additionalDamageJobs: gladiatorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["ArcticCave"],
        vertexTypes: ["KeyTreasureField"],
      },
    ],
  },
  {
    name: "にくかい",
    price: 2929,
    attack: 206,
    defense: 0,
    magic: -20,
    speed: 0,
    hp: 300,
    additionalDamageJobs: ["alien"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["AntarcticaCave"],
        vertexTypes: ["KeyTreasureField"],
      },
    ],
  },
  {
    name: "支配のナイフ",
    price: 1800000,
    attack: 208,
    defense: 5,
    magic: 5,
    speed: 8,
    hp: 0,
    additionalDamageJobs: thiefJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["HawaiianIslands"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "ドカポンソード",
    price: 1800000,
    attack: 215,
    defense: 1,
    magic: 1,
    speed: 1,
    hp: 100,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["HawaiianIslandsCave"],
        vertexTypes: ["KeyTreasureField"],
      },
    ],
  },
  {
    name: "バケモノの槍",
    price: 444,
    attack: 230,
    defense: 20,
    magic: 0,
    speed: 20,
    hp: 200,
    additionalDamageJobs: warriorJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["HawaiianIslandsCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "妖刀ニヒル",
    price: 1110,
    attack: 244,
    defense: 20,
    magic: 15,
    speed: 15,
    hp: 150,
    additionalDamageJobs: thiefJobTypes,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Atlantis"],
        vertexTypes: ["KeyTreasureField"],
      },
    ],
  },
  {
    name: "神魔合竜剣",
    price: 888,
    attack: 300,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    additionalDamageJobs: ["devil"],
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
];

export default weapons;
