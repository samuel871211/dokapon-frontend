import { createContext } from 'react'
import Dokapon from '../global'

const initGameProgress: Dokapon.GameProgress = {
    timeStamp: '',
    goalType: 'period',
    goalInput: 1,
    numberOfPlayers: 1,
    currentPlayer: 1,
    playersAttrs: [{
        gender: 'male',
        name: '',
        color: 'red',
        job: 'warrior',
        isNPC: false,
        npcLevel: '',
        controllerNumber: 1
    }, {
        gender: 'male',
        name: '',
        color: 'red',
        job: 'warrior',
        isNPC: true,
        npcLevel: 'weak',
        controllerNumber: 0
    }, {
        gender: 'male',
        name: '',
        color: 'red',
        job: 'warrior',
        isNPC: true,
        npcLevel: 'weak',
        controllerNumber: 0
    }, {
        gender: 'male',
        name: '',
        color: 'red',
        job: 'warrior',
        isNPC: true,
        npcLevel: 'weak',
        controllerNumber: 0
    }]
}

const gameProgressContext = createContext<Dokapon.GameProgress.Context>({
    gameProgress: initGameProgress,
    gameProgressDispatch: function (action: Dokapon.GameProgress.Action) {
        console.error('Dokapon.GameProgress.Context did not provide a value')
    }
})

function gameProgressReducer (
    state: Dokapon.GameProgress,
    action: Dokapon.GameProgress.Action
): Dokapon.GameProgress {
    switch (action.type) {
    case 'goalType': 
    case 'goalInput':
    case 'currentPlayer': {
        return {
            ...state,
            [action.type]: action.payload
        }
    }
    // after numberOfPlayers is determined, we can mark the rest players as NPC
    case 'numberOfPlayers': {
        const newState = {
            ...state,
            [action.type]: action.payload
        }
        newState.playersAttrs.forEach((playerAttrs, index) => {
            const isNPC = newState.numberOfPlayers <= index
            if (isNPC) {
                playerAttrs.isNPC = true
                playerAttrs.controllerNumber = 0
                playerAttrs.npcLevel = 'weak'
            }
            else {
                playerAttrs.isNPC = false
                playerAttrs.controllerNumber = 1
                playerAttrs.npcLevel = ''
            }
        })
        return newState
    }
    case 'npcLevel':
    case 'gender':
    case 'color':
    case 'job':
    case 'name': {
        const curPlayerIdx = state.currentPlayer - 1
        const newState = {...state }
        const playerAttrs = {
            ...newState.playersAttrs[curPlayerIdx],
            [action.type]: action.payload
        }
        newState.playersAttrs[curPlayerIdx] = playerAttrs
        return newState
    }
    case 'controllerNumber': {
        const newState = { ...state }
        newState.playersAttrs.forEach((playerAttrs, index) => {
            playerAttrs.controllerNumber = action.payload[index]
        })
        return newState
    }
    case 'shuffle': {
        return {
            ...state,
            playersAttrs: [
                state.playersAttrs[action.payload[0]],
                state.playersAttrs[action.payload[1]],
                state.playersAttrs[action.payload[2]],
                state.playersAttrs[action.payload[3]],
            ]
        }
    }
    }
}

export {
    initGameProgress,
    gameProgressContext,
    gameProgressReducer
}