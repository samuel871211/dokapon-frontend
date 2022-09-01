// Standard library imports.

// Related third party imports.
import {
  useContext,
  useRef,
  SyntheticEvent,
  KeyboardEvent,
  useEffect,
} from "react";
import type { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import useTranslation from "hooks/useTranslation";
import { UIStateContext } from "reducers/Game/UIState";
import { userPreferenceContext } from "reducers/userPreference";
import YellowBlock from "layouts/YellowBlock";
import BottomDialogConfirmCircle from "components/BottomDialogConfirmCircle";
import styles from "./OnlyBottomDialogFieldCheck.module.css";

// Stateless vars declare.
const transitionStyles = {
  bottomArea: {
    entering: "",
    entered: styles.bottomAreaEntered,
    exiting: "",
    exited: "",
    unmounted: "",
  },
};
const bottomDialogTexts = {
  BattleField: "ザコモンスターとの戦闘や\nイベントが発生するマス。",
  KeyTreasureField:
    "魔法のカギを使わないと開かないが、\n貴重な品を入手できるマス。",
  MagicField: "フィールド魔法を入手できるマス。",
  RedTreasureField:
    "何が起こるか分からない\nハイリスク・ハイリターンの危険なマス。\n止まるからには命を賭けろ!",
  TreasureField: "アイテムを入手できるマス。",
  WhiteTreasureField:
    "普通では手に入らないものを入手できるマス。\nしかし良い物が手に入る確率は2分の1。\n最悪の事態になることも⋯。",
  WorldTransferField:
    "別のエリアヘワープできるマス。\n有料だが簡単に移動できるので便利。",
  GoldTreasureField: "お金を入手できるマス。",
  DamageField:
    "止まると一定量のダメージを受けるマス。\n戦闘やイベントも起こる。",
  "": "",
};

export default OnlyBottomDialogFieldCheck;

function OnlyBottomDialogFieldCheck(props: {
  state: TransitionStatus;
}): JSX.Element {
  const { state } = props;
  const {
    UIState: { onlyBottomDialogFieldCheck },
  } = useContext(UIStateContext);
  const { t, handleKeyUpAttrs } = useMetaData(state);

  return (
    <div {...handleKeyUpAttrs} className={styles.fieldCheckContainer}>
      <div className={styles.topArea}></div>
      <div
        className={`${styles.bottomArea} ${transitionStyles.bottomArea[state]}`}
      >
        <YellowBlock role="dialog" className={styles.messageContainer}>
          {bottomDialogTexts[onlyBottomDialogFieldCheck]
            .split("\n")
            .map((line) => (
              <div key={line}>{t(line)}</div>
            ))}
          <BottomDialogConfirmCircle />
        </YellowBlock>
      </div>
    </div>
  );
}

function useMetaData(state: TransitionStatus) {
  const focusElement = useRef<HTMLDivElement>(null);
  const { UIStateDispatch } = useContext(UIStateContext);
  const { userPreference } = useContext(userPreferenceContext);
  const { t } = useTranslation(userPreference.lang);
  const handleKeyUpAttrs = state === "entered" && {
    tabIndex: 0,
    onBlur: (event: SyntheticEvent<HTMLDivElement>) =>
      event.currentTarget?.focus(),
    ref: focusElement,
    onKeyUp: handleKeyUp,
  };
  function handleKeyUp(e: KeyboardEvent) {
    switch (e.key.toLowerCase()) {
      case userPreference.circle:
      case userPreference.triangle:
      case userPreference.square:
      case userPreference.cross:
        UIStateDispatch({
          type: "onlyBottomDialogFieldCheck",
          payload: "",
        });
        break;
    }
  }
  useEffect(() => {
    if (state === "entered") focusElement.current?.focus();
  }, [state]);
  return { handleKeyUpAttrs, t };
}
