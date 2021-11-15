import japaneseChars from '../../global/japaneseChars'
import styles from './NameInputDialog.module.css'
import globalStyles from '../../global/styles.module.css'
import NameDisplayWord from './NameDisplayWord'
import KeyBoardKey from './KeyBoardKey'
import KeyBoardMenuItem from './KeyBoardMenuItem'
import { useState, useRef, useEffect } from 'react'

type wordType = 'hiragana' | 'katakana' | 'special'

export default NameInputDialog

function NameInputDialog (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const [wordType, setWordType] = useState<wordType>('hiragana')
    const [selectedSection, setSelectedSection] = useState(0)
    const [selectedWordIdx, setSelectedWordIdx] = useState(0)

    function generateKeyBoardKeys (section: 0 | 1) {
        const rows: JSX.Element[] = []
        japaneseChars[wordType][section].forEach((word, index) => {
            rows.push(
                <KeyBoardKey
                    word={word}
                    key={index}
                    selected={selectedSection === section && selectedWordIdx === index}
                />
            )
        })
        return rows
    }
    function generateKeyBoardMenuItems () {
        const rows: JSX.Element[] = []
        japaneseChars.menu.forEach((word, index) => {
            rows.push(
                <KeyBoardMenuItem
                    word={word}
                    key={index}
                    selected={selectedSection === 2 && selectedWordIdx === index}
                />
            )
        })
        return rows
    }

    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            (function handleSelectedWordIdx () {
                switch (selectedSection) {
                case 0:
                case 1:
                    switch (selectedWordIdx) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        setSelectedWordIdx(selectedWordIdx + 40)
                        break
                    default:
                        setSelectedWordIdx(selectedWordIdx - 5)
                        break
                    }
                    break
                case 2:
                    setSelectedWordIdx(selectedWordIdx === 0 ? 8 : selectedWordIdx - 1)
                    break
                }
            })()
            break
        case 'arrowdown':
            (function handleSelectedWordIdx () {
                switch (selectedSection) {
                case 0:
                case 1:
                    switch (selectedWordIdx) {
                    case 40:
                    case 41:
                    case 42:
                    case 43:
                    case 44:
                        setSelectedWordIdx(selectedWordIdx - 40)
                        break
                    default:
                        setSelectedWordIdx(selectedWordIdx + 5)
                        break
                    }
                    break
                case 2:
                    setSelectedWordIdx(selectedWordIdx === 8 ? 0 : selectedWordIdx + 1)
                    break
                }
            })()
            break
        case 'arrowleft':
            (function handleSelectedWordIdx () {
                switch (selectedSection) {
                case 0:
                    if (selectedWordIdx % 5 === 0) {
                        setSelectedSection(2)
                        setSelectedWordIdx(Math.floor(selectedWordIdx / 5))
                    } else if (selectedWordIdx % 5 !== 0) {
                        setSelectedWordIdx(selectedWordIdx - 1)
                    }
                    break
                case 1:
                    if (selectedWordIdx % 5 === 0) {
                        setSelectedSection(0)
                        setSelectedWordIdx(selectedWordIdx + 4)
                    } else if (selectedWordIdx % 5 !== 0) {
                        setSelectedWordIdx(selectedWordIdx - 1)
                    }
                    break
                case 2:
                    setSelectedSection(1)
                    setSelectedWordIdx(selectedWordIdx * 5 + 4)
                    break
                }
            })()
            break
        case 'arrowright':
            (function handleSelectedWordIdx () {
                switch (selectedSection) {
                case 0:
                    if (selectedWordIdx % 5 === 4) {
                        setSelectedSection(1)
                        setSelectedWordIdx(selectedWordIdx - 4)
                    } else if (selectedWordIdx % 5 !== 4) {
                        setSelectedWordIdx(selectedWordIdx + 1)
                    }
                    break
                case 1:
                    if (selectedWordIdx % 5 === 4) {
                        setSelectedSection(2)
                        setSelectedWordIdx(Math.floor(selectedWordIdx / 5))
                    } else if (selectedWordIdx % 5 !== 4) {
                        setSelectedWordIdx(selectedWordIdx + 1)
                    }
                    break
                case 2:
                    setSelectedSection(0)
                    setSelectedWordIdx(selectedWordIdx * 5)
                    break
                }
            })()
            break
        case 'd':
            switch (selectedSection) {
            case 0:
            case 1:
                (function handleNameInput () {

                })()
                break
            case 2:
                (function handleMenuItemClick () {
                    
                })()
                break
            }
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
            className={styles.container}
            tabIndex={0}
            ref={focusElement}
            onBlur={(event) => event.target.focus()}
            onKeyDown={handleKeyDown}
        >
            <div
                className={`
                ${styles.nameDisplayArea}
                ${globalStyles.xyCenter}
                ${globalStyles.yellowBlock}`}
            >
                <NameDisplayWord word='好' current={true}/>
                <NameDisplayWord word='好' current={false}/>
                <NameDisplayWord word='好' current={false}/>
                <NameDisplayWord word='好' current={false}/>
                <NameDisplayWord word='好' current={false}/>
                <NameDisplayWord word='好' current={false}/>
                <NameDisplayWord word='好' current={false}/>
                <NameDisplayWord word='好' current={false}/>
            </div>
            <div
                className={`
                ${styles.keyboardArea}
                ${globalStyles.yellowBlock}`}
            >
                <div className={styles.keyboardSection}>
                    {generateKeyBoardKeys(0)}
                </div>
                <div className={styles.keyboardSection}>
                    {generateKeyBoardKeys(1)}
                </div>
                <div className={styles.keyboardMenu}>
                    {generateKeyBoardMenuItems()}
                </div>
            </div>
        </div>
    )
}