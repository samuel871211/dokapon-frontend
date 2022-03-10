import styles from './index.module.css'

export default AttrCircle

function AttrCircle (props: {
    attr: string,
    value: number,
    fontSize: string
} ): JSX.Element {
    const { attr, value, fontSize } = props

    return (
        <div className={styles.container} style={{ fontSize, lineHeight: fontSize }}>
            <div>{attr}</div>
            <div>{value}</div>
        </div>
    )
}