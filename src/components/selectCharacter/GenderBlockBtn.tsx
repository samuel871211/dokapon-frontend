import globalStyles from '../../global/styles.module.css'
import styles from './GenderBlockBtn.module.css'

const backendUrl = process.env.REACT_APP_BACKEND_BASEURL || ''
const genderToCN = { male: '男', female: '女' }
type props = {
    gender: 'male' | 'female',
    selected: boolean
}

export default GenderBlockBtn

function GenderBlockBtn (props: props): JSX.Element {
    const { gender, selected } = props
    const imgSrc = `${backendUrl}/imgs/beginner_${gender}_red_front.png`

    return (
        <div className={styles.genderBlock}>
            <div className={styles.imgContainer}>
                <img 
                    src={imgSrc}
                    width='100%'
                    alt={genderToCN[gender]}
                    className={selected ? styles.darkenImg: ''}
                />
            </div>
            <div
                className={`
                ${styles.btn}
                ${globalStyles.yellowBlock}
                ${selected ? globalStyles.hoverEffect: ''}`}
            >
                <img src='' width='30px' height='30px'/>
                <div className={styles.btnText}>
                    {genderToCN[gender]}
                </div>
            </div>
        </div>
    )
}