import { oneself }  from '@ject/oneself'
import { VectorMargin } from './VectorMargin'

/**
 *
 * @param {*[]} arr
 * @param {*|number} [head]
 * @param {*|number} [tail]
 * @param {*|boolean} [dash]
 * @param {*|function(*):string} [read]
 * @param {*|string} [hr='..']
 * @param {*|boolean} [validate=true]
 * @return {{raw:*[],text:*[]}}
 */
export const vettro = (arr, {
  head,
  tail,
  dash,
  read,
  hr = '...',
  validate = true,
} = {}) => {
  let vn = validate ? VectorMargin.build(arr, head, tail) : new VectorMargin(arr, head, tail, dash)
  return {
    raw: vn.map(oneself).toVector(hr),
    text: vn.stringify(read).toVector(hr)
  }
}

