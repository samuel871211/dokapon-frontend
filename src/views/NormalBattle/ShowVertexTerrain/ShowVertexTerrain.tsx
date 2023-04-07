import YellowBlock from "layouts/YellowBlock";
import styles from "./ShowVertexTerrain.module.css";

export default ShowVertexTerrain;

/**
 * @todo 讀取`vertex.terrain`
 * @todo 背景圖片
 */
function ShowVertexTerrain() {
  return (
    <div className={styles.showVertexTerrainContainer}>
      <YellowBlock
        role="dialog"
        borderRadius="1.5rem"
        className={styles.topLeftDialog}
      >
        森
      </YellowBlock>
    </div>
  );
}
