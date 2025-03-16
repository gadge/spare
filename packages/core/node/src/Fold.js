import { min }                    from '@aryth/comparer'
import { NONE }                   from '@texting/enum-brackets'
import { COSP, LF, RTSP, SP, VO } from '@texting/enum-chars'
import { lange }                  from '@texting/lange'

export const BRAC = [
  [ '', '' ], // NONE = 0
  [ '(', ')' ], // PARENTH = 1
  [ '[', ']' ], // BRACKET = 2
  [ '{', '}' ], // BRACE = 3
  [ '<', '>' ] // ANGLEBR = 4
]

export const BRSP = [
  [ '', '' ], // NONE = 0
  [ '( ', ' )' ], // PARENTH = 1
  [ '[ ', ' ]' ], // BRACKET = 2
  [ '{ ', ' }' ], // BRACE = 3
  [ '< ', ' >' ] // ANGLEBR = 4
]


export class Tb {}

/** @type {function} */ export const tabs = n => n <= 0 ? '' : Tb[n] ?? (Tb[n] = SP.repeat(n))


export class Fold {
  static chain(txs, de = VO) {
    if (!txs?.length) return ''
    let i = 0, hi = txs.length, tx = txs[i]
    while (++i < hi) tx += de + txs[i]
    return tx
  }
  static stand(txs, tra = LF, ind = 0) {
    if (!txs?.length) return ''
    let i = 0, hi = txs.length, tb = tabs(ind), tx = tb + txs[i]
    while (++i < hi) tx += tra + tb + txs[i]
    return tx
  }
  static group(txs, de = COSP, tra = COSP, bra = NONE, thr) {
    let [ L, R ] = BRAC[bra]
    if (!txs?.length) return L + R
    let hi = txs.length, tx = ''
    for (let i = 0, p = (thr = min(thr, hi)), cx; i < hi; p += thr) {
      cx = L + txs[i]
      while (++i < p) cx += de + txs[i]
      tx += cx + R
      if (p < hi) tx += tra
    }
    return tx
  }

  static shape(txs, de = COSP, tra = LF, bra = NONE, thr = 2, ind = 0) {
    let [ L, R ] = BRSP[bra]
    if (!txs?.length) return L.at(0) + R.at(-1)
    let hi = txs.length, tx = ''
    L = tabs(ind) + L
    for (let i = 0, p = (thr = min(thr, hi)), cx; i < hi; p += thr) {
      cx = L + txs[i]
      while (++i < p) cx += de + txs[i]
      tx += cx + R
      if (p < hi) tx += tra
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
    let [ L, R ] = BRSP[bra]
    if (!txs?.length) return L.at(0) + R.at(-1)
    let hi = txs.length, tx = ''
    L = tabs(ind) + L
    for (let i = 0, p = (thr = min(thr, hi)), cx; i < hi; p += thr) {
      let ci = 0
      cx = L + fn(txs[i], ci)
      while (++i < p) cx += de + fn(txs[i], ++ci)
      tx += cx + R
      if (p < hi) tx += tra
    }
    return tx
  }
  static string(txs, de = '', thr = 80, ind = 0, sur = 0) {
    if (!thr) return Fold.chain(txs, de)
    const cn = txs.length, ws = txs.ws ?? txs.map(lange)
    let tx = '', cx = '', ph = '', i = 0, p = sur + ws[i], rn = false
    const tb = tabs(ind), tw = tb.length, dw = de?.length
    while (i < cn) {
      if ((rn = /\n/.test(cx)) || p > thr) tx += cx + (rn ? '' : LF), cx = tb, p = tw + ws[i]
      cx += txs[i], p += ws[++i] + dw
      if (i < cn) {
        if (/[.,;:!?'"`)\]}]?\s*/.test(ph = txs[i])) cx += ph, p += ws[++i] + dw
        cx += de
      }
    }
    if (cx.length) tx += cx
    return tx
  }
  static vector(txs, de = '', thr = 80, ind = 0, sur = 0) {
    const cn = txs.length, ws = txs.ws ?? txs.map(lange)
    let tx = '', cx = ' ', i = 0, p = sur + ws[i], tb = tabs(ind + 2), tw = tb.length, cl = p > thr, dw = de?.length
    while (i < cn) {
      if (p > thr) tx += cx + LF, cx = tb, p = tw + ws[i]
      cx += txs[i], p += ws[++i] + dw
      if (i < cn) cx += de
    }
    if (cx.length) tx += cx + ' '
    if (cl) tx += LF + tabs(ind)
    return tx
  }
  static entries(txs, de = RTSP, tra = COSP, thr = 80, ind = 0, sur = 0) {
    const cn = txs.length, ws = txs.ws ?? txs.map(lange)
    let tx = '', cx = ' ', i = 0, j = 1, hi = sur + ws[i] + 2 + ws[j], tb = tabs(ind + 2), tw = tb.length,
      cl = hi > thr,
      dw = tra?.length
    while (j < cn) {
      if (hi > thr) tx += cx + LF, cx = tb, hi = tw + ws[i] + 2 + ws[j]
      cx += txs[i] + de + txs[j] , hi += ws[i += 2] + 2 + ws[j += 2] + dw
      if (j < cn) cx += COSP
    }
    if (cx.length) tx += cx + ' '
    if (cl) tx += LF + tabs(ind)
    return tx
  }
  static matrix(txs, de = COSP, thr = 2, ind = 0, sur = 0) {
    if (!txs?.length) return ''
    // `[ind] (${ind}) [sur] (${sur}) [${txs[0]}, ${txs[1]}, ...]` |> console.log
    let L = '[', R = ']', T = tabs(ind), hi = txs.length, tx = ''
    for (let i = 0, p = (thr = min(thr, hi)), cx; i < hi; p += thr) {
      cx = (i ? T : tabs(sur)) + L + txs[i]
      while (++i < p) cx += de + txs[i]
      tx += cx + R
      if (p < hi) tx += LF
    }
    return tx
  }
}
