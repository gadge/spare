import { FRESH, JUNGLE, SUBTLE } from '@palett/presets';
import { size, COLUMNWISE } from '@vect/matrix';
import { AEU, RN } from '@spare/util';
import { vettro } from '@spare/vettro';
import { mattro } from '@spare/mattro';
import { fluoVector } from '@palett/fluo-vector';
import { fluo } from '@palett/fluo-matrix';
import { padTable } from '@spare/pad-table';

/**
 *
 * @param {Object} table
 * @returns {string}
 */

const cosmati = function (table) {
  let matrix = table.rows || table.matrix,
      banner = table.head || table.banner;
  const [height, width] = size(matrix),
        labelWidth = banner && banner.length;
  if (!height || !width || !labelWidth) return AEU;
  const {
    direct = COLUMNWISE,
    abstract,
    headAbstract,
    preset = FRESH,
    stringPreset = JUNGLE,
    labelPreset = SUBTLE,
    top = 0,
    left = 0,
    bottom = 0,
    right = 0,
    ansi = false,
    fullAngle = false
  } = this;
  const [x, b] = [mattro(matrix, {
    top,
    bottom,
    left,
    right,
    height,
    width,
    abstract
  }), vettro(banner, {
    head: left,
    tail: right,
    abstract: headAbstract
  })];
  const [dyeX, dyeB] = [preset && fluo(x.raw, {
    direct,
    preset,
    stringPreset,
    colorant: true
  }), labelPreset && fluoVector(b.raw, {
    preset: labelPreset,
    stringPreset: labelPreset,
    colorant: true
  })];
  let {
    head,
    hr,
    rows
  } = padTable(x.text, b.text, {
    raw: x.raw,
    dye: dyeX,
    headDye: dyeB,
    ansi,
    fullAngle
  });
  return [head.join(' | '), hr.join('-+-')].concat(rows.map(row => row.join(' | '))).join(RN);
};

/**
 *
 * @param {Object} table
 * @param {number} [direct] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [abstract]
 * @param {function(*):string} [headAbstract]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [preset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [stringPreset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [labelPreset]
 * @param {number} [top]
 * @param {number} [left]
 * @param {number} [bottom]
 * @param {number} [right]
 * @param {boolean} [ansi=false]
 * @param {boolean} [fullAngle=false]
 * @returns {string}
 */

const deco = (table, {
  direct = COLUMNWISE,
  abstract,
  headAbstract,
  preset = FRESH,
  stringPreset = JUNGLE,
  labelPreset = SUBTLE,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  ansi = false,
  fullAngle = false
} = {}) => cosmati.call({
  direct,
  abstract,
  headAbstract,
  preset,
  stringPreset,
  labelPreset,
  top,
  left,
  bottom,
  right,
  ansi,
  fullAngle
}, table);

/**
 *
 * @param {number} [direct] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [abstract]
 * @param {function(*):string} [headAbstract]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [preset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [stringPreset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [labelPreset]
 * @param {number} [top]
 * @param {number} [left]
 * @param {number} [bottom]
 * @param {number} [right]
 * @param {boolean} [ansi=false]
 * @param {boolean} [fullAngle=false]
 * @returns {string}
 */

const Deco = ({
  direct = COLUMNWISE,
  abstract,
  headAbstract,
  preset = FRESH,
  stringPreset = JUNGLE,
  labelPreset = SUBTLE,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  ansi = false,
  fullAngle = false
} = {}) => cosmati.bind({
  direct,
  abstract,
  headAbstract,
  preset,
  stringPreset,
  labelPreset,
  top,
  left,
  bottom,
  right,
  ansi,
  fullAngle
});

export { Deco, deco };
