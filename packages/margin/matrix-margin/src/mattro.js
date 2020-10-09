import { oneself }  from '@ject/oneself'
import { MatrixMargin } from './MatrixMargin'

/**
 *
 * @param mx
 * @param {number} [top]
 * @param {number} [bottom]
 * @param {number} [left]
 * @param {number} [right]
 * @param {number} [height]
 * @param {number} [width]
 * @param {boolean} [dashX]
 * @param {boolean} [dashY]
 * @param {function(*):*} [read]
 * @param {string} [hr='..']
 * @param {boolean} [validate=true]
 * @returns {{raw:*[][],text:*[][]}}
 */
export const mattro = (mx, {
  top, bottom, left, right,
  height, width, dashX, dashY,
  read,
  hr = '..',
  validate = true
} = {}) => {
  const
    mn = validate
      ? MatrixMargin.build(mx, top, bottom, left, right, height, width)
      : new MatrixMargin(mx, top, bottom, left, right, height, width, dashX, dashY),
    raw = mn.map(oneself).toMatrix(hr),
    text = mn.stringify(read).toMatrix(hr)
  return { raw, text }
}


