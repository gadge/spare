import { RN, AEU } from '@spare/util'
import { marginSizing } from '@spare/vettro'
import { padMatrix } from '@spare/pad-matrix'
import { mutate } from '@vect/vector-mapper'
import { marginMapper as marginMapperMatrix } from '@vect/matrix-margin'
import { fluoMatrix } from '@palett/fluo-matrix'
import { size } from '@vect/matrix'
import { selectValues, lookupKeys } from '@vect/object-select'
import { fluoVector } from '@palett/fluo-vector'
import { unwind } from '@vect/entries-unwind'
import { mattro } from '@spare/mattro'
import { Vectogin } from '@spare/vettro'

/**
 * ({t,b,l,r,height,width,dashX,dashY})=marginSizing()
 * @param {Object[]} samples
 * @returns {string}
 */
export const cosmati = function (samples) {
  let sample, keys, dye, rows
  if (!(samples.length)) return AEU
  if (!(sample = samples[0]) || !(keys = Object.keys(sample)) || !keys.length) return AEU
  const { fields, abstract, direct, preset, keyPreset, stringPreset, delimiter, top, bottom, left, right, ansi } = this
  let [pick, head] = fields
    ? (lookupKeys.call(sample, fields) |> unwind)
    : [keys.slice(), keys.slice()]
  const { head: l, tail: r, dash: dashY } = marginSizing(pick, left, right)
  const { head: t, tail: b, dash: dashX } = marginSizing(samples, top, bottom)
  pick = new Vectogin(pick, l, r, dashY).toVector()
  head = new Vectogin(head, l, r, dashY).toVector()
  rows = new Vectogin(samples, t, b, dashX).map(sample => selectValues(sample, pick)).toVector()
  let [h, w] = size(rows)
  const { raw, text } = mattro(rows, {
    top: t, bottom: b, left: l, right: r, height: h, width: w, dashX, dashY,
    abstract, hr: null, validate: false
  })
  if (preset) dye = preset && fluoMatrix(raw, { direct, preset, stringPreset, colorant: true })
  if (keyPreset) head = fluoVector(head, { preset: keyPreset, stringPreset: keyPreset, colorant: false })
  rows = padMatrix(text, { raw, dye, ansi })
  rows = marginMapperMatrix(rows, (x, i, j) => head[j] + ':' + x, t, b, l, r)
  dashY
    ? mutate(rows, line => (line.splice(l, 0, '..'), `{${line.join(delimiter)}}`))
    : mutate(rows, line => `{${line.join(delimiter)}}`)
  if (dashX) rows.splice(t, 0, '...')
  return '[' + rows.join(`,${RN} `) + ']'
}

