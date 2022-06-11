import { createContext } from 'react'
import Dokapon from 'global'

const initUIState: Dokapon.Game.UIState = {
    showDrawer: true,
    showRoulette: false,
    showBag: false,
    showTalent: false,
    showData: false,
    showCheck: false,
    isPaperTopLayer: false,
    isCheckTopLayer: false,
    showOverviewMap: false,
    showNodeAttrsAndDistance: false,
    showMinimap: false,
    showNodeDescription: false,
    showCheckTip: false,
    showShopList: false,
    showBankList: false,
    showVillageStatus: false,
    showVillageValueList: false
}

const UIStateContext = createContext<Dokapon.Game.Context>({
    UIState: initUIState,
    UIStateDispatch: function (action: Dokapon.Game.Action) {
        console.error('Game.Context did not provide a value')
    }
})

/**
 * 每個switch case都只是單純用payload去刷新，不需要額外的計算、邏輯處理...所以暫時不需要by case處理
 */
function UIStateReducer (
    state: Dokapon.Game.UIState,
    action: Dokapon.Game.Action
): Dokapon.Game.UIState {
    const newState = {
        ...state,
        [action.type]: action.payload
    }
    return newState
}

export {
    initUIState,
    UIStateContext,
    UIStateReducer
}