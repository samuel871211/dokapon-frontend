import ExampleCharacterImg from './ExampleCharacterImg'
import ColorBtn from './ColorBtn'
import globalStyles from '../../global/styles.module.css'
import styles from './SelectColor.module.css'
import { colors } from '../../global/characters'
import { userSelectContext } from '../../reducers/userSelect'
import { slideControllerContext } from '../../reducers/slideController'
import React, { useRef, useState, useContext } from 'react'

const colorArr = Object.keys(colors)

export default SelectColor

function SelectColor (): JSX.Element {
    const { userSelect, userSelectDispatch } = useContext(userSelectContext)
    const { slideControllerDispatch } = useContext(slideControllerContext)
    const { currentPlayer, playersAttrs, numberOfPlayers } = userSelect
    const { color: currentPlayerColor, gender, job } = playersAttrs[currentPlayer - 1]
    const focusElement = useRef<HTMLDivElement>(null)
    const [isLeave, toggleIsLeave] = useState(false)
    const remainColors = getRemainColors()
    const initSelectedIdx = remainColors.indexOf(currentPlayerColor)
    const [selectedIdx, setSelectedIdx] = useState(initSelectedIdx === -1 ? 0 : initSelectedIdx)

    function getRemainColors () {
        const remainColors = [ ...colorArr ]
        for (let playerNumber = 0; playerNumber < currentPlayer - 1; playerNumber++) {
            const usedColor = playersAttrs[playerNumber].color
            const index = remainColors.indexOf(usedColor)
            if (index != -1) remainColors.splice(index, 1)
        }
        return remainColors
    }

    function generateColorRows () {
        const colorRows = []
        for (const [color, { chinese, rgb }] of Object.entries(colors)) {
            if (!remainColors.includes(color)) continue
            colorRows.push( 
                <ColorBtn
                    rgb={rgb}
                    name={chinese}
                    selected={color === remainColors[selectedIdx]}
                    key={color}
                />
            )
        }
        return colorRows
    }

    function handleKeyUp (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            setSelectedIdx(selectedIdx === 0 ? remainColors.length - 1 : selectedIdx - 1)
            break
        case 'arrowdown':
            setSelectedIdx(selectedIdx === remainColors.length - 1 ? 0 : selectedIdx + 1)
            break
        case 'd':
            userSelectDispatch({
                type: 'color',
                payload: remainColors[selectedIdx]
            })
            userSelectDispatch({
                type: 'currentStep',
                payload:  numberOfPlayers >= currentPlayer ? 'SelectJob' : 'NPCGenerateDialog'
            })
            break
        case 'x':
            toggleIsLeave(true)
            slideControllerDispatch({
                type: 'titleArea',
                payload: true
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
            slideControllerDispatch({
                type: 'titleArea',
                payload: false
            })
            userSelectDispatch({
                type: 'currentStep',
                payload: numberOfPlayers >= currentPlayer ? 'BeforeNameInput' : 'NPCGenerateDialog'
            })
        }
    }

    return (
        <div
            className={`
            ${styles.container}
            ${globalStyles.xyCenter}`}
            tabIndex={0}
            ref={focusElement}
            onBlur={(event) => event.target.focus()}
            onKeyUp={handleKeyUp}
        >
            <ExampleCharacterImg 
                color={remainColors[selectedIdx]}
                job={job}
                gender={gender}
                isFadeOut={isLeave}
            />
            <div
                className={`
                ${styles.btnGroup}
                ${isLeave ? styles.leave : ''}`}
                onAnimationEnd={handleAnimationEnd}
            >
                {generateColorRows()}
            </div>
        </div>
    )
}