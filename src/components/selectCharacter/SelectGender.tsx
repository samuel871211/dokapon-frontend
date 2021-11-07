import React, { useEffect, useRef, useState } from 'react'
import { Slide } from '@material-ui/core'

import GenderBlockBtn from './GenderBlockBtn'
import globalStyles from '../../css/Global.module.css'
import styles from '../../css/SelectColor.module.css'
type gender = 'male' | 'female'

export default function SelectGender (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const [selectedGender, toggleSelectedGender] = useState<gender>('male')

    useEffect(() => focusElement.current?.focus(), [])

    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowleft':
            toggleSelectedGender(selectedGender === 'male' ? 'female' : 'male')
            break
        case 'arrowright':
            toggleSelectedGender(selectedGender === 'male' ? 'female' : 'male')
            break
        case 'd':
            break
        case 'x':
            break
        default:
            break
        }
    }

    return (
        <Slide in={true} timeout={800} direction='left'>
            <div
                ref={focusElement}
                className={`
                ${styles.btnGroup}
                ${globalStyles.xyCenter}`}
                tabIndex={0}
                onBlur={(event) => event.target.focus()}
                onKeyDown={handleKeyDown}
            >
                <GenderBlockBtn gender='male' selectedGender={selectedGender}/>
                <GenderBlockBtn gender='female' selectedGender={selectedGender}/>
            </div>
        </Slide>
    )
}