// Related third party imports.

// Local application/library specific imports.
import { Edge } from "global";

// Stateless vars declare.

export default OneWayHEdge;

function OneWayHEdge(props: Edge): JSX.Element {
  const { start, end, id } = props;
  return (
    <g id={id} data-type="edge">
      <path
        stroke="white"
        strokeWidth={40}
        d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
        markerEnd="url(#arrow)"
      />
    </g>
  );
}
