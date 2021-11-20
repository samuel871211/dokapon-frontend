import { useState, useContext, Fragment, useReducer } from 'react'

import guide from '../imgs/guide.png'

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

import { reducer, initState } from '../reducers/SelectCharacter'

import styles from './SelectCharacter.module.css'

const Components = {
    SelectGoalType: <SelectGoalType/>,
    GoalInputDialog: <GoalInputDialog/>,
    SelectNumberOfPlayers: <SelectNumberOfPlayers/>,
    OnlyOnePlayer: <SelectNumberOfPlayers/>,
    SelectGender: <SelectGender/>,
    NameInputDialog: <NameInputDialog/>,
    SelectColor: <SelectColor/>,
    SelectJob: <SelectJob/>,
    NPCGenerateDialog: <NPCGenerateDialog/>,
    SelectNPCLevel: <SelectNPCLevel/>
}

const steps = {
    SelectGoalType: {
        settingTitle: '自由模式設定',
        NPCMessage: '要選擇什麼遊戲模式呢？'
    },
    GoalInputDialog: {
        settingTitle: '',
        NPCMessage: '請選擇xxx'
    },
    SelectNumberOfPlayers: {
        settingTitle: '遊玩人數',
        NPCMessage: '有幾個勇者呢？'
    },
    OnlyOnePlayer: {
        settingTitle: '遊玩人數',
        NPCMessage: '只有一個人啊...'
    },
    SelectGender: {
        settingTitle: '性別選擇',
        NPCMessage: '第１個勇者\n勇者的性別為何'
    },
    NameInputDialog: {
        settingTitle: '',
        NPCMessage: ''
    },
    SelectColor: {
        settingTitle: '顏色選擇',
        NPCMessage: '想詢問xxx\n勇者喜歡什麼顏色'
    },
    SelectJob: {
        settingTitle: '職業選擇',
        NPCMessage: 'xxx\n勇者偏好什麼職業'
    },
    NPCGenerateDialog: {
        settingTitle: '',
        NPCMessage: '我們打算招募以下這位勇者\n如果你覺得不喜歡，可以再更改'
    },
    SelectNPCLevel: {
        settingTitle: '強度選擇',
        NPCMessage: '強度要多強呢'
    }
}

export default function SelectCharacter (): JSX.Element {
    // data
    const [userSelect, dispatch] = useReducer(reducer, initState)
    const { currentStep } = userSelect
    
    // template
    return (
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
                            {currentStep !== 'NPCGenerateDialog' &&
                                <TitleArea title={steps[currentStep].settingTitle}/>
                            }
                            
                            {Components[currentStep]}
                        </div>
                    </div>
                    <div className={styles.bottomArea}>
                        <NPCSpeakingDialog
                            name='ナビイ'
                            message={steps[currentStep].NPCMessage}
                        />
                    </div>
                </Fragment>
            }
        </div>
    )
}