import React, { useState, useRef, useContext } from 'react'

import { userSelectContext } from '../../reducers/userSelect'
import { slideControllerContext } from '../../reducers/slideController'
import globalStyles from '../../global/styles.module.css'
import styles from './SelectGoalType.module.css'

export default SelectGoalType

function SelectGoalType (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const { userSelectDispatch, userSelect }  = useContext(userSelectContext)
    const { slideControllerDispatch } = useContext(slideControllerContext)
    
    const { goalType } = userSelect
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
                slideControllerDispatch({
                    type: 'titleArea',
                    payload: true
                })
            })()
            focusElement.current.onanimationend = function handleNextComponent () {
                userSelectDispatch({
                    type: 'goalType',
                    payload: selectedGoalType
                })
                userSelectDispatch({
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