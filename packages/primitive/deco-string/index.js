import { Typo } from '@spare/deco'

const { string } = Typo.prototype

/**
 * @typedef {Object}    Opt
 * @typedef {?Object}   Opt.pres
 * @typedef {?function} Opt.str
 * @typedef {?function} Opt.num
 * @typedef {?boolean}  Opt.ansi
 * @typedef {?string}   Opt.fill
 * @typedef {?number}   Opt.head
 * @typedef {?number}   Opt.tail
 */

/**
 *
 * @param {string} str
 * @param {Opt}    [p]
 * @param {number} [th]
 * @param {number} [id]
 * @param {number} [sr]
 * @returns {string}
 */
export function decoString(str, p = {}, th, id, sr) {
  return string.call(new Typo(p), str, th, id, sr)
}

/**
 *
 * @param {Opt}    p
 * @returns {function}
 */
export function DecoString(p = {}) {
  return string.bind(new Typo(p))
}

// {string} text
// {Object} [p]
// {number} [p.width=80]
// {number} [p.indent]
// {number} [p.firstLineIndent]
// {Object[]} [p.presets]
// {string[]} [p.effects]
// {Function} [p.vectify]
// {Function} [p.joiner]



