import { AEU, RN } from '@spare/enum-chars'
import { vettro } from '@spare/vettro'
import { mattro } from '@spare/mattro'
import { padTable } from '@spare/pad-table'
import { fluoVector } from '@palett/fluo-vector'
import { fluo } from '@palett/fluo-matrix'
import { zipper } from '@vect/vector-zipper'
import { POINTWISE, size } from '@vect/matrix'
import { padSide } from '../utils/padSide'
import { HCONN, VLINE } from '../resources/conns'

export const cosmetics = function (crostab) {
  let matrix = crostab.rows || crostab.matrix.bind(crostab), banner = crostab.head || crostab.banner,
    stand = crostab.side, name = crostab.title || ''
  const [height, width] = size(matrix), labelWidth = banner && banner.length, labelHeight = stand && stand.length
  if (!height || !width || !labelWidth || !labelHeight) return AEU
  const {
    direct = POINTWISE, abstract, bannerAbstract, sideAbstract,
    preset, stringPreset, labelPreset,
    top, left, bottom, right, ansi, fullAngle, discrete
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
  const lines = [
    title + VLINE + head.join(VLINE),
    br + HCONN + hr.join(HCONN)
  ].concat(
    zipper(side, rows, (sd, row) => sd + VLINE + row.join(VLINE))
  )
  return discrete ? lines : lines.join(RN)
}
