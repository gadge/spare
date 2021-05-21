import { RTSP, CO, COSP, LF } from '@spare/enum-chars';
import { DUAL_PRESET_COLLECTION } from '@spare/preset-deco';
import { fluoEntries } from '@palett/fluo-entries';
import { fluoVector } from '@palett/fluo-vector';
import { bracket, brace } from '@spare/bracket';
import { BRK, BRC, PAL } from '@spare/deco-colors';
import { decoDate, decoDateTime } from '@spare/deco-date';
import { funcName, decoFunc } from '@spare/deco-func';
import { STR, NUM, BIG, FUN, OBJ, BOO, UND, SYM } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE, MAP, SET } from '@typen/enum-object-types';
import { isNumeric } from '@typen/num-loose';
import { typ } from '@typen/typ';
import { formatDate } from '@valjoux/format-date';
import { formatDateTime } from '@valjoux/format-date-time';
import { mutateKeys, mutateValues } from '@vect/entries-mapper';
import { mutate, iterate } from '@vect/vector-mapper';
import { max } from '@aryth/comparer';
import { lange } from '@spare/lange';
import { joinLines } from '@spare/liner';
import { LPad } from '@spare/padder';
import { _decoString } from '@spare/deco-string';
import { splitLiteral } from '@spare/splitter';
import { DecoConfig } from '@spare/deco-config';

const CONFIG = {
  depth: 8,
  // 展示级别
  vert: 0,
  // 在此级别以下均设为竖排
  unit: 32,
  // 若 数组/键值对的值 单个元素长度超过此, 则进行竖排
  width: 80,
  // 字符超过此, 则换行
  string: {} // 设置字符串

};

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
  mutateKeys(entries, k => {
    k = String(k);
    pad = max(lange(k), pad);
    return k;
  });
  return pad;
};

const lpad = LPad({
  ansi: true
});
const renderEntries = function (entries, lv) {
  var _this$object, _this$object2, _this$object3, _entries;

  const vert = ((_this$object = this.object) == null ? void 0 : _this$object.vert) ?? this.vert ?? 0,
        width = ((_this$object2 = this.object) == null ? void 0 : _this$object2.width) ?? this.width ?? 0,
        unit = ((_this$object3 = this.object) == null ? void 0 : _this$object3.unit) ?? this.unit ?? 0;
  let pad;
  const rows = (lv < vert || entries.some(([, v]) => lange(v) > unit) || !width) && (pad = (_entries = entries, mutateKeyPad(_entries))) ? mutate(entries, ([k, v]) => lpad(k, pad) + RTSP + v) : wrapEntries(entries, width);
  return rows.length > 1 ? joinLines(rows, CO, lv) : rows.join(COSP);
};
const wrapEntries = function (entries, width) {
  var _row;

  const lines = [];
  let row = null,
      len = 0,
      kvp,
      sp = COSP.length;
  iterate(entries, ([k, v]) => {
    // row.push(kvp = k + RTSP + v), len += lange(kvp) + sp
    // if (len > width) rows.push(row.join(COSP)), row = [], len = 0
    len += lange(kvp = k + RTSP + v) + sp;
    if (row && len > width) lines.push(row.join(COSP)), row = null;
    if (!row) row = [], len = 0;
    row.push(kvp);
  });
  if ((_row = row) != null && _row.length) lines.push(row.join(COSP));
  return lines;
};

const renderString = function (string, level, indent) {
  var _this$string, _this$string2;

  const width = ((_this$string = this.string) == null ? void 0 : _this$string.width) ?? this.width ?? 0,
        presets = ((_this$string2 = this.string) == null ? void 0 : _this$string2.presets) ?? null;
  return _decoString.call({
    vectify: splitLiteral,
    presets,
    width,
    indent: level + 1,
    firstLineIndent: indent
  }, string);
};

const renderVector = function (vector, lv) {
  var _this$array, _this$array2, _this$array3;

  const vert = ((_this$array = this.array) == null ? void 0 : _this$array.vert) ?? this.vert ?? 0,
        width = ((_this$array2 = this.array) == null ? void 0 : _this$array2.width) ?? this.width ?? 0,
        unit = ((_this$array3 = this.array) == null ? void 0 : _this$array3.unit) ?? this.unit ?? 0;
  const rows = lv < vert || vector.some(x => lange(x) > unit) || !width ? vector : wrapVector(vector, width);
  return rows.length > 1 ? joinLines(rows, CO, lv) : vector.join(COSP);
};
const wrapVector = function (vector, width) {
  const lines = [];
  let row = null,
      len = 0,
      sp = COSP.length;
  iterate(vector, item => {
    // row.push(item), len += lange(item) + sp
    // if (len > width) rows.push(row.join(COSP)), row = [], len = 0
    len += lange(item) + sp;
    if (row && len > width) lines.push(row.join(COSP)), row = null;
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
  if (t === STR) return isNumeric(node) ? node : renderString.call(this, node, level, indent);
  if (t === NUM || t === BIG) return node;
  if (t === FUN) return level >= this.depth ? funcName(node) : decoFunc(node, this);

  if (t === OBJ) {
    var _deVe$call, _deEn$call, _deEn$call2;

    const {
      depth
    } = this,
          pt = typ(node);
    if (pt === ARRAY) return level >= depth ? '[array]' : (_deVe$call = deVe.call(this, node.slice(), level), BRK[level & 7](_deVe$call));
    if (pt === OBJECT) return level >= depth ? '{object}' : (_deEn$call = deEn.call(this, Object.entries(node), level), BRC[level & 7](_deEn$call));
    if (pt === DATE) return level >= depth ? decoDate(node) : decoDateTime(node);
    if (pt === MAP) return level >= depth ? '(map)' : (_deEn$call2 = deEn.call(this, [...node.entries()], level), BRK[level & 7](_deEn$call2));
    if (pt === SET) return level >= depth ? '(set)' : `set:[${deVe.call(this, [...node], level)}]`;
    return `${node}`;
  }

  if (t === BOO) return PAL.BOO(node);
  if (t === UND || t === SYM) return PAL.UDF(node);
  return `${node}`;
}
function plainNode(node, level = 0, indent) {
  const t = typeof node,
        {
    qm
  } = this;
  if (t === STR) return qm ? qm + node + qm : renderString.call(this, node, level, indent);
  if (t === FUN) return level >= this.depth ? funcName(node) : decoFunc(node, this);

  if (t === OBJ) {
    var _deVe$call2, _deEn$call3, _deEn$call4;

    const {
      depth
    } = this,
          pt = typ(node);
    if (pt === ARRAY) return level >= depth ? '[array]' : (_deVe$call2 = deVe.call(this, node.slice(), level), bracket(_deVe$call2));
    if (pt === OBJECT) return level >= depth ? '{object}' : (_deEn$call3 = deEn.call(this, Object.entries(node), level), brace(_deEn$call3));
    if (pt === DATE) return level >= depth ? formatDate(node) : formatDateTime(node);
    if (pt === MAP) return level >= depth ? '(map)' : (_deEn$call4 = deEn.call(this, [...node.entries()], level), bracket(_deEn$call4));
    if (pt === SET) return level >= depth ? '(set)' : `set:[${deVe.call(this, [...node], level)}]`;
    return `${node}`;
  }

  return node;
}
const deVe = function (vector, lv) {
  const config = this;
  mutate(vector, v => String(_deco.call(config, v, lv + 1)));
  if (config.presets) fluoVector.call(MUTATE_PIGMENT, vector, config.presets);
  return renderVector.call(config, vector, lv);
};
const deEn = function (entries, lv) {
  const config = this;
  const pad = mutateKeyPad(entries);
  mutateValues(entries, v => String(_deco.call(config, v, lv + 1, pad)));
  if (config.presets) fluoEntries.call(MUTATE_PIGMENT, entries, config.presets);
  return renderEntries.call(config, entries, lv);
};

//   if (!p) p = {}
//   p.wf = p.wf ?? 160
//   if (nullish(p.presets)) p.presets = p.pr ?? [AZURE, MOSS]
//   DecoConfig.prototype.assignPresets.call(p, AZURE, MOSS)
//   if (nullish(p.depth)) p.depth = 8 // 展示级别
//   if (nullish(p.vert)) p.vert = 0 // 在此级别以下均设为竖排
//   if (nullish(p.unit)) p.unit = 32 // 若 数组/键值对的值 单个元素长度超过此, 则进行竖排
//   if (nullish(p.width)) p.width = 80 // 字符超过此, 则换行
//   if (nullish(p.string)) p.string = {}
//   const s = p.string
//   // if (nullish(s.presets)) s.presets = [ATLAS, SUBTLE]
//   DecoConfig.prototype.assignPresets.call(s, ATLAS, SUBTLE)
//   // p |> JSON.stringify |> logger
//   return p
// }

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

const deco = (ob, p = {}) => _deco.call(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION), ob); // TODO: fix string.presets default configuration

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

const Deco = (p = {}) => _deco.bind(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION));
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

  return void console.log((_x2 = x, deco(_x2)), LF);
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

export { Deco, _deco, deca, deco, delogNeL, delogger };
