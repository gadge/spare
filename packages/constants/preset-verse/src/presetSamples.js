import { NONE } from '@spare/enum-brackets'
import { COSP } from '@spare/enum-chars'
import { decoKey, decoValue } from '@spare/deco-util'

/**
 *
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=decoKey]
 * @param {Function} [p.read=decoValue]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetSamples = p => {
  p.indexed = false
  p.delim = p.delim || COSP
  p.keyRead = p.keyRead || decoKey
  p.read = p.read || decoValue
  p.bracket = NONE
  p.discrete = true
  return p
}
