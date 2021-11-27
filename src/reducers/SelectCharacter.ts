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
        'npcLevel' |
        'toggleTitleAreaLeaving',
    payload: string
}

const initState = {
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

type UserSelectContext = {
    userSelect: typeof initState
    dispatch: React.Dispatch<userSelectAction>
}

const UserSelectContext = React.createContext<UserSelectContext>({} as UserSelectContext)

function reducer (state: typeof initState, action: userSelectAction) {
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
    case 'toggleTitleAreaLeaving':
        return {
            ...state,
            titleAreaIsLeaving: !state.titleAreaIsLeaving
        }
    default:
        return state
    }
}

export { reducer, initState, UserSelectContext }