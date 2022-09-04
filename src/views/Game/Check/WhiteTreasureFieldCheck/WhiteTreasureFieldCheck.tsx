// Related third party imports.
import { useContext } from "react";
import { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import { UIStateContext } from "reducers/Game/UIState";
import OnlyBottomDialogFieldCheck from "../OnlyBottomDialogFieldCheck";

// Stateless vars declare.

export default WhiteTreasureFieldCheck;

function WhiteTreasureFieldCheck(props: { state: TransitionStatus }) {
  const { state } = props;
  const { UIStateDispatch } = useContext(UIStateContext);
  return (
    <OnlyBottomDialogFieldCheck
      state={state}
      dialogText={
        "普通では手に入らないものを入手できるマス。\nしかし良い物が手に入る確率は2分の1。\n最悪の事態になることも⋯。"
      }
      onClose={() =>
        UIStateDispatch({
          type: "showWhiteTreasureFieldCheck",
          payload: false,
        })
      }
    />
  );
}
