'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var util = require('@spare/util');
var vettro = require('@spare/vettro');
var fluoVector = require('@palett/fluo-vector');
var decoEntries = require('@spare/deco-entries');

// from x => typeof x
const STR = 'string';

const quoteString = function (x) {
  const {
    quote
  } = this;
  return typeof x === STR ? quote + x + quote : x;
};

function cosmetics(vec) {
  if (!vec || !vec.length) return util.AEU;
  const {
    head,
    tail,
    preset = presets.FRESH,
    stringPreset = presets.JUNGLE
  } = this;
  let {
    abstract,
    delimiter,
    quote,
    bracket
  } = this;
  if (bracket && delimiter.includes(util.LF)) delimiter += util.TB;
  if (quote) abstract = abstract ? x => {
    var _ref, _x;

    return _ref = (_x = x, abstract(_x)), quoteString.bind({
      quote
    })(_ref);
  } : quoteString.bind({
    quote
  });
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
  let result = text.length ? text.join(delimiter) : util.AEU;
  if (bracket) result = '[ ' + result + ' ]';
  return result;
}

/**
 *
 * @param {*[]} vec
 * @param {boolean} [indexed]
 * @param {function(*):string} [abstract]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [preset]
 * @param {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} [stringPreset]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {string} dash
 * @param {string} delimiter
 * @param {?string} quote
 * @param {boolean} bracket
 * @return {*}
 */

const deco = (vec, {
  indexed = true,
  abstract,
  preset = presets.FRESH,
  stringPreset = presets.JUNGLE,
  head,
  tail,
  dash: dash = ') ',
  delimiter: delimiter = ',\n',
  quote: quote = null,
  bracket: bracket = false
} = {}) => indexed ? decoEntries.deco.call({
  indexed,
  abstract,
  preset,
  stringPreset,
  head,
  tail,
  dash,
  delimiter,
  quote,
  bracket
}, vec) : cosmetics.call({
  abstract,
  preset,
  stringPreset,
  head,
  tail,
  dash,
  delimiter,
  quote,
  bracket
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
 * @param {?string} [quote]
 * @param bracket
 * @return {*}
 */

const Deco = ({
  indexed = true,
  abstract,
  preset = presets.FRESH,
  stringPreset = presets.JUNGLE,
  head,
  tail,
  dash: dash = ') ',
  delimiter: delimiter = ',\n',
  quote: quote = null,
  bracket: bracket = false
} = {}) => indexed ? decoEntries.Deco({
  indexed,
  abstract,
  preset,
  stringPreset,
  head,
  tail,
  dash,
  delimiter,
  quote,
  bracket
}) : cosmetics.bind({
  abstract,
  preset,
  stringPreset,
  head,
  tail,
  dash,
  delimiter,
  quote,
  bracket
});

exports.Deco = Deco;
exports.deco = deco;
