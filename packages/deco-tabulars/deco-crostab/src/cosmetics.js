import { fluoMatrix }    from '@palett/fluo-matrix'
import { fluoVector }    from '@palett/fluo-vector'
import { crostabMargin } from '@spare/crostab-margin'
import { crostabPadder } from '@spare/crostab-padder'
import { AEU }           from '@spare/enum-chars'
import { liner }         from '@spare/liner'
import { size }          from '@vect/matrix'
import { acquire }       from '@vect/vector-merge'
import { zipper }        from '@vect/vector-zipper'
import { HCONN, VLINE }  from '../resources/conns'

const MUTATE = { mutate: true }

export const cosmetics = function (crostab) {
  if (!crostab) return AEU
  const config = this
  const [height, width] = size(crostab.rows), labelWidth = crostab.head?.length, labelHeight = crostab.side?.length
  if (!height || !width || !labelWidth || !labelHeight) return AEU
  crostab = crostabMargin(crostab, config) // use: top, bottom, left, right, height, width, read, sideRead, headRead
  crostab = crostabPadder(crostab, config) // use: ansi, fullAngle
  const { presets } = config
  if (presets) {
    const vectorPresets = { presets: [presets[0], presets[2]] }
    crostab.side = fluoVector.call(MUTATE, crostab.side, vectorPresets)
    crostab.head = fluoVector.call(MUTATE, crostab.head, vectorPresets)
    crostab.rows = fluoMatrix.call(MUTATE, crostab.rows, config) // use: direct, presets
  }
  const lines = acquire(
    [
      crostab.title + VLINE + crostab.head.join(VLINE),
      crostab.rule.join(HCONN)
    ],
    zipper(
      crostab.side,
      crostab.rows, (s, r) => s + VLINE + r.join(VLINE)
    )
  )
  return liner(lines, config) // use: discrete, delim, level
}
