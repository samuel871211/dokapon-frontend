import type { Job, JobTypes } from '../global'

const jobs: Job[] = [{
    type: 'beginner',
    name: '無職',
    levelUpPoint: {
        attack: 1,
        defense: 1,
        magic: 1,
        speed: 1,
        hp: 10
    },
    masterPoint: {
        attack: 1,
        defense: 1,
        magic: 1,
        speed: 1,
        hp: 10
    },
    bagSpace: {
        item: 4,
        magic: 4
    },
    masterRounds: 12,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'warrior',
    name: '戦士',
    levelUpPoint: {
        attack: 2,
        defense: 1,
        magic: 0,
        speed: 1,
        hp: 10
    },
    masterPoint: {
        attack: 1,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0
    },
    bagSpace: {
        item: 6,
        magic: 4
    },
    masterRounds: 4,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'magician',
    name: '魔法使い',
    levelUpPoint: {
        attack: 1,
        defense: 0,
        magic: 2,
        speed: 1,
        hp: 10
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 1,
        speed: 0,
        hp: 0
    },
    bagSpace: {
        item: 8,
        magic: 10
    },
    masterRounds: 4,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'cleric',
    name: '僧侶',
    levelUpPoint: {
        attack: 1,
        defense: 1,
        magic: 1,
        speed: 0,
        hp: 20
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 10
    },
    bagSpace: {
        item: 8,
        magic: 8
    },
    masterRounds: 4,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'thief',
    name: '盗賊',
    levelUpPoint: {
        attack: 1,
        defense: 1,
        magic: 0,
        speed: 2,
        hp: 10
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 1,
        hp: 0
    },
    bagSpace: {
        item: 10,
        magic: 4
    },
    masterRounds: 4,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'knight',
    name: 'ナイト',
    levelUpPoint: {
        attack: 2,
        defense: 1,
        magic: 0,
        speed: 1,
        hp: 10
    },
    masterPoint: {
        attack: 1,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0
    },
    bagSpace: {
        item: 8,
        magic: 4
    },
    masterRounds: 5,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'archMage',
    name: '大魔道',
    levelUpPoint: {
        attack: 1,
        defense: 0,
        magic: 2,
        speed: 1,
        hp: 10
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 1,
        speed: 0,
        hp: 0
    },
    bagSpace: {
        item: 8,
        magic: 12
    },
    masterRounds: 5,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'priest',
    name: '神官',
    levelUpPoint: {
        attack: 1,
        defense: 1,
        magic: 1,
        speed: 0,
        hp: 20
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 10
    },
    bagSpace: {
        item: 8,
        magic: 10
    },
    masterRounds: 5,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'bladeMaster',
    name: 'ソードマスター',
    levelUpPoint: {
        attack: 2,
        defense: 1,
        magic: 0,
        speed: 1,
        hp: 10
    },
    masterPoint: {
        attack: 1,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0
    },
    bagSpace: {
        item: 8,
        magic: 6
    },
    masterRounds: 7,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'necromancer',
    name: 'ネクロマンサー',
    levelUpPoint: {
        attack: 1,
        defense: 0,
        magic: 2,
        speed: 1,
        hp: 10
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 1,
        speed: 0,
        hp: 0
    },
    bagSpace: {
        item: 8,
        magic: 12
    },
    masterRounds: 7,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'exorcist',
    name: 'エクソシスト',
    levelUpPoint: {
        attack: 1,
        defense: 1,
        magic: 1,
        speed: 0,
        hp: 20
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 10
    },
    bagSpace: {
        item: 8,
        magic: 10
    },
    masterRounds: 7,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'pirate',
    name: '海賊',
    levelUpPoint: {
        attack: 1,
        defense: 1,
        magic: 0,
        speed: 2,
        hp: 10
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 1,
        hp: 0
    },
    bagSpace: {
        item: 10,
        magic: 6
    },
    masterRounds: 7,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'ninja',
    name: '忍者',
    levelUpPoint: {
        attack: 1,
        defense: 1,
        magic: 0,
        speed: 2,
        hp: 10
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 1,
        hp: 0
    },
    bagSpace: {
        item: 10,
        magic: 6
    },
    masterRounds: 7,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'gamester',
    name: 'ギャンブラー',
    levelUpPoint: {
        attack: 1,
        defense: 1,
        magic: 0,
        speed: 2,
        hp: 10
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 1,
        hp: 0
    },
    bagSpace: {
        item: 10,
        magic: 8
    },
    masterRounds: 7,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'beastTamer',
    name: '怪獣使い',
    levelUpPoint: {
        attack: 1,
        defense: 1,
        magic: 1,
        speed: 1,
        hp: 10
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 10
    },
    bagSpace: {
        item: 8,
        magic: 8
    },
    masterRounds: 8,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'robot',
    name: '機械の体',
    levelUpPoint: {
        attack: 1,
        defense: 3,
        magic: 0,
        speed: 0,
        hp: 10
    },
    masterPoint: {
        attack: 0,
        defense: 1,
        magic: 0,
        speed: 0,
        hp: 0
    },
    bagSpace: {
        item: 12,
        magic: 6
    },
    masterRounds: 8,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'carpenter',
    name: '大工',
    levelUpPoint: {
        attack: 2,
        defense: 0,
        magic: 0,
        speed: 1,
        hp: 20
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 10
    },
    bagSpace: {
        item: 10,
        magic: 4
    },
    masterRounds: 4,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'nurse',
    name: 'ナース',
    levelUpPoint: {
        attack: 0,
        defense: 1,
        magic: 0,
        speed: 1,
        hp: 30
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 10
    },
    bagSpace: {
        item: 12,
        magic: 8
    },
    masterRounds: 4,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'monk',
    name: 'モンク',
    levelUpPoint: {
        attack: 1,
        defense: 0,
        magic: 1,
        speed: 1,
        hp: 20
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 10
    },
    bagSpace: {
        item: 8,
        magic: 6
    },
    masterRounds: 5,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'dancer',
    name: 'おどり子',
    levelUpPoint: {
        attack: 0,
        defense: 0,
        magic: 2,
        speed: 2,
        hp: 10
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 1,
        hp: 0
    },
    bagSpace: {
        item: 8,
        magic: 10
    },
    masterRounds: 5,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'alien',
    name: '宇宙人',
    levelUpPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 50
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 10
    },
    bagSpace: {
        item: 12,
        magic: 12
    },
    masterRounds: 7,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'queen',
    name: '女王様',
    levelUpPoint: {
        attack: 2,
        defense: 0,
        magic: 1,
        speed: 0,
        hp: 20
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 10
    },
    bagSpace: {
        item: 10,
        magic: 10
    },
    masterRounds: 7,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'gladiator',
    name: '格闘士',
    levelUpPoint: {
        attack: 1,
        defense: 0,
        magic: 1,
        speed: 1,
        hp: 20
    },
    masterPoint: {
        attack: 1,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0
    },
    bagSpace: {
        item: 8,
        magic: 6
    },
    masterRounds: 8,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'elves',
    name: '精霊使い',
    levelUpPoint: {
        attack: 0,
        defense: 0,
        magic: 3,
        speed: 1,
        hp: 10
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 1,
        speed: 0,
        hp: 0
    },
    bagSpace: {
        item: 10,
        magic: 12
    },
    masterRounds: 8,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'royal',
    name: '王族',
    levelUpPoint: {
        attack: 2,
        defense: 2,
        magic: 2,
        speed: 2,
        hp: 20
    },
    masterPoint: {
        attack: 1,
        defense: 1,
        magic: 1,
        speed: 1,
        hp: 10
    },
    bagSpace: {
        item: 12,
        magic: 12
    },
    masterRounds: 12,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'devil',
    name: 'デビラーマン',
    levelUpPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0
    },
    bagSpace: {
        item: 0,
        magic: 0
    },
    masterRounds: 0,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}, {
    type: 'anotherDevil',
    name: 'アナザーデビラー',
    levelUpPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0
    },
    masterPoint: {
        attack: 0,
        defense: 0,
        magic: 0,
        speed: 0,
        hp: 0
    },
    bagSpace: {
        item: 0,
        magic: 0
    },
    masterRounds: 0,
    pay: 0,
    explanation: '',
    fieldSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    battleSpeciality: {
        name: '',
        briefExplanation: '',
        fullExplanation: ''
    },
    weeklyBonus: '',
    allowMale: true,
    allowFemale: true
}]

export const warriorJobTypes: JobTypes[] = ['warrior', 'knight', 'bladeMaster']
export const magicianJobTypes: JobTypes[] = ['magician', 'archMage', 'necromancer', 'elves']
export const clericJobTypes: JobTypes[] = ['cleric', 'priest', 'exorcist']
export const thiefJobTypes: JobTypes[] = ['thief', 'pirate', 'ninja', 'gamester']
export const gladiatorJobTypes: JobTypes[] = ['monk', 'gladiator']

export default jobs