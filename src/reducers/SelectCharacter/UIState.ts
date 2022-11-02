import { createContext } from "react";
import type { SelectCharacter, BasicJobTypes } from "global";

const initUIState: SelectCharacter.UIState = {
  showTitleArea: true,
  showNPCTopLeftImgArea: true,
  showNPCDialog: true,
  showConfirmDialog: true,
  showSelectCharacter: true,
  currentStep: "SelectGoalType",
  selectedJob: <BasicJobTypes>"",
  confirmDialogSelectedIdx: 1,
  npcsAttrsRegenerated: [false, false, false, false],
};

const UIStateContext = createContext<SelectCharacter.Context>({
  UIState: initUIState,
  UIStateDispatch: function (action: SelectCharacter.Action) {
    console.error("SelectCharacter.Context did not provide a value");
  },
});

/**
 * 每個switch case都只是單純用payload去刷新，不需要額外的計算、邏輯處理...所以暫時不需要by case處理
 */
function UIStateReducer(
  state: SelectCharacter.UIState,
  action: SelectCharacter.Action
): SelectCharacter.UIState {
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
