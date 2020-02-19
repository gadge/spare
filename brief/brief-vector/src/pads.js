import { lpad, maxLen, rpad } from '@spare/util'

/**
 *
 * @param {string[]} arr
 * @param {?number[]|?number} [pad]
 * @param {?string} [fill]
 * @param {boolean=false} [ansi]
 * @return {string[]}
 */
export const padEnds = (arr, { pad, fill, ansi = false } = {}) =>
  Array.isArray(pad = pad ?? maxLen(arr, ansi))
    ? arr.map((x, i) => rpad(x, pad[i], ansi, fill))
    : arr.map(x => rpad(x, pad, ansi, fill))

/**
 *
 * @param {string[]} arr
 * @param {?number[]|?number} [pad]
 * @param {?string} [fill]
 * @param {boolean=false} [ansi]
 * @return {string[]}
 */
export const padStarts = (arr, { pad, fill, ansi = false } = {}) =>
  Array.isArray(pad = pad ?? maxLen(arr, ansi))
    ? arr.map((x, i) => lpad(x, pad[i], ansi, fill))
    : arr.map(x => lpad(x, pad, ansi, fill))
