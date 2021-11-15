import globalStyles from '../global/styles.module.css'
import styles from './NPCSpeakingDialog.module.css'

export default NPCSpeakingDialog

function NPCSpeakingDialog (props: { name: string, message: string }): JSX.Element {
    const { name, message } = props

    // template
    return (
        <div className={styles.container}>
            <div className={styles.nameArea}>
                <div
                    className={`
                    ${styles.name}
                    ${globalStyles.xyCenter}`}
                >
                    {name}
                </div>
            </div>
            <div
                className={`
                ${styles.messageArea}
                ${globalStyles.xyCenter}`}
            >
                {message}
            </div>
        </div>
    )
}