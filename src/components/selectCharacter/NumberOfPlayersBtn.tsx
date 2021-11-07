import PersonIcon from '@material-ui/icons/Person'
import AdbIcon from '@material-ui/icons/Adb'
import styles from '../../css/NumberOfPlayersBtn.module.css'
import globalStyles from '../../css/Global.module.css'
const digitToFullWidth = ['', '１', '２', '３', '４']

export default NumberOfPlayersBtn

function NumberOfPlayersBtn (props: { playerNum: number, selected: boolean }): JSX.Element {
    const { playerNum, selected } = props

    function generateIcons () {
        const icons = []
        for (let i = 0; i < 4; i++) {
            if (i < playerNum) {
                icons.push(<PersonIcon key={i} fontSize='large'/>)
            } else {
                icons.push(<AdbIcon key={i} fontSize='large'/>)
            }
        }
        return icons
    }
    return (
        <div
            className={`
            ${styles.btn}
            ${globalStyles.yellowBlock}
            ${selected ? globalStyles.hoverEffect : ''}`}
            role='button'
        >
            {generateIcons()}
            <div className={styles.btnText}>
                {digitToFullWidth[playerNum]}人
            </div>
        </div>
    )
}