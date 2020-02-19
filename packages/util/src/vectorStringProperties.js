import { lange } from '@spare/lange'

/**
 *
 * @param {Array<?string>} arr
 * @param ansi
 */
export const maxLen = (arr, ansi = false) => ansi
  ? Math.max(...arr.map(x => x ? lange(x) : 0))
  : Math.max(...arr.map(x => x?.length ?? 0))

export const intDigits = num => (num = ~~(Math.log10(Math.abs(num))), ++num)

export const indexMaxLen = (arr, base = 0) => intDigits(arr.length + base)





