import { samplesToTabular }      from '@analys/convert'
import { samplesSelect }         from '@analys/samples-select'
import { fluoMatrix }            from '@palett/fluo-matrix'
import { fluoVector }            from '@palett/fluo-vector'
import { deco as decoVector }    from '@spare/deco-vector'
import { COLF, COSP, ELLIP, SP } from '@spare/enum-chars'
import { liner }                 from '@spare/liner'
import { matrixPadder }          from '@spare/matrix-padder'
import { tableMargin }           from '@spare/table-margin'
import { vectorPadder }          from '@spare/vector-padder'
import { zipper }                from '@vect/vector-zipper'

const MUTATE = { mutate: true }

export const cosmetics = function (samples) {
  const config = this, original = samples
  if (!(samples?.length)) return '[]'
  let { fields, indexed, bracket, discrete, level } = config
  if (fields) { samples = samplesSelect(samples, fields) }
  let table = samplesToTabular(samples, fields)
  let { head, rows } = tableMargin(table, config) // { top: 0, bottom: 0, left, right, height, width, read, headRead }
  rows = matrixPadder(rows, config)
  const { presets } = config
  if (presets) {
    head = fluoVector.call(MUTATE, head, { presets: [presets[0], presets[2]] })
    rows = fluoMatrix.call(MUTATE, rows, config)
  }
  let lines = rows.map(line => '{ ' + (zipper(head, line, (h, x) => h + ':' + x).join(COSP)) + ' }')
  if (indexed) {
    let side = Object.keys(original)
    const { top: head, bottom: tail, ansi, presets } = config
    side = decoVector(side, { head, tail, ansi, presets, discrete: true })
    side = vectorPadder(side, { ansi: true })
    lines = zipper(lines, side, (line, index) => '[' + index + ']' + SP + line)
  }
  if (config.top) lines.splice(config.top, 1, ELLIP)
  return liner(lines, { discrete, delim: COLF, bracket, level })
}



