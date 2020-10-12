import { oneself }      from '@ject/oneself'
import { VectorMargin } from './VectorMargin'

/**
 *
 * @param {*[]} arr
 * @param {*|number} [head]
 * @param {*|number} [tail]
 * @param {*|boolean} [dash]
 * @param {*|function(*):string} [read]
 * @param {*|string} [rule='..']
 * @param {*|boolean} [validate=true]
 * @return {{raw:*[],alt:*[]}}
 */
export const vettro = (arr, {
  head,
  tail,
  dash,
  read,
  rule = '...',
  validate = true,
} = {}) => {
  const vn = validate
    ? VectorMargin.build(arr, head, tail)
    : new VectorMargin(arr, head, tail, dash)
  return {
    raw: vn.map(oneself).toVector(rule),
    alt: vn.stringify(read).toVector(rule)
  }
}

