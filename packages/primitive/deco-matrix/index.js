import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { Node } from '@spare/node'

/**
 * @typedef {Object}    Opt
 * @typedef {?Preset}   Opt.pres
 * @typedef {?number}   Opt.direct
 * @typedef {?number}   Opt.indent
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
  pos: BESQUE,
}

const { matrix } = Node.prototype

/**
 * @param {Opt} conf
 * @returns {function}
 */
export const DecoMatrix = (conf = {}) => {
  conf.pres = conf.pres ?? PRES
  return matrix.bind(new Node(conf))
}

export const decoMatrix = (mat, conf = {}) => {
  conf.pres = conf.pres ?? PRES
  // conf.direct = conf.direct ?? POINTWISE
  // conf.indent = conf.indent ?? 0
  return matrix.call(new Node(conf), mat, conf.direct, conf.indent)
}

export {
  decoMatrix as deco,
  DecoMatrix as Deco,
}

// {Object}          p
// {boolean}         [p.discrete]
// {string}          [p.delim=', ']
// {boolean|number}  [p.bracket=true]
// {Function}        [p.read]
// {Object|Object[]} [p.presets=[FRESH, OCEAN]]
// {number}          [p.direct=ROWWISE]
// {number}          [p.top]
// {number}          [p.bottom]
// {number}          [p.left]
// {number}          [p.right]
// {boolean}         [p.ansi]
// {boolean}         [p.full]
// {number}          [p.level=0]
