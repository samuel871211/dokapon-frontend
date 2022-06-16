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
        'name': 'やすものの剣',
        'price': 50,
        'attack': 2,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Asia'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '竹ざお',
        'price': 800,
        'attack': 6,
        'defense': 0,
        'magic': 0,
        'speed': 1,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Asia'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'りりむロッド',
        'price': 500,
        'attack': 7,
        'defense': 0,
        'magic': 50,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': magicianJobTypes,
        'fromMonsters': [
            '白ミミック'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'コメディステッキ',
        'price': 1,
        'attack': 9,
        'defense': 0,
        'magic': 4,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': magicianJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Asia'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '出刃ぼうちょう',
        'price': 3,
        'attack': 13,
        'defense': 0,
        'magic': 0,
        'speed': 2,
        'hp': 0,
        'additionalDamageJobs': thiefJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Asia'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'こんぼう',
        'price': 2,
        'attack': 16,
        'defense': 0,
        'magic': 0,
        'speed': -3,
        'hp': 0,
        'additionalDamageJobs': clericJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Asia'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '青龍刀',
        'price': 8,
        'attack': 19,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Asia'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'アツアツおでん',
        'price': 120,
        'attack': 22,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 20,
        'additionalDamageJobs': [
            'alien'
        ],
        'explanation': '',
        'fromMonsters': [
            'ハッカイ'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'Asia'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'にょいぼう',
        'price': 6,
        'attack': 24,
        'defense': 0,
        'magic': 0,
        'speed': 5,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromMonsters': [
            'ゴクウ'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'Asia'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '聖なるナイフ',
        'price': 14,
        'attack': 25,
        'defense': 0,
        'magic': 1,
        'speed': 6,
        'hp': 0,
        'additionalDamageJobs': thiefJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Europe'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'レイピア',
        'price': 17,
        'attack': 27,
        'defense': 0,
        'magic': 0,
        'speed': 4,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Europe'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '兵士の槍',
        'price': 20,
        'attack': 33,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Europe'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '導師の杖',
        'price': 26,
        'attack': 35,
        'defense': 0,
        'magic': 3,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': magicianJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Europe'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ペロペロハンマー',
        'price': 100,
        'attack': 36,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 60,
        'additionalDamageJobs': [
            'alien'
        ],
        'explanation': '',
        'fromMonsters': [
            'フランケン'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '魔女ッ子ステッキ',
        'price': 3,
        'attack': 37,
        'defense': 0,
        'magic': 12,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': magicianJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'AsiaCave'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'ジュリアナせんす',
        'price': 74,
        'attack': 38,
        'defense': 0,
        'magic': 0,
        'speed': 12,
        'hp': 0,
        'additionalDamageJobs': [
            'dancer'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'しゃくじょう',
        'price': 4,
        'attack': 39,
        'defense': 0,
        'magic': 3,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': clericJobTypes,
        'explanation': '',
        'fromMonsters': [
            '惨憎法師'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'AsiaCave'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'メイス',
        'price': 26,
        'attack': 40,
        'defense': 1,
        'magic': 0,
        'speed': -2,
        'hp': 0,
        'additionalDamageJobs': clericJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Europe'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ハルバード',
        'price': 34,
        'attack': 41,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Europe'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'のうふのカマ',
        'price': 38,
        'attack': 43,
        'defense': 0,
        'magic': 0,
        'speed': 6,
        'hp': 0,
        'additionalDamageJobs': thiefJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Europe'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ナイトランス',
        'price': 39,
        'attack': 45,
        'defense': 0,
        'magic': 0,
        'speed': 1,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromMonsters': [
            'ブラックアーマー'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'Europe'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'メリケンサック',
        'price': 51,
        'attack': 52,
        'defense': 0,
        'magic': 0,
        'speed': 5,
        'hp': 0,
        'additionalDamageJobs': gladiatorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Russia'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'クリムゾンワンド',
        'price': 77,
        'attack': 54,
        'defense': 0,
        'magic': 2,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': magicianJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Russia'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '聖騎士のつるぎ',
        'price': 44,
        'attack': 55,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'エンジェルロッド',
        'price': 158,
        'attack': 56,
        'defense': 0,
        'magic': 15,
        'speed': 1,
        'hp': 0,
        'additionalDamageJobs': magicianJobTypes,
        'explanation': '',
        'fromMonsters': [
            'ラスプーチン'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'Russia'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '木こりのオノ',
        'price': 62,
        'attack': 57,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'タンバリン',
        'price': 57,
        'attack': 60,
        'defense': 2,
        'magic': 2,
        'speed': 2,
        'hp': 0,
        'additionalDamageJobs': [
            'dancer'
        ],
        'explanation': '',
        'fromMonsters': [
            '雪原人キッズ'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'Russia'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '巨大きづち',
        'price': 65,
        'attack': 62,
        'defense': 0,
        'magic': 0,
        'speed': -5,
        'hp': 0,
        'additionalDamageJobs': [
            'carpenter'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Russia'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'スチールナイフ',
        'price': 95,
        'attack': 63,
        'defense': 0,
        'magic': 0,
        'speed': 6,
        'hp': 0,
        'additionalDamageJobs': thiefJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'NorthAmerica'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '雷めいのつるぎ',
        'price': 35,
        'attack': 64,
        'defense': 0,
        'magic': 0,
        'speed': 3,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromMonsters': [
            'レッドブリキン'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'モーニングスター',
        'price': 91,
        'attack': 65,
        'defense': 0,
        'magic': 0,
        'speed': -2,
        'hp': 0,
        'additionalDamageJobs': clericJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Russia'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'スピリットクラブ',
        'price': 103,
        'attack': 70,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': clericJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'NorthAmerica'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ピンクの注射器',
        'price': 106,
        'attack': 71,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 30,
        'additionalDamageJobs': [
            'nurse'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': '打ち出のこづち',
        'price': 124,
        'attack': 75,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': [
            'carpenter'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'SouthAmericaCave'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'シャーマンロッド',
        'price': 142,
        'attack': 76,
        'defense': 0,
        'magic': 3,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': magicianJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'NorthAmerica'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ジャックのメス',
        'price': 134,
        'attack': 77,
        'defense': 0,
        'magic': 0,
        'speed': 3,
        'hp': 10,
        'additionalDamageJobs': [
            'nurse'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'NorthAmerica'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ハヤブサの槍',
        'price': 206,
        'attack': 78,
        'defense': 0,
        'magic': 0,
        'speed': 15,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromMonsters': [
            'トーテマン'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'NorthAmerica'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '和銅一文字',
        'price': 50,
        'attack': 80,
        'defense': 0,
        'magic': 0,
        'speed': 2,
        'hp': 0,
        'additionalDamageJobs': thiefJobTypes,
        'explanation': '',
        'fromMonsters': [
            'ガママル'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'AsiaCave'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'シルバーソード',
        'price': 208,
        'attack': 83,
        'defense': 1,
        'magic': 3,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'NorthAmerica'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ピクシーロッド',
        'price': 245,
        'attack': 84,
        'defense': 0,
        'magic': 15,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': magicianJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'NorthAmerica'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'バトルアックス',
        'price': 150,
        'attack': 85,
        'defense': 0,
        'magic': 0,
        'speed': -1,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'NorthAmerica'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'デジ剣',
        'price': 210,
        'attack': 92,
        'defense': 1,
        'magic': 1,
        'speed': 1,
        'hp': 10,
        'additionalDamageJobs': [
            'robot'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'SouthAmerica'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'パールカ',
        'price': 9,
        'attack': 94,
        'defense': 0,
        'magic': -10,
        'speed': -5,
        'hp': 0,
        'additionalDamageJobs': [
            'carpenter'
        ],
        'explanation': '',
        'fromMonsters': [
            '雪原人ミチエーリ'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'Russia'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '黄金の杖',
        'price': 1,
        'attack': 95,
        'defense': 0,
        'magic': 18,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': magicianJobTypes,
        'explanation': '',
        'fromMonsters': [
            'テスカポリトカ'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'SouthAmericaCave'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'フラワーバトン',
        'price': 254,
        'attack': 96,
        'defense': 0,
        'magic': 5,
        'speed': 1,
        'hp': 0,
        'additionalDamageJobs': magicianJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'SouthAmerica'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ドカポソソード',
        'price': 195,
        'attack': 99,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 50,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'NorthAmericaCave'
                ],
                'vertexTypes': [
                    'KeyTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'Mリング',
        'price': 75,
        'attack': 100,
        'defense': 0,
        'magic': 0,
        'speed': 8,
        'hp': 0,
        'additionalDamageJobs': [
            'queen'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'NorthAmericaCave'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'ボーンダガー',
        'price': 265,
        'attack': 107,
        'defense': 0,
        'magic': 0,
        'speed': 3,
        'hp': 0,
        'additionalDamageJobs': thiefJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'SouthAmerica'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'バイラルフック',
        'price': 300,
        'attack': 108,
        'defense': 5,
        'magic': 0,
        'speed': 8,
        'hp': 0,
        'additionalDamageJobs': thiefJobTypes,
        'explanation': '',
        'fromMonsters': [
            'バイラル'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'Europe'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ウォーリアスピア',
        'price': 273,
        'attack': 110,
        'defense': 0,
        'magic': 0,
        'speed': -1,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'SouthAmerica'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'おおかなづち',
        'price': 280,
        'attack': 116,
        'defense': 0,
        'magic': 0,
        'speed': -4,
        'hp': 0,
        'additionalDamageJobs': [
            'carpenter'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'SouthAmerica'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '真紅のロウソク',
        'price': 397,
        'attack': 117,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 30,
        'additionalDamageJobs': [
            'queen'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'SouthAmericaCave'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'ギロチンアックス',
        'price': 368,
        'attack': 118,
        'defense': 0,
        'magic': 0,
        'speed': -2,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'SouthAmerica'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'バトルホーク',
        'price': 158,
        'attack': 119,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 10,
        'additionalDamageJobs': [],
        'explanation': '',
        'fromMonsters': [
            '族長タタンカ'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'NorthAmerica'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'コンバットナイフ',
        'price': 394,
        'attack': 123,
        'defense': 0,
        'magic': 0,
        'speed': 5,
        'hp': 0,
        'additionalDamageJobs': thiefJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Oceania'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '王者のツメ',
        'price': 320,
        'attack': 126,
        'defense': 0,
        'magic': 0,
        'speed': 8,
        'hp': 0,
        'additionalDamageJobs': thiefJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'SouthAmericaCave'
                ],
                'vertexTypes': [
                    'KeyTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'れんじゅの杖',
        'price': 474,
        'attack': 127,
        'defense': 0,
        'magic': 4,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': magicianJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Oceania'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ヌイグルミ',
        'price': 80,
        'attack': 128,
        'defense': 0,
        'magic': 12,
        'speed': 2,
        'hp': 0,
        'additionalDamageJobs': [
            'alien'
        ],
        'explanation': '',
        'fromMonsters': [
            'アリサ'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'しっぷう剣',
        'price': 489,
        'attack': 130,
        'defense': 0,
        'magic': 0,
        'speed': 8,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Oceania'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ぎしきのナイフ',
        'price': 511,
        'attack': 131,
        'defense': 0,
        'magic': 0,
        'speed': 8,
        'hp': 0,
        'additionalDamageJobs': thiefJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'SouthAmericaCave'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'ドラゴンクロー',
        'price': 538,
        'attack': 136,
        'defense': 4,
        'magic': 0,
        'speed': 2,
        'hp': 0,
        'additionalDamageJobs': gladiatorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Oceania'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'アサシンダガー',
        'price': 958,
        'attack': 140,
        'defense': 0,
        'magic': 0,
        'speed': 6,
        'hp': 0,
        'additionalDamageJobs': thiefJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Africa'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '特大ノコギリ',
        'price': 452,
        'attack': 142,
        'defense': 0,
        'magic': 0,
        'speed': -3,
        'hp': 0,
        'additionalDamageJobs': [
            'carpenter'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Oceania'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ドリルランサー',
        'price': 593,
        'attack': 146,
        'defense': 0,
        'magic': 0,
        'speed': 3,
        'hp': 0,
        'additionalDamageJobs': [
            'robot'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Oceania'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ごくあく注射器',
        'price': 638,
        'attack': 147,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 60,
        'additionalDamageJobs': [
            'nurse'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Oceania'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'やいばのおうぎ',
        'price': 610,
        'attack': 149,
        'defense': 5,
        'magic': 0,
        'speed': 3,
        'hp': 0,
        'additionalDamageJobs': [
            'dancer'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Africa'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'スネークロッド',
        'price': 44,
        'attack': 150,
        'defense': 0,
        'magic': 12,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': magicianJobTypes,
        'explanation': '',
        'fromMonsters': [
            'フリルドリザード'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'Oceania'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ルーンスタッフ',
        'price': 715,
        'attack': 152,
        'defense': 0,
        'magic': 4,
        'speed': 2,
        'hp': 0,
        'additionalDamageJobs': magicianJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Africa'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'マーメイドロッド',
        'price': 600,
        'attack': 154,
        'defense': 0,
        'magic': 10,
        'speed': 0,
        'hp': 10,
        'additionalDamageJobs': magicianJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Oceania'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': '毒手',
        'price': 5,
        'attack': 160,
        'defense': 0,
        'magic': 0,
        'speed': 10,
        'hp': 30,
        'additionalDamageJobs': gladiatorJobTypes,
        'explanation': '',
        'fromMonsters': [
            'シャオロン'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'NorthAmericaCave'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '破壊のオノ',
        'price': 732,
        'attack': 161,
        'defense': 0,
        'magic': 0,
        'speed': -3,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Africa'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ピコピコハンマー',
        'price': 1,
        'attack': 162,
        'defense': 5,
        'magic': 5,
        'speed': 5,
        'hp': 0,
        'additionalDamageJobs': [
            'alien'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Africa'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': '海神のモリ',
        'price': 818,
        'attack': 164,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Oceania'
                ],
                'vertexTypes': [
                    'KeyTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'コアラのぼう',
        'price': 8,
        'attack': 165,
        'defense': 1,
        'magic': 1,
        'speed': 1,
        'hp': 10,
        'additionalDamageJobs': [
            'alien'
        ],
        'explanation': '',
        'fromMonsters': [
            'ウンフーク'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'Oceania'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'メテオストライク',
        'price': 802,
        'attack': 166,
        'defense': 5,
        'magic': 0,
        'speed': -8,
        'hp': 0,
        'additionalDamageJobs': clericJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Africa'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'おしおき棒',
        'price': 910,
        'attack': 171,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 50,
        'additionalDamageJobs': [
            'queen'
        ],
        'explanation': '',
        'fromMonsters': [
            'ホルス神'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'Africa',
                    'AfricaCave'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': '竜殺しの剣',
        'price': 875,
        'attack': 175,
        'defense': 5,
        'magic': 0,
        'speed': -3,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Africa',
                    'AntarcticaCave'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'よみのカマ',
        'price': 259,
        'attack': 176,
        'defense': 0,
        'magic': -2,
        'speed': -2,
        'hp': 50,
        'additionalDamageJobs': thiefJobTypes,
        'explanation': '',
        'fromMonsters': [
            '死の呼び子'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'Africa'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '燃える拳',
        'price': 287,
        'attack': 180,
        'defense': 0,
        'magic': 0,
        'speed': 10,
        'hp': 10,
        'additionalDamageJobs': gladiatorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'AfricaCave'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': '王家のハンマー',
        'price': 1,
        'attack': 181,
        'defense': 3,
        'magic': 3,
        'speed': -6,
        'hp': 10,
        'additionalDamageJobs': clericJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'AfricaCave'
                ],
                'vertexTypes': [
                    'KeyTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'めいふの杖',
        'price': 1,
        'attack': 185,
        'defense': 0,
        'magic': 16,
        'speed': -3,
        'hp': 0,
        'additionalDamageJobs': magicianJobTypes,
        'explanation': '',
        'fromMonsters': [
            'マコンデ'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'Africa'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ビートホーク',
        'price': 1,
        'attack': 190,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': [
            'robot'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'AfricaCave'
                ],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '狂剣ジャブロー',
        'price': 1,
        'attack': 193,
        'defense': 2,
        'magic': -2,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Antarctica',
                    'Arctic'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': '吹雪の杖',
        'price': 1,
        'attack': 199,
        'defense': 0,
        'magic': 10,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': magicianJobTypes,
        'explanation': '',
        'fromMonsters': [
            'ペギゴン'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'Arctic',
                    'HawaiianIslandsCave'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'アトミックアイス',
        'price': 1,
        'attack': 203,
        'defense': 3,
        'magic': 5,
        'speed': -5,
        'hp': 0,
        'additionalDamageJobs': clericJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Arctic',
                    'Antarctica'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'ゴッドブロー',
        'price': 1,
        'attack': 205,
        'defense': 0,
        'magic': 10,
        'speed': 15,
        'hp': 0,
        'additionalDamageJobs': gladiatorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'ArcticCave'
                ],
                'vertexTypes': [
                    'KeyTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'にくかい',
        'price': 2,
        'attack': 206,
        'defense': 0,
        'magic': -20,
        'speed': 0,
        'hp': 300,
        'additionalDamageJobs': [
            'alien'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'AntarcticaCave'
                ],
                'vertexTypes': [
                    'KeyTreasureField'
                ]
            }
        ]
    },
    {
        'name': '支配のナイフ',
        'price': 1,
        'attack': 208,
        'defense': 5,
        'magic': 5,
        'speed': 8,
        'hp': 0,
        'additionalDamageJobs': thiefJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'HawaiianIslands'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'ドカポンソード',
        'price': 1,
        'attack': 215,
        'defense': 1,
        'magic': 1,
        'speed': 1,
        'hp': 100,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'HawaiianIslandsCave'
                ],
                'vertexTypes': [
                    'KeyTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'バケモノの槍',
        'price': 444,
        'attack': 230,
        'defense': 20,
        'magic': 0,
        'speed': 20,
        'hp': 200,
        'additionalDamageJobs': warriorJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'HawaiianIslandsCave'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': '妖刀ニヒル',
        'price': 1,
        'attack': 244,
        'defense': 20,
        'magic': 15,
        'speed': 15,
        'hp': 150,
        'additionalDamageJobs': thiefJobTypes,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Atlantis'
                ],
                'vertexTypes': [
                    'KeyTreasureField'
                ]
            }
        ]
    },
    {
        'name': '神魔合竜剣',
        'price': 888,
        'attack': 300,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'additionalDamageJobs': [
            'devil'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [],
                'vertexTypes': []
            }
        ]
    }
]

export default weapons