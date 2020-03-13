'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var util = require('@spare/util');
var vettro = require('@spare/vettro');
var decoEntries = require('@spare/deco-entries');
var fluoVector = require('@palett/fluo-vector');

function cosmati(vec) {
  if (!vec || !vec.length) return util.AEU;
  const {
    indexed
  } = this;
  if (indexed) return decoEntries.deco(Object.entries(vec), this);
  const {
    abstract,
    head,
    tail,
    preset = presets.FRESH,
    stringPreset = presets.JUNGLE,
    delimiter = ',\n'
  } = this;
  let {
    raw,
    text
  } = vettro.vettro(vec, {
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
} // * @this {{
// *    abstract: function(*):string,
// *    head: number,
// *    tail: number,
// *    preset: {max:string,min:string,na:string},
// *    stringPreset: {max:string,min:string,na:string},
// *    delimiter: string,
// *    indexed: boolean,
// *    dash: string,
// * }}

/**
 *
 * @param {*[]} vec
 * @param {boolean} [indexed]
 * @param {function(*):string} [abstract]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [preset]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [stringPreset]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {string} [delimiter]
 * @param {string} [dash]
 * @return {*}
 */

const deco = (vec, {
  indexed = true,
  abstract,
  preset = presets.FRESH,
  stringPreset = presets.JUNGLE,
  head,
  tail,
  delimiter = ',\n',
  dash = ') '
} = {}) => cosmati.call({
  indexed,
  abstract,
  preset,
  stringPreset,
  head,
  tail,
  delimiter,
  dash
}, vec);

/**
 *
 * @param {boolean} [indexed]
 * @param {function(*):string} [abstract]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [preset]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [stringPreset]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {string} [delimiter]
 * @param {string} [dash]
 * @return {*}
 */

const Deco = ({
  indexed = true,
  abstract,
  preset = presets.FRESH,
  stringPreset = presets.JUNGLE,
  head,
  tail,
  delimiter = ',\n',
  dash = ') '
} = {}) => cosmati.bind({
  indexed,
  abstract,
  preset,
  stringPreset,
  head,
  tail,
  delimiter,
  dash
});

exports.Deco = Deco;
exports.deco = deco;
