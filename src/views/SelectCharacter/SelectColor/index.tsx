import ExampleCharacterImg from '../ExampleCharacterImg'
import globalStyles from '../../../global/styles.module.css'
import styles from './index.module.css'
import { COLORS } from '../../../global/characters'
import { COLORLIST } from '../../../global/CONSTANTS'
import { gameProgressContext } from '../../../reducers/gameProgress'
import { UIStateContext } from '../../../reducers/SelectCharacter/UIState'
import React, { useRef, useState, useContext } from 'react'

export default SelectColor

function SelectColor (): JSX.Element {
    const { gameProgress, gameProgressDispatch } = useContext(gameProgressContext)
    const { UIStateDispatch } = useContext(UIStateContext)
    const { currentPlayer, playersAttrs, numberOfPlayers } = gameProgress
    const { color: currentPlayerColor, gender, job } = playersAttrs[currentPlayer - 1]
    const focusElement = useRef<HTMLDivElement>(null)
    const [isLeave, toggleIsLeave] = useState(false)
    const remainColors = getRemainColors()
    const initSelectedIdx = remainColors.indexOf(currentPlayerColor)
    const [selectedIdx, setSelectedIdx] = useState(initSelectedIdx === -1 ? 0 : initSelectedIdx)

    function getRemainColors () {
        const remainColors = [ ...COLORLIST ]
        for (let playerNumber = 0; playerNumber < currentPlayer - 1; playerNumber++) {
            const usedColor = playersAttrs[playerNumber].color
            const index = remainColors.indexOf(usedColor)
            if (index != -1) remainColors.splice(index, 1)
        }
        return remainColors
    }

    function generateColorRows () {
        const colorRows = []
        for (const color of remainColors) {
            const { rgb, chinese } = COLORS[color]
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
            gameProgressDispatch({
                type: 'color',
                payload: remainColors[selectedIdx]
            })
            UIStateDispatch({
                type: 'currentStep',
                payload:  numberOfPlayers >= currentPlayer ?
                            'SelectJob' : 'NPCGenerateDialog'
            })
            break
        case 'x':
            toggleIsLeave(true)
            UIStateDispatch({
                type: 'showTitleArea',
                payload: false
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
            UIStateDispatch({
                type: 'showTitleArea',
                payload: true
            })
            UIStateDispatch({
                type: 'currentStep',
                payload: numberOfPlayers >= currentPlayer ?
                        'BeforeNameInput' : 'NPCGenerateDialog'
            })
        }
    }

    return (
        <div
            className={styles.container}
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

function ColorBtn (props: {
    rgb: string,
    name: string,
    selected: boolean
}): JSX.Element {
    const { rgb, name, selected } = props
    return (
        <div className={`${styles.btn} ${selected ? globalStyles.hoverEffect : ''}`}>
            <div className={styles.circle} style={{ backgroundColor: rgb }}></div>
            <div className={styles.name}>{name}</div>
        </div>
    )
}