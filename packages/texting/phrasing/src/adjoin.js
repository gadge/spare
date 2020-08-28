import { cosmetics } from '@spare/deco-vector'
import { SP }        from '@spare/enum-chars'

const presetAdjoin = p => {
  p = p ?? {}
  p.delim = p.delim ?? SP
  return p
}

/**
 *
 * @param words
 * @return {string}
 * @deprecated use adjoin in @spare/tap
 */
export const adjoin = function (...words) {
  const ve = [], config = presetAdjoin(this)
  for (let word of words)
    if (word?.length)
      ve.push(word)
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
 * @deprecated use Adjoin in @spare/tap
 */
export const Adjoin = (p = {}) => adjoin.bind(p)
