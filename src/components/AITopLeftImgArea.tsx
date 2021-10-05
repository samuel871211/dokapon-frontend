import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Slide from '@material-ui/core/Slide'

export default function AISpeakingDialog (props: {
    src: string,
    alt: string
}): JSX.Element {
    const { src, alt } = props

    // styles
    const styles = makeStyles(() => ({
        biggestSquare: {
            width: "min(41.6vw, 65vh)",
            height: "min(41.6vw, 65vh)"
        },
        guideImg: {
            clipPath: 'polygon(0% 0%, 33.3% 0%, 33.3% 33.3%, 0% 33.3%)',
            width: '300%',
            height: '300%'
        },
    }))
    const classes = styles()
    
    // template
    return (
        <Slide direction="right" in={true} timeout={800}>
            <Box className={classes.biggestSquare}>
                <img src={src} alt={alt} className={classes.guideImg}></img>
            </Box>
        </Slide>
    )
}