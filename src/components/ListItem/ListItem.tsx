// Related third party imports.
import { ReactNode } from "react";
import classNames from "classnames";

// Local application/library specific imports.
import styles from "./ListItem.module.css";
import globalStyles from "assets/styles/globalStyles.module.css";

// Stateless vars declare.

export default ListItem;

function ListItem(props: {
  children?: ReactNode;
  className?: string;
  selected: boolean;
}) {
  const { children, className, selected } = props;
  return (
    <div className={classNames(styles.listItem, className)}>
      <div
        className={classNames({
          [styles.listItemContent]: true,
          [globalStyles.hoverEffectGreenTransparent]: selected,
        })}
      >
        {children}
      </div>
    </div>
  );
}
