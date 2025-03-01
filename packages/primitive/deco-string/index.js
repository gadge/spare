import { SUBTLE } from '@palett/presets'
import { Node }   from '@spare/node'

const { string } = Node.prototype

/**
 * @typedef {Object}    Opt
 * @typedef {?Object}   Opt.pres
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

/**
 *
 * @param {Opt}    p
 * @returns {function}
 */
export function DecoString(p = {}) {
  p.pres = p.pres ?? SUBTLE
  p.thres = p.thres ?? 0
  return string.bind(new Node(p), p.thres)
}

/**
 *
 * @param {string} str
 * @param {Opt}    [p]
 * @returns {string}
 */
export function decoString(str, p = {}) {
  p.pres = p.pres ?? SUBTLE
  p.thres = p.thres ?? 0
  return string.call(new Node(p), p.thres, str, p.indent, p.surge)
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



