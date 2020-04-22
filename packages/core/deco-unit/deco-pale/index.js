export { decoKey } from './src/unit/decoKey'
import { decoval } from './src/unit/decoval'

export { decoval }

/**
 *
 * @param x
 * @param {boolean} loose
 * @return {string|*}
 */
export const decoPale = (x, { loose = true } = {}) => decoval.call({ loose }, x)

/**
 *
 * @param {boolean} loose
 * @return {Function}
 */
export const DecoPale = ({ loose = true } = {}) => decoval.bind({ loose })
