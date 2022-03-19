import ReactDOM from 'react-dom'
import { useEffect, useReducer } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './index.module.css'
import './index.css'
import GraphEditor from './views/GraphEditor'
import StoryMode from './views/StoryMode'
import BattleMode from './views/BattleMode'
import SelectCharacter from './views/SelectCharacter'
import HomePage from './views/HomePage'
import calcVW from './global/calcVW'
import { DARKTHEME } from './global/CONSTANTS'
import { initGameProgress, gameProgressContext, gameProgressReducer } from './reducers/gameProgress'
import { inituserPreference, userPreferenceContext, userPreferenceReducer } from './reducers/userPreference'
const rootStyles = {
    '16:9': styles.wideRoot,
    '4:3': styles.traditionalRoot,
    'stretch': styles.stretchRoot
}
const HTMLStyles = {
    '16:9': styles.wideHTML,
    '4:3': styles.traditionalHTML,
    'stretch': styles.stretchHTML
}
calcVW()

import { get } from 'lodash'
const body = {
    timeStamp: '2022-03-19T06:07:04.741Z',
    goalInput: 1000,
    goalType: 'money',
    numberOfPlayers: 1,
    currentPlayer: 4,
    playersAttrs: [{
        gender: 'male',
        name: '12345678',
        color: 'red',
        job: 'warrior',
        isNPC: false,
        npcLevel: '',
        controllerNumber: 1
    }, {
        gender: 'male',
        name: '12345678',
        color: 'red',
        job: 'warrior',
        isNPC: false,
        npcLevel: '',
        controllerNumber: 1
    }, {
        gender: 'male',
        name: '12345678',
        color: 'red',
        job: 'warrior',
        isNPC: false,
        npcLevel: '',
        controllerNumber: 1
    }, {
        gender: 'male',
        name: '12345678',
        color: 'red',
        job: 'warrior',
        isNPC: false,
        npcLevel: '',
        controllerNumber: 1
    }]
}
const path = 'playersAttrs[2].npcLevel'
console.log(get(body.playersAttrs, path))

function App (): JSX.Element {
    const [gameProgress, gameProgressDispatch] = useReducer(gameProgressReducer, initGameProgress)
    const [userPreference, userPreferenceDispatch] = useReducer(userPreferenceReducer, inituserPreference)
    useEffect(function switchAspectRatio () {
        const rootEl = document.getElementById('root')
        const HTMLEl = document.documentElement
        if (!rootEl) return

        rootEl.removeAttribute('class')
        rootEl.classList.add(rootStyles[userPreference.aspectRatio])
        HTMLEl.removeAttribute('class')
        HTMLEl.classList.add(HTMLStyles[userPreference.aspectRatio])
        HTMLEl.style.setProperty('--vw', `${rootEl.clientWidth / 100}px`)
    }, [userPreference.aspectRatio])

    return (
        <gameProgressContext.Provider value={{ gameProgress, gameProgressDispatch }}>
        <userPreferenceContext.Provider value={{ userPreference, userPreferenceDispatch }}>
        <ThemeProvider theme={DARKTHEME}>
        <Router>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/GraphEditor' exact sensitive component={GraphEditor}/>
                <Route path='/SelectCharacter' exact sensitive component={SelectCharacter}/>
                <Route path='/StoryMode' exact sensitive component={StoryMode}/>
                <Route path='/BattleMode' exact sensitive component={BattleMode}/>
            </Switch>
        </Router>
        </ThemeProvider>
        </userPreferenceContext.Provider>
        </gameProgressContext.Provider>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
