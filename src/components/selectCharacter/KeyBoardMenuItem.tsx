import styles from './KeyBoardMenuItem.module.css'
import globalStyles from '../../global/styles.module.css'

export default KeyBoardMenuItem

function KeyBoardMenuItem (props: {
    word: string,
    selected: boolean
}): JSX.Element {
    const { word, selected } = props

    return (
        <div className={styles.btn}>
            <span className={selected ? globalStyles.hoverEffect : ''}>
                {word}
            </span>
        </div>
    )
}