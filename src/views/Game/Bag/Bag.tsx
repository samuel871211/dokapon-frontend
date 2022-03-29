import classNames from 'classnames'
import { useContext, useRef, SyntheticEvent, KeyboardEvent, useEffect } from 'react'
import { TransitionStatus } from 'react-transition-group'
import useTranslation from '../../../global/translation'
import { UIStateContext } from '../../../reducers/Game/UIState'
import { userPreferenceContext } from '../../../reducers/userPreference'
import styles from './Bag.module.css'
const transitionStyles = {
    topArea: {
        entering: styles.topAreaEntering,
        entered: styles.topAreaEntered,
        exiting: styles.topAreaExiting,
        exited: '',
        unmounted: ''
    },
    centerArea: {
        entering: '',
        entered: styles.centerAreaEntered,
        exiting: styles.centerAreaExiting,
        exited: '',
        unmounted: ''
    },
    bottomArea: {
        entering: '',
        entered: styles.bottomAreaEntered,
        exiting: styles.bottomAreaExiting,
        exited: '',
        unmounted: ''
    }
}

export default Bag

function Bag (props: {state: TransitionStatus }): JSX.Element {
    const { t, handleKeyUp, state, focusElement, handleKeyUpAttrs } = useMetaData(props)
    return (
        <div
            className={styles.container}
            ref={focusElement}
            { ... handleKeyUpAttrs }
            onKeyUp={handleKeyUp}
        >
            <div className={classNames(
                `${styles.topArea}`, `${transitionStyles.topArea[state]}`
            )}>
                <div className={styles.swiperContainer}>
                    <div className={styles.swiper}>
                        <div className={styles.square}>L</div>
                        <div className={styles.swiperText}>{t('アイテム')}</div>
                        <div className={styles.square}>R</div>
                    </div>
                </div>
            </div>
            <div className={classNames(
                `${styles.centerArea}`, `${transitionStyles.centerArea[state]}`
            )}>
                <div className={styles.itemAndMagicContainer}>
                    <div className={styles.itemContainer}>
                        <div className={styles.item}>a</div>
                        <div className={styles.item}>a</div>
                        <div className={styles.item}>a</div>
                        <div className={styles.item}>a</div>
                        <div className={styles.item}>a</div>
                        <div className={styles.item}>a</div>
                        <div className={styles.item}>a</div>
                        <div className={styles.item}>a</div>
                        <div className={styles.item}>a</div>
                        <div className={styles.item}>a</div>
                        <div className={styles.item}>a</div>
                        <div className={styles.item}>a</div>
                    </div>
                    <div className={styles.magicContainer}>

                    </div>
                </div>
            </div>
            <div className={classNames(
                `${styles.bottomArea}`, `${transitionStyles.bottomArea[state]}`
            )}>

            </div>
        </div>
    )
}

function useMetaData (props: {state: TransitionStatus }) {
    const { state } = props
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
            UIStateDispatch({
                type: 'showBag',
                payload: false
            })
            return
        }
    }
    useEffect(() => focusWhenEntered(state), [state])
    return {
        t,
        handleKeyUp,
        state,
        focusElement,
        handleKeyUpAttrs
    }
}