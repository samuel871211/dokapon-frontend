import { useContext, useRef, SyntheticEvent, KeyboardEvent, useEffect } from 'react'
import { TransitionStatus } from 'react-transition-group'
import CustomBorderBottom from '../../../components/CustomBorderBottom'
import useTranslation from '../../../global/utils/translation'
import { UIStateContext } from '../../../reducers/Game/UIState'
import { userPreferenceContext } from '../../../reducers/userPreference'
import YellowBlock from '../../../layouts/YellowBlock'
import BottomDialogConfirmCircle from '../../../components/BottomDialogConfirmCircle'
import styles from './ShopList.module.css'
const transitionStyles = {
    topArea: {
        entering: '',
        entered: styles.topAreaEntered,
        exiting: '',
        exited: '',
        unmounted: ''
    },
    bottomArea: {
        entering: '',
        entered: styles.bottomAreaEntered,
        exiting: '',
        exited: '',
        unmounted: ''
    }
}
export default ShopList

function ShopList (props: { state: TransitionStatus }): JSX.Element {
    const { state } = props
    const { handleKeyUpAttrs } = useMetaData(state)
    console.log(state)
    return (
        <div
            { ...handleKeyUpAttrs }
            className={styles.container}
        >
            <div className={`${styles.topArea} ${transitionStyles.topArea[state]}`}>
                <YellowBlock role='title' className={styles.shopName}>
                    陳昱昇
                </YellowBlock>
                <YellowBlock role='dialog' className={styles.shopList}>
                    <div className={styles.listHead}>
                        <div className={styles.th}>NAME</div>
                        <div className={styles.th}>PRICE</div>
                        <div className={styles.th}>DATA</div>
                    </div>
                    <CustomBorderBottom width='97.5%'/>
                    <div className={styles.listBody}>
                        <div className={styles.left}>
                            <div className={styles.arrowIcon}></div>
                        </div>
                        <div className={styles.nameList}>
                            <div className={styles.name}>
                                <div className={styles.icon}></div>
                                <div className={styles.nameText}>一二</div>
                            </div>
                            <div className={styles.name}>
                                <div className={styles.icon}></div>
                                <div className={styles.nameText}>一二三四五六</div>
                            </div>
                            <div className={styles.name}>
                                <div className={styles.icon}></div>
                                <div className={styles.nameText}>一二三四五六七</div>
                            </div>
                            <div className={styles.name}>
                                <div className={styles.icon}></div>
                                <div className={styles.nameText}>一二三四五六七</div>
                            </div>
                            <div className={styles.name}>
                                <div className={styles.icon}></div>
                                <div className={styles.nameText}>一二三四五六</div>
                            </div>
                            <div className={styles.name}>
                                <div className={styles.icon}></div>
                                <div className={styles.nameText}>一二</div>
                            </div>
                        </div>
                        <div className={styles.priceList}>
                            <div className={styles.price}>300000</div>
                            <div className={styles.price}>270000</div>
                            <div className={styles.price}>820000</div>
                            <div className={styles.price}>645000</div>
                            <div className={styles.price}>30000</div>
                            <div className={styles.price}>7800</div>
                        </div>
                        <div className={styles.dataList}>
                            <div className={styles.data}>陳昱昇是大帥哥</div>
                            <div className={styles.data}>陳昱昇是大帥</div>
                            <div className={styles.data}>陳昱昇是大</div>
                            <div className={styles.data}>陳昱昇是大</div>
                            <div className={styles.data}>陳昱昇是大帥</div>
                            <div className={styles.data}>陳昱昇是大帥哥</div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.arrowIcon}></div>
                        </div>
                    </div>
                </YellowBlock>
            </div>
            <div className={`${styles.bottomArea} ${transitionStyles.bottomArea[state]}`}>
                <YellowBlock role='dialog' className={styles.messageContainer}>
                    <div>知道妳會過得有模有樣</div>
                    <div>也知道我哭是為了給妳祝福，別再靠北了</div>
                    <div>今後提起，妳的姓名，談笑我也可以</div>
                    <BottomDialogConfirmCircle/>
                </YellowBlock>
            </div>
        </div>
    )
}

function useMetaData (state: TransitionStatus) {
    const focusElement = useRef<HTMLDivElement>(null)
    const { UIState, UIStateDispatch } = useContext(UIStateContext)
    const { userPreference } = useContext(userPreferenceContext)
    const { t } = useTranslation(userPreference.lang)
    const handleKeyUpAttrs = UIState.showShopList ? {
        tabIndex: 0,
        onBlur: (event: SyntheticEvent<HTMLDivElement>) => event.currentTarget?.focus(),
        ref: focusElement,
        onKeyUp: handleKeyUp
    } : {}
    function handleKeyUp (e: KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case userPreference.R1:
        case userPreference.R2:
            break
        case userPreference.L1:
        case userPreference.L2:
            break
        case userPreference.circle:
        case userPreference.triangle:
        case userPreference.square:
        case userPreference.cross:
            UIStateDispatch({
                type: 'showShopList',
                payload: false
            })
            break
        }
    }
    useEffect(() => { if (state === 'entered') focusElement.current?.focus() }, [state])
    return { handleKeyUpAttrs, t }
}