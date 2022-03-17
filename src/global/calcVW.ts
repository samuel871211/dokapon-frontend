import { debounce } from 'lodash'

export default function calcVW (): void {
    const HTMLEl = document.documentElement
    const rootEl = document.getElementById('root')
    if (!rootEl) return console.error('#root not found')

    HTMLEl.style.setProperty('--vw', `${rootEl.clientWidth / 100}px`)
    window.onresize = debounce(() => {
        HTMLEl.style.setProperty('--vw', `${rootEl.clientWidth / 100}px`)
    }, 100)
}