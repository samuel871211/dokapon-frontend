import { Monster } from '../global'

const monsters: Monster[] = [
    {
        name: 'ヤタガラス',
        level: 1,
        attack: 4,
        defense: 2,
        magic: 1,
        speed: 5,
        hp: 10,
        exp: 4,
        money: 300,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: 'なし'
        }
    },
    {
        name: 'ノラ犬',
        level: 1,
        attack: 6,
        defense: 3,
        magic: 1,
        speed: 1,
        hp: 14,
        exp: 4,
        money: 400,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: 'なし'
        }
    },
    {
        name: 'スライミィ',
        level: 1,
        attack: 7,
        defense: 4,
        magic: 1,
        speed: 2,
        hp: 16,
        magicDefense: 'マホガド',
        exp: 6,
        money: 400,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: 'バイン'
        }
    },
    {
        name: 'キノコこぞう',
        level: 2,
        attack: 13,
        defense: 2,
        magic: 1,
        speed: 2,
        hp: 25,
        magicAttack: 'フニャリ',
        exp: 20,
        money: 700,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: 'パワーキノコ'
        }
    },
    {
        name: 'モンキーマン',
        level: 2,
        attack: 8,
        defense: 3,
        magic: 1,
        speed: 8,
        hp: 28,
        magicAttack: 'ノロ～',
        exp: 15,
        money: 600,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: 'バイン'
        }
    },
    {
        name: 'シオガエル',
        level: 2,
        attack: 10,
        defense: 4,
        magic: 1,
        speed: 5,
        hp: 39,
        exp: 20,
        money: 600,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: 'ピョコタンの書'
        }
    },
    {
        name: '人食いパンダ',
        level: 2,
        attack: 17,
        defense: 3,
        magic: 1,
        speed: 2,
        hp: 60,
        exp: 15,
        money: 800,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: '回復ざい'
        }
    },
    {
        name: '子供キョンシー',
        level: 3,
        attack: 14,
        defense: 9,
        magic: 3,
        speed: 1,
        hp: 58,
        magicDefense: 'マホガド',
        exp: 47,
        money: 700,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: '４のクリスタル'
        }
    },
    {
        name: '霊幻導師',
        level: 3,
        attack: 9,
        defense: 6,
        magic: 12,
        speed: 2,
        hp: 40,
        trick: '魔力ため',
        magicAttack: 'ヨワッチ',
        magicDefense: 'リカバ',
        exp: 70,
        money: 1200,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: 'リカバ'
        }
    },
    {
        name: 'ムノチュワ',
        level: 3,
        attack: 4,
        defense: 8,
        magic: 10,
        speed: 6,
        hp: 51,
        magicAttack: 'エネゲット',
        magicDefense: 'マホガド',
        exp: 70,
        money: 800,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: 'マグの書'
        }
    },
    {
        name: 'ハヌマーン',
        level: 5,
        attack: 17,
        defense: 12,
        magic: 3,
        speed: 12,
        hp: 68,
        trick: '力ため',
        magicDefense: 'マホガド',
        exp: 114,
        money: 1100,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: '力のグローブ'
        }
    },
    {
        name: 'マメコウモリ',
        level: 6,
        attack: 19,
        defense: 9,
        magic: 2,
        speed: 19,
        hp: 62,
        trick: '吸血',
        magicAttack: 'ドクラマグラ',
        exp: 176,
        money: 1000,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: '回復ざい'
        }
    },
    {
        name: '山賊ネズミ',
        level: 6,
        attack: 18,
        defense: 6,
        magic: 4,
        speed: 15,
        hp: 112,
        trick: 'スリ',
        magicAttack: 'ゼニゲット',
        magicDefense: 'リカバ',
        exp: 176,
        money: 1200,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: 'マグの書'
        }
    },
    {
        name: 'ゴクウ',
        level: 7,
        attack: 26,
        defense: 10,
        magic: 5,
        speed: 14,
        hp: 124,
        trick: 'いだてん',
        magicAttack: 'ハリー',
        magicDefense: 'ドギューン',
        exp: 516,
        money: 2900,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: 'にょいぼう'
        }
    },
    {
        name: 'ハッカイ',
        level: 7,
        attack: 21,
        defense: 24,
        magic: 4,
        speed: 4,
        hp: 180,
        trick: 'ブチカマシ',
        exp: 516,
        money: 2900,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: 'アツアツおでん'
        }
    },
    {
        name: 'ゴジョー',
        level: 7,
        attack: 17,
        defense: 18,
        magic: 15,
        speed: 6,
        hp: 94,
        trick: '身構える',
        magicAttack: 'フリジ',
        magicDefense: 'ガチコン',
        exp: 516,
        money: 2900,
        isBoss: false,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: 'おんみょうの盾'
        }
    },
    {
        name: '惨憎法師',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '魔力ため',
        magicAttack: 'バーン',
        magicDefense: 'ドマホガドラ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'Asia'
        ],
        possession: {
            name: 'しゃくじょう'
        }
    }, {
        name: 'スナトカゲ',
        level: 7,
        attack: 23,
        defense: 26,
        magic: 2,
        speed: 4,
        hp: 160,
        trick: '毒',
        magicDefense: 'ガチコン',
        exp: 258,
        money: 900,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: 'トーレナ岩'
        }
    },
    {
        name: '砂漠の民',
        level: 7,
        attack: 20,
        defense: 16,
        magic: 9,
        speed: 12,
        hp: 112,
        trick: 'スリ',
        magicAttack: 'ハリー',
        magicDefense: 'ドギューン',
        exp: 344,
        money: 900,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: 'なし'
        }
    },
    {
        name: 'ボーンファイター',
        level: 7,
        attack: 35,
        defense: 8,
        magic: 6,
        speed: 10,
        hp: 85,
        trick: '騎士の魂',
        magicDefense: 'ガッツリ',
        exp: 258,
        money: 1000,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: 'ノロ～の書'
        }
    },
    {
        name: 'インプ',
        level: 7,
        attack: 5,
        defense: 4,
        magic: 20,
        speed: 12,
        hp: 131,
        trick: '魅了',
        magicAttack: 'クルパー',
        magicDefense: 'マホガド',
        exp: 344,
        money: 1100,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: 'ビクビクの書'
        }
    },
    {
        name: 'フランケンハンド',
        level: 8,
        attack: 26,
        defense: 11,
        magic: 6,
        speed: 11,
        hp: 170,
        trick: '力ため',
        magicAttack: 'エネゲット',
        exp: 363,
        money: 1400,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: 'モノキャッチャー'
        }
    },
    {
        name: 'コロボックル',
        level: 8,
        attack: 22,
        defense: 13,
        magic: 13,
        speed: 14,
        hp: 97,
        trick: 'ホゲ～♪',
        magicAttack: 'ボケラ',
        magicDefense: 'キュア',
        exp: 484,
        money: 1300,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: 'クマタンガード'
        }
    },
    {
        name: 'ゴブリン',
        level: 9,
        attack: 29,
        defense: 9,
        magic: 8,
        speed: 23,
        hp: 137,
        trick: 'とんずら',
        magicAttack: 'ノロ～',
        exp: 494,
        money: 1700,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: 'トーサン像'
        }
    },
    {
        name: 'さまよう魂',
        level: 9,
        attack: 9,
        defense: 16,
        magic: 19,
        speed: 16,
        hp: 156,
        trick: '魔力ため',
        magicAttack: 'フリジ',
        magicDefense: 'シャキット',
        exp: 988,
        money: 1400,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: '気のグローブ'
        }
    },
    {
        name: '十字軍兵',
        level: 10,
        attack: 44,
        defense: 26,
        magic: 2,
        speed: 10,
        hp: 184,
        trick: '力ため',
        magicDefense: 'マホガド',
        exp: 655,
        money: 1900,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: '４のクリスタル'
        }
    },
    {
        name: 'ダークウィング',
        level: 10,
        attack: 26,
        defense: 15,
        magic: 2,
        speed: 33,
        hp: 134,
        trick: '吸血',
        magicAttack: 'ハズシャーン',
        exp: 655,
        money: 1100,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: 'ジャンプ'
        }
    },
    {
        name: 'ビクビクゴースト',
        level: 11,
        attack: 7,
        defense: 16,
        magic: 39,
        speed: 8,
        hp: 184,
        trick: 'おどかし',
        magicAttack: 'フリジ',
        magicDefense: 'マホタブー',
        exp: 1701,
        money: 1500,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: 'ビクビクの書'
        }
    },
    {
        name: 'オオカミ男',
        level: 12,
        attack: 40,
        defense: 26,
        magic: 3,
        speed: 28,
        hp: 163,
        trick: '雄たけび',
        magicAttack: 'ノロ～',
        magicDefense: 'ガチコン',
        exp: 1082,
        money: 1900,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: '３バイン'
        }
    },
    {
        name: 'フランケン',
        level: 12,
        attack: 45,
        defense: 39,
        magic: 1,
        speed: 9,
        hp: 283,
        trick: 'ブチカマシ',
        exp: 1082,
        money: 1700,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: 'ペロペロハンマー'
        }
    },
    {
        name: 'ヴァンパイア',
        level: 12,
        attack: 45,
        defense: 7,
        magic: 32,
        speed: 3,
        hp: 182,
        trick: '吸血',
        magicAttack: 'エネゲット',
        magicDefense: 'リカバ',
        exp: 0,
        money: 3000,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: 'ツカエンゾの書'
        }
    },
    {
        name: '魔法の騎士',
        level: 14,
        attack: 27,
        defense: 29,
        magic: 30,
        speed: 18,
        hp: 210,
        trick: '魔力ため',
        magicAttack: 'エレク',
        magicDefense: 'ドマホガド',
        exp: 3350,
        money: 6600,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: '守のグローブ'
        }
    },
    {
        name: 'ソードナイト',
        level: 14,
        attack: 28,
        defense: 32,
        magic: 12,
        speed: 28,
        hp: 260,
        trick: '騎士の魂',
        magicAttack: 'ヨワッチ',
        magicDefense: 'マホガド',
        exp: 3350,
        money: 6600,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: '聖騎士のたて'
        }
    },
    {
        name: 'ブラックアーマー',
        level: 14,
        attack: 42,
        defense: 36,
        magic: 12,
        speed: 14,
        hp: 300,
        trick: '身構える',
        magicAttack: 'フニャリ',
        exp: 3350,
        money: 6600,
        isBoss: false,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: 'ナイトランス'
        }
    },
    {
        name: 'レッドブリキン',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '超必殺',
        magicAttack: 'エレクト',
        magicDefense: 'ガッツリ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'Europe'
        ],
        possession: {
            name: '雷めいのつるぎ'
        }
    }, {
        name: '雪ガラス',
        level: 14,
        attack: 39,
        defense: 10,
        magic: 3,
        speed: 59,
        hp: 149,
        trick: 'ひこう突き',
        exp: 1675,
        money: 2400,
        isBoss: false,
        fromAreas: [
            'Russia'
        ],
        possession: {
            name: '６のクリスタル'
        }
    },
    {
        name: 'シベリアオオカミ',
        level: 15,
        attack: 44,
        defense: 32,
        magic: 12,
        speed: 27,
        hp: 222,
        trick: '雄たけび',
        magicDefense: 'ガッツリ',
        exp: 2043,
        money: 2700,
        isBoss: false,
        fromAreas: [
            'Russia'
        ],
        possession: {
            name: '３バイン'
        }
    },
    {
        name: '石喰らい',
        level: 15,
        attack: 39,
        defense: 55,
        magic: 23,
        speed: 11,
        hp: 239,
        trick: '石化',
        magicDefense: 'フニャリ',
        exp: 2724,
        money: 3000,
        isBoss: false,
        fromAreas: [
            'Russia'
        ],
        possession: {
            name: 'トーサン像'
        }
    },
    {
        name: '雪だいふく',
        level: 15,
        attack: 39,
        defense: 46,
        magic: 19,
        speed: 25,
        hp: 177,
        trick: '力ため',
        magicAttack: 'フリジ',
        magicDefense: 'マホガド',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'Russia'
        ],
        possession: {
            name: 'トーサン像'
        }
    },
    {
        name: 'ラスプーチン',
        level: 16,
        attack: 19,
        defense: 27,
        magic: 54,
        speed: 18,
        hp: 198,
        trick: '魔力ため',
        magicAttack: 'バーン',
        magicDefense: 'マホタブー',
        exp: 4930,
        money: 4400,
        isBoss: false,
        fromAreas: [
            'Russia'
        ],
        possession: {
            name: 'エンジェルロッド'
        }
    },
    {
        name: 'スノーマン',
        level: 16,
        attack: 45,
        defense: 41,
        magic: 15,
        speed: 26,
        hp: 226,
        magicAttack: 'フリーズ',
        magicDefense: 'ドマホガド',
        exp: 3287,
        money: 2500,
        isBoss: false,
        fromAreas: [
            'Russia'
        ],
        possession: {
            name: '体のグローブ'
        }
    },
    {
        name: '氷玉',
        level: 17,
        attack: 20,
        defense: 28,
        magic: 36,
        speed: 33,
        hp: 223,
        trick: '身構える',
        magicAttack: 'フリーズ',
        magicDefense: 'シャキット',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'Russia'
        ],
        possession: {
            name: 'フリーズ'
        }
    },
    {
        name: 'クールデビル',
        level: 17,
        attack: 19,
        defense: 16,
        magic: 41,
        speed: 39,
        hp: 200,
        trick: '魔引き',
        magicAttack: 'クルパー',
        magicDefense: 'キリガッツ',
        exp: 3926,
        money: 2500,
        isBoss: false,
        fromAreas: [
            'Russia'
        ],
        possession: {
            name: 'コチリコの書'
        }
    },
    {
        name: 'フリーズガスト',
        level: 17,
        attack: 19,
        defense: 19,
        magic: 54,
        speed: 19,
        hp: 292,
        magicAttack: 'フリジ',
        magicDefense: 'キリガッツ',
        exp: 3926,
        money: 3200,
        isBoss: false,
        fromAreas: [
            'Russia'
        ],
        possession: {
            name: '速のグローブ'
        }
    },
    {
        name: 'マンモス',
        level: 17,
        attack: 41,
        defense: 45,
        magic: 18,
        speed: 16,
        hp: 391,
        trick: 'ブチカマシ',
        exp: 2944,
        money: 2500,
        isBoss: false,
        fromAreas: [
            'Russia'
        ],
        possession: {
            name: 'パワーキノコ'
        }
    },
    {
        name: 'アイスゴーレム',
        level: 18,
        attack: 50,
        defense: 94,
        magic: 4,
        speed: 6,
        hp: 306,
        trick: '身構える',
        magicAttack: 'ボケラ',
        exp: 3486,
        money: 3600,
        isBoss: false,
        fromAreas: [
            'Russia'
        ],
        possession: {
            name: 'スパイクガード'
        }
    },
    {
        name: '大王イカ',
        level: 18,
        attack: 75,
        defense: 38,
        magic: 9,
        speed: 7,
        hp: 391,
        trick: '怒りの炎',
        exp: 3486,
        money: 2700,
        isBoss: false,
        fromAreas: [
            'Russia'
        ],
        possession: {
            name: 'モノキャッチャー'
        }
    },
    {
        name: '雪原人キッズ',
        level: 20,
        attack: 29,
        defense: 39,
        magic: 34,
        speed: 30,
        hp: 380,
        trick: 'ホゲ～♪',
        magicAttack: 'フリジ',
        magicDefense: 'ドマホガド',
        exp: 9544,
        money: 6000,
        isBoss: false,
        fromAreas: [
            'Russia'
        ],
        possession: {
            name: 'タンバリン'
        }
    },
    {
        name: '雪原人',
        level: 20,
        attack: 52,
        defense: 40,
        magic: 8,
        speed: 26,
        hp: 553,
        trick: '凶器攻撃',
        magicAttack: 'ボケラ',
        exp: 9544,
        money: 6900,
        isBoss: false,
        fromAreas: [
            'Russia'
        ],
        possession: {
            name: 'お楽しみのタネ'
        }
    },
    {
        name: '雪原人ミチエーリ',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '力ため',
        magicAttack: 'フリーザー',
        magicDefense: 'ドマホガド',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'Russia'
        ],
        possession: {
            name: 'バール力'
        }
    }, {
        name: 'ワンダーゴースト',
        level: 21,
        attack: 18,
        defense: 32,
        magic: 70,
        speed: 19,
        hp: 320,
        trick: 'おどかし',
        magicAttack: 'ハリーク',
        magicDefense: 'シャキット',
        exp: 11052,
        money: 3900,
        isBoss: false,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: 'ムラデロンの書'
        }
    },
    {
        name: 'ワタリコウモリ',
        level: 21,
        attack: 72,
        defense: 40,
        magic: 8,
        speed: 48,
        hp: 285,
        trick: '毒',
        magicAttack: 'ウラミム',
        exp: 5526,
        money: 3900,
        isBoss: false,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: 'カエロッカナ'
        }
    },
    {
        name: 'ゾンビの手',
        level: 21,
        attack: 91,
        defense: 45,
        magic: 16,
        speed: 13,
        hp: 429,
        trick: 'スリ',
        exp: 5526,
        money: 4100,
        isBoss: false,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: 'なし'
        }
    },
    {
        name: 'マジックマッシュ',
        level: 22,
        attack: 85,
        defense: 26,
        magic: 42,
        speed: 20,
        hp: 316,
        trick: 'ガス抜き',
        magicAttack: 'エネゲット',
        magicDefense: 'ガチコン',
        exp: 8479,
        money: 3600,
        isBoss: false,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: '気のグローブ'
        }
    },
    {
        name: 'コヨーテ',
        level: 22,
        attack: 96,
        defense: 45,
        magic: 8,
        speed: 31,
        hp: 349,
        trick: 'いだてん',
        magicAttack: 'DFマホケス',
        magicDefense: 'キュア',
        exp: 6359,
        money: 3900,
        isBoss: false,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: 'ミセジャンプ'
        }
    },
    {
        name: 'グリズリー',
        level: 22,
        attack: 129,
        defense: 37,
        magic: 4,
        speed: 18,
        hp: 368,
        trick: '力ため',
        magicDefense: 'ドマホガド',
        exp: 6359,
        money: 4400,
        isBoss: false,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: '５のクリスタル'
        }
    },
    {
        name: 'ビッグフット',
        level: 23,
        attack: 71,
        defense: 69,
        magic: 23,
        speed: 19,
        hp: 426,
        trick: 'とんずら',
        magicDefense: 'マホガド',
        exp: 7277,
        money: 4600,
        isBoss: false,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: 'ラッキーベル'
        }
    },
    {
        name: 'プレーリーズ',
        level: 23,
        attack: 110,
        defense: 24,
        magic: 4,
        speed: 29,
        hp: 496,
        trick: '雄たけび',
        magicAttack: 'ATマホケス',
        magicDefense: 'リキュア',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: '力のグローブ'
        }
    },
    {
        name: 'ゴーゴンレプテル',
        level: 24,
        attack: 82,
        defense: 88,
        magic: 7,
        speed: 25,
        hp: 429,
        trick: '石化',
        magicAttack: 'ヨワッチ',
        magicDefense: 'リカバ',
        exp: 8284,
        money: 4900,
        isBoss: false,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: 'トーサン像'
        }
    },
    {
        name: 'ゾンビ',
        level: 24,
        attack: 81,
        defense: 49,
        magic: 18,
        speed: 13,
        hp: 648,
        trick: 'ウィルス',
        magicAttack: 'エネゲット',
        exp: 11046,
        money: 4900,
        isBoss: false,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: 'パワーキノコ'
        }
    },
    {
        name: 'ヘルシャーマン',
        level: 25,
        attack: 21,
        defense: 45,
        magic: 82,
        speed: 31,
        hp: 256,
        trick: '精霊の加護',
        magicAttack: 'バーニー',
        magicDefense: 'ドマホガドラ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: 'マグファの書'
        }
    },
    {
        name: 'チーフイーグル',
        level: 25,
        attack: 62,
        defense: 46,
        magic: 13,
        speed: 61,
        hp: 411,
        trick: '命狙い',
        magicDefense: 'ドギューン',
        exp: 9385,
        money: 4100,
        isBoss: false,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: '３バイン'
        }
    },
    {
        name: 'ブラッドジェル',
        level: 26,
        attack: 66,
        defense: 63,
        magic: 26,
        speed: 34,
        hp: 534,
        trick: '吸血',
        magicAttack: 'ノロ～',
        exp: 14114,
        money: 3600,
        isBoss: false,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: '回復ざいSP'
        }
    },
    {
        name: 'マグマクラウド',
        level: 26,
        attack: 122,
        defense: 11,
        magic: 54,
        speed: 28,
        hp: 271,
        trick: '道連れ',
        magicAttack: 'バーニー',
        magicDefense: 'キリガッツ',
        exp: 14114,
        money: 5400,
        isBoss: false,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: 'バーニー'
        }
    },
    {
        name: 'さまようムクロ',
        level: 26,
        attack: 153,
        defense: 26,
        magic: 38,
        speed: 21,
        hp: 246,
        trick: '超必殺',
        magicAttack: 'ドクラマグラ',
        magicDefense: 'ドキュア',
        exp: 10585,
        money: 5200,
        isBoss: false,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: 'ドクロの盾'
        }
    },
    {
        name: '神の目',
        level: 27,
        attack: 23,
        defense: 62,
        magic: 60,
        speed: 46,
        hp: 400,
        trick: '魅了',
        magicAttack: 'エレクト',
        magicDefense: 'シャキット',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: '雷のうでわ'
        }
    },
    {
        name: 'ケルベロス',
        level: 27,
        attack: 118,
        defense: 32,
        magic: 7,
        speed: 45,
        hp: 515,
        trick: '雄たけび',
        magicAttack: 'エネゲット',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: 'マグファの書'
        }
    },
    {
        name: 'ウッディアン',
        level: 28,
        attack: 83,
        defense: 58,
        magic: 53,
        speed: 16,
        hp: 500,
        trick: '装備狙い',
        magicAttack: 'ハリーク',
        magicDefense: 'キリガッツ',
        exp: 26601,
        money: 11600,
        isBoss: false,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: '炎のうでわ'
        }
    },
    {
        name: 'トーテマン',
        level: 28,
        attack: 95,
        defense: 49,
        magic: 4,
        speed: 35,
        hp: 795,
        trick: '斬鉄剣',
        magicAttack: 'クルパー',
        magicDefense: 'ドリカバラ',
        exp: 26601,
        money: 14500,
        isBoss: false,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: 'ハヤブサの槍'
        }
    },
    {
        name: '族長タタンカ',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '凶器攻撃',
        magicAttack: 'ウラミム',
        magicDefense: 'キリガッツ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'NorthAmerica'
        ],
        possession: {
            name: 'バトルホーク'
        }
    }, {
        name: 'ヤドクガエル',
        level: 28,
        attack: 75,
        defense: 73,
        magic: 35,
        speed: 42,
        hp: 355,
        trick: 'ウィルス',
        magicAttack: 'ドクラマグラ',
        exp: 17734,
        money: 6400,
        isBoss: false,
        fromAreas: [
            'SouthAmerica'
        ],
        possession: {
            name: 'ドクラマグラの書'
        }
    },
    {
        name: 'キラーフラワー',
        level: 28,
        attack: 111,
        defense: 70,
        magic: 10,
        speed: 37,
        hp: 479,
        trick: '毒',
        magicAttack: 'エネゲット',
        magicDefense: 'リキュア',
        exp: 17734,
        money: 7000,
        isBoss: false,
        fromAreas: [
            'SouthAmerica'
        ],
        possession: {
            name: 'ネムネムの書'
        }
    },
    {
        name: '森の精',
        level: 29,
        attack: 83,
        defense: 45,
        magic: 49,
        speed: 48,
        hp: 378,
        trick: 'ホゲ～♪',
        magicAttack: 'ノロ～',
        magicDefense: 'ドリカバラ',
        exp: 19767,
        money: 7000,
        isBoss: false,
        fromAreas: [
            'SouthAmerica'
        ],
        possession: {
            name: 'ばんのう薬'
        }
    },
    {
        name: 'クビカリ族',
        level: 30,
        attack: 148,
        defense: 52,
        magic: 22,
        speed: 38,
        hp: 363,
        trick: '命狙い',
        magicAttack: 'ウラミム',
        magicDefense: 'キリガッツ',
        exp: 16409,
        money: 8100,
        isBoss: false,
        fromAreas: [
            'SouthAmerica'
        ],
        possession: {
            name: 'メッセヨの書'
        }
    },
    {
        name: 'ウォーリザード',
        level: 30,
        attack: 110,
        defense: 121,
        magic: 10,
        speed: 18,
        hp: 480,
        trick: '超必殺',
        magicAttack: 'ハズシャーン',
        exp: 16469,
        money: 7300,
        isBoss: false,
        fromAreas: [
            'SouthAmerica'
        ],
        possession: {
            name: 'ダウンの書'
        }
    },
    {
        name: 'フックの魂',
        level: 31,
        attack: 181,
        defense: 34,
        magic: 43,
        speed: 21,
        hp: 334,
        trick: 'とんずら',
        magicAttack: 'ドクラマグラ',
        magicDefense: 'ガッツリ',
        exp: 18236,
        money: 6700,
        isBoss: false,
        fromAreas: [
            'SouthAmerica'
        ],
        possession: {
            name: 'シニガーミの書'
        }
    },
    {
        name: 'ポイズンスモッグ',
        level: 31,
        attack: 25,
        defense: 21,
        magic: 66,
        speed: 78,
        hp: 540,
        trick: 'ウィルス',
        magicAttack: 'ラストルズ',
        magicDefense: 'ドキュア',
        exp: 24315,
        money: 8000,
        isBoss: false,
        fromAreas: [
            'SouthAmerica'
        ],
        possession: {
            name: 'ブリオンの書'
        }
    },
    {
        name: 'ヨロイエビ',
        level: 32,
        attack: 99,
        defense: 145,
        magic: 16,
        speed: 21,
        hp: 452,
        trick: '身構える',
        magicDefense: 'ガチコン',
        exp: 20131,
        money: 7000,
        isBoss: false,
        fromAreas: [
            'SouthAmerica'
        ],
        possession: {
            name: '鉄のグローブ'
        }
    },
    {
        name: 'ケツアルコアトル',
        level: 33,
        attack: 95,
        defense: 47,
        magic: 50,
        speed: 63,
        hp: 422,
        trick: '斬鉄剣',
        magicAttack: 'バーニング',
        magicDefense: 'ドギューン',
        exp: 22160,
        money: 9300,
        isBoss: false,
        fromAreas: [
            'SouthAmerica'
        ],
        possession: {
            name: '黄金の盾'
        }
    },
    {
        name: 'テンタクルズ',
        level: 33,
        attack: 109,
        defense: 76,
        magic: 21,
        speed: 12,
        hp: 972,
        trick: 'ガス抜き',
        magicDefense: 'ドリカバ',
        exp: 22160,
        money: 7600,
        isBoss: false,
        fromAreas: [
            'SouthAmerica'
        ],
        possession: {
            name: 'ゼニキャッチャー'
        }
    },
    {
        name: 'ククルカン',
        level: 34,
        attack: 40,
        defense: 68,
        magic: 100,
        speed: 40,
        hp: 414,
        trick: 'こりほぐし',
        magicAttack: 'ハリーク',
        magicDefense: 'マホタブー',
        exp: 48657,
        money: 10200,
        isBoss: false,
        fromAreas: [
            'SouthAmerica'
        ],
        possession: {
            name: 'ヒュギューオの書'
        }
    },
    {
        name: 'テスカポリトカ',
        level: 34,
        attack: 137,
        defense: 31,
        magic: 69,
        speed: 25,
        hp: 481,
        trick: '石化',
        magicAttack: 'エレクトラ',
        magicDefense: 'キリガッツ',
        exp: 32438,
        money: 8300,
        isBoss: false,
        fromAreas: [
            'SouthAmerica'
        ],
        possession: {
            name: '黄金の杖'
        }
    },
    {
        name: 'レプリカ石像',
        level: 35,
        attack: 84,
        defense: 127,
        magic: 37,
        speed: 28,
        hp: 611,
        trick: 'ものまね',
        magicAttack: 'ATマホケス',
        magicDefense: 'ドマホガドラ',
        exp: 53280,
        money: 15100,
        isBoss: false,
        fromAreas: [
            'SouthAmerica'
        ],
        possession: {
            name: 'コブタの貯金箱'
        }
    },
    {
        name: 'イマーヘン',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '禁呪',
        magicAttack: 'ラストルズ',
        magicDefense: 'ドマホガド',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'SouthAmerica'
        ],
        possession: {
            name: '太陽の盾'
        }
    }, {
        name: 'ウォッチャー',
        level: 35,
        attack: 43,
        defense: 64,
        magic: 92,
        speed: 47,
        hp: 495,
        trick: '石化',
        magicAttack: 'エレクト',
        magicDefense: 'リキュア',
        exp: 53280,
        money: 10000,
        isBoss: false,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: 'ネンドーリキの書'
        }
    },
    {
        name: 'コビトペンギン',
        level: 35,
        attack: 87,
        defense: 38,
        magic: 90,
        speed: 23,
        hp: 613,
        trick: '注射',
        magicAttack: 'ネムネム',
        magicDefense: 'ミナアップ',
        exp: 35520,
        money: 10800,
        isBoss: false,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: 'ポヨヨンシールド'
        }
    },
    {
        name: '黒い妖精',
        level: 35,
        attack: 36,
        defense: 25,
        magic: 85,
        speed: 69,
        hp: 580,
        trick: '禁呪',
        magicAttack: 'バーニー',
        magicDefense: 'キリガッツ',
        exp: 35520,
        money: 10900,
        isBoss: false,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: 'マグファの書'
        }
    },
    {
        name: 'ベロリンガ',
        level: 35,
        attack: 132,
        defense: 89,
        magic: 45,
        speed: 14,
        hp: 581,
        trick: '装備狙い',
        magicAttack: 'ATマホケス',
        magicDefense: 'ドリカバラ',
        exp: 35520,
        money: 10000,
        isBoss: false,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: 'お楽しみのタネ'
        }
    },
    {
        name: 'ディンゴ',
        level: 35,
        attack: 150,
        defense: 75,
        magic: 15,
        speed: 50,
        hp: 528,
        trick: '暗殺',
        magicAttack: 'ハズシャーン',
        exp: 26640,
        money: 10800,
        isBoss: false,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: '５のクリスタル'
        }
    },
    {
        name: 'ヤウイ',
        level: 36,
        attack: 105,
        defense: 34,
        magic: 35,
        speed: 94,
        hp: 470,
        trick: 'データコピー',
        magicAttack: 'DFマホケス',
        magicDefense: 'マホガド',
        exp: 29101,
        money: 10900,
        isBoss: false,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: 'ムラデロンの書'
        }
    },
    {
        name: 'モウセンゴケ',
        level: 36,
        attack: 136,
        defense: 85,
        magic: 13,
        speed: 58,
        hp: 579,
        trick: '注射',
        magicAttack: 'クルパー',
        magicDefense: 'ドリカバ',
        exp: 38802,
        money: 9100,
        isBoss: false,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: 'ワナ'
        }
    },
    {
        name: 'マタンゴ',
        level: 36,
        attack: 140,
        defense: 42,
        magic: 57,
        speed: 34,
        hp: 622,
        trick: 'ウィルス',
        magicAttack: 'ウラミム',
        magicDefense: 'ドキュア',
        exp: 38802,
        money: 10000,
        isBoss: false,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: 'ばんのう薬'
        }
    },
    {
        name: 'ノラゴブリン',
        level: 37,
        attack: 138,
        defense: 92,
        magic: 29,
        speed: 22,
        hp: 763,
        trick: 'おどかし',
        magicAttack: 'ドクラマグラ',
        magicDefense: 'ドマホガド',
        exp: 42289,
        money: 9600,
        isBoss: false,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: '４バイン'
        }
    },
    {
        name: 'サンドスイマー',
        level: 38,
        attack: 103,
        defense: 101,
        magic: 42,
        speed: 53,
        hp: 578,
        trick: '斬鉄剣',
        magicAttack: 'バーニング',
        exp: 45990,
        money: 10200,
        isBoss: false,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: 'ミエるんです'
        }
    },
    {
        name: 'ドロウアーム',
        level: 39,
        attack: 151,
        defense: 113,
        magic: 28,
        speed: 12,
        hp: 798,
        trick: 'こりほぐし',
        magicAttack: 'エネゲット',
        magicDefense: 'リバイブ',
        exp: 37434,
        money: 11200,
        isBoss: false,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: '復活ざい'
        }
    },
    {
        name: 'ケープクロウ',
        level: 40,
        attack: 114,
        defense: 36,
        magic: 13,
        speed: 138,
        hp: 482,
        trick: 'ひこう突き',
        magicAttack: 'ゴウトゥヘル',
        exp: 40545,
        money: 11200,
        isBoss: false,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: 'ソトジャンプ'
        }
    },
    {
        name: 'アースドラゴン',
        level: 40,
        attack: 172,
        defense: 74,
        magic: 21,
        speed: 26,
        hp: 919,
        trick: '雄たけび',
        magicAttack: 'ヨワッチ',
        magicDefense: 'ガチコン',
        exp: 40545,
        money: 17300,
        isBoss: false,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: 'グラズシーンの書'
        }
    },
    {
        name: 'オセアニアデビル',
        level: 41,
        attack: 128,
        defense: 51,
        magic: 12,
        speed: 82,
        hp: 915,
        trick: 'ヒートUP',
        magicAttack: 'ウラミム',
        magicDefense: 'ドマホガドラ',
        exp: 87667,
        money: 21500,
        isBoss: false,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: '神速のリング'
        }
    },
    {
        name: 'フリルドリザード',
        level: 42,
        attack: 90,
        defense: 46,
        magic: 63,
        speed: 88,
        hp: 693,
        trick: 'いだてん',
        magicAttack: 'フリーザー',
        magicDefense: 'ドギューン',
        exp: 94607,
        money: 19900,
        isBoss: false,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: 'スネークロッド'
        }
    },
    {
        name: 'ウンフーク',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: 'べらんめぇ！',
        magicAttack: 'ネムネム',
        magicDefense: 'バインド',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'Oceania'
        ],
        possession: {
            name: 'コアラのぼう'
        }
    }, {
        name: 'サビトマトガエル',
        level: 42,
        attack: 127,
        defense: 117,
        magic: 50,
        speed: 59,
        hp: 509,
        trick: '装備狙い',
        magicAttack: 'ラストルズ',
        exp: 63071,
        money: 13200,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'ラストルズ'
        }
    },
    {
        name: '死の呼び子',
        level: 43,
        attack: 63,
        defense: 52,
        magic: 141,
        speed: 46,
        hp: 528,
        trick: 'ホゲ～♪',
        magicAttack: 'エレクトラ',
        magicDefense: 'マホタブー',
        exp: 101920,
        money: 15500,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'よみのカマ'
        }
    },
    {
        name: '呪われし者',
        level: 43,
        attack: 248,
        defense: 46,
        magic: 57,
        speed: 29,
        hp: 484,
        trick: '斬鉄剣',
        magicAttack: 'ウラミム',
        magicDefense: 'バインド',
        exp: 50960,
        money: 16400,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: '4バイン'
        }
    },
    {
        name: 'マサイウォーリア',
        level: 44,
        attack: 170,
        defense: 59,
        magic: 24,
        speed: 108,
        hp: 432,
        trick: '怒りの炎',
        magicDefense: 'キリガッツ',
        exp: 54809,
        money: 14440,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'マモるんです'
        }
    },
    {
        name: 'みつりょう者',
        level: 44,
        attack: 145,
        defense: 90,
        magic: 52,
        speed: 54,
        hp: 670,
        trick: 'スリ',
        magicAttack: 'ゼニゲット',
        magicDefense: 'ドリカバ',
        exp: 73079,
        money: 15400,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'ゼニキャッチャー'
        }
    },
    {
        name: 'ウツボカズラ',
        level: 44,
        attack: 161,
        defense: 101,
        magic: 15,
        speed: 69,
        hp: 737,
        trick: 'ひこう突き',
        magicAttack: 'エネゲット',
        magicDefense: 'ドマホガドラ',
        exp: 73079,
        money: 13000,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'あま～い汁'
        }
    },
    {
        name: 'レイラケルタ',
        level: 44,
        attack: 137,
        defense: 141,
        magic: 26,
        speed: 46,
        hp: 789,
        trick: 'おどかし',
        magicAttack: 'バーニング',
        magicDefense: 'ガッツリ',
        exp: 54809,
        money: 13600,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'バイバイン'
        }
    },
    {
        name: 'ビーストキング',
        level: 45,
        attack: 178,
        defense: 51,
        magic: 13,
        speed: 11,
        hp: 619,
        trick: '雄たけび',
        magicAttack: 'ヨワッチ',
        magicDefense: 'リバイブ',
        exp: 58857,
        money: 14100,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'マグファイアの書'
        }
    },
    {
        name: 'グレートアニマル',
        level: 45,
        attack: 152,
        defense: 110,
        magic: 24,
        speed: 27,
        hp: 1170,
        trick: 'ブチカマシ',
        magicAttack: 'ノロ～',
        magicDefense: 'ドリカバラ',
        exp: 58857,
        money: 14100,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'グラズシーンの書'
        }
    },
    {
        name: 'マサイハンター',
        level: 45,
        attack: 159,
        defense: 73,
        magic: 30,
        speed: 106,
        hp: 506,
        trick: '命狙い',
        magicAttack: 'ウラミム',
        magicDefense: 'ガッツリ',
        exp: 58857,
        money: 15900,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'ウラミム'
        }
    },
    {
        name: 'ネクロマンサー',
        level: 45,
        attack: 51,
        defense: 86,
        magic: 122,
        speed: 37,
        hp: 795,
        trick: '復活の光',
        magicAttack: 'ゴウトゥヘル',
        magicDefense: 'リバイブ',
        exp: 117715,
        money: 19800,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'リバイブ'
        }
    },
    {
        name: 'アサシン',
        level: 46,
        attack: 165,
        defense: 73,
        magic: 30,
        speed: 107,
        hp: 528,
        trick: '暗殺',
        magicAttack: 'ドクラマグラ',
        magicDefense: 'リキュア',
        exp: 63109,
        money: 15500,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: '忍のグローブ'
        }
    },
    {
        name: 'グランバザーミ',
        level: 46,
        attack: 152,
        defense: 238,
        magic: 16,
        speed: 14,
        hp: 664,
        trick: '凶器攻撃',
        magicDefense: 'ドマホガドラ',
        exp: 63109,
        money: 15000,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'ヒーリングベル'
        }
    },
    {
        name: '海竜',
        level: 44,
        attack: 201,
        defense: 79,
        magic: 23,
        speed: 28,
        hp: 1094,
        trick: '怒りの炎',
        magicAttack: 'フリーザー',
        magicDefense: 'シャキット',
        exp: 63109,
        money: 21800,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'ドラゴンシールド'
        }
    },
    {
        name: 'ニセ宝箱',
        level: 47,
        attack: 118,
        defense: 11,
        magic: 43,
        speed: 107,
        hp: 497,
        trick: '道連れ',
        magicAttack: 'ゼニゲット',
        magicDefense: 'ガチコン',
        exp: 67570,
        money: 29000,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: '水晶のネックレス'
        }
    },
    {
        name: 'シビトコウモリ',
        level: 48,
        attack: 132,
        defense: 75,
        magic: 10,
        speed: 154,
        hp: 597,
        trick: '吸血',
        magicAttack: 'ゴウトゥヘル',
        exp: 72247,
        money: 16000,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'バキュムーンの書'
        }
    },
    {
        name: '墓荒らし',
        level: 48,
        attack: 162,
        defense: 100,
        magic: 55,
        speed: 60,
        hp: 724,
        trick: 'とんずら',
        magicAttack: 'ゼニゲット',
        magicDefense: 'ガッツリ',
        exp: 96329,
        money: 16900,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'ゼニキャッチャー'
        }
    },
    {
        name: 'ミイラ',
        level: 48,
        attack: 182,
        defense: 120,
        magic: 60,
        speed: 22,
        hp: 785,
        trick: 'ガス抜き',
        magicAttack: 'エネゲット',
        magicDefense: 'ドマホガドラ',
        exp: 96329,
        money: 16500,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'ソトジャンプ'
        }
    },
    {
        name: 'ファラオの兵',
        level: 49,
        attack: 148,
        defense: 123,
        magic: 61,
        speed: 51,
        hp: 794,
        trick: '魔引き',
        magicAttack: 'ネムネム',
        magicDefense: 'マホタブー',
        exp: 102859,
        money: 19300,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'メカニカルガード'
        }
    },
    {
        name: 'スフィンクス',
        level: 49,
        attack: 202,
        defense: 60,
        magic: 102,
        speed: 33,
        hp: 621,
        trick: '魔力ため',
        magicAttack: 'バーニング',
        magicDefense: 'シャキット',
        exp: 102859,
        money: 20800,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'ばんのう薬'
        }
    },
    {
        name: '土の精',
        level: 51,
        attack: 166,
        defense: 288,
        magic: 12,
        speed: 9,
        hp: 705,
        trick: '怒りの炎',
        magicDefense: 'ガチコン',
        exp: 175252,
        money: 25000,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: '命のグローブ'
        }
    },
    {
        name: 'ホルス神',
        level: 51,
        attack: 103,
        defense: 31,
        magic: 99,
        speed: 101,
        hp: 883,
        trick: '命狙い',
        magicAttack: 'フリーザー',
        magicDefense: 'ドギューン',
        exp: 175252,
        money: 30000,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'おしおき棒'
        }
    },
    {
        name: 'ゴーストレオ',
        level: 51,
        attack: 158,
        defense: 62,
        magic: 15,
        speed: 134,
        hp: 860,
        trick: '禁呪',
        magicAttack: 'ネムネム',
        magicDefense: 'マホタブー',
        exp: 175252,
        money: 14100,
        isBoss: false,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: '法のグローブ'
        }
    },
    {
        name: 'マコンデの分身',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '復活の光',
        magicAttack: 'バーニング',
        magicDefense: 'リバイブ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'ムラデロンの書'
        }
    },
    {
        name: 'マコンデ',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: 'しもべ召喚',
        magicAttack: 'ゴウトゥヘル',
        magicDefense: 'リバイブ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'Africa'
        ],
        possession: {
            name: 'めいふの杖'
        }
    }, {
        name: '船ユウレイ',
        level: 51,
        attack: 67,
        defense: 113,
        magic: 98,
        speed: 75,
        hp: 857,
        trick: 'おどかし',
        magicAttack: 'ゴウトゥヘル',
        magicDefense: 'ミナアップ',
        exp: 175252,
        money: 19100,
        isBoss: false,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: 'シニガーミの書'
        }
    },
    {
        name: '闇の落とし子',
        level: 51,
        attack: 60,
        defense: 42,
        magic: 80,
        speed: 124,
        hp: 1002,
        trick: '注射',
        magicAttack: 'ハリケーン',
        magicDefense: 'キリガッツ',
        exp: 116834,
        money: 20600,
        isBoss: false,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: 'ヒュギューオの書'
        }
    },
    {
        name: '氷の刃',
        level: 51,
        attack: 172,
        defense: 257,
        magic: 18,
        speed: 16,
        hp: 715,
        trick: 'ひこう突き',
        magicAttack: 'フリーズ',
        magicDefense: 'ガチコン',
        exp: 87626,
        money: 19600,
        isBoss: false,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: '５バイン'
        }
    },
    {
        name: 'オオアザラシ',
        level: 51,
        attack: 168,
        defense: 134,
        magic: 23,
        speed: 19,
        hp: 1463,
        trick: 'こりほぐし',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: '復活ざい'
        }
    },
    {
        name: 'キラーポーラズ',
        level: 51,
        attack: 293,
        defense: 86,
        magic: 8,
        speed: 49,
        hp: 763,
        trick: '暗殺',
        magicAttack: 'ゼニゲット',
        exp: 87626,
        money: 20200,
        isBoss: false,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: 'ソトジャンプ'
        }
    },
    {
        name: 'ブリザード',
        level: 52,
        attack: 90,
        defense: 64,
        magic: 118,
        speed: 85,
        hp: 776,
        trick: '超必殺',
        magicAttack: 'フリーザー',
        magicDefense: 'リバイブ',
        exp: 124295,
        money: 20700,
        isBoss: false,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: 'ヘイカモンの書'
        }
    },
    {
        name: 'オーロラの民',
        level: 52,
        attack: 165,
        defense: 86,
        magic: 85,
        speed: 66,
        hp: 716,
        trick: '禁呪',
        magicAttack: 'ハズシャーン',
        magicDefense: 'マホタブー',
        exp: 124295,
        money: 23100,
        isBoss: false,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: 'コチコッチンの書'
        }
    },
    {
        name: '氷山マンモス',
        level: 52,
        attack: 173,
        defense: 116,
        magic: 37,
        speed: 28,
        hp: 1335,
        trick: '凶器攻撃',
        magicAttack: 'ノロ～',
        exp: 93221,
        money: 21300,
        isBoss: false,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: 'カメレオストーン'
        }
    },
    {
        name: 'チタノザウロス',
        level: 52,
        attack: 234,
        defense: 92,
        magic: 27,
        speed: 33,
        hp: 1215,
        trick: 'ウィルス',
        magicAttack: 'バーニング',
        magicDefense: 'ドリカバラ',
        exp: 93221,
        money: 31800,
        isBoss: false,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: '破壊のリング'
        }
    },
    {
        name: 'シロクマラ',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '凶器攻撃',
        magicAttack: 'エネゲット',
        magicDefense: 'ドリキュアラ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: '氷河の盾'
        }
    },
    {
        name: 'アイストード',
        level: 53,
        attack: 140,
        defense: 128,
        magic: 69,
        speed: 82,
        hp: 701,
        trick: 'いだてん',
        magicAttack: 'フリーズ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: 'トレーナ岩'
        }
    },
    {
        name: 'ピラニアペンギン',
        level: 53,
        attack: 256,
        defense: 73,
        magic: 22,
        speed: 56,
        hp: 1078,
        trick: '吸血',
        magicAttack: 'ATマホケス',
        magicDefense: 'ドギューン',
        exp: 99060,
        money: 19600,
        isBoss: false,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: 'きせきのハリガネ'
        }
    },
    {
        name: 'ビックエンペラー',
        level: 53,
        attack: 126,
        defense: 75,
        magic: 126,
        speed: 26,
        hp: 1058,
        trick: '復活の呪文',
        magicAttack: 'ドクラマグラ',
        magicDefense: 'マホタブー',
        exp: 132081,
        money: 22400,
        isBoss: false,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: '魔法の薬'
        }
    },
    {
        name: 'ハーミット',
        level: 53,
        attack: 86,
        defense: 84,
        magic: 133,
        speed: 68,
        hp: 774,
        trick: '復活の光',
        magicAttack: 'エレクトラ',
        magicDefense: 'シャキット',
        exp: 198121,
        money: 26600,
        isBoss: false,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: 'ポカドンの書'
        }
    },
    {
        name: 'ビホルダー',
        level: 53,
        attack: 102,
        defense: 98,
        magic: 124,
        speed: 72,
        hp: 728,
        trick: '魔引き',
        magicAttack: 'ラストルズ',
        magicDefense: 'マホタブー',
        exp: 198121,
        money: 23100,
        isBoss: false,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: 'ショバチェンの書'
        }
    },
    {
        name: 'ゴールドギドラ',
        level: 54,
        attack: 234,
        defense: 92,
        magic: 30,
        speed: 36,
        hp: 1273,
        trick: 'ホゲ～♪',
        magicAttack: 'エレクトラ',
        magicDefense: 'ドリカバラ',
        exp: 105150,
        money: 31800,
        isBoss: false,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: '魔人リング'
        }
    },
    {
        name: 'ペギゴン',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '超必殺',
        magicAttack: 'ネムネム',
        magicDefense: 'ドリキュアラ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'Arctic',
            'Antarctica'
        ],
        possession: {
            name: '吹雪の杖'
        }
    }, {
        name: 'サンダーボール',
        level: 54,
        attack: 70,
        defense: 93,
        magic: 140,
        speed: 74,
        hp: 754,
        trick: '魔引き',
        magicAttack: 'エレクトラ',
        magicDefense: 'シャキット',
        exp: 210300,
        money: 23400,
        isBoss: false,
        fromAreas: [
            'HawaiianIslands'
        ],
        possession: {
            name: 'ゴロサンダーの書'
        }
    },
    {
        name: 'クラーケン',
        level: 54,
        attack: 165,
        defense: 133,
        magic: 39,
        speed: 10,
        hp: 1598,
        trick: 'ブチカマシ',
        magicAttack: 'ハズシャーン',
        magicDefense: 'ドリカバラ',
        exp: 105150,
        money: 24900,
        isBoss: false,
        fromAreas: [
            'HawaiianIslands'
        ],
        possession: {
            name: 'ケイタイ'
        }
    },
    {
        name: 'ムーの使い',
        level: 55,
        attack: 214,
        defense: 48,
        magic: 121,
        speed: 38,
        hp: 803,
        trick: '命狙い',
        magicAttack: 'ラストルズ',
        magicDefense: 'バインド',
        exp: 148660,
        money: 26500,
        isBoss: false,
        fromAreas: [
            'HawaiianIslands'
        ],
        possession: {
            name: 'ネムネムの書'
        }
    },
    {
        name: 'パンドラの箱',
        level: 55,
        attack: 93,
        defense: 99,
        magic: 64,
        speed: 146,
        hp: 679,
        trick: '道連れ',
        magicAttack: 'ゴウトゥヘル',
        exp: 111495,
        money: 42200,
        isBoss: false,
        fromAreas: [
            'HawaiianIslands'
        ],
        possession: {
            name: 'ヒーリングベル'
        }
    },
    {
        name: 'ムーの心',
        level: 55,
        attack: 235,
        defense: 67,
        magic: 111,
        speed: 47,
        hp: 599,
        trick: '騎士の魂',
        magicAttack: 'ネムネム',
        magicDefense: 'ドリカバラ',
        exp: 148660,
        money: 26800,
        isBoss: false,
        fromAreas: [
            'HawaiianIslands'
        ],
        possession: {
            name: 'ダウンの書'
        }
    },
    {
        name: 'ムーの戦士',
        level: 56,
        attack: 202,
        defense: 115,
        magic: 79,
        speed: 64,
        hp: 673,
        trick: '斬鉄剣',
        magicAttack: 'ATマホケス',
        magicDefense: 'リバイブ',
        exp: 118102,
        money: 31700,
        isBoss: false,
        fromAreas: [
            'HawaiianIslands'
        ],
        possession: {
            name: 'マモるんです'
        }
    },
    {
        name: 'ムーの番兵',
        level: 56,
        attack: 199,
        defense: 165,
        magic: 28,
        speed: 46,
        hp: 1086,
        trick: 'データコピー',
        magicAttack: 'ウラミム',
        magicDefense: 'ミナアップ',
        exp: 118102,
        money: 37800,
        isBoss: false,
        fromAreas: [
            'HawaiianIslands'
        ],
        possession: {
            name: 'マグファイアの書'
        }
    },
    {
        name: 'ライディーン',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '復活の呪文',
        magicAttack: 'エレクトラ',
        magicDefense: 'ミナアップ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [
            'HawaiianIslands'
        ],
        possession: {
            name: 'ロードオブリング'
        }
    }, {
        name: 'アイテムミミック',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: 'おどかし',
        magicAttack: 'エネゲット',
        magicDefense: 'マホガド',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: '＊アイテム'
        }
    },
    {
        name: '魔法ミミック',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: 'ガス抜き',
        magicAttack: 'ヨワッチ',
        magicDefense: 'ドマホガドラ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: '＊魔法'
        }
    },
    {
        name: '？ミミック',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: 'こりほぐし',
        magicAttack: 'ドクラマグラ',
        magicDefense: 'ガッツリ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: '＊貴重な物'
        }
    },
    {
        name: '白ミミック',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '魔引き',
        magicAttack: 'DFマホケス',
        magicDefense: 'ドリカバラ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: '＊良い物か悪い物'
        }
    },
    {
        name: '金ミミック',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '復活の呪文',
        magicAttack: 'ゼニゲット',
        magicDefense: 'ミナアップ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: '＊お金(週数×5000）'
        }
    },
    {
        name: '鍵ミミック',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '道連れ',
        magicAttack: 'ネムネム',
        magicDefense: 'リバイブ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: '＊アクセサリー'
        }
    },
    {
        name: 'モンモン',
        level: 1,
        attack: 1,
        defense: 1,
        magic: 1,
        speed: 0,
        hp: 10,
        trick: 'とんずら',
        exp: 4,
        money: 100,
        isBoss: false,
        fromAreas: [],
        possession: {
            name: 'きせきのしずく'
        }
    },
    {
        name: 'ウィウィ',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '退場',
        magicAttack: 'ネムネム',
        magicDefense: 'ドリキュアラ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: '＊ウィウィバッジなど'
        }
    },
    {
        name: 'ガママル',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '暗殺',
        magicAttack: 'バーニー',
        magicDefense: 'ドリカバラ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: '和銅一文字'
        }
    },
    {
        name: 'パッチューズ',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: 'ひこう突き',
        magicAttack: 'クルパー',
        magicDefense: 'ドマホガド',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: 'ネムネムの書'
        }
    },
    {
        name: 'パッチー36号',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: 'こりほぐし',
        magicAttack: 'DFマホケス',
        magicDefense: 'バインド',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: 'きせきのはりがね'
        }
    },
    {
        name: 'パッチー１号',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '凶器攻撃',
        magicAttack: 'ATマホケス',
        magicDefense: 'キリガッツ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: 'ハートのくつ'
        }
    },
    {
        name: 'バイラル',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: 'ヒートUP',
        magicAttack: 'フリーザー',
        magicDefense: 'キリガッツ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: 'バイラルフック'
        }
    },
    {
        name: 'ペロ',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '雄たけび',
        magicAttack: 'エネゲット',
        magicDefense: 'ガッツリ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: 'ゼブラがら額当て'
        }
    },
    {
        name: 'アリサ',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '魅了',
        magicAttack: 'エレクトラ',
        magicDefense: 'リバイブ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: 'ヌイグルミ'
        }
    },
    {
        name: 'シャオロン',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '命狙い',
        magicDefense: 'ドマホガドラ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: '毒手'
        }
    },
    {
        name: 'グラディエーター',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '怒りの炎',
        magicAttack: 'エネゲット',
        magicDefense: 'リキュア',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: '破壊のリング(戦闘後消失）'
        }
    },
    {
        name: 'キィ',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '暗殺',
        magicAttack: 'バーニング',
        magicDefense: 'ミナアップ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: '極悪ピアス'
        }
    },
    {
        name: 'セルモン',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '奇跡の祈り',
        magicAttack: 'エレクトラ',
        magicDefense: 'ドリキュアラ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: 'ピーポバッジ'
        }
    },
    {
        name: 'スナッチ',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: '怒りの炎',
        magicAttack: 'ハズシャーン',
        magicDefense: 'ドマホガド',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: ''
        }
    },
    {
        name: 'ワルサー',
        level: 0,
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        trick: 'ウィルス',
        magicAttack: 'ゴウトゥヘル',
        magicDefense: 'リバイブ',
        exp: 0,
        money: 0,
        isBoss: true,
        fromAreas: [],
        possession: {
            name: '＊ワルサーバッジなど'
        }
    }
]

export default monsters