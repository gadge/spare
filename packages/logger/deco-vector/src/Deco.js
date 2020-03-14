import { FRESH, JUNGLE } from '@palett/presets'
import { cosmetics } from './cosmetics'
import { Deco as DecoEntries } from '@spare/deco-entries'

/**
 *
 * @param {boolean} [indexed]
 * @param {function(*):string} [abstract]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [preset]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [stringPreset]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {string} [delimiter]
 * @param {string} [dash]
 * @param {?string} [delimiter]
 * @param quote
 * @param bracket
 * @return {*}
 */
export const Deco = ({
  indexed = true,
  abstract,
  preset = FRESH,
  stringPreset = JUNGLE,
  head,
  tail,
  dash: dash = ') ',
  delimiter: delimiter = ',\n',
  quote: quote = null,
  bracket: bracket = false
} = {}) => indexed
  ? DecoEntries({
    indexed, abstract, preset, stringPreset,
    head, tail, dash, delimiter, quote, bracket
  })
  : cosmetics.bind({
    abstract, preset, stringPreset,
    head, tail, dash, delimiter, quote, bracket
  })
