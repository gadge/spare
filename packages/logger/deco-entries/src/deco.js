import { FRESH, OCEAN } from '@palett/presets'
import { cosmetics } from './cosmetics'

/***
 *
 * @param {[*,*][]} entries
 * @param {function(*):string} [keyAbstract]
 * @param {function(*):string} [abstract]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [preset]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [stringPreset]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {string} [da=' => ']
 * @param {string} [de='\n']
 * @param {?string} [qt=null]
 * @param {boolean} [br=false]
 * @param {boolean} [ansi=false]
 * @returns {string}
 */
export const deco = (entries, {
  keyAbstract,
  abstract,
  preset = FRESH,
  stringPreset = OCEAN,
  head,
  tail,
  ansi = false,
  dash: da = ' > ',
  delimiter: de = ',\n',
  quote: qt = null,
  bracket: br = false
} = {}) => cosmetics.call(
  {
    keyAbstract, abstract, preset, stringPreset,
    head, tail, ansi, da, de, qt, br
  },
  entries
)
