// Related third party imports.
import { useContext, AnimationEvent } from "react";

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
      className={`
            ${styles.container}
            ${showTitleArea ? "" : styles.leave}`}
      onAnimationEnd={handleAnimation}
    >
      {title}
    </div>
  );
}
