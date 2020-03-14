import { FRESH, JUNGLE, SUBTLE } from '@palett/presets'
import { COLUMNWISE, size } from '@vect/matrix'
import { AEU, RN } from '@spare/util'
import { vettro } from '@spare/vettro'
import { mattro } from '@spare/mattro'
import { fluoVector } from '@palett/fluo-vector'
import { fluoMatrix } from '@palett/fluo-matrix'
import { padTable } from '@spare/pad-table'

/**
 *
 * @param {Object} table
 * @returns {string}
 */
export const cosmetics = function (table) {
  let matrix = table.rows || table.matrix, banner = table.head || table.banner
  const [height, width] = size(matrix), labelWidth = banner && banner.length
  if (!height || !width || !labelWidth) return AEU
  const {
    direct = COLUMNWISE, abstract, headAbstract, preset = FRESH, stringPreset = JUNGLE, labelPreset = SUBTLE,
    top = 0, left = 0, bottom = 0, right = 0, ansi = false, fullAngle = false,
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
  return [
    head.join(' | '),
    hr.join('-+-')
  ].concat(
    rows.map(row => row.join(' | '))
  ).join(RN)
}
