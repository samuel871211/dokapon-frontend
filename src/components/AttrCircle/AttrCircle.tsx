// Related third party imports.

// Local application/library specific imports.
import styles from "./AttrCircle.module.css";

// Stateless vars declare.

export default AttrCircle;

function AttrCircle(props: {
  attr: string;
  value: number;
  fontSize?: string;
  /**
   * color of value text
   */
  color?: string;
  className?: string;
}) {
  const { attr, value, fontSize, color, className } = props;

  return (
    <div
      className={`${styles.attrCircleContainer} ${className}`}
      style={{ fontSize, lineHeight: fontSize }}
    >
      <div>{attr}</div>
      <div style={{ color }}>{value}</div>
    </div>
  );
}
