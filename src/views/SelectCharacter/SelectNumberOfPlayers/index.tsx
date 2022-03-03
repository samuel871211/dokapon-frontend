import React, { useState, useRef, useContext } from 'react'
import PersonIcon from '@material-ui/icons/Person'
import AdbIcon from '@material-ui/icons/Adb'
import styles from './index.module.css'
import globalStyles from '../../../global/styles.module.css'
import { gameProgressContext } from '../../../reducers/gameProgress'
import { UIStateContext } from '../../../reducers/SelectCharacter/UIState'
const digitToFullWidth = ['', '１', '２', '３', '４']

export default SelectNumberOfPlayers

function SelectNumberOfPlayers (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const { UIStateDispatch } = useContext(UIStateContext)
    const { gameProgressDispatch, gameProgress: { numberOfPlayers } } = useContext(gameProgressContext)
    const [isLeave, toggleIsLeave] = useState(false)
    const [selectedPlayerNum, setSelectedPlayerNum] = useState(numberOfPlayers)
    const [keyDownEvtRegister, toggleKeyDownRegister] = useState(true)
    
    function keyDownAttrs () {
        if (keyDownEvtRegister) return {
            tabIndex: 0,
            onKeyUp: handleKeyUp,
            onAnimationEnd: handleAnimationEnd,
            onBlur: reFocus
        }
        
        return {}
    }
    function reFocus (event: React.FocusEvent<HTMLDivElement>) {
        event.currentTarget.focus()
    }
    function handleKeyUp (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            setSelectedPlayerNum(selectedPlayerNum === 1 ? 4 : selectedPlayerNum - 1)
            break
        case 'arrowdown':
            setSelectedPlayerNum(selectedPlayerNum === 4 ? 1 : selectedPlayerNum + 1)
            break
        case 'd':
            if (selectedPlayerNum === 1) {
                UIStateDispatch({
                    type: 'currentStep',
                    payload: 'OnlyOnePlayer'
                })
                toggleKeyDownRegister(false)
                break
            }
            if (!focusElement.current) break
            toggleIsLeave(true)
            focusElement.current.onanimationend = function handleNextComponent () {
                gameProgressDispatch({
                    type: 'numberOfPlayers',
                    payload: selectedPlayerNum
                })
                UIStateDispatch({
                    type: 'currentStep',
                    payload: 'SelectGender'
                })
            }
            break
        case 'x':
            UIStateDispatch({
                type: 'currentStep',
                payload: 'GoalInputDialog'
            })
            break
        default:
            break
        }
    }

    function handleAnimationEnd (e: React.AnimationEvent<HTMLDivElement>): void {
        if (e.animationName === styles.slideIn) {
            focusElement.current?.focus()
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
        >
            <NumberOfPlayersBtn playerNum={1} selected={selectedPlayerNum === 1}/>
            <NumberOfPlayersBtn playerNum={2} selected={selectedPlayerNum === 2}/>
            <NumberOfPlayersBtn playerNum={3} selected={selectedPlayerNum === 3}/>
            <NumberOfPlayersBtn playerNum={4} selected={selectedPlayerNum === 4}/>
        </div>
    )
}

function NumberOfPlayersBtn (props: { playerNum: number, selected: boolean }): JSX.Element {
    const { playerNum, selected } = props

    function generateIcons () {
        const icons = []
        for (let i = 0; i < 4; i++) {
            if (i < playerNum) {
                icons.push(<PersonIcon key={i} fontSize='large'/>)
            } else {
                icons.push(<AdbIcon key={i} fontSize='large'/>)
            }
        }
        return icons
    }
    return (
        <div
            className={`
            ${styles.btn}
            ${globalStyles.yellowBlock}
            ${selected ? globalStyles.hoverEffect : ''}`}
        >
            {generateIcons()}
            <div className={styles.btnText}>
                {digitToFullWidth[playerNum]}人
            </div>
        </div>
    )
}