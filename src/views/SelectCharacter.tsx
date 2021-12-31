import { Fragment, useReducer } from 'react'

import guide from '../imgs/guide.png'
import { basicJobs } from '../global/characters'

import TitleArea from '../components/selectCharacter/TitleArea'
import NPCSpeakingDialog from '../components/NPCSpeakingDialog'
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
    SelectNPCLevel: <SelectNPCLevel/>
}

export default function SelectCharacter (): JSX.Element {
    // data
    const [userSelect, userSelectDispatch] = useReducer(userSelectReducer, userSelectInitState)
    const [slideState, slideControllerDispatch] = useReducer(slideControllerReducer, slideControllerInitState)
    const { currentStep, goalType, playersAttrs, currentPlayer, currentJob, numberOfPlayers } = userSelect
    const nameInput = playersAttrs[currentPlayer - 1].nameInput

    function display (step: typeof currentStep) {
        switch (step) {
        case 'SelectGoalType':
            return {
                title: '自由模式設定',
                NPCMessage: ['要選擇什麼遊戲模式呢？'],
                NPCMessageBtnDisplay: false
            }
        case 'GoalInputDialog':
            return {
                title: '',
                NPCMessage: [`請選擇${goalType === 'period' ? '期間' : '金額'}`],
                NPCMessageBtnDisplay: false
            }
        case 'SelectNumberOfPlayers':
            return {
                title: '遊玩人數',
                NPCMessage: ['有幾個勇者呢？'],
                NPCMessageBtnDisplay: false
            }
        case 'OnlyOnePlayer':
            return {
                title: '遊玩人數',
                NPCMessage: ['．．．只有１個人喔', '果然是邊緣人啊'],
                NPCMessageBtnDisplay: true
            }
        case 'SelectGender':
            return {
                title: '性別選擇',
                NPCMessage: [`第${digitToFullWidth[currentPlayer]}個勇者\n勇者的性別為何？`],
                NPCMessageBtnDisplay: false
            }
        case 'BeforeNameInput':
            return {
                title: '',
                NPCMessage: ['請教勇者的名字'],
                NPCMessageBtnDisplay: true
            }
        case 'NameInputDialog':
            return {
                title: '',
                NPCMessage: [''],
                NPCMessageBtnDisplay: false
            }
        case 'SelectColor': 
            return {
                title: '顏色選擇',
                NPCMessage: [`想詢問${nameInput}\n勇者喜歡什麼顏色`],
                NPCMessageBtnDisplay: false
            }
        case 'SelectJob': 
            return {
                title: '職業選擇',
                NPCMessage: currentJob === '' ?
                    [`${nameInput}\n勇者偏好什麼職業`] : [basicJobs[currentJob]?.chineseIntro],
                NPCMessageBtnDisplay: false
            }
        case 'BeforeNPCGenerateDialog':
            return {
                title: '',
                NPCMessage: ['國王招募的勇者有4人。', '換句話說現在還缺少勇者。', `還需要${5 - currentPlayer}個人。`, `想詢問第${currentPlayer}位勇者`],
                NPCMessageBtnDisplay: true
            }
        case 'NPCGenerateDialog':
            return {
                title: '',
                NPCMessage: ['我們打算招募以下這位勇者\n如果你覺得不喜歡，可以再更改'],
                NPCMessageBtnDisplay: false
            }
        case 'SelectNPCLevel': 
            return {
                title: '強度選擇',
                NPCMessage: ['強度要多強呢'],
                NPCMessageBtnDisplay: false
            }    
        }
    }
    
    // template
    return (
        <userSelectContext.Provider value={{ userSelect, userSelectDispatch }}>
        <slideControllerContext.Provider value={{ slideState, slideControllerDispatch }}>
            <div className={styles.container}>
                
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
                                <TitleArea title={display(currentStep).title}/>
                                {Components[currentStep]}
                            </div>
                        </div>
                        <div className={styles.bottomArea}>
                            <NPCSpeakingDialog
                                name='ナビイ'
                                message={display(currentStep).NPCMessage}
                                displayBtn={display(currentStep).NPCMessageBtnDisplay}
                            />
                        </div>
                    </Fragment>
                }
            </div>
        </slideControllerContext.Provider>
        </userSelectContext.Provider>
    )
}