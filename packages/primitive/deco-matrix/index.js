import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { Typo }                   from '@spare/deco'
import { SP }                     from '@spare/enum-chars'

/**
 * @typedef {Object}    Opt
 * @typedef {?Preset}   Opt.pres
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

const { matrix } = Typo.prototype

/**
 * @param {Opt} p
 * @returns {function}
 */
export const DecoMatrix = (p = {}) => {
  p.pres = p.pres ?? PRES
  p.fill = p.fill ?? SP
  p.ansi = p.ansi ?? true
  return matrix.bind(new Typo(p))
}

export const decoMatrix = (vec, p = {}, th, id, sr) => {
  p.pres = p.pres ?? PRES
  p.fill = p.fill ?? SP
  p.ansi = p.ansi ?? true
  return matrix.call(new Typo(p), p, th, id, sr)
}

/**
 * @param {Opt} p
 * @returns {function}
 */
export const PaleMatrix = (p = {}) => {
  p.fill = p.fill ?? SP
  p.ansi = p.ansi ?? true
  return matrix.bind(new Typo(p))
}

export const paleMatrix = (vec, p = {}, th, id, sr) => {
  p.fill = p.fill ?? SP
  p.ansi = p.ansi ?? true
  return matrix.call(new Typo(p), p, th, id, sr)
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
