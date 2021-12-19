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
    const focusElement = useRef<HTMLDivElement>(null)
    const [selectedIdx, setSelectedIdx] = useState(0)
    const [isLeave, toggleIsLeave] = useState(false)

    function generateColorRows () {
        const colorRows = []
        for (const [color, { chinese, rgb }] of Object.entries(colors)) {
            colorRows.push( 
                <ColorBtn
                    rgb={rgb}
                    name={chinese}
                    selected={color === colorArr[selectedIdx]}
                    key={color}
                />
            )
        }
        return colorRows
    }

    function handleKeyUp (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            setSelectedIdx(selectedIdx === 0 ? 9 : selectedIdx - 1)
            break
        case 'arrowdown':
            setSelectedIdx(selectedIdx === 9 ? 0 : selectedIdx + 1)
            break
        case 'd':
            userSelectDispatch({
                type: 'currentStep',
                payload: 'SelectJob'
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
                payload: 'BeforeNameInput'
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
                color={colorArr[selectedIdx]}
                job='warrior'
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