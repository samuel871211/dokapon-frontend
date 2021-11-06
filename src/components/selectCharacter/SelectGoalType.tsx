import { Slide, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import style from '../../global/style'

export default function SelectGoalType (): JSX.Element {
    const useStyles = makeStyles({
        btnGroup: {
            width: '80%',
            height: '80%',
            margin: 'auto',
            flexDirection: 'column'
        },
        btn: {
            width: '80%',
            height: '15%',
            marginTop: '5%',
            display: 'flex',
            paddingLeft: '5%',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '2rem',
            letterSpacing: '1px'
        }
    })
    const globalStyle = style()
    const classes = useStyles()
    return (
        <Slide direction="left" in={true} timeout={800}>
            <Box
                className={`
                ${globalStyle.xyCenter}
                ${classes.btnGroup}`}
            >
                <Box
                    role='button'
                    className={`
                    ${classes.btn}
                    ${globalStyle.yellowBlock}
                    ${globalStyle.btnHover}`}
                >
                    <img width='30px' height='30px'/>
                    期間目標
                </Box>
                <Box
                    role='button'
                    className={`
                    ${classes.btn}
                    ${globalStyle.yellowBlock}
                    ${globalStyle.btnHover}`}
                >
                    <img width='30px' height='30px'/>
                    金額目標
                </Box>
            </Box>
        </Slide>
    )
}