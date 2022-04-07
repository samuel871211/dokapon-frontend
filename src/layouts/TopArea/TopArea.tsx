import styles from './TopArea.module.css'
import { ReactChild } from 'react'

export default TopArea

/**
 * default height = 70%, width = 100%
 */
function TopArea (props: {
    className?: string,
    children?: ReactChild | ReactChild[],
    height?: string
}): JSX.Element {
    const { className, children, height } = props
    return (
        <div 
            className={`${styles.topArea} ${className}`}
            style={{ height }}
        >
            <>{children}</>
        </div>
    )
}