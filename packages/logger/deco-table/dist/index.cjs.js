'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matrix = require('@vect/matrix');
var enumChars = require('@spare/enum-chars');
var vettro = require('@spare/vettro');
var mattro = require('@spare/mattro');
var fluoVector = require('@palett/fluo-vector');
var fluoMatrix = require('@palett/fluo-matrix');
var padTable = require('@spare/pad-table');
var decoUtil = require('@spare/deco-util');
var presetDeco = require('@spare/preset-deco');

const cosmetics = function (table) {
  let matrix$1 = table.rows || table.matrix,
      banner = table.head || table.banner;
  const [height, width] = matrix.size(matrix$1),
        labelWidth = banner && banner.length;
  if (!height || !width || !labelWidth) return enumChars.AEU;
  const {
    direct,
    read,
    headRead,
    preset,
    stringPreset,
    labelPreset,
    top,
    left,
    bottom,
    right,
    ansi,
    fullAngle,
    discrete,
    delim,
    level
  } = this;
  const [x, b] = [mattro.mattro(matrix$1, {
    top,
    bottom,
    left,
    right,
    height,
    width,
    read
  }), vettro.vettro(banner, {
    head: left,
    tail: right,
    read: headRead
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
  const lines = [head.join(' | '), hr.join('-+-')].concat(rows.map(row => row.join(' | ')));
  return decoUtil.liner(lines, {
    discrete,
    delim,
    level
  });
};

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/***
 *
 * @param {Object} options
 * @param {Function} [options.read]
 * @param {Function} [options.headRead]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=JUNGLE]
 * @param {Object} [options.labelPreset=SUBTLE]
 * @param {number} [options.direct=COLUMNWISE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {boolean} [options.discrete]
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi=true]
 * @param {boolean} [options.fullAngle]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const Deco = (options = {}) => cosmetics.bind(presetDeco.presetTable(options));
/***
 *
 * @param {Object} table
 * @param {Object} options
 * @param {Function} [options.read]
 * @param {Function} [options.headRead]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=JUNGLE]
 * @param {Object} [options.labelPreset=SUBTLE]
 * @param {number} [options.direct=COLUMNWISE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {boolean} [options.discrete]
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi=true]
 * @param {boolean} [options.fullAngle]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const deco = (table, options = {}) => cosmetics.call(presetDeco.presetTable(options), table);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
