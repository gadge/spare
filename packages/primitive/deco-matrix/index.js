import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets';
import { Node, parsePresm } from '@spare/node';

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

const PRES = { str: SUBTLE, neg: ENSIGN, pos: BESQUE };
const { matrix } = Node.prototype;
// const POINTWISE = 0;
// const ROWWISE = 1;
// const COLUMNWISE = 2;


/**
 * @param {Opt} conf
 * @returns {(matrix:*[][],thr?:number,ind?:number,sur?:number)=>string}
 */
function DecoMatrix(conf) {
  conf = conf ?? this ?? {};
  const presm = parsePresm(conf?.pres ?? conf, PRES);
  const direct = conf.direct, indent = conf.indent;
  const proc = matrix.bind(Node.init(presm));
  return (mat, dir, ind) => proc(mat, dir ?? direct, ind ?? indent)
}

function decoMatrix(mat, dir, ind) {
  const conf = this ?? {};
  const presm = parsePresm(conf?.pres ?? conf, PRES);
  const direct = conf.direct; // default 0: pointwise
  const indent = conf.indent;
  return matrix.call(Node.init(presm), mat, dir ?? direct, ind ?? indent)
}

export { DecoMatrix as Deco, DecoMatrix, decoMatrix as deco, decoMatrix };
