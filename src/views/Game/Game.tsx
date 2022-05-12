import { useState, useEffect, useContext } from 'react'
import { Transition } from 'react-transition-group'
import { userPreferenceContext } from '../../reducers/userPreference'
import styles from './Game.module.css'
import registerWindowResizeEvtHandler from '../../utils/windowResizeEvtHandler'
import Drawer from './Drawer'
import Roulette from './Roulette'
import Bag from './Bag'
import Check from './Check'
import OverviewMap from './OverviewMap'
import ShopList from './ShopList'
import { useReducer } from 'react'
import { initUIState, UIStateContext, UIStateReducer } from '../../reducers/Game/UIState'
import indexStyles from '../../index.module.css'
const aspectRatioStyles = {
    '16:9': indexStyles.wideAspectRatio,
    '4:3': indexStyles.traditionalAspectRatio,
    'stretch': indexStyles.stretchAspectRatio
}

export default Game

/**
 * @todo 繪圖的時候，還需要把所有Node的屬性都加上去(哪種商店、哪種地形...)
 */
function Game (): JSX.Element {
    const { userPreference } = useContext(userPreferenceContext)
    const [UIState, UIStateDispatch] = useReducer(UIStateReducer, initUIState)
    function showDrawer () {
        UIStateDispatch({
            type: 'showDrawer',
            payload: true
        })
    }
    function showCheck () {
        UIStateDispatch({
            type: 'showCheck',
            payload: true
        })
        UIStateDispatch({
            type: 'isCheckTopLayer',
            payload: true
        })
        UIStateDispatch({
            type: 'showCheckTip',
            payload: true
        })
        UIStateDispatch({
            type: 'showMinimap',
            payload: true
        })
    }
    useEffect(registerWindowResizeEvtHandler, [])
    // function registerPaperEventHandler (Paper: joint.dia.Paper): void {
    //     let dragMouseDownPos = { x: 0, y: 0 }
    //     let dragAnchorPos = { x: 0, y: 0 }
    //     Paper.on({
    //         'cell:pointermove': function (
    //             cellView: joint.dia.CellView,
    //             evt: JQuery.Event,
    //             x: number,
    //             y: number
    //         ) {
    //             const deltaX = (evt.screenX || 0) - dragMouseDownPos.x
    //             const deltaY = (evt.screenY || 0) - dragMouseDownPos.y
    //             Paper.translate(
    //                 dragAnchorPos.x + deltaX,
    //                 dragAnchorPos.y + deltaY
    //             )
    //             UIStateDispatch({
    //                 type: 'showCheckTip',
    //                 payload: false
    //             })
    //         },
    //         'cell:pointerup': function (
    //             cellView: joint.dia.CellView,
    //             evt: JQuery.Event,
    //             x: number,
    //             y: number
    //         ) {
    //             UIStateDispatch({
    //                 type: 'showCheckTip',
    //                 payload: true
    //             })
    //         },
    //         'cell:mouseover': function (
    //             cellView: joint.dia.CellView,
    //             evt: JQuery.Event
    //         ) {
    //             if (cellView.model.isLink()) return
    //             cellView.highlight()
    //             UIStateDispatch({
    //                 type: 'showNodeAttrsAndDistance',
    //                 payload: true
    //             })

    //         },
    //         'cell:mouseout': function (
    //             cellView: joint.dia.CellView,
    //             evt: JQuery.Event
    //         ) {
    //             if (cellView.model.isLink()) return
    //             cellView.unhighlight()
    //             UIStateDispatch({
    //                 type: 'showNodeAttrsAndDistance',
    //                 payload: false
    //             })
    //         },
    //         /**
    //          * @todo 需要根據element Type來決定要開啟什麼Dialog
    //          */
    //         'cell:pointerdblclick': function (
    //             cellView: joint.dia.CellView,
    //             evt: JQuery.Event,
    //             x: number,
    //             y: number
    //         ) {
    //             if (cellView.model.isLink()) return

    //             const elementType = (cellView.model.prop('type') as string).toLowerCase()
    //             switch (elementType) {
    //             case 'dokapon.specialfield':
    //                 UIStateDispatch({
    //                     type: 'isCheckTopLayer',
    //                     payload: false
    //                 })
    //                 UIStateDispatch({
    //                     type: 'showMinimap',
    //                     payload: false
    //                 })
    //                 UIStateDispatch({
    //                     type: 'showCheckTip',
    //                     payload: false
    //                 })
    //                 UIStateDispatch({
    //                     type: 'showShopList',
    //                     payload: true
    //                 })
    //                 break
    //             }
    //             cellView.model.attr('')
    //         },
    //         'blank:mousewheel': function (
    //             evt: JQuery.Event,
    //             x: number,
    //             y: number,
    //             delta: number
    //         ) {
    //             evt.preventDefault()
    //             const oldScale = Paper.scale().sx
    //             const { tx, ty } = Paper.translate()
    //             delta = delta === 1 ? 0.05 : -0.05
    //             const newScale = parseFloat((oldScale + delta).toFixed(2))
    //             if (newScale > 9.9 || newScale < 0.1) return

    //             if (oldScale === 1) {
    //                 Paper.scale(newScale, newScale, x, y)
    //             } else if (oldScale !== 1) {
    //                 Paper.translate(
    //                     parseInt((tx - x * (1 - oldScale)).toFixed(0)),
    //                     parseInt((ty - y * (1 - oldScale)).toFixed(0))
    //                 )
    //                 Paper.scale(1)
    //                 Paper.scale(newScale, newScale, x, y)
    //             }
    //         },
    //         'blank:pointermove': function (
    //             evt: JQuery.Event,
    //             x: number,
    //             y: number
    //         ) {
    //             const deltaX = (evt.screenX || 0) - dragMouseDownPos.x
    //             const deltaY = (evt.screenY || 0) - dragMouseDownPos.y
    //             Paper.translate(
    //                 dragAnchorPos.x + deltaX,
    //                 dragAnchorPos.y + deltaY
    //             )
    //             UIStateDispatch({
    //                 type: 'showCheckTip',
    //                 payload: false
    //             })
    //         },
    //         'blank:pointerup': function (
    //             evt: JQuery.Event,
    //             x: number,
    //             y: number
    //         ) {
    //             UIStateDispatch({
    //                 type: 'showCheckTip',
    //                 payload: true
    //             })
    //         },
    //     })
    // }

    return (
        <UIStateContext.Provider value={{ UIState, UIStateDispatch }}>
            <div className={`${styles.container} ${aspectRatioStyles[userPreference.aspectRatio]}`}>

                {/* in order to hold drawer state, only set css display none when exited */}
                <Transition appear in={UIState.showDrawer} timeout={{ enter: 0, exit: 1000 }}>
                    {state => (<Drawer state={state}/>)}
                </Transition>

                <Transition in={UIState.showRoulette} timeout={{ enter: 1000, exit: 0 }}>
                    {state => state !== 'exited' && (<Roulette state={state}/>)}
                </Transition>

                <Transition in={UIState.showBag} timeout={{ enter: 1000, exit: 500 }} onExited={showDrawer}>
                    {state => state !== 'exited' && (<Bag state={state}/>)}
                </Transition>

                <Transition in={UIState.showCheck} timeout={{ enter: 1000, exit: 500 }} onExited={showDrawer}>
                    {state => state !== 'exited' && (<Check state={state}/>)}
                </Transition>

                <Transition in={UIState.showOverviewMap} timeout={{ enter: 500, exit: 500 }} onExited={showCheck}>
                    {state => state !== 'exited' && (<OverviewMap state={state}/>)}
                </Transition>

                <Transition in={UIState.showShopList} timeout={{ enter: 500, exit: 500 }} onExited={showCheck}>
                    {state => state !== 'exited' && (<ShopList state={state}/>)}
                </Transition>
            </div>
        </UIStateContext.Provider>
    )
}