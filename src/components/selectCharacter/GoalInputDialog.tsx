import React, { useState, useRef, useContext } from 'react'
import { userSelectContext } from '../../reducers/userSelect'
import CustomBorderBottom from '../CustomBorderBottom'
import GoalInputBtn from './GoalInputBtn'
import globalStyles from '../../global/styles.module.css'
import styles from './GoalInputDialog.module.css'

const typeToCN = { period: '期間', money: '金額' }

export default GoalInputDialog

function GoalInputDialog (): JSX.Element {
    const {
        userSelectDispatch,
        userSelect: {
            goalType: type,
            goalInput: initGoalInput
        }
    } = useContext(userSelectContext)
    const [isLeave, toggleIsleave] = useState(false)
    const goalInputLen = type === 'period' ? 3 : 9
    const goalUnit = type === 'period' ? '週' : '¥'
    const focusElement = useRef<HTMLDivElement>(null)
    const [goalInput, setGoalInput] = useState(initGoalInput)
    const [selectedIdx, setSelectedIdx] = useState(goalInputLen - 1)

    function handleAnimationEnd (e: React.AnimationEvent): void {
        if (e.animationName.includes('slideLeft')) {
            focusElement.current?.focus()
            return
        }

        if (e.animationName.includes('slideRight')) {
            userSelectDispatch({
                type: 'goalInput',
                payload: String(goalInput)
            })
            userSelectDispatch({
                type: 'currentStep',
                payload: 'SelectNumberOfPlayers'
            })
        }
    }

    function handleKeyUp (e: React.KeyboardEvent): void {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            (function handleAdd () {
                const fillEmpty = '0'
                const goalInputArr = transferNumberToArray(goalInput, fillEmpty)
                let focusNumber = goalInputArr[selectedIdx]
                if (focusNumber === '') focusNumber = '1'
                else if (focusNumber === '9') focusNumber = '0'
                else focusNumber = String(parseInt(focusNumber) + 1)
                goalInputArr[selectedIdx] = focusNumber
                setGoalInput(transferArrayToNumber(goalInputArr))
            }())
            break
        case 'arrowdown':
            (function handleMinus () {
                const fillEmpty = '0'
                const goalInputArr = transferNumberToArray(goalInput, fillEmpty)
                let focusNumber = goalInputArr[selectedIdx]
                if (focusNumber === '') focusNumber = '9'
                else if (focusNumber === '0') focusNumber = '9'
                else focusNumber = String(parseInt(focusNumber) - 1)
                goalInputArr[selectedIdx] = focusNumber
                setGoalInput(transferArrayToNumber(goalInputArr))
            }())
            break
        case 'arrowleft':
            if (selectedIdx !== 0) return (setSelectedIdx(selectedIdx - 1))

            setGoalInput(Math.pow(10, goalInputLen) - 1)
            break
        case 'arrowright':
            if (selectedIdx !== goalInputLen - 1) return (setSelectedIdx(selectedIdx + 1))

            setGoalInput(0)
            break
        case 'd':
            toggleIsleave(true)
            break
        case 'x':
            userSelectDispatch({
                type: 'currentStep',
                payload: 'SelectGoalType'
            })
            break
        default:
            break
        }
    }

    function transferNumberToArray (num: number, fillEmpty: string) {
        const result = String(num).split('')
        const initResultLen = result.length
        for (let i = 0; i < goalInputLen - initResultLen; i++) {
            result.unshift(fillEmpty)
        }
        return result
    }

    function transferArrayToNumber (arr: string[]) {
        return parseInt(arr.join(''))
    }


    function generateInputBlocks () {
        const inputBlocks: JSX.Element[] = []
        const fillEmpty = ''
        const numberToArray = transferNumberToArray(goalInput, fillEmpty)

        for (let i = 0; i < goalInputLen; i++) {
            inputBlocks.push(
                <GoalInputBtn
                    text={numberToArray[i]}
                    selected={selectedIdx === i}
                    type={type}
                    key={i}
                />
            )
        }
        return inputBlocks
    }

    return (
        <div
            className={`
            ${styles.container}
            ${globalStyles.yellowBlock}
            ${isLeave ? styles.leave : ''}`}
            tabIndex={0}
            ref={focusElement}
            onBlur={(event) => event.target.focus()}
            onKeyUp={handleKeyUp}
            onAnimationEnd={handleAnimationEnd}
        >
            <div
                className={`
                ${styles.title}
                ${globalStyles.xyCenter}`}
            >
                目標{typeToCN[type]}
            </div>
            <CustomBorderBottom/>
            <div
                className={`
                ${globalStyles.xyCenter}
                ${styles.bottom}`}
            >
                <div
                    className={`
                    ${globalStyles.xyCenter}
                    ${globalStyles.yellowBlock}
                    ${type === 'money' ? styles.moneyBtnGroup : styles.durationBtnGroup }`}
                >
                    {generateInputBlocks()}
                </div>
                <div className={styles.unit}>{goalUnit}</div>
            </div>
        </div>
    )
}