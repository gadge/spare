import { decoKey, decoPale } from '@spare/deco-pale'
import { COSP }              from '@spare/enum-chars'

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 *
 * @param {Function} [p.read=decoPale]
 * @param {Function} [p.keyRead=decoKey]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetTable = p => {
  p.delim = p.delim ?? COSP
  p.keyRead = p.keyRead || decoKey
  p.read = p.read ?? decoPale
  p.level = (p.level ?? 0) + 1
  return p
}
