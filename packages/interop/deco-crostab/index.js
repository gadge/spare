import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { TableNode }              from '@spare/deco-table'
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
  pos: BESQUE
}

const { table } = TableNode.prototype

/**
 * @param {Opt} conf
 * @returns {function}
 */
export const DecoCrostab = (conf = {}) => {
  conf.pres = conf.pres ?? PRES
  conf.fill = conf.fill ?? SP
  conf.ansi = conf.ansi ?? true
  return table.bind(new TableNode(conf))
}

export const decoCrostab = (vec, conf = {}, ind) => {
  conf.pres = conf.pres ?? PRES
  conf.fill = conf.fill ?? SP
  conf.ansi = conf.ansi ?? true
  return table.call(new TableNode(conf), vec, conf.direct, ind ?? conf.indent)
}

/**
 * @param {Opt} conf
 * @returns {function}
 */
export const PaleCrostab = (conf = {}) => {
  conf.fill = conf.fill ?? SP
  conf.ansi = conf.ansi ?? true
  return table.bind(new TableNode(conf))
}

export const paleCrostab = (vec, conf = {}, ind) => {
  conf.fill = conf.fill ?? SP
  conf.ansi = conf.ansi ?? true
  return table.call(new TableNode(conf), vec, conf.direct, ind ?? conf.indent)
}

export {
  decoCrostab as deco,
  DecoCrostab as Deco
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
