import { fluoEnt } from '@palett/fluo-entries';
import { fluoVec } from '@palett/fluo-vector';
import { bracket, brace } from '@spare/bracket';
import { PAL, BRK, BRC, IDX } from '@spare/deco-colors';
import { decoDate, decoDateTime } from '@spare/deco-date';
import { funcName, decoFunc } from '@spare/deco-func';
import { STR, NUM, BIG, FUN, OBJ, BOO, UND, SYM } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE, MAP, SET } from '@typen/enum-object-types';
import { isNumeric } from '@typen/num-loose';
import { typ } from '@typen/typ';
import { formatDate } from '@valjoux/format-date';
import { formatDateTime } from '@valjoux/format-date-time';
import { mutate as mutate$2 } from '@vect/entries-mapper';
import { mutate as mutate$1, iterate } from '@vect/vector-mapper';
import { lange } from '@spare/lange';
import { max } from '@aryth/comparer';
import { LPad } from '@spare/pad-string';
import { joinLines } from '@spare/liner';
import { mutate } from '@vect/column-mapper';
import { RTSP, CO, COSP, LF } from '@spare/enum-chars';

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
  if (t === STR) return isNumeric(node) ? node : PAL.STR(node);
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
  if (this.pr) fluoVec.call({
    mutate: true
  }, vector);
  return stringifyVector.call(this, vector, lv);
};
let deEn = function (entries, lv) {
  mutate$2(entries, k => String(k), v => String(decoNode.call(this, v, lv + 1)));
  if (this.pr) fluoEnt.call({
    mutate: true
  }, entries, undefined, {
    preset: IDX[lv & 7]
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

  return void console.log((_x2 = x, deco(_x2)), LF);
};

export { deca, deco, decoNode, delogNeL, delogger };
