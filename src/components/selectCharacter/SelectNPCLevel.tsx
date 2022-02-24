import React, { useRef, useState, useContext } from 'react'
import globalStyles from '../../global/styles.module.css'
import styles from './SelectNPCLevel.module.css'
import { userSelectContext } from '../../reducers/userSelect'
import { slideControllerContext } from '../../reducers/slideController'

type aiLevel = 'weak' | 'normal' | 'strong'
const aiLevels: aiLevel[] = ['weak', 'normal', 'strong']
const aiLevelToCN = {
    weak: '弱',
    normal: '普通',
    strong: '狡猾'
}

export default SelectNPCLevel

function SelectNPCLevel (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const { userSelectDispatch } = useContext(userSelectContext)
    const { slideControllerDispatch } = useContext(slideControllerContext)
    const [selectedIdx, setSelectedIdx] = useState(0)
    const [isLeave, toggleIsLeave] = useState(false)
    
    function handleKeyUp (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            setSelectedIdx(selectedIdx === 0 ? 2 : selectedIdx - 1)
            break
        case 'arrowdown':
            setSelectedIdx(selectedIdx === 2 ? 0 : selectedIdx + 1)
            break
        case 'd':
            console.log(aiLevels[selectedIdx])
            userSelectDispatch({
                type: 'npcLevel',
                payload: aiLevels[selectedIdx]
            })
            slideControllerDispatch({
                type: 'titleArea',
                payload: true
            })
            toggleIsLeave(true)
            break
        case 'x':
            slideControllerDispatch({
                type: 'titleArea',
                payload: true
            })
            toggleIsLeave(true)
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

    function handleAnimationEnd (e: React.AnimationEvent<HTMLDivElement>) {
        if (e.animationName.includes('slideLeft')) {
            focusElement.current?.focus()
            return
        }

        if (e.animationName.includes('slideRight')) {
            userSelectDispatch({
                type: 'currentStep',
                payload: 'NPCGenerateDialog'
            })
        }
    }

    return (
        <div
            className={`
            ${styles.container}
            ${globalStyles.xyCenter}
            ${isLeave ? styles.leave : ''}`}
            tabIndex={0}
            ref={focusElement}
            onBlur={(event) => event.target.focus()}
            onKeyUp={handleKeyUp}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className={styles.emptyArea}></div>
            <div className={styles.btnGroup}>
                {generateLevelRows()}
            </div>
        </div>
    )
}

function NPCLevelBtn (props: {
    aiLevel: 'weak' | 'normal' | 'strong',
    selected: boolean
}): JSX.Element {
    const { aiLevel, selected } = props
    return (
        <div
            className={`
            ${styles.btn}
            ${globalStyles.yellowBlock}
            ${globalStyles.xyCenter}
            ${selected ? globalStyles.hoverEffect : ''}`}
        >
            {aiLevelToCN[aiLevel]}
        </div> 
    )
}
