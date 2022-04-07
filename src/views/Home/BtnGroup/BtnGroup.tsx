import styles from './BtnGroup.module.css'
import { TransitionStatus } from 'react-transition-group'
import { useState, useEffect, useRef, useContext, SyntheticEvent, KeyboardEvent } from 'react'
import { UIStateContext } from '../../../reducers/Home/UIState'
import useTranslation from '../../../hooks/useTranslation'
import { userPreferenceContext } from '../../../reducers/userPreference'
import YellowBlock from '../../../layouts/YellowBlock'
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
    const { handleKeyUpAttrs, selectedBtnIdx, t } = useMetaData(state)
    return (
        <div
            className={transitionStyles[state]}
            { ...handleKeyUpAttrs }
        >
            <YellowBlock 
                role='button'
                selected={selectedBtnIdx === 0}
                className={styles.btn}
            >
                <img className={styles.img}/>
                {t('はじめから')}
            </YellowBlock>
            <YellowBlock 
                role='button'
                selected={selectedBtnIdx === 1}
                className={styles.btn}
            >
                <img className={styles.img}/>
                {t('フリー対戦')}
            </YellowBlock>
            <YellowBlock 
                role='button'
                selected={selectedBtnIdx === 2}
                className={styles.btn}
            >
                <img className={styles.img}/>
                {t('図鑑')}
            </YellowBlock>
            <YellowBlock 
                role='button'
                selected={selectedBtnIdx === 3}
                className={styles.btn}
            >
                <img className={styles.img}/>
                {t('設定')}
            </YellowBlock>
        </div>
    )
}

function useMetaData (state: TransitionStatus) {
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
    function focusOnEntered () { if (state === 'entered') focusElement.current?.focus() }

    useEffect(focusOnEntered, [state])
    return {
        handleKeyUpAttrs,
        selectedBtnIdx,
        t
    }
}