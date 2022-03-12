import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'
import GraphEditor from './views/GraphEditor'
import StoryMode from './views/StoryMode'
import BattleMode from './views/BattleMode'
import SelectCharacter from './views/SelectCharacter'
import HomePage from './views/HomePage'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { debounce } from 'lodash'

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

/**
 * 為了不讓遊戲畫面被無限制拉伸
 * 
 * 在最外層設定aspect ratio為16:9(或4:3)
 * 
 * 文字大小使用相對大小(vw)，才不會因為放大縮小而跑版
 * 
 * 但在寬螢幕時，vw會大於遊戲視窗寬度
 * 
 * 所以必須綁定resize event計算遊戲視窗寬度
 */
function calcVW (): void {
    const HTMLEl = document.documentElement
    const rootEl = document.getElementById('root')
    if (!rootEl) return console.error('#root not found')

    HTMLEl.style.setProperty('--vw', `${rootEl.clientWidth / 100}px`)
    window.onresize = debounce(() => {
        HTMLEl.style.setProperty('--vw', `${rootEl.clientWidth / 100}px`)
    }, 100)
}
calcVW()

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
