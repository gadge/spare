'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var matrix = require('@vect/matrix');
var enumDataTypes = require('@typen/enum-data-types');
var enumChars = require('@spare/enum-chars');

const presetEntriesOptions = o => {
  o.preset = o.preset || presets.FRESH;
  o.preset = o.preset || presets.OCEAN;
  o.dash = o.dash || ' > ';
  o.delimiter = o.delimiter || '\n';
  return o;
};

const presetVectorOptions = o => {
  o.indexed = o.indexed || true;
  o.preset = o.preset || presets.FRESH;
  o.stringPreset = o.stringPreset || presets.JUNGLE;
  o.dash = o.dash || ') ';
  o.delimiter = o.delimiter || ',\n';
  return o;
};

const presetMatrixOptions = o => {
  o.direct = o.direct || matrix.ROWWISE;
  o.preset = o.preset || presets.FRESH;
  o.preset = o.preset || presets.OCEAN;
  o.delimiter = o.delimiter || ', ';
  return o;
};

const presetCrostabOptions = o => {
  o.direct = o.direct || matrix.POINTWISE;
  o.preset = o.preset || presets.FRESH;
  o.stringPreset = o.stringPreset || presets.JUNGLE;
  o.labelPreset = o.labelPreset || presets.SUBTLE;
  o.ansi = o.ansi || true;
  return o;
};

const presetTableOptions = o => {
  o.direct = o.direct || matrix.COLUMNWISE;
  o.preset = o.preset || presets.FRESH;
  o.stringPreset = o.stringPreset || presets.JUNGLE;
  o.labelPreset = o.labelPreset || presets.SUBTLE;
  o.ansi = o.ansi || true;
  return o;
};

const presetSamplesOptions = o => {
  o.indexed = o.indexed || true;
  o.direct = o.direct || matrix.COLUMNWISE;
  o.preset = o.preset || presets.FRESH;
  o.keyPreset = o.keyPreset || presets.SUBTLE;
  o.stringPreset = o.stringPreset || presets.JUNGLE;
  o.delimiter = o.delimiter || ', ';
  o.bracket = o.bracket || true;
  return o;
};

const quoteString = function (x) {
  const {
    qt
  } = this;
  return typeof x === enumDataTypes.STR ? qt + x + qt : x;
};
const makeQuoteAbstract = (abstract, quote) => {
  if (!(quote === null || quote === void 0 ? void 0 : quote.length)) return abstract;
  if (!abstract) return quoteString.bind({
    qt: quote
  });
  return x => {
    var _ref, _x;

    return _ref = (_x = x, abstract(_x)), quoteString.bind({
      qt: quote
    })(_ref);
  };
};

const joinLines = (lines, level) => {
  const rn = enumChars.LF + enumChars.TB.repeat(level);
  return `${rn}  ${lines.join(`,${rn + enumChars.TB}`)}${rn}`;
};

exports.joinLines = joinLines;
exports.makeQuoteAbstract = makeQuoteAbstract;
exports.presetCrostabOptions = presetCrostabOptions;
exports.presetEntriesOptions = presetEntriesOptions;
exports.presetMatrixOptions = presetMatrixOptions;
exports.presetSamplesOptions = presetSamplesOptions;
exports.presetTableOptions = presetTableOptions;
exports.presetVectorOptions = presetVectorOptions;
exports.quoteString = quoteString;
