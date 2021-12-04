import React from 'react'

const slideControllerInitState = {
    titleArea: false,
    NPCTopLeftImgArea: false,
    NPCSpeakingDialog: false
}

type slideControllerAction = {
    type:
        'titleArea' |
        'NPCTopLeftImgArea' |
        'NPCSpeakingDialog',
    payload: boolean
}

type slideControllerContext = {
    slideState: typeof slideControllerInitState
    slideControllerDispatch: React.Dispatch<slideControllerAction>
}

const slideControllerContext = React.createContext<slideControllerContext>({} as slideControllerContext)

function slideControllerReducer (state: typeof slideControllerInitState, action: slideControllerAction) {
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