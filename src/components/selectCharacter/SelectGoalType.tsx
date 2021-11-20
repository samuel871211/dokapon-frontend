import { useState, useRef, useEffect, useContext } from 'react'

import { UserSelectDispatch } from '../../reducers/SelectCharacter'
import IconTextBtn from '../IconTextBtn'
import globalStyles from '../../global/styles.module.css'
import styles from './SelectGoalType.module.css'
type goalType = 'period' | 'money'

export default SelectGoalType

function SelectGoalType (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const dispatch  = useContext(UserSelectDispatch)
    const [selectedGoalType, toggleSelectedGoalType] = useState<goalType>('period')

    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            toggleSelectedGoalType(selectedGoalType === 'period' ? 'money' : 'period')
            break
        case 'arrowdown':
            toggleSelectedGoalType(selectedGoalType === 'period' ? 'money' : 'period')
            break
        case 'd':
            dispatch({
                type: 'goalType',
                payload: selectedGoalType
            })
            dispatch({
                type: 'currentStep',
                payload: 'GoalInputDialog'
            })
            break
        case 'x':
            break
        default:
            break
        }
    }

    useEffect(() => focusElement.current?.focus(), [])

    return (
        <div
            ref={focusElement}
            className={`
            ${globalStyles.xyCenter}
            ${styles.container}`}
            tabIndex={0}
            onBlur={(event) => event.target.focus()}
            onKeyDown={handleKeyDown}
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