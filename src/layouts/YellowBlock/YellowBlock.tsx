// Related third party imports.
import { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

// Local application/library specific imports.
import styles from "./YellowBlock.module.css";

// Stateless vars declare.

export default YellowBlock;

function YellowBlock(
  props: {
    children?: ReactNode;
    role: "dialog" | "button" | "title";
    /**
     * If true, it will have `selectedEffectGreenYellow` hover effect
     */
    selected?: boolean;
    className?: string;
    /**
     * `1.5rem`, usually for multi-line block
     *
     * `9999px`, which means half of container height, usually for 1-line block
     */
    borderRadius?: "1.5rem" | "9999px";
  } & HTMLAttributes<HTMLDivElement>
) {
  // eslint-disable-next-line
  const { selected, className, children, role, borderRadius, ...divProps } =
    props;
  return (
    <div
      data-role={role}
      style={{ borderRadius }}
      {...divProps}
      className={classNames(styles.yellowBlock, className, {
        selectedEffectGreenYellow: selected,
      })}
    >
      {children}
    </div>
  );
}
