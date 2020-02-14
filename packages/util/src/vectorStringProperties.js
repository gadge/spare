import { lange } from '@spare/lange'

/**
 *
 * @param {Array<?string>} arr
 * @param ansi
 */
export const maxLen = (arr, ansi = false) => ansi
  ? Math.max(...arr.map(x => x ? lange(x) : 0))
  : Math.max(...arr.map(x => x?.length ?? 0))

export const indexMaxLen = (arr, base = 0) => ~~(Math.log10(arr.length + base)) + 1





