import { Entrigin } from './Entrigin'

/**
 *
 * @param {*[]} entries
 * @param {number} [head]
 * @param {number} [tail]
 * @param {function(*):string} [keyAbstract]
 * @param {function(*):string} [abstract]
 * @param {*} hr
 * @param {boolean} [pad]
 * @return {{text:*[], raw:*[]}}
 */
export const enttro = (entries, {
  head,
  tail,
  keyAbstract,
  abstract,
  hr = '...'
} = {}) => {
  let vn = Entrigin.build(entries, head, tail)
  return {
    raw: vn.toVector(hr),
    text: vn.stringify(keyAbstract, abstract).toVector(hr)
  }
}

