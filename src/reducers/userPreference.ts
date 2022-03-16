import { createContext } from 'react'
import Dokapon from '../global'

/**
 * use lower case string as value only because it's better to handle switch case
 */
const initUserPreference: Dokapon.Settings.UserPreference = {
    lang: 'cn',
    aspectRatio: '16:9',
    arrowUp: 'arrowup',
    arrowDown: 'arrowdown',
    arrowLeft: 'arrowleft',
    arrowRight: 'arrowright',
    triangle: 's',
    circle: 'd',
    square: 'z',
    cross: 'x',
    L1: 'q',
    L2: '1',
    R1: 'e',
    R2: '3',
    SELECT: 'c',
    ANALOG: 'b',
    START: 'v'
}

const UserPreferenceContext = createContext<Dokapon.Settings.Context>({
    UserPreference: initUserPreference,
    UserPreferenceDispatch: function (action: Dokapon.Settings.Action) {
        console.error('Settings.Context did not provide a value')
    }
})

function UserPreferenceReducer (
    state: Dokapon.Settings.UserPreference,
    action: Dokapon.Settings.Action
): Dokapon.Settings.UserPreference {
    switch (action.type) {
    case 'update':
        return action.payload
    case 'arrowUp':
    case 'arrowDown':
    case 'arrowLeft':
    case 'arrowRight':
    case 'triangle':
    case 'circle':
    case 'square':
    case 'cross':
    case 'L1':
    case 'L2':
    case 'R1':
    case 'R2':
    case 'SELECT':
    case 'ANALOG':
    case 'START':
    case 'aspectRatio':
    case 'lang':
        return {
            ...state,
            [action.type]: action.payload
        }
    // case 'aspectRatio':
    //     return {
    //         ...state,
    //         [action.type]: action.payload
    //     }
    // case 'lang':
    //     return {
    //         ...state,
    //         [action.type]: action.payload
    //     }
    default:
        return state
    }
}

export {
    initUserPreference,
    UserPreferenceContext,
    UserPreferenceReducer
}