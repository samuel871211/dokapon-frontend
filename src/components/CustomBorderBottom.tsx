import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

export default function CustomBorderBottom (): JSX.Element {
    // styles
    const styles = makeStyles(() => ({
        container: {
            width: '95%',
            height: '10px',
            display: 'flex',
            margin: 'auto'
        },
        ball: {
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'black'
        },
        line: {
            marginBottom: '4px',
            borderBottom: '3px solid black',
            width: 'calc(100% - 20px)'
        }

    }))
    const classes = styles() 

    return (
        <Box className={classes.container}>
            <Box className={classes.ball}></Box>
            <Box className={classes.line}></Box>
            <Box className={classes.ball}></Box>
        </Box>
    )
}