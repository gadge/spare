import { FRESH, JUNGLE } from '@palett/presets';
import { size, ROWWISE } from '@vect/matrix';
import { AEU, RN } from '@spare/util';
import { mattro } from '@spare/mattro';
import { padMatrix } from '@spare/pad-matrix';
import { fluo } from '@palett/fluo-matrix';

/**
 *
 * @param {*[][]} matrix
 * @returns {string}
 */

const cosmati = function (matrix) {
  const [height, width] = size(matrix);
  if (!height || !width) return AEU;
  const {
    direct = ROWWISE,
    preset = FRESH,
    stringPreset = JUNGLE,
    delimiter = ', ',
    ansi = false
  } = this;
  const {
    raw,
    text
  } = mattro(matrix, this);
  const dye = preset && fluo(raw, {
    direct,
    preset,
    stringPreset,
    colorant: true
  });
  matrix = padMatrix(text, {
    raw,
    dye,
    ansi
  }).map(line => `[${line.join(delimiter)}]`).join(`,${RN} `);
  return '[' + matrix + ']';
};

/**
 *
 * @param {*[][]} matrix
 * @param {number} [direct] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [abstract]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [preset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [stringPreset]
 * @param {number} [top=0]
 * @param {number} [left=0]
 * @param {number} [bottom=0]
 * @param {number} [right=0]
 * @param {string} [delimiter=',']
 * @param {boolean} [ansi=false]
 * @returns {string}
 */

const deco = (matrix, {
  direct = ROWWISE,
  abstract,
  preset = FRESH,
  stringPreset = JUNGLE,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  delimiter = ', ',
  ansi = false
} = {}) => cosmati.call({
  direct,
  abstract,
  preset,
  stringPreset,
  top,
  left,
  bottom,
  right,
  delimiter,
  ansi
}, matrix);

/**
 *
 * @param {number} [direct] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [abstract]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [preset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [stringPreset]
 * @param {number} [top=0]
 * @param {number} [left=0]
 * @param {number} [bottom=0]
 * @param {number} [right=0]
 * @param {string} [delimiter=',']
 * @param {boolean} [ansi=false]
 * @returns {string}
 */

const Deco = ({
  direct = ROWWISE,
  abstract,
  preset = FRESH,
  stringPreset = JUNGLE,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  delimiter = ', ',
  ansi = false
} = {}) => cosmati.bind({
  direct,
  abstract,
  preset,
  stringPreset,
  top,
  left,
  bottom,
  right,
  delimiter,
  ansi
});

export { Deco, deco };
