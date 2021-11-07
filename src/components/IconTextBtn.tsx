import styles from '../css/IconTextBtn.module.css'
import globalStyles from '../css/Global.module.css'

export default IconTextBtn

function IconTextBtn (props: {
    text: string,
    selected: boolean,
    customClass: string
}): JSX.Element {
    const { text, selected, customClass } = props
    return (
        <div
            role='button'
            className={`
            ${globalStyles.yellowBlock}
            ${selected ? globalStyles.hoverEffect : ''}
            ${customClass}
            ${styles.btn}`}
        >
            <div className={styles.imgContainer}>
                <img className={styles.img}/>
            </div>
            <span>{text}</span>
        </div>
    )
}