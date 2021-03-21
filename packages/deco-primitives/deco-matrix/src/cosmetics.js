import { oneself }                              from '@ject/oneself'
import { fluoMatrix }                           from '@palett/fluo-matrix'
import { Br }                                   from '@spare/bracket'
import { COLF }                                 from '@spare/enum-chars'
import { liner }                                from '@spare/liner'
import { deco, logger }                         from '@spare/logger'
import { matrixMargin }                         from '@spare/matrix-margin'
import { matrixPadder }                         from '@spare/matrix-padder'
import { isNumeric }                            from '@typen/num-strict'
import { size }                                 from '@vect/matrix'
import { isNumeric as isNumericFull, parseNum } from '@texting/charset-fullwidth'

const fluo = fluoMatrix.bind({ colorant: false, mutate: true })

/**
 *
 * @param {*[][]} rows
 * @param {object} config
 * @param {number} config.direct
 * @param {object|object[]} config.presets
 * @param {string[]} config.effects
 * @param {boolean} config.full
 * @returns {string[][]}
 */
const matrixColour = (rows, config) => {
  if (config.presets) {
    let presets
    if (config.full) {
      if (Array.isArray(config.presets)) {
        presets = config.presets.slice().map(o => Object.assign({}, o))
        presets[0].filter = x => isNumeric(x) || isNumericFull(x)
        presets[0].mapper = parseNum
      } else {
        presets = Object.assign({}, config.presets)
        presets.filter = x => isNumeric(x) || isNumericFull(x)
        presets.mapper = parseNum
      }
    }
    const conf = Object.assign({}, config)
    conf.presets = presets
    presets |> deco |> logger
    rows = fluo(rows, config) // use: direct, presets, effects
  }
  return rows
}

export const cosmetics = function (rows = []) {
  const
    config = this,
    [height, width] = size(rows)
  if (!height || !width) return liner([], config)
  let { discrete, delim, bracket, level } = config
  const br = Br(bracket) ?? oneself
  rows = matrixMargin(rows, config) // use: top, bottom, left, right, read, rule
  rows = matrixPadder(rows, config) // use: ansi
  if (config.fluos) rows = fluoMatrix(rows, config.direct, config.fluos) // use: direct, presets, effects
  return liner(
    rows.map(line => br(line.join(delim))),
    { discrete, delim: COLF, bracket, level }
  )
}
