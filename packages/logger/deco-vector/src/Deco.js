import { FRESH, JUNGLE } from '@palett/presets'
import { cosmati } from './cosmati'

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
 * @return {*}
 */
export const Deco = ({
  indexed = true,
  abstract,
  preset = FRESH,
  stringPreset = JUNGLE,
  head,
  tail,
  delimiter = ',\n',
  dash = ') '
} = {}) => cosmati.bind({
  indexed, abstract, preset, stringPreset,
  head, tail, delimiter, dash,
})
