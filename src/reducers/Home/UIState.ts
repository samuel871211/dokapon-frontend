import { createContext } from "react";
import type { Home } from "global";

const initUIState: Home.UIState = {
  showBtnGroup: true,
  showSetting: false,
  showBook: false,
  showKeyMappingDialog: false,
};

const UIStateContext = createContext<Home.Context>({
  UIState: initUIState,
  UIStateDispatch: function (action: Home.Action) {
    console.error("Home.Context did not provide a value");
  },
});

/**
 * 每個switch case都只是單純用payload去刷新，不需要額外的計算、邏輯處理...所以暫時不需要by case處理
 */
function UIStateReducer(
  state: Home.UIState,
  action: Home.Action
): Home.UIState {
  const newState = {
    ...state,
    [action.type]: action.payload,
  };
  return newState;
  // switch (action.type) {
  // case 'showTitleArea':
  // case 'showNPCTopLeftImgArea':
  // case 'showNPCDialog':
  // case 'showConfirmDialog':
  // case 'showSelectCharacter':
  // case 'selectedJob':
  // case 'confirmDialogSelctedIdx':
  // case 'npcAttrsRegenerated':
  // case 'currentStep':
  // }
}

export { initUIState, UIStateContext, UIStateReducer };
