import React, { useEffect, useRef, useState } from 'react'

import IconTextBtn from '../components/IconTextBtn'
import styles from '../css/HomePage.module.css'

const components = ['SelectCharacter', 'SelectCharacter', 'Book', 'Setting']

export default HomePage

function HomePage (): JSX.Element {
    const [selectedIdx, setSelectedIdx] = useState(0)
    const focusElement = useRef<HTMLDivElement>(null)

    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            setSelectedIdx(selectedIdx === 0 ? 3 : selectedIdx - 1)
            break
        case 'arrowdown':
            setSelectedIdx(selectedIdx === 3 ? 0 : selectedIdx + 1)
            break
        case 'd':
            (function handleNextComponent () {
                switch (selectedIdx) {
                case 0:
                    window.location.assign(`/${components[selectedIdx]}`)
                    break
                case 1:
                    window.location.assign(`/${components[selectedIdx]}`)
                    break
                case 2:
                    // TODO: 圖鑑component 
                    break
                case 3:
                    // TODO: 設定component
                    break
                }
            })()
            break
        default:
            break
        }
    }

    useEffect(() => focusElement.current?.focus(), [])

    return (
        <div
            tabIndex={0}
            className={styles.container}
            ref={focusElement}
            onKeyDown={handleKeyDown}
            onBlur={(event) => event.target.focus()}
        >
            <h1>DOKAPON THE WORLD</h1>
            <IconTextBtn text='故事模式' selected={selectedIdx === 0} customClass={styles.btn}/>
            <IconTextBtn text='對戰模式' selected={selectedIdx === 1} customClass={styles.btn}/>
            <IconTextBtn text='圖鑑' selected={selectedIdx === 2} customClass={styles.btn}/>
            <IconTextBtn text='設定' selected={selectedIdx === 3} customClass={styles.btn}/>
        </div>
    )
}