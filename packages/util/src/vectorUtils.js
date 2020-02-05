import { numPad } from './stringUtils'
import { lange } from '@spare/lange'

/**
 *
 * @param {Array<?string>} arr
 * @param ansi
 */
export function maxLen (arr, ansi = false) {
  return ansi
    ? Math.max(...arr.map(x => x ? lange(x) : 0))
    : Math.max(...arr.map(x => x?.length ?? 0))
}

/**
 *
 * @param {string[]} words
 * @param {*[]} raws
 * @param {function[]} pals
 * @param {number[]|number} pads
 * @param {boolean=false} [ansi]
 * @param {number} len
 * @return {string[]}
 */
export function vecPalPad (words, raws, pals, pads, ansi, len) {
  return words.map((tx, i) => numPad(tx, raws[i], pads[i], ansi) |> pals[i], len)
}



/**
 *
 * @param {string[]} words
 * @param {*[]} raws
 * @param {number[]} [pads]
 * @param {boolean=false} [ansi]
 * @param {number} len
 * @return {string[]}
 */
export function vecPad (words, raws, pads, ansi, len) {
  return words.map((tx, i) => numPad(tx, raws[i], pads[i], ansi), len)
}


