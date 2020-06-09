import { decoPale } from '@spare/deco-pale'
import { BRK }      from '@spare/enum-brackets'
import { COSP }     from '@spare/enum-chars'

/**
 *
 * @param {Object} [p]
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {*[]} [p.fields]
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.top]
 * @param {number} [p.left]
 * @param {number} [p.bottom]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=false]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */
export const presetSamples = p => {
  p.delim = p.delim ?? COSP
  p.bracket = p.bracket ?? BRK
  p.indexed = p.indexed ?? true
  p.read = p.read ?? decoPale
  p.ansi = p.ansi ?? true
  return p
}
