import { Position } from "global";
import styles from "./HighLightVertex.module.css";

export default HighLightVertex;

function HighLightVertex(props: { position: Position; show: boolean }) {
  const { position, show } = props;
  return (
    <rect
      width="100"
      height="100"
      x={position.x - 50}
      y={position.y - 50}
      fill="none"
      strokeWidth="5"
      data-show={show}
      className={styles.highLightVertex}
    />
  );
}
