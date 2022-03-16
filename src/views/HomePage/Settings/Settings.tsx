import styles from './Settings.module.css'
import { AspectRatioTypes, LangTypes } from '../../../global'
import { Transition, TransitionStatus } from 'react-transition-group'
import { useRef, KeyboardEvent, useContext, useEffect, useState, Fragment } from 'react'
import { UIStateContext } from '../../../reducers/HomePage/UIState'
import { UserPreferenceContext } from '../../../reducers/userPreference'
import { SyntheticEvent } from 'react'
import KeyMappingDialog from '../KeyMappingDialog/KeyMappingDialog'
import KEYBOARDMAP from './KeyBoardMap'
import useTranslation from '../../../global/translation'
import { GamePadKeyTypes } from '../../../global'
import classNames from 'classnames'
const transitionStyles = {
    exiting: styles.slideOut,
    exited: styles.slideOut,
    unmounted: styles.slideOut,
    entering: styles.slideIn,
    entered: styles.slideIn
}
const gamePadKeys: GamePadKeyTypes[] = [
    'arrowUp',
    'arrowDown',
    'arrowLeft',
    'arrowRight',
    'triangle',
    'circle',
    'square',
    'cross',
    'L1',
    'L2',
    'R1',
    'R2',
    'SELECT',
    'ANALOG',
    'START'
]
export default Settings

function Settings (props: { state: TransitionStatus }): JSX.Element {
    const { state } = props
    const { UIState, UIStateDispatch } = useContext(UIStateContext)
    const { UserPreference, UserPreferenceDispatch } = useContext(UserPreferenceContext)
    const { t } = useTranslation(UserPreference.lang)
    const [preservedUserPreference, initPreservedUserPreference] = useState<typeof UserPreference>()
    const [selectedLang, setSelectedLang] = useState<LangTypes>('cn')
    const [selectedAspectRatio, setSelectedAspectRatio] = useState<AspectRatioTypes>('16:9')
    const focusElement = useRef<HTMLDivElement>(null)
    const [currentAxis, setCurrentAxis] = useState({ row: 0, col: 0 })
    const handleKeyUpAttrs = state === 'entered' ? {
        tabIndex: 0,
        ref: focusElement,
        onKeyUp: UIState.showKeyMappingDialog ? handleKeyMapping : handleKeyUp,
        onBlur: (event: SyntheticEvent<HTMLDivElement>) => event.currentTarget.focus()
    } : {}
    /**
     * normally KEYBOARDMAP[x][y] is typeof "" | LangTypes | AspectRatioTypes | GamePadKeyTypes | "確定" | "取消"
     * but we have to make sure it's GamePadKeyTypes
     * so that we can dispatch event
     */
    function handleKeyMapping (e: KeyboardEvent): void {
        const { row, col } = currentAxis
        const maybeGamePadKey = KEYBOARDMAP[row][col] as GamePadKeyTypes
        if (!gamePadKeys.includes(maybeGamePadKey)) return

        const oldKeyBoardKey = UserPreference[maybeGamePadKey]
        const newKeyBoardKey = e.key.toLowerCase()

        UserPreferenceDispatch({
            type: maybeGamePadKey,
            payload: newKeyBoardKey
        })

        // avoid two gamepad key mapping to the same keyboard key
        for (const gamePadKey of gamePadKeys) {
            if (UserPreference[gamePadKey] === newKeyBoardKey) {
                UserPreferenceDispatch({
                    type: gamePadKey,
                    payload: oldKeyBoardKey
                })
                break
            }
        }
        UIStateDispatch({
            type: 'showKeyMappingDialog',
            payload: false
        })
    }
    function handleKeyUp (e: KeyboardEvent): void {
        switch (e.key.toLowerCase()) {
        case UserPreference.arrowUp:
            setCurrentAxis({
                col: currentAxis.col,
                row: currentAxis.row === 0 ? 9 : currentAxis.row - 1
            })
            break
        case UserPreference.arrowDown:
            setCurrentAxis({
                col: currentAxis.col,
                row: currentAxis.row === 9 ? 0 : currentAxis.row + 1
            })
            break
        case UserPreference.arrowLeft:
            setCurrentAxis({
                col: currentAxis.col === 0 ? 2 : currentAxis.col - 1,
                row: currentAxis.row
            })
            break
        case UserPreference.arrowRight:
            setCurrentAxis({
                col: currentAxis.col === 2 ? 0 : currentAxis.col + 1,
                row: currentAxis.row
            })
            break
        case UserPreference.circle: {
            const { row, col } = currentAxis
            const key = KEYBOARDMAP[row][col]
            switch (key) {
            case 'cn':
            case 'en':
            case 'jp':
                setSelectedLang(key)
                UserPreferenceDispatch({
                    type: 'lang',
                    payload: key
                })
                break
            case '16:9':
            case '4:3':
            case 'stretch':
                setSelectedAspectRatio(key)
                UserPreferenceDispatch({
                    type: 'aspectRatio',
                    payload: key
                })
                break
            case '確定':
            case '取消': {
                const payload = key === '確定' ? UserPreference : (preservedUserPreference || UserPreference)
                UIStateDispatch({
                    type: 'showSetting',
                    payload: false
                })
                UIStateDispatch({
                    type: 'showBtnGroup',
                    payload: true
                })
                UserPreferenceDispatch({
                    type: 'update',
                    payload
                })
                setSelectedLang(payload.lang)
                setSelectedAspectRatio(payload.aspectRatio)
                setCurrentAxis({ row: 0, col: 0 })
                break
            }
            case 'arrowUp':
            case 'arrowDown':
            case 'arrowLeft':
            case 'arrowRight':
            case 'triangle':
            case 'circle':
            case 'square':
            case 'cross':
            case 'L1':
            case 'L2':
            case 'R1':
            case 'R2':
            case 'SELECT':
            case 'ANALOG':
            case 'START':
                UIStateDispatch({
                    type: 'showKeyMappingDialog',
                    payload: true
                })
                break
            }
            break
        }
        }
    }
    useEffect(() => {
        initPreservedUserPreference(UserPreference)
        console.log(UserPreference)
    }, [])
    useEffect(() => { if (state === 'entered') focusElement.current?.focus() }, [state])
    return (
        <Fragment>
            <div
                className={`${styles.container} ${transitionStyles[state]}`}
                { ...handleKeyUpAttrs }
            >
                <div className={styles.dialog}>
                    <div className={styles.dialogContent}>
                        <div>{t('語言')}</div>
                        <div className={styles.choice}>
                            <div className={classNames({
                                [styles.choiceText]: true,
                                [styles.hoverEffect]: currentAxis.col === 0 && currentAxis.row === 0,
                                [styles.disabledText]: selectedLang !== 'cn'
                            })}>中文</div>
                        </div>
                        <div className={styles.choice}>
                            <div className={classNames({
                                [styles.choiceText]: true,
                                [styles.hoverEffect]: currentAxis.col === 1 && currentAxis.row === 0,
                                [styles.disabledText]: selectedLang !== 'en'
                            })}>English</div>
                        </div>
                        <div className={styles.choice}>
                            <div className={classNames({
                                [styles.choiceText]: true,
                                [styles.hoverEffect]: currentAxis.col === 2 && currentAxis.row === 0,
                                [styles.disabledText]: selectedLang !== 'jp'
                            })}>日本語</div>
                        </div>
                    </div>
                    <div className={styles.dialogContent}>
                        <div>{t('画面比')}</div>
                        <div className={styles.choice}>
                            <div className={classNames({
                                [styles.choiceText]: true,
                                [styles.hoverEffect]: currentAxis.col === 0 && currentAxis.row === 1,
                                [styles.disabledText]: selectedAspectRatio !== '16:9'
                            })}>16:9</div>
                        </div>
                        <div className={styles.choice}>
                            <div className={classNames({
                                [styles.choiceText]: true,
                                [styles.hoverEffect]: currentAxis.col === 1 && currentAxis.row === 1,
                                [styles.disabledText]: selectedAspectRatio !== '4:3'
                            })}>4:3</div>
                        </div>
                        <div className={styles.choice}>
                            <div className={classNames({
                                [styles.choiceText]: true,
                                [styles.hoverEffect]: currentAxis.col === 2 && currentAxis.row === 1,
                                [styles.disabledText]: selectedAspectRatio !== 'stretch'
                            })}>{t('ストレッチ')}</div>
                        </div>
                    </div>
                    <div className={styles.dialogContent}>
                        <div>{t('ゲームパッドの設定')}</div>
                        <div className={styles.empty}></div>
                        <div className={styles.empty}></div>
                        <div className={styles.empty}></div>
                    </div>
                    <div className={styles.mappingTable}>
                        <div className={styles.gamePadColumn}>
                            <div className={styles.cell}>{t('ゲームパッド')}</div>
                            <div className={styles.cell}>↑</div>
                            <div className={styles.cell}>↓</div>
                            <div className={styles.cell}>→</div>
                            <div className={styles.cell}>←</div>
                            <div className={styles.cell}>△</div>
                            <div className={styles.cell}>○</div>
                            <div className={styles.cell}>□</div>
                            <div className={styles.cell}>✕</div>
                        </div>
                        <div className={styles.keyBoardColumn}>
                            <div className={styles.cell}>
                                <div className={styles.cellText}>{t('キーボード')}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 0 && currentAxis.row === 2,
                                })}>{UserPreference.arrowUp}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 0 && currentAxis.row === 3,
                                })}>{UserPreference.arrowDown}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 0 && currentAxis.row === 4,
                                })}>{UserPreference.arrowRight}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 0 && currentAxis.row === 5,
                                })}>{UserPreference.arrowLeft}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 0 && currentAxis.row === 6,
                                })}>{UserPreference.triangle}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 0 && currentAxis.row === 7,
                                })}>{UserPreference.circle}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 0 && currentAxis.row === 8,
                                })}>{UserPreference.square}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 0 && currentAxis.row === 9,
                                })}>{UserPreference.cross}</div>
                            </div>
                        </div>
                        <div className={styles.gamePadColumn}>
                            <div className={styles.cell}>{t('ゲームパッド')}</div>
                            <div className={classNames({
                                [styles.cell]: true,
                                [styles.hoverEffect]: currentAxis.col === 1 && currentAxis.row === 2
                            })}>L1</div>
                            <div className={classNames({
                                [styles.cell]: true,
                                [styles.hoverEffect]: currentAxis.col === 1 && currentAxis.row === 3
                            })}>L2</div>
                            <div className={classNames({
                                [styles.cell]: true,
                                [styles.hoverEffect]: currentAxis.col === 1 && currentAxis.row === 4
                            })}>R1</div>
                            <div className={classNames({
                                [styles.cell]: true,
                                [styles.hoverEffect]: currentAxis.col === 1 && currentAxis.row === 5
                            })}>R2</div>
                            <div className={classNames({
                                [styles.cell]: true,
                                [styles.hoverEffect]: currentAxis.col === 1 && currentAxis.row === 6
                            })}>SELECT</div>
                            <div className={classNames({
                                [styles.cell]: true,
                                [styles.hoverEffect]: currentAxis.col === 1 && currentAxis.row === 7
                            })}>ANALOG</div>
                            <div className={classNames({
                                [styles.cell]: true,
                                [styles.hoverEffect]: currentAxis.col === 1 && currentAxis.row === 8
                            })}>START</div>
                            <div className={styles.actions}>
                                <div className={classNames({
                                    [styles.hoverEffect]: currentAxis.col === 1 && currentAxis.row === 9,
                                })}>{t('はい')}</div>
                            </div>
                        </div>
                        <div className={styles.keyBoardColumn}>
                            <div className={styles.cell}>
                                <div className={styles.cellText}>{t('キーボード')}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 2 && currentAxis.row === 2,
                                })}>{UserPreference.L1}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 2 && currentAxis.row === 3,
                                })}>{UserPreference.L2}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 2 && currentAxis.row === 4,
                                })}>{UserPreference.R1}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 2 && currentAxis.row === 5,
                                })}>{UserPreference.R2}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 2 && currentAxis.row === 6,
                                })}>{UserPreference.SELECT}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 2 && currentAxis.row === 7,
                                })}>{UserPreference.ANALOG}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 2 && currentAxis.row === 8,
                                })}>{UserPreference.START}</div>
                            </div>
                            <div className={styles.actions}>
                                <div className={classNames({
                                    [styles.cellText]: true,
                                    [styles.hoverEffect]: currentAxis.col === 2 && currentAxis.row === 9,
                                })}>{t('いいえ')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Transition in={UIState.showKeyMappingDialog} timeout={1000}>
                {state => (<KeyMappingDialog state={state}/>)}
            </Transition>
        </Fragment>
    )
}