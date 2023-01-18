// Related third party imports.
import { useContext } from "react";
import classNames from "classnames";

// Local application/library specific imports.
import BottomDialogConfirmCircle from "components/BottomDialogConfirmCircle";
import { BottomDialogProps } from "global";
import useTranslation from "hooks/useTranslation";
import YellowBlock from "layouts/YellowBlock";
import gameProgressCtx from "reducers/gameProgress";
import styles from "./BottomDialog.module.css";

// Stateless vars declare.

export default BottomDialog;

/**
 * Render a `width: 100%, height: 30%` container at the bottom
 *
 * It does not handle any keyboard event
 *
 * @todo 暫時沒有好的解法來處理特殊顏色字體，因為會牽扯到翻譯
 *
 * @todo `confirmDialog`也許可以拆成component
 */
function BottomDialog(props: BottomDialogProps) {
  const { show, size, name, showConfirmCircle } = props;
  const showConfirmDialog = props.showConfirmDialog && !showConfirmCircle;
  const { bottomDialogSentence, isHoverOnConfirmBtn } = useMetaData();
  const { t } = useTranslation();
  return (
    <div className={styles.bottomDialogContainer} data-show={show}>
      <YellowBlock role="title" className={styles.topLeftName}>
        {name}
      </YellowBlock>
      <div className={styles.innerContainer}>
        <YellowBlock
          role="dialog"
          borderRadius="1.5rem"
          className={classNames(styles.bottomDialog, {
            [styles.verticalSmall]: size === "small",
          })}
        >
          <div
            className={classNames(styles.dialogTextArea, {
              [styles.horizontalSmall]: showConfirmDialog,
            })}
          >
            {bottomDialogSentence.split("\n").map((line, lineIdx) => (
              <div key={lineIdx}>
                {line}
                {/* 考量到英文是以單字來切分，並不是一個一個字 */}
                {/* {line.split("").map((word, wordIdx) => (
                    <span key={wordIdx} className={styles.dialogSingleText}>
                      {word}
                    </span>
                  ))} */}
              </div>
            ))}
          </div>
          {showConfirmCircle && <BottomDialogConfirmCircle />}
        </YellowBlock>
        {showConfirmDialog && (
          <YellowBlock
            role="dialog"
            borderRadius="1.5rem"
            className={styles.confirmDialog}
          >
            <div className={styles.confirmDialogBtnContainer}>
              <div
                data-selected={isHoverOnConfirmBtn}
                className={styles.confirmDialogBtn}
              >
                {t("はい")}
              </div>
            </div>
            <div className={styles.confirmDialogBtnContainer}>
              <div
                data-selected={!isHoverOnConfirmBtn}
                className={styles.confirmDialogBtn}
              >
                {t("いいえ")}
              </div>
            </div>
          </YellowBlock>
        )}
      </div>
    </div>
  );
}

function useMetaData() {
  const { gameProgress } = useContext(gameProgressCtx);
  const { bottomDialogSentencesQueue, isHoverOnConfirmBtn } = gameProgress;
  const bottomDialogSentence = bottomDialogSentencesQueue[0] || "";
  return { bottomDialogSentence, isHoverOnConfirmBtn };
}
