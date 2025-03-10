import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { SP }                     from '@texting/enum-chars'
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

const PRES = {
  str: SUBTLE,
  neg: ENSIGN,
  pos: BESQUE
}

const { table } = TableNode.prototype

/**
 * @param {Opt} conf
 * @returns {function}
 */
export const DecoTable = (conf = {}) => {
  conf.pres = conf.pres ?? PRES
  conf.fill = conf.fill ?? SP
  conf.ansi = conf.ansi ?? true
  return table.bind(new TableNode(conf))
}

export const decoTable = (vec, conf = {}, ind) => {
  conf.pres = conf.pres ?? PRES
  conf.fill = conf.fill ?? SP
  conf.ansi = conf.ansi ?? true
  return table.call(new TableNode(conf), vec, conf.direct, ind ?? conf.indent)
}

/**
 * @param {Opt} conf
 * @returns {function}
 */
export const PaleTable = (conf = {}) => {
  conf.fill = conf.fill ?? SP
  conf.ansi = conf.ansi ?? true
  return table.bind(new TableNode(conf))
}

export const paleTable = (vec, conf = {}, id) => {
  conf.fill = conf.fill ?? SP
  conf.ansi = conf.ansi ?? true
  return table.call(new TableNode(conf), vec, conf.direct, id ?? conf.indent)
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
