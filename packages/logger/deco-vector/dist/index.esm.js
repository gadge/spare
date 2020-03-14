import { FRESH, JUNGLE } from '@palett/presets';
import { AEU, LF, TB } from '@spare/util';
import { vettro } from '@spare/vettro';
import { fluoVector } from '@palett/fluo-vector';
import { deco as deco$1, Deco as Deco$1 } from '@spare/deco-entries';

// from x => typeof x
const STR = 'string';

const quoteString = function (x) {
  const {
    quote
  } = this;
  return typeof x === STR ? quote + x + quote : x;
};

function cosmetics(vec) {
  if (!vec || !vec.length) return AEU;
  const {
    head,
    tail,
    preset = FRESH,
    stringPreset = JUNGLE
  } = this;
  let {
    abstract,
    delimiter,
    quote,
    bracket
  } = this;
  if (bracket && delimiter.includes(LF)) delimiter += TB;
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
  } = vettro(vec, {
    head,
    tail,
    abstract,
    hr: '...'
  });
  if (preset) text = fluoVector(text, {
    values: raw,
    preset,
    stringPreset
  });
  let result = text.length ? text.join(delimiter) : AEU;
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
  preset = FRESH,
  stringPreset = JUNGLE,
  head,
  tail,
  dash: dash = ') ',
  delimiter: delimiter = ',\n',
  quote: quote = null,
  bracket: bracket = false
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
 * @param {?string} [quote]
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
  dash: dash = ') ',
  delimiter: delimiter = ',\n',
  quote: quote = null,
  bracket: bracket = false
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
