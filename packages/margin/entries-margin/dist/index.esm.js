import { totx } from '@spare/util';
import { VectorMargin } from '@spare/vector-margin';
import { marginCopy, marginMutate, marginMapper } from '@vect/entries-margin';

const entriesMargin = (entries, {
  head,
  tail,
  keyRead,
  read,
  rule
} = {}) => EntriesMargin.build(entries, head, tail).stringify(keyRead, read).toVector(rule ?? ['..', '..']);
class EntriesMargin extends VectorMargin {
  constructor(entries, head, tail, dash) {
    super(entries, head, tail, dash);
  }

  static build(entries, h = 0, t = 0) {
    var _entries;

    let d = true,
        l;
    if (!(l = (_entries = entries) == null ? void 0 : _entries.length)) [entries, h, t, d] = [[], 0, 0, false];
    if (!h && !t || h >= l) [h, t, d] = [l, 0, false];
    return new EntriesMargin(marginCopy(entries, h, t, l), h, t, d);
  }

  map(keyMapper, valueMapper, mutate = false) {
    const {
      vec,
      head,
      tail
    } = this;
    return mutate ? this.reboot(marginMutate(vec, keyMapper, valueMapper, head, tail)) : this.clone(marginMapper(vec, keyMapper, valueMapper, head, tail));
  }
  /**
   *
   * @param {function} [keyMapper]
   * @param {function} [valueMapper]
   * @param {boolean} [mutate]
   * @return { EntriesMargin }
   */


  stringify(keyMapper, valueMapper, mutate = true) {
    return this.map(keyMapper ? _ => String(keyMapper(_)) : totx, valueMapper ? _ => String(valueMapper(_)) : totx, mutate);
  }

}

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

const enttro = (entries, {
  head,
  tail,
  keyRead,
  read,
  rule = '...'
} = {}) => {
  let vn = EntriesMargin.build(entries, head, tail);
  return {
    raw: vn.toVector(rule),
    alt: vn.stringify(keyRead, read).toVector(rule)
  };
};

export { EntriesMargin, entriesMargin, enttro };
