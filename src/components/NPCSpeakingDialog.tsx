import React, { useEffect, useState } from 'react'
import globalStyles from '../global/styles.module.css'
import styles from './NPCSpeakingDialog.module.css'

export default NPCSpeakingDialog

function NPCSpeakingDialog (props: { name: string, message: string }): JSX.Element {
    const { name, message } = props
    const [curWordIdx, setCurWordIdx] = useState(0)

    useEffect(() => setCurWordIdx(0), [message])

    function splitMessage (): JSX.Element[] {
        const result: JSX.Element[] = []
        let wordCount = 0
        for (const sentence of message.split('\n')) {
            const words: JSX.Element[] = []
            for (const word of sentence) {
                words.push(
                    <span
                        key={word}
                        onAnimationEnd={() => setCurWordIdx(curWordIdx + 1)}
                        className={`
                        ${styles.message}
                        ${curWordIdx >= wordCount ?  styles.fadeIn : ''}`}
                    >
                        {word}
                    </span>
                )
                wordCount += 1
            }

            result.push(
                <div key={sentence}>{words}</div>
            )
        }
        return result
    }
    // template
    return (
        <div className={styles.container}>
            <div className={styles.nameArea}>
                <div
                    className={`
                    ${styles.name}
                    ${globalStyles.xyCenter}`}
                >
                    {name}
                </div>
            </div>
            <div
                className={`
                ${styles.messageArea}
                ${globalStyles.xyCenter}
                ${globalStyles.yellowBlock}`}
            >
                {splitMessage()}
            </div>
        </div>
    )
}