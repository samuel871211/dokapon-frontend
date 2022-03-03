import React, { useState, useRef, useContext } from 'react'

import { gameProgressContext } from '../../../reducers/gameProgress'
import { UIStateContext } from '../../../reducers/SelectCharacter/UIState'
import globalStyles from '../../../global/styles.module.css'
import styles from './index.module.css'

export default SelectGoalType

function SelectGoalType (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const { gameProgressDispatch, gameProgress }  = useContext(gameProgressContext)
    const { UIStateDispatch } = useContext(UIStateContext)
    
    const { goalType } = gameProgress
    const [isLeave, toggleIsLeave] = useState(false)
    const [selectedGoalType, toggleSelectedGoalType] = useState(goalType)

    function handleKeyUp (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            toggleSelectedGoalType(selectedGoalType === 'period' ? 'money' : 'period')
            break
        case 'arrowdown':
            toggleSelectedGoalType(selectedGoalType === 'period' ? 'money' : 'period')
            break
        case 'd':
            if (!focusElement.current) break

            (function handleAnimation () {
                toggleIsLeave(true)
                UIStateDispatch({
                    type: 'showTitleArea',
                    payload: false
                })
            })()
            focusElement.current.onanimationend = function handleNextComponent () {
                gameProgressDispatch({
                    type: 'goalType',
                    payload: selectedGoalType
                })
                UIStateDispatch({
                    type: 'currentStep',
                    payload: 'GoalInputDialog'
                })
            }
            break
        case 'x':
            // TODO: handle animation
            window.location.assign('/')
            break
        default:
            break
        }
    }

    function autoFocusElement (e: React.AnimationEvent<HTMLDivElement>): void {
        if (e.animationName === styles.slideIn) {
            focusElement.current?.focus()
        }
    }

    return (
        <div
            ref={focusElement}
            className={`
            ${globalStyles.xyCenter}
            ${styles.container}
            ${isLeave ? styles.leave : ''}`}
            tabIndex={0}
            onBlur={(event) => event.target.focus()}
            onKeyUp={handleKeyUp}
            onAnimationEnd={autoFocusElement}
        >
            <IconTextBtn text='期間目標' selected={selectedGoalType === 'period'}/>
            <IconTextBtn text='金額目標' selected={selectedGoalType === 'money'}/>
        </div>
    )
}

function IconTextBtn (props: { text: string, selected: boolean }): JSX.Element {
    const { text, selected } = props
    return (
        <div
            className={`
            ${globalStyles.yellowBlock}
            ${selected ? globalStyles.hoverEffect : ''}
            ${styles.btn}`}
        >
            <div className={styles.imgContainer}>
                <img className={styles.img}/>
            </div>
            <span>{text}</span>
        </div>
    )
}