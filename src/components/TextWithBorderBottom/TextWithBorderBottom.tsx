import classNames from "classnames";
import { HTMLAttributes, ReactNode } from "react";
import styles from "./TextWithBorderBottom.module.css";

export default TextWithBorderBottom;

function TextWithBorderBottom(
  props: {
    /**
     * @description `BorderBottom`的寬度
     *
     * @default `95%`
     */
    width?: string;
    /**
     * @description 圈圈的直徑(文字內容的寬度也會隨著調整)
     *
     * @default `var(--vh)`
     */
    diameter?: string;
    /**
     * classNames applied to component root
     */
    className?: string;
    children?: ReactNode;
  } & HTMLAttributes<HTMLDivElement>
) {
  const { width, children, className, diameter, ...divProps } = props;
  return (
    <div
      {...divProps}
      className={classNames(styles.textWithBorderBottomContainer, className)}
    >
      <div
        className={styles.textContainer}
        style={{ width, padding: `0 ${diameter}` }}
      >
        {children}
      </div>
      <div className={styles.borderBottomContainer} style={{ width }}>
        <div className={styles.circle} style={{ width: diameter }}></div>
        <div className={styles.line}></div>
        <div className={styles.circle} style={{ width: diameter }}></div>
      </div>
    </div>
  );
}
