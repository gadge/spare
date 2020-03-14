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
 * @param {?string} [quote]
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
  dash: da = ') ',
  delimiter: de = ',\n',
  quote: qt = null,
  bracket: br = false
} = {}) => indexed
  ? DecoEntries({
    indexed, abstract, preset, stringPreset,
    head, tail, da, de, qt, br
  })
  : cosmetics.bind({
    abstract, preset, stringPreset,
    head, tail, da, de, qt, br
  })
