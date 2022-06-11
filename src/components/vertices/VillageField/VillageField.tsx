// Standard library imports.

// Related third party imports.

// Local application/library specific imports.
import { Vertex } from 'global'

// Stateless vars declare.

export default VillageField

function VillageField (props: Vertex): JSX.Element {
    const { position, id } = props

    return (
        <g transform={`translate(${position.x}, ${position.y})`} data-type='vertex' id={id}>
            <circle
                fill='#4089d8'
                strokeWidth={3}
                stroke='black'
                r={40}
            />
        </g>
    )
}