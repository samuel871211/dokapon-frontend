import React from 'react'

type steps =    
    'SelectGoalType' |
    'GoalInputDialog' |
    'SelectNumberOfPlayers' |
    'OnlyOnePlayer' |
    'SelectGender' |
    'BeforeNameInput' |
    'NameInputDialog' |
    'SelectColor' |
    'SelectJob' |
    'BeforeNPCGenerateDialog' |
    'NPCGenerateDialog' |
    'SelectNPCLevel'

type goalType = 'period' | 'money'

type userSelectAction = {
    type: 
        'goalType' |
        'currentStep' |
        'currentJob' |
        'currentPlayer' |
        'goalInput' |
        'numberOfPlayers' |
        'gender' |
        'nameInput' |
        'color' |
        'job' |
        'npcLevel',
    payload: string
}

type userSelectContext = {
    userSelect: typeof userSelectInitState
    userSelectDispatch: React.Dispatch<userSelectAction>
}

type basicJobs = 'warrior' | 'magician' | 'thief' | 'cleric' | 'beginner' | ''

const userSelectInitState = {
    goalType: <goalType> 'period',
    goalInput: 1,
    numberOfPlayers: 1,
    currentPlayer: 1,
    currentStep: <steps> 'SelectGoalType',
    currentJob: <basicJobs> '',
    titleAreaIsLeaving: false,
    playersAttrs: [{
        gender: 'male',
        nameInput: '',
        color: 'red',
        job: 'warrior',
        npcLevel: ''
    }, {
        gender: 'male',
        nameInput: '',
        color: 'red',
        job: 'warrior',
        npcLevel: ''
    }, {
        gender: 'male',
        nameInput: '',
        color: 'red',
        job: 'warrior',
        npcLevel: ''
    }, {
        gender: 'male',
        nameInput: '',
        color: 'red',
        job: 'warrior',
        npcLevel: ''
    }]
}

const userSelectContext = React.createContext<userSelectContext>({} as userSelectContext)

function userSelectReducer (
    state: typeof userSelectInitState,
    action: userSelectAction
): typeof userSelectInitState {
    const { type, payload } = action

    switch (type) {
    case 'goalType':
    case 'currentStep':
    case 'currentJob':
        return {
            ...state,
            [type]: payload
        }
    case 'goalInput':
    case 'currentPlayer':
    case 'numberOfPlayers':
        return {
            ...state,
            [type]: parseInt(payload)
        }
    case 'gender':
    case 'nameInput':
    case 'color':
    case 'job':
    case 'npcLevel': {
        const newState = { ...state }
        const index = state.currentPlayer - 1
        newState.playersAttrs[index][type] = payload
        return newState
    }
    default:
        return state
    }
}

export {
    userSelectReducer,
    userSelectInitState,
    userSelectContext
}