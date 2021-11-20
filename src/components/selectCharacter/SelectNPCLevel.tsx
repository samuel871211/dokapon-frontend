import { useRef, useEffect, useState } from 'react'
import NPCLevelBtn from './NPCLevelBtn'
import globalStyles from '../../global/styles.module.css'
import styles from './SelectNPCLevel.module.css'

type aiLevel = 'weak' | 'normal' | 'strong'
const aiLevels: aiLevel[] = ['weak', 'normal', 'strong']

export default SelectNPCLevel

function SelectNPCLevel (): JSX.Element {
    const [selectedIdx, setSelectedIdx] = useState(0)
    const focusElement = useRef<HTMLDivElement>(null)
    
    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            setSelectedIdx(selectedIdx === 0 ? 2 : selectedIdx - 1)
            break
        case 'arrowdown':
            setSelectedIdx(selectedIdx === 2 ? 0 : selectedIdx + 1)
            break
        case 'd':
            break
        case 'x':
            break
        default:
            break
        }
    }

    function generateLevelRows () {
        const aiLevelRows = []
        for (const aiLevel of aiLevels) {
            aiLevelRows.push(
                <NPCLevelBtn
                    aiLevel={aiLevel}
                    selected={aiLevels[selectedIdx] === aiLevel}
                    key={aiLevel}
                />
            )
        }
        return aiLevelRows
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
            <div className={styles.emptyArea}></div>
            <div className={styles.btnGroup}>
                {generateLevelRows()}
            </div>
        </div>
    )
}