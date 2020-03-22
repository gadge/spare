import { CO, QT, SP } from '@spare/enum-chars'

/**
 * @param {Object} p
 * @param {Function} [p.read]
 * @param {string} [p.delim=', ']
 * @param {string} [p.quote='\'']
 * @param {number} [p.level]
 * @returns {Object}
 */
export const presetTable = p => {
  p.delim = p.delim || (CO + SP)
  p.quote = p.quote || QT
  p.level = (p.level ?? 0) + 1
  return p
}
