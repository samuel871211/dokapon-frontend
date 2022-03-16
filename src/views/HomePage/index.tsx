import { useReducer } from 'react'
import styles from './index.module.css'
import { Transition } from 'react-transition-group'
import { texts } from './texts'
import Settings from './Settings'
import BtnGroup from './BtnGroup'
import {initUserPreference, UserPreferenceContext, UserPreferenceReducer } from '../../reducers/userPreference'
import { initUIState, UIStateContext, UIStateReducer } from '../../reducers/HomePage/UIState'

export default HomePage

function HomePage (): JSX.Element {
    const [UIState, UIStateDispatch] = useReducer(UIStateReducer, initUIState)
    const [UserPreference, UserPreferenceDispatch] = useReducer(UserPreferenceReducer, initUserPreference)
    // const 
    return (
        <UserPreferenceContext.Provider value={{ UserPreference, UserPreferenceDispatch }}>
        <UIStateContext.Provider value={{ UIState, UIStateDispatch }}>
            <div className={styles.container}>
                <h1 className={styles.title}>{texts.title.cn}</h1>
                <Transition appear in={UIState.showBtnGroup} timeout={1000}>
                    {state => (<BtnGroup state={state}/>)}
                </Transition>
            </div>
            <Transition in={UIState.showSetting} timeout={1000}>
                {state => (<Settings state={state}/>)}
            </Transition>
        </UIStateContext.Provider>
        </UserPreferenceContext.Provider>
    )
}