import globalStyles from '../../css/Global.module.css'
import styles from '../../css/ColorBtn.module.css'

export default ColorBtn

function ColorBtn (props: {
    rgb: string,
    name: string,
    selected: boolean
}): JSX.Element {
    const { rgb, name, selected } = props
    return (
        <div
            role='button'
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