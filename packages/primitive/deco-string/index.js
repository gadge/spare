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
 * @param {Opt}    conf
 * @returns {function}
 */
export function DecoString(conf) {
  conf.pres = conf.pres ?? SUBTLE
  conf.thres = conf.thres ?? 0
  return string.bind(new Node(conf), conf.thres)
}

/**
 *
 * @param {string} str
 * @param {Opt}    [conf]
 * @returns {string}
 */
export function decoString(str, conf) {
  conf.pres = conf.pres ?? SUBTLE
  conf.thres = conf.thres ?? 0
  return string.call(new Node(conf),str,  conf.thres, conf.indent, conf.surge)
}


// {string} text
// {Object} [conf]
// {number} [conf.width=80]
// {number} [conf.indent]
// {number} [conf.firstLineIndent]
// {Object[]} [conf.presets]
// {string[]} [conf.effects]
// {Function} [conf.vectify]
// {Function} [conf.joiner]



