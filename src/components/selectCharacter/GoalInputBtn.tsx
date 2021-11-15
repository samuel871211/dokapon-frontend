import styles from './GoalInputBtn.module.css'
import globalStyles from '../../global/styles.module.css'
type props = {
    type: 'duration' | 'money'
    text: string,
    selected: boolean,

}

export default GoalInputBtn

function GoalInputBtn (props: props): JSX.Element {
    const { text, selected, type } = props
    return (
        <div
            className={`
            ${type === 'money' ? styles.moneyBtn : styles.durationBtn}
            ${globalStyles.xyCenter}
            ${selected ? globalStyles.hoverEffect : ''}`}
        >
            {text}
        </div>
    )
}