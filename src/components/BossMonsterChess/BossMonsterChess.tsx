import { Position } from "global";
import bossMonsterImage from "assets/images/bossMonster.png";

export default BossMonsterChess;

function BossMonsterChess(props: { position: Position; id: string }) {
  const { position, id } = props;
  return (
    <g
      transform={`translate(${position.x}, ${position.y})`}
      data-type="bossMonsterChess"
      data-vertex-id={id}
    >
      <image
        href={bossMonsterImage}
        width={128}
        height={128}
        x={-64}
        y={-64}
      ></image>
    </g>
  );
}
