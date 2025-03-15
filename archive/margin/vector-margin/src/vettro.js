import { oneself }      from '@ject/oneself'
import { VectorMargin } from './VectorMargin'

/**
 *
 * @param {*[]} arr
 * @param {*|number} [head]
 * @param {*|number} [tail]
 * @param {*|function(*):string} [read]
 * @param {*|string} [rule='..']
 * @return {{raw:*[],alt:*[]}}
 */
export const vettro = (arr, {
  head,
  tail,
  read,
  rule = '...'
} = {}) => {
  const vn = VectorMargin.build(arr, head, tail)
  return {
    raw: vn.map(oneself).toVector(rule),
    alt: vn.stringify(read).toVector(rule)
  }
}

