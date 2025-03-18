import { SUBTLE } from '@palett/presets';
import { Node, parsePresm } from '@spare/node';

const { string } = Node.prototype;

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
 * @param {Opt} conf
 * @returns {(str:string,thr?:number,ind?:number,sur?:number)=>string}
 */
function DecoString(conf) {
  conf = conf ?? this ?? {};
  const presm = parsePresm(conf?.pres ?? conf, SUBTLE);
  const thres = conf.thres ?? 0, indent = conf.indent, surge = conf.surge;
  const proc = string.bind(Node.init(presm));
  return (str, thr, ind, sur) => proc(str, thr ?? thres, ind ?? indent, sur ?? surge)
}

function decoString(str, thr, ind, sur) {
  const conf = this ?? {};
  const presm = parsePresm(conf?.pres ?? conf, SUBTLE);
  const thres = conf.thres ?? 0, indent = conf.indent, surge = conf.surge;
  return string.call(Node.init(presm), str, thr ?? thres, ind ?? indent, sur ?? surge)
}

export { DecoString, decoString };
