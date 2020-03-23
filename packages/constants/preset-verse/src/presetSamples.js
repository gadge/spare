import { NONE } from '@spare/enum-brackets'
import { COSP } from '@spare/enum-chars'
import { smartKeyRead } from '../utils/smartKeyRead'
import { smartValueRead } from '../utils/smartValueRead'

/**
 *
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetSamples = p => {
  p.indexed = false
  p.delim = p.delim || COSP
  p.keyRead = p.keyRead || smartKeyRead
  p.read = p.read || smartValueRead
  p.bracket = NONE
  p.discrete = true
  return p
}
