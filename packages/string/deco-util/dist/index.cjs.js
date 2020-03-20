'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var enumBrackets = require('@spare/enum-brackets');
var enumChars = require('@spare/enum-chars');
var matrix = require('@vect/matrix');
var enumDataTypes = require('@typen/enum-data-types');
var bracket = require('@spare/bracket');

const presetEntriesOptions = o => {
  o.preset = o.preset || presets.FRESH;
  o.stringPreset = o.stringPreset || presets.OCEAN;
  o.dash = o.dash || ' > ';
  o.delim = o.delim || enumChars.LF;
  o.bracket = !o.bracket ? enumBrackets.NONE : enumBrackets.BRK;
  return o;
};

const presetObjectOptions = o => {
  o.preset = o.preset || presets.FRESH;
  o.stringPreset = o.stringPreset || presets.PLANET;
  o.dash = o.dash || ': ';
  o.delim = o.delim || ',' + enumChars.LF;
  o.bracket = !o.bracket ? enumBrackets.NONE : enumBrackets.BRC;
  return o;
};

const presetVectorOptions = o => {
  var _o$indexed;

  o.indexed = (_o$indexed = o.indexed) !== null && _o$indexed !== void 0 ? _o$indexed : true;
  o.preset = o.preset || presets.FRESH;
  o.stringPreset = o.stringPreset || presets.JUNGLE;
  o.dash = o.dash || ') ';
  o.delim = o.delim || ',' + enumChars.LF;
  o.bracket = !o.bracket ? enumBrackets.NONE : enumBrackets.BRK;
  return o;
};

const presetMatrixOptions = o => {
  o.direct = o.direct || matrix.ROWWISE;
  o.preset = o.preset || presets.FRESH;
  o.preset = o.preset || presets.OCEAN;
  o.delim = o.delim || ', ';
  o.bracket = !o.bracket ? enumBrackets.NONE : enumBrackets.BRK;
  return o;
};

const presetCrostabOptions = o => {
  var _o$direct, _o$ansi;

  o.direct = (_o$direct = o.direct) !== null && _o$direct !== void 0 ? _o$direct : matrix.POINTWISE;
  o.preset = o.preset || presets.FRESH;
  o.stringPreset = o.stringPreset || presets.JUNGLE;
  o.labelPreset = o.labelPreset || presets.SUBTLE;
  o.delim = o.delim || enumChars.LF;
  o.ansi = (_o$ansi = o.ansi) !== null && _o$ansi !== void 0 ? _o$ansi : true;
  return o;
};

const presetTableOptions = o => {
  var _o$direct, _o$ansi;

  o.direct = (_o$direct = o.direct) !== null && _o$direct !== void 0 ? _o$direct : matrix.COLUMNWISE;
  o.preset = o.preset || presets.FRESH;
  o.stringPreset = o.stringPreset || presets.JUNGLE;
  o.labelPreset = o.labelPreset || presets.SUBTLE;
  o.delim = o.delim || enumChars.LF;
  o.ansi = (_o$ansi = o.ansi) !== null && _o$ansi !== void 0 ? _o$ansi : true;
  return o;
};

const presetSamplesOptions = o => {
  o.indexed = o.indexed || true;
  o.direct = o.direct || matrix.COLUMNWISE;
  o.preset = o.preset || presets.FRESH;
  o.keyPreset = o.keyPreset || presets.SUBTLE;
  o.stringPreset = o.stringPreset || presets.JUNGLE;
  o.delim = o.delim || ', ';
  o.bracket = !o.bracket ? enumBrackets.NONE : enumBrackets.BRK;
  return o;
};

const quoteString = function (x) {
  const {
    qt
  } = this;
  return typeof x === enumDataTypes.STR ? qt + x + qt : x;
};
const pipeQuote = (abstract, quote) => {
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

const joinLines = (lines, de = '', lv, hover = true) => {
  const IND = enumChars.TB.repeat(lv),
        LFI = enumChars.LF + IND;
  return hover ? `${LFI + enumChars.TB}${lines.join(de + LFI + enumChars.TB)}${de + LFI}` : `${IND + enumChars.TB}${lines.join(de + LFI + enumChars.TB)}${de}`;
};
const liner = (lines, {
  discrete = false,
  delim = enumChars.LF,
  bracket: bracket$1 = enumBrackets.NONE,
  level = 0
} = {}) => discrete ? lines : lines.length && /\n/.test(delim) ? bracket.br(joinLines(lines, /,/.test(delim) ? enumChars.CO : '', level, bracket$1), bracket$1) : bracket.br(lines.join(delim), bracket$1);

exports.joinLines = joinLines;
exports.liner = liner;
exports.pipeQuote = pipeQuote;
exports.presetCrostabOptions = presetCrostabOptions;
exports.presetEntriesOptions = presetEntriesOptions;
exports.presetMatrixOptions = presetMatrixOptions;
exports.presetObjectOptions = presetObjectOptions;
exports.presetSamplesOptions = presetSamplesOptions;
exports.presetTableOptions = presetTableOptions;
exports.presetVectorOptions = presetVectorOptions;
exports.quoteString = quoteString;
