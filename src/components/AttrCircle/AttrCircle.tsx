// Standard library imports.

// Related third party imports.

// Local application/library specific imports.
import styles from './AttrCircle.module.css'

// Stateless vars declare.

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