// Standard library imports.

// Related third party imports.
import { TransitionStatus } from "react-transition-group";

// Local application/library specific imports.
import styles from "./KeyMappingDialog.module.css";
import YellowBlock from "layouts/YellowBlock";

// Stateless vars declare.
const transitionStyles = {
  exiting: styles.slideOut,
  exited: styles.slideOut,
  unmounted: styles.slideOut,
  entering: styles.slideIn,
  entered: styles.slideIn,
};

export default KeyMappingDialog;

function KeyMappingDialog(props: { state: TransitionStatus }): JSX.Element {
  const { state } = props;
  return (
    <div className={`${styles.container} ${transitionStyles[state]}`}>
      <YellowBlock role="dialog" className={styles.dialog}>
        Press any key to override
      </YellowBlock>
    </div>
  );
}
