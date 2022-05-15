import { Edge } from '../../../global'

export default TwoWayVEdge

function TwoWayVEdge (props: Edge): JSX.Element {
    const { start, end, id } = props

    return (
        <g id={id} data-type='edge'>
            <path
                stroke='white'
                strokeWidth={20}
                d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
            />
        </g>
    )
}
