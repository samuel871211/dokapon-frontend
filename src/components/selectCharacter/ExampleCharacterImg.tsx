import globalStyles from '../../global/styles.module.css'
import styles from './ExampleCharacterImg.module.css'

const prefix = process.env.REACT_APP_BACKEND_BASEURL || ''

export default ExampleCharacterImg

function ExampleCharacterImg (props: { color: string, job: string }): JSX.Element {
    const { color, job } = props
    
    return (
        <div
            className={`
            ${styles.container}
            ${globalStyles.xyCenter}`}
        >
            {/* prop color change => react只會更新img src */}
            {/* 但如果再把img包成component，就會有fade特效了 */}
            <img
                src={`${prefix}/imgs/${job}_male_${color}_front.png`}
                className={`${styles.img} ${styles.fade}`}
            />
        </div>
    )
}