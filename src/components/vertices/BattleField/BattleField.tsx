import { Vertex } from '../../../global'

export default BattleField

function BattleField (props: Vertex): JSX.Element {
    const { position, id } = props

    return (
        <g transform={`translate(${position.x}, ${position.y})`} data-type='vertex' id={id}>
            <circle
                fill='white'
                strokeWidth={3}
                stroke='black'
                r={40}
            />
        </g>
    )
}