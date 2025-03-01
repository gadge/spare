import { COLORANT }      from '@palett/enum-colorant-modes'
import { fluoMatrix }    from '@palett/fluo-matrix'
import { bracket as br } from '@texting/bracket'
import { COLF }          from '@texting/enum-chars'
import { liner }         from '@texting/liner'
import { mattro }        from '@spare/matrix-margin'
import { matrixPadder }  from '@spare/matrix-padder'
import { size }          from '@vect/matrix'

const fluo = fluoMatrix.bind(COLORANT)

export const cosmetics = function (matrix = []) {
  const [height, width] = size(matrix)
  if (!height || !width) return liner([], this)
  const config = this
  const { direct, presets, ansi, discrete, delim, bracket, level } = config
  const { raw, alt } = mattro(matrix, Object.assign(config, { height, width })) // { top, bottom, left, right, dashX, dashY, read } = config
  const dye = presets ? fluo(raw, direct, presets) : undefined
  const rows = matrixPadder(alt, { raw, dye, ansi })
  const lines = bracket
    ? rows.map(line => line.join(delim) |> br)
    : rows.map(line => line.join(delim))
  return liner(lines, { discrete, delim: COLF, bracket, level })
}

