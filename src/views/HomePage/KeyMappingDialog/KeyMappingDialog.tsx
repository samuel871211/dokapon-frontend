import styles from './KeyMappingDialog.module.css'
import { TransitionStatus } from 'react-transition-group'
import classNames from 'classnames'
const transitionStyles = {
    exiting: styles.slideOut,
    exited: styles.slideOut,
    unmounted: styles.slideOut,
    entering: styles.slideIn,
    entered: styles.slideIn
}

export default KeyMappingDialog

function KeyMappingDialog (props: { state: TransitionStatus }): JSX.Element {
    const { state } = props
    return (
        <div className={classNames({
            [styles.container]: true,
            [transitionStyles[state]]: true
        })}>
            <div className={styles.dialog}>
                Press any key to override
            </div>
        </div>
    )
}