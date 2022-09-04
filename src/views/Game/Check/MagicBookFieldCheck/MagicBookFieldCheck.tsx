// Related third party imports.
import { useContext } from "react";
import { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import { UIStateContext } from "reducers/Game/UIState";
import OnlyBottomDialogFieldCheck from "../OnlyBottomDialogFieldCheck";

// Stateless vars declare.

export default MagicBookFieldCheck;

function MagicBookFieldCheck(props: { state: TransitionStatus }) {
  const { state } = props;
  const { UIStateDispatch } = useContext(UIStateContext);
  return (
    <OnlyBottomDialogFieldCheck
      state={state}
      dialogText={"フィールド魔法を入手できるマス。"}
      onClose={() =>
        UIStateDispatch({
          type: "showMagicBookFieldCheck",
          payload: false,
        })
      }
    />
  );
}
