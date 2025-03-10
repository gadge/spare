import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { Node }                   from '@spare/node'

/**
 * @typedef {Object}    Opt
 * @typedef {?Preset}   Opt.pres
 * @typedef {?number}   Opt.thres
 * @typedef {?number}   Opt.indent
 * @typedef {?number}   Opt.surge
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

const { vector } = Node.prototype

/**
 * @param {Opt} conf
 * @returns {function}
 */
export const DecoVector = (conf = {}) => {
  conf.pres = conf.pres ?? PRES
  conf.thres = conf.thres ?? 0
  return vector.bind(new Node(conf), conf.thres)
}

export const decoVector = (vec, conf = {}) => {
  conf.pres = conf.pres ?? PRES
  conf.thres = conf.thres ?? 0
  return vector.call(new Node(conf),vec, conf.thres,  conf.indent, conf.surge)
}

export {
  decoVector as deco,
  DecoVector as Deco
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