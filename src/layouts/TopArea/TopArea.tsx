// Related third party imports.
import { ReactNode } from "react";
import classNames from "classnames";

// Local application/library specific imports.
import styles from "./TopArea.module.css";

// Stateless vars declare.

export default TopArea;

/**
 * default height = 70%, width = 100%
 */
function TopArea(props: {
  className?: string;
  children?: ReactNode;
  height?: string;
  flex?: true;
}): JSX.Element {
  const { className, children, height, flex } = props;
  return (
    <div
      className={classNames(styles.topArea, className, { [styles.flex]: flex })}
      style={{ height }}
    >
      {children}
    </div>
  );
}
