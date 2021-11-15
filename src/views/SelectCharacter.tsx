import { useState } from 'react'

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

import styles from './SelectCharacter.module.css'

// 目標 => 人數 => 性別 => 名字 => 顏色 => 職業

type steps =    
    'SelectGoalType' |
    'GoalInputDialog' |
    'SelectNumberOfPlayers' |
    'SelectGender' |
    'NameInputDialog' |
    'SelectColor' |
    'SelectJob' |
    'NPCGenerateDialog' |
    'SelectNPCLevel'

export default function SelectCharacter (): JSX.Element {
    // data
    const [steps, setSteps] = useState({
        SelectGoalType: {
            aiTopLeftImgDisplay: true,
            settingTitleDisplay: true,
            settingTitle: '自由模式設定',
            selectedGoalType: '期間',
            aiMessage: '要選擇什麼遊戲模式呢？'
        },
        GoalInputDialog: {
            aiTopLeftImgDisplay: true,
            settingTitleDisplay: false,
            settingTitle: '',
            goalInput: '',
            aiMessage: '請選擇xxx'
        },
        SelectNumberOfPlayers: {
            aiTopLeftImgDisplay: true,
            settingTitleDisplay: true,
            settingTitle: '遊玩人數',
            selectedNumberOfPlayers: 1,
            aiMessage: '有幾個勇者呢？'
        },
        SelectGender: {
            aiTopLeftImgDisplay: true,
            settingTitleDisplay: true,
            settingTitle: '性別選擇',
            selectedGender: 'male',
            aiMessage: '第１個勇者\n勇者的性別為何'
        },
        NameInputDialog: {
            aiTopLeftImgDisplay: false,
            settingTitleDisplay: false,
            settingTitle: '',
            nameInput: '',
            aiMessage: ''
        },
        SelectColor: {
            aiTopLeftImgDisplay: true,
            settingTitleDisplay: true,
            settingTitle: '顏色選擇',
            selectedColor: 'red',
            aiMessage: '想詢問xxx，勇者喜歡什麼顏色'
        },
        SelectJob: {
            aiTopLeftImgDisplay: true,
            settingTitleDisplay: true,
            settingTitle: '職業選擇',
            selectedJob: 'warrior',
            aiMessage: 'xxx，勇者偏好什麼職業'
        },
        NPCGenerateDialog: {
            aiTopLeftImgDisplay: true,
            settingTitleDisplay: false,
            settingTitle: '',
            selectedLevel: 'weak',
            selectedGender: 'male',
            selectedColor: 'yellow',
            selectedJob: 'warrior',
            aiMessage: '我們打算招募以下這位勇者\n如果你覺得不喜歡，可以再更改'
        },
        SelectNPCLevel: {
            aiTopLeftImgDisplay: true,
            settingTitleDisplay: true,
            settingTitle: '強度選擇',
            selectedLevel: 'weak',
            aiMessage: '強度要多強呢'
        }
    })
    const [currentStep, setCurrentStep] = useState<steps>('NPCGenerateDialog')
    
    // template
    return (
        <div className={styles.container}>
            <NameInputDialog/>
            {/* <div className={styles.topArea}>
                <div className={styles.topLeftArea}>
                    <NPCTopLeftImgArea src={guide} alt='ナビイ'/>
                </div>
                <div className={styles.topRightArea}>
                    {steps[currentStep].settingTitleDisplay &&
                        <TitleArea title={steps[currentStep].settingTitle}/>
                    }
                    {currentStep === 'SelectGoalType' && <SelectGoalType/>}
                    {currentStep === 'SelectNumberOfPlayers' && <SelectNumberOfPlayers/>}
                    {currentStep === 'SelectGender' && <SelectGender/>}
                    {currentStep === 'SelectColor' && <SelectColor/>}
                    {currentStep === 'SelectJob' && <SelectJob/>}
                    {currentStep === 'GoalInputDialog' && <GoalInputDialog type='money'/>}
                    {currentStep === 'NPCGenerateDialog' && <NPCGenerateDialog/>}
                    {currentStep === 'SelectNPCLevel' && <SelectNPCLevel/>}
                </div>
            </div>
            <div className={styles.bottomArea}>
                <NPCSpeakingDialog
                    name='ナビイ'
                    message={steps[currentStep].aiMessage}
                />
            </div> */}
        </div>
    )
}