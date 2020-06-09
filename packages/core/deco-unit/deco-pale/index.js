export { decoKey } from './src/unit/decoKey'
import { quote }   from '@spare/quote'
import { deco }    from './src/unit/deco'

export { deco as decoval }

/**
 *
 * @param x
 * @param {boolean} loose
 * @param {Function} quote
 * @return {string|*}
 */
export const decoPale = (x, { loose = true, quote = quote } = {}) => deco.call({ loose, quote }, x)

/**
 *
 * @param {boolean} loose
 * @param {Function} quote
 */
export const DecoPale = ({ loose = true, quote = quote } = {}) => deco.bind({ loose, quote })
