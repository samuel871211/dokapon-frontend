// import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import GraphEditor from './components/graphEditor'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#b1c4bc',
            main: '#9fb0a9',
            dark: '#8d9c96'
        },
        secondary: {
            light: '#99bfaa',
            main: '#89ab99',
            dark: '#7a9888'
        }
    }
})

ReactDOM.render(
    // <React.StrictMode>
    //     <GraphEditor/>
    // </React.StrictMode>,
    <ThemeProvider theme={darkTheme}>
        <GraphEditor/>
    </ThemeProvider>,
    document.getElementById('root')
)
