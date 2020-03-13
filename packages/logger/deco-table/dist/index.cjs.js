'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var matrix = require('@vect/matrix');
var util = require('@spare/util');
var vettro = require('@spare/vettro');
var mattro = require('@spare/mattro');
var fluoVector = require('@palett/fluo-vector');
var fluoMatrix = require('@palett/fluo-matrix');
var padTable = require('@spare/pad-table');

/**
 *
 * @param {Object} table
 * @returns {string}
 */

const cosmati = function (table) {
  let matrix$1 = table.rows || table.matrix,
      banner = table.head || table.banner;
  const [height, width] = matrix.size(matrix$1),
        labelWidth = banner && banner.length;
  if (!height || !width || !labelWidth) return util.AEU;
  const {
    direct = matrix.COLUMNWISE,
    abstract,
    headAbstract,
    preset = presets.FRESH,
    stringPreset = presets.JUNGLE,
    labelPreset = presets.SUBTLE,
    top = 0,
    left = 0,
    bottom = 0,
    right = 0,
    ansi = false,
    fullAngle = false
  } = this;
  const [x, b] = [mattro.mattro(matrix$1, {
    top,
    bottom,
    left,
    right,
    height,
    width,
    abstract
  }), vettro.vettro(banner, {
    head: left,
    tail: right,
    abstract: headAbstract
  })];
  const [dyeX, dyeB] = [preset && fluoMatrix.fluoMatrix(x.raw, {
    direct,
    preset,
    stringPreset,
    colorant: true
  }), labelPreset && fluoVector.fluoVector(b.raw, {
    preset: labelPreset,
    stringPreset: labelPreset,
    colorant: true
  })];
  let {
    head,
    hr,
    rows
  } = padTable.padTable(x.text, b.text, {
    raw: x.raw,
    dye: dyeX,
    headDye: dyeB,
    ansi,
    fullAngle
  });
  return [head.join(' | '), hr.join('-+-')].concat(rows.map(row => row.join(' | '))).join(util.RN);
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
  direct = matrix.COLUMNWISE,
  abstract,
  headAbstract,
  preset = presets.FRESH,
  stringPreset = presets.JUNGLE,
  labelPreset = presets.SUBTLE,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  ansi = true,
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
  direct = matrix.COLUMNWISE,
  abstract,
  headAbstract,
  preset = presets.FRESH,
  stringPreset = presets.JUNGLE,
  labelPreset = presets.SUBTLE,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  ansi = true,
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

exports.Deco = Deco;
exports.deco = deco;
