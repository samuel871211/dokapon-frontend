// Related third party imports.

// Local application/library specific imports.
import styles from "./AttrCircle.module.css";

// Stateless vars declare.

export default AttrCircle;

function AttrCircle(props: {
  attr: string;
  value: number | string;
  fontSize?: string;
  /**
   * color of value text
   */
  color?: string;
  className?: string;
  /**
   * @default `90%`
   */
  width?: string;
  /**
   * @default `90%`
   */
  height?: string;
}) {
  const { attr, value, fontSize, color, className, width, height } = props;

  return (
    <div
      className={`${styles.attrCircleContainer} ${className}`}
      style={{ fontSize, lineHeight: fontSize, width, height }}
    >
      <div>{attr}</div>
      <div style={{ color }}>{value}</div>
    </div>
  );
}
