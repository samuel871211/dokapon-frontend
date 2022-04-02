import ReactDOM from 'react-dom'
import { useEffect, useReducer } from 'react'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './index.module.css'
import './index.css'
import GraphEditor from './views/GraphEditor'
import Game from './views/Game'
import SelectCharacter from './views/SelectCharacter'
import Home from './views/Home'
// import registerWindowResizeEvtHandler from './global/registerWindowResizeEvtHandler'
import { DARKTHEME } from './global/CONSTANTS'
import { initGameProgress, gameProgressContext, gameProgressReducer } from './reducers/gameProgress'
import { inituserPreference, userPreferenceContext, userPreferenceReducer } from './reducers/userPreference'
// const rootStyles = {
//     '16:9': styles.wideRoot,
//     '4:3': styles.traditionalRoot,
//     'stretch': styles.stretchRoot
// }
const HTMLStyles = {
    '16:9': styles.wideHTML,
    '4:3': styles.traditionalHTML,
    'stretch': styles.stretchHTML
}
// registerWindowResizeEvtHandler()

function App (): JSX.Element {
    const [gameProgress, gameProgressDispatch] = useReducer(gameProgressReducer, initGameProgress)
    const [userPreference, userPreferenceDispatch] = useReducer(userPreferenceReducer, inituserPreference)
    useEffect(function switchAspectRatio () {
        const aspectRatioEl = document.getElementById('root')?.children[0]
        const HTMLEl = document.documentElement
        if (!aspectRatioEl) return

        // aspectRatioEl.removeAttribute('class')
        // aspectRatioEl.classList.add(rootStyles[userPreference.aspectRatio])
        HTMLEl.removeAttribute('class')
        HTMLEl.classList.add(HTMLStyles[userPreference.aspectRatio])
        HTMLEl.style.setProperty('--vw', `${aspectRatioEl.clientWidth / 100}px`)
    }, [userPreference.aspectRatio])

    return (
        <gameProgressContext.Provider value={{ gameProgress, gameProgressDispatch }}>
        <userPreferenceContext.Provider value={{ userPreference, userPreferenceDispatch }}>
        <ThemeProvider theme={DARKTHEME}>
        <Router>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/graph-editor' exact component={GraphEditor}/>
                <Route path='/select-character' exact component={SelectCharacter}/>
                <Route path='/game' exact component={Game}/>
            </Switch>
        </Router>
        </ThemeProvider>
        </userPreferenceContext.Provider>
        </gameProgressContext.Provider>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
