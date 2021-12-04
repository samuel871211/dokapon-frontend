import React, { useState, useRef, useEffect, useContext } from 'react'

import { userSelectContext } from '../../reducers/userSelect'
import { slideControllerContext } from '../../reducers/slideController'
import IconTextBtn from '../IconTextBtn'
import globalStyles from '../../global/styles.module.css'
import styles from './SelectGoalType.module.css'
// type goalType = 'period' | 'money'

export default SelectGoalType

function SelectGoalType (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const { userSelectDispatch, userSelect }  = useContext(userSelectContext)
    const { slideControllerDispatch } = useContext(slideControllerContext)
    
    const { goalType } = userSelect
    const [isLeave, toggleIsLeave] = useState(false)
    const [selectedGoalType, toggleSelectedGoalType] = useState(goalType)

    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            toggleSelectedGoalType(selectedGoalType === 'period' ? 'money' : 'period')
            break
        case 'arrowdown':
            toggleSelectedGoalType(selectedGoalType === 'period' ? 'money' : 'period')
            break
        case 'd':
            toggleIsLeave(true)
            slideControllerDispatch({
                type: 'titleArea',
                payload: true
            })
            break
        case 'x':
            // TODO: handle animation
            window.location.assign('/')
            break
        default:
            break
        }
    }

    function handleAnimation (e: React.AnimationEvent<HTMLDivElement>) {
        if (e.animationName.includes('slideLeft')) return
        
        userSelectDispatch({
            type: 'goalType',
            payload: selectedGoalType
        })
        userSelectDispatch({
            type: 'currentStep',
            payload: 'GoalInputDialog'
        })
    }

    useEffect(() => focusElement.current?.focus(), [])

    return (
        <div
            ref={focusElement}
            className={`
            ${globalStyles.xyCenter}
            ${styles.container}
            ${isLeave ? styles.leave : ''}`}
            tabIndex={0}
            onBlur={(event) => event.target.focus()}
            onKeyDown={handleKeyDown}
            onAnimationEnd={handleAnimation}
        >
            <IconTextBtn
                text='期間目標'
                selected={selectedGoalType === 'period'}
                customClass={styles.btn}
            />
            <IconTextBtn
                text='金額目標'
                selected={selectedGoalType === 'money'}
                customClass={styles.btn}
            />
        </div>
    )
}