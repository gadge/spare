import { COSP } from '@spare/enum-chars'
import { smartValueRead } from '../utils/smartValueRead'

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.read=smartKeyRead]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetCrostab = p => {
  p.delim = p.delim || COSP
  p.read = p.read || smartValueRead
  p.level = (p.level ?? 0) + 1
  return p
}


