import { totx, isVisual, vecPalPad, vecPad, maxLen, lpad, rpad, numPad, zhChars } from '@spare/util';
import { Mx, Ar } from 'veho';
import { Visual } from 'hatsu-matrix';
import { hasChn, toFullAngle } from '@spare/string';

class Preci {
  constructor(ar, head, tail, dash) {
    this.ar = ar;
    this.head = head;
    this.tail = tail;
    this.dash = dash;
  }

  reboot(ar) {
    this.ar = ar;
    return this;
  }

  copy(ar) {
    return new Preci(ar, this.head, this.tail, this.dash);
  }

  static fromArr(ar, head = 0, tail = 0) {
    let dash = true;
    if (!(ar === null || ar === void 0 ? void 0 : ar.length)) [head, tail, dash] = [0, 0, false];
    const length = ar.length;
    if (!head || head >= length) [head, tail, dash] = [length, 0, false]; // if (!tail || tail >= length) [head, tail, dash] = [head, 0, true]
    // if (head + tail >= length) [head, tail, dash] = [head, -1, true]

    const len = ar === null || ar === void 0 ? void 0 : ar.length,
          vec = Array(len);

    for (let i = 0; i < head; i++) vec[i] = ar[i];

    for (let i = len - tail; i < len; i++) vec[i] = ar[i];

    return new Preci(vec, head, tail, dash);
  }

  map(fn, mutate = false) {
    return mutate ? this.reboot(this.ar.map(fn)) : this.copy(this.ar.map(fn));
  }

  toList(el) {
    const {
      ar,
      head,
      tail
    } = this,
          len = ar.length,
          diff = len - (head + tail),
          list = ar.slice();
    this.dash && el ? list.splice(head, diff, el) : list.splice(head, diff);
    return list;
  }
  /**
   *
   * @param {function} [read]
   * @param {boolean} [mutate]
   * @return { Preci }
   */


  stringify(read, mutate = true) {
    const brief = read ? _ => String(read(_)) : totx;
    return this.map(brief, mutate);
  }

}

/**
 *
 * @param {*[]} ar
 * @param {number} hd - head(left) length
 * @param {number} ts - tail(right) start index
 * @param {number} l - array length
 * @returns {*[]}
 */
const cropAr = (ar, hd, ts, l) => {
  const _r = Array(l);

  for (--l; l >= ts; l--) _r[l] = ar[l];

  for (--hd; hd >= 0; hd--) _r[hd] = ar[hd];

  return _r;
};
/**
 *
 * @param {*[]} ar
 * @param {function(*)|function(*,number)} fn
 * @param {number} hd - head(left) length
 * @param {number} ts - tail(right) start index, ts=l-right
 * @param {number} l - array length
 * @returns {*[]}
 */

const cropMapAr = (ar, fn, hd, ts, l) => {
  const _r = Array(l);

  for (--l; l >= ts; l--) _r[l] = fn(ar[l], l);

  for (--hd; hd >= 0; hd--) _r[hd] = fn(ar[hd], hd);

  return _r;
};

const cropMx = (mx, [tp, bt], [lf, rt], [ht, wd]) => {
  const _mx = Array(ht),
        bs = ht - bt,
        rs = wd - rt;

  for (let i = 0; i < tp; i++) _mx[i] = cropAr(mx[i], lf, rs, wd);

  for (let i = bs; i < ht; i++) _mx[i] = cropAr(mx[i], lf, rs, wd);

  return _mx;
};
const cropRow = (row, i, fn, lf, rs, wd) => {
  const _r = Array(wd);

  for (--wd; wd >= rs; wd--) _r[wd] = fn(row[wd], i, wd);

  for (--lf; lf >= 0; lf--) _r[lf] = fn(row[lf], i, lf);

  return _r;
};
const cropMapMx = (mx, fn, [tp, bt], [lf, rt], [ht, wd]) => {
  const _mx = Array(ht),
        bs = ht - bt,
        rs = wd - rt;

  for (let i = 0; i < tp; i++) _mx[i] = cropRow(mx[i], i, fn, lf, rs, wd);

  for (let i = bs; i < ht; i++) _mx[i] = cropRow(mx[i], i, fn, lf, rs, wd);

  return _mx;
};

class PreX {
  constructor(mx, [top, bottom], [left, right], [height, width], [xDash, yDash]) {
    this.mx = mx;
    this.tb = [top, bottom];
    this.lr = [left, right];
    this.hw = [height, width];
    this.dash = [xDash, yDash];
  }
  /**
   *
   * @param {*[][]} mx
   * @returns {PreX}
   */


  reboot(mx) {
    this.mx = mx;
    return this;
  }
  /**
   *
   * @param {*[][]} mx
   * @returns {PreX}
   */


  copy(mx) {
    return new PreX(mx, this.tb, this.lr, this.hw, this.dash);
  }

  get height() {
    return this.tb[0] + this.tb[1];
  }

  get width() {
    return this.lr[0] + this.lr[1];
  }

  xHeight(elCn) {
    return Math.min(this.hw[0], this.height + (this.dash[0] && elCn ? elCn : 0));
  }

  xWidth(elCn) {
    return Math.min(this.hw[1], this.width + (this.dash[1] && elCn ? elCn : 0));
  }

  emptyRow(el) {
    const {
      hw: [, w],
      lr: [l, r]
    } = this;
    return cropMapAr(Array(w), () => el, l, w - r, w);
  }

  get voidSize() {
    const [height, width] = this.hw;
    return [height - this.height, width - this.width];
  }

  static fromMx(mx, [top = 0, bottom = 0], [left = 0, right = 0], size = [0, 0]) {
    // ({ top, bottom, left, right, size }) |> console.log
    size = size || Mx.size(mx);
    let [height, width] = size,
        [xDash, yDash] = [true, true];
    if (!height || !width) [top, bottom, xDash, yDash] = [0, 0, false, false];
    if (!top || top >= height) [top, bottom, xDash] = [height, 0, false];
    if (!left || left >= width) [left, right, yDash] = [width, 0, false];

    const _mx = cropMx(mx, [top, bottom], [left, right], [height, width]);

    return new PreX(_mx, [top, bottom], [left, right], [height, width], [xDash, yDash]);
  }

  map(fn, mutate = true) {
    return mutate ? this.reboot(cropMapMx(this.mx, fn, this.tb, this.lr, this.hw)) : this.copy(cropMapMx(this.mx, fn, this.tb, this.lr, this.hw)); // return mutate
    //   ? this.reboot(this.mx.map((r, i) => r.map((x, j) => fn(x, i, j))))
    //   : this.copy(this.mx.map((r, i) => r.map((x, j) => fn(x, i, j))))
  }

  toMx(el) {
    const {
      mx,
      tb: [top],
      lr: [left],
      dash: [xDash, yDash],
      voidSize: [dx, dy]
    } = this,
          _mx = Mx.copy(mx);

    xDash && el ? _mx.splice(top, dx, this.emptyRow(el)) : _mx.splice(top, dx);

    if (yDash && el) {
      for (let row of _mx) row.splice(left, dy, el);
    } else {
      for (let row of _mx) row.splice(left, dy);
    }

    return _mx;
  }

  stringify(read, mutate = true) {
    const brief = read ? _ => String(read(_)) : totx;
    return this.map(brief, mutate);
  }

}

/**
 *
 * @param {*[]} arr
 * @param {function(*):string} [read]
 * @param {number} [h]
 * @param {number} [t]
 * @param {{
 *   [on]:boolean,
 *   [mark]:{[max]:string|number[],[min]:string|number[],[na]:string|number[]}
 * }} [visual]
 * @return {*}
 */

const destructPreci = (arr, [h, t], {
  read,
  visual = {}
} = {}) => {
  var _visual;

  let preci = Preci.fromArr(arr, h, t),
      raws = preci.toList('...'),
      pals = (_visual = visual, isVisual(_visual)) ? Visual.vector(raws, { ...visual,
    retFn: true,
    mutate: false
  }) : null,
      words = preci.stringify(read);
  return {
    raws,
    pals,
    words
  };
};

const destructPreX = (mx, [top, bottom], [left, right], {
  read,
  visual = {},
  ansi = false
}, [height, width]) => {
  var _visual;

  const prex = PreX.fromMx(mx, [top, bottom], [left, right], [height, width]),
        rawx = prex.toMx('..'),
        palx = (_visual = visual, isVisual(_visual)) ? Visual.matrix(rawx, { ...visual,
    retFn: true,
    mutate: false
  }) : null,
        wordx = prex.stringify(read).toMx('..');
  return {
    rawx,
    palx,
    wordx
  };
};

const padMx = (wordx, rawx, palx, pads, ansi) => {
  // const [, wd] = Mx.size(rawx)
  return palx ? wordx.map((words, i) => vecPalPad(words, rawx[i], palx[i], pads, ansi)) : wordx.map((words, i) => vecPad(words, rawx[i], pads, ansi));
};

/**
 *
 *
 * @param {*[][]} head
 * @param wordx
 * @param rawx
 * @param {Hatsu[][]} [palx]
 * @param {boolean=false} [ansi]
 * @param {boolean=false} chinese
 * @return {{head: string[], blanc: string[], rows: string[][]}}
 */

const padTable = (head, wordx, rawx, palx, ansi = false, chinese = false) => {
  if (chinese) return padTableCn(head, wordx, rawx, palx, ansi);
  const pads = Mx.columns([head].concat(wordx), col => maxLen(col, ansi)),
        [_head, blanc, rows] = [Ar.zip(head, pads, (x, p) => lpad(x, p, ansi)), pads.map(l => '-'.repeat(l)), padMx(wordx, rawx, palx, pads, ansi)];
  return {
    head: _head,
    blanc,
    rows
  };
};
/**
 *
 *
 * @param {*[][]} head
 * @param wordx
 * @param rawx
 * @param {Hatsu[][]} [palx]
 * @param {boolean=false} [ansi]
 * @return {{head: string[], blanc: string[], rows: string[][]}}
 */

const padTableCn = (head, wordx, rawx, palx, ansi = false) => {
  const {
    dash,
    space
  } = zhChars;
  /**
   *
   * @type {{pd:number,cn:boolean}[]}
   */

  const pads = Mx.columns([head].concat(wordx), col => ({
    pd: maxLen(col, ansi),
    cn: col.some(hasChn)
  })),
        [_head, blanc, rows] = [Ar.zip(head, pads, (x, {
    cn,
    pd
  }) => cn ? rpad(toFullAngle(x), pd, ansi, space) : rpad(x, pd, ansi)), pads.map(p => (p.cn ? dash : '-').repeat(p.pd)), palx ? wordx.map((words, i) => Ar.zip(words, pads, (tx, {
    cn,
    pd
  }, j) => {
    var _numPad, _numPad2;

    return cn ? (_numPad = numPad(toFullAngle(tx), rawx[i][j], pd, ansi, space), palx[i][j](_numPad)) : (_numPad2 = numPad(tx, rawx[i][j], pd, ansi), palx[i][j](_numPad2));
  })) : wordx.map((words, i) => Ar.zip(words, pads, (tx, {
    cn,
    pd
  }, j) => cn ? numPad(toFullAngle(tx), rawx[i][j], pd, ansi, space) : numPad(tx, rawx[i][j], pd, ansi)))];
  return {
    head: _head,
    blanc,
    rows
  };
};

export { PreX, Preci, destructPreX, destructPreci, padMx, padTable };
