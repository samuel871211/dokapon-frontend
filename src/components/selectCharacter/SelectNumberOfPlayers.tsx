import { useEffect, useState, useRef, useContext } from 'react'

import NumberOfPlayersBtn from './NumberOfPlayersBtn'
import styles from './SelectNumberOfPlayers.module.css'
import globalStyles from '../../global/styles.module.css'
import { UserSelectContext } from '../../reducers/SelectCharacter'

export default SelectNumberOfPlayers

function SelectNumberOfPlayers (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const { dispatch, userSelect: { numberOfPlayers } } = useContext(UserSelectContext)
    const [selectedPlayerNum, setSelectedPlayerNum] = useState(1)

    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            setSelectedPlayerNum(selectedPlayerNum === 1 ? 4 : selectedPlayerNum - 1)
            break
        case 'arrowdown':
            setSelectedPlayerNum(selectedPlayerNum === 4 ? 1 : selectedPlayerNum + 1)
            break
        case 'd':
            dispatch({
                type: 'numberOfPlayers',
                payload: String(selectedPlayerNum)
            })
            dispatch({
                type: 'currentStep',
                payload: 'SelectGender'
            })
            break
        case 'x':
            dispatch({
                type: 'currentStep',
                payload: 'GoalInputDialog'
            })
            break
        default:
            break
        }
    }

    useEffect(() => focusElement.current?.focus(), [])

    /* Box無法加入ref這個prop => 改用div */
    /* 為何使用useRef => https://stackoverflow.com/questions/37273876/reactjs-this-refs-vs-document-getelementbyid/37274379 */
    /* ts搭配useRef各種噴錯 => https://linguinecode.com/post/how-to-use-react-useref-with-typescript */
    return (
        <div
            ref={focusElement}
            className={`
            ${styles.btnGroup}
            ${globalStyles.xyCenter}`}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onBlur={(event) => event.target.focus() }
        >
            <NumberOfPlayersBtn playerNum={1} selected={selectedPlayerNum === 1}/>
            <NumberOfPlayersBtn playerNum={2} selected={selectedPlayerNum === 2}/>
            <NumberOfPlayersBtn playerNum={3} selected={selectedPlayerNum === 3}/>
            <NumberOfPlayersBtn playerNum={4} selected={selectedPlayerNum === 4}/>
        </div>
    )
}