import React from 'react'

const slideControllerInitState = {
    titleArea: false,
    NPCTopLeftImgArea: false,
    NPCDialog: false,
    confirmDialog: false,
    selectCharacterFadeOut: false
}

type slideControllerAction = {
    type:
        'titleArea' |
        'NPCTopLeftImgArea' |
        'NPCDialog' |
        'confirmDialog' |
        'selectCharacterFadeOut'
    payload: boolean
}

type slideControllerContext = {
    slideState: typeof slideControllerInitState
    slideControllerDispatch: React.Dispatch<slideControllerAction>
}

const slideControllerContext = React.createContext<slideControllerContext>({} as slideControllerContext)

function slideControllerReducer (state: typeof slideControllerInitState, action: slideControllerAction): typeof slideControllerInitState {
    return {
        ...state,
        [action.type]: action.payload
    }
}

export {
    slideControllerReducer,
    slideControllerInitState,
    slideControllerContext
}