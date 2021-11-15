import CustomBorderBottom from '../CustomBorderBottom'
import globalStyles from '../../global/styles.module.css'
import styles from './NPCGenerateDialog.module.css'
import { useState, useRef, useEffect } from 'react'

export default NPCGenerateDialog

function NPCGenerateDialog (): JSX.Element {
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

    useEffect(() => focusElement.current?.focus(), [])

    return (
        <div
            className={`
            ${styles.container}
            ${globalStyles.yellowBlock}`}
            tabIndex={0}
            ref={focusElement}
            onBlur={(event) => event.target.focus()}
            onKeyDown={handleKeyDown}
        >
            <div className={styles.title}>勇者募集!!</div>
            <CustomBorderBottom/>
            <div className={styles.bottom}>
                <div
                    className={`
                    ${globalStyles.xyCenter}
                    ${styles.imgContainer}`}
                >
                    <img width='100%' src='aaa'/>
                </div>
                <div className={styles.btnGroup}>
                    <div
                        className={`
                        ${globalStyles.yellowBlock}
                        ${styles.btn}
                        ${globalStyles.xyCenter}
                        ${selectedIdx === 0 ? globalStyles.hoverEffect : ''}`}
                    >
                        弱
                    </div>
                    <div
                        className={`
                        ${globalStyles.yellowBlock}
                        ${styles.btn}
                        ${globalStyles.xyCenter}
                        ${selectedIdx === 1 ? globalStyles.hoverEffect : ''}`}
                    >
                        女
                    </div>
                    <div
                        className={`
                        ${globalStyles.yellowBlock}
                        ${styles.btn}
                        ${globalStyles.xyCenter}
                        ${selectedIdx === 2 ? globalStyles.hoverEffect : ''}`}
                    >
                        青
                    </div>
                    <div
                        className={`
                        ${globalStyles.yellowBlock}
                        ${styles.btn}
                        ${globalStyles.xyCenter}
                        ${selectedIdx === 3 ? globalStyles.hoverEffect : ''}`}
                    >
                        盜賊
                    </div>
                    <div
                        className={`
                        ${globalStyles.yellowBlock}
                        ${styles.btn}
                        ${globalStyles.xyCenter}
                        ${selectedIdx === 4 ? globalStyles.hoverEffect : ''}`}
                    >
                        決定
                    </div>
                </div>
            </div>
        </div>
    )
}