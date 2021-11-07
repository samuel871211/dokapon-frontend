import Grid from '@material-ui/core/Grid'
import Slide from '@material-ui/core/Slide'

import globalStyles from '../css/Global.module.css'
import styles from '../css/NPCTopLeftImgArea.module.css'

export default NPCTopLeftImgArea

function NPCTopLeftImgArea (props: { src: string, alt: string }): JSX.Element {
    const { src, alt } = props
    
    // template
    return (
        <Grid item xs={5} className={`${styles.topLeftArea} ${globalStyles.xyCenter}`}>
            <Slide direction='right' in={true} timeout={800}>
                <div className={styles.biggestSquare}>
                    <img src={src} alt={alt} className={styles.guideImg}/>
                </div>
            </Slide>
        </Grid>
    )
}