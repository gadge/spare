'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('@spare/util');
var vettro = require('@spare/vettro');
var entriesMargin = require('@vect/entries-margin');

class Entrigin extends vettro.Vectogin {
  constructor(entries, head, tail, dash) {
    super(entries, head, tail, dash);
  }

  static build(entries, h = 0, t = 0) {
    var _entries;

    let d = true,
        l;
    if (!(l = (_entries = entries) === null || _entries === void 0 ? void 0 : _entries.length)) [entries, h, t, d] = [[], 0, 0, false];
    if (!h && !t || h >= l) [h, t, d] = [l, 0, false];
    return new Entrigin(entriesMargin.marginCopy(entries, h, t, l), h, t, d);
  }

  map(keyMapper, valueMapper, mutate = false) {
    const {
      vec,
      head,
      tail
    } = this;
    return mutate ? this.reboot(entriesMargin.marginMutate(vec, keyMapper, valueMapper, head, tail)) : this.clone(entriesMargin.marginMapper(vec, keyMapper, valueMapper, head, tail));
  }
  /**
   *
   * @param {function} [keyMapper]
   * @param {function} [valueMapper]
   * @param {boolean} [mutate]
   * @return { Entrigin }
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
 * @param {*} hr
 * @param {boolean} [pad]
 * @return {{text:*[], raw:*[]}}
 */

const enttro = (entries, {
  head,
  tail,
  keyRead,
  read,
  hr = '...'
} = {}) => {
  let vn = Entrigin.build(entries, head, tail);
  return {
    raw: vn.toVector(hr),
    text: vn.stringify(keyRead, read).toVector(hr)
  };
};

exports.Entrigin = Entrigin;
exports.enttro = enttro;
