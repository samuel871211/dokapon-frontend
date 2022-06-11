import { Weapon } from 'global'
import { 
    warriorJobTypes,
    magicianJobTypes,
    clericJobTypes,
    thiefJobTypes,
    gladiatorJobTypes
} from './jobs'

const weapons: Weapon[] = [
    {
        name: 'やすものの剣',
        price: 50,
        attack: 2,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['Asia'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: '竹ざお',
        price: 800,
        attack: 6,
        defense: 0,
        magic: 0,
        speed: 1,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['Asia'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: 'りりむロッド',
        price: 500,
        attack: 7,
        defense: 0,
        magic: 50,
        speed: 0,
        hp: 0,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: [],
        fromMonster: '白ミミック',
        explanation: ''
    },
    {
        name: 'コメディステッキ',
        price: 1,
        attack: 9,
        defense: 0,
        magic: 4,
        speed: 0,
        hp: 0,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: ['Asia'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: '出刃ぼうちょう',
        price: 3,
        attack: 13,
        defense: 0,
        magic: 0,
        speed: 2,
        hp: 0,
        additionalDamageJobs: thiefJobTypes,
        fromAreas: ['Asia'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: 'こんぼう',
        price: 2,
        attack: 16,
        defense: 0,
        magic: 0,
        speed: -3,
        hp: 0,
        additionalDamageJobs: clericJobTypes,
        fromAreas: ['Asia'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: '青龍刀',
        price: 8,
        attack: 19,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['Asia'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: 'アツアツおでん',
        price: 120,
        attack: 22,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 20,
        additionalDamageJobs: ['alien'],
        fromAreas: ['Asia'],
        explanation: '',
        fromMonster: 'ハッカイ'
    },
    {
        name: 'にょいぼう',
        price: 6,
        attack: 24,
        defense: 0,
        magic: 0,
        speed: 5,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['Asia'],
        explanation: '',
        fromMonster: 'ゴクウ'
    },
    {
        name: '聖なるナイフ',
        price: 14,
        attack: 25,
        defense: 0,
        magic: 1,
        speed: 6,
        hp: 0,
        additionalDamageJobs: thiefJobTypes,
        fromAreas: ['Europe'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: 'レイピア',
        price: 17,
        attack: 27,
        defense: 0,
        magic: 0,
        speed: 4,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['Europe'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: '兵士の槍',
        price: 20,
        attack: 33,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['Europe'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: '導師の杖',
        price: 26,
        attack: 35,
        defense: 0,
        magic: 3,
        speed: 0,
        hp: 0,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: ['Europe'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: 'ペロペロハンマー',
        price: 100,
        attack: 36,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 60,
        additionalDamageJobs: ['alien'],
        fromAreas: ['EuropeCave'],
        explanation: '',
        fromMonster: 'フランケン'
    },
    {
        name: '魔女ッ子ステッキ',
        price: 3,
        attack: 37,
        defense: 0,
        magic: 12,
        speed: 0,
        hp: 0,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: ['AsiaCave'],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: 'ジュリアナせんす',
        price: 74,
        attack: 38,
        defense: 0,
        magic: 0,
        speed: 12,
        hp: 0,
        additionalDamageJobs: ['dancer'],
        fromAreas: ['EuropeCave'],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: 'しゃくじょう',
        price: 4,
        attack: 39,
        defense: 0,
        magic: 3,
        speed: 0,
        hp: 0,
        additionalDamageJobs: clericJobTypes,
        fromAreas: ['AsiaCave'],
        explanation: '',
        fromMonster: '惨憎法師'
    },
    {
        name: 'メイス',
        price: 26,
        attack: 40,
        defense: 1,
        magic: 0,
        speed: -2,
        hp: 0,
        additionalDamageJobs: clericJobTypes,
        fromAreas: ['Europe'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: 'ハルバード',
        price: 34,
        attack: 41,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['Europe'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: 'のうふのカマ',
        price: 38,
        attack: 43,
        defense: 0,
        magic: 0,
        speed: 6,
        hp: 0,
        additionalDamageJobs: thiefJobTypes,
        fromAreas: ['Europe'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: 'ナイトランス',
        price: 39,
        attack: 45,
        defense: 0,
        magic: 0,
        speed: 1,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['Europe'],
        explanation: '',
        fromMonster: 'ブラックアーマー'
    },
    {
        name: 'メリケンサック',
        price: 51,
        attack: 52,
        defense: 0,
        magic: 0,
        speed: 5,
        hp: 0,
        additionalDamageJobs: gladiatorJobTypes,
        fromAreas: ['Russia'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: 'クリムゾンワンド',
        price: 77,
        attack: 54,
        defense: 0,
        magic: 2,
        speed: 0,
        hp: 0,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: ['Russia'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: '聖騎士のつるぎ',
        price: 44,
        attack: 55,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['EuropeCave'],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: 'エンジェルロッド',
        price: 158,
        attack: 56,
        defense: 0,
        magic: 15,
        speed: 1,
        hp: 0,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: ['Russia'],
        explanation: '',
        fromMonster: 'ラスプーチン'
    },
    {
        name: '木こりのオノ',
        price: 62,
        attack: 57,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: [],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: 'タンバリン',
        price: 57,
        attack: 60,
        defense: 2,
        magic: 2,
        speed: 2,
        hp: 0,
        additionalDamageJobs: ['dancer'],
        fromAreas: ['Russia'],
        explanation: '',
        fromMonster: '雪原人キッズ'
    },
    {
        name: '巨大きづち',
        price: 65,
        attack: 62,
        defense: 0,
        magic: 0,
        speed: -5,
        hp: 0,
        additionalDamageJobs: ['carpenter'],
        fromAreas: ['Russia'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: 'スチールナイフ',
        price: 95,
        attack: 63,
        defense: 0,
        magic: 0,
        speed: 6,
        hp: 0,
        additionalDamageJobs: thiefJobTypes,
        fromAreas: ['NorthAmerica'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: '雷めいのつるぎ',
        price: 35,
        attack: 64,
        defense: 0,
        magic: 0,
        speed: 3,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['EuropeCave'],
        explanation: '',
        fromMonster: 'レッドブリキン'
    },
    {
        name: 'モーニングスター',
        price: 91,
        attack: 65,
        defense: 0,
        magic: 0,
        speed: -2,
        hp: 0,
        additionalDamageJobs: clericJobTypes,
        fromAreas: ['Russia'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: 'スピリットクラブ',
        price: 103,
        attack: 70,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        additionalDamageJobs: clericJobTypes,
        fromAreas: ['NorthAmerica'],
        explanation: '',
        isFromWeaponStore: true
    },
    {
        name: 'ピンクの注射器',
        price: 106,
        attack: 71,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 30,
        additionalDamageJobs: ['nurse'],
        fromAreas: [],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: '打ち出のこづち',
        price: 124,
        attack: 75,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        additionalDamageJobs: ['carpenter'],
        fromAreas: ['SouthAmericaCave'],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: 'シャーマンロッド',
        price: 142,
        attack: 76,
        defense: 0,
        magic: 3,
        speed: 0,
        hp: 0,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: ['NorthAmerica'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'ジャックのメス',
        price: 134,
        attack: 77,
        defense: 0,
        magic: 0,
        speed: 3,
        hp: 10,
        additionalDamageJobs: ['nurse'],
        fromAreas: ['NorthAmerica'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'ハヤブサの槍',
        price: 206,
        attack: 78,
        defense: 0,
        magic: 0,
        speed: 15,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['NorthAmerica'],
        explanation: '',
        fromMonster: 'トーテマン',
        
    },
    {
        name: '和銅一文字',
        price: 50,
        attack: 80,
        defense: 0,
        magic: 0,
        speed: 2,
        hp: 0,
        additionalDamageJobs: thiefJobTypes,
        fromAreas: ['AsiaCave'],
        explanation: '',
        fromMonster: 'ガママル',
        
    },
    {
        name: 'シルバーソード',
        price: 208,
        attack: 83,
        defense: 1,
        magic: 3,
        speed: 0,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['NorthAmerica'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'ピクシーロッド',
        price: 245,
        attack: 84,
        defense: 0,
        magic: 15,
        speed: 0,
        hp: 0,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: ['NorthAmerica'],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: 'バトルアックス',
        price: 150,
        attack: 85,
        defense: 0,
        magic: 0,
        speed: -1,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['NorthAmerica'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'デジ剣',
        price: 210,
        attack: 92,
        defense: 1,
        magic: 1,
        speed: 1,
        hp: 10,
        additionalDamageJobs: ['robot'],
        fromAreas: ['SouthAmerica'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'パールカ',
        price: 9,
        attack: 94,
        defense: 0,
        magic: -10,
        speed: -5,
        hp: 0,
        additionalDamageJobs: ['carpenter'],
        fromAreas: ['Russia'],
        explanation: '',
        fromMonster: '雪原人ミチエーリ',
        
    },
    {
        name: '黄金の杖',
        price: 1,
        attack: 95,
        defense: 0,
        magic: 18,
        speed: 0,
        hp: 0,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: ['SouthAmericaCave'],
        explanation: '',
        fromMonster: 'テスカポリトカ',
        
    },
    {
        name: 'フラワーバトン',
        price: 254,
        attack: 96,
        defense: 0,
        magic: 5,
        speed: 1,
        hp: 0,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: ['SouthAmerica'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'ドカポソソード',
        price: 195,
        attack: 99,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 50,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['NorthAmericaCave'],
        explanation: '',
        fromTreasureField: 'KeyTreasureField'
    },
    {
        name: 'Mリング',
        price: 75,
        attack: 100,
        defense: 0,
        magic: 0,
        speed: 8,
        hp: 0,
        additionalDamageJobs: ['queen'],
        fromAreas: ['NorthAmericaCave'],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: 'ボーンダガー',
        price: 265,
        attack: 107,
        defense: 0,
        magic: 0,
        speed: 3,
        hp: 0,
        additionalDamageJobs: thiefJobTypes,
        fromAreas: ['SouthAmerica'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'バイラルフック',
        price: 300,
        attack: 108,
        defense: 5,
        magic: 0,
        speed: 8,
        hp: 0,
        additionalDamageJobs: thiefJobTypes,
        fromAreas: ['Europe'],
        explanation: '',
        fromMonster: 'バイラル',
        
    },
    {
        name: 'ウォーリアスピア',
        price: 273,
        attack: 110,
        defense: 0,
        magic: 0,
        speed: -1,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['SouthAmerica'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'おおかなづち',
        price: 280,
        attack: 116,
        defense: 0,
        magic: 0,
        speed: -4,
        hp: 0,
        additionalDamageJobs: ['carpenter'],
        fromAreas: ['SouthAmerica'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: '真紅のロウソク',
        price: 397,
        attack: 117,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 30,
        additionalDamageJobs: ['queen'],
        fromAreas: ['SouthAmericaCave'],
        explanation: '',
        fromTreasureField: 'RedTreasureField' 
    },
    {
        name: 'ギロチンアックス',
        price: 368,
        attack: 118,
        defense: 0,
        magic: 0,
        speed: -2,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['SouthAmerica'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'バトルホーク',
        price: 158,
        attack: 119,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 10,
        additionalDamageJobs: [],
        fromAreas: ['NorthAmerica'],
        explanation: '',
        fromMonster: '族長タタンカ',
        
    },
    {
        name: 'コンバットナイフ',
        price: 394,
        attack: 123,
        defense: 0,
        magic: 0,
        speed: 5,
        hp: 0,
        additionalDamageJobs: thiefJobTypes,
        fromAreas: ['Oceania'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: '王者のツメ',
        price: 320,
        attack: 126,
        defense: 0,
        magic: 0,
        speed: 8,
        hp: 0,
        additionalDamageJobs: thiefJobTypes,
        fromAreas: ['SouthAmericaCave'],
        explanation: '',
        fromTreasureField: 'KeyTreasureField'
    },
    {
        name: 'れんじゅの杖',
        price: 474,
        attack: 127,
        defense: 0,
        magic: 4,
        speed: 0,
        hp: 0,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: ['Oceania'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'ヌイグルミ',
        price: 80,
        attack: 128,
        defense: 0,
        magic: 12,
        speed: 2,
        hp: 0,
        additionalDamageJobs: ['alien'],
        fromAreas: ['EuropeCave'],
        explanation: '',
        fromMonster: 'アリサ',
        
    },
    {
        name: 'しっぷう剣',
        price: 489,
        attack: 130,
        defense: 0,
        magic: 0,
        speed: 8,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['Oceania'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'ぎしきのナイフ',
        price: 511,
        attack: 131,
        defense: 0,
        magic: 0,
        speed: 8,
        hp: 0,
        additionalDamageJobs: thiefJobTypes,
        fromAreas: ['SouthAmericaCave'],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: 'ドラゴンクロー',
        price: 538,
        attack: 136,
        defense: 4,
        magic: 0,
        speed: 2,
        hp: 0,
        additionalDamageJobs: gladiatorJobTypes,
        fromAreas: ['Oceania'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'アサシンダガー',
        price: 958,
        attack: 140,
        defense: 0,
        magic: 0,
        speed: 6,
        hp: 0,
        additionalDamageJobs: thiefJobTypes,
        fromAreas: ['Africa'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: '特大ノコギリ',
        price: 452,
        attack: 142,
        defense: 0,
        magic: 0,
        speed: -3,
        hp: 0,
        additionalDamageJobs: ['carpenter'],
        fromAreas: ['Oceania'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'ドリルランサー',
        price: 593,
        attack: 146,
        defense: 0,
        magic: 0,
        speed: 3,
        hp: 0,
        additionalDamageJobs: ['robot'],
        fromAreas: ['Oceania'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'ごくあく注射器',
        price: 638,
        attack: 147,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 60,
        additionalDamageJobs: ['nurse'],
        fromAreas: ['Oceania'],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: 'やいばのおうぎ',
        price: 610,
        attack: 149,
        defense: 5,
        magic: 0,
        speed: 3,
        hp: 0,
        additionalDamageJobs: ['dancer'],
        fromAreas: ['Africa'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'スネークロッド',
        price: 44,
        attack: 150,
        defense: 0,
        magic: 12,
        speed: 0,
        hp: 0,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: ['Oceania'],
        explanation: '',
        fromMonster: 'フリルドリザード',
        
    },
    {
        name: 'ルーンスタッフ',
        price: 715,
        attack: 152,
        defense: 0,
        magic: 4,
        speed: 2,
        hp: 0,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: ['Africa'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'マーメイドロッド',
        price: 600,
        attack: 154,
        defense: 0,
        magic: 10,
        speed: 0,
        hp: 10,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: ['Oceania'],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: '毒手',
        price: 5,
        attack: 160,
        defense: 0,
        magic: 0,
        speed: 10,
        hp: 30,
        additionalDamageJobs: gladiatorJobTypes,
        fromAreas: ['NorthAmericaCave'],
        explanation: '',
        fromMonster: 'シャオロン',
        
    },
    {
        name: '破壊のオノ',
        price: 732,
        attack: 161,
        defense: 0,
        magic: 0,
        speed: -3,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['Africa'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'ピコピコハンマー',
        price: 1,
        attack: 162,
        defense: 5,
        magic: 5,
        speed: 5,
        hp: 0,
        additionalDamageJobs: ['alien'],
        fromAreas: ['Africa'],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: '海神のモリ',
        price: 818,
        attack: 164,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['Oceania'],
        explanation: '',
        fromTreasureField: 'KeyTreasureField'
    },
    {
        name: 'コアラのぼう',
        price: 8,
        attack: 165,
        defense: 1,
        magic: 1,
        speed: 1,
        hp: 10,
        additionalDamageJobs: ['alien'],
        fromAreas: ['Oceania'],
        explanation: '',
        fromMonster: 'ウンフーク',
        
    },
    {
        name: 'メテオストライク',
        price: 802,
        attack: 166,
        defense: 5,
        magic: 0,
        speed: -8,
        hp: 0,
        additionalDamageJobs: clericJobTypes,
        fromAreas: ['Africa'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'おしおき棒',
        price: 910,
        attack: 171,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 50,
        additionalDamageJobs: ['queen'],
        fromAreas: ['Africa', 'AfricaCave'],
        explanation: '',
        fromMonster: 'ホルス神',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: '竜殺しの剣',
        price: 875,
        attack: 175,
        defense: 5,
        magic: 0,
        speed: -3,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['Africa', 'AntarcticaCave'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: 'よみのカマ',
        price: 259,
        attack: 176,
        defense: 0,
        magic: -2,
        speed: -2,
        hp: 50,
        additionalDamageJobs: thiefJobTypes,
        fromAreas: ['Africa'],
        explanation: '',
        fromMonster: '死の呼び子',
        
    },
    {
        name: '燃える拳',
        price: 287,
        attack: 180,
        defense: 0,
        magic: 0,
        speed: 10,
        hp: 10,
        additionalDamageJobs: gladiatorJobTypes,
        fromAreas: ['AfricaCave'],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: '王家のハンマー',
        price: 1,
        attack: 181,
        defense: 3,
        magic: 3,
        speed: -6,
        hp: 10,
        additionalDamageJobs: clericJobTypes,
        fromAreas: ['AfricaCave'],
        explanation: '',
        fromTreasureField: 'KeyTreasureField'
    },
    {
        name: 'めいふの杖',
        price: 1,
        attack: 185,
        defense: 0,
        magic: 16,
        speed: -3,
        hp: 0,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: ['Africa'],
        explanation: '',
        fromMonster: 'マコンデ'
        
    },
    {
        name: 'ビートホーク',
        price: 1,
        attack: 190,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        additionalDamageJobs: ['robot'],
        fromAreas: ['AfricaCave'],
        explanation: '',
        isFromWeaponStore: true
        
    },
    {
        name: '狂剣ジャブロー',
        price: 1,
        attack: 193,
        defense: 2,
        magic: -2,
        speed: 0,
        hp: 0,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['Antarctica', 'Arctic'],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: '吹雪の杖',
        price: 1,
        attack: 199,
        defense: 0,
        magic: 10,
        speed: 0,
        hp: 0,
        additionalDamageJobs: magicianJobTypes,
        fromAreas: ['Arctic', 'HawaiianIslandsCave'],
        explanation: '',
        fromMonster: 'ペギゴン',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: 'アトミックアイス',
        price: 1,
        attack: 203,
        defense: 3,
        magic: 5,
        speed: -5,
        hp: 0,
        additionalDamageJobs: clericJobTypes,
        fromAreas: ['Arctic', 'Antarctica'],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: 'ゴッドブロー',
        price: 1,
        attack: 205,
        defense: 0,
        magic: 10,
        speed: 15,
        hp: 0,
        additionalDamageJobs: gladiatorJobTypes,
        fromAreas: ['ArcticCave'],
        explanation: '',
        fromTreasureField: 'KeyTreasureField'
    },
    {
        name: 'にくかい',
        price: 2,
        attack: 206,
        defense: 0,
        magic: -20,
        speed: 0,
        hp: 300,
        additionalDamageJobs: ['alien'],
        fromAreas: ['AntarcticaCave'],
        explanation: '',
        fromTreasureField: 'KeyTreasureField'
    },
    {
        name: '支配のナイフ',
        price: 1,
        attack: 208,
        defense: 5,
        magic: 5,
        speed: 8,
        hp: 0,
        additionalDamageJobs: thiefJobTypes,
        fromAreas: ['HawaiianIslands'],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: 'ドカポンソード',
        price: 1,
        attack: 215,
        defense: 1,
        magic: 1,
        speed: 1,
        hp: 100,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['HawaiianIslandsCave'],
        explanation: '',
        fromTreasureField: 'KeyTreasureField'
    },
    {
        name: 'バケモノの槍',
        price: 444,
        attack: 230,
        defense: 20,
        magic: 0,
        speed: 20,
        hp: 200,
        additionalDamageJobs: warriorJobTypes,
        fromAreas: ['HawaiianIslandsCave'],
        explanation: '',
        fromTreasureField: 'RedTreasureField'
    },
    {
        name: '妖刀ニヒル',
        price: 1,
        attack: 244,
        defense: 20,
        magic: 15,
        speed: 15,
        hp: 150,
        additionalDamageJobs: thiefJobTypes,
        fromAreas: ['Atlantis'],
        explanation: '',
        fromTreasureField: 'KeyTreasureField'
    },
    {
        name: '神魔合竜剣',
        price: 888,
        attack: 300,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0,
        additionalDamageJobs: ['devil'],
        fromAreas: [],
        explanation: '',
        
    }
]

export default weapons