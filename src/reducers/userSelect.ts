import React from 'react'

export type steps =    
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
    'SelectNPCLevel' |
    'PlayerAttrsCollected' |
    'SelectController' |
    'SelectControllerConfirm' |
    'SelectOrderStep1' |
    'SelectOrderStep2' |
    'SelectOrderStep3'

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
        'npcLevel' |
        'controllerNumber' |
        'npcAttrsReGenerated' |
        'confirmDialogSelectedIdx' |
        'orderShuffle',
    payload: string
}

type userSelectContext = {
    userSelect: typeof userSelectInitState
    userSelectDispatch: React.Dispatch<userSelectAction>
}

type BASICJOBS = 'warrior' | 'magician' | 'thief' | 'cleric' | 'beginner' | ''
// type colorsss = 'red' | 'orange' | 'yellow' |
//             'lightGreen' | 'darkGreen' | 'lightBlue' |
//             'darkBlue' | 'pink' | 'gray' | 'white'

const userSelectInitState = {
    timeStamp: '空的',
    goalType: <goalType> 'period',
    goalInput: 1,
    numberOfPlayers: 1,
    currentPlayer: 1,
    currentStep: <steps> 'SelectGoalType',
    currentJob: <BASICJOBS> '',
    confirmDialogSelectedIdx: 1,
    playersAttrs: [{
        gender: 'male',
        nameInput: '',
        color: 'red',
        job: 'warrior',
        npcLevel: '',
        npcAttrsReGenerated: false,
        controllerNumber: 1
    }, {
        gender: 'male',
        nameInput: '',
        color: 'red',
        job: 'warrior',
        npcLevel: '',
        npcAttrsReGenerated: false,
        controllerNumber: 1
    }, {
        gender: 'male',
        nameInput: '',
        color: 'red',
        job: 'warrior',
        npcLevel: '',
        npcAttrsReGenerated: false,
        controllerNumber: 1
    }, {
        gender: 'male',
        nameInput: '',
        color: 'red',
        job: 'warrior',
        npcLevel: '',
        npcAttrsReGenerated: false,
        controllerNumber: 1
    }]
}

export type userSelect = typeof userSelectInitState

const userSelectContext = React.createContext<userSelectContext>({} as userSelectContext)

function userSelectReducer (
    state: typeof userSelectInitState,
    action: userSelectAction
): typeof userSelectInitState {
    const { type, payload } = action
 
    switch (type) {
    case 'goalType':
    case 'currentJob':
        return {
            ...state,
            [type]: payload
        }
    case 'currentStep':
        return {
            ...state,
            currentStep: payload as steps
        }
    case 'goalInput':
    case 'currentPlayer':
    case 'numberOfPlayers':
    case 'confirmDialogSelectedIdx':
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
    case 'npcAttrsReGenerated': {
        const newState = { ...state }
        const index = state.currentPlayer - 1
        newState.playersAttrs[index].npcAttrsReGenerated = true
        return newState
    }
    case 'controllerNumber': {
        const newState = { ...state }
        payload.split(',').forEach((num, index) => {
            newState.playersAttrs[index].controllerNumber = parseInt(num)
        })
        return newState
    }
    case 'orderShuffle': {
        const newState = { ...state }
        const shuffleIndexes = payload.split(',')
        newState.playersAttrs = [
            newState.playersAttrs[parseInt(shuffleIndexes[0])],
            newState.playersAttrs[parseInt(shuffleIndexes[1])],
            newState.playersAttrs[parseInt(shuffleIndexes[2])],
            newState.playersAttrs[parseInt(shuffleIndexes[3])]
        ]
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