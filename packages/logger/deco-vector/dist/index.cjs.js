'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');
var vettro = require('@spare/vettro');
var decoEntries = require('@spare/deco-entries');
var fluoVector = require('@palett/fluo-vector');
var decoUtil = require('@spare/deco-util');

function cosmetics(vec) {
  if (this === null || this === void 0 ? void 0 : this.indexed) return decoEntries.cosmetics.call(this, Object.entries(vec));
  if (!vec) return String(vec);
  const {
    head,
    tail,
    preset,
    stringPreset,
    read,
    quote
  } = this;
  let {
    raw,
    text
  } = vettro.vettro(vec, {
    head,
    tail,
    read: decoUtil.pipeQuote(read, quote),
    hr: enumChars.ELLIP
  });
  if (preset) fluoVector.fluoVector(text, {
    values: raw,
    preset,
    stringPreset,
    mutate: true
  });
  return decoUtil.liner(text, this);
}

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/***
 *
 * @param {Object} options
 * @param {boolean} [options.indexed=true]
 * @param {function(*):string} [options.read]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=') ']
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRK] - BRK = 1
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const Deco = (options = {}) => cosmetics.bind(decoUtil.presetVectorOptions(options));
/***
 *
 * @param {*[]} vector
 * @param {Object} options
 * @param {boolean} [options.indexed=true]
 * @param {function(*):string} [options.read]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=') ']
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRK] - BRK = 1
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const deco = (vector, options = {}) => cosmetics.call(decoUtil.presetVectorOptions(options), vector);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
