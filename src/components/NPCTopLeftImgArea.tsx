import styles from './NPCTopLeftImgArea.module.css'

export default NPCTopLeftImgArea

function NPCTopLeftImgArea (props: { src: string, alt: string }): JSX.Element {
    const { src, alt } = props
    
    // template
    return (
        <div className={styles.container}>
            <div className={styles.biggestSquare}>
                <img src={src} alt={alt} className={styles.guideImg}/>
            </div>
        </div>
    )
}