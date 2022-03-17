import ReactDOM from 'react-dom'
import { useReducer } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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

calcVW()

function App (): JSX.Element {
    const [gameProgress, gameProgressDispatch] = useReducer(gameProgressReducer, initGameProgress)
    const [userPreference, userPreferenceDispatch] = useReducer(userPreferenceReducer, inituserPreference)
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
