import { Vertex } from '../../../global'

export default CastleField

function CastleField (props: Vertex): JSX.Element {
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