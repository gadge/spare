import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { Node }                   from '@spare/node'

/**
 * @typedef {Object}    Opt
 * @typedef {?Preset}   Opt.pres
 * @typedef {?number}   Opt.indent
 * @typedef {?number}   Opt.thres
 * @typedef {?function} Opt.str
 * @typedef {?function} Opt.num
 * @typedef {?boolean}  Opt.ansi
 * @typedef {?string}   Opt.fill
 * @typedef {?number}   Opt.head
 * @typedef {?number}   Opt.tail
 */

const PRES = {
  str: SUBTLE,
  neg: ENSIGN,
  pos: BESQUE
}

const { entries } = Node.prototype

/**
 * @param {Opt} conf
 * @returns {function}
 */
export const DecoEntries = (conf = {}) => {
  conf.pres = conf.pres ?? PRES
  conf.thres = conf.thres ?? 0
  return entries.bind(new Node(conf), conf.thres)
}

export const decoEntries = (ent, conf = {}) => {
  conf.pres = conf.pres ?? PRES
  conf.thres = conf.thres ?? 0
  return entries.call(new Node(conf), ent, conf.thres, conf.indent)
}

export {
  decoEntries as deco,
  DecoEntries as Deco
}

// {boolean}         [p.discrete]
// {string}          [p.dash=') ']
// {string}          [p.delim=',\n']
// {boolean|number}  [p.bracket=true] - BRK = 1
// {boolean}         [p.indexed=true]
// {Function}        [p.read]
// {Object|Object[]} [p.presets=[FRESH,JUNGLE]]
// {number}          [p.head]
// {number}          [p.tail]
// {boolean}         [p.ansi]
// {number}          [p.level=0]


// {Object} p
// {boolean}         [p.discrete]
// {string}          [p.dash=' > ']
// {string}          [p.delim='\n']
// {boolean|number}  [p.bracket=true]
// {Function}        [p.keyRead]
// {Function}        [p.read]
// {Object|Object[]} [p.presets=[FRESH, OCEAN]]
// {number}          [p.head]
// {number}          [p.tail]
// {boolean}         [p.ansi]
// {number}          [p.level=0]
