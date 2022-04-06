import CustomBorderBottom from '../../../components/CustomBorderBottom'
import globalStyles from '../../../global/styles.module.css'
import styles from './NPCGenerateDialog.module.css'
import { getRandomInt } from '../../../utils/math'
import React, { useState, useRef, useContext, useEffect } from 'react'
import { gameProgressContext } from '../../../reducers/gameProgress'
import { UIStateContext } from '../../../reducers/SelectCharacter/UIState'
import { COLORS, BASICJOBS, NPCLEVELS } from '../../../graphics/characters'
import japaneseChars from '../../../utils/japaneseChars'
import Dokapon from '../../../global'
import { COLORLIST, BASICJOBLIST, NPCLEVELLIST, GENDERLIST } from '../../../utils/constants'
const prefix = process.env.REACT_APP_BACKEND_BASEURL || ''

export default NPCGenerateDialog

function NPCGenerateDialog (): JSX.Element {
    const { gameProgress, gameProgressDispatch } = useContext(gameProgressContext)
    const { currentPlayer, playersAttrs, numberOfPlayers } = gameProgress
    const { UIState, UIStateDispatch } = useContext(UIStateContext)
    const { npcsAttrsRegenerated } = UIState
    const currentPlayerAttrs = playersAttrs[currentPlayer - 1]
    const { gender, color, job, npcLevel } = currentPlayerAttrs
    const focusElement = useRef<HTMLDivElement>(null)
    const [selectedIdx, setSelectedIdx] = useState(4)
    const [isLeave, toggleIsLeave] = useState(false)

    useEffect(function reGenerateNPCAttrs () {
        if (npcsAttrsRegenerated[currentPlayer - 1]) return

        function removeUsedColors (colorList: Dokapon.ColorTypes[]): Dokapon.ColorTypes[] {
            playersAttrs.forEach(attrs => {
                colorList.splice(colorList.indexOf(attrs.color), 1)
            })
            return colorList
        }
        const colorList = removeUsedColors([ ...COLORLIST ])
        gameProgressDispatch({
            type: 'color',
            payload: colorList[getRandomInt(0, colorList.length - 1)]
        })
        gameProgressDispatch({
            type: 'job',
            payload: BASICJOBLIST[getRandomInt(0, BASICJOBLIST.length - 1)]
        })
        gameProgressDispatch({
            type: 'npcLevel',
            payload: NPCLEVELLIST[getRandomInt(0, NPCLEVELLIST.length - 1)]
        })
        gameProgressDispatch({
            type: 'gender',
            payload: GENDERLIST[getRandomInt(0, GENDERLIST.length - 1)]
        })
        const newPayload: typeof npcsAttrsRegenerated = [ ...npcsAttrsRegenerated ]
        newPayload[currentPlayer - 1] = true
        UIStateDispatch({
            type: 'npcsAttrsRegenerated',
            payload: newPayload
        })
    }, [])

    function handleKeyUp (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowup':
            setSelectedIdx(selectedIdx === 0 ? 4 : selectedIdx - 1)
            break
        case 'arrowdown':
            setSelectedIdx(selectedIdx === 4 ? 0 : selectedIdx + 1)
            break
        case 'd':
            if (!focusElement.current) return
            toggleIsLeave(true)
            focusElement.current.onanimationend = function handleConfirm () {
                switch (selectedIdx) {
                case 0:
                    UIStateDispatch({
                        type: 'currentStep',
                        payload: 'SelectNPCLevel'
                    })
                    break
                case 1:
                    UIStateDispatch({
                        type: 'currentStep',
                        payload: 'SelectGender'
                    })
                    break
                case 2:
                    UIStateDispatch({
                        type: 'currentStep',
                        payload: 'SelectColor'
                    })
                    break
                case 3:
                    UIStateDispatch({
                        type: 'currentStep',
                        payload: 'SelectJob'
                    })
                    break
                case 4:
                    gameProgressDispatch({
                        type: 'name',
                        payload: generateRandomName()
                    })
                    if (currentPlayer === 4) {
                        UIStateDispatch({
                            type: 'currentStep',
                            payload: 'PlayerAttrsCollected'
                        })
                    }
                    if (currentPlayer !== 4) {
                        gameProgressDispatch({
                            type: 'currentPlayer',
                            payload: currentPlayer + 1
                        })
                        UIStateDispatch({
                            type: 'currentStep',
                            payload: 'BeforeNPCGenerateDialog'
                        })
                    }
                    break
                default:
                    break
                }
            }
            break
        case 'x':
            if (!focusElement.current) return
            toggleIsLeave(true)
            focusElement.current.onanimationend = function handleCancel () {
                const newCurrentPlayer = currentPlayer - 1
                gameProgressDispatch({
                    type: 'currentPlayer',
                    payload: newCurrentPlayer
                })
                UIStateDispatch({
                    type: 'currentStep',
                    payload: newCurrentPlayer === numberOfPlayers ? 'SelectJob' : 'BeforeNPCGenerateDialog'
                })
            }
            break
        default:
            break
        }
    }

    function handleAnimationEnd (e: React.AnimationEvent<HTMLDivElement>) {
        if (e.animationName === styles.slideLeft) {
            focusElement.current?.focus()
        }
    }

    return (
        <div
            className={`${styles.container} ${isLeave ?  styles.leave : ''}`}
            tabIndex={0}
            ref={focusElement}
            onBlur={(event) => event.target.focus()}
            onKeyUp={handleKeyUp}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className={styles.title}>勇者募集!!</div>
            <CustomBorderBottom/>
            <div className={styles.bottom}>
                <div className={styles.imgContainer}>
                    <img src={`${prefix}/imgs/${job}_${gender}_${color}_front.png`}/>
                </div>
                <div className={styles.btnGroup}>
                    <Btn
                        selected={selectedIdx === 0}
                        content={npcLevel === '' ? '' : NPCLEVELS[npcLevel].chinese}
                    />
                    <Btn
                        selected={selectedIdx === 1}
                        content={gender === 'male' ? '男' : '女'}
                    />
                    <Btn
                        selected={selectedIdx === 2}
                        content={COLORS[color].chinese}
                    />
                    <Btn
                        selected={selectedIdx === 3}
                        content={BASICJOBS[job]?.chinese || ''}
                    />
                    <ConfirmBtn
                        selected={selectedIdx === 4}
                        content='決定'
                    />
                </div>
            </div>
        </div>
    )
}

function ConfirmBtn (props: {
    selected: boolean,
    content: string
}): JSX.Element {
    const { selected, content } = props

    return (
        <div className={`${styles.confirmBtn} ${styles.btn} ${selected ? styles.hoverEffect : ''}`}>
            {content}
        </div>
    )
}

function Btn (props: {
    selected: boolean,
    content: string
}): JSX.Element {
    const { selected, content } = props

    return (
        <div className={`${styles.btn} ${selected ? globalStyles.hoverEffect : ''}`}>
            {content}
        </div>
    )
}

function generateRandomName(): string {
    const nameLength = getRandomInt(1, 8)
    const allChars = [
        ...japaneseChars.hiragana[0],
        ...japaneseChars.hiragana[1],
        ...japaneseChars.katakana[0],
        ...japaneseChars.katakana[1],
        ...japaneseChars.special[0],
        ...japaneseChars.special[1]
    ].filter(char => char !== '')

    let result = ''
    for (let i = 1; i <= nameLength; i++) {
        const randomIndex = getRandomInt(0, allChars.length - 1)
        result += allChars[randomIndex]
    }
    return result
}