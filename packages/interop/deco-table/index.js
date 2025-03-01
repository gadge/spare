import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { SP }                     from '@texting/enum-chars'
import { TableNode }              from './target/TableNode.js'

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

const PRES = {
  str: SUBTLE,
  neg: ENSIGN,
  pos: BESQUE
}

const { table } = TableNode.prototype

/**
 * @param {Opt} p
 * @returns {function}
 */
export const DecoTable = (p = {}) => {
  p.pres = p.pres ?? PRES
  p.fill = p.fill ?? SP
  p.ansi = p.ansi ?? true
  return table.bind(new TableNode(p))
}

export const decoTable = (vec, p = {}, id) => {
  p.pres = p.pres ?? PRES
  p.fill = p.fill ?? SP
  p.ansi = p.ansi ?? true
  return table.call(new TableNode(p), vec, p.direct, id ?? p.indent)
}

/**
 * @param {Opt} p
 * @returns {function}
 */
export const PaleTable = (p = {}) => {
  p.fill = p.fill ?? SP
  p.ansi = p.ansi ?? true
  return table.bind(new TableNode(p))
}

export const paleTable = (vec, p = {}, id) => {
  p.fill = p.fill ?? SP
  p.ansi = p.ansi ?? true
  return table.call(new TableNode(p), vec, p.direct, id ?? p.indent)
}

export {
  decoTable as deco,
  DecoTable as Deco
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
