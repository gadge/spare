'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fluoVector = require('@palett/fluo-vector');
var lange = require('@spare/lange');
var presets = require('@palett/presets');
var splitter = require('@spare/splitter');
var enumChars = require('@spare/enum-chars');

/** @type {{mutate: boolean}} */
const MUTABLE = {
  mutate: true
};

const Splitter = delim => x => String.prototype.split.call(x, delim);
const Joiner = delim => v => Array.prototype.join.call(v, delim);
const cosmetics = function (text) {
  if (!(text === null || text === void 0 ? void 0 : text.length)) return '';
  if (lange.hasAnsi(text)) return text;
  const {
    delim,
    vectify,
    joiner,
    presets,
    effects
  } = this;
  const words = vectify(text);
  fluoVector.fluoVector.call(MUTABLE, words, presets, effects);
  return (joiner !== null && joiner !== void 0 ? joiner : Joiner(delim))(words);
};

const NUMERIC_PRESET = presets.ATLAS;
const LITERAL_PRESET = presets.SUBTLE;
const PRESETS = [NUMERIC_PRESET, LITERAL_PRESET];
const presetString = p => {
  var _p$delim, _p$presets, _p$vectify;

  p.delim = (_p$delim = p === null || p === void 0 ? void 0 : p.delim) !== null && _p$delim !== void 0 ? _p$delim : '';
  p.presets = (_p$presets = p === null || p === void 0 ? void 0 : p.presets) !== null && _p$presets !== void 0 ? _p$presets : PRESETS;
  p.vectify = (_p$vectify = p === null || p === void 0 ? void 0 : p.vectify) !== null && _p$vectify !== void 0 ? _p$vectify : splitter.splitLiteral;
  return p;
};

const decoCamel = (text, {
  delim = '',
  presets = PRESETS,
  effects
} = {}) => {
  return cosmetics.call({
    delim,
    presets,
    effects,
    vectify: splitter.splitCamel
  }, text);
};
const decoSnake = (text, {
  delim = enumChars.DA,
  presets = PRESETS,
  effects
} = {}) => {
  return cosmetics.call({
    delim,
    presets,
    effects,
    vectify: splitter.splitSnake
  }, text);
};
const decoPhrase = (text, {
  delim = enumChars.SP,
  presets = PRESETS,
  effects
} = {}) => {
  return cosmetics.call({
    delim,
    presets,
    effects,
    vectify: Splitter(delim)
  }, text);
};

/**
 * @param {string} text
 * @param {Object} [p]
 * @param {string} [p.delim]
 * @param {Object[]} [p.presets]
 * @param {string[]} [p.effects]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */

const deco = (text, p = {}) => cosmetics.call(presetString(p), text);
/**
 *
 * @param {Object} p
 * @param {string} [p.delim]
 * @param {Object[]} [p.presets]
 * @param {string[]} [p.effects]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {Function}
 */

const Deco = (p = {}) => cosmetics.bind(presetString(p));

exports.Deco = Deco;
exports.deco = deco;
exports.decoCamel = decoCamel;
exports.decoPhrase = decoPhrase;
exports.decoSnake = decoSnake;
