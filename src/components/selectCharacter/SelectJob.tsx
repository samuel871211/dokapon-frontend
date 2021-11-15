import { useRef, useState, useEffect } from 'react'

import JobBtn from './JobBtn'
import ExampleCharacterImg from './ExampleCharacterImg'
import globalStyles from '../../global/styles.module.css'
import styles from './SelectJob.module.css'
import { basicJobs } from '../../global/characters'

const jobArr = Object.keys(basicJobs)

export default SelectJob

function SelectJob (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const [selectedIdx, setSelectedIdx] = useState(0)

    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            setSelectedIdx(selectedIdx === 0 ? 4 : selectedIdx - 1)
            break
        case 'arrowdown':
            setSelectedIdx(selectedIdx === 4 ? 0 : selectedIdx + 1)
            break
        case 'd':
            break
        case 'x':
            break
        default:
            break
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
            <ExampleCharacterImg color='red' job={jobArr[selectedIdx]}/>
            <div className={styles.btnGroup}>
                {generateJobRows()}
            </div>
        </div>
    )
}