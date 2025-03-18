import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets';
import { Node, parsePresm } from '@spare/node';

/**
 * @typedef {Object}    Opt
 * @typedef {?Preset}   Opt.pres
 * @typedef {?number}   Opt.indent
 * @typedef {?number}   Opt.thres
 * @typedef {?function} Opt.str
 * @typedef {?function} Opt.num
 * @typedef {?boolean}  Opt.ansi
 * @typedef {?string}   Opt.fill
 * @typedef {?number}   Opt.head
 * @typedef {?number}   Opt.tail
 */

const PRES = { str: SUBTLE, neg: ENSIGN, pos: BESQUE };

const { entries } = Node.prototype;


/**
 * @param {Opt} conf
 * @returns {(ents:*[][],thr?:number,ind?:number,sur?:number)=>string}
 */
function DecoEntries(conf) {
  conf = conf ?? this ?? {};
  const presm = parsePresm(conf?.pres ?? conf, PRES);
  const thres = conf.thres ?? 0, indent = conf.indent, surge = conf.surge;
  const proc = entries.bind(Node.init(presm));
  return (ents, thr, ind, sur) => proc(ents, thr ?? thres, ind ?? indent, sur ?? surge)
}

function decoEntries(ent, thr, ind, sur) {
  const conf = this ?? {};
  const presm = parsePresm(conf?.pres ?? conf, PRES);
  const thres = conf.thres ?? 0, indent = conf.indent, surge = conf.surge;
  return entries.call(Node.init(presm), ent, thr ?? thres, ind ?? indent, sur ?? surge)
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

export { DecoEntries as Deco, DecoEntries, decoEntries as deco, decoEntries };
