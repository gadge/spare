import { fluo }     from '@palett/fluo-matrix'
import { fluoVector }  from '@palett/fluo-vector'
import { AEU }      from '@spare/enum-chars'
import { liner }    from '@spare/liner'
import { mattro }   from '@spare/mattro'
import { padTable } from '@spare/pad-table'
import { vettro }   from '@spare/vettro'
import { size }     from '@vect/matrix'

export const cosmetics = function (table) {
  let matrix = table.rows || table.matrix, banner = table.head || table.banner
  const [height, width] = size(matrix), labelWidth = banner && banner.length
  if (!height || !width || !labelWidth) return AEU
  const {
    direct, read, headRead, presets,
    top, left, bottom, right, ansi, fullAngle, discrete, delim, level
  } = this
  const [x, b] = [
    mattro(matrix, { top, bottom, left, right, height, width, read }),
    vettro(banner, { head: left, tail: right, read: headRead }),
  ]
  let dyeX, dyeB
  if (presets) {
    const [numericPreset, , headingPreset] = presets
    dyeX = fluo.call({ colorant: true }, x.raw, direct, presets)
    dyeB = fluoVector.call({ colorant: true }, b.raw, [numericPreset, headingPreset])
  }
  let { head, hr, rows } = padTable(x.text, b.text, { raw: x.raw, dye: dyeX, headDye: dyeB, ansi, fullAngle })
  const lines = [
    head.join(' | '),
    hr.join('-+-')
  ].concat(
    rows.map(row => row.join(' | '))
  )
  return liner(lines, { discrete, delim, level })
}
