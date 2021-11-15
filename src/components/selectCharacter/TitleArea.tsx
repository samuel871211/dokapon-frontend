import styles from './TitleArea.module.css'

export default TitleArea

function TitleArea (props: { title: string }): JSX.Element {
    const { title } = props
    
    return (
        <div className={styles.container}>{title}</div>
    )
}