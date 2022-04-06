import styles from './BtnGroup.module.css'
import globalStyles from '../../../assets/styles/globalStyles.module.css'
import { TransitionStatus } from 'react-transition-group'
import { useState, useEffect, useRef, useContext, SyntheticEvent, KeyboardEvent } from 'react'
import { UIStateContext } from '../../../reducers/Home/UIState'
import useTranslation from '../../../hooks/useTranslation'
import { userPreferenceContext } from '../../../reducers/userPreference'
import classNames from 'classnames'
const transitionStyles = {
    exiting: styles.fadeOut,
    exited: styles.fadeOut,
    unmounted: styles.fadeOut,
    entering: styles.fadeIn,
    entered: styles.fadeIn
}

export default BtnGroup

function BtnGroup (props: { state: TransitionStatus }): JSX.Element {
    const { state } = props
    const [selectedBtnIdx, setSelectedBtnIdx] = useState(0)
    const { UIState, UIStateDispatch } = useContext(UIStateContext)
    const { userPreference } = useContext(userPreferenceContext)
    const { t } = useTranslation(userPreference.lang)
    const focusElement = useRef<HTMLDivElement>(null)
    const handleKeyUpAttrs = UIState.showBtnGroup ? {
        tabIndex: 0,
        ref: focusElement,
        onBlur: (event: SyntheticEvent<HTMLDivElement>) => event.currentTarget.focus(),
        onKeyUp: handleKeyUp
    } : {}
    function handleKeyUp (e: KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case userPreference.arrowUp:
            setSelectedBtnIdx(selectedBtnIdx === 0 ? 3 : selectedBtnIdx - 1)
            return
        case userPreference.arrowDown:
            setSelectedBtnIdx(selectedBtnIdx === 3 ? 0 : selectedBtnIdx + 1)
            return
        case userPreference.circle: {
            switch (selectedBtnIdx) {
            case 0:
            case 1:
                window.location.assign('/select-character')
                return
            case 2:
                UIStateDispatch({
                    type: 'showBook',
                    payload: true
                })
                UIStateDispatch({
                    type: 'showBtnGroup',
                    payload: false
                })
                return
            case 3:
                UIStateDispatch({
                    type: 'showSetting',
                    payload: true
                })
                UIStateDispatch({
                    type: 'showBtnGroup',
                    payload: false
                })
                return
            default:
                return
            }
        }
        default:
            return
        }
    }

    useEffect(function focusOnEntered () {
        if (state === 'entered') focusElement.current?.focus()
    }, [state])

    return (
        <div
            className={transitionStyles[state]}
            { ...handleKeyUpAttrs }
        >
            <Btn text={t('はじめから')} selected={selectedBtnIdx === 0}/>
            <Btn text={t('フリー対戦')} selected={selectedBtnIdx === 1}/>
            <Btn text={t('図鑑')} selected={selectedBtnIdx === 2}/>
            <Btn text={t('設定')} selected={selectedBtnIdx === 3}/>
        </div>
    )
}

function Btn (props: { text: string, selected: boolean }): JSX.Element {
    const { text, selected } = props
    return (
        <div className={classNames({
            [styles.btn]: true,
            [globalStyles.hoverEffect]: selected
        })}>
            <img className={styles.img}/>
            <span>{text}</span>
        </div>
    )
}