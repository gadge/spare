import { COSP } from '@spare/enum-chars'
import { decoKey, decoValue } from '@spare/deco-util'

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.read=decoValue]
 * @param {Function} [p.keyRead=decoKey]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetTable = p => {
  p.delim = p.delim || COSP
  p.read = p.read || decoValue
  p.keyRead = p.keyRead || decoKey
  p.level = (p.level ?? 0) + 1
  return p
}
