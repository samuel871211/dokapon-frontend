/**
 * 將array of numbers 合併成 number
 * @example transferArrayToNumber([1,2,3,4,5]) => 12345
 * @example transferArrayToNumber(['0','1','2','3']) => 123
 * @param arr array of string | number
 * @returns concated number
 */
export function transferArrayToNumber (arr: Array<number | string>) {
    return parseInt(arr.join(''))
}

/**
 * @example transferNumberToArray({num: 123, len: 5, fill: 0}) => [0, 0, 1, 2, 3]
 * @example transferNumberToArray({num: 12345}) => [1, 2, 3, 4, 5]
 * @param num the number you want to transfer
 * @param len the output array length, default length of num
 * @param fill how would you like to fill the empty indexes, default empty string
 */
// eslint-disable-next-line
export function transferNumberToArray (options: {
    num: number,
    len?: number,
    fill?: any
}): string[]  {
    let { num, len, fill } = options
    const numToArray = String(num).split('')
    const initArrayLen = numToArray.length
    if (len === undefined) len = numToArray.length
    if (fill === undefined) fill = ''
    if (typeof fill === 'number') fill = String(fill)

    for (let i = 0; i < len - initArrayLen; i++) {
        numToArray.unshift(fill)
    }
    return numToArray
}