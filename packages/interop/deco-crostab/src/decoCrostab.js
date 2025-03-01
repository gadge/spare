import { fluoMatrix }    from '@palett/fluo-matrix'
import { fluoVector }    from '@palett/fluo-vector'
import { crostabMargin } from '@spare/crostab-margin'
import { crostabPadder } from '@spare/crostab-padder'
import { AEU }           from '@texting/enum-chars'
import { liner }         from '@texting/liner'
import { size }          from '@vect/matrix'
import { acquire }       from '@vect/vector-merge'
import { zipper }        from '@vect/vector-zipper'
import { HCONN, VLINE }  from '../resources/conns'

const MUTATE = { mutate: true }

/**
 *
 * @param {{side:string[],head:string[],rows:string[]}} crostab
 * @param {object} config
 * @param {number} [config.direct]
 * @param {object|object[]} [config.presets]
 * @param {string[]} [config.effects]
 * @returns {*}
 */
export const crostabPigment = (crostab, config = {}) => {
  const { presets } = config
  if (!presets) return crostab
  const [alpha, beta, gamma] = presets
  const presetLabels = [alpha, gamma ?? beta], presetPoints = [alpha, beta]
  crostab.side = fluoVector.call(MUTATE, crostab.side, presetLabels)
  crostab.head = fluoVector.call(MUTATE, crostab.head, presetLabels)
  crostab.rows = fluoMatrix.call(MUTATE, crostab.rows, config.direct, presetPoints) // use: direct, presets
  return crostab
}

export const decoCrostab = function (crostab) {
  if (!crostab) return AEU
  const config = this
  const [height, width] = size(crostab.rows), labelWidth = crostab.head?.length, labelHeight = crostab.side?.length
  if (!height || !width || !labelWidth || !labelHeight) return AEU
  crostab = crostabMargin(crostab, config) // use: top, bottom, left, right, height, width, read, sideRead, headRead
  crostab = crostabPadder(crostab, config) // use: ansi, fullAngle
  crostab = crostabPigment(crostab, config) // use: presets
  const lines = acquire([
      crostab.title + VLINE + crostab.head.join(VLINE),
      crostab.rule.join(HCONN)
    ],
    zipper(
      crostab.side,
      crostab.rows, (s, r) => s + VLINE + r.join(VLINE)
    ))
  return liner(lines, config) // use: discrete, delim, level
}
