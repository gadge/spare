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
 * @param {Opt} p
 * @returns {function}
 */
export const DecoMatrix = (p = {}) => {
  p.pres = p.pres ?? PRES
  return matrix.bind(new Node(p))
}

export const decoMatrix = (mat, p = {}) => {
  p.pres = p.pres ?? PRES
  // p.direct = p.direct ?? POINTWISE
  // p.indent = p.indent ?? 0
  return matrix.call(new Node(p), mat, p.direct, p.indent)
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
