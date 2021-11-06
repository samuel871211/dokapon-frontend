import { Slide, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import NumberOfPlayersBtn from './NumberOfPlayersBtn'
import style from '../../global/style'

export default function SelectNumberOfPlayers (): JSX.Element {
    const useStyles = makeStyles({
        btnGroup: {
            width: '80%',
            height: '80%',
            margin: 'auto',
            flexDirection: 'column'
        }
    })
    const classes = useStyles()
    const globalStyle = style()

    return (
        <Slide in={true} timeout={800}>
            <Box
                className={`
                ${classes.btnGroup}
                ${globalStyle.xyCenter}`}
            >
                <NumberOfPlayersBtn playerNum={1}/>
                <NumberOfPlayersBtn playerNum={2}/>
                <NumberOfPlayersBtn playerNum={3}/>
                <NumberOfPlayersBtn playerNum={4}/>
            </Box>
        </Slide>
    )
}