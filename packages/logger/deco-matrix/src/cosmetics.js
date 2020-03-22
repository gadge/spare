import { liner, pipeQuote } from '@spare/deco-util'
import { mattro } from '@spare/mattro'
import { padMatrix } from '@spare/pad-matrix'
import { fluoMatrix } from '@palett/fluo-matrix'
import { size } from '@vect/matrix'
import { bracket as doBracket } from '@spare/bracket'

export const cosmetics = function (matrix) {
  if (!matrix) return String(matrix)
  const [height, width] = size(matrix)
  if (!height || !width) return liner([], this)
  const { direct, preset, stringPreset, quote, ansi, discrete, delim, bracket, level } = this
  this.read = pipeQuote(this.read, quote)
  const { raw, text } = mattro(matrix, this)
  const dye = preset && fluoMatrix(raw, { direct, preset, stringPreset, colorant: true })
  const rows = padMatrix(text, { raw, dye, ansi })
  const lines = bracket
    ? rows.map(line => line.join(delim) |> doBracket)
    : rows.map(line => line.join(delim))
  return liner(lines, { discrete, delim: ',\n', bracket, level })
}

