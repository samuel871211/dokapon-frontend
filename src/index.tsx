import ReactDOM from 'react-dom'
import { useEffect, useReducer } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './index.module.css'
import './index.css'
import GraphEditor from './views/GraphEditor'
import Game from './views/Game'
import SelectCharacter from './views/SelectCharacter'
import Home from './views/Home'
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
