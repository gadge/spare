import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { Typo }                   from '@spare/deco'
import { SP }                     from '@texting/enum-chars'

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

const { entries } = Typo.prototype

/**
 * @param {Opt} p
 * @returns {function}
 */
export const DecoEntries = (p = {}) => {
  p.pres = p.pres ?? PRES
  p.fill = p.fill ?? SP
  p.ansi = p.ansi ?? true
  return entries.bind(new Typo(p))
}

export const decoEntries = (vec, p = {}, th, id, sr) => {
  p.pres = p.pres ?? PRES
  p.fill = p.fill ?? SP
  p.ansi = p.ansi ?? true
  return entries.call(new Typo(p), p, th, id, sr)
}

/**
 * @param {Opt} p
 * @returns {function}
 */
export const PaleEntries = (p = {}) => {
  p.fill = p.fill ?? SP
  p.ansi = p.ansi ?? true
  return entries.bind(new Typo(p))
}

export const paleEntries = (vec, p = {}, th, id, sr) => {
  p.fill = p.fill ?? SP
  p.ansi = p.ansi ?? true
  return entries.call(new Typo(p), p, th, id, sr)
}

export {
  decoEntries as deco,
  DecoEntries as Deco,
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
