import { AEU, RN } from '@spare/util'
import { vettro } from '@spare/vettro'
import { mattro } from '@spare/mattro'
import { padTable } from '@spare/pad-table'
import { FRESH, JUNGLE, SUBTLE } from '@palett/presets'
import { fluoVector } from '@palett/fluo-vector'
import { fluo } from '@palett/fluo-matrix'
import { zipper } from '@vect/vector-zipper'
import { ROWWISE, size } from '@vect/matrix'
import { padSide } from './padSide'

const VLINE = ' | ', HCONN = '-+-'
/**
 *
 * @param {Object} table
 * @param {function(*):string} [abstract]
 * @param {function(*):string} [bannerAbstract]
 * @param {function(*):string} [sideAbstract]
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
    bannerAbstract,
    sideAbstract,
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
  let matrix = table.rows || table.matrix, banner = table.head || table.banner,
    stand = table.side, name = table.title || ''
  const [height, width] = size(matrix), labelWidth = banner && banner.length, labelHeight = stand && stand.length
  if (!height || !width || !labelWidth || !labelHeight) return AEU
  const [x, b, s] = [
    mattro(matrix, { top, bottom, left, right, height, width, abstract }),
    vettro(banner, { head: left, tail: right, abstract: bannerAbstract }),
    vettro(stand, { head: top, tail: bottom, abstract: sideAbstract }),
  ]
  const [dyeX, dyeB, dyeS] = [
    preset && fluo(x.raw, { direct, preset, stringPreset, colorant: true }),
    labelPreset && fluoVector(b.raw, { preset: labelPreset, stringPreset: labelPreset, colorant: true }),
    labelPreset && fluoVector(s.raw, { preset: labelPreset, stringPreset: labelPreset, colorant: true }),
  ]
  let { title, hr: br, side } = padSide(s.text, name, { dye: dyeS, fullAngle })
  let { head, hr, rows } = padTable(x.text, b.text, { raw: x.raw, dye: dyeX, headDye: dyeB, ansi, fullAngle })
  return [
    title + VLINE + head.join(VLINE),
    br + HCONN + hr.join(HCONN)
  ].concat(
    zipper(side, rows, (sd, row) => sd + VLINE + row.join(VLINE))
  ).join(RN)
}
