import type { JobTypes, Job } from "global";

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

const jobs = satisfiesRecords<Job>()({
  beginner: {
    name: "無職",
    levelUpPoint: {
      attack: 1,
      defense: 1,
      magic: 1,
      speed: 1,
      hp: 10,
    },
    masterPoint: {
      attack: 1,
      defense: 1,
      magic: 1,
      speed: 1,
      hp: 10,
    },
    bagSpace: {
      items: 4,
      magicBooks: 4,
    },
    masterRounds: 12,
    price: 0,
    pay: 0,
    briefExplanation: "職につかない自由人。\n仕事が無いのでお金も無い。",
    fullExplanation:
      "職につかない自由人。\n仕事が無いのでお金も無い。\n無職を続けると⋯\n⋯引きこもりになる?",
    fieldSpecialty: {
      type: "manual",
      name: "ひろう",
      briefExplanation: "自分の足元を探して\nアイテムか魔法か金をひろう。",
      fullExplanation:
        "自分の足元を探して、アイテムか魔法か\n金をひろう。何もないことの方が多い。\nカバンコマンドは使用できなくなる。",
    },
    battleSpecialty: {
      name: "土下座",
      briefExplanation: "土下座して小ゼニを払い、\n相手にゆるしてもらう。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  warrior: {
    name: "戦士",
    levelUpPoint: {
      attack: 2,
      defense: 1,
      magic: 0,
      speed: 1,
      hp: 10,
    },
    masterPoint: {
      attack: 1,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 0,
    },
    bagSpace: {
      items: 6,
      magicBooks: 4,
    },
    masterRounds: 4,
    price: 1200,
    pay: 2400,
    briefExplanation:
      "攻撃力でガンガン行く職業。\n武器を使った物理攻撃が得意だが、\n魔力が上がらないので魔法には弱い。",
    fullExplanation:
      "攻撃力でガンガン行く職業。\n物理攻撃が得意だが、魔力が\n上がらないので魔法には弱い。\n戦いに明けくれた戦士は、\n更なる地位に昇格するという。",
    fieldSpecialty: {
      type: "auto",
      name: "気合い",
      briefExplanation: "ターン開始時に\nたまに攻撃力が上がる。",
      fullExplanation:
        "ターン開始時に、たまに攻撃力が上がる。\nさらにアイテムで攻撃力を上げられる。",
    },
    battleSpecialty: {
      name: "力ため",
      briefExplanation: "力をためて攻撃力を上げる。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  magician: {
    name: "魔法使い",
    levelUpPoint: {
      attack: 1,
      defense: 0,
      magic: 2,
      speed: 1,
      hp: 10,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 1,
      speed: 0,
      hp: 0,
    },
    bagSpace: {
      items: 8,
      magicBooks: 10,
    },
    masterRounds: 4,
    price: 1200,
    pay: 2400,
    briefExplanation:
      "高い魔力でビシビシ行く職業。\n魔法による攻撃は強力だが、\n防御力が上がらないので打たれ弱い。",
    fullExplanation:
      "高い魔力でビシビシ行く職業。\n魔法攻撃は強力だが、防御力が\n上がらないので打たれ弱い。\n魔道を追求すると、\n更なる地位に昇格するという。",
    fieldSpecialty: {
      type: "auto",
      name: "連魔",
      briefExplanation: "魔法を2回連続で使用できる。",
      fullExplanation:
        "魔法を2回連続で使用できる。\nただし、魔法を使用すると\nアイテムは使用できなくなる。",
    },
    battleSpecialty: {
      name: "魔力ため",
      briefExplanation: "精神を集中させて\n魔力を上げる。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  cleric: {
    name: "僧侶",
    levelUpPoint: {
      attack: 1,
      defense: 1,
      magic: 1,
      speed: 0,
      hp: 20,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 10,
    },
    bagSpace: {
      items: 8,
      magicBooks: 8,
    },
    masterRounds: 4,
    price: 1200,
    pay: 2400,
    briefExplanation:
      "HPが高い職業。\n回復の力や打たれ強さはあるが、\n素早さが上がらないのでミスしやすい。",
    fullExplanation:
      "HPが高い職業。\n打たれ強さはあるが、\n素早さが上がらないので\n攻撃をミスしやすい。\n神への信仰心を忘れねば、\n更なる地位に昇格するという。",
    fieldSpecialty: {
      type: "auto",
      name: "神頼み",
      briefExplanation: "ターン開始時に\nたまにHPが回復する。",
      fullExplanation:
        "ターン開始時に、たまにHPが回復する。\n回復量はHPの50〜80%。",
    },
    battleSpecialty: {
      name: "回復",
      briefExplanation: "聖なる祈りで\nHPを多少回復させる。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  thief: {
    name: "盗賊",
    levelUpPoint: {
      attack: 1,
      defense: 1,
      magic: 0,
      speed: 2,
      hp: 10,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 1,
      hp: 0,
    },
    bagSpace: {
      items: 10,
      magicBooks: 4,
    },
    masterRounds: 4,
    price: 1200,
    pay: 2400,
    briefExplanation:
      "素早さがピカイチの職業。\nそのスピードで攻撃をよけたりするが、\n他にこれといった特徴が無い。",
    fullExplanation:
      "素早さがピカイチの職業。\n攻撃をよけたりすることもある。\n盗賊のスキルがあると、\n他の職業にはば広く\n転職できるようになる。",
    fieldSpecialty: {
      type: "manual",
      name: "盗む",
      briefExplanation: "他の誰かから\nアイテムか魔法を盗む。",
      fullExplanation:
        "他の誰かからアイテムか魔法を盗む。カバンコマンドは使用できなくなる。",
    },
    battleSpecialty: {
      name: "スリ",
      briefExplanation: "素早い動きで相手の\n所持品を盗む。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  knight: {
    name: "ナイト",
    levelUpPoint: {
      attack: 2,
      defense: 1,
      magic: 0,
      speed: 1,
      hp: 10,
    },
    masterPoint: {
      attack: 1,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 0,
    },
    bagSpace: {
      items: 8,
      magicBooks: 4,
    },
    masterRounds: 5,
    price: 8000,
    pay: 7400,
    briefExplanation:
      "戦士の上級職。\n戦士とナイトを極めれば、\n更なる地位に昇格するという。",
    fullExplanation:
      "戦士の上級職。\n騎士道を重んじ、\n技と心をみがいた剣士。\n戦士とナイトを極めた者は、\n更なる地位に昇格するという。",
    fieldSpecialty: {
      type: "auto",
      name: "騎士の魂",
      briefExplanation: "ターン開始時に\nたまに攻撃力か防御力が上がる。",
      fullExplanation:
        "ターン開始時に、たまに\n攻撃力か防御力が上がる。\nさらにアイテムで同パラメータを上げられる。",
    },
    battleSpecialty: {
      name: "騎士の魂",
      briefExplanation: "精神統一で攻撃力を上げる。\nたまに防御力も上がる。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  archmage: {
    name: "大魔導",
    levelUpPoint: {
      attack: 1,
      defense: 0,
      magic: 2,
      speed: 1,
      hp: 10,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 1,
      speed: 0,
      hp: 0,
    },
    bagSpace: {
      items: 8,
      magicBooks: 12,
    },
    masterRounds: 5,
    price: 8000,
    pay: 7400,
    briefExplanation:
      "魔法使いの上級職。\n魔法使いと大魔導を極めれば、\n更なる地位に昇格するという。",
    fullExplanation:
      "魔法使いの上級職。\n魔道を追求した最上位の魔導師。\n魔法使いと大魔導を極めた者は、\n更なる地位に昇格するという。",
    fieldSpecialty: {
      type: "auto",
      name: "大連魔",
      briefExplanation: "魔法を3回連続で使用できる。",
      fullExplanation:
        "魔法を3回連続で使用できる。\nただし、魔法を使用すると\nアイテムは使用できなくなる。",
    },
    battleSpecialty: {
      name: "禁呪",
      briefExplanation:
        "禁じられた呪文をとなえ、相手の\n攻撃と防御のコマンドを封印する。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  priest: {
    name: "神官",
    levelUpPoint: {
      attack: 1,
      defense: 1,
      magic: 1,
      speed: 0,
      hp: 20,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 10,
    },
    bagSpace: {
      items: 8,
      magicBooks: 10,
    },
    masterRounds: 5,
    price: 8000,
    pay: 7400,
    briefExplanation:
      "僧侶の上級職。\n僧侶と神官を極めれば、\n更なる地位に昇格するという。",
    fullExplanation:
      "僧侶の上級職。\nHPの他、ステータス異常も回復\nさせる力をさずかった神の使い。\n僧侶と神官を極めた者は、\n更なる地位に昇格するという。",
    fieldSpecialty: {
      type: "auto",
      name: "天の声",
      briefExplanation:
        "ターン開始時に、たまにHPや\nステータス異常が回復する。",
      fullExplanation:
        "ターン開始時に、たまに\nHPかステータス異常が回復する。\n(コロリ)は回復しない。",
    },
    battleSpecialty: {
      name: "奇跡の祈り",
      briefExplanation:
        "神の加護によりHPとステータスを\n完全に回復し、防御カも上げる。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  bladeMaster: {
    name: "ソードマスター",
    levelUpPoint: {
      attack: 2,
      defense: 1,
      magic: 0,
      speed: 1,
      hp: 10,
    },
    masterPoint: {
      attack: 1,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 0,
    },
    bagSpace: {
      items: 8,
      magicBooks: 6,
    },
    masterRounds: 7,
    price: 30000,
    pay: 14000,
    briefExplanation:
      "戦士系の最上級職。\n物理攻撃のエキスパートで、\n戦いを極めた最強の剣士。",
    fullExplanation:
      "戦士系の最上級職。\n物理攻撃のエキスパートで、\n戦いを極めた最強の剣士。\n反撃不能な必殺技を覚え、\n究極の進化をとげた。",
    fieldSpecialty: {
      type: "auto",
      name: "最強の証",
      briefExplanation:
        "ターン開始時に、たまに\n攻撃力、防御力、素早さが上がる。",
      fullExplanation:
        "ターン開始時に、たまに\n攻撃力、防御力、素早さが上がる。\nさらにアイテムで同パラメータを上げられる。",
    },
    battleSpecialty: {
      name: "超必殺",
      briefExplanation: "反撃不可能な必殺技を出す。\nHPが低いと命中率UP。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  necromancer: {
    name: "ネクロマンサー",
    levelUpPoint: {
      attack: 1,
      defense: 0,
      magic: 2,
      speed: 1,
      hp: 10,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 1,
      speed: 0,
      hp: 0,
    },
    bagSpace: {
      items: 8,
      magicBooks: 12,
    },
    masterRounds: 7,
    price: 30000,
    pay: 14000,
    briefExplanation:
      "魔法使い系の最上級職。\n魔法攻撃のエキスパートで、\n禁じられた呪文を使う闇の魔導師。",
    fullExplanation:
      "魔法使い系の最上級職。\n魔法攻撃のエキスパートで、\n禁じられた呪文を使う闇の魔導師。\n古代より伝わる闇の邪法を使い、\n相手を戦闘不能な状態にする。",
    fieldSpecialty: {
      type: "manual",
      name: "闇擊",
      briefExplanation:
        "フィールド魔法を持ってなくても、\n他の誰かを魔法で攻撃できる。",
      fullExplanation:
        "他の誰かを何らかの魔法で攻撃する。\nたまに魔法が暴発することもある。\nカバンコマンドは使用できなくなる。",
    },
    battleSpecialty: {
      name: "邢法",
      briefExplanation:
        "古代より伝わる闇の呪文をとなえ、\n様々なステータス異常にする。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  exorcist: {
    name: "エクソシスト",
    levelUpPoint: {
      attack: 1,
      defense: 1,
      magic: 1,
      speed: 0,
      hp: 20,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 10,
    },
    bagSpace: {
      items: 8,
      magicBooks: 10,
    },
    masterRounds: 7,
    price: 30000,
    pay: 14000,
    briefExplanation:
      "僧侶系の最上級職。\n奇跡をも操ることが可能な\n光の聖職者。",
    fullExplanation:
      "僧侶系の最上級職。\n奇跡をも操ることが可能な\n光の聖職者。\n神からさずかった偉大なる力は\n死さえも超越する。",
    fieldSpecialty: {
      type: "auto",
      name: "奇跡",
      briefExplanation:
        "ターン開始時に、たまにHPと\nステータス異常が完全回復する。",
      fullExplanation:
        "ターン開始時に、たまに\nHPとステータス異常が完全回復する。",
    },
    battleSpecialty: {
      name: "復活の光",
      briefExplanation: "神へ祈りをささげ、\n死亡しても復活できるようにする。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  pirate: {
    name: "海賊",
    levelUpPoint: {
      attack: 1,
      defense: 1,
      magic: 0,
      speed: 2,
      hp: 10,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 1,
      hp: 0,
    },
    bagSpace: {
      items: 10,
      magicBooks: 6,
    },
    masterRounds: 7,
    price: 20000,
    pay: 29000,
    briefExplanation:
      "盗賊系の最上級職の一つ。\n七つの海をかけ抜ける荒くれ者。",
    fullExplanation:
      "盗賊の上級職の一つ。\n七つの海をかけ抜ける荒くれ者。\n盗賊の技と、戦士の攻撃力を\n極めていないと転職できない。\nいかなる状況からも、\n盗みを成功させる技術を持つ。\n船の上での戦闘は大の得意。",
    fieldSpecialty: {
      type: "manual",
      name: "砲擊",
      briefExplanation: "他の誰かを大砲で攻撃する。",
      fullExplanation:
        "同マップ内の誰かを大砲で攻撃する。\n攻撃力は3段階あり、どの弾が出るかは不明。\nカバンコマンドは使用できなくなる。",
    },
    battleSpecialty: {
      name: "とんずら",
      briefExplanation: "相手の所持品を盗み\n戦闘から離脱する。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  ninja: {
    name: "忍者",
    levelUpPoint: {
      attack: 1,
      defense: 1,
      magic: 0,
      speed: 2,
      hp: 10,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 1,
      hp: 0,
    },
    bagSpace: {
      items: 10,
      magicBooks: 6,
    },
    masterRounds: 7,
    price: 20000,
    pay: 29000,
    briefExplanation:
      "盗賊系の最上級職の一つ。\n闇にひそみ密かに敵を狙う暗殺者。\n忍術と言う怪しい術を使う。",
    fullExplanation:
      "盗賊の上級職の一つ。\n闇にひそみ密かに敵を狙う暗殺者。\n盗賊の技と、魔法使いの魔道を\n極めていないと転職できない。\n様々な忍術を使うことができる。",
    fieldSpecialty: {
      type: "manual",
      name: "忍法",
      briefExplanation: "様々な忍法を使う。",
      fullExplanation:
        "隠れ身、石地蔵、高飛び、\nクナまき、ガマ変化といった忍法を使う。\nカバンコマンドは使用できなくなる。",
    },
    battleSpecialty: {
      name: "暗殺",
      briefExplanation: "秘伝の奥義で相手を攻撃し、\nたまにそく死させる。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  gamester: {
    name: "ギャンブラー",
    levelUpPoint: {
      attack: 1,
      defense: 1,
      magic: 0,
      speed: 2,
      hp: 10,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 1,
      hp: 0,
    },
    bagSpace: {
      items: 10,
      magicBooks: 8,
    },
    masterRounds: 7,
    price: 20000,
    pay: 29000,
    briefExplanation:
      "盗賊系の最上級職の一つ。\nいかさま技は天下一の\nさすらいのとばく師。",
    fullExplanation:
      "盗賊の上級職の一つ。\nいかさま技は天下一の\nさすらいのとばく師。\n盗賊の技を極め、無職の心を少し\n知っていないと転職できない。\nスリルを追い求め\n最強の博打技を身に付けた。",
    fieldSpecialty: {
      type: "manual",
      name: "博打",
      briefExplanation:
        "カードをめくって出た数だけ、\nアイテムと魔法を使用できる。",
      fullExplanation:
        "2枚のカードのどちらかをめくり、\nそのカードに書かれた数ずつ、\nアイテムと魔法を使用できる。",
    },
    battleSpecialty: {
      name: "いかさま",
      briefExplanation:
        "戦闘中、あらゆるいかさまをし、\n戦いが自分に有利になるようにする。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  beastTamer: {
    name: "怪獣使い",
    levelUpPoint: {
      attack: 1,
      defense: 1,
      magic: 1,
      speed: 1,
      hp: 10,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 10,
    },
    bagSpace: {
      items: 8,
      magicBooks: 8,
    },
    masterRounds: 8,
    price: 50000,
    pay: 53000,
    briefExplanation:
      "世の中のモンスターが友達。\nモンスターが代わりに戦ってくれるが、\n呼べるモンスターは選べない。",
    fullExplanation:
      "世界中のモンスターの半分と\n出会った結果、モンスター達が\n友達になってくれた。\n戦いの時は、友情でむすばれた\nモンスター達が助けに来てくれる。\nでも弱いやつが助けに来るかも。\n呼ぶには体力をしょうもうする。",
    fieldSpecialty: {
      type: "auto",
      name: "連続使用",
      briefExplanation: "アイテムとフィールド魔法を\n1回ずつ使用できる。",
      fullExplanation:
        "アイテムと魔法を1回ずつ使用できる。\nどちらから使っても1回ずつ使用可能。",
    },
    battleSpecialty: {
      name: "呼ぶ",
      briefExplanation: "モンスターを呼び出し\n代わりに戦わせる。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  robot: {
    name: "機械の体",
    levelUpPoint: {
      attack: 1,
      defense: 3,
      magic: 0,
      speed: 0,
      hp: 10,
    },
    masterPoint: {
      attack: 0,
      defense: 1,
      magic: 0,
      speed: 0,
      hp: 0,
    },
    bagSpace: {
      items: 12,
      magicBooks: 6,
    },
    masterRounds: 8,
    price: 50000,
    pay: 24000,
    briefExplanation: "全身を鋼鉄の機械に変えた\nデジタルな職業。",
    fullExplanation:
      "全身を鋼鉄の機械に改造した\nデジタルな職業。\nナイト、大魔導、神官の3職業を\n極めた者が、改造してもらえる。\n相手の体をスキャンすることで、\nそのカを自分の物にできる。",
    fieldSpecialty: {
      type: "manual",
      name: "プログラム",
      briefExplanation: "0〜6マスまでの好きな場所へ\n移動できる。",
      fullExplanation:
        "移動プログラムを起動させて、\n0〜6マスまでの好きな場所へ移動できる。",
    },
    battleSpecialty: {
      name: "データコピー",
      briefExplanation:
        "相手をスキャニングし、自分より\n高いパラメータをコピーする。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  carpenter: {
    name: "大工",
    levelUpPoint: {
      attack: 2,
      defense: 0,
      magic: 0,
      speed: 1,
      hp: 20,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 10,
    },
    bagSpace: {
      items: 10,
      magicBooks: 4,
    },
    masterRounds: 4,
    price: 1000,
    pay: 18000,
    briefExplanation:
      "男性車用職業。\nたくみの技で、建物の建造や修理、\n時には破壊などをする。",
    fullExplanation:
      "特殊なアイテムを使うことにより\n転職可能になる男性車用職業。\nたくみの技で、建物の建造や修理、\n時には破壊などをする。\n大工のきたえ上げた肉体は、\nケンカが強くなるのに役立つ。",
    fieldSpecialty: {
      type: "manual",
      name: "職人芸",
      briefExplanation:
        "自分の村を発展させたり、他人の\n村をさびれさせることができる。",
      fullExplanation:
        "自分のいる村や町を発展させられる。\n他人の町や市ならさびれさせられる。\nカバンコマンドは使用できなくなる。",
    },
    battleSpecialty: {
      name: "べらんめえ!",
      briefExplanation:
        "自分に活を入れ攻撃力を上げる。\nしかし、魔力が下がる。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  nurse: {
    name: "ナース",
    levelUpPoint: {
      attack: 0,
      defense: 1,
      magic: 0,
      speed: 1,
      hp: 30,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 10,
    },
    bagSpace: {
      items: 12,
      magicBooks: 8,
    },
    masterRounds: 4,
    price: 1000,
    pay: 18000,
    briefExplanation:
      "女性車用職業。\n他人のちりょうは苦手だが、\n自分のちりょう術は心得ている。",
    fullExplanation:
      "特殊なアイテムを使うことにより\n転職可能になる女性専用職業。\n他人のちりょうは苦手だが、\n自分のちりょう術は心得ている。\nナースの優しさを知った者は、\n相手を痛めつける職業に就いても、\n優しさを忘れずにいられる。",
    fieldSpecialty: {
      type: "manual",
      name: "入院",
      briefExplanation: "1日休んで、HPと特定の\nステータス異常を回復する。",
      fullExplanation:
        "1日休んで、HPとステータス異常を\n全回復する。 (コロリ)は回復しない。\n使うとターン終了となる。",
    },
    battleSpecialty: {
      name: "注射",
      briefExplanation: "怪しい注射で相手の\nパラメータの1つをガクっと下げる。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  monk: {
    name: "モンク",
    levelUpPoint: {
      attack: 1,
      defense: 0,
      magic: 1,
      speed: 1,
      hp: 20,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 10,
    },
    bagSpace: {
      items: 8,
      magicBooks: 6,
    },
    masterRounds: 5,
    price: 5000,
    pay: 40000,
    briefExplanation: "素手の闘いを得意とし、\n回復の力を持つ男の修行僧。",
    fullExplanation:
      "己の肉体を武器とし、\n高い攻撃カといやしのカを持つ\n男の修行僧。\n戦士、僧侶、大工の職業を\n少し熟練すれば、転職できる。\n武器を持たずに素手で戦うと、\n攻撃力がひやく的に上がる。",
    fieldSpecialty: {
      type: "manual",
      name: "めいそう",
      briefExplanation: "HPを多少回復した上、\n素早さを上げる。",
      fullExplanation:
        "HPを多少回復した上、素早さを上げる。\nカバンコマンドは使用できなくなる。",
    },
    battleSpecialty: {
      name: "怒りの炎",
      briefExplanation:
        "気合いで、物理ダメージを受ける\nたびに攻撃力が上がるようにする。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  dancer: {
    name: "おどり子",
    levelUpPoint: {
      attack: 0,
      defense: 0,
      magic: 2,
      speed: 2,
      hp: 10,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 1,
      hp: 0,
    },
    bagSpace: {
      items: 8,
      magicBooks: 10,
    },
    masterRounds: 5,
    price: 5000,
    pay: 110000,
    briefExplanation:
      "色っぽい女性専用職業。\n様々なおどりで人々を魅了したり、\n自分の気分を盛り上げたりする。",
    fullExplanation:
      "色っぽい女性車用職業。\n様々なおどりで人々を魅了したり、\n自分の気分を盛り上げたりする。\n盗賊の身軽さと、\n僧侶と魔法使いの神秘の力を\n少し熟練すれば転職できる。",
    fieldSpecialty: {
      type: "manual",
      name: "舞い",
      briefExplanation: "いろいろな舞いで自分に対して\n様々な良い効果を得る。",
      fullExplanation:
        "いろいろな舞いで自分に対して\n様々な良い効果を得る。\nカバンコマンドは使用できなくなる。",
    },
    battleSpecialty: {
      name: "魅了",
      briefExplanation:
        "妖しい視線で相手を魅了し、\n攻撃側のコマンドを全て禁止する。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  alien: {
    name: "宇宙人",
    levelUpPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 50,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 10,
    },
    bagSpace: {
      items: 12,
      magicBooks: 12,
    },
    masterRounds: 7,
    price: 20000,
    pay: 130000,
    briefExplanation:
      "宇宙からやって来たナゾの職業。\nどうやらオスらしい。\n不思議な力で人々をまどわす。",
    fullExplanation:
      "宇宙からやって来たナゾの職業。\nどうやらオスらしい。\n不思議な力で人々をまどわす。\n無職でずっと\nプラプラしていた者が、\nUFOにさらわれ改造された姿。",
    fieldSpecialty: {
      type: "auto",
      name: "ぞうしょく",
      briefExplanation: "ターン開始時に、たまに\nアイテムか魔法が増える。",
      fullExplanation:
        "ターン開始時に、たまに\nアイテムか魔法が増える。\n何が増えるかはランダム。",
    },
    battleSpecialty: {
      name: "????",
      briefExplanation:
        "他の職業の特技が使える。\n何が選ばれるかは分からない。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  queen: {
    name: "女王様",
    levelUpPoint: {
      attack: 2,
      defense: 0,
      magic: 1,
      speed: 0,
      hp: 20,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 10,
    },
    bagSpace: {
      items: 10,
      magicBooks: 10,
    },
    masterRounds: 7,
    price: 20000,
    pay: 55000,
    briefExplanation:
      "チョット大人なおネェさんの職業。\n人をカワイがるのを仕事としている。",
    fullExplanation:
      "人をかわいがるのを仕事とする\nチョット大人なおネェさんの職業。\nおどり子のセクシーさと、\nナースの優しさと、\nナイトの攻撃の技を\n半分以上熟練した女性が\n愛に目覚めた姿。",
    fieldSpecialty: {
      type: "manual",
      name: "かわいがる",
      briefExplanation:
        "他人の村で村長をかわいがり、\n上手くいくと自分の村になる。",
      fullExplanation:
        "他人の村、町、市で村長をかわいがる。\n村長を手なずけられると、自分の物になる。\nカバンコマンドは使用できなくなる。",
    },
    battleSpecialty: {
      name: "ヒートUP",
      briefExplanation:
        "攻撃力を上げ、さらにひっぱたく\nたびに攻撃力が上がるようにする。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  gladiator: {
    name: "格闘士",
    levelUpPoint: {
      attack: 1,
      defense: 0,
      magic: 1,
      speed: 1,
      hp: 20,
    },
    masterPoint: {
      attack: 1,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 0,
    },
    bagSpace: {
      items: 8,
      magicBooks: 6,
    },
    masterRounds: 8,
    price: 50000,
    pay: 64000,
    briefExplanation:
      "モンクの上級職。\n己の肉体を最強の武器とする\n男の格闘王。",
    fullExplanation:
      "モンクの上級職。\n最強の格闘術と気功を極め、\n立ちふさがる者全てを倒す。\nモンク、ナイト、神官を\n極めて、格闘王に昇格した姿。\n武器を持たずに素手で戦うと、\n攻撃力がひやく的に上がる。",
    fieldSpecialty: {
      type: "manual",
      name: "燃える魂",
      briefExplanation: "現HPを半分に減らし\n攻撃力、防御力、素早さを上げる。",
      fullExplanation:
        "現HPを半分に減らし、\n攻撃力、防御力、素早さを上げる。\nカバンコマンドは使用できなくなる。",
    },
    battleSpecialty: {
      name: "闘いの炎",
      briefExplanation: "闘志を燃やし、HP以外の\nパラメータを上げる。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  elves: {
    name: "精霊使い",
    levelUpPoint: {
      attack: 0,
      defense: 0,
      magic: 3,
      speed: 1,
      hp: 10,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 1,
      speed: 0,
      hp: 0,
    },
    bagSpace: {
      items: 10,
      magicBooks: 12,
    },
    masterRounds: 8,
    price: 50000,
    pay: 19000,
    briefExplanation:
      "精霊の声を聞き、\nその力を使うことができる職業。\n精霊の声を聞けるのは女性のみ。",
    fullExplanation:
      "魔法使い系のもう一つの最上級職。\n精霊の声を聞き、その力を\n使うことができる職業。\n精霊の声が聞けるのは女性のみ。\n大魔導、神官、おどり子の\n職業を極めた女性の前に、\n精霊はその姿を現す。",
    fieldSpecialty: {
      type: "manual",
      name: "精霊の召喚",
      briefExplanation: "精霊達の力を借りて\n他の誰かを攻撃する。",
      fullExplanation:
        "精霊達の力を借りて他の誰かを攻撃する。\nカバンコマンドは使用できなくなる。",
    },
    battleSpecialty: {
      name: "精霊の加護",
      briefExplanation:
        "光の精霊の加護を受けて、自分の\nパラメータをいくつか上げる。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  royal: {
    name: "王族",
    levelUpPoint: {
      attack: 2,
      defense: 2,
      magic: 2,
      speed: 2,
      hp: 20,
    },
    masterPoint: {
      attack: 1,
      defense: 1,
      magic: 1,
      speed: 1,
      hp: 10,
    },
    bagSpace: {
      items: 12,
      magicBooks: 12,
    },
    masterRounds: 12,
    price: 300000,
    pay: 1600000,
    briefExplanation:
      "全ての職業になれる者だけが\n転職をゆるされる究極の職業。",
    fullExplanation:
      "全ての職業になれる者だけが\nドカポン王に転職をゆるされる\n究極の職業。\nその能力も究極といわれる。",
    fieldSpecialty: {
      type: "auto",
      name: "特権",
      briefExplanation: "アイテムと魔法を\n持っているだけ使える。",
      fullExplanation:
        "アイテムと魔法を持っているだけ使える。\nまさに王族に与えられた特権。",
    },
    battleSpecialty: {
      name: "命令",
      briefExplanation:
        "王族の権力を最大限に利用して、\n魔物に去るように命令する。",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  devil: {
    name: "デビラーマン",
    levelUpPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 0,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 0,
    },
    bagSpace: {
      items: 0,
      magicBooks: 0,
    },
    masterRounds: 0,
    price: 0,
    pay: 0,
    briefExplanation: "",
    fullExplanation: "",
    fieldSpecialty: {
      /**
       * @todo 待確認
       */
      type: "auto",
      name: "",
      briefExplanation: "",
      fullExplanation: "",
    },
    battleSpecialty: {
      name: "",
      briefExplanation: "",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
  anotherDevil: {
    name: "アナザーデビラー",
    levelUpPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 0,
    },
    masterPoint: {
      attack: 0,
      defense: 0,
      magic: 0,
      speed: 0,
      hp: 0,
    },
    bagSpace: {
      items: 0,
      magicBooks: 0,
    },
    masterRounds: 0,
    price: 0,
    pay: 0,
    briefExplanation: "",
    fullExplanation: "",
    fieldSpecialty: {
      /**
       * @todo 待確認
       */
      type: "auto",
      name: "",
      briefExplanation: "",
      fullExplanation: "",
    },
    battleSpecialty: {
      name: "",
      briefExplanation: "",
      fullExplanation: "",
    },
    weeklyBonus: "",
    allowMale: true,
    allowFemale: true,
  },
});

export const basicJobs: JobTypes[] = [
  "warrior",
  "magician",
  "cleric",
  "thief",
  "beginner",
];
export const warriorJobTypes: JobTypes[] = ["warrior", "knight", "bladeMaster"];
export const magicianJobTypes: JobTypes[] = [
  "magician",
  "archmage",
  "necromancer",
  "elves",
];
export const clericJobTypes: JobTypes[] = ["cleric", "priest", "exorcist"];
export const thiefJobTypes: JobTypes[] = [
  "thief",
  "pirate",
  "ninja",
  "gamester",
];
export const gladiatorJobTypes: JobTypes[] = ["monk", "gladiator"];
export default jobs;
