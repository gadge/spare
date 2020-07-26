'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumMutabilities = require('@analys/enum-mutabilities');
var fluoVector = require('@palett/fluo-vector');
var enumChars = require('@spare/enum-chars');
var fold = require('@spare/fold');
var lange = require('@spare/lange');
var vectorMapper = require('@vect/vector-mapper');
var splitter = require('@spare/splitter');
var presets = require('@palett/presets');

/**
 * @prop width - foldToVector
 * @prop firstLineIndent - foldToVector
 * @prop indent - applicable only when valid width
 * @prop vectify - fluoString
 * @prop joiner - fluoString
 * @prop presets - fluoString
 * @prop effects - fluoString
 * @param text
 * @return {string|{length}|*}
 */

const cosmetics = function (text) {
  const context = this,
        length = text === null || text === void 0 ? void 0 : text.length;
  if (!length) return '';
  if (lange.hasAnsi(text)) return text;
  const {
    width
  } = context;

  if (width && length > width) {
    const {
      indent,
      presets
    } = context;
    const lines = fold.foldToVector.call(context, text);
    if (presets) vectorMapper.mutate(lines, fluoString.bind(context));
    return lines.join(enumChars.LF + enumChars.TB.repeat(indent !== null && indent !== void 0 ? indent : 0));
  } else {
    return fluoString.call(context, text);
  }
};
const fluoString = function (text) {
  const {
    vectify,
    joiner,
    presets,
    effects
  } = this;
  const words = vectify(text);
  fluoVector.fluoVector.call(enumMutabilities.MUTABLE, words, presets, effects);
  return joiner ? joiner(words) : words.join('');
};

const NUMERIC_PRESET = presets.ATLAS;
const LITERAL_PRESET = presets.SUBTLE;
const PRESETS = [NUMERIC_PRESET, LITERAL_PRESET];
const presetString = p => {
  if (!p.presets) p.presets = PRESETS;
  if (!p.vectify) p.vectify = splitter.splitLiteral;
  if (!p.width) p.width = 80;
  return p;
};

const Splitter = delim => v => String.prototype.split.call(v, delim);

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
 * @param {number} [p.width=80]
 * @param {number} [p.indent]
 * @param {number} [p.firstLineIndent]
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
 * @param {number} [p.width=80]
 * @param {number} [p.indent]
 * @param {number} [p.firstLineIndent]
 * @param {Object[]} [p.presets]
 * @param {string[]} [p.effects]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {Function}
 */

const Deco = (p = {}) => cosmetics.bind(presetString(p));

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
exports.decoCamel = decoCamel;
exports.decoPhrase = decoPhrase;
exports.decoSnake = decoSnake;
