// Standard library imports.

// Related third party imports.
import { useContext } from "react";

// Local application/library specific imports.
import styles from "./NPCTopLeftImgArea.module.css";
import { UIStateContext } from "reducers/SelectCharacter/UIState";

// Stateless vars declare.

export default NPCTopLeftImgArea;

function NPCTopLeftImgArea(props: { src: string; alt: string }): JSX.Element {
  const {
    UIState: { showNPCTopLeftImgArea },
  } = useContext(UIStateContext);
  const { src, alt } = props;

  return (
    <div
      className={`${styles.container} ${
        showNPCTopLeftImgArea ? "" : styles.leave
      }`}
    >
      <img src={src} alt={alt} className={styles.guideImg} />
    </div>
  );
}
