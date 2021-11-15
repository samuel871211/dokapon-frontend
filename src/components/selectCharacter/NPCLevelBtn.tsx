import globalStyles from '../../global/styles.module.css'
import styles from './NPCLevelBtn.module.css'

export default NPCLevelBtn

function NPCLevelBtn (props: { aiLevel: string, selected: boolean }): JSX.Element {
    const { aiLevel, selected } = props
    return (
        <div
            className={`
            ${styles.btn}
            ${globalStyles.yellowBlock}
            ${globalStyles.xyCenter}
            ${selected ? globalStyles.hoverEffect : ''}`}
        >
            {aiLevel}
        </div> 
    )
}