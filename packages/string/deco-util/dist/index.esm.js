import { FRESH, OCEAN, PLANET, JUNGLE, SUBTLE } from '@palett/presets';
import { NONE, BRK, BRC } from '@spare/enum-brackets';
import { LF, TB, CO } from '@spare/enum-chars';
import { ROWWISE, POINTWISE, COLUMNWISE } from '@vect/matrix';
import { STR } from '@typen/enum-data-types';
import { br } from '@spare/bracket';

const presetEntriesOptions = o => {
  o.preset = o.preset || FRESH;
  o.stringPreset = o.stringPreset || OCEAN;
  o.dash = o.dash || ' > ';
  o.delim = o.delim || LF;
  o.bracket = !o.bracket ? NONE : BRK;
  return o;
};

const presetObjectOptions = o => {
  o.preset = o.preset || FRESH;
  o.stringPreset = o.stringPreset || PLANET;
  o.dash = o.dash || ': ';
  o.delim = o.delim || ',' + LF;
  o.bracket = !o.bracket ? NONE : BRC;
  return o;
};

const presetVectorOptions = o => {
  var _o$indexed;

  o.indexed = (_o$indexed = o.indexed) !== null && _o$indexed !== void 0 ? _o$indexed : true;
  o.preset = o.preset || FRESH;
  o.stringPreset = o.stringPreset || JUNGLE;
  o.dash = o.dash || ') ';
  o.delim = o.delim || ',' + LF;
  o.bracket = !o.bracket ? NONE : BRK;
  return o;
};

const presetMatrixOptions = o => {
  o.direct = o.direct || ROWWISE;
  o.preset = o.preset || FRESH;
  o.preset = o.preset || OCEAN;
  o.delim = o.delim || ', ';
  o.bracket = !o.bracket ? NONE : BRK;
  return o;
};

const presetCrostabOptions = o => {
  var _o$direct, _o$ansi;

  o.direct = (_o$direct = o.direct) !== null && _o$direct !== void 0 ? _o$direct : POINTWISE;
  o.preset = o.preset || FRESH;
  o.stringPreset = o.stringPreset || JUNGLE;
  o.labelPreset = o.labelPreset || SUBTLE;
  o.delim = o.delim || LF;
  o.ansi = (_o$ansi = o.ansi) !== null && _o$ansi !== void 0 ? _o$ansi : true;
  return o;
};

const presetTableOptions = o => {
  var _o$direct, _o$ansi;

  o.direct = (_o$direct = o.direct) !== null && _o$direct !== void 0 ? _o$direct : COLUMNWISE;
  o.preset = o.preset || FRESH;
  o.stringPreset = o.stringPreset || JUNGLE;
  o.labelPreset = o.labelPreset || SUBTLE;
  o.delim = o.delim || LF;
  o.ansi = (_o$ansi = o.ansi) !== null && _o$ansi !== void 0 ? _o$ansi : true;
  return o;
};

const presetSamplesOptions = o => {
  o.indexed = o.indexed || true;
  o.direct = o.direct || COLUMNWISE;
  o.preset = o.preset || FRESH;
  o.keyPreset = o.keyPreset || SUBTLE;
  o.stringPreset = o.stringPreset || JUNGLE;
  o.delim = o.delim || ', ';
  o.bracket = !o.bracket ? NONE : BRK;
  return o;
};

const quoteString = function (x) {
  const {
    qt
  } = this;
  return typeof x === STR ? qt + x + qt : x;
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
  const IND = TB.repeat(lv),
        LFI = LF + IND;
  return hover ? `${LFI + TB}${lines.join(de + LFI + TB)}${de + LFI}` : `${IND + TB}${lines.join(de + LFI + TB)}${de}`;
};
const liner = (lines, {
  discrete = false,
  delim = LF,
  bracket = NONE,
  level = 0
} = {}) => discrete ? lines : lines.length && /\n/.test(delim) ? br(joinLines(lines, /,/.test(delim) ? CO : '', level, bracket), bracket) : br(lines.join(delim), bracket);

export { joinLines, liner, pipeQuote, presetCrostabOptions, presetEntriesOptions, presetMatrixOptions, presetObjectOptions, presetSamplesOptions, presetTableOptions, presetVectorOptions, quoteString };
