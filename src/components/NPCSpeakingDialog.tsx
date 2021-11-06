import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Slide from '@material-ui/core/Slide'

export default function NPCSpeakingDialog(props: {
    name: string,
    message: string
}): JSX.Element {
    const { name, message } = props
    // styles
    const styles = makeStyles(() => ({
        bottomArea: {
            height: '35%'
        },
        nameArea: {
            width: '35%',
            height: '20%',
            marginLeft: '5%',
            borderRadius: '30px',
            border: '3px outset #222222',
            backgroundColor: '#fee59a',
            position: 'relative',
            top: '7.5%'
        },
        name: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontWeight: 'bold',
            fontSize: '2rem',
        },
        messageArea: {
            width: '95%',
            height: '75%',
            marginLeft: '2.5%',
            borderRadius: '30px',
            border: '3px outset #222222',
            backgroundColor: '#fee59a'
        },
        message: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontWeight: 'bold',
            fontSize: '2rem',
            letterSpacing: '1px'
        }
    }))
    const classes = styles()

    // template
    return (
        <Slide direction='up' in={true} timeout={800}>
            <Grid item xs={12} className={classes.bottomArea}>
                <Box className={classes.nameArea}>
                    <Box className={classes.name}>{name}</Box>
                </Box>
                <Box className={classes.messageArea}>
                    <Box className={classes.message}>{message}</Box>
                </Box>
            </Grid>
        </Slide>
    )
}