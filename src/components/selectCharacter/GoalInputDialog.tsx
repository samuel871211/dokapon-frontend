import { useState, useRef, useEffect } from 'react'
import CustomBorderBottom from '../CustomBorderBottom'
import GoalInputBtn from './GoalInputBtn'
import globalStyles from '../../global/styles.module.css'
import styles from './GoalInputDialog.module.css'

const typeToCN = { duration: '期間', money: '金額' }

export default GoalInputDialog

function GoalInputDialog (): JSX.Element {
    let type: 'duration' | 'money' = 'duration'
    if (Math.random() === 3) type = 'money'

    const goalInputLen = type === 'duration' ? 3 : 9
    const goalUnit = type === 'duration' ? '週' : '¥'
    const focusElement = useRef<HTMLDivElement>(null)
    const [goalInput, setGoalInput] = useState(1)
    const [selectedIdx, setSelectedIdx] = useState(goalInputLen - 1)

    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            // setSelectedIdx(selectedIdx === 0 ? 4 : selectedIdx - 1)
            break
        case 'arrowdown':
            // setSelectedIdx(selectedIdx === 4 ? 0 : selectedIdx + 1)
            break
        case 'arrowleft':
            setSelectedIdx(selectedIdx === 0 ? 0 : selectedIdx - 1)
            break
        case 'arrowright':
            setSelectedIdx(selectedIdx === goalInputLen - 1 ? goalInputLen - 1 : selectedIdx + 1)
            break
        case 'd':
            break
        case 'x':
            break
        default:
            break
        }
    }

    function generateInputBlocks () {
        const inputBlocks: JSX.Element[] = []
        const numberToArray = transferNumberToArray()
        
        function transferNumberToArray () {
            const result = String(goalInput).split('')
            const initResultLen = result.length
            for (let i = 0; i < goalInputLen - initResultLen; i++) {
                result.unshift('')
            }
            return result
        }

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

    useEffect(() => focusElement.current?.focus(), [])

    return (
        <div
            className={`
            ${styles.container}
            ${globalStyles.yellowBlock}`}
            tabIndex={0}
            ref={focusElement}
            onBlur={(event) => event.target.focus()}
            onKeyDown={handleKeyDown}
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