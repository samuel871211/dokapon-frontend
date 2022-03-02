import { Dispatch } from 'react'

export = Dokapon
export as namespace Dokapon

declare namespace Dokapon {
    type ColorTypes = 'red' | 'orange' | 'yellow' |
        'lightGreen' | 'darkGreen' | 'lightBlue' |
        'darkBlue' | 'pink' | 'gray' | 'white'
    type BasicJobTypes = 'warrior' | 'magician' |
        'thief' | 'cleric' | 'beginner'
    type GoalTypes = 'period' | 'money'
    type NPCLevelTypes = 'weak' | 'normal' | 'strong'
    type GenderTypes = 'male' | 'female'
    type CharacterTypes = 'player' | 'monster'
    interface CharacterAttrs {
        gender: GenderTypes,
        name: string,
        color: ColorTypes,
        job: BasicJobTypes
    }
    interface PlayerAttrs extends CharacterAttrs {
        isNPC: false,
        controllerNumber: 1 | 2 | 3 | 4,
    }
    interface NPCAttrs extends CharacterAttrs {
        isNPC: true,
        npcLevel: NPCLevelTypes
    }
    interface MonsterAttrs extends CharacterAttrs {
        isNPC: true
        // 待補
    }
    type GameProgress = {
        goalType: GoalTypes,
        goalInput: number,
        numberOfPlayers: 1 | 2 | 3 | 4,
        currentPlayer: 1 | 2 | 3 | 4,
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
            type: 'numberOfPlayers' | 'currentPlayer' | 'controllerNumber',
            payload: 1 | 2 | 3 | 4
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
            selectedJob: Dokapon.BasicJobTypes,
            confirmDialogSelctedIdx: 0 | 1,
            npcAttrsRegenerated: [boolean, boolean, boolean, boolean],
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
            payload: State['selectedJob']
        } | {
            type: 'confirmDialogSelctedIdx',
            payload: State['confirmDialogSelctedIdx']
        } | {
            type: 'npcAttrsRegenerated',
            payload: State['npcAttrsRegenerated']
        } | {
            type: 'currentStep',
            payload: State['currentStep']
        }
        type Context = {
            UIState: State,
            UIStateDispatch: Dispatch<Action>
        }
    }
}