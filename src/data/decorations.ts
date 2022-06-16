import { Decoration } from 'global'

const decorations: Decoration[] = [
    {
        'name': '力のグローブ',
        'price': 30,
        'attack': 5,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromMonsters': [
            'ハヌマーン'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '守のグローブ',
        'price': 30,
        'attack': 0,
        'defense': 5,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromMonsters': [
            '魔法の騎士'
        ],
        'fromVerticesQuery': [
            {
                'areas': [],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '気のグローブ',
        'price': 30,
        'attack': 0,
        'defense': 0,
        'magic': 5,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromMonsters': [
            'さまよう魂'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '速のグローブ',
        'price': 30,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 5,
        'hp': 0,
        'explanation': '',
        'fromMonsters': [
            'フリーズガスト'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '体のグローブ',
        'price': 30,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 20,
        'fromMonsters': [
            'スノーマン'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '剛のグローブ',
        'price': 50,
        'attack': 15,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
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
        'name': '鉄のグローブ',
        'price': 50,
        'attack': 0,
        'defense': 15,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromMonsters': [
            'ヨロイエビ'
        ],
        'fromVerticesQuery': [
            {
                'areas': [],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '法のグローブ',
        'price': 50,
        'attack': 0,
        'defense': 0,
        'magic': 15,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromMonsters': [
            'ゴーストレオ'
        ],
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
        'name': '忍のグローブ',
        'price': 50,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 15,
        'hp': 0,
        'explanation': '',
        'fromMonsters': [
            'アサシン',
            'ガママル'
        ],
        'fromVerticesQuery': [
            {
                'areas': [],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '命のグローブ',
        'price': 80,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 50,
        'explanation': '',
        'fromMonsters': [
            '土の精'
        ],
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'KeyTreasureField'
                ]
            }
        ]
    },
    {
        'name': '女神のリング',
        'price': 50,
        'attack': 5,
        'defense': 5,
        'magic': 5,
        'speed': 5,
        'hp': 0,
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
        'name': 'ロードオブリング',
        'price': 500,
        'attack': 15,
        'defense': 15,
        'magic': 15,
        'speed': 15,
        'hp': 0,
        'fromMonsters': [
            'ライディーン'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'HawaiianIslandsCave',
                    'Arctic'
                ],
                'vertexTypes': [
                    'RedTreasureField',
                    'KeyTreasureField'
                ]
            }
        ]
    },
    {
        'name': '破壊のリング',
        'price': 300,
        'attack': 30,
        'defense': 0,
        'magic': -30,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromMonsters': [
            'チタノザウロス',
            'グラディエーター'
        ],
        'fromVerticesQuery': [
            {
                'areas': [],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '神速のリング',
        'price': 300,
        'attack': 0,
        'defense': -30,
        'magic': 0,
        'speed': 30,
        'hp': 0,
        'fromMonsters': [
            'オセアニアデビル'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave',
                    'Atlantis'
                ],
                'vertexTypes': [
                    'KeyTreasureField',
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '魔人リング',
        'price': 300,
        'attack': -30,
        'defense': 0,
        'magic': 30,
        'speed': 0,
        'hp': 0,
        'fromMonsters': [
            'ゴールドギドラ'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'KeyTreasureField'
                ]
            }
        ]
    },
    {
        'name': '超人リング',
        'price': 0,
        'attack': -10,
        'defense': -10,
        'magic': -10,
        'speed': -10,
        'hp': 300,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Antarctica'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '炎のうでわ',
        'price': 12,
        'attack': 0,
        'defense': 0,
        'magic': 3,
        'speed': 0,
        'hp': 0,
        'fromMonsters': [
            'ウッディアン'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '氷のうでわ',
        'price': 12,
        'attack': 0,
        'defense': 0,
        'magic': 3,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '雷のうでわ',
        'price': 12,
        'attack': 0,
        'defense': 0,
        'magic': 3,
        'speed': 0,
        'hp': 0,
        'fromMonsters': [
            '神の目'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave',
                    'OceaniaCave'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '風のうでわ',
        'price': 12,
        'attack': 0,
        'defense': 0,
        'magic': 3,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave',
                    'SouthAmericaCave'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '地のうでわ',
        'price': 24,
        'attack': 0,
        'defense': 0,
        'magic': 3,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'ぼうえんゴーグル',
        'price': 7,
        'attack': 0,
        'defense': 3,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'みかわしゴーグル',
        'price': 7,
        'attack': 0,
        'defense': 3,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '水晶のネックレス',
        'price': 8,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'NorthAmericaCave',
                    'Atlantis'
                ],
                'vertexTypes': [
                    'KeyTreasureField',
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '変化のネックレス',
        'price': 0,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Oceania'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '鏡のネックレス',
        'price': 200,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
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
        'name': '回避のネックレス',
        'price': 0,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave',
                    'SouthAmericaCave'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '天使のネックレス',
        'price': 300,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'SouthAmericaCave',
                    'HawaiianIslandsCave',
                    'Atlantis'
                ],
                'vertexTypes': [
                    'RedTreasureField',
                    'KeyTreasureField',
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'ハートのくつ',
        'price': 180,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 3,
        'hp': 0,
        'fromMonsters': [
            'パッチー１号'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'AsiaCave'
                ],
                'vertexTypes': [
                    'KeyTreasureField'
                ]
            }
        ]
    },
    {
        'name': '勇者のくつ',
        'price': 150,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Oceania',
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '金のくつ',
        'price': 150,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 3,
        'hp': 0,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'ヒョウがら額当て',
        'price': 1,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 3,
        'hp': 0,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'EuropeCave'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'ゼブラがら額当て',
        'price': 1,
        'attack': 0,
        'defense': 0,
        'magic': 3,
        'speed': 0,
        'hp': 0,
        'fromMonsters': [
            'ペロ'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'NorthAmerica',
                    'Europe'
                ],
                'vertexTypes': [
                    'RedTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'ピーポのバッジ',
        'price': 500,
        'attack': 3,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromMonsters': [
            'セルモン'
        ],
        'fromVerticesQuery': [
            {
                'areas': [],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ワルサーバッジ',
        'price': 250,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'fromMonsters': [
            'ワルサー'
        ],
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Oceania'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': 'ウイウイバッジ',
        'price': 10,
        'attack': 1,
        'defense': 1,
        'magic': 1,
        'speed': 1,
        'hp': 10,
        'explanation': '',
        'fromMonsters': [
            'ウィウィ'
        ],
        'fromVerticesQuery': [
            {
                'areas': [],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '誠のピアス',
        'price': 65,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Atlantis'
                ],
                'vertexTypes': [
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '愛のピアス',
        'price': 65,
        'attack': 0,
        'defense': 0,
        'magic': 0,
        'speed': 0,
        'hp': 0,
        'explanation': '',
        'fromMonsters': [],
        'fromVerticesQuery': [
            {
                'areas': [],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': '極悪ピアス',
        'price': 100,
        'attack': 30,
        'defense': 30,
        'magic': 30,
        'speed': 30,
        'hp': 44,
        'explanation': '',
        'fromMonsters': [
            'キィ'
        ],
        'fromVerticesQuery': [
            {
                'areas': [],
                'vertexTypes': []
            }
        ]
    },
    {
        'name': 'ドカポンクラウン',
        'price': 2,
        'attack': 30,
        'defense': 30,
        'magic': 30,
        'speed': 30,
        'hp': 300,
        'explanation': '',
        'fromVerticesQuery': [
            {
                'areas': [
                    'Arctic',
                    'Antarctica',
                    'SouthAmericaCave',
                    'Atlantis'
                ],
                'vertexTypes': [
                    'RedTreasureField',
                    'WhiteTreasureField'
                ]
            }
        ]
    },
    {
        'name': '魔王の王かん',
        'price': 1,
        'attack': 444,
        'defense': 44,
        'magic': 44,
        'speed': 44,
        'hp': 444,
        'explanation': '',
        'fromMonsters': [],
        'fromVerticesQuery': [
            {
                'areas': [],
                'vertexTypes': []
            }
        ]
    }
]

export default decorations