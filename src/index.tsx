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
import { initUserPreference, UserPreferenceContext, UserPreferenceReducer } from './reducers/userPreference'

calcVW()

function App (): JSX.Element {
    const [UserPreference, UserPreferenceDispatch] = useReducer(UserPreferenceReducer, initUserPreference)
    return (
        <UserPreferenceContext.Provider value={{ UserPreference, UserPreferenceDispatch }}>
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
        </UserPreferenceContext.Provider>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
