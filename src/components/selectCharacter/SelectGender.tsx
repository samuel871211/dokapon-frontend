import React, { useEffect, useRef, useState, useContext } from 'react'

import GenderBlockBtn from './GenderBlockBtn'
import { UserSelectContext } from '../../reducers/SelectCharacter'
import globalStyles from '../../global/styles.module.css'
import styles from './SelectGender.module.css'
type gender = 'male' | 'female'

export default function SelectGender (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const { dispatch } = useContext(UserSelectContext)
    const [selectedGender, toggleSelectedGender] = useState<gender>('male')

    useEffect(() => focusElement.current?.focus(), [])

    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowleft':
            toggleSelectedGender(selectedGender === 'male' ? 'female' : 'male')
            break
        case 'arrowright':
            toggleSelectedGender(selectedGender === 'male' ? 'female' : 'male')
            break
        case 'd':
            dispatch({
                type: 'gender',
                payload: selectedGender
            })
            // TODO: NPC Speaking Dialog 請教勇者的名字
            dispatch({
                type: 'currentStep',
                payload: 'BeforeNameInput'
            })
            break
        case 'x':
            dispatch({
                type: 'currentStep',
                payload: 'SelectNumberOfPlayers'
            })
            break
        default:
            break
        }
    }

    return (
        <div
            ref={focusElement}
            className={`
            ${styles.btnGroup}
            ${globalStyles.xyCenter}`}
            tabIndex={0}
            onBlur={(event) => event.target.focus()}
            onKeyDown={handleKeyDown}
        >
            <GenderBlockBtn gender='male' selected={selectedGender === 'male'}/>
            <GenderBlockBtn gender='female' selected={selectedGender === 'female'}/>
        </div>
    )
}