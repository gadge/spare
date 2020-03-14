import { FRESH, OCEAN, JUNGLE, SUBTLE } from '@palett/presets';
import { ROWWISE, POINTWISE, COLUMNWISE } from '@vect/matrix';
import { STR } from '@typen/enum-data-types';
import { LF, TB } from '@spare/enum-chars';

const presetEntriesOptions = o => {
  o.preset = o.preset || FRESH;
  o.preset = o.preset || OCEAN;
  o.dash = o.dash || ' > ';
  o.delimiter = o.delimiter || '\n';
  return o;
};

const presetVectorOptions = o => {
  o.indexed = o.indexed || true;
  o.preset = o.preset || FRESH;
  o.stringPreset = o.stringPreset || JUNGLE;
  o.dash = o.dash || ') ';
  o.delimiter = o.delimiter || ',\n';
  return o;
};

const presetMatrixOptions = o => {
  o.direct = o.direct || ROWWISE;
  o.preset = o.preset || FRESH;
  o.preset = o.preset || OCEAN;
  o.delimiter = o.delimiter || ', ';
  return o;
};

const presetCrostabOptions = o => {
  o.direct = o.direct || POINTWISE;
  o.preset = o.preset || FRESH;
  o.stringPreset = o.stringPreset || JUNGLE;
  o.labelPreset = o.labelPreset || SUBTLE;
  o.ansi = o.ansi || true;
  return o;
};

const presetTableOptions = o => {
  o.direct = o.direct || COLUMNWISE;
  o.preset = o.preset || FRESH;
  o.stringPreset = o.stringPreset || JUNGLE;
  o.labelPreset = o.labelPreset || SUBTLE;
  o.ansi = o.ansi || true;
  return o;
};

const presetSamplesOptions = o => {
  o.indexed = o.indexed || true;
  o.direct = o.direct || COLUMNWISE;
  o.preset = o.preset || FRESH;
  o.keyPreset = o.keyPreset || SUBTLE;
  o.stringPreset = o.stringPreset || JUNGLE;
  o.delimiter = o.delimiter || ', ';
  o.bracket = o.bracket || true;
  return o;
};

const quoteString = function (x) {
  const {
    qt
  } = this;
  return typeof x === STR ? qt + x + qt : x;
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
  const rn = LF + TB.repeat(level);
  return `${rn}  ${lines.join(`,${rn + TB}`)}${rn}`;
};

export { joinLines, makeQuoteAbstract, presetCrostabOptions, presetEntriesOptions, presetMatrixOptions, presetSamplesOptions, presetTableOptions, presetVectorOptions, quoteString };
