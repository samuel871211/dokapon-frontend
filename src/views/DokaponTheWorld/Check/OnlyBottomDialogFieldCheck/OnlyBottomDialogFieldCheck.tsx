// Related third party imports.

// Local application/library specific imports.
import styles from "./OnlyBottomDialogFieldCheck.module.css";
import BottomDialog from "components/BottomDialog";

// Stateless vars declare.

export default OnlyBottomDialogFieldCheck;

function OnlyBottomDialogFieldCheck() {
  return (
    <div className={styles.onlyBottomDialogFieldCheckContainer}>
      <div className={styles.topArea}></div>
      <BottomDialog show showConfirmCircle></BottomDialog>
    </div>
  );
}
