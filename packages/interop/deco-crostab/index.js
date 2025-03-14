import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { TableNode }              from '@spare/deco-table'
import { parsePresm }             from '@spare/node'
import { SP }                     from '@texting/enum-chars'

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

const PRES = {
  str: SUBTLE,
  neg: ENSIGN,
  pos: BESQUE,
}

const { table } = TableNode.prototype


/**
 * @param {Opt} [conf]
 * @returns {(ctb:*, dir:[number], ind:[number])=>string}
 */
export function DecoCrostab(conf) {
  conf = conf ?? this ?? {}
  conf.pres = parsePresm(conf?.pres ?? conf, PRES)
  conf.fill = conf.fill ?? SP
  conf.ansi = conf.ansi ?? true
  const direct = conf.direct, indent = conf.indent
  const proc = table.bind(new TableNode(conf))
  return (ctb, dir, ind) => proc(ctb, dir ?? direct, ind ?? indent)
}

export function decoCrostab(ctb, dir, ind) {
  const conf = this ?? {}
  conf.pres = parsePresm(conf?.pres ?? conf, PRES)
  conf.fill = conf.fill ?? SP
  conf.ansi = conf.ansi ?? true
  const direct = conf.direct, indent = conf.indent
  const node = new TableNode(conf)
  return table.call(node, ctb, dir ?? direct, ind ?? indent)
}


/**
 * @param {Opt} conf
 * @returns {function}
 */
export function PaleCrostab(conf) {
  conf = conf ?? this ?? {}
  conf.pres = false
  conf.fill = conf.fill ?? SP
  conf.ansi = conf.ansi ?? true
  const direct = conf.direct, indent = conf.indent
  const proc = table.bind(new TableNode(conf))
  return (table, dir, ind) => proc(table, dir ?? direct, ind ?? indent)
}

export function paleCrostab(vec, dir, ind) {
  const conf = this ?? {}
  conf.pres = false
  conf.fill = conf.fill ?? SP
  conf.ansi = conf.ansi ?? true
  const direct = conf.direct, indent = conf.indent
  return table.call(new TableNode(conf), dir ?? direct, ind ?? indent)
}

export {
  decoCrostab as deco,
  DecoCrostab as Deco,
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
