import styles from './TopArea.module.css'
import { ReactNode } from 'react'
import classNames from 'classnames'

export default TopArea

/**
 * default height = 70%, width = 100%
 */
function TopArea (props: {
    className?: string,
    children?: ReactNode | ReactNode[],
    height?: string,
    flex?: true
}): JSX.Element {
    const { className, children, height, flex } = props
    return (
        <div 
            className={classNames(
                styles.topArea,
                className, 
                { [styles.flex]: flex }
            )}
            style={{ height }}
        >
            <>{children}</>
        </div>
    )
}