import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'
import ContextMenu from './global/ContextMenu'
import GraphEditor from './views/GraphEditor'
import StoryMode from './views/StoryMode'
import BattleMode from './views/BattleMode'
import SelectCharacter from './views/SelectCharacter'
import HomePage from './views/HomePage'
// import { createTheme, ThemeProvider } from '@material-ui/core/styles'

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#fee59a',
//             dark: '#9bd65b'
//         }
//     },
//     overrides: {
//         MuiButton: {
//             root: {
//                 borderRadius: '30px',
//                 border: '3px outset #222222'
//             }
//         }
//     }
// })
// console.log(theme)

ReactDOM.render(
    <Router>
        <ContextMenu/>
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/GraphEditor' exact sensitive component={GraphEditor}/>
            <Route path='/SelectCharacter' exact sensitive component={SelectCharacter}/>
            <Route path='/StoryMode' exact sensitive component={StoryMode}/>
            <Route path='/BattleMode' exact sensitive component={BattleMode}/>
        </Switch>
    </Router>,
    document.getElementById('root')
)
