import { Vertex } from '../../../global'

export default WhiteTreasureField

function WhiteTreasureField (props: Vertex): JSX.Element {
    const { position, id } = props

    return (
        <g transform={`translate(${position.x}, ${position.y})`} data-type='vertex' id={id}>
            <circle
                fill='#f4e7fd'
                strokeWidth={3}
                stroke='black'
                r={40}
            />
        </g>
    )
}