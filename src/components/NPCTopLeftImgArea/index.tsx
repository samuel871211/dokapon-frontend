import { useContext } from 'react'
import styles from './index.module.css'
import { slideControllerContext } from '../../reducers/slideController'

export default NPCTopLeftImgArea

function NPCTopLeftImgArea (props: { src: string, alt: string }): JSX.Element {
    const { slideState } = useContext(slideControllerContext)
    const { NPCTopLeftImgArea } = slideState
    const { src, alt } = props
    
    // template
    return (
        <div
            className={`
            ${styles.container}
            ${NPCTopLeftImgArea ? styles.leave : ''}`}
        >
            <div className={styles.biggestSquare}>
                <img src={src} alt={alt} className={styles.guideImg}/>
            </div>
        </div>
    )
}