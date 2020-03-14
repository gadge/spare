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
 * @param {string} da
 * @param {string} de
 * @param {?string} qt
 * @param {boolean} br
 * @return {*}
 */
export const deco = (vec, {
  indexed = true,
  abstract,
  preset = FRESH,
  stringPreset = JUNGLE,
  head,
  tail,
  dash: da = ') ',
  delimiter: de = ',\n',
  quote: qt = null,
  bracket: br = false,
} = {}) =>
  indexed
    ? decoEntries
      .call({
        indexed, abstract, preset, stringPreset,
        head, tail, da, de, qt, br
      }, vec)
    : cosmetics
      .call({
        abstract, preset, stringPreset,
        head, tail, da, de, qt, br
      }, vec)
