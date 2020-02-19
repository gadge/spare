import { Matrigin } from './Matrigin'

/**
 *
 * @param mx
 * @param {number} [top]
 * @param {number} [bottom]
 * @param {number} [left]
 * @param {number} [right]
 * @param {number} [height]
 * @param {number} [width]
 * @param {function(*):*} [abstract]
 * @param {boolean} [pad]
 * @returns {{raw:*[][],text:*[][]}}
 */
export const mattro = (mx, {
  top, bottom, left, right,
  height, width,
  abstract
} = {}) => {
  const
    mn = Matrigin.build(mx, top, bottom, left, right, height, width),
    raw = mn.toMatrix('..'),
    text = mn.stringify(abstract).toMatrix('..')
  return { raw, text }
}


