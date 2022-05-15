import { Vertex } from '../../../global'

export default MagicField

function MagicField (props: Vertex): JSX.Element {
    const { position, id } = props

    return (
        <g transform={`translate(${position.x}, ${position.y})`} data-type='vertex' id={id}>
            <circle
                fill='#7466d1'
                strokeWidth={3}
                stroke='black'
                r={40}
            />
        </g>
    )
}