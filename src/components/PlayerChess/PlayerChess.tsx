import { PlayerInstance, Vertex } from "global";

export default PlayerChess;

function PlayerChess(props: {
  id: Vertex["id"];
  position: Vertex["position"];
  job: PlayerInstance["job"];
  gender: PlayerInstance["gender"];
  color: PlayerInstance["color"];
}) {
  const { id, position, job, gender, color } = props;
  const href = `/imgs/${job}_${gender}_${color}_front.png`;
  return (
    <g
      transform={`translate(${position.x}, ${position.y})`}
      data-type="dokapon.player"
      data-vertex-id={id}
    >
      <image href={href} width={128} height={128} x={-64} y={-64}></image>
    </g>
  );
}
