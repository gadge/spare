'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoEntries = require('@spare/deco-entries');
var enumChars = require('@spare/enum-chars');
var vettro = require('@spare/vettro');
var fluoVector = require('@palett/fluo-vector');
var decoUtil = require('@spare/deco-util');

function cosmetics(vec) {
  if (!vec || !vec.length) return enumChars.AEU;
  const {
    head,
    tail,
    preset,
    stringPreset
  } = this;
  let {
    abstract,
    delimiter,
    quote,
    bracket,
    discrete
  } = this;
  if (bracket && delimiter.includes(enumChars.LF)) delimiter += enumChars.TB;
  let {
    raw,
    text
  } = vettro.vettro(vec, {
    head,
    tail,
    abstract: decoUtil.makeQuoteAbstract(abstract, quote),
    hr: enumChars.ELLIP
  });
  if (preset) fluoVector.fluoVector(text, {
    values: raw,
    preset,
    stringPreset,
    mutate: true
  });
  return discrete ? text : bracket ? '[ ' + text.join(delimiter) + ' ]' : text.join(delimiter);
}

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/***
 *
 * @param {Object} options
 * @param {boolean} [options.indexed=true]
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=') ']
 * @param {string} [options.delimiter=',\n']
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @returns {string}
 */

const Deco = (options = {}) => options.indexed ? decoEntries.Deco(decoUtil.presetVectorOptions(options)) : cosmetics.bind(decoUtil.presetVectorOptions(options));
/***
 *
 * @param {*[]} vector
 * @param {Object} options
 * @param {boolean} [options.indexed=true]
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=') ']
 * @param {string} [options.delimiter=',\n']
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.discrete]
 * @returns {string}
 */

const deco = (vector, options = {}) => options.indexed ? decoEntries.deco(vector, decoUtil.presetVectorOptions(options)) : cosmetics.call(decoUtil.presetVectorOptions(options), vector);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
