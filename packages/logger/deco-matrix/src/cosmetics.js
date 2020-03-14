import { AEU, RN } from '@spare/enum-chars'
import { makeQuoteAbstract } from '@spare/deco-util'
import { mattro } from '@spare/mattro'
import { padMatrix } from '@spare/pad-matrix'
import { fluoMatrix } from '@palett/fluo-matrix'
import { size } from '@vect/matrix'

export const cosmetics = function (matrix) {
  const [height, width] = size(matrix)
  if (!height || !width) return AEU
  const { direct, preset, stringPreset, quote, ansi, bracket, discrete } = this
  let { delimiter } = this
  this.abstract = makeQuoteAbstract(this.abstract, quote)
  const { raw, text } = mattro(matrix, this)
  const dye = preset && fluoMatrix(raw, { direct, preset, stringPreset, colorant: true })
  const rows = padMatrix(text, { raw, dye, ansi })
  const lines = bracket
    ? rows.map(line => `[${line.join(delimiter)}]`)
    : rows.map(line => `${line.join(delimiter)}`)
  return discrete
    ? lines
    : bracket
      ? '[' + lines.join(`,${RN} `) + ']'
      : lines.join(`,${RN}`)

}

