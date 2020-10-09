import { COLORANT }             from '@palett/enum-colorant-modes'
import { fluoMatrix }           from '@palett/fluo-matrix'
import { bracket as doBracket } from '@spare/bracket'
import { COLF }                 from '@spare/enum-chars'
import { liner }                from '@spare/liner'
import { mattro }               from '@spare/mattro'
import { padMatrix }            from '@spare/matrix-padder'
import { size }                 from '@vect/matrix'

export const cosmetics = function (matrix = []) {
  const [height, width] = size(matrix)
  if (!height || !width) return liner([], this)
  const config = this
  const { direct, presets, ansi, discrete, delim, bracket, level } = config
  const { raw, text } = mattro(
    matrix,
    Object.assign(config, { height, width }) // { top, bottom, left, right, dashX, dashY, read } = config
  )
  let dye = undefined
  if (presets) { dye = fluoMatrix.call(COLORANT, raw, direct, presets) }
  const rows = padMatrix(text, { raw, dye, ansi })
  const lines = bracket
    ? rows.map(line => line.join(delim) |> doBracket)
    : rows.map(line => line.join(delim))
  return liner(lines, { discrete, delim: COLF, bracket, level })
}

