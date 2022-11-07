// Related third party imports.

// Local application/library specific imports.
import styles from "./KeyMappingDialog.module.css";
import YellowBlock from "layouts/YellowBlock";
import useTranslation from "hooks/useTranslation";

// Stateless vars declare.

export default KeyMappingDialog;

function KeyMappingDialog() {
  const { t } = useTranslation();
  return (
    <div className={styles.keyMappingDialogContainer}>
      <YellowBlock
        role="dialog"
        borderRadius="1.5rem"
        className={styles.keyMappingDialog}
      >
        {t("任意のキーボードボタンをクリックします")}
      </YellowBlock>
    </div>
  );
}
