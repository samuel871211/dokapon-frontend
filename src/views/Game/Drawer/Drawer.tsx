import AttrCircle from '../../../components/AttrCircle'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import CustomBorderBottom from '../../../components/CustomBorderBottom'
import { TransitionStatus } from 'react-transition-group'
import styles from './Drawer.module.css'
import classNames from 'classnames'
import useTranslation from '../../../global/translation'
import { userPreferenceContext } from '../../../reducers/userPreference'
import { UIStateContext } from '../../../reducers/Game/UIState'
import { useState, useContext, useRef, useEffect, SyntheticEvent, KeyboardEvent } from 'react'
const BACKENDURL = process.env.REACT_APP_BACKEND_BASEURL || ''
const transitionStyles = {
    topLeft: {
        entering: styles.topLeftEntering,
        entered: styles.topLeftEntered,
        exiting: styles.topLeftExiting,
        exited: styles.exited,
        unmounted: ''
    },
    topRight: {
        entering: styles.topRightEntering,
        entered: styles.topRightEntered,
        exiting: styles.topRightExiting,
        exited: styles.exited,
        unmounted: ''
    },
    bottomLeft: {
        entering: styles.topLeftEntering,
        entered: styles.topLeftEntered,
        exiting: styles.topLeftExiting,
        exited: styles.exited,
        unmounted: ''
    },
    bottomRight: {
        entering: styles.topRightEntering,
        entered: styles.topRightEntered,
        exiting: styles.topRightExiting,
        exited: styles.exited,
        unmounted: ''
    }
}

export default Drawer

function Drawer (props: { state: TransitionStatus }): JSX.Element {
    const { state } = props
    const [selectedBtnIdx, setSelectedBtnIdx] = useState(0)
    const { UIState, UIStateDispatch } = useContext(UIStateContext)
    const { userPreference } = useContext(userPreferenceContext)
    const { t } = useTranslation(userPreference.lang)
    const focusElement = useRef<HTMLDivElement>(null)
    const handleKeyUpAttrs = UIState.showDrawer ? {
        tabIndex: 0,
        ref: focusElement,
        onBlur: (event: SyntheticEvent<HTMLDivElement>) => event.currentTarget.focus(),
        onKeyUp: handleKeyUp
    } : {}

    function handleKeyUp (e: KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case userPreference.arrowUp:
            setSelectedBtnIdx(selectedBtnIdx === 0 ? 4 : selectedBtnIdx - 1)
            return
        case userPreference.arrowDown:
            setSelectedBtnIdx(selectedBtnIdx === 4 ? 0 : selectedBtnIdx + 1)
            return
        case userPreference.circle:
            switch (selectedBtnIdx) {
            case 0: // 移動
                UIStateDispatch({
                    type: 'showDrawer',
                    payload: false
                })
                UIStateDispatch({
                    type: 'showRoulette',
                    payload: true
                })
                return
            case 1: // 背包
                UIStateDispatch({
                    type: 'showDrawer',
                    payload: false
                })
                UIStateDispatch({
                    type: 'showBag',
                    payload: true
                })
                return
            case 2: // 查看
                return
            case 3: // 特技
                return
            case 4: // 資訊
                return
            }
            return
        }
    }

    useEffect(() => { if (state === 'entered') focusElement.current?.focus() }, [state])

    return (
        <div { ...handleKeyUpAttrs } className={styles.container}>
            <div className={classNames(
                styles.topLeft,
                transitionStyles.topLeft[state]
            )}>
                <WeeklyInfo/>
            </div>
            <div className={classNames(
                styles.topRight,
                transitionStyles.topRight[state]
            )}>
                <DetailedPlayerInfos/>
            </div>
            <div className={classNames(
                styles.bottomLeft,
                transitionStyles.bottomLeft[state]
            )}>
                <FloatingActionBtn selected={selectedBtnIdx === 0}>{t('移動')}</FloatingActionBtn>
                <FloatingActionBtn selected={selectedBtnIdx === 1}>{t('カバン')}</FloatingActionBtn>
                <FloatingActionBtn selected={selectedBtnIdx === 2}>{t('チェック')}</FloatingActionBtn>
                <FloatingActionBtn selected={selectedBtnIdx === 3}>{t('特技')}</FloatingActionBtn>
                <FloatingActionBtn selected={selectedBtnIdx === 4}>{t('データ')}</FloatingActionBtn>
            </div>
            <div className={classNames(
                styles.bottomRight,
                transitionStyles.bottomRight[state]
            )}>
                <BriefPlayerInfos/>
                <BriefPlayerInfos/>
                <BriefPlayerInfos/>
            </div>
        </div>
    )
}

function WeeklyInfo (): JSX.Element {
    return (
        <div className={styles.weeklyInfo}>
            <div>
                <div className={styles.week}>
                    <div>week</div>
                    <div>90</div>
                </div>
                <div className={styles.activity}>職安休</div>
            </div>
            <div>
                <div className={styles.weekIcon}>
                    <div>月</div>
                    <div>MON</div>
                </div>
            </div>
        </div>
    )
}

function FloatingActionBtn (props: { selected: boolean, children: string }): JSX.Element {
    const { selected, children } = props
    return (
        <div className={styles.floatingActionBtn}>
            <div>
                <WatchLaterIcon
                    fontSize='inherit'
                    htmlColor='yellow'
                />
            </div>
            <div style={{ opacity: selected ? 1 : 0 }}>
                <div>{children}</div>
            </div>
        </div>
    )
}

function DetailedPlayerInfos (): JSX.Element {
    return (
        <div className={styles.detailedPlayerInfos}>
            <div>
                <div className={styles.playerImg}>
                    <img
                        width="100%"
                        height="100%"
                        src={`${BACKENDURL}/imgs/magician_male_red_front.png`}
                    />
                </div>
                <div className={styles.ranking}>
                    <div>
                        RANKING
                        <span> 2</span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className={styles.verticalCircles}>
                        <AttrCircle attr='LV' value={11} fontSize='2rem'/>
                    </div>
                    <div className={styles.verticalCircles}>
                        <AttrCircle attr='AT' value={61} fontSize='2rem'/>
                    </div>
                </div>
                <div>
                    <div className={styles.playerArea}>
                        <div>PLAYER</div>
                        <div>NAME</div>
                        <CustomBorderBottom/>
                    </div>
                    <div className={styles.circlesContainer}>
                        <div>
                            <AttrCircle attr='DF' value={65} fontSize='2rem'/>
                        </div>
                        <div>
                            <AttrCircle attr='MG' value={59} fontSize='2rem'/>
                        </div>
                        <div>
                            <AttrCircle attr='SP' value={59} fontSize='2rem'/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.moneyArea}>
                        <div>MONEY</div>
                        <div>14,700,000</div>
                        <CustomBorderBottom/>
                    </div>
                    <div className={styles.hpArea}>
                        <div>
                            <div>
                                <div>HP</div>
                                <div className={styles.hpBar}></div>
                            </div>
                            <div>1000 / 1000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function BriefPlayerInfos (): JSX.Element { 
    return (
        <div className={styles.briefPlayerInfos}>
            <div>
                <img
                    width="100%"
                    height="100%"
                    src={`${BACKENDURL}/imgs/magician_male_red_front.png`}
                />
            </div>
            <div>
                <div>
                    <div className={styles.level}>
                        <AttrCircle attr='LV' value={11} fontSize='1.6rem'/>
                    </div>
                    <div className={styles.nameArea}>
                        <div>NAME</div>
                        <CustomBorderBottom/>
                    </div>
                </div>
                <div>
                    <div className={styles.briefHPArea}>
                        <div>HP</div>
                        <div className={styles.hpBar}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}