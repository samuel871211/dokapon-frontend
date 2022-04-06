export function shuffle(array: Array<any>): void {
    for (let i = array.length - 1; i > 0; i--) {
        const idx: number = Math.floor(Math.random() * (i + 1))
        const temp: any = array[i]
        array[i] = array[idx]
        array[idx] = temp
    }
}

/**
 * inclusive
 */
export function getRandomInt (min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}