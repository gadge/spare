import { AEU, RN } from '@spare/enum-chars'
import { makeQuoteAbstract } from '@spare/deco-util'
import { mattro } from '@spare/mattro'
import { padMatrix } from '@spare/pad-matrix'
import { fluoMatrix } from '@palett/fluo-matrix'
import { size } from '@vect/matrix'

/**
 *
 * @param {*[][]} matrix
 * @returns {string}
 */
export const cosmetics = function (matrix) {
  const [height, width] = size(matrix)
  if (!height || !width) return AEU
  const { direct, preset, stringPreset, delimiter, quote, ansi } = this
  this.abstract = makeQuoteAbstract(this.abstract, quote)
  const { raw, text } = mattro(matrix, this)
  const dye = preset && fluoMatrix(raw, { direct, preset, stringPreset, colorant: true })
  matrix = padMatrix(text, { raw, dye, ansi })
    .map(line => `[${line.join(delimiter)}]`)
    .join(`,${RN} `)
  return '[' + matrix + ']'
}

