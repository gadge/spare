import { FRESH, JUNGLE } from '@palett/presets';
import { AEU } from '@spare/util';
import { vettro } from '@spare/vettro';
import { deco as deco$1 } from '@spare/deco-entries';
import { fluoVector } from '@palett/fluo-vector';

function cosmati(vec) {
  if (!vec || !vec.length) return AEU;
  const {
    indexed
  } = this;
  if (indexed) return deco$1(Object.entries(vec), this);
  const {
    abstract,
    head,
    tail,
    preset = FRESH,
    stringPreset = JUNGLE,
    delimiter = ',\n'
  } = this;
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
  return text.length ? text.join(delimiter) : AEU;
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
  preset = FRESH,
  stringPreset = JUNGLE,
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
  preset = FRESH,
  stringPreset = JUNGLE,
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

export { Deco, deco };
