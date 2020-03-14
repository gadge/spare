import { FRESH, JUNGLE } from '@palett/presets'
import { cosmetics } from './cosmetics'
import { deco as decoEntries } from '@spare/deco-entries'

/**
 *
 * @param {*[]} vec
 * @param {boolean} [indexed]
 * @param {function(*):string} [abstract]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [preset]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [stringPreset]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {string} dash
 * @param {string} delimiter
 * @param {?string} quote
 * @param {boolean} bracket
 * @return {*}
 */
export const deco = (vec, {
  indexed = true,
  abstract,
  preset = FRESH,
  stringPreset = JUNGLE,
  head,
  tail,
  dash = ') ',
  delimiter = ',\n',
  quote,
  bracket,
} = {}) =>
  indexed
    ? decoEntries
      .call({
        indexed, abstract, preset, stringPreset,
        head, tail, dash, delimiter, quote, bracket
      }, vec)
    : cosmetics
      .call({
        abstract, preset, stringPreset,
        head, tail, dash, delimiter, quote, bracket
      }, vec)
