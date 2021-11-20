import styles from './NameInputWord.module.css'
import globalStyles from '../../global/styles.module.css'

export default NameInputWord

function NameInputWord (props: {
    word: string,
    current: boolean
}): JSX.Element {
    const { word, current } = props

    return (
        <div
            className={`
            ${styles.container}
            ${globalStyles.xyCenter}`}
        >
            <span className={current ? globalStyles.hoverEffect : ''}>{word}</span>
            <div className={styles.bottomLine}></div>
        </div>
    )
}