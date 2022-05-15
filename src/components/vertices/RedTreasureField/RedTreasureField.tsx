import { Vertex } from '../../../global'

export default RedTreasureField

function RedTreasureField (props: Vertex): JSX.Element {
    const { position, name, id } = props

    return (
        <g transform={`translate(${position.x}, ${position.y})`} data-type='vertex' id={id}>
            <circle
                fill='#f8312e'
                strokeWidth={3}
                stroke='black'
                r={40}
            />
        </g>
    )
}