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

const { object } = Node.prototype

/**
 * @param {Opt} conf
 * @returns {function}
 */
export const DecoObject = (conf = {}) => {
  conf.pres = conf.pres ?? PRES
  conf.thres = conf.thres ?? 0
  return object.bind(new Node(conf), conf.thres)
}

export const decoObject = (obj, conf = {}) => {
  conf.pres = conf.pres ?? PRES
  conf.thres = conf.thres ?? 0
  return object.call(new Node(conf), obj, conf.thres, conf.indent, conf.surge)
}

export {
  decoObject as deco,
  DecoObject as Deco
}

// {boolean}        [p.discrete]
// {string}         [p.dash=': ']
// {string}         [p.delim=',\n']
// {boolean|number} [p.bracket=true]
// {Function}       [p.keyRead]
// {Function}       [p.read]
// {Object[]}       [p.presets=[FRESH,PLANET]]
// {number}         [p.head]
// {number}         [p.tail]
// {boolean}        [p.ansi]
// {number}         [p.level]