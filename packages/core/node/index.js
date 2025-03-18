import { hexToRgi } from '@palett/convert';
import { Presm, randPres, Pres } from '@palett/pres';
import { serialVector, serialObject, serialEntries, serialMatrix } from '@spare/serial';
import { NONE, BRACKET } from '@texting/enum-brackets';
import { SP, VO, LF, COSP, RTSP, COLF } from '@texting/enum-chars';
import { splitLiteral } from '@texting/splitter';
import { STR, OBJ } from '@typen/enum-data-types';
import { width } from '@vect/matrix-index';
import { min } from '@aryth/comparer';
import { lange } from '@texting/lange';
import { CSI, FORE_INI, FORE_DEF, SGR, BOL_ON, BOL_OFF, DIM_ON, DIM_OFF, ITA_ON, ITA_OFF, UND_ON, UND_OFF, BLI_ON, BLI_OFF, INV_ON, INV_OFF, HID_ON, HID_OFF, CRO_ON, CRO_OFF } from '@palett/enum-ansi-codes';
import { SC } from '@palett/util-ansi';

const BRAC = [
  [ '', '' ], // NONE = 0
  [ '(', ')' ], // PARENTH = 1
  [ '[', ']' ], // BRACKET = 2
  [ '{', '}' ], // BRACE = 3
  [ '<', '>' ] // ANGLEBR = 4
];

const BRSP = [
  [ '', '' ], // NONE = 0
  [ '( ', ' )' ], // PARENTH = 1
  [ '[ ', ' ]' ], // BRACKET = 2
  [ '{ ', ' }' ], // BRACE = 3
  [ '< ', ' >' ] // ANGLEBR = 4
];


class Tb {}

/** @type {function} */ const tabs = n => n <= 0 ? '' : Tb[n] ?? (Tb[n] = SP.repeat(n));


class Fold {
  static chain(txs, de = VO) {
    if (!txs?.length) return ''
    let i = 0, hi = txs.length, tx = txs[i];
    while (++i < hi) tx += de + txs[i];
    return tx
  }
  static stand(txs, tra = LF, ind = 0) {
    if (!txs?.length) return ''
    let i = 0, hi = txs.length, tb = tabs(ind), tx = tb + txs[i];
    while (++i < hi) tx += tra + tb + txs[i];
    return tx
  }
  static group(txs, de = COSP, tra = COSP, bra = NONE, thr) {
    let [ L, R ] = BRAC[bra];
    if (!txs?.length) return L + R
    let hi = txs.length, tx = '';
    for (let i = 0, p = (thr = min(thr, hi)), cx; i < hi; p += thr) {
      cx = L + txs[i];
      while (++i < p) cx += de + txs[i];
      tx += cx + R;
      if (p < hi) tx += tra;
    }
    return tx
  }

  static shape(txs, de = COSP, tra = LF, bra = NONE, thr = 2, ind = 0) {
    let [ L, R ] = BRSP[bra];
    if (!txs?.length) return L.at(0) + R.at(-1)
    let hi = txs.length, tx = '';
    L = tabs(ind) + L;
    for (let i = 0, p = (thr = min(thr, hi)), cx; i < hi; p += thr) {
      cx = L + txs[i];
      while (++i < p) cx += de + txs[i];
      tx += cx + R;
      if (p < hi) tx += tra;
    }
    return tx
  }

  /**
   * Reshapes an array of strings by applying a function to each element, grouping them, and adding delimiters and brackets.
   *
   * @param {string[]} txs - The array of strings to reshape.
   * @param {(t: string, index: number) => string} fn - The function to apply to each string element.
   * @param {string} [de=COSP] - The delimiter to use between elements within a group.
   * @param {string} [tra=LF] - The trailing string to use between groups.
   * @param {number} [bra=NONE] - The bracket type to use (NONE, PARENTH, BRACKET, BRACE, ANGLEBR).
   * @param {number} [thr=2] - The threshold for the number of elements per group.
   * @param {number} [ind=0] - The indentation level.
   * @returns {string} The reshaped string.
   * @example
   * Fold.reshape(['a', 'b', 'c', 'd'], (x, i) => x.toUpperCase(), ',', '\n', 1, 2, 1) // returns "( A , B )\n( C , D )"
   */
  static reshape(txs, fn, de = COSP, tra = LF, bra = NONE, thr = 2, ind = 0) {
    let [ L, R ] = BRSP[bra];
    if (!txs?.length) return L.at(0) + R.at(-1)
    let hi = txs.length, tx = '';
    L = tabs(ind) + L;
    for (let i = 0, p = (thr = min(thr, hi)), cx; i < hi; p += thr) {
      let ci = 0;
      cx = L + fn(txs[i], ci);
      while (++i < p) cx += de + fn(txs[i], ++ci);
      tx += cx + R;
      if (p < hi) tx += tra;
    }
    return tx
  }
  static string(txs, de = '', thr = 80, ind = 0, sur = 0) {
    if (!thr) return Fold.chain(txs, de)
    const cn = txs.length, ws = txs.ws ?? txs.map(lange);
    let tx = '', cx = '', ph = '', i = 0, p = sur + ws[i], rn = false;
    const tb = tabs(ind), tw = tb.length, dw = de?.length;
    while (i < cn) {
      if ((rn = /\n/.test(cx)) || p > thr) tx += cx + (rn ? '' : LF), cx = tb, p = tw + ws[i];
      cx += txs[i], p += ws[++i] + dw;
      if (i < cn) {
        if (/[.,;:!?'"`)\]}]?\s*/.test(ph = txs[i])) cx += ph, p += ws[++i] + dw;
        cx += de;
      }
    }
    if (cx.length) tx += cx;
    return tx
  }
  static vector(txs, de = '', thr = 80, ind = 0, sur = 0) {
    const cn = txs.length, ws = txs.ws ?? txs.map(lange);
    let tx = '', cx = ' ', i = 0, p = sur + ws[i], tb = tabs(ind + 2), tw = tb.length, cl = p > thr, dw = de?.length;
    while (i < cn) {
      if (p > thr) tx += cx + LF, cx = tb, p = tw + ws[i];
      cx += txs[i], p += ws[++i] + dw;
      if (i < cn) cx += de;
    }
    if (cx.length) tx += cx + ' ';
    if (cl) tx += LF + tabs(ind);
    return tx
  }
  static entries(txs, de = RTSP, tra = COSP, thr = 80, ind = 0, sur = 0) {
    const cn = txs.length, ws = txs.ws ?? txs.map(lange);
    let tx = '', cx = ' ', i = 0, j = 1, hi = sur + ws[i] + 2 + ws[j], tb = tabs(ind + 2), tw = tb.length,
      cl = hi > thr,
      dw = tra?.length;
    while (j < cn) {
      if (hi > thr) tx += cx + LF, cx = tb, hi = tw + ws[i] + 2 + ws[j];
      cx += txs[i] + de + txs[j] , hi += ws[i += 2] + 2 + ws[j += 2] + dw;
      if (j < cn) cx += COSP;
    }
    if (cx.length) tx += cx + ' ';
    if (cl) tx += LF + tabs(ind);
    return tx
  }
  static matrix(txs, de = COSP, thr = 2, ind = 0, sur = 0) {
    if (!txs?.length) return ''
    // `[ind] (${ind}) [sur] (${sur}) [${txs[0]}, ${txs[1]}, ...]` |> console.log
    let L = '[', R = ']', T = tabs(ind), hi = txs.length, tx = '';
    for (let i = 0, p = (thr = min(thr, hi)), cx; i < hi; p += thr) {
      cx = (i ? T : tabs(sur)) + L + txs[i];
      while (++i < p) cx += de + txs[i];
      tx += cx + R;
      if (p < hi) tx += LF;
    }
    return tx
  }
}

function parsePres(unit) {
  return unit instanceof Pres ? unit : typeof unit === STR ? randPres(unit) : null
}

// normally pass conf.pres ?? conf
function parsePresm(o, pres) {
  if (typeof o === STR && o.startsWith('#')) { return Presm.build(o = randPres(o), o) } // string -> make presm
  if (typeof o === OBJ) {
    if (o instanceof Pres) return Presm.build(o, o) // pres -> make presm
    if (o instanceof Presm) return o // presm -> pass presm
    const str = o.str, pos = o.num ?? o.pos, neg = o.neg, nan = o.nan;
    if (str || pos || neg) return Presm.build(parsePres(str), parsePres(pos), parsePres(neg), nan) // {str, pos, neg} -> make presm
  }
  if (pres) return parsePresm(pres, null) // if nothing found, use default pres
  return null // if nothing found and default pres not provided, return null
}

class Node extends Presm {
  constructor(xb, xp, yb, yp, zb, zp, nan) {
    super(xb, xp, yb, yp, zb, zp, nan);
  }

  /**
   * @param {Pres} [xbd] - a Pres maps x bound.
   * @param {Pres} [ybd] - a Pres maps y bound.
   * @param {Pres} [zbd] - a Pres maps z bound.
   * @param {string|number} [nan] - if input string, convert to RGI.
   * @returns {Node} - A new Pres instance.
   */
  static build(xbd, ybd, zbd, nan) {
    nan = typeof nan === STR ? hexToRgi(nan) : (nan ?? xbd?.nan ?? ybd?.nan ?? zbd?.nan ?? undefined);
    return new Node(xbd?.min, xbd?.max, ybd?.min, ybd?.max, zbd?.min, zbd?.max, nan)
  }

  static init(o) {
    if (typeof o === STR && o.startsWith('#')) { return Node.build(o = randPres(o), o) } // string -> make presm
    if (typeof o === OBJ) {
      if (o instanceof Pres) return Node.build(o, o) // pres -> make presm
      if (o instanceof Presm) return Node.from(o) // presm -> pass presm
      const str = o.str, pos = o.num ?? o.pos, neg = o.neg, nan = o.nan;
      if (str || pos || neg) return Node.build(parsePres(str), parsePres(pos), parsePres(neg), nan) // {str, pos, neg} -> make presm
    }
    return null // if nothing found and default pres not provided, return null
  }

  static from(p) { return new Node(p[0], p[1], p[2], p[3], p[4], p[5], p.nan) }

  /**
   * @param {string} str input string
   * @param {number} thr width of each line
   * @param {number} ind indent
   * @param {number} sur surge
   * @return {string}
   */
  string(str, thr, ind, sur) {
    if (!str.length) return ''
    const vector = splitLiteral(str);
    const serial = serialVector.call(this, vector);
    return Fold.string(serial, '', thr, ind, sur)
  }

  vector(vec, thr, ind = 0, sur = 0) {
    const serial = serialVector.call(this, vec);
    const len = vec?.length ?? 0;
    if (len === 0) return '[]'
    if (thr > 0) return '[' + Fold.vector(serial, COSP, thr, ind, sur) + ']'
    if (len === 1) return '[ ' + Fold.chain(serial, COSP) + ' ]'
    if (thr === 0) return '[' + LF + Fold.stand(serial, COLF, ind + 2) + LF + tabs(ind) + ']'
    return '[ ' + Fold.chain(serial, COSP) + ' ]'
  }

  object(obj, thr, ind = 0, sur = 0) {
    const serial = serialObject.call(this, obj);
    const len = serial.length;
    if (len === 0) return '{}'
    if (thr > 0) return '{' + Fold.entries(serial, RTSP, COLF, thr, ind, sur + 2) + '}'
    if (len === 2) return '{ ' + Fold.group(serial, RTSP, COSP, NONE, 2) + ' }'
    if (thr === 0) return '{' + LF + Fold.shape(serial, RTSP, COLF, NONE, 2, ind + 2) + LF + tabs(ind) + '}'
    return '{ ' + Fold.group(serial, RTSP, COSP, NONE, 2) + ' }'
  }

  entries(ent, thr, ind = 0, sur = 0) {
    const len = ent?.length ?? 0;
    const serial = serialEntries.call(this, ent, thr === 0 && len > 1);
    if (len === 0) return '[]'
    if (thr > 0) return '[' + Fold.entries(serial, COSP, COLF, thr, ind, sur + 2) + ']'
    if (len === 2) return '[ ' + Fold.group(serial, COSP, COSP, BRACKET, 2) + ' ]'
    if (thr === 0) return '[' + LF + Fold.shape(serial, COSP, COLF, BRACKET, 2, ind + 2) + LF + tabs(ind) + ']'
    return '[ ' + Fold.group(serial, COSP, COSP, BRACKET, 2) + ' ]'
  }

  matrix(mat, direct, ind = 0) {
    const serial = serialMatrix.call(this, mat, direct);
    const len = serial?.length ?? 0, wd = width(mat);
    if (len <= wd) return '[[ ' + Fold.chain(serial, COSP) + ' ]]'
    return '[' + LF + Fold.shape(serial, COSP, COLF, BRACKET, wd, ind + 2) + LF + tabs(ind) + ']'
  }
}

function initAnsi(effects) {
  let head = '', tail = '';
  if (effects) for (let t of effects) {
    t === 'bold' ? (head += BOL_ON + SC, tail += BOL_OFF + SC) // BOLD
      : t === 'dim' ? (head += DIM_ON + SC, tail += DIM_OFF + SC) // DIM
        : t === 'italic' ? (head += ITA_ON + SC, tail += ITA_OFF + SC) // ITALIC
          : t === 'underline' ? (head += UND_ON + SC, tail += UND_OFF + SC) // UNDERLINE
            : t === 'blink' ? (head += BLI_ON + SC, tail += BLI_OFF + SC) // BLINK
              : t === 'inverse' ? (head += INV_ON + SC, tail += INV_OFF + SC) // INVERSE
                : t === 'hide' ? (head += HID_ON + SC, tail += HID_OFF + SC) // HIDE
                  : t === 'strike' ? (head += CRO_ON + SC, tail += CRO_OFF + SC) // STRIKE
                    : void 0;
  }
  this.head = CSI + head + FORE_INI + SC;
  this.tail = CSI + FORE_DEF + tail + SGR;
}

export { Fold, Node, initAnsi, parsePresm, tabs };
