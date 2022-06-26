import { magicDefense } from "global";

const magicDefenses: magicDefense[] = [
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

export default magicDefenses;
