import styles from './NameDisplayWord.module.css'
import globalStyles from '../../global/styles.module.css'

type props = {
    word: string,
    current: boolean
}

export default NameDisplayWord

function NameDisplayWord (props: props): JSX.Element {
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