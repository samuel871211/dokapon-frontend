import { useContext } from 'react'
import styles from './index.module.css'
import { UIStateContext } from '../../reducers/SelectCharacter/UIState'

export default NPCTopLeftImgArea

function NPCTopLeftImgArea (props: { src: string, alt: string }): JSX.Element {
    const { UIState: { showNPCTopLeftImgArea } } = useContext(UIStateContext)
    const { src, alt } = props
    
    // template
    return (
        <div
            className={`
            ${styles.container}
            ${showNPCTopLeftImgArea ? '' : styles.leave}`}
        >
            <div className={styles.biggestSquare}>
                <img src={src} alt={alt} className={styles.guideImg}/>
            </div>
        </div>
    )
}