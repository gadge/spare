import { FRESH, JUNGLE } from '@palett/presets';
import { AEU, LF, TB, ELLIP } from '@spare/enum-chars';
import { vettro } from '@spare/vettro';
import { fluoVector } from '@palett/fluo-vector';
import { deco as deco$1, Deco as Deco$1 } from '@spare/deco-entries';

// from x => typeof x
const STR = 'string';

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

function cosmetics(vec) {
  if (!vec || !vec.length) return AEU;
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
    bracket
  } = this;
  if (bracket && delimiter.includes(LF)) delimiter += TB;
  let {
    raw,
    text
  } = vettro(vec, {
    head,
    tail,
    abstract: makeQuoteAbstract(abstract, quote),
    hr: ELLIP
  });
  if (preset) fluoVector(text, {
    values: raw,
    preset,
    stringPreset,
    mutate: true
  });
  const result = text.length ? text.join(delimiter) : AEU;
  return bracket ? '[ ' + result + ' ]' : result;
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
  preset = FRESH,
  stringPreset = JUNGLE,
  head,
  tail,
  dash = ') ',
  delimiter = ',\n',
  quote,
  bracket
} = {}) => indexed ? deco$1.call({
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
 * @param {?string} [delimiter]
 * @param quote
 * @param bracket
 * @return {*}
 */

const Deco = ({
  indexed = true,
  abstract,
  preset = FRESH,
  stringPreset = JUNGLE,
  head,
  tail,
  dash = ') ',
  delimiter = ',\n',
  quote = null,
  bracket = false
} = {}) => indexed ? Deco$1({
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

export { Deco, deco };
