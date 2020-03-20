import { size } from '@vect/matrix'
import { AEU, RN } from '@spare/enum-chars'
import { vettro } from '@spare/vettro'
import { mattro } from '@spare/mattro'
import { fluoVector } from '@palett/fluo-vector'
import { fluoMatrix } from '@palett/fluo-matrix'
import { padTable } from '@spare/pad-table'
import { liner } from '@spare/deco-util'

export const cosmetics = function (table) {
  let matrix = table.rows || table.matrix, banner = table.head || table.banner
  const [height, width] = size(matrix), labelWidth = banner && banner.length
  if (!height || !width || !labelWidth) return AEU
  const {
    direct, abstract, headAbstract, preset, stringPreset, labelPreset,
    top, left, bottom, right, ansi, fullAngle, discrete,level
  } = this
  const [x, b] = [
    mattro(matrix, { top, bottom, left, right, height, width, abstract }),
    vettro(banner, { head: left, tail: right, abstract: headAbstract }),
  ]
  const [dyeX, dyeB] = [
    preset && fluoMatrix(x.raw, { direct, preset, stringPreset, colorant: true }),
    labelPreset && fluoVector(b.raw, { preset: labelPreset, stringPreset: labelPreset, colorant: true }),
  ]
  let { head, hr, rows } = padTable(x.text, b.text, { raw: x.raw, dye: dyeX, headDye: dyeB, ansi, fullAngle })
  const lines = [
    head.join(' | '),
    hr.join('-+-')
  ].concat(
    rows.map(row => row.join(' | '))
  )
  return liner(lines,{discrete,level})
}
