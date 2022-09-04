// Related third party imports.
import { useContext } from "react";
import { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import { UIStateContext } from "reducers/Game/UIState";
import OnlyBottomDialogFieldCheck from "../OnlyBottomDialogFieldCheck";

// Stateless vars declare.

export default RedTreasureFieldCheck;

function RedTreasureFieldCheck(props: { state: TransitionStatus }) {
  const { state } = props;
  const { UIStateDispatch } = useContext(UIStateContext);
  return (
    <OnlyBottomDialogFieldCheck
      state={state}
      dialogText={
        "何が起こるか分からない\nハイリスク・ハイリターンの危険なマス。\n止まるからには命を賭けろ!"
      }
      onClose={() =>
        UIStateDispatch({
          type: "showRedTreasureFieldCheck",
          payload: false,
        })
      }
    />
  );
}
