import styles from './CustomBorderBottom.module.css'

export default CustomBorderBottom

function CustomBorderBottom (): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
        </div>
    )
}