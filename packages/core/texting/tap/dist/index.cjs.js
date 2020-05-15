'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoVector = require('@spare/deco-vector');
var enumChars = require('@spare/enum-chars');
var phrasing = require('@spare/phrasing');

const tap = (...words) => {
  const ve = [];

  for (let word of words) if (word === null || word === void 0 ? void 0 : word.length) ve.push(word);

  return ve;
};
const tapBy = function (delim = enumChars.SP, ...words) {
  const ve = tap.apply(null, words);
  return ve.join(delim);
}; // export const tappo = (things) => {
//   const delim = this?.delim ?? SP
//   let value, elements = []
//   for (let key in things) if (things.hasOwnProperty(key)) {
//     if (!nullish(value = things[key])) elements.push(`[${says.roster(key)}] (${value |> decoFlat})`)
//   }
//   return elements.join(delim)
// }

const tapDot = function (...words) {
  var _this$delim;

  const delim = (_this$delim = this === null || this === void 0 ? void 0 : this.delim) !== null && _this$delim !== void 0 ? _this$delim : '.';
  const ve = tap.apply(null, words);
  return ve.join(delim);
};
const tapSnake = function (...words) {
  var _this$delim2;

  const delim = (_this$delim2 = this === null || this === void 0 ? void 0 : this.delim) !== null && _this$delim2 !== void 0 ? _this$delim2 : '_';
  const ve = tap.apply(null, words);
  return ve.join(delim);
};
const tapCamel = function (...words) {
  const ve = tap.apply(null, words);
  return phrasing.wordsToCamel(ve).join('');
};
const tapPascal = function (...words) {
  const ve = tap.apply(null, words);
  return phrasing.wordsToPascal(ve).join('');
};

const presetAdjoin = p => {
  var _p, _p$delim;

  p = (_p = p) !== null && _p !== void 0 ? _p : {};
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.SP;
  return p;
};

const adjoin = function (...words) {
  const ve = tap.apply(null, words),
        config = presetAdjoin(this);
  return decoVector.cosmetics.call(config, ve);
};
/**
 *
 * @param {Object} p
 *
 * @param {string} [p.delim=',\n']
 * @param {boolean} [p.bracket=true] - BRK = 1
 * @param {Function} [p.read]
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 *
 * @returns {Function}
 */

const Adjoin = (p = {}) => adjoin.bind(p);

exports.Adjoin = Adjoin;
exports.adjoin = adjoin;
exports.tap = tap;
exports.tapBy = tapBy;
exports.tapCamel = tapCamel;
exports.tapDot = tapDot;
exports.tapPascal = tapPascal;
exports.tapSnake = tapSnake;
