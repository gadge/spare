import { COSP } from '@spare/enum-chars'
import { decoKey, decoPale } from '@spare/deco-pale'

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.read=decoPale]
 * @param {Function} [p.keyRead=decoKey]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetCrostab = p => {
  p.delim = p.delim || COSP
  p.keyRead = p.keyRead || decoKey
  p.read = p.read || decoPale
  p.level = (p.level ?? 0) + 1
  return p
}


