import type { Shield } from "global";

const shieldList: Shield[] = [
  {
    name: "はりぼての盾",
    price: 50,
    attack: 0,
    defense: 2,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation:
      "世界で一番安い盾。\nはりぼてで作られているので、\nほとんど役に立たない。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ウッドシールド",
    price: 580,
    attack: 0,
    defense: 4,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation: "固い木でできた盾。\n軽くて使いやすいが、\n防御力は低い。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "石の盾",
    price: 1250,
    attack: 0,
    defense: 8,
    magic: 0,
    speed: -1,
    hp: 0,
    explanation:
      "石をけずって作った盾。\n安価だが重いため、\n素早さが下がるのが欠点。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "マコトの盾",
    price: 3400,
    attack: 0,
    defense: 11,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation: "真の一文字が書かれた盾。\n不思議と勇気がわいてくる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Asia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "おんみょうの盾",
    price: 5500,
    attack: 0,
    defense: 16,
    magic: 5,
    speed: 0,
    hp: 0,
    explanation:
      "光と影を表すもようが描かれた盾。\n装備すると魔力が上がる。\nたまに魔力を高めてくれる。",
    fromMonsters: ["ゴジョー"],
    fromVerticesQuery: [],
  },
  {
    name: "バックラー",
    price: 7500,
    attack: 0,
    defense: 18,
    magic: 0,
    speed: 5,
    hp: 0,
    explanation:
      "うでに取り付けるタイプの盾。\n小くて軽いため、素早さが上がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ウィウィシールド",
    price: 100000,
    attack: 20,
    defense: 20,
    magic: 20,
    speed: 20,
    hp: 200,
    explanation: "",
    fromMonsters: ["ウィウィ"],
    fromVerticesQuery: [],
  },
  {
    name: "ウサチャンガード",
    price: 3200,
    attack: 1,
    defense: 21,
    magic: 1,
    speed: 1,
    hp: 10,
    explanation:
      "ウサギの形をしたキュートな盾。\nあまりのかわいさに、相手が\n攻撃しなくなる⋯ことは無い。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["AsiaCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "兵士の盾",
    price: 13000,
    attack: 0,
    defense: 24,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation: "下っぱの兵士が使う盾。\n防御力もそれなり。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "忍びの盾",
    price: 8500,
    attack: 5,
    defense: 25,
    magic: 0,
    speed: 2,
    hp: 0,
    explanation:
      "忍者が持つ手裏剣の形をした盾。\nとがっているので攻撃力が上がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["AsiaCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "クマタンガード",
    price: 10000,
    attack: 1,
    defense: 27,
    magic: 1,
    speed: 1,
    hp: 10,
    explanation:
      "クマの形をしたかわいい盾。\n装備していると、ほんわか\n気分になって、いやされる?",
    fromMonsters: ["コロボックル"],
    fromVerticesQuery: [],
  },
  {
    name: "ムーンシールド",
    price: 13000,
    attack: 0,
    defense: 30,
    magic: 12,
    speed: 0,
    hp: 0,
    explanation: "三日月のもようが描かれた盾。\n装備すると魔力が上がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "アイアンシールド",
    price: 19900,
    attack: 0,
    defense: 32,
    magic: 0,
    speed: -2,
    hp: 0,
    explanation: "鉄で作られた盾。\n重いので素早さが下がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "毛皮の盾",
    price: 42000,
    attack: 0,
    defense: 34,
    magic: 0,
    speed: 5,
    hp: 0,
    explanation:
      "毛皮につつまれたフカフカの盾。\nこれさえあれば、さむくても安心。\n素早さが上がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "エルフの盾",
    price: 52000,
    attack: 0,
    defense: 37,
    magic: 8,
    speed: 8,
    hp: 0,
    explanation:
      "エルフが作った盾。\n装備すると素早さと魔力が上がる。\nたまに素早さを高めてくれる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Europe", "EuropeCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "黒の盾",
    price: 46000,
    attack: 0,
    defense: 42,
    magic: 0,
    speed: -3,
    hp: 0,
    explanation:
      "黒曜石で造られた盾。\n安価で防御力もあるが、\n素早さが下がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "聖騎士の盾",
    price: 35600,
    attack: 0,
    defense: 43,
    magic: 0,
    speed: -4,
    hp: 0,
    explanation:
      "聖騎士だけが持つことを\nゆるされる神聖な盾。\n重くて素早さが下がる。",
    fromMonsters: ["ソードナイト"],
    fromVerticesQuery: [],
  },
  {
    name: "マンモスシールド",
    price: 68500,
    attack: 0,
    defense: 45,
    magic: 0,
    speed: -2,
    hp: 0,
    explanation:
      "マンモスのキバがついてる\n巨大な盾。\nキバの重さで素早さが下がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "スパイクガード",
    price: 85000,
    attack: 8,
    defense: 48,
    magic: 0,
    speed: -2,
    hp: 10,
    explanation:
      "トゲトゲのついている盾。\n重くて素早さが下がるが、\nトゲのおかげで攻撃力が上がる。",
    fromMonsters: ["アイスゴーレム"],
    fromVerticesQuery: [],
  },
  {
    name: "おおわしの盾",
    price: 93000,
    attack: 0,
    defense: 55,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation: "二つの頭を持つ、伝説の大ワシの\nレリーフがほられた盾。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "赤き星の盾",
    price: 79800,
    attack: 0,
    defense: 57,
    magic: 15,
    speed: 0,
    hp: 0,
    explanation:
      "赤い星が付いている盾。\n魔力を秘めた赤い星の力で\n装備者は魔力が上がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "カッターフラワー",
    price: 146500,
    attack: 8,
    defense: 61,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation:
      "5枚の刃を組み合わせて、\n花のような形に作った盾。\nその刃のおかげで、攻撃力が上がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "モノアイシールド",
    price: 102000,
    attack: 0,
    defense: 64,
    magic: -4,
    speed: 0,
    hp: 0,
    explanation:
      "一つ目が描かれた妖しい盾。\n装備者の魔力を下げる代わりに、\n魔法のダメージを減らす力がある。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Russia"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "シルバーシールド",
    price: 158000,
    attack: 0,
    defense: 68,
    magic: 3,
    speed: 0,
    hp: 0,
    explanation: "銀で作られた盾。\n銀の効果で魔力が上がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "黄金の盾",
    price: 1400000,
    attack: 0,
    defense: 70,
    magic: 15,
    speed: 0,
    hp: 0,
    explanation:
      "黄金だけで作られた光り輝く盾。\n防御力はイマイチだが、魔力が上がり\nさらにとんでもない値段で売れる。",
    fromMonsters: ["ケツアルコアトル"],
    fromVerticesQuery: [],
  },
  {
    name: "ドカポソシールド",
    price: 165000,
    attack: 0,
    defense: 75,
    magic: 0,
    speed: 0,
    hp: 50,
    explanation: "ドカポン王国の伝説に残る\n英雄の持っていた盾。\n⋯に見える。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmericaCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "ナスカシールド",
    price: 183000,
    attack: 0,
    defense: 77,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation: "ナスカの地上絵が描かれた盾。\n芸術的価値も高い。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: [],
      },
    ],
  },
  {
    name: "メタルシールド",
    price: 196000,
    attack: 0,
    defense: 80,
    magic: 0,
    speed: 5,
    hp: 0,
    explanation:
      "ツルツルにみがかれた\n軽量の特殊合金製の盾。\n軽量のため素早さが上がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["NorthAmerica", "NorthAmericaCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "破邪の盾",
    price: 252000,
    attack: 0,
    defense: 83,
    magic: 5,
    speed: 0,
    hp: 0,
    explanation: "魔法陣が描かれた\n破邪の力を持つ盾。\n魔力が上がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "石仮面の盾",
    price: 291000,
    attack: 0,
    defense: 90,
    magic: 0,
    speed: -2,
    hp: 20,
    explanation:
      "巨大な石の仮面の盾。\nちょっと笑っているのが不気味。\nあまりの重さに素早さが下がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ドクロの盾",
    price: 850,
    attack: 0,
    defense: 94,
    magic: 0,
    speed: 0,
    hp: 20,
    explanation:
      "ドクロの形をしたまがまがしい盾。\n装備すると生命力が上がるが、\nたまに戦闘から逃げ出すことがある。",
    fromMonsters: ["さまようムクロ"],
    fromVerticesQuery: [],
  },
  {
    name: "ウロコの盾",
    price: 439000,
    attack: 0,
    defense: 102,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation:
      "ウロコがびっしりとはられている盾。\nそのウロコは、数万年も昔から姿が\n変わらない古代魚から取っている。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "バタフライガード",
    price: 930000,
    attack: 0,
    defense: 105,
    magic: 0,
    speed: 10,
    hp: 0,
    explanation: "チョウの形をした非常に美しい盾。\n素早さが上がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["SouthAmerica", "SouthAmericaCave"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "こうらの盾",
    price: 473500,
    attack: 0,
    defense: 106,
    magic: 5,
    speed: -1,
    hp: 0,
    explanation:
      "1万年以上生きて、魔力を持った\nカメのこうらを使った盾。\n魔力が上がるが素早さが下がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ボヨヨンシールド",
    price: 1060000,
    attack: 0,
    defense: 112,
    magic: 0,
    speed: 0,
    hp: 20,
    explanation:
      "思春期の男子に大人気の盾。\nマシュマロのようにやわらかく、\nさわり心地バツグン",
    fromMonsters: ["コビトペンギン"],
    fromVerticesQuery: [],
  },
  {
    name: "ジュラルミンの盾",
    price: 538000,
    attack: 0,
    defense: 118,
    magic: 0,
    speed: -3,
    hp: 0,
    explanation:
      "重いジュラルミンを多用して\n造られた巨大な盾。\nそのため素早さが下がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "太陽の盾",
    price: 400000,
    attack: 0,
    defense: 120,
    magic: 0,
    speed: 0,
    hp: 40,
    explanation:
      "神像イマーヘンが持っていた\n太陽の神からさずかった盾。\n大いなる生命力を秘めている。",
    fromMonsters: ["神像イマーヘン"],
    fromVerticesQuery: [],
  },
  {
    name: "ビートルガード",
    price: 741000,
    attack: 5,
    defense: 127,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation:
      "カブトムシの形をした盾。\nカブトムシの角のおかげで、\n攻撃力が上がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Africa"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "アイ戦士の盾",
    price: 805000,
    attack: 0,
    defense: 135,
    magic: 0,
    speed: 8,
    hp: 0,
    explanation:
      "ドカポン王国伝説の戦士が\n使っていたメチャかっこいい盾。\n素早さが上がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Africa"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ウォンバットの盾",
    price: 298000,
    attack: 1,
    defense: 136,
    magic: 1,
    speed: 1,
    hp: 10,
    explanation:
      "ウォンバットが描かれた盾。\nオセアニアで大ヒット中のグッズ。\nコアラグッズはもう古い。",
    fromMonsters: ["ファーファ"],
    fromVerticesQuery: [],
  },
  {
    name: "勇者の盾",
    price: 912000,
    attack: 0,
    defense: 140,
    magic: 0,
    speed: 0,
    hp: 50,
    explanation: "村長に勇者と認められた者に\n与えられる盾。\n生命力が上がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Africa", "ArcticCave"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "メカニカルガード",
    price: 988000,
    attack: 0,
    defense: 148,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation:
      "戦闘を科学的に計算しつくして\n作られた、機械仕かけの盾。\n非常に高い防御力をほこる。",
    fromMonsters: ["ファラオの兵"],
    fromVerticesQuery: [],
  },
  {
    name: "デーモンシールド",
    price: 950,
    attack: 10,
    defense: 150,
    magic: 5,
    speed: 5,
    hp: 0,
    explanation:
      "悪魔が地上に落とした邪悪な盾。\n非常に強力だが、使用者の命を\n少しずつけずっていく。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "ドラゴンシールド",
    price: 1140000,
    attack: 0,
    defense: 158,
    magic: 0,
    speed: -5,
    hp: 50,
    explanation:
      "ドラゴンの顔がほられた盾。\n持ち主の生命力を上げてくれるが、\nあまりの重さに素早さが下がる。",
    fromMonsters: ["海竜"],
    fromVerticesQuery: [],
  },
  {
    name: "ライフガード",
    price: 1310000,
    attack: 0,
    defense: 162,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation:
      "ハートの形をしたかわいい盾。\n使用者は神に祝福されて、\nたまにHPを回復してくれる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Oceania"],
        vertexTypes: ["RedTreasureField"],
      },
      {
        areas: ["AntarcticaCave"],
        vertexTypes: ["KeyTreasureField"],
      },
      {
        areas: ["Antarctica"],
        vertexTypes: ["WeaponStoreField"],
      },
    ],
  },
  {
    name: "ダイヤの盾",
    price: 1900000,
    attack: 0,
    defense: 168,
    magic: 5,
    speed: -3,
    hp: 0,
    explanation:
      "巨大なダイヤで作った超高価な盾。\n魔法ダメージを減らすが、\n素早さが下がる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["AfricaCave"],
        vertexTypes: ["RedTreasureField", "KeyTreasureField"],
      },
    ],
  },
  {
    name: "エンゼルシールド",
    price: 1500000,
    attack: 0,
    defense: 172,
    magic: 0,
    speed: 10,
    hp: 0,
    explanation:
      "天使の羽をかたどった聖なる盾。\n聖なる天使の力で、たまに\nステータス異常を回復してくれる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Arctic", "Antarctica", "Atlantis"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "氷河の盾",
    price: 1500000,
    attack: 0,
    defense: 185,
    magic: 0,
    speed: -3,
    hp: 0,
    explanation:
      "氷河の中から生まれた\n重く冷たい盾。\nたまに攻撃力を高めてくれる。",
    fromMonsters: ["シロクマラ"],
    fromVerticesQuery: [
      {
        areas: ["Atlantis"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "ふくじゅうの盾",
    price: 1800000,
    attack: 0,
    defense: 194,
    magic: 1,
    speed: 4,
    hp: 0,
    explanation:
      "全ての者をふくじゅうさせる力を\n秘めた盾。目の前に立った者を\n強制的に降参させることがある。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["HawaiianIslands"],
        vertexTypes: ["RedTreasureField"],
      },
    ],
  },
  {
    name: "ドカポンシールド",
    price: 1500000,
    attack: 1,
    defense: 202,
    magic: 1,
    speed: 1,
    hp: 100,
    explanation:
      "ドカポン王国の伝説に残る\n英雄の持っていた盾。\nたまに防御カを高めてくれる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["HawaiianIslandsCave"],
        vertexTypes: ["KeyTreasureField"],
      },
    ],
  },
  {
    name: "魔の盾ソロモン",
    price: 111,
    attack: 12,
    defense: 213,
    magic: 12,
    speed: 12,
    hp: 120,
    explanation:
      "魔界の勇者ソロモンが、戦いの\n果てに、盾に変化してしまった姿。\n使用者の命を食いながら生きる。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: ["Atlantis"],
        vertexTypes: ["KeyTreasureField"],
      },
    ],
  },
  {
    name: "血ぬりの盾",
    price: 444,
    attack: 0,
    defense: 255,
    magic: 0,
    speed: 0,
    hp: 0,
    explanation:
      "人々のおん念が集まってできた盾。\n悪魔とけいやくした者に与えられる。\nいつも真っ赤な血がしたたっている。",
    fromMonsters: [],
    fromVerticesQuery: [
      {
        areas: [],
        vertexTypes: [],
      },
    ],
  },
];

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

const shields = satisfiesRecords<Shield>()({
  shieldPaper: shieldList[0],
  shieldWood: shieldList[1],
  shieldStone: shieldList[2],
  shieldReal: shieldList[3],
  shieldYinAndYang: shieldList[4],
  shieldBuckler: shieldList[5],
  shieldWeiWei: shieldList[6],
  shieldRabbit: shieldList[7],
  shieldSoldier: shieldList[8],
  shieldStealth: shieldList[9],
  shieldBear: shieldList[10],
  shieldMoon: shieldList[11],
  shieldIron: shieldList[12],
  shieldFur: shieldList[13],
  shieldElf: shieldList[14],
  shieldBlack: shieldList[15],
  shieldPaladin: shieldList[16],
  shieldMammoth: shieldList[17],
  shieldSpike: shieldList[18],
  shieldSeaEagle: shieldList[19],
  shieldRedStar: shieldList[20],
  shieldCutterFlower: shieldList[21],
  shieldMonoEye: shieldList[22],
  shieldSilver: shieldList[23],
  shieldGolden: shieldList[24],
  shieldDokaposo: shieldList[25],
  shieldBird: shieldList[26],
  shieldMetal: shieldList[27],
  shieldDestruction: shieldList[28],
  shieldStoneMask: shieldList[29],
  shieldSkull: shieldList[30],
  shieldScale: shieldList[31],
  shieldButterfly: shieldList[32],
  shieldShell: shieldList[33],
  shieldBoobs: shieldList[34],
  shieldDuralumin: shieldList[35],
  shieldSun: shieldList[36],
  shieldBeetle: shieldList[37],
  shieldWarrior: shieldList[38],
  shieldWombat: shieldList[39],
  shieldHero: shieldList[40],
  shieldMechanical: shieldList[41],
  shieldDaemon: shieldList[42],
  shieldDragon: shieldList[43],
  shieldLove: shieldList[44],
  shieldDiamond: shieldList[45],
  shieldAngel: shieldList[46],
  shieldGlacier: shieldList[47],
  shieldObedience: shieldList[48],
  shieldDokapon: shieldList[49],
  shieldDevil: shieldList[50],
  shieldBloody: shieldList[51],
});

export { shields, shieldList };
export type shieldTypes = keyof typeof shields;
