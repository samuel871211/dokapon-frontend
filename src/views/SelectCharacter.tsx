import guide from '../imgs/guide.png'
import selectCharacterBackground from '../imgs/selectCharacterBackground.png'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
// 目標 => 人數 => 性別 => 名字 => 顏色 => 職業


export default function SelectCharacter () {
    // data

    // styles
    const styles = makeStyles(theme => ({
        container: {
            width: '100%',
            height: '100%',
            backgroundImage: `url(${selectCharacterBackground})`
        },
        topArea: {
            height: '65%',
            fontSize: '0px'
        },
        topLeftArea: {
            display: 'inline-block',
            width: '50%',
            height: '100%'
        },
        topRightArea: {
            display: 'inline-block',
            width: '50%',
            height: '100%'
        },
        bottomArea: {
            height: '35%'
        }
    }))
    const classes = styles()
    
    // template
    return (
        <Box className={classes.container}>
            <Box className={classes.topArea}>
                <Box className={classes.topLeftArea}>
                    <img></img>
                </Box>
                <Box className={classes.topRightArea}>
                    
                </Box>
            </Box>
            <Box className={classes.bottomArea}>

            </Box>
        </Box>
    )
}