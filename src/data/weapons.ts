import { Weapon } from "global";
import {
  warriorJobTypes,
  magicianJobTypes,
  clericJobTypes,
  thiefJobTypes,
  gladiatorJobTypes,
} from "./jobs";

const weaponList: Weapon[] = [
  {
    name: "やすものの剣",
    price: 50,
    attack: 2,
    defense: 0,
    magic: 0,
    speed: 0,
    hp: 0,
    additionalDamageJobs: warriorJobTypes,
    explanation: "世界で一番安い武器。\nおもちゃ同然でほとんど斬れない。",
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
    explanation: "竹で作られたサオ。\nせんたく物もほせる優れもの。",
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
    explanation:
      "フィギュアシリーズのシークレット。\n世界でも数個しかないゲキレア品。\n魅力的で生意気そうな小悪魔が最高!",
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
    explanation:
      "伝説のコメディアンが使っていたと\nされるステキなステッキ。\n魔力が上がる。",
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
    explanation:
      "肉切り用のほうちょう。\nよくとがれており、切れ味はいい。\n素早さが上がる。",
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
    explanation:
      "木を削り出して作った武器。\n安価で攻撃力もあるが、\n素早さが下がる。",
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
    explanation: "大振りの片刃の剣。\n刀身の重さで相手をたたき斬る。",
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
    explanation:
      "アツアツのおでん。\nダシがしみこんでいておいしいが、\n急いで食べるとやけどするぞ!",
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
    explanation:
      "持ち主の意思によって、のびちぢみ\nすると言われている伝説の棒。\n素早さが上がる。",
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
    explanation:
      "聖水で清められたナイフ。\n破邪の力を持っている。\n素早さが上がる。",
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
    explanation:
      "騎士がぎしきなどで使う、\nとても細く軽い剣。\n素早さが上がる。",
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
    explanation:
      "下っぱの兵士が使う槍。\n攻撃力もそこそこしかなく、\nこれといった特徴もない。",
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
    explanation:
      "長年魔法をけんきゅうしてきた、\n大魔導師が開発した杖。\n装備すると魔力が上がる。",
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
    explanation:
      "でっかいキャンディ。\n食べるとオイシイが、\ns全部食べるとムシバになるので注意。",
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
    explanation:
      "魔法少女がよく使う魔法のステッキ。\nおもちゃっぽいが、武器にも使える。\n使うと変身できそうな気がする⋯。",
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
    explanation:
      "その昔、流行していたおどりで\n使われていたドハデなせんす。\nたまに素早さを高めてくれる。",
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
    explanation:
      "お坊さんが持っている\n金属製の長い杖。\nたまに魔力を高めてくれる。",
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
    explanation:
      "僧侶達が戦闘の時に用いる武器。\n破壊力は大きいが、\n素早さが下がる。",
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
    explanation:
      "槍とオノが一つになった武器。\n斬っても突いても使えるので、\nいろいろな戦闘で役立つ。",
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
    explanation:
      "のうふがイネをかる時に使うカマ。\nよくとがれており、収穫の時も安心。\n素早さが上がる。",
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
    explanation: "騎士が馬上で使用する槍。\n相手のヨロイごとつらぬく。",
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
    explanation:
      "トゲのついた鉄製のナックル。\n拳にはめて戦うので身軽になり\n素早さが上がる。",
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
    explanation: "魔族の血で真っ赤に染めた杖。\n魔族の血の効果で魔力が上がる。",
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
    explanation:
      "聖騎士だけが持つことを\nゆるされる神聖な剣。\n騎士達のあこがれの武器。",
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
    explanation:
      "フイギュアシリーズ3種の内の1つ。\n優しいお姉さんのような天使が人気。\n他にシークレットが1種あるらしい。",
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
    explanation: "木こりが木を切る時に使うオ/。\nどんな太い木でも切り倒せる。",
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
    explanation:
      "振るとリンリン音がなる楽器。\nでも武器としても使える。\nノツノになると攻撃力が高まる。",
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
    explanation:
      "家を壊す時などに使う\n木製の巨大なハンマー。\n強力だが素早さが下がる。",
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
    explanation:
      "スチール製の切れ味鋭いナイフ。\nとても軽いので素早さが上がる。",
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
    explanation:
      "剣士レッドブリキンが持っていた剣。\nその刀身は雷をおびていて、\n斬った相手に雷を落とすことがある。",
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
    explanation:
      "トゲトゲの鉄の玉が先についている、\n強力なハンマー。\n重いので素早さが下がる。",
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
    explanation:
      "精霊の宿る木から削りだした棍棒。\nゴツゴツしていて、とても固い。",
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
    explanation:
      "ピンク色のでっかい注射器。\nこれでさされると、かなり痛そう。\nたまに相手の攻撃力を落とす。",
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
    explanation:
      "攻撃が当たると金を生み出す、\n夢のようなこづち。\nこれさえあればあなたも大金持ち!",
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
    explanation:
      "チーフイーグルの頭がい骨を\nくつつけた杖。\n装備すると魔力が上がる。",
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
    explanation:
      "伝説の医者が使っていたというメス。\nものすごい切れ味を持つ。\n素早さが上がる。",
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
    explanation:
      "ハヤブサの素早さを持った槍。\n風を呼ぶ力もあり、相手を\nカマイタチで切りさくことがある。",
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
    explanation:
      "忍者我魔丸が持っていた名刀。\nその刃は岩さえ斬ることができる。\nたまに素早さを高めてくれる。",
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
    explanation:
      "全て銀で作られた剣。\n銀の魔よけの効果によって、\n魔力と防御力が上がる。",
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
    explanation:
      "フィギュアシリーズ3種の内の1つ。\n元気で子供っぽいピクシーが人気。\n他にシークレットが1種あるらしい。",
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
    explanation:
      "戦闘用に作られた片刃のオン。\n相手をヨロイごと斬る。\n重いので素早さが下がる。",
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
    explanation:
      "デジタルなパワーで相手を斬る。\n電池が切れると使えなくなる?\n全てのパラメータが上がる。",
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
    explanation:
      "雪原人ミチエーリが持っていた、\n巨大な根棒。当たれば\nすごい破壊力だが、よく外れる。",
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
    explanation:
      "黄金だけで作られた光り輝く杖。\nとんでもない値段で売れる。\n魔力が上がる。",
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
    explanation: "花の香りただよう杖。\n装備すると魔力が上がる。",
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
    explanation:
      "ドカポン王国の伝説に残る\n勇者の持っていた剣。\n⋯のように見える。",
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
    explanation:
      "鉄のトゲトゲがついた首わ。\nよく分からないが人間用らしい。\n素早さが上がる。",
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
    explanation:
      "骨をけずりだして造ったダガー。\nとても軽いので、素早さが上がる。",
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
    explanation:
      "女海賊バイラルが持っていた\nフックのついたナックル。\n海賊なら誰でもあこがれる武器。",
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
    explanation:
      "歴戦の兵士が好んで装備する槍。\n攻撃力はあるがあつかいにくく、\n素早さが下がる。",
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
    explanation:
      "何でもたたきつぶせる\n金属製の巨大な金づち。\n重いので、素早さが下がる。",
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
    explanation:
      "大きな真紅のロウソク。\nロウがたれると、さらに痛い。\nなれると気持ちいい⋯人もいる。",
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
    explanation:
      "犯罪者の首を斬る時に使われた\nしょけい用のオ/。\n重いので素早さが下がる。",
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
    explanation:
      "一族の長だけが持つことを\nゆるされる、一族の宝のオノ。\nたまに防御力を高めてくれる。",
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
    explanation:
      "戦闘用に作られた兵士の持つナイフ。\n丈夫で切れ味も鋭い。\n素早さが上がる。",
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
    explanation:
      "天空の王者、タカのツメ。\nタカの力で素早さが上がり、\nたまにHPを回復してくれる。",
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
    explanation:
      "いくつものしんじゅが\nはめ込まれた美しい杖。\n装備すると魔力が上がる。",
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
    explanation:
      "怪物少女アリサが持っていた\nかわいい(?)ヌイグルミ。\nたまに相手を魅了する。",
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
    explanation:
      "羽のように軽い細身の剣。\nとても軽いので、装備すると\n素早さが上がる。",
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
    explanation:
      "古代文明の神官がぎしきで使う、\n波打った形のナイフ。\n太陽の力を呼ぶことがある。",
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
    explanation:
      "ナックルのようにつかんで使う\n攻防一体の剣。\n防御力と素早さが上がる。",
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
    explanation:
      "暗殺者が使う暗殺用のダガー。\nその刀身にはもう毒がぬってあり、\nたまに一撃で相手の息の根を止める。",
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
    explanation:
      "大木でも魔物でも、何でも切れる\n山切りカットの巨大なノコギリ。\n重いので素早さが下がる。",
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
    explanation:
      "先についたドリルが回転する\n機械仕かけの槍。\n破壊力が高く、素早さも上がる。",
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
    explanation:
      "恐ろしげな真っ黒の巨大な注射器。\nもしもその太い針でさされたら⋯。\nたまに相手の攻撃力を落とす。",
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
    explanation:
      "鋭い刃で組まれたおうぎ。\n戦いのダンスの解説書付き。\n防御力と素早さが上がる。",
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
    explanation:
      "ヘビの形をしているまがまがしい杖。\n魔性の力で魔力が上がるが、\n勝手に攻撃魔法を選ぶことがある。",
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
    explanation:
      "王家のもんしょうをかたどった、\n神聖な杖。\n魔力と素早さが上がる。",
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
    explanation:
      "フィギュアシリーズ3種の内の1つ。\n明るくキュートなマーメイドが人気。\n他にシークレットが1種あるらしい。",
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
    explanation:
      "古来より暗殺具として伝えられ、\nシャオロンさえも封印した危険な拳。\nなぐられると毒になることがある。",
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
    explanation:
      "何でも一刀両断にする\n破壊力バツグンの巨大なオ/。\n重いので、素早さが下がる。",
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
    explanation:
      "なぐるとピコっといい音がなる\nおもちゃのハンマー。でも強い。\nたまに相手の全ての力を落とす。",
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
    explanation:
      "海の神様が使っていたと言われる\n三またのモリ。\n海の男達のあこがれの武器。",
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
    explanation:
      "かわいいコアラがついている棒。\nオセアニアで大ヒットしたグッズ。\nたまに相手の防御力を落とす。",
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
    explanation:
      "巨大な鉄とトゲのごっついハンマー。\nその破壊力はまるでいん石のごとし。\n重いので素早さがガクッと下がる。",
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
    explanation:
      "ダメペットをペンペンするための棒。\n痛みをがまんすれば、そこは天国。\nたまに相手のボタンを禁止する。",
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
    explanation:
      "ドラゴンを殺すために\n作られた超巨大な剣。\n防御カも上がるが素早さが下がる。",
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
    explanation:
      "憎しみの門の門番が、死者の肉体と\n魂を分断する時に使うカマ。たまに\n斬った相手の血を止まらなくさせる。",
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
    explanation:
      "拳に炎の力を宿すことができる。\n炎につつまれた拳は、\n素早さと生命力を秘めている。",
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
    explanation:
      "王家に伝わる超重量のハンマー。\n代々の王の魂が宿っていて、\nなぐった相手を呪うことがある。",
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
    explanation:
      "呪術師マコンデが持っていた杖。\nドクロが邪悪なオーラを放っている。\n相手を暗闇につつむことがある。",
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
    explanation:
      "刃を超振動させて、相手を切断する\n機械仕かけのオノ。\n幻の古代文明が造ったとされている。",
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
    explanation:
      "魔界の狂犬野郎ジャブローの変わり\n果てた姿。斬らないとぐずりだす。\nきまぐれなので、切れ味が変わる。",
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
    explanation:
      "雪の結晶と魔力を封じ込めた杖。\n冷気で相手の眠りを誘うことがある。\n寝たら死ぬぞ!",
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
    explanation:
      "巨大な氷でできたハンマー。\nなぐった相手をこおらす時がある。\n重いので素早さが下がる。",
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
    explanation:
      "拳に神の力を宿すことができる。\nその拳は大地を割るほどの力を持つ。\nたまに相手の素早さを落とす。",
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
    explanation:
      "グロテスクな生ける肉のかたまり。\n使用者は、魔力を吸い取られるが、\n生命力がグンと上がる。",
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
    explanation:
      "世界を支配できる力を与えてくれる\nというナイフ。目の前に立った者を\n強制的に降参させることがある。",
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
    explanation:
      "ドカポン王国の伝説に残る\n勇者の持っていた剣。\n相手の攻撃魔法を壊すことがある。",
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
    explanation:
      "バケモノを滅ぼすために作られた槍。\n使用者は、呪いで狂う時がある。\nただし、その破壊力は最強に近い。",
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
    explanation:
      "使用者の生命を吸うかわりに、\n強大な力を与えてくれる呪われた刀。\n命とカ、貴方はどちらを選ぶ⋯?",
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

/**
 * 武器分成6種類型
 *
 * 1. sword
 *
 * 2. stick
 *
 * 3. axe
 *
 * 4. brassKnuckles
 *
 * 5. spear
 *
 * 6. hammer
 */
const weapons = satisfiesRecords<Weapon>()({
  swordNormal: weaponList[0],
  spearBamboo: weaponList[1],
  stickWitch: weaponList[2],
  stickComedy: weaponList[3],
  swordKitchen: weaponList[4],
  hammerWooden: weaponList[5],
  swordGreenDragon: weaponList[6],
  hammerHotOden: weaponList[7],
  spearRuyiJingu: weaponList[8],
  swordHoly: weaponList[9],
  swordRapier: weaponList[10],
  spearSoldier: weaponList[11],
  stickArchMage: weaponList[12],
  hammerLollipop: weaponList[13],
  stickWitchGril: weaponList[14],
  hammerFoldingFan: weaponList[15],
  spearMonk: weaponList[16],
  hammerCleric: weaponList[17],
  spearHalberd: weaponList[18],
  axeFarmer: weaponList[19],
  spearNightLance: weaponList[20],
  brassKnuckles: weaponList[21],
  stickCrimson: weaponList[22],
  swordPaladin: weaponList[23],
  stickAngel: weaponList[24],
  axeLumberjack: weaponList[25],
  brassKnucklesTambourine: weaponList[26],
  hammerGiant: weaponList[27],
  swordSteel: weaponList[28],
  swordLightning: weaponList[29],
  hammerMorningStar: weaponList[30],
  hammerSpiritClub: weaponList[31],
  spearPink: weaponList[32],
  hammerGolden: weaponList[33],
  stickShaman: weaponList[34],
  swordScalpel: weaponList[35],
  spearFalcon: weaponList[36],
  swordNinja: weaponList[37],
  swordSilver: weaponList[38],
  stickPixie: weaponList[39],
  axeBattle: weaponList[40],
  swordDigi: weaponList[41],
  hammerSnowMan: weaponList[42],
  stickGolden: weaponList[43],
  stickFlower: weaponList[44],
  swordDokaposo: weaponList[45],
  brassKnucklesM: weaponList[46],
  swordBone: weaponList[47],
  brassKnucklesHook: weaponList[48],
  spearWarrior: weaponList[49],
  hammer: weaponList[50],
  hammerCandle: weaponList[51],
  axeGuillotine: weaponList[52],
  axeHawk: weaponList[53],
  swordCombat: weaponList[54],
  brassKnucklesKing: weaponList[55],
  stickRenju: weaponList[56],
  hammerStuffedToy: weaponList[57],
  swordShippu: weaponList[58],
  swordRitual: weaponList[59],
  brassKnucklesDragon: weaponList[60],
  swordAssassin: weaponList[61],
  swordOversized: weaponList[62],
  spearDrill: weaponList[63],
  spearPurple: weaponList[64],
  hammerKunai: weaponList[65],
  stickSnack: weaponList[66],
  stickRune: weaponList[67],
  stickMermaid: weaponList[68],
  brassKnucklesPoisonous: weaponList[69],
  axeDestruction: weaponList[70],
  hammerToy: weaponList[71],
  spearSeaGod: weaponList[72],
  hammerKoala: weaponList[73],
  hammerMeteor: weaponList[74],
  hammerHand: weaponList[75],
  swordDragonslayer: weaponList[76],
  axeSickle: weaponList[77],
  brassKnucklesBurning: weaponList[78],
  hammerRoyal: weaponList[79],
  stickHell: weaponList[80],
  axeBeat: weaponList[81],
  swordMad: weaponList[82],
  stickSnowstorm: weaponList[83],
  hammerIce: weaponList[84],
  brassKnucklesGod: weaponList[85],
  hammerMeat: weaponList[86],
  swordDomination: weaponList[87],
  swordDokapon: weaponList[88],
  spearMonster: weaponList[89],
  swordDemon: weaponList[90],
  swordGodDevilDragon: weaponList[91],
});

export { weapons, weaponList };
export type weaponTypes = keyof typeof weapons;
