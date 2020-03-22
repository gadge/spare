import { CO, QT, SP } from '@spare/enum-chars'
import { BRACKET } from '@spare/enum-brackets'

/**
 * @param {Object} p
 * @param {Function} [p.read]
 * @param {string} [p.delim=', ']
 * @param {string} [p.quote='\'']
 * @param {number} [p.level]
 * @returns {Object}
 */
export const presetMatrix = p => {
  p.delim = p.delim || (CO + SP)
  p.quote = p.quote || QT
  p.bracket = BRACKET
  p.discrete = true
  return p
}


