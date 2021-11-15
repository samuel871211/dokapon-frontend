import styles from './KeyBoardKey.module.css'
import globalStyles from '../../global/styles.module.css'

type props = {
    word: string,
    selected: boolean
}

export default KeyBoardKey

function KeyBoardKey (props: props): JSX.Element {
    const { word, selected } = props
    return (
        <div
            className={`
            ${styles.container}
            ${globalStyles.xyCenter}`}
        >
            <span className={selected ? globalStyles.hoverEffect : ''}>{word}</span>
        </div>
    )
}