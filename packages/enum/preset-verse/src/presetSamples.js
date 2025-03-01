import { decoKey, decoPale } from '@spare/deco-pale'
import { NONE }              from '@spare/enum-brackets'
import { COSP }              from '@texting/enum-chars'

/**
 *
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
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
  p.delim = p.delim ?? COSP
  p.keyRead = p.keyRead || decoKey
  p.read = p.read ?? decoPale
  p.bracket = NONE
  p.discrete = true
  return p
}
