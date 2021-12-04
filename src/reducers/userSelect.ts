import React from 'react'

type steps =    
    'SelectGoalType' |
    'GoalInputDialog' |
    'SelectNumberOfPlayers' |
    'SelectGender' |
    'BeforeNameInput' |
    'NameInputDialog' |
    'SelectColor' |
    'SelectJob' |
    'NPCGenerateDialog' |
    'SelectNPCLevel'

type goalType = 'period' | 'money'

type userSelectAction = {
    type: 
        'goalType' |
        'currentStep' |
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

const userSelectInitState = {
    goalType: <goalType> 'period',
    goalInput: 1,
    numberOfPlayers: 1,
    currentPlayer: 1,
    currentStep: <steps> 'SelectGoalType',
    titleAreaIsLeaving: false,
    playersAttrs: [{
        gender: 'male',
        nameInput: '',
        color: 'red',
        job: 'warrior',
        npcLevel: 'weak'
    }, {
        gender: 'male',
        nameInput: '',
        color: 'red',
        job: 'warrior',
        npcLevel: 'weak'
    }, {
        gender: 'male',
        nameInput: '',
        color: 'red',
        job: 'warrior',
        npcLevel: 'weak'
    }, {
        gender: 'male',
        nameInput: '',
        color: 'red',
        job: 'warrior',
        npcLevel: 'weak'
    }]
}

const userSelectContext = React.createContext<userSelectContext>({} as userSelectContext)

function userSelectReducer (state: typeof userSelectInitState, action: userSelectAction) {
    const { type, payload } = action

    switch (type) {
    case 'goalType':
    case 'currentStep':
        return {
            ...state,
            [type]: payload
        }
    case 'goalInput':
    case 'numberOfPlayers':
        return {
            ...state,
            goalInput: parseInt(payload)
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