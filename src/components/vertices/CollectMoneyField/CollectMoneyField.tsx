import { Vertex } from '../../../global'

export default CollectMoneyField

function CollectMoneyField (props: Vertex): JSX.Element {
    const { position, id } = props

    return (
        <g transform={`translate(${position.x}, ${position.y})`} data-type='vertex' id={id}>
            <circle
                fill='#4a91dc'
                strokeWidth={3}
                stroke='black'
                r={40}
            />
        </g>
    )
}