import { Accessory } from "global";

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

const accessoryList: Accessory[] = [
  {
    name: "力のグローブ",
    price: 30000,
    attack: 5,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation: "攻撃力が5上がる\nカの文字がほられた\n不思議なグローブ。",
    fromMonsters: ["ハヌマーン"],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "守のグローブ",
    price: 30000,
    attack: 0,
    defense: 5,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation: "防御力が5上がる\n守の文字がほられた\n不思議なグローブ。",
    fromMonsters: ["魔法の騎士"],
    fromVerticesQuery: [],
  },
  {
    name: "気のグローブ",
    price: 30000,
    attack: 0,
    defense: 0,
    magic: 5,
    speed: 0,
    hp: 0,
    explanation: "魔力がら上がる\n気の文字がほられた\n不思議なグローブ。",
    fromMonsters: ["さまよう魂", "マジックマッシュ"],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "速のグローブ",
    price: 30000,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 5,
    hp: 0,
    explanation: "素早さが5上がる\n速の文字がほられた\n不思議なグローブ。",
    fromMonsters: ["フリーズガスト"],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "体のグローブ",
    price: 30000,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 20,
    explanation: "HPが20上がる\n体の文字がほられた\n不思議なグローブ。",
    fromMonsters: ["スノーマン"],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "剛のグローブ",
    price: 50000,
    attack: 15,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
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
    name: "鉄のグローブ",
    price: 50000,
    attack: 0,
    defense: 15,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation: "防御力が15上がる\n鉄の文字がほられた\n不思議なグローブ。",
    fromMonsters: ["ヨロイエビ"],
    fromVerticesQuery: [],
  },
  {
    name: "法のグローブ",
    price: 50000,
    attack: 0,
    defense: 0,
    magic: 15,
    speed: 0,
    hp: 0,
    explanation: "魔力が15上がる\n法の文字がほられた\n不思議なグローブ。",
    fromMonsters: ["ゴーストレオ"],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "忍のグローブ",
    price: 50000,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 15,
    hp: 0,
    explanation: "素早さが15上がる\n忍の文字がほられた\n不思議なグローブ。",
    fromMonsters: ["アサシン", "ガママル"],
    fromVerticesQuery: [],
  },
  {
    name: "命のグローブ",
    price: 80000,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 50,
    explanation: "HPが50上がる\n命の文字がほられた\n不思議なグローブ。",
    fromMonsters: ["土の精"],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["KeyTreasureField"],
      },
    ],
  },
  {
    name: "女神のリング",
    price: 50000,
    attack: 5,
    defense: 5,
    magic: 5,
    speed: 5,
    hp: 0,
    explanation:
      "攻撃力、防御力、魔力、\n素早さがらずつ上がる、\n女神の絵が描かれたリング。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Africa"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "ロードオブリング",
    price: 500000,
    attack: 15,
    defense: 15,
    magic: 15,
    speed: 15,
    hp: 0,
    explanation:
      "攻撃力、防御力、魔力、\n素早さが15上がる、\n選ばれし者が持つリング。",
    fromMonsters: ["ライディーン"],
    fromVerticesQuery: [
      {
        areas: ["Arctic"],
        vertexTypes: ["RedTreasureField"],
      },
      {
        areas: ["HawaiianIslandsCave"],
        vertexTypes: ["KeyTreasureField"],
      },
    ],
  },
  {
    name: "破壊のリング",
    price: 300000,
    attack: 30,
    defense: 0,
    magic: -30,
    speed: 0,
    hp: 0,
    explanation:
      "魔力を30下げる代わりに、\n攻撃力を30上げる\nもろ刃の力を持つリング。",
    fromMonsters: ["チタノザウロス", "グラディエーター"],
    fromVerticesQuery: [
      {
        areas: [],
        vertexTypes: [],
      },
    ],
  },
  {
    name: "神速のリング",
    price: 300000,
    attack: 0,
    defense: -30,
    magic: 0,
    speed: 30,
    hp: 0,
    explanation:
      "防御力を30下げる代わり\nに、素早さを30上げる\nもろ刃の力を持つリング。",
    fromMonsters: ["オセアニアデビル"],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["KeyTreasureField"],
      },
      {
        areas: ["Atlantis"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "魔人リング",
    price: 300000,
    attack: -30,
    defense: 0,
    magic: 30,
    speed: 0,
    hp: 0,
    explanation:
      "攻撃力を30下げる代わり\nに、魔力を30上げる\nもろ刃の力を持つリング。",
    fromMonsters: ["ゴールドギドラ"],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["KeyTreasureField"],
      },
    ],
  },
  {
    name: "超人リング",
    price: 0,
    attack: -10,
    defense: -10,
    magic: -10,
    speed: -10,
    hp: 300,
    explanation:
      "4つのパラメータが10\n下がるが、HPを300\n上げる、もろ刃のリング。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Antarctica"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "炎のうでわ",
    price: 12000,
    attack: 0,
    defense: 0,
    magic: 3,
    speed: 0,
    hp: 0,
    explanation:
      "炎系のフィールド魔法の\nダメージを半減する、\n不思議なうでね。",
    fromMonsters: ["ウッディアン"],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "氷のうでわ",
    price: 12000,
    attack: 0,
    defense: 0,
    magic: 3,
    speed: 0,
    hp: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "雷のうでわ",
    price: 12000,
    attack: 0,
    defense: 0,
    magic: 3,
    speed: 0,
    hp: 0,
    explanation:
      "雷系のフィールド魔法の\nダメージを半減する、\n不思議なうでね。",
    fromMonsters: ["神の目"],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave", "OceaniaCave"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "風のうでわ",
    price: 12000,
    attack: 0,
    defense: 0,
    magic: 3,
    speed: 0,
    hp: 0,
    explanation:
      "風系のフィールド魔法の\nダメージを半減する、\n不思議なうでわ。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave", "SouthAmericaCave"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "地のうでわ",
    price: 24000,
    attack: 0,
    defense: 0,
    magic: 3,
    speed: 0,
    hp: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "ぼうえんゴーグル",
    price: 7000,
    attack: 0,
    defense: 3,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "みかわしゴーグル",
    price: 7000,
    attack: 0,
    defense: 3,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "水晶のネックレス",
    price: 8000,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation:
      "たまに0〜6まで好きな\nマスに止まることのできる\n水晶のついたネックレス。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmericaCave"],
        vertexTypes: ["KeyTreasureField"],
      },
      {
        areas: ["Atlantis"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "変化のネックレス",
    price: 0,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "鏡のネックレス",
    price: 200000,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation:
      "たまに、フィールド魔法を\n防いでくれる\n鏡のついたネックレス。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["AfricaCave"],
        vertexTypes: ["KeyTreasureField"],
      },
    ],
  },
  {
    name: "回避のネックレス",
    price: 0,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave", "SouthAmericaCave"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "天使のネックレス",
    price: 300000,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation:
      "たまに、死んでも生き返る\nことができる、天使の形を\nしたネックレス。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmericaCave"],
        vertexTypes: ["RedTreasureField"],
      },
      {
        areas: ["HawaiianIslandsCave"],
        vertexTypes: ["KeyTreasureField"],
      },
      {
        areas: ["Atlantis"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "ハートのくつ",
    price: 180000,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 3,
    hp: 0,
    explanation: "1歩進むごとに\nHPが1回復する、\nかわいいくつ。",
    fromMonsters: ["パッチー１号"],
    fromVerticesQuery: [
      {
        areas: ["AsiaCave"],
        vertexTypes: ["KeyTreasureField"],
      },
    ],
  },
  {
    name: "勇者のくつ",
    price: 150000,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation: "1歩進むごとに\n経験値が10上がる、\nかっこいいくつ。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania", "EuropeCave"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "金のくつ",
    price: 150000,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 3,
    hp: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "ヒョウがら額当て",
    price: 1500,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 3,
    hp: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["EuropeCave"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "ゼブラがら額当て",
    price: 1500,
    attack: 0,
    defense: 0,
    magic: 3,
    speed: 0,
    hp: 0,
    explanation:
      "モンスターが持ち物を\n落としやすくなる\nシマシマがらの額当て。",
    fromMonsters: ["ペロ"],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica", "Europe"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "ピーポのバッジ",
    price: 500000,
    attack: 3,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation:
      "装備していると罪がすぐに\n消えるポリスのキャラが\n描かれたレアなバッジ。",
    fromMonsters: ["セルモン"],
    fromVerticesQuery: [],
  },
  {
    name: "ワルサーバッジ",
    price: 250000,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation:
      "クルサーの絵が描かれた\nバッジ。たまに持ち物を\n増やしてくれる。",
    fromMonsters: ["ワルサー"],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "ウイウイバッジ",
    price: 10,
    attack: 1,
    defense: 1,
    magic: 1,
    speed: 1,
    hp: 10,
    explanation: "",
    fromMonsters: ["ウィウィ"],
    fromVerticesQuery: [],
  },
  {
    name: "誠のピアス",
    price: 65000,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation:
      "男性が装備すると、たまに\nHPが回復する。\n女性が装備しても効果無し。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Atlantis"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "愛のピアス",
    price: 65000,
    attack: 0,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
  {
    name: "極悪ピアス",
    price: 100,
    attack: 30,
    defense: 30,
    magic: 30,
    speed: 30,
    hp: 44,
    explanation:
      "犯罪者が装備すると\nすさまじいカを得られる。\n普通の人には効果は無い。",
    fromMonsters: ["キィ"],
    fromVerticesQuery: [],
  },
  {
    name: "ドカポンクラウン",
    price: 2000000,
    attack: 30,
    defense: 30,
    magic: 30,
    speed: 30,
    hp: 300,
    explanation:
      "ドカポン王国伝説の勇者が\nかぶっていた光り輝く王かん。\n全てのパラメータが急上昇!",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Arctic", "Antarctica"],
        vertexTypes: ["RedTreasureField"],
      },
      {
        areas: ["SouthAmericaCave", "Atlantis"],
        vertexTypes: ["WhiteTreasureField"],
      },
    ],
  },
  {
    name: "魔王の王かん",
    price: 1444444,
    attack: 444,
    defense: 44,
    magic: 44,
    speed: 44,
    hp: 444,
    explanation: "",
    fromMonsters: [],
    fromVerticesQuery: [],
  },
];

const accessories = satisfiesRecords<Accessory>()({
  accessoryAttack1: accessoryList[0],
  accessoryDefense1: accessoryList[1],
  accessoryMagic1: accessoryList[2],
  accessorySpeed1: accessoryList[3],
  accessoryHP1: accessoryList[4],
  accessoryAttack2: accessoryList[5],
  accessoryDefense2: accessoryList[6],
  accessoryMagic2: accessoryList[7],
  accessorySpeed2: accessoryList[8],
  accessoryHP2: accessoryList[9],
  accessoryGoddess: accessoryList[10],
  accessoryLord: accessoryList[11],
  accessoryAttack3: accessoryList[12],
  accessorySpeed3: accessoryList[13],
  accessoryMagic3: accessoryList[14],
  accessorySuperMan: accessoryList[15],
  accessoryFire: accessoryList[16],
  accessoryIce: accessoryList[17],
  accessoryThunder: accessoryList[18],
  accessoryWind: accessoryList[19],
  accessoryEarth: accessoryList[20],
  accessoryMagicHitRate: accessoryList[21],
  accessoryMagicAvoidanceRate: accessoryList[22],
  accessoryCrystal: accessoryList[23],
  accessoryTransform: accessoryList[24],
  accessoryMirror: accessoryList[25],
  accessoryAvoidance: accessoryList[26],
  accessoryAngel: accessoryList[27],
  accessoryHPPlus1: accessoryList[28],
  accessoryHero: accessoryList[29],
  accessoryMoney: accessoryList[30],
  accessoryDropMoreMoney: accessoryList[31],
  accessoryDropMoreItems: accessoryList[32],
  accessoryCrimeDisapear: accessoryList[33],
  accessoryBagItemsGrow: accessoryList[34],
  accessoryVoice: accessoryList[35],
  accessoryHonest: accessoryList[36],
  accessoryLove: accessoryList[37],
  accessoryHeinous: accessoryList[38],
  accessoryCrown: accessoryList[39],
  accessoryKing: accessoryList[40],
});

export { accessoryList, accessories };
export type AccessoryTypes = keyof typeof accessories;
