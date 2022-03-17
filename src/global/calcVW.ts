import { debounce } from 'lodash'
/**
 * 為了不讓遊戲畫面被無限制拉伸
 * 
 * 在最外層設定aspect ratio為16:9(或4:3)
 * 
 * 文字大小使用相對大小(vw)，才不會因為放大縮小而跑版
 * 
 * 但在寬螢幕時，vw會大於遊戲視窗寬度
 * 
 * 所以必須綁定resize event計算遊戲視窗寬度
 */


 export default function calcVW (): void {
    const HTMLEl = document.documentElement
    const rootEl = document.getElementById('root')
    if (!rootEl) return console.error('#root not found')

    HTMLEl.style.setProperty('--vw', `${rootEl.clientWidth / 100}px`)
    window.onresize = debounce(() => {
        HTMLEl.style.setProperty('--vw', `${rootEl.clientWidth / 100}px`)
    }, 100)
}