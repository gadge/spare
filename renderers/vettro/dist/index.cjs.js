'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('@spare/util');
var vectorMargin = require('@vect/vector-margin');

class Vectogin {
  constructor(vec, head, tail, dash) {
    this.vec = vec;
    this.head = head;
    this.tail = tail;
    this.dash = dash;
  }

  static build(ar, h = 0, t = 0) {
    let d = true,
        l;
    if (!ar || !(l = ar.length)) [ar, h, t, d] = [[], 0, 0, false];
    if (!h && !t || h >= l) [h, t, d] = [l, 0, false];
    return new Vectogin(vectorMargin.marginCopy(ar, h, t, l), h, t, d);
  }

  map(fn, mutate = false) {
    const {
      vec,
      head,
      tail
    } = this;
    return mutate ? this.reboot(vectorMargin.marginMutate(vec, fn, head, tail)) : this.clone(vectorMargin.marginMapper(vec, fn, head, tail));
  }

  stringify(fn, mutate = true) {
    return this.map(fn ? _ => String(fn(_)) : util.totx, mutate);
  }

  toVector(el) {
    const {
      vec,
      head,
      tail
    } = this,
          dif = vec.length - (head + tail),
          ar = vec.slice();
    this.dash && el ? ar.splice(head, dif, el) : ar.splice(head, dif);
    return ar;
  }

  reboot(ar) {
    if (ar) this.vec = ar;
    return this;
  }

  clone(ar) {
    return new Vectogin(ar, this.head, this.tail, this.dash);
  }

}

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

const vettro = (arr, {
  head,
  tail,
  abstract,
  hr = '...'
} = {}) => {
  let vn = Vectogin.build(arr, head, tail);
  return {
    raw: vn.toVector(hr),
    text: vn.stringify(abstract).toVector(hr)
  };
};

exports.Vectogin = Vectogin;
exports.vettro = vettro;
