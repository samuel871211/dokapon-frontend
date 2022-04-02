import classNames from 'classnames'
import { useContext, useRef, SyntheticEvent, KeyboardEvent, useEffect, useState } from 'react'
import { TransitionStatus, Transition } from 'react-transition-group'
import useTranslation from '../../../global/translation'
import { UIStateContext } from '../../../reducers/Game/UIState'
import { userPreferenceContext } from '../../../reducers/userPreference'
import styles from './Bag.module.css'
import { SomeKindOfIcon } from '../../../global/icons'
const transitionStyles = {
    topArea: {
        entering: styles.topAreaEntering,
        entered: styles.topAreaEntered,
        exiting: styles.topAreaExiting,
        exited: '',
        unmounted: ''
    },
    centerArea: {
        entering: '',
        entered: styles.centerAreaEntered,
        exiting: styles.centerAreaExiting,
        exited: '',
        unmounted: ''
    },
    bottomArea: {
        entering: '',
        entered: styles.bottomAreaEntered,
        exiting: styles.bottomAreaExiting,
        exited: '',
        unmounted: ''
    },
    confirmDialog: {
        entering: '',
        entered: '',
        exiting: '',
        exited: '',
        unmounted: ''
    }
}

export default Bag

function Bag (props: {state: TransitionStatus }): JSX.Element {
    const { t, handleKeyUp, state, focusElement, handleKeyUpAttrs, bagInfo, curBag, selectedItemIdx } = useMetaData(props)
    return (
        <div
            className={styles.container}
            ref={focusElement}
            { ... handleKeyUpAttrs }
            onKeyUp={handleKeyUp}
        >
            <div className={classNames(
                `${styles.topArea}`, `${transitionStyles.topArea[state]}`
            )}>
                <div className={styles.swiperContainer}>
                    <div className={styles.swiper}>
                        <div className={styles.square}>L</div>
                        <div className={styles.swiperText}>
                            {curBag === 'item' ? t('アイテム') : t('魔法')}
                        </div>
                        <div className={styles.square}>R</div>
                    </div>
                </div>
            </div>
            <div className={classNames(
                `${styles.centerArea}`, `${transitionStyles.centerArea[state]}`
            )}>
                <div className={styles.itemAndMagicContainer}>
                    <div
                        style={{ zIndex: curBag === 'item' ? 2 : 1 }}
                        className={styles.itemContainer}
                    >
                        <Item selected={curBag === 'item' && selectedItemIdx === 0} text={bagInfo.item[0]} icon={<SomeKindOfIcon/>}/>
                        <Item selected={curBag === 'item' && selectedItemIdx === 1} text={bagInfo.item[1]} icon={<SomeKindOfIcon/>}/>
                        <Item selected={curBag === 'item' && selectedItemIdx === 2} text={bagInfo.item[2]} icon={<SomeKindOfIcon/>}/>
                        <Item selected={curBag === 'item' && selectedItemIdx === 3} text={bagInfo.item[3]} icon={<SomeKindOfIcon/>}/>
                        <Item selected={curBag === 'item' && selectedItemIdx === 4} text={bagInfo.item[4]} icon={<SomeKindOfIcon/>}/>
                        <Item selected={curBag === 'item' && selectedItemIdx === 5} text={bagInfo.item[5]} icon={<SomeKindOfIcon/>}/>
                        <Item selected={curBag === 'item' && selectedItemIdx === 6} text={bagInfo.item[6]} icon={<SomeKindOfIcon/>}/>
                        <Item selected={curBag === 'item' && selectedItemIdx === 7} text={bagInfo.item[7]} icon={<SomeKindOfIcon/>}/>
                    </div>
                    <div
                        style={{ zIndex: curBag === 'magic' ? 2 : 1 }}
                        className={styles.magicContainer}
                    >
                        <Item selected={curBag === 'magic' && selectedItemIdx === 0} text={bagInfo.magic[0]} icon={<SomeKindOfIcon/>}/>
                        <Item selected={curBag === 'magic' && selectedItemIdx === 1} text={bagInfo.magic[1]} icon={<SomeKindOfIcon/>}/>
                        <Item selected={curBag === 'magic' && selectedItemIdx === 2} text={bagInfo.magic[2]} icon={<SomeKindOfIcon/>}/>
                        <Item selected={curBag === 'magic' && selectedItemIdx === 3} text={bagInfo.magic[3]} icon={<SomeKindOfIcon/>}/>
                        <Item selected={curBag === 'magic' && selectedItemIdx === 4} text={bagInfo.magic[4]} icon={<SomeKindOfIcon/>}/>
                        <Item selected={curBag === 'magic' && selectedItemIdx === 5} text={bagInfo.magic[5]} icon={<SomeKindOfIcon/>}/>
                        <Item selected={curBag === 'magic' && selectedItemIdx === 6} text={bagInfo.magic[6]} icon={<SomeKindOfIcon/>}/>
                        <Item selected={curBag === 'magic' && selectedItemIdx === 7} text={bagInfo.magic[7]} icon={<SomeKindOfIcon/>}/>
                    </div>
                </div>
            </div>
            <div className={classNames(
                `${styles.bottomArea}`, `${transitionStyles.bottomArea[state]}`
            )}>
                <div className={styles.messageContainer}>
                    <div className={styles.messageArea}></div>
                    <Transition in={false} timeout={1000}>
                    {state => 
                        <div className={classNames(
                            styles.confirmDialog, transitionStyles.confirmDialog[state]
                        )}></div>
                    }
                    </Transition>
                </div>
            </div>
        </div>
    )
}

function Item (props: {
    selected: boolean,
    text: string,
    icon: JSX.Element
}): JSX.Element {
    const { selected, text, icon } = props
    return (
        <div className={styles.item}>
            <div className={classNames({
                [styles.itemContent]: true,
                [styles.hoverEffect]: selected
            })}>
                <div className={styles.iconContainer}>{icon}</div>
                <div className={styles.itemText}>{text}</div>
            </div>
        </div>
    )
}

/**
 * @todo 讀取各職業的包包上限
 * @todo 讀取items table跟magics table
 */
function useMetaData (props: {state: TransitionStatus }) {
    const { state } = props
    const { userPreference } = useContext(userPreferenceContext)
    const { UIState, UIStateDispatch } = useContext(UIStateContext)
    const { t } = useTranslation(userPreference.lang)
    const [curBag, toggleCurBag] = useState<'item' | 'magic'>('item')
    const [selectedItemIdx, setSelectedItemIdx] = useState(0)
    const [bagInfo, setBagInfo] = useState({
        item: ['', '', '', '', '', '', '', ''],
        magic: ['', '', '', '', '', '', '', '']
    })
    // [
    //      0,  1,
    //      2,  3,
    //      4,  5,
    //      6,  7,
    //      8,  9
    // ]
    const focusElement = useRef<HTMLDivElement>(null)
    const handleKeyUpAttrs = UIState.showBag ? {
        tabIndex: 0,
        ref: focusElement,
        onBlur: (event: SyntheticEvent<HTMLDivElement>) => event.currentTarget.focus(),
        onKeyUp: handleKeyUp
    } : {}
    function focusWhenEntered (state: TransitionStatus) {
        if (state === 'entered') focusElement.current?.focus()
    }
    function handleKeyUp (e: KeyboardEvent) {
        switch (e.key.toLowerCase()) {
        case userPreference.arrowUp: {
            const capacity = bagInfo[curBag].length
            switch (selectedItemIdx) {
            case 0:
                setSelectedItemIdx(capacity - 2)
                return
            case 1:
                setSelectedItemIdx(capacity - 1)
                return
            default:
                setSelectedItemIdx(selectedItemIdx - 2)
                return
            }
        }
        case userPreference.arrowDown: {
            const capacity = bagInfo[curBag].length
            switch (selectedItemIdx) {
            case capacity - 2:
                setSelectedItemIdx(0)
                return
            case capacity - 1:
                setSelectedItemIdx(1)
                return
            default:
                setSelectedItemIdx(selectedItemIdx + 2)
                return
            }
        }
        case userPreference.arrowLeft:
        case userPreference.arrowRight: {
            switch (selectedItemIdx % 2) {
            case 0:
                setSelectedItemIdx(selectedItemIdx + 1)
                return
            case 1:
                setSelectedItemIdx(selectedItemIdx - 1)
                return
            default:
                return
            }
        }
        case userPreference.R1:
        case userPreference.R2:
        case userPreference.L1:
        case userPreference.L2:
            toggleCurBag(curBag === 'item' ? 'magic' : 'item')
            return
        case userPreference.circle:
            return
        case userPreference.cross:
            UIStateDispatch({
                type: 'showBag',
                payload: false
            })
            return
        }
    }
    useEffect(() => setSelectedItemIdx(0), [curBag])
    useEffect(() => focusWhenEntered(state), [state])
    return {
        t,
        handleKeyUp,
        state,
        focusElement,
        handleKeyUpAttrs,
        bagInfo,
        curBag,
        selectedItemIdx
    }
}