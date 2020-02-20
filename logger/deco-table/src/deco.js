import { FRESH, JUNGLE, SUBTLE } from '@palett/presets'
import { ROWWISE, size } from '@vect/matrix'
import { AEU, RN } from '@spare/util'
import { vettro } from '@spare/vettro'
import { mattro } from '@spare/mattro'
import { fluoVector } from '@palett/fluo-vector'
import { fluo } from '@palett/fluo-matrix'
import { padTable } from '@spare/pad-table'

/**
 *
 * @param {Object} table
 * @param {function(*):string} [abstract]
 * @param {function(*):string} [headAbstract]
 * @param {number} [top]
 * @param {number} [left]
 * @param {number} [bottom]
 * @param {number} [right]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [preset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [stringPreset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [labelPreset]
 * @param {number} [direct] pointwise = 0, rowwise = 1, columnwise = 2
 * @param {boolean} [ansi=false]
 * @param {boolean} [fullAngle=false]
 * @returns {string}
 */
export const deco = (table, {
    abstract,
    headAbstract,
    top = 0,
    left = 0,
    bottom = 0,
    right = 0,
    preset = FRESH,
    stringPreset = JUNGLE,
    labelPreset = SUBTLE,
    direct = ROWWISE,
    ansi = false,
    fullAngle = false,
  } = {}
) => {
  let matrix = table.rows || table.matrix, banner = table.head || table.banner
  const [height, width] = size(matrix), labelWidth = banner && banner.length
  if (!height || !width || !labelWidth) return AEU
  const [x, b] = [
    mattro(matrix, { top, bottom, left, right, height, width, abstract }),
    vettro(banner, { head: left, tail: right, abstract: headAbstract }),
  ]
  const [dyeX, dyeB, dyeS] = [
    preset && fluo(x.raw, { direct, preset, stringPreset, colorant: true }),
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
