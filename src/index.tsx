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
import { createTheme } from '@mui/material'
import { initGameProgress, gameProgressContext, gameProgressReducer } from './reducers/gameProgress'
import { inituserPreference, userPreferenceContext, userPreferenceReducer } from './reducers/userPreference'
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: '#ffa919',
            main: '#ffa000',
            dark: '#e59000'
        },
        secondary: {
            light: '#ffc919',
            main: '#ffc400',
            dark: '#e5b000'
        }
    }
})
const HTMLStyles = {
    '16:9': styles.wideHTML,
    '4:3': styles.traditionalHTML,
    'stretch': styles.stretchHTML
}

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
        <ThemeProvider theme={darkTheme}>
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
