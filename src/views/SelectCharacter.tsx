import guide from '../imgs/guide.png'
import selectCharacterBackground from '../imgs/selectCharacterBackground.png'
// import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
// 目標 => 人數 => 性別 => 名字 => 顏色 => 職業


export default function SelectCharacter () {
    // data

    // styles
    const styles = makeStyles(theme => ({
        container: {
            width: '100%',
            height: '100%',
            backgroundImage: `url(${selectCharacterBackground})`,
            backgroundRepeat: 'no-repeat'
        },
        topLeftArea: {
            height: '65%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        },
        topRightArea: {
            height: '65%'
        },
        bottomArea: {
            height: '35%'
        },
        guideImg: {
            clipPath: 'polygon(0% 0%, 33.3% 0%, 33.3% 33.3%, 0% 33.3%)',
            width: '300%',
            height: '300%'
        }
    }))
    const classes = styles()
    
    // template
    return (
        <Grid container className={classes.container}>
            <Grid item xs={6} className={classes.topLeftArea}>
                <Box width="50vmin" height="50vmin">
                    <img src={guide} className={classes.guideImg}></img>
                </Box>
            </Grid>
            <Grid item xs={6} className={classes.topRightArea}>

            </Grid>
            <Grid item xs={12} className={classes.bottomArea}>

            </Grid>
        </Grid>
    )
}