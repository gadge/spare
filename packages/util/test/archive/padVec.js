import { npad } from '../../src/stringPads'

/**
 *
 * @param {string[]} text
 * @param {*[]} [raw]
 * @param {function[]} [dye]
 * @param {number[]|number} [pad]
 * @param {boolean=false} [ansi]
 * @return {string[]}
 */
export const vecPalPad = (text, raw, dye, pad, ansi) =>
  text.map((tx, i) => npad(tx, raw[i], pad[i], ansi) |> dye[i])

/**
 *
 * @param {string[]} text
 * @param {*[]} raw
 * @param {number[]} [pad]
 * @param {boolean=false} [ansi]
 * @return {string[]}
 */
export const vecPad = (text, raw, pad, ansi) =>
  text.map((tx, i) => npad(tx, raw[i], pad[i], ansi))
