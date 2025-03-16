import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { parsePresm }             from '@spare/node'
import { TableNode }              from './src/TableNode.js'

export { TableNode }

/**
 * @typedef {Object}    Opt
 * @typedef {?Preset}   Opt.pres
 * @typedef {?function} Opt.str
 * @typedef {?function} Opt.num
 * @typedef {?boolean}  Opt.ansi
 * @typedef {?string}   Opt.fill
 * @typedef {?number}   Opt.top
 * @typedef {?number}   Opt.bottom
 * @typedef {?number}   Opt.left
 * @typedef {?number}   Opt.right
 */

const PRES = { str: SUBTLE, neg: ENSIGN, pos: BESQUE }

const { table } = TableNode.prototype


/**
 * @param {Opt} conf
 * @returns {(table:*, dir?:number, ind?:number)=>string}
 */
export function DecoTable(conf) {
  conf = conf ?? this ?? {}
  // conf.fill = conf.fill ?? SP
  // conf.ansi = conf.ansi ?? true
  const direct = conf.direct
  const indent = conf.indent
  const vpm = parsePresm(conf?.pres ?? conf, PRES)
  const kpm = parsePresm(conf?.key, vpm)
  const proc = table.bind(new TableNode(kpm, vpm))
  return (table, dir, ind) => proc(table, dir ?? direct, ind ?? indent)
}

export function decoTable(tbl, dir, ind) {
  const conf = this ?? {}
  // conf.fill = conf.fill ?? SP
  // conf.ansi = conf.ansi ?? true
  const direct = conf.direct
  const indent = conf.indent
  const vpm = parsePresm(conf?.pres ?? conf, PRES)
  const kpm = parsePresm(conf?.key, vpm)
  return table.call(new TableNode(kpm, vpm), tbl, dir ?? direct, ind ?? indent)
}


/**
 * @param {Opt} conf
 * @returns {function}
 */
export function PaleTable(conf) {
  conf = conf ?? this ?? {}
  // conf.fill = conf.fill ?? SP
  // conf.ansi = conf.ansi ?? true
  const direct = conf.direct
  const indent = conf.indent
  const vpm = null // parsePresm(conf?.pres ?? conf, PRES)
  const kpm = null // parsePresm(conf?.key, vpm)
  const proc = table.bind(new TableNode(kpm, vpm))
  return (table, dir, ind) => proc(table, dir ?? direct, ind ?? indent)
}

export function paleTable(tbl, dir, ind) {
  const conf = this ?? {}
  // conf.fill = conf.fill ?? SP
  // conf.ansi = conf.ansi ?? true
  const direct = conf.direct
  const indent = conf.indent
  const vpm = null // parsePresm(conf?.pres ?? conf, PRES)
  const kpm = null // parsePresm(conf?.key, vpm)
  return table.call(new TableNode(kpm, vpm), tbl, dir ?? direct, ind ?? indent)
}

export {
  decoTable as deco,
  DecoTable as Deco,
}


// {boolean}         [p.discrete]
// {string}          [p.delim=',\n']
// {boolean|number}  [p.bracket] - currently not functional, keeps for future fix
// {Function}        [p.read]
// {Function}        [p.headRead]
// {Object|Object[]} [p.presets=[FRESH, JUNGLE]]
// {Object}          [p.labelPreset=SUBTLE]
// {number}          [p.direct=COLUMNWISE]
// {number}          [p.top]
// {number}          [p.bottom]
// {number}          [p.left]
// {number}          [p.right]
// {boolean}         [p.ansi=true]
// {boolean}         [p.fullAngle]
// {number}          [p.level=0]
