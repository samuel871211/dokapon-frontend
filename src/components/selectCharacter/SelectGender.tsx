import React, { useRef, useState, useContext } from 'react'

import GenderBlockBtn from './GenderBlockBtn'
import { userSelectContext } from '../../reducers/userSelect'
import { slideControllerContext } from '../../reducers/slideController'
import globalStyles from '../../global/styles.module.css'
import styles from './SelectGender.module.css'
type gender = 'male' | 'female'

export default function SelectGender (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const { userSelectDispatch } = useContext(userSelectContext)
    const { slideControllerDispatch } = useContext(slideControllerContext)
    const [isLeave, toggleIsLeave] = useState(false)
    const [selectedGender, toggleSelectedGender] = useState<gender>('male')

    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowleft':
            toggleSelectedGender(selectedGender === 'male' ? 'female' : 'male')
            break
        case 'arrowright':
            toggleSelectedGender(selectedGender === 'male' ? 'female' : 'male')
            break
        case 'd':
            toggleIsLeave(true)
            slideControllerDispatch({
                type: 'titleArea',
                payload: true
            })
            break
        case 'x':
            userSelectDispatch({
                type: 'currentStep',
                payload: 'SelectNumberOfPlayers'
            })
            break
        default:
            break
        }
    }
    function handleAnimationEnd (e: React.AnimationEvent<HTMLDivElement>) {
        if (e.animationName.includes('slideLeft')) {
            focusElement.current?.focus()
            return
        }

        if (e.animationName.includes('slideRight')) {
            toggleIsLeave(false)
            slideControllerDispatch({
                type: 'titleArea',
                payload: false
            })
            userSelectDispatch({
                type: 'gender',
                payload: selectedGender
            })
            userSelectDispatch({
                type: 'currentStep',
                payload: 'BeforeNameInput'
            })
        }
    }

    return (
        <div
            ref={focusElement}
            className={`
            ${styles.btnGroup}
            ${globalStyles.xyCenter}
            ${isLeave ? styles.leave : ''}`}
            tabIndex={0}
            onBlur={(event) => event.target.focus()}
            onKeyDown={handleKeyDown}
            onAnimationEnd={handleAnimationEnd}
        >
            <GenderBlockBtn gender='male' selected={selectedGender === 'male'}/>
            <GenderBlockBtn gender='female' selected={selectedGender === 'female'}/>
        </div>
    )
}