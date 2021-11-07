export default function StoryMode (): JSX.Element {
    const css = {
        container: {
            display: 'grid',
            width: '100%',
            height: '100%'
        },
        grid1: {
            gridColumn: 'span 5'
        },
        grid2: {
            gridColumn: 'span 8'
        },
        grid3: {
            gridColumn: 'span 12'
        }
    }
    return (
        <div style={css.container}>
            <div style={css.grid1}></div>
            <div style={css.grid2}></div>
            <div style={css.grid3}></div>
        </div>
    )
}