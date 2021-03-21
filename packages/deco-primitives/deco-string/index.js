import { DA, SP }                 from '@spare/enum-chars'
import { presetString }           from '@spare/preset-deco'
import { splitCamel, splitSnake } from '@spare/splitter'
import { _decoString }            from './src/_decoString'


const Splitter = delim => v => String.prototype.split.call(v, delim)
export const decoCamel = (text, { delim = '', presets, effects } = {}) => {
  return _decoString.call({ delim, presets, effects, vectify: splitCamel }, text)
}

export const decoSnake = (text, { delim = DA, presets, effects } = {}) => {
  return _decoString.call({ delim, presets, effects, vectify: splitSnake }, text)
}

export const decoPhrase = (text, { delim = SP, presets, effects } = {}) => {
  return _decoString.call({ delim, presets, effects, vectify: Splitter(delim) }, text)
}

export { _decoString }
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
export const deco = (text, p = {}) => _decoString.call(presetString(p), text)

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
export const Deco = (p = {}) => _decoString.bind(presetString(p))

