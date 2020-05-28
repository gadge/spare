import { intExpon }                           from '@aryth/math'
import { fluo }                               from '@palett/fluo-matrix'
import { fluoVec }                            from '@palett/fluo-vector'
import { COLF }                               from '@spare/enum-chars'
import { liner }                              from '@spare/liner'
import { mattro }                             from '@spare/mattro'
import { padMatrix }                          from '@spare/pad-matrix'
import { Qt }                                 from '@spare/quote'
import { marginSizing, Vectogin }             from '@spare/vettro'
import { unwind }                             from '@vect/entries-unwind'
import { marginMapper as marginMapperMatrix } from '@vect/matrix-margin'
import { size }                               from '@vect/matrix-size'
import { lookupKeys, selectValues }           from '@vect/object-select'
import { mutate }                             from '@vect/vector-mapper'
import { mutazip }                            from '@vect/vector-zipper'

export const cosmetics = function (samples) {
  let height, sample, keys, dye, rows
  if (!(height = samples.length)) return '[]'
  if (!(sample = samples[0]) || !(keys = Object.keys(sample)) || !keys.length) return '[]'
  const {
    fields, indexed, headRead, read, direct,
    preset, keyPreset, stringPreset, ansi
  } = this
  let { delim, quote, top, bottom, left, right, bracket, discrete, level, colors } = this
  let [pick, head] = fields
    ? (lookupKeys.call(sample, fields) |> unwind)
    : [keys, keys.slice()]
  const { head: l, tail: r, dash: dashY } = marginSizing(pick, left, right)
  const { head: t, tail: b, dash: dashX } = marginSizing(samples, top, bottom)
  const headVG = new Vectogin(null, l, r, dashY)
  const rowsVG = new Vectogin(samples, t, b, dashX);
  [pick, head] = [
    headVG.reboot(pick).toVector(),
    headVG.reboot(head).toVector()
  ]
  if (headRead) head = head.map(headRead)
  rows = rowsVG.map(sample => selectValues(sample, pick)).toVector()
  let [h, w] = size(rows)
  const { raw, text } = mattro(rows, {
    top: t, bottom: b, left: l, right: r, height: h, width: w, dashX, dashY,
    read: Qt(read, quote), hr: null, validate: false
  })
  if (colors) dye = fluo.call({ colorant: true }, raw, direct, colors)
  if (keyPreset) head = fluoVec.call({ colorant: false }, head, colors)
  rows = padMatrix(text, { raw, dye, ansi })
  rows = marginMapperMatrix(rows, (x, i, j) => head[j] + ':' + x, t, b, l, r)
  dashY
    ? mutate(rows, line => (line.splice(l, 0, '..'), `{ ${line.join(delim)} }`))
    : mutate(rows, line => `{ ${line.join(delim)} }`)
  if (indexed) {
    const digits = intExpon(height) + 1
    let indices = rowsVG.map((_, i) => String(i).padStart(digits)).toVector()
    if (preset) indices = fluoVec.call({ colorant: false }, indices, colors)
    mutazip(rows, indices, (line, index) => '(' + index + ') ' + line)
  }
  if (dashX) rows.splice(t, 0, '...')
  return liner(rows, { discrete, delim: COLF, bracket, level })
}

