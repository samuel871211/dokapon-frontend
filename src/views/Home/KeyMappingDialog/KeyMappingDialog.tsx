import styles from './KeyMappingDialog.module.css'
import { TransitionStatus } from 'react-transition-group'
import YellowBlock from '../../../layouts/YellowBlock'
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
        <div className={`${styles.container} ${transitionStyles[state]}`}>
            <YellowBlock role='dialog' className={styles.dialog}>
                Press any key to override
            </YellowBlock>
        </div>
    )
}