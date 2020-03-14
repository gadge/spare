import { AEU, RN } from '@spare/util'
import { vettro } from '@spare/vettro'
import { mattro } from '@spare/mattro'
import { padTable } from '@spare/pad-table'
import { FRESH, JUNGLE, SUBTLE } from '@palett/presets'
import { fluoVector } from '@palett/fluo-vector'
import { fluo } from '@palett/fluo-matrix'
import { zipper } from '@vect/vector-zipper'
import { POINTWISE, size } from '@vect/matrix'
import { padSide } from '../utils/padSide'
import { HCONN, VLINE } from '../resources/conns'

/**
 *
 * @param {Object} crostab
 * @returns {string}
 */
export const cosmetics = function (crostab) {
  let matrix = crostab.rows || crostab.matrix, banner = crostab.head || crostab.banner,
    stand = crostab.side, name = crostab.title || ''
  const [height, width] = size(matrix), labelWidth = banner && banner.length, labelHeight = stand && stand.length
  if (!height || !width || !labelWidth || !labelHeight) return AEU
  const {
    direct = POINTWISE, abstract, bannerAbstract, sideAbstract,
    preset = FRESH, stringPreset = JUNGLE, labelPreset = SUBTLE,
    top = 0, left = 0, bottom = 0, right = 0, ansi = false, fullAngle = false,
  } = this
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
