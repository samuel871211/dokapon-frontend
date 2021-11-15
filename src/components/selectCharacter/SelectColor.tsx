import ExampleCharacterImg from './ExampleCharacterImg'
import ColorBtn from './ColorBtn'

import globalStyles from '../../global/styles.module.css'
import styles from './SelectColor.module.css'
import { colors } from '../../global/characters'
import { useEffect, useRef, useState } from 'react'

const colorArr = Object.keys(colors)

export default SelectColor

function SelectColor (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const [selectedIdx, setSelectedIdx] = useState(0)

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

    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            setSelectedIdx(selectedIdx === 0 ? 9 : selectedIdx - 1)
            break
        case 'arrowdown':
            setSelectedIdx(selectedIdx === 9 ? 0 : selectedIdx + 1)
            break
        case 'd':
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
            className={`
            ${styles.container}
            ${globalStyles.xyCenter}`}
            tabIndex={0}
            ref={focusElement}
            onBlur={(event) => event.target.focus()}
            onKeyDown={handleKeyDown}
        >
            <ExampleCharacterImg color={colorArr[selectedIdx]} job='warrior'/>
            <div className={styles.btnGroup}>
                {generateColorRows()}
            </div>
        </div>
    )
}