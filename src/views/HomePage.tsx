export default function HomePage () {
    return (
        <div>
            <button onClick={() => { window.location.assign('/BattleMode') }}>對戰模式</button>
            <button onClick={() => { window.location.assign('/StoryMode') }}>故事模式</button>
            <button onClick={() => { window.location.assign('/GraphEditor') }}>畫圖</button> 
        </div>
    )
}