import globalStyles from '../../global/styles.module.css'
import styles from './ColorBtn.module.css'

export default ColorBtn

function ColorBtn (props: {
    rgb: string,
    name: string,
    selected: boolean
}): JSX.Element {
    const { rgb, name, selected } = props
    return (
        <div
            className={`
            ${styles.btn}
            ${globalStyles.yellowBlock}
            ${selected ? globalStyles.hoverEffect : ''}`}
        >
            <div className={styles.circle} style={{ backgroundColor: rgb }}></div>
            <div className={styles.name}>{name}</div>
        </div>
    )
}