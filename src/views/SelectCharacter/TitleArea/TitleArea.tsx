// Related third party imports.
import { useContext, AnimationEvent } from "react";
import classNames from "classnames";

// Local application/library specific imports.
import { UIStateContext } from "reducers/SelectCharacter/UIState";
import styles from "./TitleArea.module.css";

// Stateless vars declare.

export default TitleArea;

function TitleArea(props: { title: string }): JSX.Element {
  const { title } = props;
  const {
    UIState: { showTitleArea },
    UIStateDispatch,
  } = useContext(UIStateContext);

  function handleAnimation(e: AnimationEvent) {
    if (e.animationName.includes("slideDown")) return;

    UIStateDispatch({
      type: "showTitleArea",
      payload: true,
    });
  }

  return (
    <div
      className={classNames(styles.titleAreaContainer, {
        [styles.leave]: !showTitleArea,
      })}
      onAnimationEnd={handleAnimation}
    >
      {title}
    </div>
  );
}
