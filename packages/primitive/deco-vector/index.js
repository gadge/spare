import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { Typo }                   from '@spare/deco'

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
  pos: BESQUE,
}

const { vector } = Typo.prototype

/**
 * @param {Opt} p
 * @returns {function}
 */
export const DecoVector = (p = {}) => {
  p.pres = p.pres ?? PRES
  return vector.bind(new Typo(p))
}

export const decoVector = (vec, p = {}) => {
  p.pres = p.pres ?? PRES
  return vector.call(new Typo(p), vec, p.thres, p.indent, p.surge)
}

export {
  decoVector as deco,
  DecoVector as Deco,
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