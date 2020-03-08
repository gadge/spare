import { Vectogin } from './Vectogin'

/**
 *
 * @param {*[]} arr
 * @param {number} [head]
 * @param {number} [tail]
 * @param {boolean} [dash]
 * @param {function(*):string} [abstract]
 * @param {string} [hr='..']
 * @param {boolean} [validate=true]
 * @return {{raw:*[],text:*[]}}
 */
export const vettro = (arr, {
  head,
  tail,
  dash,
  abstract,
  hr = '...',
  validate = true,
} = {}) => {
  let vn = validate
    ? Vectogin.build(arr, head, tail)
    : new Vectogin(arr, head, tail, dash)
  return {
    raw: vn.map(x => x).toVector(hr),
    text: vn.stringify(abstract).toVector(hr)
  }
}

