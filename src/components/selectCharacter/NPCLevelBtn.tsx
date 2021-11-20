import globalStyles from '../../global/styles.module.css'
import styles from './NPCLevelBtn.module.css'

const aiLevelToCN = {
    weak: '弱',
    normal: '普通',
    strong: '狡猾'
}


export default NPCLevelBtn

function NPCLevelBtn (props: {
    aiLevel: 'weak' | 'normal' | 'strong',
    selected: boolean
}): JSX.Element {
    const { aiLevel, selected } = props
    return (
        <div
            className={`
            ${styles.btn}
            ${globalStyles.yellowBlock}
            ${globalStyles.xyCenter}
            ${selected ? globalStyles.hoverEffect : ''}`}
        >
            {aiLevelToCN[aiLevel]}
        </div> 
    )
}