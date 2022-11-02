// Related third party imports.
import { useContext } from "react";
import { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import { UIStateContext } from "reducers/DokaponTheWorld/UIState";
import OnlyBottomDialogFieldCheck from "../OnlyBottomDialogFieldCheck";

// Stateless vars declare.

export default WorldTransferFieldCheck;

function WorldTransferFieldCheck(props: { state: TransitionStatus }) {
  const { state } = props;
  const { UIStateDispatch } = useContext(UIStateContext);
  return (
    <OnlyBottomDialogFieldCheck
      state={state}
      dialogText={
        "別のエリアヘワープできるマス。\n有料だが簡単に移動できるので便利。"
      }
      onClose={() =>
        UIStateDispatch({
          type: "showWorldTransferFieldCheck",
          payload: false,
        })
      }
    />
  );
}
