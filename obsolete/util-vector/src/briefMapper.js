import { npad } from '@spare/util'

/**
 *
 * @param {string[]} text
 * @param {*[]} [raw]
 * @param {function[]} [dye]
 * @param {number[]|number} [pad]
 * @param {boolean=false} [ansi]
 * @return {string[]}
 */
export const DecoZipper = function ({
} = {}) {
  const { serialZipper } = this

  return serialZipper((t, r, d, p) => npad(t, r, p, ansi) |> d)
  return
}

/**
 *
 * @param {string[]} text
 * @param {*[]} raw
 * @param {number[]} [pad]
 * @param {boolean=false} [ansi]
 * @return {string[]}
 */
export const padVector = ({ text, raw, pad, ansi }) =>
  text.map((tx, i) => npad(tx, raw[i], pad[i], ansi))
