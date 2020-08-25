import { totx } from '@spare/util';
import { marginCopy, marginMutate, marginMapper } from '@vect/vector-margin';
import { oneself } from '@ject/oneself';

const marginSizing = (ar, head, tail) => {
  let l,
      dash = true;
  if (!(l = ar === null || ar === void 0 ? void 0 : ar.length)) [head, tail, dash] = [0, 0, false];
  if (!head && !tail || head >= l) [head, tail, dash] = [l, 0, false];
  return {
    head,
    tail,
    dash
  };
};

class Vectogin {
  constructor(vec, head, tail, dash) {
    this.vec = vec;
    this.head = head;
    this.tail = tail;
    this.dash = dash;
  }

  static build(ar, h = 0, t = 0) {
    const {
      head,
      tail,
      dash
    } = marginSizing(ar, h, t);
    const cutVec = marginCopy(ar, head, tail);
    return new Vectogin(cutVec, head, tail, dash);
  }

  map(fn, mutate = false) {
    const {
      vec,
      head,
      tail
    } = this;
    return mutate ? this.reboot(marginMutate(vec, fn, head, tail)) : this.clone(marginMapper(vec, fn, head, tail));
  }

  stringify(fn, mutate = true) {
    return this.map(fn ? _ => String(fn(_)) : totx, mutate);
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
 * @param {*|number} [head]
 * @param {*|number} [tail]
 * @param {*|boolean} [dash]
 * @param {*|function(*):string} [read]
 * @param {*|string} [hr='..']
 * @param {*|boolean} [validate=true]
 * @return {{raw:*[],text:*[]}}
 */

const vettro = (arr, {
  head,
  tail,
  dash,
  read,
  hr = '...',
  validate = true
} = {}) => {
  let vn = validate ? Vectogin.build(arr, head, tail) : new Vectogin(arr, head, tail, dash);
  return {
    raw: vn.map(oneself).toVector(hr),
    text: vn.stringify(read).toVector(hr)
  };
};

export { Vectogin, marginSizing, vettro };
