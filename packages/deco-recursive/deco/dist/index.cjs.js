'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fluo = require('@palett/fluo');
var presets = require('@palett/presets');
var enumChars = require('@spare/enum-chars');
var nullish = require('@typen/nullish');
var fluoEntries = require('@palett/fluo-entries');
var fluoVector = require('@palett/fluo-vector');
var bracket = require('@spare/bracket');
var decoColors = require('@spare/deco-colors');
var decoDate = require('@spare/deco-date');
var decoFunc = require('@spare/deco-func');
var enumDataTypes = require('@typen/enum-data-types');
var enumObjectTypes = require('@typen/enum-object-types');
var numLoose = require('@typen/num-loose');
var typ = require('@typen/typ');
var formatDate = require('@valjoux/format-date');
var formatDateTime = require('@valjoux/format-date-time');
var entriesMapper = require('@vect/entries-mapper');
var vectorMapper = require('@vect/vector-mapper');
var comparer = require('@aryth/comparer');
var lange = require('@spare/lange');
var liner = require('@spare/liner');
var padder = require('@spare/padder');
var decoString = require('@spare/deco-string');
var splitter = require('@spare/splitter');

// export const
//   FUNC = '',
//   PIGM = '',
//   HEX = ''
const RENDER = 'render';
const MUTATE_PIGMENT = {
  colorant: RENDER,
  mutate: true
};

const mutateKeyPad = entries => {
  let pad = 0;
  entriesMapper.mutateKeys(entries, k => {
    k = String(k);
    pad = comparer.max(lange.lange(k), pad);
    return k;
  });
  return pad;
};

const lpad = padder.LPad({
  ansi: true
});
const renderEntries = function (entries, lv) {
  var _ref, _this$object$vert, _this$object, _ref2, _this$object$width, _this$object2, _ref3, _this$object$unit, _this$object3, _entries;

  const vert = (_ref = (_this$object$vert = (_this$object = this.object) === null || _this$object === void 0 ? void 0 : _this$object.vert) !== null && _this$object$vert !== void 0 ? _this$object$vert : this.vert) !== null && _ref !== void 0 ? _ref : 0,
        width = (_ref2 = (_this$object$width = (_this$object2 = this.object) === null || _this$object2 === void 0 ? void 0 : _this$object2.width) !== null && _this$object$width !== void 0 ? _this$object$width : this.width) !== null && _ref2 !== void 0 ? _ref2 : 0,
        unit = (_ref3 = (_this$object$unit = (_this$object3 = this.object) === null || _this$object3 === void 0 ? void 0 : _this$object3.unit) !== null && _this$object$unit !== void 0 ? _this$object$unit : this.unit) !== null && _ref3 !== void 0 ? _ref3 : 0;
  let pad;
  const rows = (lv < vert || entries.some(([, v]) => lange.lange(v) > unit) || !width) && (pad = (_entries = entries, mutateKeyPad(_entries))) ? vectorMapper.mutate(entries, ([k, v]) => lpad(k, pad) + enumChars.RTSP + v) : wrapEntries(entries, width);
  return rows.length > 1 ? liner.joinLines(rows, enumChars.CO, lv) : rows.join(enumChars.COSP);
};
const wrapEntries = function (entries, width) {
  var _row;

  const lines = [];
  let row = null,
      len = 0,
      kvp,
      sp = enumChars.COSP.length;
  vectorMapper.iterate(entries, ([k, v]) => {
    // row.push(kvp = k + RTSP + v), len += lange(kvp) + sp
    // if (len > width) rows.push(row.join(COSP)), row = [], len = 0
    len += lange.lange(kvp = k + enumChars.RTSP + v) + sp;
    if (row && len > width) lines.push(row.join(enumChars.COSP)), row = null;
    if (!row) row = [], len = 0;
    row.push(kvp);
  });
  if ((_row = row) !== null && _row !== void 0 && _row.length) lines.push(row.join(enumChars.COSP));
  return lines;
};

const renderString = function (string, level, indent) {
  var _ref, _this$string$width, _this$string, _this$string$presets, _this$string2;

  const width = (_ref = (_this$string$width = (_this$string = this.string) === null || _this$string === void 0 ? void 0 : _this$string.width) !== null && _this$string$width !== void 0 ? _this$string$width : this.width) !== null && _ref !== void 0 ? _ref : 0,
        presets = (_this$string$presets = (_this$string2 = this.string) === null || _this$string2 === void 0 ? void 0 : _this$string2.presets) !== null && _this$string$presets !== void 0 ? _this$string$presets : null;
  return decoString._decoString.call({
    vectify: splitter.splitLiteral,
    presets,
    width,
    indent: level + 1,
    firstLineIndent: indent
  }, string);
};

const renderVector = function (vector, lv) {
  var _ref, _this$array$vert, _this$array, _ref2, _this$array$width, _this$array2, _ref3, _this$array$unit, _this$array3;

  const vert = (_ref = (_this$array$vert = (_this$array = this.array) === null || _this$array === void 0 ? void 0 : _this$array.vert) !== null && _this$array$vert !== void 0 ? _this$array$vert : this.vert) !== null && _ref !== void 0 ? _ref : 0,
        width = (_ref2 = (_this$array$width = (_this$array2 = this.array) === null || _this$array2 === void 0 ? void 0 : _this$array2.width) !== null && _this$array$width !== void 0 ? _this$array$width : this.width) !== null && _ref2 !== void 0 ? _ref2 : 0,
        unit = (_ref3 = (_this$array$unit = (_this$array3 = this.array) === null || _this$array3 === void 0 ? void 0 : _this$array3.unit) !== null && _this$array$unit !== void 0 ? _this$array$unit : this.unit) !== null && _ref3 !== void 0 ? _ref3 : 0;
  const rows = lv < vert || vector.some(x => lange.lange(x) > unit) || !width ? vector : wrapVector(vector, width);
  return rows.length > 1 ? liner.joinLines(rows, enumChars.CO, lv) : vector.join(enumChars.COSP);
};
const wrapVector = function (vector, width) {
  const lines = [];
  let row = null,
      len = 0,
      sp = enumChars.COSP.length;
  vectorMapper.iterate(vector, item => {
    // row.push(item), len += lange(item) + sp
    // if (len > width) rows.push(row.join(COSP)), row = [], len = 0
    len += lange.lange(item) + sp;
    if (row && len > width) lines.push(row.join(enumChars.COSP)), row = null;
    if (!row) row = [], len = 0;
    row.push(item);
  });
  return lines;
};

function _deco(node, level, indent) {
  return this.presets ? prettyNode.call(this, node, level, indent) : plainNode.call(this, node, level, indent);
}
/**
 *
 * @param {*} node
 * @param {number} [level]
 * @param {number} indent
 * @return {string}
 */

function prettyNode(node, level = 0, indent) {
  const t = typeof node;
  if (t === enumDataTypes.STR) return numLoose.isNumeric(node) ? node : renderString.call(this, node, level, indent);
  if (t === enumDataTypes.NUM || t === enumDataTypes.BIG) return node;
  if (t === enumDataTypes.FUN) return level >= this.depth ? decoFunc.funcName(node) : decoFunc.decoFunc(node, this);

  if (t === enumDataTypes.OBJ) {
    var _deVe$call, _deEn$call, _deEn$call2;

    const {
      depth
    } = this,
          pt = typ.typ(node);
    if (pt === enumObjectTypes.ARRAY) return level >= depth ? '[array]' : (_deVe$call = deVe.call(this, node.slice(), level), decoColors.BRK[level & 7](_deVe$call));
    if (pt === enumObjectTypes.OBJECT) return level >= depth ? '{object}' : (_deEn$call = deEn.call(this, Object.entries(node), level), decoColors.BRC[level & 7](_deEn$call));
    if (pt === enumObjectTypes.DATE) return level >= depth ? decoDate.decoDate(node) : decoDate.decoDateTime(node);
    if (pt === enumObjectTypes.MAP) return level >= depth ? '(map)' : (_deEn$call2 = deEn.call(this, [...node.entries()], level), decoColors.BRK[level & 7](_deEn$call2));
    if (pt === enumObjectTypes.SET) return level >= depth ? '(set)' : `set:[${deVe.call(this, [...node], level)}]`;
    return `${node}`;
  }

  if (t === enumDataTypes.BOO) return decoColors.PAL.BOO(node);
  if (t === enumDataTypes.UND || t === enumDataTypes.SYM) return decoColors.PAL.UDF(node);
  return `${node}`;
}
function plainNode(node, level = 0, indent) {
  const t = typeof node,
        {
    qm
  } = this;
  if (t === enumDataTypes.STR) return qm ? qm + node + qm : renderString.call(this, node, level, indent);
  if (t === enumDataTypes.FUN) return level >= this.depth ? decoFunc.funcName(node) : decoFunc.decoFunc(node, this);

  if (t === enumDataTypes.OBJ) {
    var _deVe$call2, _deEn$call3, _deEn$call4;

    const {
      depth
    } = this,
          pt = typ.typ(node);
    if (pt === enumObjectTypes.ARRAY) return level >= depth ? '[array]' : (_deVe$call2 = deVe.call(this, node.slice(), level), bracket.bracket(_deVe$call2));
    if (pt === enumObjectTypes.OBJECT) return level >= depth ? '{object}' : (_deEn$call3 = deEn.call(this, Object.entries(node), level), bracket.brace(_deEn$call3));
    if (pt === enumObjectTypes.DATE) return level >= depth ? formatDate.formatDate(node) : formatDateTime.formatDateTime(node);
    if (pt === enumObjectTypes.MAP) return level >= depth ? '(map)' : (_deEn$call4 = deEn.call(this, [...node.entries()], level), bracket.bracket(_deEn$call4));
    if (pt === enumObjectTypes.SET) return level >= depth ? '(set)' : `set:[${deVe.call(this, [...node], level)}]`;
    return `${node}`;
  }

  return node;
}
const deVe = function (vector, lv) {
  const config = this;
  vectorMapper.mutate(vector, v => String(_deco.call(config, v, lv + 1)));
  if (config.fluos) fluoVector.fluoVector.call(MUTATE_PIGMENT, vector, config.fluos);
  return renderVector.call(config, vector, lv);
};
const deEn = function (entries, lv) {
  const config = this;
  const pad = mutateKeyPad(entries);
  entriesMapper.mutateValues(entries, v => String(_deco.call(config, v, lv + 1, pad)));
  if (config.fluos) fluoEntries.fluoEntries.call(MUTATE_PIGMENT, entries, config.fluos);
  return renderEntries.call(config, entries, lv);
};

const presetDeco = p => {
  var _p$wf, _p$pr;

  if (!p) p = {};
  p.wf = (_p$wf = p.wf) !== null && _p$wf !== void 0 ? _p$wf : 160;
  if (nullish.nullish(p.presets)) p.presets = (_p$pr = p.pr) !== null && _p$pr !== void 0 ? _p$pr : [presets.AZURE, presets.MOSS];
  fluo.FluoConfigs.prototype.assignPresets.call(p.fluos, presets.AZURE, presets.MOSS);
  if (nullish.nullish(p.depth)) p.depth = 8; // 展示级别

  if (nullish.nullish(p.vert)) p.vert = 0; // 在此级别以下均设为竖排

  if (nullish.nullish(p.unit)) p.unit = 32; // 若 数组/键值对的值 单个元素长度超过此, 则进行竖排

  if (nullish.nullish(p.width)) p.width = 80; // 字符超过此, 则换行

  if (nullish.nullish(p.string)) p.string = {};
  const s = p.string; // if (nullish(s.presets)) s.presets = [ATLAS, SUBTLE]

  fluo.FluoConfigs.prototype.assignPresets.call(s.fluos, presets.ATLAS, presets.SUBTLE); // p |> JSON.stringify |> logger

  return p;
};
/**
 *
 * @typedef {Object} DecoConfig
 * @typedef {Object} [DecoConfig.presets] - if set, prettify the result
 * @typedef {Object} [DecoConfig.depth] - if set, only output levels under it
 * @typedef {Object} [DecoConfig.vert] - if set, all levels under it output elements vertically
 * @typedef {Object} [DecoConfig.unit]  - if set, if array/key-value-pair element length exceeds it, vertically output the array/key-value-pair
 * @typedef {Object} [DecoConfig.width] - if set, wrap lines if string length exceeds it
 *
 * @param {*} ob
 * @param {DecoConfig} [p]
 * @param {DecoConfig} [p.object]
 * @param {DecoConfig} [p.array]
 * @param {DecoConfig} [p.string]
 * @param {number} [p.wf=160] - maximum length of string to hold function contents
 * @param {?string} [p.qm=null] - quotation mark
 * @returns {string|number}
 */


const deco = (ob, p = {}) => _deco.call(presetDeco(p), ob); // TODO: fix string.presets default configuration

/**
 *
 * @typedef {Object} DecoConfig
 * @typedef {Object} [DecoConfig.presets] - if set, prettify the result
 * @typedef {Object} [DecoConfig.depth] - if set, only output levels under it
 * @typedef {Object} [DecoConfig.vert] - if set, all levels under it output elements vertically
 * @typedef {Object} [DecoConfig.unit]  - if set, if array/key-value-pair element length exceeds it, vertically output the array/key-value-pair
 * @typedef {Object} [DecoConfig.width] - if set, wrap lines if string length exceeds it
 *
 * @param {DecoConfig} [p]
 * @param {DecoConfig} [p.object]
 * @param {DecoConfig} [p.array]
 * @param {DecoConfig} [p.string]
 * @param {number} [p.wf=160] - maximum length of string to hold function contents
 * @param {?string} [p.qm=null] - quotation mark
 * @returns {string|number}
 */

const Deco = (p = {}) => _deco.bind(presetDeco(p));
/**
 *
 * @typedef {Object} DecoConfig
 * @typedef {Object} [DecoConfig.presets] - if set, prettify the result
 * @typedef {Object} [DecoConfig.depth] - if set, only output levels under it
 * @typedef {Object} [DecoConfig.vert] - if set, all levels under it output elements vertically
 * @typedef {Object} [DecoConfig.unit]  - if set, if array/key-value-pair element length exceeds it, vertically output the array/key-value-pair
 * @typedef {Object} [DecoConfig.width] - if set, wrap lines if string length exceeds it
 *
 * @param {*} ob
 * @param {DecoConfig} [p]
 * @param {DecoConfig} [p.object]
 * @param {DecoConfig} [p.array]
 * @param {DecoConfig} [p.string]
 * @param {number} [p.wf=160] - maximum length of string to hold function contents
 * @param {?string} [p.quote=null] - quotation mark
 * @returns {string|number}
 */

const deca = Deco;
const delogger = x => {
  var _x;

  return void console.log((_x = x, deco(_x)));
};
const delogNeL = x => {
  var _x2;

  return void console.log((_x2 = x, deco(_x2)), enumChars.LF);
}; // const config = {
//   depth: 5,
//   presets: [AZURE, MOSS],
//   width: 64,
//   vert: 5,
//   method: {
//     width: 64,
//     presets: [AZURE, MOSS],
//   },
//   object: {
//     width: 64,
//     vert: 5,
//     presets: [AZURE, MOSS],
//   },
//   array: {
//     width: 64,
//     vert: 5,
//     presets: [AZURE, MOSS],
//   },
//   string: {
//     width: 64,
//     vert: 5,
//     presets: [AZURE, MOSS],
//   }
// }

exports.Deco = Deco;
exports._deco = _deco;
exports.deca = deca;
exports.deco = deco;
exports.delogNeL = delogNeL;
exports.delogger = delogger;
