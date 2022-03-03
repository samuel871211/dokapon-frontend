import { Dispatch } from 'react'

export = Dokapon
export as namespace Dokapon

declare namespace Dokapon {
    type ColorTypes = 'red' | 'orange' | 'yellow' |
        'lightGreen' | 'darkGreen' | 'lightBlue' |
        'darkBlue' | 'pink' | 'gray' | 'white'
    type BasicJobTypes = 'warrior' | 'magician' |
        'thief' | 'cleric' | 'beginner'
    type NPCLevelTypes = 'weak' | 'normal' | 'strong'
    type GenderTypes = 'male' | 'female'
    type GoalTypes = 'period' | 'money'
    type CharacterTypes = 'player' | 'monster'
    interface CharacterAttrs {
        gender: GenderTypes,
        name: string,
        color: ColorTypes,
        job: BasicJobTypes,
        isNPC: boolean,
        npcLevel : NPCLevelTypes | '',
        controllerNumber: number,
    }
    /**
     * schema統一化，程式端會比較好管理
     */
    interface PlayerAttrs extends CharacterAttrs {
        isNPC: false,
        npcLevel : '',
        controllerNumber: number,
    }
    interface NPCAttrs extends CharacterAttrs {
        isNPC: true,
        npcLevel: NPCLevelTypes,
        controllerNumber: 0
    }
    interface MonsterAttrs extends CharacterAttrs {
        isNPC: true,
        npcLevel : NPCLevelTypes,
        controllerNumber: 0
    }
    type GameProgress = {
        /**
         * 資料送到後端的時候才會產生
         */
        readonly timeStamp: string,
        goalType: GoalTypes,
        goalInput: number,
        numberOfPlayers: number,
        currentPlayer: number,
        playersAttrs: [
            PlayerAttrs | NPCAttrs,
            PlayerAttrs | NPCAttrs,
            PlayerAttrs | NPCAttrs,
            PlayerAttrs | NPCAttrs
        ]
    }
    declare namespace GameProgress {
        type Context = {
            gameProgress: GameProgress,
            gameProgressDispatch: Dispatch<Action>
        }
        type Action = {
            type: 'goalType',
            payload: GoalTypes
        } | {
            type: 'goalInput',
            payload: number
        } | {
            type: 'numberOfPlayers' | 'currentPlayer',
            payload: number
        } | {
            type: 'controllerNumber' | 'shuffle',
            payload: number[]
        } | {
            type: 'gender',
            payload: GenderTypes
        } | {
            type: 'name',
            payload: string
        } | {
            type: 'color',
            payload: ColorTypes
        } | {
            type: 'job',
            payload: BasicJobTypes
        } | {
            type: 'npcLevel',
            payload: NPCLevelTypes
        }
    }
    declare namespace SelectCharacter {
        type Steps =
            'SelectGoalType' |
            'GoalInputDialog' |
            'SelectNumberOfPlayers' |
            'OnlyOnePlayer' |
            'SelectGender' |
            'BeforeNameInput' |
            'NameInputDialog' |
            'SelectColor' |
            'SelectJob' |
            'BeforeNPCGenerateDialog' |
            'NPCGenerateDialog' |
            'SelectNPCLevel' |
            'PlayerAttrsCollected' |
            'SelectController' |
            'SelectControllerConfirm' |
            'SelectOrderStep1' |
            'SelectOrderStep2' |
            'SelectOrderStep3'
        type UIState = {
            showTitleArea: boolean,
            showNPCTopLeftImgArea: boolean,
            showNPCDialog: boolean,
            showConfirmDialog: boolean,
            showSelectCharacter: boolean,
            selectedJob: Dokapon.BasicJobTypes | '',
            confirmDialogSelectedIdx: number,
            npcsAttrsRegenerated: [boolean, boolean, boolean, boolean],
            currentStep: Steps
        }
        type Action = {
            type:
                'showTitleArea' |
                'showNPCTopLeftImgArea' |
                'showNPCDialog' |
                'showConfirmDialog' |
                'showSelectCharacter'
            payload: boolean
        } | {
            type: 'selectedJob',
            payload: UIState['selectedJob']
        } | {
            type: 'confirmDialogSelectedIdx',
            payload: UIState['confirmDialogSelectedIdx']
        } | {
            type: 'npcsAttrsRegenerated',
            payload: UIState['npcsAttrsRegenerated']
        } | {
            type: 'currentStep',
            payload: UIState['currentStep']
        }
        type Context = {
            UIState: UIState,
            UIStateDispatch: Dispatch<Action>
        }
    }
}