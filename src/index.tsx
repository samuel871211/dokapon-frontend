import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'
import GraphEditor from './views/GraphEditor'
import StoryMode from './views/StoryMode'
import BattleMode from './views/BattleMode'
import SelectCharacter from './views/SelectCharacter'
import HomePage from './views/HomePage'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const darkTheme = createTheme({
    palette: {
        type: 'dark',
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
// console.log(darkTheme)

ReactDOM.render(
    <ThemeProvider theme={darkTheme}>
        <Router>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/GraphEditor' exact sensitive component={GraphEditor}/>
                <Route path='/SelectCharacter' exact sensitive component={SelectCharacter}/>
                <Route path='/StoryMode' exact sensitive component={StoryMode}/>
                <Route path='/BattleMode' exact sensitive component={BattleMode}/>
            </Switch>
        </Router>
    </ThemeProvider>,
    document.getElementById('root')
)
