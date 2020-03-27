'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoColors = require('@spare/deco-colors');
var bracket = require('@spare/bracket');
var decoFunc = require('@spare/deco-func');
var decoDate = require('@spare/deco-date');
var enumDataTypes = require('@typen/enum-data-types');
var enumObjectTypes = require('@typen/enum-object-types');
var numLoose = require('@typen/num-loose');
var typ = require('@typen/typ');
var fluoVector = require('@palett/fluo-vector');
var fluoEntries = require('@palett/fluo-entries');
var entriesMapper = require('@vect/entries-mapper');
var vectorMapper = require('@vect/vector-mapper');
var formatDate = require('@valjoux/format-date');
var formatDateTime = require('@valjoux/format-date-time');
var lange = require('@spare/lange');
var comparer = require('@aryth/comparer');
var padString = require('@spare/pad-string');
var liner = require('@spare/liner');
var columnMapper = require('@vect/column-mapper');
var enumChars = require('@spare/enum-chars');

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
  vectorMapper.mutate(entries, ([k, v]) => `${k}: ${v}`);
  return (wrap || lv < vo) && entries.length > 1 ? liner.joinLines(entries, enumChars.CO, lv) : entries.join(', ');
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
    if (w > wa) rows.push(row.join(', ')), row = [], w = 0;
  });
  return rows.length > 1 ? liner.joinLines(rows, enumChars.CO, lv) : vector.join(', ');
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
  if (t === enumDataTypes.STR) return numLoose.isNumeric(node) ? node : decoColors.PAL.STR(node);
  if (t === enumDataTypes.NUM || t === enumDataTypes.BIG) return node;

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
    if (t === enumDataTypes.FUN) return lv >= hi ? decoFunc.funcName(node) : decoFunc.decoFunc.call(this, node);
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
    if (t === enumDataTypes.FUN) return lv >= hi ? decoFunc.funcName(node) : decoFunc.decoFunc.call(this, node);
    return `${node}`;
  }

  return node;
}
let deVe = function (vector, lv) {
  vectorMapper.mutate(vector, v => String(decoNode.call(this, v, lv + 1)));
  if (this.pr) fluoVector.fluoVector(vector, {
    mutate: true
  });
  return stringifyVector.call(this, vector, lv);
};
let deEn = function (entries, lv) {
  entriesMapper.mutate(entries, k => String(k), v => String(decoNode.call(this, v, lv + 1)));
  if (this.pr) fluoEntries.fluoEntries(entries, {
    stringPreset: decoColors.IDX[lv & 7],
    mutate: true
  });
  return stringifyEntries.call(this, entries, lv);
};

/**
 *
 * @param {*} ob
 * @param {boolean} [pr=true]
 * @param {number} [hi] - maximum level of object to show detail
 * @param {number} [va] - maximum level to force vertical for array, root level = 0
 * @param {number} [vo] - maximum level to force vertical for object, root level = 0
 * @param {number} [wa] - maximum string length to hold array contents without wrap
 * @param {number} [wo] - maximum string length to hold object contents without wrap
 * @param {number} [wf] - maximum string length to hold function contents
 * @param {?string} [qm=null] - quotation mark
 * @returns {string|number}
 */

const deco = (ob, {
  pr = true,
  hi = 8,
  va = 0,
  vo = 0,
  wa = 32,
  wo = 64,
  wf = 160,
  qm = null
} = {}) => decoNode.call({
  pr,
  hi,
  va,
  vo,
  wa,
  wo,
  wf,
  qm
}, ob);
const deca = ({
  pr = true,
  hi = 8,
  va = 0,
  vo = 0,
  wa = 32,
  wo = 64,
  wf = 160,
  qm = null
} = {}) => decoNode.bind({
  pr,
  hi,
  va,
  vo,
  wa,
  wo,
  wf,
  qm
});
const delogger = x => {
  var _x;

  return void console.log((_x = x, deco(_x)));
};
const delogNeL = x => {
  var _x2;

  return void console.log((_x2 = x, deco(_x2)), '\n');
};

exports.deca = deca;
exports.deco = deco;
exports.decoNode = decoNode;
exports.delogNeL = delogNeL;
exports.delogger = delogger;
