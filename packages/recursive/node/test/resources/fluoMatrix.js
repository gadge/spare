import { boundaries }    from '@aryth/bound-matrix'
import { oneself }       from '@ject/oneself'
import { hslToHex }      from '@palett/convert'
import { Proj }          from '@palett/projector'
import { BRACKET }       from '@spare/enum-brackets'
import { matrixMargin }  from '@spare/matrix-margin'
import { matrixPadder }  from '@spare/matrix-padder'
import { br }            from '@texting/bracket'
import { COSP }          from '@texting/enum-chars'
import { valid }         from '@typen/nullish'
import { height, width } from '@vect/matrix-index'
import { mapper }        from '@vect/matrix-mapper'


export function fluoMatrix(rows = []) {
  const config = this, ht = height(rows), wd = width(rows)
  if (!ht || !wd) return rows
  rows = matrixMargin(rows, config) // use: top, bottom, left, right, read, rule
  rows = matrixPadder(rows, config) // use: ansi
  rows = matrixPretty(rows, config.presets) // use: direct, presets, effects
  return rows.map(row => br(row.join(COSP), BRACKET))
  // const br = Br(bracket) ?? oneself
  // return liner(rows.map(row => br(row.join(delim))), { discrete, delim: COLF, bracket, level })
}

/**
 * @typedef {Object|Preset} Preset
 * @typedef {string} Preset.min
 * @typedef {string} Preset.max
 * @typedef {string} Preset.na
 * @typedef {string[]} Preset.effects
 * @typedef {Function} Preset.by
 * @typedef {Function} Preset.to
 *
 * @param {*[][]} matrix
 * @param {Preset[]} opts
 * @returns {*[][]}
 */
export const matrixPretty = function (matrix, opts) {
  const h = height(matrix), w = width(matrix)
  if (!h || !w) return [ [] ]
  if (!opts) return matrix
  const [ cX, cY ] = opts
  const [ mX, mY ] = boundaries(matrix, opts)
  const [ pX, pY ] = [ Proj.from(mX, cX), Proj.from(mY, cY) ]
  const projectors = [ [ mX, pX ], [ mY, pY ] ]
  return mapper(matrix, Thrust.render(projectors))
}


export class Thrust {
  static into([ [ bX, pX ], [ bY, pY ] ]) {
    function toHex(hsl) { return hsl ? hslToHex(hsl) : null }
    return (_, i, j) => {
      let v
      if (valid(v = bX && bX[i][j])) { return toHex(pX.into(v)) }
      if (valid(v = bY && bY[i][j])) { return toHex(pY.into(v)) }
      return null
    }
  }
  static make([ [ bX, pX ], [ bY, pY ] ]) {
    return (_, i, j) => {
      let v
      if (valid(v = bX && bX[i][j])) { return pX.make(v) }
      if (valid(v = bY && bY[i][j])) { return pY.make(v) }
      return (pX || pY)?.make(pX.nap) ?? oneself
    }
  }
  static render([ [ bX, pX ], [ bY, pY ] ]) {
    return (n, i, j) => {
      let v
      if (valid(v = bX && bX[i][j])) { return pX.render(v, n) }
      if (valid(v = bY && bY[i][j])) { return pY.render(v, n) }
      return (pX || pY)?.render(pX.nap, n) ?? n
    }
  }
}