import { NONE } from '@spare/enum-brackets'
import { CO, QT, SP } from '@spare/enum-chars'

/**
 *
 * @param {Object} p
 * @param {Function} [p.read]
 * @param {string} [p.delim=', ']
 * @param {string} [p.quote='\'']
 * @param {number} [p.level]
 * @returns {Object}
 */
export const presetSamples = p => {
  p.indexed = false
  p.delim = p.delim || (CO + SP)
  p.quote = p.quote || QT
  p.bracket = NONE
  p.discrete = true
  return p
}
