'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoVector = require('@spare/deco-vector');
var enumChars = require('@spare/enum-chars');
var phrasing = require('@spare/phrasing');

const tap = (...words) => {
  const ve = [];

  for (let word of words) if (word != null && word.length) ve.push(word);

  return ve;
};
const tapBy = function (delim = enumChars.SP, ...words) {
  const ve = tap.apply(null, words);
  return ve.join(delim);
};
const tapDot = function (...words) {
  const delim = (this == null ? void 0 : this.delim) ?? '.';
  const ve = tap.apply(null, words);
  return ve.join(delim);
};
const tapSnake = function (...words) {
  const delim = (this == null ? void 0 : this.delim) ?? '_';
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
  p = p ?? {};
  p.delim = p.delim ?? enumChars.SP;
  return p;
};

const adjoin = function (...words) {
  const ve = tap.apply(null, words),
        config = presetAdjoin(this);
  return decoVector._decoVector.call(config, ve);
};
/**
 *
 * @param {Object} p
 *
 * @param {string} [p.delim=',\n']
 * @param {boolean|number} [p.bracket=true] - BRK = 1
 * @param {Function} [p.read]
* @param {Object|Object[]} [p.presets=[FRESH, JUNGLE]]
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
