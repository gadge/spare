import { intExpon }                           from '@aryth/math'
import { COLORANT }                           from '@palett/enum-colorant-modes'
import { fluoMatrix }                         from '@palett/fluo-matrix'
import { fluoVector }                         from '@palett/fluo-vector'
import { COLF, ELLIP }                        from '@texting/enum-chars'
import { liner }                              from '@texting/liner'
import { mattro }                             from '@spare/matrix-margin'
import { matrixPadder }                       from '@spare/matrix-padder'
import { sizing, VectorMargin }               from '@spare/vector-margin'
import { unwind }                             from '@vect/entries-unwind'
import { marginMapper as marginMapperMatrix } from '@vect/matrix-margin'
import { size }                               from '@vect/matrix-index'
import { lookupKeys, selectValues }           from '@vect/object-select'
import { mutate }                             from '@vect/vector-mapper'
import { mutazip }                            from '@vect/vector-zipper'


export const cosmetics = function (samples) {
  let height, sample, keys, dye, rows
  if (!(height = samples?.length)) return '[]'
  if (!([ sample ] = samples) || !(keys = Object.keys(sample)) || !keys.length) return '[]'
  let {
        fields, indexed, headRead, read, direct, preset, ansi,
        delim, top, bottom, left, right, bracket, discrete, level, presets
      } = this
  let [ pick, head ] = fields
    ? (unwind(lookupKeys.call(sample, fields)))
    : [ keys, keys.slice() ]
  const { head: l, tail: r, dash: dashY } = sizing(pick, left, right)
  const { head: t, tail: b, dash: dashX } = sizing(samples, top, bottom)
  const headVG = new VectorMargin(null, l, r, dashY)
  const rowsVG = new VectorMargin(samples, t, b, dashX);
  [ pick, head ] = [
    headVG.reboot(pick).toVector(),
    headVG.reboot(head).toVector()
  ]
  if (headRead) head = head.map(headRead)
  rows = rowsVG.map(sample => selectValues(sample, pick)).toVector()
  let [ h, w ] = size(rows)
  const { raw, text } = mattro(rows, {
    top: t, bottom: b, left: l, right: r, height: h, width: w, dashX, dashY,
    read: read, rule: null, validate: false
  })
  if (presets) {
    dye = fluoMatrix.call(COLORANT, raw, { direct, presets })
    head = fluoVector(head, { presets: [ presets[0], presets[2] ] })
  }
  rows = matrixPadder(text, { raw, dye, ansi })
  rows = marginMapperMatrix(rows, (x, i, j) => head[j] + ':' + x, t, b, l, r)
  dashY
    ? mutate(rows, line => (line.splice(l, 0, '..'), `{ ${line.join(delim)} }`))
    : mutate(rows, line => `{ ${line.join(delim)} }`)
  if (indexed) {
    const digits = intExpon(height) + 1
    let indices = rowsVG.map((_, i) => String(i).padStart(digits)).toVector()
    if (preset) indices = fluoVector.call({ colorant: false }, indices, presets)
    mutazip(rows, indices, (line, index) => '(' + index + ') ' + line)
  }
  if (dashX) rows.splice(t, 0, ELLIP)
  return liner(rows, { discrete, delim: COLF, bracket, level })
}

