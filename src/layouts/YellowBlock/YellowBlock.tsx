// Standard library imports.

// Related third party imports.
import { ReactNode } from 'react'
import classNames from 'classnames'

// Local application/library specific imports.
import styles from './YellowBlock.module.css'
import globalStyles from 'assets/styles/globalStyles.module.css'

// Stateless vars declare.

export default YellowBlock

function YellowBlock (props: {
    children: ReactNode | ReactNode[],
    role?: 'dialog' | 'button' | 'title',
    selected?: boolean,
    className?: string,
    // borderRadius?: string,
}): JSX.Element {
    // eslint-disable-next-line
    const { selected, className, children, role } = props
    return (
        <div className={classNames(
            styles.yellowBlock,
            className,
            { [globalStyles.hoverEffect]: selected }
        )}>
            <>{children}</>
        </div>
    )
}