import styles from './BottomArea.module.css'
import { ReactNode } from 'react'
import classNames from 'classnames'

export default BottomArea

/**
 * default height = 30%, width = 100%
 */
function BottomArea (props: {
    className?: string,
    children?: ReactNode | ReactNode[],
    height?: string
}): JSX.Element {
    const { className, children, height } = props
    return (
        <div 
            className={classNames(styles.bottomArea, className)}
            style={{ height }}
        >
            <>{children}</>
        </div>
    )
}