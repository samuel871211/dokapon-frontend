import globalStyles from '../../global/styles.module.css'
import styles from './JobBtn.module.css'

export default JobBtn

function JobBtn (props: { name: string, selected: boolean }): JSX.Element {
    const { name, selected } = props
    return (
        <div
            className={`
            ${styles.btn}
            ${globalStyles.yellowBlock}
            ${globalStyles.xyCenter}
            ${selected ? globalStyles.hoverEffect : ''}`}
        >
            {name}
        </div>
    )
}