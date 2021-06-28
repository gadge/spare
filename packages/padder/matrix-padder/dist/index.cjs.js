'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var padder = require('@texting/padder');
var comparer = require('@aryth/comparer');
var lange = require('@spare/lange');
var columnsStat = require('@vect/columns-stat');

/**
 *
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {undefined}
 */
/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {*[]}
 */


const mapper$2 = (mx, fn, h, w) => {
  var _mx$;

  h = h || (mx == null ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) == null ? void 0 : _mx$.length);
  const tx = Array(h);

  for (let i = 0, j, r, tr; i < h; i++) for (tx[i] = tr = Array(w), r = mx[i], j = 0; j < w; j++) tr[j] = fn(r[j], i, j);

  return tx;
};

const CJK_PUNCS = '\u3000-\u303f';
const CJK_LETTERS = '\u4e00-\u9fbf';
const FULL_CHARS = '\uff00-\uffef'; // full letters + full puncs

const HAN = new RegExp(`[${CJK_PUNCS}${CJK_LETTERS}${FULL_CHARS}]`); // HAN ideographs
/**
 * Return if a string contains Chinese character.
 * halfAng = str.match(/[\u0000-\u00ff]/g) || [] //半角
 * chinese = str.match(/[\u4e00-\u9fa5]/g) || [] //中文
 * fullAng = str.match(/[\uff00-\uffff]/g) || [] //全角
 * @param {string} str
 * @returns {boolean}
 */


const hasFull = str => HAN.test(str);

const mapper$1 = function (vec, fn, l) {
  l = l || (vec == null ? void 0 : vec.length);
  const ve = Array(l);

  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l);

  return ve;
};

const columns = function (y, h) {
  return mapper$1(this, r => r[y], h);
};

const Columns = mx => columns.bind(mx);

const mapper = (mx, mapOnColumns, h, w) => {
  var _mx$;

  h = h || (mx == null ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) == null ? void 0 : _mx$.length); // 'mapperColumns' |> logger

  const tcol = Array(w);

  for (let j = 0, cols = Columns(mx); j < w; j++) {
    tcol[j] = mapOnColumns(cols(j, h), j); // Xr().index(j).col(cols(j, h)).result(tcol[j]) |> logger
  } // tcol |> logger


  return tcol;
};

const columnWidth = (mx, ansi) => {
  const len = lange.Lange(ansi);
  return columnsStat.stat.call({
    init: () => 0,
    acc: (a, b) => comparer.max(a, len(b))
  }, mx);
};

const matrixPadderFull = (mx, config) => {
  const pad = padder.PadFull(config, config);
  const widths = columnWidth(mx, config.ansi);
  const marks = mapper(mx, col => col.some(hasFull));
  return mapper$2(mx, (x, i, j) => pad(x, widths[j], marks[j]));
};

/**
 *
 * @param {string[][]} mx
 * @param {object} [config]
 * @param {boolean} [config.ansi]
 * @param {boolean} [config.full]
 * @param {string} [config.fill]
 * @returns {string[][]}
 */

const matrixPadder = (mx, config = {}) => {
  if (config.full) return matrixPadderFull(mx, config);
  const widths = columnWidth(mx, config.ansi);
  const pad = padder.Pad(config);
  return mapper$2(mx, (tx, i, j) => pad(tx, widths[j]));
}; // let zipper
// return dye
//   ? (zipper = Trizipper((tx, va, dy, i, j) => pad(tx, widths[j], va) |> dy),
//     zipper(mx, mx, dye))
//   : (zipper = Duozipper((tx, va, i, j) => pad(tx, widths[j], va)),
//     zipper(mx, mx))

exports.columnWidth = columnWidth;
exports.matrixPadder = matrixPadder;
