import { EntriesMargin } from './EntriesMargin'

/**
 *
 * @param {*[]} entries
 * @param {number} [head]
 * @param {number} [tail]
 * @param {function(*):string} [keyRead]
 * @param {function(*):string} [read]
 * @param {*} rule
 * @param {boolean} [pad]
 * @return {{raw:*[], alt:*[]}}
 */
export const enttro = (entries, {
  head,
  tail,
  keyRead,
  read,
  rule = '...'
} = {}) => {
  let vn = EntriesMargin.build(entries, head, tail)
  return {
    raw: vn.toVector(rule),
    alt: vn.stringify(keyRead, read).toVector(rule)
  }
}

