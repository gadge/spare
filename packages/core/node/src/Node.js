import { hexToRgi }                                                from '@palett/convert'
import { Pres, Presm, randPres }                                   from '@palett/pres'
import { serialEntries, serialMatrix, serialObject, serialVector } from '@spare/serial'
import { BRACKET, NONE }                                           from '@texting/enum-brackets'
import { COLF, COSP, LF, RTSP }                                    from '@texting/enum-chars'
import { splitLiteral }                                            from '@texting/splitter'
import { OBJ, STR }                                                from '@typen/enum-data-types'
import { width }                                                   from '@vect/matrix-index'
import { Fold, tabs }                                              from './Fold.js'
import { parsePres }                                               from './utils/parsePresm.js'

export class Node extends Presm {
  constructor(xb, xp, yb, yp, zb, zp, nan) {
    super(xb, xp, yb, yp, zb, zp, nan)
  }

  /**
   * @param {Pres} [xbd] - a Pres maps x bound.
   * @param {Pres} [ybd] - a Pres maps y bound.
   * @param {Pres} [zbd] - a Pres maps z bound.
   * @param {string|number} [nan] - if input string, convert to RGI.
   * @returns {Node} - A new Pres instance.
   */
  static build(xbd, ybd, zbd, nan) {
    nan = typeof nan === STR ? hexToRgi(nan) : (nan ?? xbd?.nan ?? ybd?.nan ?? zbd?.nan ?? undefined)
    return new Node(xbd?.min, xbd?.max, ybd?.min, ybd?.max, zbd?.min, zbd?.max, nan)
  }

  static init(o) {
    if (typeof o === STR && o.startsWith('#')) { return Node.build(o = randPres(o), o) } // string -> make presm
    if (typeof o === OBJ) {
      if (o instanceof Pres) return Node.build(o, o) // pres -> make presm
      if (o instanceof Presm) return Node.from(o) // presm -> pass presm
      const str = o.str, pos = o.num ?? o.pos, neg = o.neg, nan = o.nan
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
    const vector = splitLiteral(str)
    const serial = serialVector.call(this, vector)
    return Fold.string(serial, '', thr, ind, sur)
  }

  vector(vec, thr, ind = 0, sur = 0) {
    const serial = serialVector.call(this, vec)
    const len = vec?.length ?? 0
    if (len === 0) return '[]'
    if (thr > 0) return '[' + Fold.vector(serial, COSP, thr, ind, sur) + ']'
    if (len === 1) return '[ ' + Fold.chain(serial, COSP) + ' ]'
    if (thr === 0) return '[' + LF + Fold.stand(serial, COLF, ind + 2) + LF + tabs(ind) + ']'
    return '[ ' + Fold.chain(serial, COSP) + ' ]'
  }

  object(obj, thr, ind = 0, sur = 0) {
    const serial = serialObject.call(this, obj)
    const len = serial.length
    if (len === 0) return '{}'
    if (thr > 0) return '{' + Fold.entries(serial, RTSP, COLF, thr, ind, sur + 2) + '}'
    if (len === 2) return '{ ' + Fold.group(serial, RTSP, COSP, NONE, 2) + ' }'
    if (thr === 0) return '{' + LF + Fold.shape(serial, RTSP, COLF, NONE, 2, ind + 2) + LF + tabs(ind) + '}'
    return '{ ' + Fold.group(serial, RTSP, COSP, NONE, 2) + ' }'
  }

  entries(ent, thr, ind = 0, sur = 0) {
    const len = ent?.length ?? 0
    const serial = serialEntries.call(this, ent, thr === 0 && len > 1)
    if (len === 0) return '[]'
    if (thr > 0) return '[' + Fold.entries(serial, COSP, COLF, thr, ind, sur + 2) + ']'
    if (len === 2) return '[ ' + Fold.group(serial, COSP, COSP, BRACKET, 2) + ' ]'
    if (thr === 0) return '[' + LF + Fold.shape(serial, COSP, COLF, BRACKET, 2, ind + 2) + LF + tabs(ind) + ']'
    return '[ ' + Fold.group(serial, COSP, COSP, BRACKET, 2) + ' ]'
  }

  matrix(mat, direct, ind = 0) {
    const serial = serialMatrix.call(this, mat, direct)
    const len = serial?.length ?? 0, wd = width(mat)
    if (len <= wd) return '[[ ' + Fold.chain(serial, COSP) + ' ]]'
    return '[' + LF + Fold.shape(serial, COSP, COLF, BRACKET, wd, ind + 2) + LF + tabs(ind) + ']'
  }
}

