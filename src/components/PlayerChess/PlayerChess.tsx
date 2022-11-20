import { PlayerAttrs, Vertex } from "global";

const backendBaseUrl = import.meta.env.VITE_BACKEND_BASEURL;

export default PlayerChess;

function PlayerChess(props: {
  id: Vertex["id"];
  position: Vertex["position"];
  job: PlayerAttrs["job"];
  gender: PlayerAttrs["gender"];
  color: PlayerAttrs["color"];
  // vertex: Vertex;
  // playerAttrs: PlayerAttrs;
}) {
  const { id, position, job, gender, color } = props;
  // const { id, position } = vertex;
  // const { job, gender, color } = playerAttrs;
  const href = `${backendBaseUrl}/imgs/${job}_${gender}_${color}_front.png`;
  return (
    <g
      transform={`translate(${position.x}, ${position.y})`}
      data-type="playerChess"
      id={id}
    >
      <image href={href} width={128} height={128} x={-64} y={-64}></image>
    </g>
  );
}
