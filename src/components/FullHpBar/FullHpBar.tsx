import styles from "./FullHpBar.module.css";

export default FullHpBar;

function FullHpBar(props: {
  hp: { current: number; total: number };
  className?: string;
}) {
  const { hp, className } = props;
  return (
    <div className={`${styles.fullHpBar} ${className}`}>
      <div className={styles.row1}>
        <div>HP</div>
        <div
          className={styles.hpBar}
          style={{ width: `${(hp.current / hp.total) * 100}%` }}
        ></div>
      </div>
      <div className={styles.row2}>
        {`${hp.current || "?"} / ${hp.total || "?"}`}
      </div>
    </div>
  );
}
