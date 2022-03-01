import React, { useEffect, useLayoutEffect, useState, useRef, useContext } from 'react'
import { slideControllerContext } from '../reducers/slideController'
import { userSelectContext } from '../reducers/userSelect'
import globalStyles from '../global/styles.module.css'
import styles from './NPCDialog.module.css'

export default NPCDialog

function NPCDialog (props: {
    name: string,
    message: string[],
    confirmBtnDisplay: boolean,
    confirmDialogDisplay: boolean,
    shouldHandleKeyEvent: boolean
}): JSX.Element {
    const { name, message, confirmBtnDisplay, confirmDialogDisplay, shouldHandleKeyEvent } = props
    const focusElement = useRef<HTMLDivElement>(null)
    const { slideState, slideControllerDispatch } = useContext(slideControllerContext)
    const { userSelectDispatch, userSelect } = useContext(userSelectContext)
    const { currentStep, confirmDialogSelectedIdx } = userSelect
    const { NPCDialog, confirmDialog } = slideState
    const handleKeyUpAttrs = shouldHandleKeyEvent ? {
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
                type: 'NPCDialog',
                payload: true
            })
            slideControllerDispatch({
                type: 'NPCTopLeftImgArea',
                payload: true
            })
            return
        }

        if (currentStep === 'BeforeNPCGenerateDialog') {
            userSelectDispatch({
                type: 'currentStep',
                payload: 'NPCGenerateDialog'
            })
            return
        }

        if (currentStep === 'PlayerAttrsCollected') {
            userSelectDispatch({
                type: 'currentStep',
                payload: 'SelectController'
            })
            return
        }

        if (currentStep === 'SelectOrderStep3') {
            fetch(`${process.env.REACT_APP_BACKEND_BASEURL || ''}/gameArchive`, {
                body: JSON.stringify(userSelect),
                headers: { 'content-type': 'application/json' },
                method: 'POST'
            })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                slideControllerDispatch({
                    type: 'NPCDialog',
                    payload: true
                })
            })
            .catch(err => console.log(err))
        }
    }
    function handleTransitionEnd (e: React.TransitionEvent<HTMLDivElement>): void {
        if (currentStep === 'SelectControllerConfirm') {
            slideControllerDispatch({
                type: 'confirmDialog',
                payload: false
            })
            userSelectDispatch({
                type: 'currentStep',
                payload: confirmDialogSelectedIdx === 1 ? 
                    'SelectController' : 'SelectOrderStep1'
            })
            return
        }

        if (currentStep === 'BeforeNameInput') {
            slideControllerDispatch({
                type: 'NPCDialog',
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
            return
        }

        if (currentStep === 'SelectOrderStep3' && e.propertyName === 'transform') {
            slideControllerDispatch({
                type: 'selectCharacterFadeOut',
                payload: true
            })
            /**
             * @todo send GameProgress to the backend server, and then switch to next page
             */
            setTimeout(() => window.location.assign('/BattleMode'), 1000)
            return
        }
    }
    function resetWordIdx (): void {
        setCurWordIdx(0)
        setCurMsgIdx(0)
    }
    function focus (): void {
        if (confirmBtnDisplay) focusElement.current?.focus()
    }
    function fadeNextWord (e: React.AnimationEvent<HTMLSpanElement>) {
        setCurWordIdx(curWordIdx + 1)
        const wordElements = document.getElementsByClassName(`${styles.message}`)
        wordElements[curWordIdx + 1]?.classList.add(`${styles.fadeIn}`)
    }
    const [curWordIdx, setCurWordIdx] = useState(0)
    const [curMsgIdx, setCurMsgIdx] = useState(0)

    useLayoutEffect(resetWordIdx, [message])
    useEffect(focus, [shouldHandleKeyEvent])

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
            ${NPCDialog ? styles.containerSlideOut : ''}`}
            onTransitionEnd={handleTransitionEnd}
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
                {confirmBtnDisplay && <div className={styles.confirmCircle}></div>}
                {confirmDialogDisplay &&
                    <ConfirmDialog
                        selectedIdx={confirmDialogSelectedIdx}
                        slideOut={confirmDialog}
                    />}
            </div>
        </div>
    )
}

function ConfirmDialog (props: { selectedIdx: number, slideOut: boolean }): JSX.Element {
    const { selectedIdx, slideOut } = props
    return (
        <div
            className={`
            ${styles.confirmDialogContainer}
            ${slideOut ? styles.confirmDialogSlideOut : ''}`}>
            <div className={styles.confirmDialogBtn}>
                <div
                    className={`
                    ${styles.confirmDialogBtnText}
                    ${selectedIdx === 0 ? styles.confirmDialogBtnHoverEffect : ''}`}
                >是</div>
            </div>
            <div className={styles.confirmDialogBtn}>
                <div
                    className={`
                    ${styles.confirmDialogBtnText}
                    ${selectedIdx === 1 ? styles.confirmDialogBtnHoverEffect : ''}`}
                >不是</div>
            </div>
        </div>
    )
}