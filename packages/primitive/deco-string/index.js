import { DecoConfig }             from '@spare/deco-config'
import { DA, SP }                 from '@texting/enum-chars'
import { DUAL_PRESET_COLLECTION } from '@spare/preset-deco'
import { splitCamel, splitSnake } from '@texting/splitter'
import { CONFIG }                 from './resources/config'
import { decoString }             from './src/decoString.js'

const Splitter = delim => v => String.prototype.split.call(v, delim)
export const decoCamel = (text, { delim = '', presets, effects } = {}) => {
  return decoString.call({ delim, presets, effects, vectify: splitCamel }, text)
}

export const decoSnake = (text, { delim = DA, presets, effects } = {}) => {
  return decoString.call({ delim, presets, effects, vectify: splitSnake }, text)
}

export const decoPhrase = (text, { delim = SP, presets, effects } = {}) => {
  return decoString.call({ delim, presets, effects, vectify: Splitter(delim) }, text)
}

export { decoString, decoString as _decoString }
/**
 * @param {string} text
 * @param {Object} [p]
 * @param {number} [p.width=80]
 * @param {number} [p.indent]
 * @param {number} [p.firstLineIndent]
 * @param {Object[]} [p.presets]
 * @param {string[]} [p.effects]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */
export const deco = (text, p = {}) => decoString
  .call(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION), text)

/**
 *
 * @param {Object} p
 * @param {string} [p.delim]
 * @param {number} [p.width=80]
 * @param {number} [p.indent]
 * @param {number} [p.firstLineIndent]
 * @param {Object[]} [p.presets]
 * @param {string[]} [p.effects]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {Function}
 */
export const Deco = (p = {}) => decoString
  .bind(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION))

