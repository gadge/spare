import { Vectogin } from './Vectogin'

/**
 *
 * @param {*[]} arr
 * @param {number} [head]
 * @param {number} [tail]
 * @param {function(*):string} [abstract]
 * @param {*} hr
 * @param {boolean} [pad]
 * @return {{raw:*[],text:*[]}}
 */
export const vettro = (arr, {
  head,
  tail,
  abstract,
  hr = '...',
} = {}) => {
  let vn = Vectogin.build(arr, head, tail)
  return {
    raw: vn.toVector(hr),
    text: vn.stringify(abstract).toVector(hr)
  }
}

