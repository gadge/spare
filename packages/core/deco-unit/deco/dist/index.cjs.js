'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var enumChars = require('@spare/enum-chars');
var enumMutabilities = require('@analys/enum-mutabilities');
var fluoEntries = require('@palett/fluo-entries');
var fluoVector = require('@palett/fluo-vector');
var bracket = require('@spare/bracket');
var decoColors = require('@spare/deco-colors');
var decoDate = require('@spare/deco-date');
var decoFunc = require('@spare/deco-func');
var decoString = require('@spare/deco-string');
var lange = require('@spare/lange');
var enumDataTypes = require('@typen/enum-data-types');
var enumObjectTypes = require('@typen/enum-object-types');
var numLoose = require('@typen/num-loose');
var typ = require('@typen/typ');
var formatDate = require('@valjoux/format-date');
var formatDateTime = require('@valjoux/format-date-time');
var entriesMapper = require('@vect/entries-mapper');
var vectorMapper = require('@vect/vector-mapper');
var comparer = require('@aryth/comparer');
var liner = require('@spare/liner');
var padString = require('@spare/pad-string');
var columnMapper = require('@vect/column-mapper');

const lpad = padString.LPad({
  ansi: true
});
const stringifyEntries = function (entries, lv) {
  const {
    vo
  } = this,
        {
    pad,
    wrap
  } = wrapInfo.call(this, entries);
  if (wrap || lv < vo) columnMapper.mutate(entries, 0, k => lpad(k, pad));
  vectorMapper.mutate(entries, ([k, v]) => k + enumChars.RTSP + v);
  return (wrap || lv < vo) && entries.length > 1 ? liner.joinLines(entries, enumChars.CO, lv) : entries.join(enumChars.COSP);
};
const wrapInfo = function (entries) {
  const {
    wo
  } = this;
  let w = 0,
      wrap = false,
      pad = 0;
  vectorMapper.iterate(entries, ([k, v]) => {
    k = lange.lange(k), v = lange.lange(v), pad = comparer.max(k, pad);
    if (!wrap && (w += k + v) > wo) wrap = true;
  });
  return {
    pad,
    wrap
  };
};

const stringifyVector = function (vector, lv) {
  const {
    va,
    wa
  } = this;
  if (lv < va) return liner.joinLines(vector, enumChars.CO, lv);
  let rows = [],
      w = 0,
      row = [];
  vectorMapper.iterate(vector, item => {
    row.push(item), w += lange.lange(item);
    if (w > wa) rows.push(row.join(enumChars.COSP)), row = [], w = 0;
  });
  return rows.length > 1 ? liner.joinLines(rows, enumChars.CO, lv) : vector.join(enumChars.COSP);
};

function decoNode(node, lv = 0) {
  return this.pr ? prettyNode.call(this, node, lv) : plainNode.call(this, node, lv);
}
/**
 *
 * @param {*} node
 * @param {number} [lv]
 * @return {string}
 */

function prettyNode(node, lv = 0) {
  const t = typeof node;
  if (t === enumDataTypes.STR) return numLoose.isNumeric(node) ? node : decoString.deco(node, this);
  if (t === enumDataTypes.NUM || t === enumDataTypes.BIG) return node;
  if (t === enumDataTypes.FUN) return lv >= this.hi ? decoFunc.funcName(node) : decoFunc.decoFunc(node, this);

  if (t === enumDataTypes.OBJ) {
    var _deVe$call, _deEn$call, _deEn$call2;

    const {
      hi
    } = this,
          pt = typ.typ(node);
    if (pt === enumObjectTypes.ARRAY) return lv >= hi ? '[array]' : (_deVe$call = deVe.call(this, node.slice(), lv), decoColors.BRK[lv & 7](_deVe$call));
    if (pt === enumObjectTypes.OBJECT) return lv >= hi ? '{object}' : (_deEn$call = deEn.call(this, Object.entries(node), lv), decoColors.BRC[lv & 7](_deEn$call));
    if (pt === enumObjectTypes.DATE) return lv >= hi ? decoDate.decoDate(node) : decoDate.decoDateTime(node);
    if (pt === enumObjectTypes.MAP) return lv >= hi ? '(map)' : (_deEn$call2 = deEn.call(this, [...node.entries()], lv), decoColors.BRK[lv & 7](_deEn$call2));
    if (pt === enumObjectTypes.SET) return lv >= hi ? '(set)' : `set:[${deVe.call(this, [...node], lv)}]`;
    return `${node}`;
  }

  if (t === enumDataTypes.BOO) return decoColors.PAL.BOO(node);
  if (t === enumDataTypes.UND || t === enumDataTypes.SYM) return decoColors.PAL.UDF(node);
  return `${node}`;
}
function plainNode(node, lv = 0) {
  const t = typeof node,
        {
    qm
  } = this;
  if (t === enumDataTypes.STR) return qm ? qm + node + qm : node;
  if (t === enumDataTypes.FUN) return lv >= this.hi ? decoFunc.funcName(node) : decoFunc.decoFunc(node, this);

  if (t === enumDataTypes.OBJ) {
    var _deVe$call2, _deEn$call3, _deEn$call4;

    const {
      hi
    } = this,
          pt = typ.typ(node);
    if (pt === enumObjectTypes.ARRAY) return lv >= hi ? '[array]' : (_deVe$call2 = deVe.call(this, node.slice(), lv), bracket.bracket(_deVe$call2));
    if (pt === enumObjectTypes.OBJECT) return lv >= hi ? '{object}' : (_deEn$call3 = deEn.call(this, Object.entries(node), lv), bracket.brace(_deEn$call3));
    if (pt === enumObjectTypes.DATE) return lv >= hi ? formatDate.formatDate(node) : formatDateTime.formatDateTime(node);
    if (pt === enumObjectTypes.MAP) return lv >= hi ? '(map)' : (_deEn$call4 = deEn.call(this, [...node.entries()], lv), bracket.bracket(_deEn$call4));
    if (pt === enumObjectTypes.SET) return lv >= hi ? '(set)' : `set:[${deVe.call(this, [...node], lv)}]`;
    return `${node}`;
  }

  return node;
}
let deVe = function (vector, lv) {
  vectorMapper.mutate(vector, v => String(decoNode.call(this, v, lv + 1)));
  if (this.pr) fluoVector.fluoVector.call(enumMutabilities.MUTABLE, vector, this.pr);
  return stringifyVector.call(this, vector, lv);
};
let deEn = function (entries, lv) {
  entriesMapper.mutate(entries, k => String(k), v => String(decoNode.call(this, v, lv + 1)));
  if (this.pr) fluoEntries.fluoEntries.call(enumMutabilities.MUTABLE, entries, this.pr); // [{ preset: INSTA, }, { preset: IDX[lv & 7] }]

  return stringifyEntries.call(this, entries, lv);
};

const presetDeco = p => {
  var _p$pr, _p$hi, _p$va, _p$vo, _p$wa, _p$wo, _p$wf;

  p.pr = (_p$pr = p.pr) !== null && _p$pr !== void 0 ? _p$pr : [presets.AZURE, presets.MOSS];
  p.presets = p.pr;
  p.hi = (_p$hi = p.hi) !== null && _p$hi !== void 0 ? _p$hi : 8;
  p.va = (_p$va = p.va) !== null && _p$va !== void 0 ? _p$va : 0;
  p.vo = (_p$vo = p.vo) !== null && _p$vo !== void 0 ? _p$vo : 0;
  p.wa = (_p$wa = p.wa) !== null && _p$wa !== void 0 ? _p$wa : 32;
  p.wo = (_p$wo = p.wo) !== null && _p$wo !== void 0 ? _p$wo : 64;
  p.wf = (_p$wf = p.wf) !== null && _p$wf !== void 0 ? _p$wf : 160;
  return p;
};
/**
 *
 * @param {*} ob
 * @param {Object} [p]
 * @param {Object[]} [p.pr=[]]
 * @param {number} [p.hi=8] - maximum level of object to show detail
 * @param {number} [p.va=0] - maximum level to force vertical for array, root level = 0
 * @param {number} [p.vo=0] - maximum level to force vertical for object, root level = 0
 * @param {number} [p.wa=32] - maximum string length to hold array contents without wrap
 * @param {number} [p.wo=64] - maximum string length to hold object contents without wrap
 * @param {number} [p.wf=160] - maximum string length to hold function contents
 * @param {?string} [p.qm=null] - quotation mark
 * @returns {string|number}
 */


const deco = (ob, p = {}) => decoNode.call(presetDeco(p), ob);
/**
 *
 * @param {Object} [p]
 * @param {Object[]|*} [p.pr=[]]
 * @param {number} [p.hi=8] - maximum level of object to show detail
 * @param {number} [p.va=0] - maximum level to force vertical for array, root level = 0
 * @param {number} [p.vo=0] - maximum level to force vertical for object, root level = 0
 * @param {number} [p.wa=32] - maximum string length to hold array contents without wrap
 * @param {number} [p.wo=64] - maximum string length to hold object contents without wrap
 * @param {number} [p.wf=160] - maximum string length to hold function contents
 * @param {?string} [p.qm=null] - quotation mark
 * @returns {string|number}
 */

const Deco = (p = {}) => decoNode.bind(presetDeco(p));
/**
 *
 * @param {*} ob
 * @param {Object} [p]
 * @param {Object[]} [p.pr=[]]
 * @param {number} [p.hi=8] - maximum level of object to show detail
 * @param {number} [p.va=0] - maximum level to force vertical for array, root level = 0
 * @param {number} [p.vo=0] - maximum level to force vertical for object, root level = 0
 * @param {number} [p.wa=32] - maximum string length to hold array contents without wrap
 * @param {number} [p.wo=64] - maximum string length to hold object contents without wrap
 * @param {number} [p.wf=160] - maximum string length to hold function contents
 * @param {?string} [p.qm=null] - quotation mark
 * @returns {string|number}
 * @deprecated use Deco instead
 */

const deca = Deco;
const delogger = x => {
  var _x;

  return void console.log((_x = x, deco(_x)));
};
const delogNeL = x => {
  var _x2;

  return void console.log((_x2 = x, deco(_x2)), enumChars.LF);
};

exports.Deco = Deco;
exports.deca = deca;
exports.deco = deco;
exports.decoNode = decoNode;
exports.delogNeL = delogNeL;
exports.delogger = delogger;
