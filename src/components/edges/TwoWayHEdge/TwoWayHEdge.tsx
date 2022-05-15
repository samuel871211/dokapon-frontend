import { Edge } from '../../../global'

export default TwoWayHEdge

function TwoWayHEdge (props: Edge): JSX.Element {
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