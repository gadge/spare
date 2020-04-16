'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fluoVector = require('@palett/fluo-vector');
var vectorZipper = require('@vect/vector-zipper');
var presets = require('@palett/presets');
var phrasing = require('@spare/phrasing');
var enumChars = require('@spare/enum-chars');

const decoCamel = (phrase, {
  delim = '',
  preset = presets.JUNGLE,
  stringPreset = presets.SUBTLE
} = {}) => {
  var _phrase;

  const words = (_phrase = phrase, phrasing.camelToVector(_phrase));
  const dyes = fluoVector.fluoVector(words, {
    preset,
    stringPreset,
    colorant: true
  });
  return vectorZipper.zipper(words, dyes, (word, dye) => {
    var _word;

    return _word = word, dye(_word);
  }).join(delim);
};
const decoSnake = (phrase, {
  delim = enumChars.DA,
  preset = presets.JUNGLE,
  stringPreset = presets.SUBTLE
} = {}) => {
  var _phrase2;

  const words = (_phrase2 = phrase, phrasing.snakeToVector(_phrase2));
  const dyes = fluoVector.fluoVector(words, {
    preset,
    stringPreset,
    colorant: true
  });
  return vectorZipper.zipper(words, dyes, (word, dye) => {
    var _word2;

    return _word2 = word, dye(_word2);
  }).join(delim);
};
const decoPhrase = (phrase, {
  delim = enumChars.SP,
  preset = presets.JUNGLE,
  stringPreset = presets.SUBTLE
} = {}) => {
  const words = phrase.split(delim);
  const dyes = fluoVector.fluoVector(words, {
    preset,
    stringPreset,
    colorant: true
  });
  return vectorZipper.zipper(words, dyes, (word, dye) => {
    var _word3;

    return _word3 = word, dye(_word3);
  }).join(delim);
}; // export const deco

exports.decoCamel = decoCamel;
exports.decoPhrase = decoPhrase;
exports.decoSnake = decoSnake;
