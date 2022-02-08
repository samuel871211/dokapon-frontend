import { Fragment, useReducer } from 'react'

import guide from '../imgs/guide.png'
import { basicJobs } from '../global/characters'

import TitleArea from '../components/selectCharacter/TitleArea'
import NPCDialog from '../components/NPCDialog'
import NPCTopLeftImgArea from '../components/NPCTopLeftImgArea'
import SelectGoalType from '../components/selectCharacter/SelectGoalType'
import SelectNumberOfPlayers from '../components/selectCharacter/SelectNumberOfPlayers'
import SelectGender from '../components/selectCharacter/SelectGender'
import SelectColor from '../components/selectCharacter/SelectColor'
import SelectJob from '../components/selectCharacter/SelectJob'
import SelectNPCLevel from '../components/selectCharacter/SelectNPCLevel'
import GoalInputDialog from '../components/selectCharacter/GoalInputDialog'
import NPCGenerateDialog from '../components/selectCharacter/NPCGenerateDialog'
import NameInputDialog from '../components/selectCharacter/NameInputDialog'
import SelectOrderAndController from '../components/selectCharacter/SelectOrderAndController'

import { userSelectReducer, userSelectInitState, userSelectContext } from '../reducers/userSelect'
import { slideControllerReducer, slideControllerInitState, slideControllerContext } from '../reducers/slideController'

import styles from './SelectCharacter.module.css'

const digitToFullWidth = ['', '１', '２', '３', '４']

const Components = {
    SelectGoalType: <SelectGoalType/>,
    GoalInputDialog: <GoalInputDialog/>,
    SelectNumberOfPlayers: <SelectNumberOfPlayers/>,
    OnlyOnePlayer: <SelectNumberOfPlayers/>,
    SelectGender: <SelectGender/>,
    BeforeNameInput: '',
    NameInputDialog: <NameInputDialog/>,
    SelectColor: <SelectColor/>,
    SelectJob: <SelectJob/>,
    BeforeNPCGenerateDialog: '',
    NPCGenerateDialog: <NPCGenerateDialog/>,
    SelectNPCLevel: <SelectNPCLevel/>,
    PlayerAttrsCollected: <SelectOrderAndController/>,
    SelectController: <SelectOrderAndController/>,
    SelectControllerConfirm: <SelectOrderAndController/>,
    SelectOrderStep1: <SelectOrderAndController/>,
    SelectOrderStep2: <SelectOrderAndController/>,
    SelectOrderStep3: ''
}

export default function SelectCharacter (): JSX.Element {
    // data
    const [userSelect, userSelectDispatch] = useReducer(userSelectReducer, userSelectInitState)
    const [slideState, slideControllerDispatch] = useReducer(slideControllerReducer, slideControllerInitState)
    const { currentStep, goalType, playersAttrs, currentPlayer, currentJob } = userSelect
    const nameInput = playersAttrs[currentPlayer - 1].nameInput

    function steps (step: typeof currentStep) {
        switch (step) {
        case 'SelectGoalType':
            return {
                title: '自由模式設定',
                npcDialog: {
                    messages: ['要選擇什麼遊戲模式呢？'],
                    confirmBtnDisplay: false,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: false
                }
            }
        case 'GoalInputDialog':
            return {
                title: '',
                npcDialog: {
                    messages: [`請選擇${goalType === 'period' ? '期間' : '金額'}`],
                    confirmBtnDisplay: false,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: false
                }
            }
        case 'SelectNumberOfPlayers':
            return {
                title: '遊玩人數',
                npcDialog: {
                    messages: ['有幾個勇者呢？'],
                    confirmBtnDisplay: false,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: false
                }
            }
        case 'OnlyOnePlayer':
            return {
                title: '遊玩人數',
                npcDialog: {
                    messages: ['．．．只有１個人喔', '果然是邊緣人啊'],
                    confirmBtnDisplay: true,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: true
                }
            }
        case 'SelectGender':
            return {
                title: '性別選擇',
                npcDialog: {
                    messages: [`第${digitToFullWidth[currentPlayer]}個勇者\n勇者的性別為何？`],
                    confirmBtnDisplay: false,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: false
                }
            }
        case 'BeforeNameInput':
            return {
                title: '',
                npcDialog: {
                    messages: ['請教勇者的名字'],
                    confirmBtnDisplay: true,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: true
                }
            }
        case 'NameInputDialog':
            return {
                title: '',
                npcDialog: { 
                    messages: [''],
                    confirmBtnDisplay: false,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: false
                }
            }
        case 'SelectColor': 
            return {
                title: '顏色選擇',
                npcDialog: {
                    messages: [`想詢問${nameInput}\n勇者喜歡什麼顏色`],
                    confirmBtnDisplay: false,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: false
                }
            }
        case 'SelectJob': 
            return {
                title: '職業選擇',
                npcDialog: {
                    messages: currentJob === '' ?
                        [`${nameInput}\n勇者偏好什麼職業`] : [basicJobs[currentJob]?.chineseIntro],  
                    confirmBtnDisplay: false,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: false
                }
            }
        case 'BeforeNPCGenerateDialog':
            return {
                title: '',
                npcDialog: {
                    messages: [
                        '國王招募的勇者有4人。',
                        '換句話說現在還缺少勇者。',
                        `還需要${5 - currentPlayer}個人。`,
                        `想詢問第${currentPlayer}位勇者`
                    ],
                    confirmBtnDisplay: true,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: true
                }
            }
        case 'NPCGenerateDialog':
            return {
                title: '',
                npcDialog: {
                    messages: ['我們打算招募以下這位勇者\n如果你覺得不喜歡，可以再更改'],
                    confirmBtnDisplay: false,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: false
                }
            }
        case 'SelectNPCLevel': 
            return {
                title: '強度選擇',
                npcDialog: {
                    messages: ['強度要多強呢'],
                    confirmBtnDisplay: false,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: false
                }
            }
        case 'PlayerAttrsCollected':
            return {
                title: '',
                npcDialog: {
                    messages: ['至此四位勇士都到齊了!'],
                    confirmBtnDisplay: true,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: true
                }
            }
        case 'SelectController': 
            return {
                title: '',
                npcDialog: {
                    messages: ['請決定要使用哪個搖桿!'],
                    confirmBtnDisplay: false,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: false
                }
            }
        case 'SelectControllerConfirm':
            return {
                title: '',
                npcDialog: {
                    messages: ['這個成員配置可以嗎？'],
                    confirmBtnDisplay: false,
                    confirmDialogDisplay: true,
                    shouldHandleKeyEvent: false
                }
            }
        case 'SelectOrderStep1':
            return {
                title: '',
                npcDialog: {
                    messages: ['接著來決定順序吧!'],
                    confirmBtnDisplay: false,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: false
                }
            }
        case 'SelectOrderStep2':
            return {
                title: '',
                npcDialog: {
                    messages: ['就這麼決定了!'],
                    confirmBtnDisplay: true,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: false
                }
            }
        case 'SelectOrderStep3':
            return {
                title: '',
                npcDialog: {
                    messages: ['那麼，就帶你去多卡波王國吧!'],
                    confirmBtnDisplay: true,
                    confirmDialogDisplay: false,
                    shouldHandleKeyEvent: true
                }
            }
        }
    }
    
    // template
    return (
        <userSelectContext.Provider value={{ userSelect, userSelectDispatch }}>
        <slideControllerContext.Provider value={{ slideState, slideControllerDispatch }}>
            <div
                className={`
                ${styles.container}
                ${slideState.selectCharacterFadeOut ? styles.fadeOut : ''}`}
            >
                
                {currentStep === 'NameInputDialog' &&
                    <NameInputDialog/>
                }
                
                {currentStep !== 'NameInputDialog' &&
                    <Fragment>
                        <div className={styles.topArea}>
                            <div className={styles.topLeftArea}>
                                <NPCTopLeftImgArea src={guide} alt='ナビイ'/>
                            </div>
                            <div className={styles.topRightArea}>
                                <TitleArea title={steps(currentStep).title}/>
                                {Components[currentStep]}
                            </div>
                        </div>
                        <div className={styles.bottomArea}>
                            <NPCDialog
                                name='ナビイ'
                                message={steps(currentStep).npcDialog.messages}
                                confirmBtnDisplay={steps(currentStep).npcDialog.confirmBtnDisplay}
                                confirmDialogDisplay={steps(currentStep).npcDialog.confirmDialogDisplay}
                                shouldHandleKeyEvent={steps(currentStep).npcDialog.shouldHandleKeyEvent}
                            />
                        </div>
                    </Fragment>
                }
            </div>
        </slideControllerContext.Provider>
        </userSelectContext.Provider>
    )
}