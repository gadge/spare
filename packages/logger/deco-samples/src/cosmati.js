import { RN, AEU } from '@spare/util'
import { marginSizing, Vectogin } from '@spare/vettro'
import { padMatrix } from '@spare/pad-matrix'
import { mattro } from '@spare/mattro'
import { fluoVector } from '@palett/fluo-vector'
import { fluoMatrix } from '@palett/fluo-matrix'
import { mutate } from '@vect/vector-mapper'
import { mutazip } from '@vect/vector-zipper'
import { size } from '@vect/matrix-size'
import { marginMapper as marginMapperMatrix } from '@vect/matrix-margin'
import { unwind } from '@vect/entries-unwind'
import { selectValues, lookupKeys } from '@vect/object-select'
import { intExpon } from '@aryth/math'

/**
 * @param {Object[]} samples
 * @returns {string}
 */
export const cosmati = function (samples) {
  let height, sample, keys, dye, rows
  if (!(height = samples.length)) return AEU
  if (!(sample = samples[0]) || !(keys = Object.keys(sample)) || !keys.length) return AEU
  const {
    fields, indexed, abstract, direct,
    preset, keyPreset, stringPreset, delimiter, top, bottom, left, right, ansi
  } = this
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
  rows = rowsVG.map(sample => selectValues(sample, pick)).toVector()
  let [h, w] = size(rows)
  const { raw, text } = mattro(rows, {
    top: t, bottom: b, left: l, right: r, height: h, width: w, dashX, dashY,
    abstract, hr: null, validate: false
  })
  if (preset) dye = fluoMatrix(raw, { direct, preset, stringPreset, colorant: true })
  if (keyPreset) head = fluoVector(head, { preset: keyPreset, stringPreset: keyPreset, colorant: false })
  rows = padMatrix(text, { raw, dye, ansi })
  rows = marginMapperMatrix(rows, (x, i, j) => head[j] + ':' + x, t, b, l, r)
  dashY
    ? mutate(rows, line => (line.splice(l, 0, '..'), `{ ${line.join(delimiter)} }`))
    : mutate(rows, line => `{ ${line.join(delimiter)} }`)
  if (indexed) {
    const digits = intExpon(height) + 1
    let indices = rowsVG.map((_, i) => String(i).padStart(digits)).toVector()
    if (preset) indices = fluoVector(indices, { preset, stringPreset, colorant: false })
    mutazip(rows, indices, (line, index) => '(' + index + ') ' + line)
  }
  if (dashX) rows.splice(t, 0, '...')
  return '[' + rows.join(`,${RN} `) + ']'
}

