import { BRACKET} from '@spare/enum-brackets'
import { CO, QT, SP } from '@spare/enum-chars'

/**
 * @param {Object} p
 * @param {Function} [p.read]
 * @param {string} [p.delim=', ']
 * @param {string} [p.quote='\'']
 * @param {number} [p.level]
 * @param {number} [p.bracket=BRACKET]
 * @returns {Object}
 */
export const presetVector = p => {
  p.delim = p.delim || (CO + SP)
  p.quote = p.quote || QT
  p.bracket = BRACKET
  return p
}
