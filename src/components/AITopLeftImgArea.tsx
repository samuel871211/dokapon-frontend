import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Slide from '@material-ui/core/Slide'

export default function AISpeakingDialog (props: {
    src: string,
    alt: string
}): JSX.Element {
    const { src, alt } = props

    // styles
    const styles = makeStyles(() => ({
        biggestSquare: {
            width: 'min(calc(100vw / 12 *5), 65vh)',
            height: 'min(calc(100vw / 12 *5), 65vh)'
        },
        guideImg: {
            clipPath: 'polygon(0% 0%, 33.3% 0%, 33.3% 33.3%, 0% 33.3%)',
            width: '300%',
            height: '300%'
        },
        topLeftArea: {
            height: '65%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }))
    const classes = styles()
    
    // template
    return (
        <Slide direction='right' in={true} timeout={800}>
            <Grid item xs={5} className={classes.topLeftArea}>
                <Box className={classes.biggestSquare}>
                    <img src={src} alt={alt} className={classes.guideImg}/>
                </Box>
            </Grid>
        </Slide>
    )
}