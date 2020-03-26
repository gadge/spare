import { NONE } from '@spare/enum-brackets'
import { COSP } from '@spare/enum-chars'
import { decoKey, decoPale } from '@spare/deco-pale'

/**
 *
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=decoKey]
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetSamples = p => {
  p.indexed = false
  p.delim = p.delim || COSP
  p.keyRead = p.keyRead || decoKey
  p.read = p.read || decoPale
  p.bracket = NONE
  p.discrete = true
  return p
}
