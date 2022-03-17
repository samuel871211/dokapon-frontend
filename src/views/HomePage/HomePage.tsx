import { useContext, useReducer } from 'react'
import styles from './HomePage.module.css'
import { Transition } from 'react-transition-group'
import useTranslation from '../../global/translation'
import Settings from './Settings'
import BtnGroup from './BtnGroup'
import KeyMappingDialog from './KeyMappingDialog'
import { UserPreferenceContext } from '../../reducers/userPreference'
import { initUIState, UIStateContext, UIStateReducer } from '../../reducers/HomePage/UIState'

export default HomePage

function HomePage (): JSX.Element {
    const [UIState, UIStateDispatch] = useReducer(UIStateReducer, initUIState)
    const { UserPreference } = useContext(UserPreferenceContext)
    const { t } = useTranslation(UserPreference.lang)
    return (
        <UIStateContext.Provider value={{ UIState, UIStateDispatch }}>
            <div className={styles.container}>
                <h1 className={styles.title}>{t('ドカポン・ザ・ワールド')}</h1>
                <Transition appear in={UIState.showBtnGroup} timeout={1000}>
                    {state => (<BtnGroup state={state}/>)}
                </Transition>
            </div>
            <Transition in={UIState.showSetting} timeout={1000}>
                {state => (<Settings state={state}/>)}
            </Transition>
            <Transition in={UIState.showKeyMappingDialog} timeout={1000}>
                {state => (<KeyMappingDialog state={state}/>)}
            </Transition>
        </UIStateContext.Provider>
    )
}