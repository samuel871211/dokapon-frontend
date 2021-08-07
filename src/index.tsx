// import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import GraphEditor from './components/graphEditor'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#caddd5',
            main: '#c5dad1',
            dark: '#b1c4bc'
        },
        secondary: {
            light: '#f0f0f2',
            main: '#efeff1',
            dark: '#d7d7d8'
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
