// Standard library imports.

// Related third party imports.
import {
    useEffect,
    useLayoutEffect,
    useState,
    useRef,
    useContext,
    SyntheticEvent,
    TransitionEvent,
    AnimationEvent
} from 'react'

// Local application/library specific imports.
import { gameProgressContext } from 'reducers/gameProgress'
import { UIStateContext } from 'reducers/SelectCharacter/UIState'
import BottomDialogConfirmCircle from 'components/BottomDialogConfirmCircle'
import styles from './NPCDialog.module.css'

// Stateless vars declare.
const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL

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
    const { gameProgress } = useContext(gameProgressContext)
    const { UIState, UIStateDispatch } = useContext(UIStateContext)
    const { currentStep, confirmDialogSelectedIdx, showNPCDialog, showConfirmDialog } = UIState
    const handleKeyUpAttrs = shouldHandleKeyEvent ? {
        tabIndex: 0,
        ref: focusElement,
        onBlur: reFocus,
        onKeyUp: handleKeyUp
    } : {}
    function reFocus (event: SyntheticEvent<HTMLDivElement>): void {
        event.currentTarget.focus()
    }
    /**
     *@todo 不同情況使用此組件，handleKeyUp會有不同的行為，此部分需要再調整
     如果能把邏輯跟UI切開來會更好，暫時沒有更好的解法，只能by case
     */
    function handleKeyUp (): void {
        if (curMsgIdx !== message.length - 1) {
            setCurMsgIdx(curMsgIdx + 1)
            setCurWordIdx(0)
            return
        }

        if (currentStep === 'OnlyOnePlayer') {
            resetWordIdx()
            UIStateDispatch({
                type: 'currentStep',
                payload: 'SelectGender'
            })
            return
        }

        if (currentStep === 'BeforeNameInput') {
            UIStateDispatch({
                type: 'showNPCDialog',
                payload: false
            })
            UIStateDispatch({
                type: 'showNPCTopLeftImgArea',
                payload: false
            })
            return
        }

        if (currentStep === 'BeforeNPCGenerateDialog') {
            UIStateDispatch({
                type: 'currentStep',
                payload: 'NPCGenerateDialog'
            })
            return
        }

        if (currentStep === 'PlayerAttrsCollected') {
            UIStateDispatch({
                type: 'currentStep',
                payload: 'SelectController'
            })
            return
        }

        if (currentStep === 'SelectOrderStep3') {
            fetch(`${backendBaseUrl}/gameProgress`, {
                body: JSON.stringify(gameProgress),
                headers: { 'content-type': 'application/json' },
                method: 'POST'
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    UIStateDispatch({
                        type: 'showNPCDialog',
                        payload: false
                    })
                })
                .catch(err => console.log(err))
        }
    }
    function handleTransitionEnd (e: TransitionEvent<HTMLDivElement>): void {
        if (currentStep === 'SelectControllerConfirm') {
            UIStateDispatch({
                type: 'showConfirmDialog',
                payload: true
            })
            UIStateDispatch({
                type: 'currentStep',
                payload: confirmDialogSelectedIdx === 1 ? 
                    'SelectController' : 'SelectOrderStep1'
            })
            return
        }

        if (currentStep === 'BeforeNameInput') {
            UIStateDispatch({
                type: 'showNPCDialog',
                payload: true
            })
            UIStateDispatch({
                type: 'showNPCTopLeftImgArea',
                payload: true
            })
            UIStateDispatch({
                type: 'currentStep',
                payload: 'NameInputDialog'
            })
            return
        }

        if (currentStep === 'SelectOrderStep3' && e.propertyName === 'transform') {
            UIStateDispatch({
                type: 'showSelectCharacter',
                payload: false
            })
            /**
             * @todo send GameProgress to the backend server, and then switch to next page
             */
            setTimeout(() => window.location.assign('/Game'), 1000)
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
    function fadeNextWord (e: AnimationEvent<HTMLSpanElement>) {
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
            ${showNPCDialog ? '' : styles.containerSlideOut}`}
            onTransitionEnd={handleTransitionEnd}
            { ...handleKeyUpAttrs }
        >
            <div className={styles.nameArea}>
                <div className={styles.name}>
                    {name}
                </div>
            </div>
            <div className={styles.messageArea}>
                {splitMessage()}
                {confirmBtnDisplay && <BottomDialogConfirmCircle/>}
                {confirmDialogDisplay &&
                    <ConfirmDialog
                        selectedIdx={confirmDialogSelectedIdx}
                        show={showConfirmDialog}
                    />}
            </div>
        </div>
    )
}

function ConfirmDialog (props: { selectedIdx: number, show: boolean }): JSX.Element {
    const { selectedIdx, show } = props
    return (
        <div
            className={`
            ${styles.confirmDialogContainer}
            ${show ?  '' : styles.confirmDialogSlideOut}`}>
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