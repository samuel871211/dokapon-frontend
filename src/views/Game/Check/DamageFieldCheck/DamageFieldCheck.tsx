// Related third party imports.
import { useContext } from "react";
import { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import { UIStateContext } from "reducers/Game/UIState";
import OnlyBottomDialogFieldCheck from "../OnlyBottomDialogFieldCheck";

// Stateless vars declare.

export default DamageFieldCheck;

function DamageFieldCheck(props: { state: TransitionStatus }) {
  const { state } = props;
  const { UIStateDispatch } = useContext(UIStateContext);
  return (
    <OnlyBottomDialogFieldCheck
      state={state}
      dialogText={
        "止まると一定量のダメージを受けるマス。\n戦闘やイベントも起こる。"
      }
      onClose={() =>
        UIStateDispatch({
          type: "showDamageFieldCheck",
          payload: false,
        })
      }
    />
  );
}
