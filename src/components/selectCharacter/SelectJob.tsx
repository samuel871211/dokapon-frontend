import React, { useRef, useState, useContext } from 'react'

import JobBtn from './JobBtn'
import ExampleCharacterImg from './ExampleCharacterImg'
import globalStyles from '../../global/styles.module.css'
import styles from './SelectJob.module.css'
import { basicJobs } from '../../global/characters'
import { userSelectContext } from '../../reducers/userSelect'
import { slideControllerContext } from '../../reducers/slideController'

const jobArr = Object.keys(basicJobs)

export default SelectJob

function SelectJob (): JSX.Element {
    const { userSelect, userSelectDispatch } = useContext(userSelectContext)
    const { slideControllerDispatch } = useContext(slideControllerContext)
    const { numberOfPlayers, currentPlayer } = userSelect
    const focusElement = useRef<HTMLDivElement>(null)
    const [selectedIdx, setSelectedIdx] = useState(0)
    const [isLeave, toggleIsLeave] = useState(false)

    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup': {
            const newIdx = selectedIdx === 0 ? 4 : selectedIdx - 1
            userSelectDispatch({
                type: 'currentJob',
                payload: jobArr[newIdx]
            })
            setSelectedIdx(newIdx)
            break
        }
        case 'arrowdown': {
            const newIdx = selectedIdx === 4 ? 0 : selectedIdx + 1
            userSelectDispatch({
                type: 'currentJob',
                payload: jobArr[newIdx]
            })
            setSelectedIdx(newIdx)
            break
        }
        case 'd':
            if (currentPlayer === numberOfPlayers) {
                slideControllerDispatch({
                    type: 'titleArea',
                    payload: true
                })
            }

            toggleIsLeave(true)
            userSelectDispatch({
                type: 'currentPlayer',
                payload: String(currentPlayer + 1)
            })
            break
        case 'x':
            userSelectDispatch({
                type: 'currentJob',
                payload: ''
            })
            userSelectDispatch({
                type: 'currentStep',
                payload: 'SelectColor'
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
            userSelectDispatch({
                type: 'currentStep',
                payload: currentPlayer > numberOfPlayers ? 'BeforeNPCGenerateDialog' : 'SelectGender'
            })
            return
        }
    }

    function generateJobRows () {
        const jobRows = []
        for (const [job, { chinese }] of Object.entries(basicJobs)) {
            jobRows.push(
                <JobBtn
                    name={chinese}
                    selected={job === jobArr[selectedIdx]}
                    key={job}
                />
            )
        }
        return jobRows
    }

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
            <ExampleCharacterImg
                color='red'
                job={jobArr[selectedIdx]}
                isFadeOut={isLeave}
            />
            <div
                className={`
                ${styles.btnGroup}
                ${isLeave ? styles.leave : ''}`}
                onAnimationEnd={handleAnimationEnd}
            >
                {generateJobRows()}
            </div>
        </div>
    )
}