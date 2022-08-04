import { MUTATE_PIGMENT } from '@palett/enum-colorant-modes'
import { fluoMatrix }     from '@palett/fluo-matrix'
import { fluoVector }     from '@palett/fluo-vector'
import { AEU }            from '@spare/enum-chars'
import { liner }          from '@texting/liner'
import { tableMargin }    from '@spare/table-margin'
import { tablePadder }    from '@spare/table-padder'
import { size }           from '@vect/matrix'
import { acquire }        from '@vect/vector-merge'

export const decoTable = function (table) {
  const config = this
  if (!table) return AEU
  let head = table.head || table.banner, rows = table.rows || table.matrix, rule = null
  const [ height, width ] = size(rows), labelWidth = head?.length
  if (!height || !width || !labelWidth) return AEU
  table = tableMargin(table, config); // use: top, left, bottom ,right, read, headRead
  ({ head, rule, rows } = tablePadder(table, config)) // use: ansi, fullAngle
  const { presets } = config
  // presets |> deco |> logger
  if (presets) {
    const [ alpha, beta, gamma ] = presets
    head = fluoVector.call(MUTATE_PIGMENT, head, [ alpha, gamma ?? beta ])
    rows = fluoMatrix.call(MUTATE_PIGMENT, rows, config.direct, [ alpha, beta ])
  }
  const lines = acquire([
      head.join(' | '),
      rule.join('-+-')
    ],
    rows.map(row => row.join(' | ')))
  return liner(lines, config) // use: discrete, delim, level
}

// @param {Object} p
//
// @param {boolean} [p.discrete]
// @param {string} [p.delim=',\n']
// - currently not functional, keeps for future fix
// @param {boolean|number} [p.bracket] - currently not functional, keeps for future fix
//
// @param {Function} [p.read]
// @param {Function} [p.headRead]
//
// @param {Object|Object[]} [p.presets=[FRESH, JUNGLE]]
// @param {Object} [p.labelPreset=SUBTLE]
// @param {number} [p.direct=COLUMNWISE]
//
// @param {number} [p.top]
// @param {number} [p.bottom]
// @param {number} [p.left]
// @param {number} [p.right]
//
// @param {boolean} [p.ansi=true]
// @param {boolean} [p.fullAngle]
// @param {number} [p.level=0]

export class DecoTable {
  join
  delim
  bracket
  read
  headRead
  fluo
  padd
  marg
  ansi
  full
  level
  constructor(config) {

  }
  static deco(table, config) {
    const d = new DecoTable(config)

  }
  project(table) {
    table = this.simplify(table)
    if (this.marg) table = this.margin(table)
    if (this.padd) table = this.padder(table)
    if (this.fluo) table = this.pretty(table)
    if (this.join) table = this.joiner(table)
    return table
  }
  simplify(table) {

    return table
  }
  margin(table) {

    return table
  }
  padder(table) {

    return table
  }
  pretty(table) {

    return table
  }
  joiner(table) {

    return table
  }
}
