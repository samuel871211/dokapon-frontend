import React, { useEffect, useRef, useState } from 'react'
import globalStyles from '../../global/styles.module.css'
import styles from './index.module.css'

export default HomePage

function HomePage (): JSX.Element {
    const [selectedIdx, setSelectedIdx] = useState(0)
    const focusElement = useRef<HTMLDivElement>(null)

    function handleKeyUp (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            setSelectedIdx(selectedIdx === 0 ? 3 : selectedIdx - 1)
            break
        case 'arrowdown':
            setSelectedIdx(selectedIdx === 3 ? 0 : selectedIdx + 1)
            break
        case 'd': {
            const components = ['SelectCharacter', 'SelectCharacter', 'Book', 'Setting']
            window.location.assign(`/${components[selectedIdx]}`)
            break
        }
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
            onKeyUp={handleKeyUp}
            onBlur={(event) => event.target.focus()}
        >
            <h1>DOKAPON THE WORLD</h1>
            <IconTextBtn text='故事模式' selected={selectedIdx === 0}/>
            <IconTextBtn text='對戰模式' selected={selectedIdx === 1}/>
            <IconTextBtn text='圖鑑' selected={selectedIdx === 2}/>
            <IconTextBtn text='設定' selected={selectedIdx === 3}/>
        </div>
    )
}

function IconTextBtn (props: { text: string, selected: boolean }): JSX.Element {
    const { text, selected } = props
    return (
        <div className={`${styles.btn} ${selected ? globalStyles.hoverEffect : ''}`}>
            <div className={styles.imgContainer}>
                <img className={styles.img}/>
            </div>
            <span>{text}</span>
        </div>
    )
}