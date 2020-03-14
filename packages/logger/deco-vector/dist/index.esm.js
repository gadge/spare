import { FRESH, JUNGLE } from '@palett/presets';
import { AEU, LF, TB } from '@spare/util';
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
    de,
    qt,
    br
  } = this;
  if (br && de.includes(LF)) de += TB;
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
  let result = text.length ? text.join(de) : AEU;
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
  preset = FRESH,
  stringPreset = JUNGLE,
  head,
  tail,
  dash: da = ') ',
  delimiter: de = ',\n',
  quote: qt = null,
  bracket: br = false
} = {}) => indexed ? deco$1.call({
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
  preset = FRESH,
  stringPreset = JUNGLE,
  head,
  tail,
  dash: da = ') ',
  delimiter: de = ',\n',
  quote: qt = null,
  bracket: br = false
} = {}) => indexed ? Deco$1({
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

export { Deco, deco };
