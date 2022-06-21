// Standard library imports.

// Related third party imports.

// Local application/library specific imports.
import { Vertex } from "global";

// Stateless vars declare.

export default WhiteTreasureField;

function WhiteTreasureField(props: Vertex): JSX.Element {
  const { position, id } = props;

  return (
    <g
      transform={`translate(${position.x}, ${position.y})`}
      data-type="vertex"
      id={id}
    >
      <circle fill="#f4e7fd" strokeWidth={3} stroke="black" r={40} />
    </g>
  );
}
