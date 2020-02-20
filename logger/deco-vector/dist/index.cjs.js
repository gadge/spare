'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('@spare/util');
var vettro = require('@spare/vettro');
var decoEntries = require('@spare/deco-entries');
var fluoVector = require('@palett/fluo-vector');
var presets = require('@palett/presets');

/**
 *
 * @param {*[]} arr
 * @param {function(*):string} [abstract]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {{[max]:string|number[],[min]:string|number[],[na]:string|number[]}} [visual]
 * @param {string} delimiter
 * @param {boolean} indexed
 * @return {*}
 */

const deco = (arr, {
  abstract,
  head,
  tail,
  preset = presets.FRESH,
  stringPreset = presets.JUNGLE,
  delimiter = ',\n',
  indexed = true,
  dash = ') '
} = {}) => {
  if (!arr || !arr.length) return util.AEU;
  if (indexed) return decoEntries.deco(Object.entries(arr), {
    abstract,
    head,
    tail,
    preset,
    stringPreset,
    delimiter,
    dash
  });
  let {
    raw,
    text
  } = vettro.vettro(arr, {
    head,
    tail,
    abstract,
    hr: '...'
  });
  if (preset) text = fluoVector.fluoVector(text, {
    values: raw,
    preset,
    stringPreset
  });
  return text.length ? text.join(delimiter) : util.AEU;
};

exports.deco = deco;
