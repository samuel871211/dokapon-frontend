import { useContext, useRef, SyntheticEvent, KeyboardEvent } from 'react'
import { TransitionStatus } from 'react-transition-group'
import useTranslation from '../../../global/translation'
import { UIStateContext } from '../../../reducers/Game/UIState'
import { userPreferenceContext } from '../../../reducers/userPreference'
import styles from './Bag.module.css'

export default Bag

function Bag (props: {state: TransitionStatus }): JSX.Element {
    const { state } = props
    return (
        <div className={styles.container}></div>
    )
}

function useMetaData () {
    const { userPreference } = useContext(userPreferenceContext)
    const { UIState, UIStateDispatch } = useContext(UIStateContext)
    const { t } = useTranslation(userPreference.lang)
    const focusElement = useRef<HTMLDivElement>(null)
    const handleKeyUpAttrs = UIState.showBag ? {
        tabIndex: 0,
        ref: focusElement,
        onBlur: (event: SyntheticEvent<HTMLDivElement>) => event.currentTarget.focus(),
        onKeyUp: handleKeyUp
    } : {}
    function focusWhenEntered (state: TransitionStatus) {
        if (state === 'entered') focusElement.current?.focus()
    }
    function handleKeyUp (e: KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case userPreference.arrowUp:
            return
        case userPreference.arrowDown:
            return
        case userPreference.arrowLeft:
            return
        case userPreference.arrowRight:
            return
        case userPreference.R1:
        case userPreference.R2:
            return
        case userPreference.L1:
        case userPreference.L2:
            return
        case userPreference.circle:
            return
        case userPreference.cross:
            return
        }
    }
}