import Dokapon from '.'
import { createTheme } from '@mui/material'

export const COLORLIST: Dokapon.ColorTypes[] = [
    'red', 'orange', 'yellow',
    'lightGreen', 'darkGreen', 'lightBlue',
    'darkBlue', 'pink', 'gray', 'white'
]
export const BASICJOBLIST: Dokapon.BasicJobTypes[] = [
    'warrior', 'magician',
    'cleric', 'thief', 'beginner'
]
export const NPCLEVELLIST: Dokapon.NPCLevelTypes[] = [
    'weak', 'normal', 'strong'
]
export const GENDERLIST: Dokapon.GenderTypes[] = [
    'male', 'female'
]
export const DARKTHEME = createTheme({
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
export const BACKENDURL = process.env.REACT_APP_BACKEND_BASEURL || ''