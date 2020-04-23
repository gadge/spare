'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var enumChars = require('@spare/enum-chars');
var splitter = require('@spare/splitter');
var fluoVector = require('@palett/fluo-vector');
var vectorZipper = require('@vect/vector-zipper');

const Splitter = delim => x => String.prototype.split.call(x, delim);

const Joiner = delim => v => Array.prototype.join.call(v, delim);

const cosmetics = function (text) {
  const {
    delim
  } = this;
  const {
    vectify,
    joiner
  } = this;
  const {
    preset,
    stringPreset,
    filter
  } = this;
  const words = (vectify || Splitter(delim))(text);
  const dyes = fluoVector.fluoVector(words, {
    preset,
    stringPreset,
    colorant: true,
    filter
  });
  const dyed = vectorZipper.zipper(words, dyes, (word, dye) => {
    var _word;

    return _word = word, dye(_word);
  });
  return (joiner || Joiner(delim))(dyed);
}; // filter: x => typeof x === STR ? x.trim().length > 0 : true

const presetString = p => {
  var _p$delim, _p$preset, _p$stringPreset;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.SP;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : presets.INSTA;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : presets.METRO;
  return p;
};

const WORDS = 'words',
      CAMEL = 'camel',
      SNAKE = 'snake';
/**
 * @param {string} text
 * @param {Object} p
 * @param {string} [p.delim]
 * @param {Object} [p.preset]
 * @param {Object} [p.stringPreset]
 * @param {Function} [p.filter]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */

const deco = (text, p = {}) => cosmetics.call(presetString(p), text);
/**
 *
 * @param {Object} p
 * @param {string} [p.delim]
 * @param {Object} [p.preset]
 * @param {Object} [p.stringPreset]
 * @param {Function} [p.filter]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */

const Deco = (p = {}) => cosmetics.bind(presetString(p));
const decoCamel = (text, {
  delim = '',
  preset = presets.JUNGLE,
  stringPreset = presets.SUBTLE
} = {}) => {
  return cosmetics.call({
    delim,
    preset,
    stringPreset,
    vectify: splitter.splitCamel
  }, text);
};
const decoSnake = (text, {
  delim = enumChars.DA,
  preset = presets.JUNGLE,
  stringPreset = presets.SUBTLE
} = {}) => {
  return cosmetics.call({
    delim,
    preset,
    stringPreset,
    vectify: splitter.splitSnake
  }, text);
};
const decoPhrase = (text, {
  delim = enumChars.SP,
  preset = presets.JUNGLE,
  stringPreset = presets.SUBTLE
} = {}) => {
  return cosmetics.call({
    delim,
    preset,
    stringPreset
  }, text);
};

exports.CAMEL = CAMEL;
exports.Deco = Deco;
exports.SNAKE = SNAKE;
exports.WORDS = WORDS;
exports.deco = deco;
exports.decoCamel = decoCamel;
exports.decoPhrase = decoPhrase;
exports.decoSnake = decoSnake;
