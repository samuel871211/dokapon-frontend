import styles from './BottomArea.module.css'
import { ReactChild } from 'react'

export default BottomArea

/**
 * default height = 30%, width = 100%
 */
function BottomArea (props: {
    className?: string,
    children?: ReactChild | ReactChild[],
    height?: string
}): JSX.Element {
    const { className, children, height } = props
    return (
        <div 
            className={`${styles.bottomArea} ${className}`}
            style={{ height }}
        >
            <>{children}</>
        </div>
    )
}