import React, { useState, useRef, useContext } from 'react'

import NumberOfPlayersBtn from './NumberOfPlayersBtn'
import styles from './SelectNumberOfPlayers.module.css'
import globalStyles from '../../global/styles.module.css'
import { userSelectContext } from '../../reducers/userSelect'

export default SelectNumberOfPlayers

function SelectNumberOfPlayers (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const { userSelectDispatch, userSelect: { numberOfPlayers } } = useContext(userSelectContext)
    const [isLeave, toggleIsLeave] = useState(false)
    const [selectedPlayerNum, setSelectedPlayerNum] = useState(numberOfPlayers)
    const [keyDownEvtRegister, toggleKeyDownRegister] = useState(true)
    
    function keyDownAttrs () {
        if (keyDownEvtRegister) return {
            tabIndex: 0,
            onKeyDown: handleKeyDown,
            onAnimationEnd: handleAnimationEnd,
            onBlur: reFocus
        }
        
        return {}
    }
    function reFocus (event: React.FocusEvent<HTMLDivElement>) {
        event.currentTarget.focus()
    }
    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            setSelectedPlayerNum(selectedPlayerNum === 1 ? 4 : selectedPlayerNum - 1)
            break
        case 'arrowdown':
            setSelectedPlayerNum(selectedPlayerNum === 4 ? 1 : selectedPlayerNum + 1)
            break
        case 'd':
            if (selectedPlayerNum === 1) {
                userSelectDispatch({
                    type: 'currentStep',
                    payload: 'OnlyOnePlayer'
                })
                toggleKeyDownRegister(false)
                break
            }
            toggleIsLeave(true)
            break
        case 'x':
            userSelectDispatch({
                type: 'currentStep',
                payload: 'GoalInputDialog'
            })
            break
        default:
            break
        }
    }

    function handleAnimationEnd (e: React.AnimationEvent<HTMLDivElement>): void {
        if (e.animationName.includes('slideLeft')) {
            focusElement.current?.focus()
            return
        }

        if (e.animationName.includes('slideRight')) {
            toggleIsLeave(false)
            userSelectDispatch({
                type: 'numberOfPlayers',
                payload: String(selectedPlayerNum)
            })
            userSelectDispatch({
                type: 'currentStep',
                payload: 'SelectGender'
            })
        }
    }

    /* Box無法加入ref這個prop => 改用div */
    /* 為何使用useRef => https://stackoverflow.com/questions/37273876/reactjs-this-refs-vs-document-getelementbyid/37274379 */
    /* ts搭配useRef各種噴錯 => https://linguinecode.com/post/how-to-use-react-useref-with-typescript */
    return (
        <div
            ref={focusElement}
            className={`
            ${styles.btnGroup}
            ${globalStyles.xyCenter}
            ${isLeave ? styles.leave : ''}`}
            { ...keyDownAttrs() }
            // tabIndex={0}
            // onKeyDown={handleKeyDown}
            // onAnimationEnd={handleAnimationEnd}
            // onBlur={(event) => event.target.focus() }
        >
            <NumberOfPlayersBtn playerNum={1} selected={selectedPlayerNum === 1}/>
            <NumberOfPlayersBtn playerNum={2} selected={selectedPlayerNum === 2}/>
            <NumberOfPlayersBtn playerNum={3} selected={selectedPlayerNum === 3}/>
            <NumberOfPlayersBtn playerNum={4} selected={selectedPlayerNum === 4}/>
        </div>
    )
}