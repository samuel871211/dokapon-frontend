import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Slide from '@material-ui/core/Slide'

export default function AISpeakingDialog (props: {
    title: string
}): JSX.Element {
    const { title } = props
    
    // styles
    const styles = makeStyles(() => ({
        settingTitleArea: {
            width: '80%',
            height: '15%',
            marginTop: '5%',
            borderRadius: '30px',
            border: '3px outset #222222',
            backgroundColor: '#fee59a'
        },
        settingTitle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontWeight: 'bold',
            fontSize: '2rem',
            letterSpacing: '1px'
        },
    }))
    const classes = styles()
    
    // template
    return (
        <Slide direction='down' in={true} timeout={800}>
            <Box className={classes.settingTitleArea}>
                <Box className={classes.settingTitle}>{title}</Box>
            </Box>
        </Slide>
    )
}