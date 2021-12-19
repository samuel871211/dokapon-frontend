import React, { useEffect, useLayoutEffect, useState, useRef, useContext } from 'react'
import { slideControllerContext } from '../reducers/slideController'
import { userSelectContext } from '../reducers/userSelect'
import globalStyles from '../global/styles.module.css'
import styles from './NPCSpeakingDialog.module.css'

export default NPCSpeakingDialog

function NPCSpeakingDialog (props: {
    name: string,
    message: string[],
    displayBtn: boolean
}): JSX.Element {
    const { name, message, displayBtn } = props
    const focusElement = useRef<HTMLDivElement>(null)
    const { slideState, slideControllerDispatch } = useContext(slideControllerContext)
    const { userSelectDispatch, userSelect: { currentStep } } = useContext(userSelectContext)
    const { NPCSpeakingDialog } = slideState
    const handleKeyUpAttrs = displayBtn ? {
        tabIndex: 0,
        ref: focusElement,
        onBlur: reFocus,
        onKeyUp: handleKeyUp
    } : {}
    function reFocus (event: React.SyntheticEvent<HTMLDivElement>): void {
        event.currentTarget.focus()
    }
    function handleKeyUp (): void {
        if (curMsgIdx !== message.length - 1) {
            setCurMsgIdx(curMsgIdx + 1)
            setCurWordIdx(0)
            return
        }

        // TODO: 不同情況使用此組件，handleKeyUp會有不同的行為，此部分需要再調整
        // 如果能把邏輯跟UI切開來會更好，暫時沒有更好的解法，只能by case
        if (currentStep === 'OnlyOnePlayer') {
            resetWordIdx()
            userSelectDispatch({
                type: 'currentStep',
                payload: 'SelectGender'
            })
            return
        }

        if (currentStep === 'BeforeNameInput') {
            slideControllerDispatch({
                type: 'NPCSpeakingDialog',
                payload: true
            })
            slideControllerDispatch({
                type: 'NPCTopLeftImgArea',
                payload: true
            })
        }

        if (currentStep === 'BeforeNPCGenerateDialog') {
            userSelectDispatch({
                type: 'currentStep',
                payload: 'NPCGenerateDialog'
            })
        }
    }
    function handleAnimationEnd (e: React.AnimationEvent<HTMLDivElement>) {
        if (e.animationName.includes('slideDown') && currentStep === 'BeforeNameInput') {
            slideControllerDispatch({
                type: 'NPCSpeakingDialog',
                payload: false
            })
            slideControllerDispatch({
                type: 'NPCTopLeftImgArea',
                payload: false
            })
            userSelectDispatch({
                type: 'currentStep',
                payload: 'NameInputDialog'
            })
        }
    }
    function resetWordIdx (): void {
        setCurWordIdx(0)
        setCurMsgIdx(0)
    }
    function focus (): void {
        if (displayBtn) focusElement.current?.focus()
    }
    function fadeNextWord (e: React.AnimationEvent<HTMLSpanElement>) {
        setCurWordIdx(curWordIdx + 1)
        const wordElements = document.getElementsByClassName(`${styles.message}`)
        wordElements[curWordIdx + 1]?.classList.add(`${styles.fadeIn}`)
    }
    const [curWordIdx, setCurWordIdx] = useState(0)
    const [curMsgIdx, setCurMsgIdx] = useState(0)

    useLayoutEffect(resetWordIdx, [message])
    useEffect(focus, [displayBtn])

    function splitMessage (): JSX.Element[] {
        const result: JSX.Element[] = []
        let isFirstWord = true
        if (!message[curMsgIdx]) return result

        for (const sentence of message[curMsgIdx].split('\n')) {
            const words: JSX.Element[] = []
            sentence.split('').forEach((word, index) => {
                words.push(
                    <span
                        key={index}
                        onAnimationEnd={fadeNextWord}
                        className={`
                        ${styles.message}
                        ${isFirstWord ? styles.fadeIn : ''}`}
                    >
                        {word}
                    </span>
                )
                isFirstWord = false
            })

            result.push(
                <div key={sentence}>{words}</div>
            )
        }
        return result
    }

    return (
        <div
            className={`
            ${styles.container}
            ${NPCSpeakingDialog ? styles.leave : ''}`}
            onAnimationEnd={handleAnimationEnd}
            
            { ...handleKeyUpAttrs }
        >
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
                {displayBtn && <div className={styles.confirmCircle}></div>}
            </div>
        </div>
    )
}