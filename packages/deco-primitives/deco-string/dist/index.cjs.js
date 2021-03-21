'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fluoVector = require('@palett/fluo-vector');
var charset = require('@spare/charset');
var enumChars = require('@spare/enum-chars');
var fold = require('@spare/fold');
var splitter = require('@spare/splitter');
var presets = require('@palett/presets');
var presetDeco = require('@spare/preset-deco');
var nullish = require('@typen/nullish');

// export const
//   FUNC = '',
//   PIGM = '',
//   HEX = ''
const RENDER = 'render';
const MUTATE_PIGMENT = {
  colorant: RENDER,
  mutate: true
};

/**
 * @prop width - foldToVector
 * @prop firstLineIndent - foldToVector
 * @prop indent - applicable only when valid width
 * @prop vectify - fluoString
 * @prop joiner - fluoString
 * @prop presets - fluoString
 * @prop effects - fluoString
 * @param text
 * @return {string}
 */

const cosmetics = function (text) {
  var _text, _context$indent;

  const context = this,
        length = (_text = text) === null || _text === void 0 ? void 0 : _text.length;
  if (!length) return '';
  if (charset.hasAnsi(text)) return text;
  const {
    width,
    presets
  } = context;
  if (width && length > width) text = fold.fold.call({
    width: width,
    firstLineIndent: context.firstLineIndent,
    delim: enumChars.LF + enumChars.TB.repeat((_context$indent = context.indent) !== null && _context$indent !== void 0 ? _context$indent : 0)
  }, text);
  if (presets) text = fluoString.call(context, text);
  return text;
};
const fluoString = function (text) {
  const config = this;
  const {
    vectify,
    joiner
  } = this;
  const words = vectify(text);
  fluoVector.fluoVector.call(MUTATE_PIGMENT, words, config.fluos); // use: presets, effects

  return joiner ? joiner(words) : words.join('');
};

const NUMERIC_PRESET = presets.ATLAS;
const LITERAL_PRESET = presets.SUBTLE;
const PRESETS = [NUMERIC_PRESET, LITERAL_PRESET];
const presetString = p => {
  // if (nullish(p.presets)) p.presets = PRESETS
  presetDeco.assignFluoConfigs(p); // p |> JSON.stringify |> console.log

  if (nullish.nullish(p.vectify)) p.vectify = splitter.splitLiteral;
  if (nullish.nullish(p.width)) p.width = 0;
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
