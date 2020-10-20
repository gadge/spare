'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('@spare/util');
var vectorMargin = require('@spare/vector-margin');
var entriesMargin$1 = require('@vect/entries-margin');

const entriesMargin = (entries, {
  head,
  tail,
  keyRead,
  read,
  rule
} = {}) => EntriesMargin.build(entries, head, tail).stringify(keyRead, read).toVector(rule !== null && rule !== void 0 ? rule : ['..', '..']);
class EntriesMargin extends vectorMargin.VectorMargin {
  constructor(entries, head, tail, dash) {
    super(entries, head, tail, dash);
  }

  static build(entries, h = 0, t = 0) {
    var _entries;

    let d = true,
        l;
    if (!(l = (_entries = entries) === null || _entries === void 0 ? void 0 : _entries.length)) [entries, h, t, d] = [[], 0, 0, false];
    if (!h && !t || h >= l) [h, t, d] = [l, 0, false];
    return new EntriesMargin(entriesMargin$1.marginCopy(entries, h, t, l), h, t, d);
  }

  map(keyMapper, valueMapper, mutate = false) {
    const {
      vec,
      head,
      tail
    } = this;
    return mutate ? this.reboot(entriesMargin$1.marginMutate(vec, keyMapper, valueMapper, head, tail)) : this.clone(entriesMargin$1.marginMapper(vec, keyMapper, valueMapper, head, tail));
  }
  /**
   *
   * @param {function} [keyMapper]
   * @param {function} [valueMapper]
   * @param {boolean} [mutate]
   * @return { EntriesMargin }
   */


  stringify(keyMapper, valueMapper, mutate = true) {
    return this.map(keyMapper ? _ => String(keyMapper(_)) : util.totx, valueMapper ? _ => String(valueMapper(_)) : util.totx, mutate);
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

exports.EntriesMargin = EntriesMargin;
exports.entriesMargin = entriesMargin;
exports.enttro = enttro;
