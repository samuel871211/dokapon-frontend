// Related third party imports.
import { ReactNode } from "react";

// Local application/library specific imports.
import YellowBlock from "layouts/YellowBlock";
import styles from "./ListDialog.module.css";
import classNames from "classnames";
import { ListTopics } from "global";
import useTranslation from "hooks/useTranslation";
import { TextsKeys } from "data/texts";

// Stateless vars declare.
const listTopicsInfo: {
  [key in ListTopics]: {
    globalTitle: TextsKeys;
    maxCount: number;
  };
} = {
  job: {
    globalTitle: "職業リスト",
    maxCount: 45,
  },
  monster: {
    globalTitle: "魔物リスト",
    maxCount: 171,
  },
  weapon: {
    globalTitle: "武器リスト",
    maxCount: 92,
  },
  shield: {
    globalTitle: "盾リスト",
    maxCount: 52,
  },
  accessory: {
    globalTitle: "装飾品リスト",
    maxCount: 41,
  },
  specialty: {
    globalTitle: "特産品リスト",
    maxCount: 41,
  },
};

export default ListDialog;

function ListDialog(props: {
  children?: ReactNode;
  className?: string;
  showArrowUp: boolean;
  showArrowDown: boolean;
  listTopic: ListTopics;
  availableCounts: number;
}) {
  const {
    children,
    className,
    showArrowUp,
    showArrowDown,
    listTopic,
    availableCounts,
  } = props;
  const { t } = useTranslation();
  return (
    <YellowBlock
      role="dialog"
      className={classNames(styles.listDialog, className)}
    >
      <div className={styles.dialogTitleArea}>
        <div className={styles.engTitle}>{listTopic.toUpperCase()}</div>
        <div className={styles.globalTitle}>
          {t(listTopicsInfo[listTopic].globalTitle)}
        </div>
        <div className={styles.counts}>
          {`${availableCounts}／${listTopicsInfo[listTopic].maxCount}`}
        </div>
      </div>
      <div className={styles.listArea}>
        <div className={styles.arrowUp} data-show={showArrowUp}>
          ▲
        </div>
        {children}
        <div className={styles.arrowDown} data-show={showArrowDown}>
          ▼
        </div>
      </div>
    </YellowBlock>
  );
}
