import styles from "./CustomBorderBottom.module.css";

export default CustomBorderBottom;

/**
 * @param props.width 預設95%，左右置中
 */
function CustomBorderBottom(props: { width?: string }): JSX.Element {
  const { width } = props;
  return (
    <div className={styles.container} style={{ width }}>
      <div className={styles.circle}></div>
      <div className={styles.line}></div>
      <div className={styles.circle}></div>
    </div>
  );
}
