import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets';
import { Node, parsePresm } from '@spare/node';

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
};

const { vector } = Node.prototype;


/**
 * @param {Opt} conf
 * @returns {(arr:*[],thr?:number,ind?:number,sur?:number)=>string}
 */
function DecoVector(conf) {
  conf = conf ?? this ?? {};
  const presm = parsePresm(conf?.pres ?? conf, PRES);
  const thres = conf.thres ?? 0, indent = conf.indent, surge = conf.surge;
  const proc = vector.bind(Node.init(presm));
  return (arr, thr, ind, sur) => proc(arr, thr ?? thres, ind ?? indent, sur ?? surge)
}

function decoVector(arr, thr, ind, sur) {
  const conf = this ?? {};
  const presm = parsePresm(conf?.pres ?? conf, PRES);
  const thres = conf.thres ?? 0, indent = conf.indent, surge = conf.surge;
  return vector.call(Node.init(presm), arr, thr ?? thres, ind ?? indent, sur ?? surge)
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

export { DecoVector as Deco, DecoVector, decoVector as deco, decoVector };
