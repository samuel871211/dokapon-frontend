import { Vertex } from '../../../global'

export default GoldTreasureField

function GoldTreasureField (props: Vertex): JSX.Element {
    const { position, name, id } = props

    return (
        <g transform={`translate(${position.x}, ${position.y})`} data-type='vertex' id={id}>
            <circle
                fill='#fbfe40'
                strokeWidth={3}
                stroke='black'
                r={40}
            />
        </g>
    )
}