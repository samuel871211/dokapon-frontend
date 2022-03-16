import styles from './BtnGroup.module.css'
import globalStyles from '../../../global/styles.module.css'
import { TransitionStatus } from 'react-transition-group'
import { useState, useEffect, useRef, useContext, SyntheticEvent, KeyboardEvent } from 'react'
import { UIStateContext } from '../../../reducers/HomePage/UIState'
import { texts } from './texts'
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
    const focusElement = useRef<HTMLDivElement>(null)
    const handleKeyUpAttrs = UIState.showBtnGroup ? {
        tabIndex: 0,
        ref: focusElement,
        onBlur: (event: SyntheticEvent<HTMLDivElement>) => event.currentTarget.focus(),
        onKeyUp: handleKeyUp
    } : {}
    function handleKeyUp (e: KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            setSelectedBtnIdx(selectedBtnIdx === 0 ? 3 : selectedBtnIdx - 1)
            return
        case 'arrowdown':
            setSelectedBtnIdx(selectedBtnIdx === 3 ? 0 : selectedBtnIdx + 1)
            return
        case 'd': {
            switch (texts.btn[selectedBtnIdx].cn) {
            case '從頭開始':
            case '自由對戰':
                window.location.assign('/SelectCharacter')
                return
            case '圖鑑':
                UIStateDispatch({
                    type: 'showBook',
                    payload: true
                })
                UIStateDispatch({
                    type: 'showBtnGroup',
                    payload: false
                })
                return
            case '設定':
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
            <Btn text='故事模式' selected={selectedBtnIdx === 0}/>
            <Btn text='對戰模式' selected={selectedBtnIdx === 1}/>
            <Btn text='圖鑑' selected={selectedBtnIdx === 2}/>
            <Btn text='設定' selected={selectedBtnIdx === 3}/>
        </div>
    )
}

function Btn (props: { text: string, selected: boolean }): JSX.Element {
    const { text, selected } = props
    return (
        <div className={`${styles.btn} ${selected ? globalStyles.hoverEffect : ''}`}>
            <div className={styles.imgContainer}>
                <img className={styles.img}/>
            </div>
            <span>{text}</span>
        </div>
    )
}