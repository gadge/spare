import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { Node, parsePresm }       from '@spare/node'

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

const { object } = Node.prototype

/**
 * @param {Opt} conf
 * @returns {(o:{},thr?:number,ind?:number,sur?:number)=>string}
 */
export function DecoObject(conf) {
  conf = conf ?? this ?? {}
  const presm = parsePresm(conf?.pres ?? conf, PRES)
  const thres = conf.thres ?? 0, indent = conf.indent, surge = conf.surge
  const proc = object.bind(Node.init(presm))
  return (o, thr, ind, sur) => proc(o, thr ?? thres, ind ?? indent, sur ?? surge)
}

export function decoObject(ent, thr, ind, sur) {
  const conf = this ?? {}
  const presm = parsePresm(conf?.pres ?? conf, PRES)
  const thres = conf.thres ?? 0, indent = conf.indent, surge = conf.surge
  return object.call(Node.init(presm), ent, thr ?? thres, ind ?? indent, sur ?? surge)
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