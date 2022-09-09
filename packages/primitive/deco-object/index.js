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

const { object } = Typo.prototype

/**
 * @param {Opt} p
 * @returns {function}
 */
export const DecoObject = (p = {}) => {
  p.pres = p.pres ?? PRES
  p.thres = p.thres ?? 0
  return object.bind(new Typo(p), p.thres)
}

export const decoObject = (obj, p = {}) => {
  p.pres = p.pres ?? PRES
  p.thres = p.thres ?? 0
  return object.call(new Typo(p), p.thres, obj, p.indent, p.surge)
}

export {
  decoObject as deco,
  DecoObject as Deco,
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