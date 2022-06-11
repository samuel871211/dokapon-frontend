// Standard library imports.

// Related third party imports.
import { useState, useRef, useContext, AnimationEvent, KeyboardEvent } from 'react'

// Local application/library specific imports.
import { gameProgressContext } from 'reducers/gameProgress'
import { UIStateContext } from 'reducers/SelectCharacter/UIState'
import CustomBorderBottom from 'components/CustomBorderBottom'
import globalStyles from 'assets/styles/globalStyles.module.css'
import styles from './GoalInputDialog.module.css'

// Stateless vars declare.

const typeToCN = { period: '期間', money: '金額' }

export default GoalInputDialog

function GoalInputDialog (): JSX.Element {
    const { gameProgress, gameProgressDispatch } = useContext(gameProgressContext)
    const { UIStateDispatch } = useContext(UIStateContext)
    const { goalType, goalInput: initGoalInput } = gameProgress
    const [isLeave, toggleIsleave] = useState(false)
    const goalInputLen = goalType === 'period' ? 3 : 9
    const goalUnit = goalType === 'period' ? '週' : '¥'
    const focusElement = useRef<HTMLDivElement>(null)
    const [goalInput, setGoalInput] = useState(initGoalInput)
    const [selectedIdx, setSelectedIdx] = useState(goalInputLen - 1)

    function handleAnimationEnd (e: AnimationEvent): void {
        if (e.animationName === styles.slideIn) {
            focusElement.current?.focus()
        }
    }

    function handleKeyUp (e: KeyboardEvent): void {
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
            if (!focusElement.current) break

            toggleIsleave(true)
            focusElement.current.onanimationend = function handleNextComponent () {
                gameProgressDispatch({
                    type: 'goalInput',
                    payload: goalInput
                })
                UIStateDispatch({
                    type: 'currentStep',
                    payload: 'SelectNumberOfPlayers'
                })
            }
            break
        case 'x':
            UIStateDispatch({
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
                    type={goalType}
                    key={i}
                />
            )
        }
        return inputBlocks
    }

    return (
        <div
            className={`${styles.container} ${isLeave ? styles.leave : ''}`}
            tabIndex={0}
            ref={focusElement}
            onBlur={(event) => event.target.focus()}
            onKeyUp={handleKeyUp}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className={styles.title}>
                目標{typeToCN[goalType]}
            </div>
            <CustomBorderBottom/>
            <div className={styles.bottom}>
                <div 
                    className={styles.btnGroup}
                    style={{ width: goalType === 'money' ? '75%' : '30%' }}
                >
                    {generateInputBlocks()}
                </div>
                <div className={styles.unit}>{goalUnit}</div>
            </div>
        </div>
    )
}

function GoalInputBtn (props: {
    type: 'period' | 'money'
    text: string,
    selected: boolean
}): JSX.Element {
    const { text, selected, type } = props
    return (
        <div
            className={`${styles.btn} ${selected ? globalStyles.hoverEffect : ''}`}
            style={{ width : type === 'money' ? 'calc(100% / 9)' : 'calc(100% / 3)' }}
        >
            {text}
        </div>
    )
}