import japaneseChars from '../../global/japaneseChars'
import styles from './NameInputDialog.module.css'
import globalStyles from '../../global/styles.module.css'
import NameDisplayWord from './NameDisplayWord'
import KeyBoardKey from './KeyBoardKey'
import { useState, useRef, useEffect } from 'react'

type wordType = 'hiragana' | 'katakana' | 'special'

export default NameInputDialog

function NameInputDialog (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const [wordType, setWordType] = useState<wordType>('hiragana')
    const [selectedSection, setSelectedSection] = useState(0)
    const [selectedWordIdx, setSelectedIdx] = useState(0)

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

    function handleKeyDown (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            // setSelectedIdx(selectedIdx)
            break
        case 'arrowdown':
            // setSelectedIdx()
            break
        case 'arrowleft':
            break
        case 'arrowright':
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
                    <div
                        className={`
                        ${styles.menuBtn}
                        ${selectedSection === 2 && selectedWordIdx === 0 ? globalStyles.hoverEffect : ''}`}
                    >
                        平假名
                    </div>
                    <div
                        className={`
                        ${styles.menuBtn}
                        ${selectedSection === 2 && selectedWordIdx === 1 ? globalStyles.hoverEffect : ''}`}
                    >
                        片假名
                    </div>
                    <div
                        className={`
                        ${styles.menuBtn}
                        ${selectedSection === 2 && selectedWordIdx === 2 ? globalStyles.hoverEffect : ''}`}
                    >
                        ＡＢＣ
                    </div>
                    <div
                        className={`
                        ${styles.menuBtn}
                        ${selectedSection === 2 && selectedWordIdx === 3 ? globalStyles.hoverEffect : ''}`}
                    ></div>
                    <div
                        className={`
                        ${styles.menuBtn}
                        ${selectedSection === 2 && selectedWordIdx === 4 ? globalStyles.hoverEffect : ''}`}
                    >
                        前進
                    </div>
                    <div
                        className={`
                        ${styles.menuBtn}
                        ${selectedSection === 2 && selectedWordIdx === 5 ? globalStyles.hoverEffect : ''}`}
                    >
                        後退
                    </div>
                    <div
                        className={`
                        ${styles.menuBtn}
                        ${selectedSection === 2 && selectedWordIdx === 6 ? globalStyles.hoverEffect : ''}`}
                    >
                        刪除
                    </div>
                    <div
                        className={`
                        ${styles.menuBtn}
                        ${selectedSection === 2 && selectedWordIdx === 7 ? globalStyles.hoverEffect : ''}`}
                    ></div>
                    <div
                        className={`
                        ${styles.menuBtn}
                        ${selectedSection === 2 && selectedWordIdx === 8 ? globalStyles.hoverEffect : ''}`}
                    >
                        ＯＫ
                    </div>
                </div>
            </div>
        </div>
    )
}