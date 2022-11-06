// Related third party imports.

// Local application/library specific imports.
import styles from "./KeyMappingDialog.module.css";
import YellowBlock from "layouts/YellowBlock";

// Stateless vars declare.

export default KeyMappingDialog;

function KeyMappingDialog() {
  return (
    <div className={styles.container}>
      <YellowBlock role="dialog" className={styles.dialog}>
        Press any key to override
      </YellowBlock>
    </div>
  );
}
