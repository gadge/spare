'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fluoMatrix = require('@palett/fluo-matrix');
var fluoVector = require('@palett/fluo-vector');
var enumChars = require('@spare/enum-chars');
var liner = require('@spare/liner');
var mattro = require('@spare/mattro');
var padTable = require('@spare/pad-table');
var vettro = require('@spare/vettro');
var matrix = require('@vect/matrix');
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
    labelPreset,
    top,
    left,
    bottom,
    right,
    ansi,
    fullAngle,
    discrete,
    delim,
    level,
    colors
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
  const [dyeX, dyeB] = [colors && fluoMatrix.fluo.call({
    colorant: true
  }, x.raw, direct, colors), labelPreset && fluoVector.fluoVec.call({
    colorant: true
  }, b.raw, colors)];
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
  return liner.liner(lines, {
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
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=',\n']
 * @param {number} [p.quote=NONE] - currently not functional, keeps for future fix
 * @param {boolean} [p.bracket] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=COLUMNWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]

 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const Deco = (p = {}) => cosmetics.bind(presetDeco.presetTable(p));
/***
 *
 * @param {Object} table
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=',\n']
 * @param {number} [p.quote=NONE] - currently not functional, keeps for future fix
 * @param {boolean} [p.bracket] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=COLUMNWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]

 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const deco = (table, p = {}) => cosmetics.call(presetDeco.presetTable(p), table);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
