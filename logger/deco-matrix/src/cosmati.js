import { RN, AEU } from '@spare/util'
import { mattro } from '@spare/mattro'
import { padMatrix } from '@spare/pad-matrix'
import { FRESH, JUNGLE } from '@palett/presets'
import { fluo } from '@palett/fluo-matrix'
import { ROWWISE, size } from '@vect/matrix'

/**
 *
 * @param {*[][]} matrix
 * @returns {string}
 */
export const cosmati = function (matrix) {
  const [height, width] = size(matrix)
  if (!height || !width) return AEU
  const { direct = ROWWISE, preset = FRESH, stringPreset = JUNGLE, delimiter = ', ', ansi = false } = this
  const { raw, text } = mattro(matrix, this)
  const dye = preset && fluo(raw, { direct, preset, stringPreset, colorant: true })
  matrix = padMatrix(text, { raw, dye, ansi })
    .map(line => `[${line.join(delimiter)}]`)
    .join(`,${RN} `)
  return '[' + matrix + ']'
}

