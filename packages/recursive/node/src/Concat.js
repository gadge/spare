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


export class Concat {
  static chain(ts, de = VO) {
    if (!ts?.length) return ''
    let i = 0, hi = ts.length, tx = ts[i]
    while (++i < hi) tx += de + ts[i]
    return tx
  }
  static stand(ts, tr = LF, id = 0) {
    if (!ts?.length) return ''
    let i = 0, hi = ts.length, tb = tabs(id), tx = tb + ts[i]
    while (++i < hi) tx += tr + tb + ts[i]
    return tx
  }
  static group(ts, de = COSP, tr = COSP, br = NONE, wd) {
    let [ L, R ] = BRAC[br]
    if (!ts?.length) return L + R
    let hi = ts.length, tx = ''
    for (let i = 0, p = (wd = min(wd, hi)), cx; i < hi; p += wd) {
      cx = L + ts[i]
      while (++i < p) cx += de + ts[i]
      tx += cx + R
      if (p < hi) tx += tr
    }
    return tx
  }
  static shape(ts, de = COSP, tr = LF, br = NONE, wd = 2, id = 0) {
    let [ L, R ] = BRSP[br]
    if (!ts?.length) return L.at(0) + R.at(-1)
    let hi = ts.length, tx = ''
    L = tabs(id) + L
    for (let i = 0, p = (wd = min(wd, hi)), cx; i < hi; p += wd) {
      cx = L + ts[i]
      while (++i < p) cx += de + ts[i]
      tx += cx + R
      if (p < hi) tx += tr
    }
    return tx
  }
  static string(ts, de = '', wd = 80, id = 0, sr = 0) {
    if (!wd) return Concat.chain(ts, de)
    const cn = ts.length, ws = ts.ws ?? ts.map(lange)
    let tx = '', cx = '', ph = '', i = 0, p = sr + ws[i], rn = false
    const tb = tabs(id), tw = tb.length, dw = de?.length
    while (i < cn) {
      if ((rn = /\n/.test(cx)) || p > wd) tx += cx + (rn ? '' : LF), cx = tb, p = tw + ws[i]
      cx += ts[i], p += ws[++i] + dw
      if (i < cn) {
        if (/[.,;:!?'"`)\]}]?\s*/.test(ph = ts[i])) cx += ph, p += ws[++i] + dw
        cx += de
      }
    }
    if (cx.length) tx += cx
    return tx
  }
  static vector(ts, de = '', wd = 80, id = 0, sr = 0) {
    const cn = ts.length, ws = ts.ws ?? ts.map(lange)
    let tx = '', cx = ' ', i = 0, p = sr + ws[i], tb = tabs(id + 2), tw = tb.length, cl = p > wd, dw = de?.length
    while (i < cn) {
      if (p > wd) tx += cx + LF, cx = tb, p = tw + ws[i]
      cx += ts[i], p += ws[++i] + dw
      if (i < cn) cx += de
    }
    if (cx.length) tx += cx + ' '
    if (cl) tx += LF + tabs(id)
    return tx
  }
  static entries(ts, de = RTSP, tr = COSP, wd = 80, id = 0, sr = 0) {
    const cn = ts.length, ws = ts.ws ?? ts.map(lange)
    let tx = '', cx = ' ', i = 0, j = 1, hi = sr + ws[i] + 2 + ws[j], tb = tabs(id + 2), tw = tb.length, cl = hi > wd,
      dw = tr?.length
    while (j < cn) {
      if (hi > wd) tx += cx + LF, cx = tb, hi = tw + ws[i] + 2 + ws[j]
      cx += ts[i] + de + ts[j] , hi += ws[i += 2] + 2 + ws[j += 2] + dw
      if (j < cn) cx += COSP
    }
    if (cx.length) tx += cx + ' '
    if (cl) tx += LF + tabs(id)
    return tx
  }
  static matrix(ts, de = COSP, wd = 2, id = 0, sr = 0) {
    if (!ts?.length) return ''
    // `[id] (${id}) [sr] (${sr}) [${ts[0]}, ${ts[1]}, ...]` |> console.log
    let L = '[', R = ']', T = tabs(id), hi = ts.length, tx = ''
    for (let i = 0, p = (wd = min(wd, hi)), cx; i < hi; p += wd) {
      cx = (i ? T : tabs(sr)) + L + ts[i]
      while (++i < p) cx += de + ts[i]
      tx += cx + R
      if (p < hi) tx += LF
    }
    return tx
  }
}