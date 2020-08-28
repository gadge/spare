import { oneself }  from '@ject/oneself'
import { Vectogin } from './Vectogin'

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
  let vn = validate ? Vectogin.build(arr, head, tail) : new Vectogin(arr, head, tail, dash)
  return {
    raw: vn.map(oneself).toVector(hr),
    text: vn.stringify(read).toVector(hr)
  }
}

