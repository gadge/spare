import { AZURE, MOSS } from '@palett/presets';
import { RTSP, CO, COSP, LF } from '@spare/enum-chars';
import { MUTABLE } from '@analys/enum-mutabilities';
import { fluoEntries } from '@palett/fluo-entries';
import { fluoVector } from '@palett/fluo-vector';
import { bracket, brace } from '@spare/bracket';
import { BRK, BRC, PAL } from '@spare/deco-colors';
import { decoDate, decoDateTime } from '@spare/deco-date';
import { funcName, decoFunc } from '@spare/deco-func';
import { deco as deco$1 } from '@spare/deco-string';
import { lange } from '@spare/lange';
import { STR, NUM, BIG, FUN, OBJ, BOO, UND, SYM } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE, MAP, SET } from '@typen/enum-object-types';
import { isNumeric } from '@typen/num-loose';
import { typ } from '@typen/typ';
import { formatDate } from '@valjoux/format-date';
import { formatDateTime } from '@valjoux/format-date-time';
import { mutate as mutate$2 } from '@vect/entries-mapper';
import { mutate as mutate$1, iterate } from '@vect/vector-mapper';
import { max } from '@aryth/comparer';
import { joinLines } from '@spare/liner';
import { LPad } from '@spare/pad-string';
import { mutate } from '@vect/column-mapper';

const lpad = LPad({
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
  if (wrap || lv < vo) mutate(entries, 0, k => lpad(k, pad));
  mutate$1(entries, ([k, v]) => k + RTSP + v);
  return (wrap || lv < vo) && entries.length > 1 ? joinLines(entries, CO, lv) : entries.join(COSP);
};
const wrapInfo = function (entries) {
  const {
    wo
  } = this;
  let w = 0,
      wrap = false,
      pad = 0;
  iterate(entries, ([k, v]) => {
    k = lange(k), v = lange(v), pad = max(k, pad);
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
  if (lv < va) return joinLines(vector, CO, lv);
  let rows = [],
      w = 0,
      row = [];
  iterate(vector, item => {
    row.push(item), w += lange(item);
    if (w > wa) rows.push(row.join(COSP)), row = [], w = 0;
  });
  return rows.length > 1 ? joinLines(rows, CO, lv) : vector.join(COSP);
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
  if (t === STR) return isNumeric(node) ? node : deco$1(node, this);
  if (t === NUM || t === BIG) return node;
  if (t === FUN) return lv >= this.hi ? funcName(node) : decoFunc(node, this);

  if (t === OBJ) {
    var _deVe$call, _deEn$call, _deEn$call2;

    const {
      hi
    } = this,
          pt = typ(node);
    if (pt === ARRAY) return lv >= hi ? '[array]' : (_deVe$call = deVe.call(this, node.slice(), lv), BRK[lv & 7](_deVe$call));
    if (pt === OBJECT) return lv >= hi ? '{object}' : (_deEn$call = deEn.call(this, Object.entries(node), lv), BRC[lv & 7](_deEn$call));
    if (pt === DATE) return lv >= hi ? decoDate(node) : decoDateTime(node);
    if (pt === MAP) return lv >= hi ? '(map)' : (_deEn$call2 = deEn.call(this, [...node.entries()], lv), BRK[lv & 7](_deEn$call2));
    if (pt === SET) return lv >= hi ? '(set)' : `set:[${deVe.call(this, [...node], lv)}]`;
    return `${node}`;
  }

  if (t === BOO) return PAL.BOO(node);
  if (t === UND || t === SYM) return PAL.UDF(node);
  return `${node}`;
}
function plainNode(node, lv = 0) {
  const t = typeof node,
        {
    qm
  } = this;
  if (t === STR) return qm ? qm + node + qm : node;
  if (t === FUN) return lv >= this.hi ? funcName(node) : decoFunc(node, this);

  if (t === OBJ) {
    var _deVe$call2, _deEn$call3, _deEn$call4;

    const {
      hi
    } = this,
          pt = typ(node);
    if (pt === ARRAY) return lv >= hi ? '[array]' : (_deVe$call2 = deVe.call(this, node.slice(), lv), bracket(_deVe$call2));
    if (pt === OBJECT) return lv >= hi ? '{object}' : (_deEn$call3 = deEn.call(this, Object.entries(node), lv), brace(_deEn$call3));
    if (pt === DATE) return lv >= hi ? formatDate(node) : formatDateTime(node);
    if (pt === MAP) return lv >= hi ? '(map)' : (_deEn$call4 = deEn.call(this, [...node.entries()], lv), bracket(_deEn$call4));
    if (pt === SET) return lv >= hi ? '(set)' : `set:[${deVe.call(this, [...node], lv)}]`;
    return `${node}`;
  }

  return node;
}
let deVe = function (vector, lv) {
  mutate$1(vector, v => String(decoNode.call(this, v, lv + 1)));
  if (this.pr) fluoVector.call(MUTABLE, vector, this.pr);
  return stringifyVector.call(this, vector, lv);
};
let deEn = function (entries, lv) {
  mutate$2(entries, k => String(k), v => String(decoNode.call(this, v, lv + 1)));
  if (this.pr) fluoEntries.call(MUTABLE, entries, this.pr); // [{ preset: INSTA, }, { preset: IDX[lv & 7] }]

  return stringifyEntries.call(this, entries, lv);
};

const presetDeco = p => {
  var _p$pr, _p$hi, _p$va, _p$vo, _p$wa, _p$wo, _p$wf;

  p.pr = (_p$pr = p.pr) !== null && _p$pr !== void 0 ? _p$pr : [AZURE, MOSS];
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

  return void console.log((_x2 = x, deco(_x2)), LF);
};

export { Deco, deca, deco, decoNode, delogNeL, delogger };
