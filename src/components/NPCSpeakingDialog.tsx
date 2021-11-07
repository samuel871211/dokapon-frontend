import Grid from '@material-ui/core/Grid'
import Slide from '@material-ui/core/Slide'
import globalStyles from '../css/Global.module.css'
import styles from '../css/NPCSpeakingDialog.module.css'

export default NPCSpeakingDialog

function NPCSpeakingDialog (props: { name: string, message: string }): JSX.Element {
    const { name, message } = props

    // template
    return (
        <Slide direction='up' in={true} timeout={800}>
            <Grid item xs={12} className={styles.bottomArea}>
                <div className={styles.nameArea}>
                    <div className={`${styles.name} ${globalStyles.xyCenter}`}>{name}</div>
                </div>
                <div className={`${styles.messageArea} ${globalStyles.xyCenter}`}>
                    {message}
                </div>
            </Grid>
        </Slide>
    )
}