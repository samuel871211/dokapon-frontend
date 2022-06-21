// Standard library imports.

// Related third party imports.
import { ReactNode } from "react";
import classNames from "classnames";

// Local application/library specific imports.
import styles from "./BottomArea.module.css";

// Stateless vars declare.

export default BottomArea;

/**
 * default height = 30%, width = 100%
 */
function BottomArea(props: {
  className?: string;
  children?: ReactNode | ReactNode[];
  height?: string;
}): JSX.Element {
  const { className, children, height } = props;
  return (
    <div
      className={classNames(styles.bottomArea, className)}
      style={{ height }}
    >
      <>{children}</>
    </div>
  );
}
