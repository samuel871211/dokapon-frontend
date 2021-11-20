type steps =    
    'SelectGoalType' |
    'GoalInputDialog' |
    'SelectNumberOfPlayers' |
    'SelectGender' |
    'NameInputDialog' |
    'SelectColor' |
    'SelectJob' |
    'NPCGenerateDialog' |
    'SelectNPCLevel'

type goalType = 'duration' | 'money'

const initState = {
    goalType: <goalType> 'duration',
    goalInput: 1,
    numberOfPlayers: 1,
    currentPlayer: 1,
    currentStep: <steps> 'SelectGoalType',
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

type action = {
    type: string,
    payload: string
}

function reducer (state: typeof initState, action: action) {
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

export { reducer, initState }