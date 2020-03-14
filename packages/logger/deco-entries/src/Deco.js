import { FRESH, OCEAN } from '@palett/presets'
import { cosmetics } from './cosmetics'

/***
 *
 * @param {function(*):string} [keyAbstract]
 * @param {function(*):string} [abstract]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [preset]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [stringPreset]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {string} [dash=' => ']
 * @param {string} [de='\n']
 * @param qt
 * @param {boolean} [br=false]
 * @param {boolean} [ansi=false]
 * @returns {string}
 */
export const Deco = ({
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
} = {}) => cosmetics.bind({
  keyAbstract, abstract, preset, stringPreset,
  head, tail, ansi, da, de, qt, br
})
