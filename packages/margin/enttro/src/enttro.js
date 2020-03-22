import { Entrigin } from './Entrigin'

/**
 *
 * @param {*[]} entries
 * @param {number} [head]
 * @param {number} [tail]
 * @param {function(*):string} [keyRead]
 * @param {function(*):string} [read]
 * @param {*} hr
 * @param {boolean} [pad]
 * @return {{text:*[], raw:*[]}}
 */
export const enttro = (entries, {
  head,
  tail,
  keyRead,
  read,
  hr = '...'
} = {}) => {
  let vn = Entrigin.build(entries, head, tail)
  return {
    raw: vn.toVector(hr),
    text: vn.stringify(keyRead, read).toVector(hr)
  }
}

