import { useContext, useReducer } from 'react'
import styles from './Home.module.css'
import { Transition } from 'react-transition-group'
import useTranslation from '../../global/translation'
import Settings from './Settings'
import BtnGroup from './BtnGroup'
import KeyMappingDialog from './KeyMappingDialog'
import { userPreferenceContext } from '../../reducers/userPreference'
import { initUIState, UIStateContext, UIStateReducer } from '../../reducers/Home/UIState'
import GraphDSA from '../../global/GraphDSA'
const Graph = new GraphDSA()
const { result, queues } = Graph.getAllPaths('I', 20)
console.log(result, queues)

export default Home

function Home (): JSX.Element {
    const [UIState, UIStateDispatch] = useReducer(UIStateReducer, initUIState)
    const { userPreference } = useContext(userPreferenceContext)
    const { t } = useTranslation(userPreference.lang)
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