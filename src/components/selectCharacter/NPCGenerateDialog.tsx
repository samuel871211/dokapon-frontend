import CustomBorderBottom from '../CustomBorderBottom'
import globalStyles from '../../global/styles.module.css'
import styles from './NPCGenerateDialog.module.css'
import React, { useState, useRef, useContext } from 'react'
import { userSelectContext } from '../../reducers/userSelect'
import { colors, basicJobs, npcLevels } from '../../global/characters'
const prefix = process.env.REACT_APP_BACKEND_BASEURL || ''
type colorTypes = 'red' | 'orange' | 'yellow' |
            'lightGreen' | 'darkGreen' | 'lightBlue' |
            'darkBlue' | 'pink' | 'gray' | 'white'
type basicJobTypes = 'warrior' | 'magician' | 'thief' | 'cleric' | 'beginner'
type npclevelTypes = 'weak' | 'normal' | 'strong'

export default NPCGenerateDialog

function NPCGenerateDialog (): JSX.Element {
    const { userSelect, userSelectDispatch } = useContext(userSelectContext)
    const { currentPlayer, playersAttrs, numberOfPlayers } = userSelect
    const { gender, color, job, npcLevel } = playersAttrs[currentPlayer - 1]
    const focusElement = useRef<HTMLDivElement>(null)
    const [selectedIdx, setSelectedIdx] = useState(4)
    const [isLeave, toggleIsLeave] = useState(false)

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
                    userSelectDispatch({
                        type: 'currentStep',
                        payload: 'SelectNPCLevel'
                    })
                    break
                case 1:
                    userSelectDispatch({
                        type: 'currentStep',
                        payload: 'SelectGender'
                    })
                    break
                case 2:
                    userSelectDispatch({
                        type: 'currentStep',
                        payload: 'SelectColor'
                    })
                    break
                case 3:
                    userSelectDispatch({
                        type: 'currentStep',
                        payload: 'SelectJob'
                    })
                    break
                case 4:
                    if (currentPlayer === 4) break
                    userSelectDispatch({
                        type: 'currentPlayer',
                        payload: String(currentPlayer + 1)
                    })
                    userSelectDispatch({
                        type: 'currentStep',
                        payload: 'BeforeNPCGenerateDialog'
                    })
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
                userSelectDispatch({
                    type: 'currentPlayer',
                    payload: String(newCurrentPlayer)
                })
                userSelectDispatch({
                    type: 'currentStep',
                    payload: newCurrentPlayer === numberOfPlayers ? 'SelectJob' : 'NPCGenerateDialog'
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
            className={`
            ${styles.container}
            ${globalStyles.yellowBlock}
            ${isLeave ?  styles.leave : ''}`}
            tabIndex={0}
            ref={focusElement}
            onBlur={(event) => event.target.focus()}
            onKeyUp={handleKeyUp}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className={styles.title}>勇者募集!!</div>
            <CustomBorderBottom/>
            <div className={styles.bottom}>
                <div
                    className={`
                    ${globalStyles.xyCenter}
                    ${styles.imgContainer}`}
                >
                    <img src={`${prefix}/imgs/${job}_${gender}_${color}_front.png`}/>
                </div>
                <div className={styles.btnGroup}>
                    <Btn
                        selected={selectedIdx === 0}
                        content={npcLevel === '' ? '弱' : npcLevels[npcLevel as npclevelTypes].chinese}
                    />
                    <Btn
                        selected={selectedIdx === 1}
                        content={gender === 'male' ? '男' : '女'}
                    />
                    <Btn
                        selected={selectedIdx === 2}
                        content={colors[color as colorTypes]?.chinese || ''}
                    />
                    <Btn
                        selected={selectedIdx === 3}
                        content={basicJobs[job as basicJobTypes]?.chinese || ''}
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
        <div
            className={`
            ${styles.confirmBtn}
            ${globalStyles.yellowBlock}
            ${styles.btn}
            ${globalStyles.xyCenter}
            ${selected ? styles.hoverEffect : ''}`}
        >
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
        <div
            className={`
            ${globalStyles.yellowBlock}
            ${styles.btn}
            ${globalStyles.xyCenter}
            ${selected ? globalStyles.hoverEffect : ''}`}
        >
            {content}
        </div>
    )
}