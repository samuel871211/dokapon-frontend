import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PersonIcon from '@material-ui/icons/Person'
import AdbIcon from '@material-ui/icons/Adb'
import style from '../../global/style'
const digitToFullWidth = ['', '１', '２', '３', '４']
type playerNum = 1 | 2 | 3 | 4

export default function NumberOfPlayersBtn (props: { playerNum: playerNum }): JSX.Element {
    const { playerNum } = props
    const useStyles = makeStyles({
        btn: {
            width: '80%',
            height: '15%',
            marginTop: '5%',
            display: 'flex',
            paddingLeft: '5%',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '2rem'
        },
        btnText: {
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingRight: '5%',
            letterSpacing: '1px'
        }
    })
    const classes = useStyles()
    const globalStyle = style()
    function generateIcons () {
        const icons = []
        for (let i = 0; i < 4; i++) {
            if (i < playerNum) {
                icons.push(<PersonIcon key={i} fontSize='large'/>)
            } else {
                icons.push(<AdbIcon key={i} fontSize='large'/>)
            }
        }
        return icons
    }
    return (
        <Box
            className={`
            ${classes.btn}
            ${globalStyle.yellowBlock}
            ${globalStyle.btnHover}`}
            role='button'
            onClick={() => console.log(playerNum)}
        >
            {generateIcons()}
            <Box className={classes.btnText}>
                {digitToFullWidth[playerNum]}人
            </Box>
        </Box>
    )
}