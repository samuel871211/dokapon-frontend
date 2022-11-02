// Related third party imports.
import { useContext } from "react";
import { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import { UIStateContext } from "reducers/DokaponTheWorld/UIState";
import OnlyBottomDialogFieldCheck from "../OnlyBottomDialogFieldCheck";

// Stateless vars declare.

export default GoldTreasureFieldCheck;

function GoldTreasureFieldCheck(props: { state: TransitionStatus }) {
  const { state } = props;
  const { UIStateDispatch } = useContext(UIStateContext);
  return (
    <OnlyBottomDialogFieldCheck
      state={state}
      dialogText={"お金を入手できるマス。"}
      onClose={() =>
        UIStateDispatch({
          type: "showGoldTreasureFieldCheck",
          payload: false,
        })
      }
    />
  );
}
