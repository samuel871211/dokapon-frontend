// Related third party imports.
import { useContext } from "react";
import { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import { UIStateContext } from "reducers/Game/UIState";
import OnlyBottomDialogFieldCheck from "../OnlyBottomDialogFieldCheck";

// Stateless vars declare.

export default KeyTreasureFieldCheck;

function KeyTreasureFieldCheck(props: { state: TransitionStatus }) {
  const { state } = props;
  const { UIStateDispatch } = useContext(UIStateContext);
  return (
    <OnlyBottomDialogFieldCheck
      state={state}
      dialogText={
        "魔法のカギを使わないと開かないが、\n貴重な品を入手できるマス。"
      }
      onClose={() =>
        UIStateDispatch({
          type: "showKeyTreasureFieldCheck",
          payload: false,
        })
      }
    />
  );
}
