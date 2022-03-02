import React, { useRef, useState, useContext } from 'react'

import { userSelectContext } from '../../../reducers/userSelect'
import { slideControllerContext } from '../../../reducers/slideController'
import globalStyles from '../../../global/styles.module.css'
import styles from './index.module.css'
type gender = 'male' | 'female'
const backendUrl = process.env.REACT_APP_BACKEND_BASEURL || ''
const genderToCN = { male: '男', female: '女' }

export default SelectGender
function SelectGender (): JSX.Element {
    const focusElement = useRef<HTMLDivElement>(null)
    const { userSelect, userSelectDispatch } = useContext(userSelectContext)
    const { currentPlayer, numberOfPlayers } = userSelect
    const { slideControllerDispatch } = useContext(slideControllerContext)
    const [isLeave, toggleIsLeave] = useState(false)
    const [selectedGender, toggleSelectedGender] = useState<gender>('male')

    function handleKeyUp (e: React.KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case 'arrowleft':
            toggleSelectedGender(selectedGender === 'male' ? 'female' : 'male')
            break
        case 'arrowright':
            toggleSelectedGender(selectedGender === 'male' ? 'female' : 'male')
            break
        case 'd':
            toggleIsLeave(true)
            slideControllerDispatch({
                type: 'titleArea',
                payload: true
            })
            break
        case 'x': {
            let nextStep = ''
            if (currentPlayer === 1) nextStep = 'SelectNumberOfPlayers'
            else if (numberOfPlayers >= currentPlayer) nextStep = 'SelectJob'
            else if (numberOfPlayers < currentPlayer) nextStep = 'NPCGenerateDialog'

            userSelectDispatch({
                type: 'currentStep',
                payload: nextStep
            })
            if (nextStep === 'SelectJob') {
                userSelectDispatch({
                    type: 'currentPlayer',
                    payload: String(currentPlayer - 1)
                })
                userSelectDispatch({
                    type: 'currentJob',
                    payload: ''
                })
            }
            break
        }
        default:
            break
        }
    }
    function handleAnimationEnd (e: React.AnimationEvent<HTMLDivElement>) {
        if (e.animationName.includes('slideLeft')) {
            focusElement.current?.focus()
            return
        }

        if (e.animationName.includes('slideRight')) {
            toggleIsLeave(false)
            slideControllerDispatch({
                type: 'titleArea',
                payload: false
            })
            userSelectDispatch({
                type: 'gender',
                payload: selectedGender
            })
            userSelectDispatch({
                type: 'currentStep',
                payload: numberOfPlayers >= currentPlayer ? 'BeforeNameInput' : 'NPCGenerateDialog'
            })
        }
    }

    return (
        <div
            ref={focusElement}
            className={`
            ${styles.btnGroup}
            ${globalStyles.xyCenter}
            ${isLeave ? styles.leave : ''}`}
            tabIndex={0}
            onBlur={(event) => event.target.focus()}
            onKeyUp={handleKeyUp}
            onAnimationEnd={handleAnimationEnd}
        >
            <GenderBlockBtn gender='male' selected={selectedGender === 'male'}/>
            <GenderBlockBtn gender='female' selected={selectedGender === 'female'}/>
        </div>
    )
}

function GenderBlockBtn (props: { gender: gender, selected: boolean }): JSX.Element {
    const { gender, selected } = props
    const imgSrc = `${backendUrl}/imgs/beginner_${gender}_red_front.png`

    return (
        <div className={styles.genderBlock}>
            <div className={styles.imgContainer}>
                <img 
                    src={imgSrc}
                    width='100%'
                    alt={genderToCN[gender]}
                    className={selected ? styles.darkenImg: ''}
                />
            </div>
            <div
                className={`
                ${styles.btn}
                ${globalStyles.yellowBlock}
                ${selected ? globalStyles.hoverEffect: ''}`}
            >
                <img src='' width='30px' height='30px'/>
                <div className={styles.btnText}>
                    {genderToCN[gender]}
                </div>
            </div>
        </div>
    )
}