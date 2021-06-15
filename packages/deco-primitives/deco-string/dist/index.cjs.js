'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoConfig = require('@spare/deco-config');
var enumChars = require('@texting/enum-chars');
var presetDeco = require('@spare/preset-deco');
var splitter = require('@texting/splitter');
var enumColorantModes = require('@palett/enum-colorant-modes');
var fluoVector = require('@palett/fluo-vector');
var charsetAnsi = require('@texting/charset-ansi');
var fold = require('@texting/fold');

const CONFIG = {
  vectify: splitter.splitLiteral,
  width: 0
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

const _decoString = function (text) {
  var _text;

  const config = this,
        width = config.width,
        length = (_text = text) == null ? void 0 : _text.length;
  if (!length) return '';
  if (charsetAnsi.hasAnsi(text)) return text;
  if (width && length > width) text = fold.fold.call({
    width: width,
    firstLineIndent: config.firstLineIndent,
    delim: enumChars.LF + enumChars.TB.repeat(config.indent ?? 0)
  }, text);
  if (config.presets) text = stringColour.call(config, text);
  return text;
};
const stringColour = function (text) {
  const config = this;
  const {
    vectify,
    joiner
  } = this;
  const words = vectify(text);
  fluoVector.fluoVector.call(enumColorantModes.MUTATE_PIGMENT, words, config.presets); // use: presets, effects

  return joiner ? joiner(words) : words.join('');
};

const Splitter = delim => v => String.prototype.split.call(v, delim);

const decoCamel = (text, {
  delim = '',
  presets,
  effects
} = {}) => {
  return _decoString.call({
    delim,
    presets,
    effects,
    vectify: splitter.splitCamel
  }, text);
};
const decoSnake = (text, {
  delim = enumChars.DA,
  presets,
  effects
} = {}) => {
  return _decoString.call({
    delim,
    presets,
    effects,
    vectify: splitter.splitSnake
  }, text);
};
const decoPhrase = (text, {
  delim = enumChars.SP,
  presets,
  effects
} = {}) => {
  return _decoString.call({
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

const deco = (text, p = {}) => _decoString.call(decoConfig.DecoConfig.parse(p, CONFIG, presetDeco.DUAL_PRESET_COLLECTION), text);
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

const Deco = (p = {}) => _decoString.bind(decoConfig.DecoConfig.parse(p, CONFIG, presetDeco.DUAL_PRESET_COLLECTION));

exports.Deco = Deco;
exports._decoString = _decoString;
exports.deco = deco;
exports.decoCamel = decoCamel;
exports.decoPhrase = decoPhrase;
exports.decoSnake = decoSnake;
