import { cosmetics } from '@spare/deco-vector'
import { SP }  from '@spare/enum-chars'
import { tap } from './tap'

const presetAdjoin = p => {
  p = p ?? {}
  p.delim = p.delim ?? SP
  return p
}

export const adjoin = function (...words) {
  const
    ve = tap.apply(null, words),
    config = presetAdjoin(this)
  return cosmetics.call(config, ve)
}

/**
 *
 * @param {Object} p
 *
 * @param {string} [p.delim=',\n']
 * @param {boolean|number} [p.bracket=true] - BRK = 1
 * @param {Function} [p.read]
* @param {Object|Object[]} [p.presets=[FRESH, JUNGLE]]
 *
 * @returns {Function}
 */
export const Adjoin = (p = {}) => adjoin.bind(p)
