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
    qt
  } = this;
  return typeof x === STR ? qt + x + qt : x;
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
    de,
    qt,
    br
  } = this;
  if (br && de.includes(util.LF)) de += util.TB;
  if (qt) abstract = abstract ? x => {
    var _ref, _x;

    return _ref = (_x = x, abstract(_x)), quoteString.bind({
      qt
    })(_ref);
  } : quoteString.bind({
    qt
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
  let result = text.length ? text.join(de) : util.AEU;
  if (br) result = '[ ' + result + ' ]';
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
 * @param {string} da
 * @param {string} de
 * @param {?string} qt
 * @param {boolean} br
 * @return {*}
 */

const deco = (vec, {
  indexed = true,
  abstract,
  preset = presets.FRESH,
  stringPreset = presets.JUNGLE,
  head,
  tail,
  dash: da = ') ',
  delimiter: de = ',\n',
  quote: qt = null,
  bracket: br = false
} = {}) => indexed ? decoEntries.deco.call({
  indexed,
  abstract,
  preset,
  stringPreset,
  head,
  tail,
  da,
  de,
  qt,
  br
}, vec) : cosmetics.call({
  abstract,
  preset,
  stringPreset,
  head,
  tail,
  da,
  de,
  qt,
  br
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
  dash: da = ') ',
  delimiter: de = ',\n',
  quote: qt = null,
  bracket: br = false
} = {}) => indexed ? decoEntries.Deco({
  indexed,
  abstract,
  preset,
  stringPreset,
  head,
  tail,
  da,
  de,
  qt,
  br
}) : cosmetics.bind({
  abstract,
  preset,
  stringPreset,
  head,
  tail,
  da,
  de,
  qt,
  br
});

exports.Deco = Deco;
exports.deco = deco;
