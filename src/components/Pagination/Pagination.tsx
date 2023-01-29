// Related third party imports.
import classNames from "classnames";

// Local application/library specific imports.
import styles from "./Pagination.module.css";
import globalStyles from "assets/styles/globalStyles.module.css";

// Stateless vars declare.

export default Pagination;

function Pagination(props: {
  maxCount: number;
  curPage: number;
  className?: string;
}) {
  const { maxCount, curPage, className } = props;
  const arrayOfMaxCount = Array(maxCount).fill(0);
  return (
    <div className={classNames(styles.paginationContainer, className)}>
      <div className={styles.topFloatingLeft}>
        <div className={styles.leftTriangle}></div>
        <div className={styles.leftText}>L</div>
      </div>
      <div
        className={classNames(
          styles.topFloatingCenter,
          globalStyles.hoverEffectGreenTransparent
        )}
      >
        {arrayOfMaxCount.map((item, idx) => (
          <div
            key={idx}
            style={{ width: `${100 / maxCount}%`}}
            className={styles.circle}
            data-selected={curPage === idx}
          />
        ))}
      </div>
      <div className={styles.topFloatingRight}>
        <div className={styles.rightText}>R</div>
        <div className={styles.rightTriangle}></div>
      </div>
    </div>
  );
}
