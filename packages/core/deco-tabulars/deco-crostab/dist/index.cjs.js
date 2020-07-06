'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presetDeco = require('@spare/preset-deco');
var enumColorantModes = require('@palett/enum-colorant-modes');
var fluoMatrix = require('@palett/fluo-matrix');
var fluoVector = require('@palett/fluo-vector');
var enumChars = require('@spare/enum-chars');
var liner = require('@spare/liner');
var mattro = require('@spare/mattro');
var padKeyedColumn = require('@spare/pad-keyed-column');
var padTable = require('@spare/pad-table');
var vettro = require('@spare/vettro');
var matrix = require('@vect/matrix');
var vectorZipper = require('@vect/vector-zipper');

const VLINE = ' | ',
      HCONN = '-+-';

const cosmetics = function (crostab) {
  let matrix$1 = crostab.rows || crostab.matrix,
      banner = crostab.head || crostab.banner,
      stand = crostab.side,
      name = crostab.title || '';
  const [height, width] = matrix.size(matrix$1),
        labelWidth = banner && banner.length,
        labelHeight = stand && stand.length;
  if (!height || !width || !labelWidth || !labelHeight) return enumChars.AEU;
  const {
    direct,
    read,
    headRead,
    sideRead,
    presets,
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
  const [x, b, s] = [mattro.mattro(matrix$1, {
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
  }), vettro.vettro(stand, {
    head: top,
    tail: bottom,
    read: sideRead
  })];
  let dyeX, dyeB, dyeS;

  if (presets) {
    const [numericPreset,, headingPreset] = presets,
          labelPresets = [numericPreset, headingPreset];
    dyeX = fluoMatrix.fluoMatrix.call(enumColorantModes.COLORANT, x.raw, direct, presets);
    dyeB = fluoVector.fluoVector.call(enumColorantModes.COLORANT, b.raw, labelPresets);
    dyeS = fluoVector.fluoVector.call(enumColorantModes.COLORANT, s.raw, labelPresets);
  }

  let {
    title,
    hr: br,
    side
  } = padKeyedColumn.padKeyedColumn(s.text, name, {
    dye: dyeS,
    fullAngle
  });
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
  const lines = [title + VLINE + head.join(VLINE), br + HCONN + hr.join(HCONN)].concat(vectorZipper.zipper(side, rows, (sd, row) => sd + VLINE + row.join(VLINE)));
  return liner.liner(lines, {
    discrete,
    delim,
    level
  });
};

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim='\n']
 *  - currently not functional, keeps for future fix
 * @param {number} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 *
 * @param {Object} [p.presets=[FRESH,JUNGLE,SUBTLE]]
 * @param {number} [p.direct=POINTWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const Deco = (p = {}) => cosmetics.bind(presetDeco.presetCrostab(p));
/**
 *
 * @param {Object} crostab
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim='\n']
 *  - currently not functional, keeps for future fix
 * @param {number} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=POINTWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const deco = (crostab, p = {}) => cosmetics.call(presetDeco.presetCrostab(p), crostab);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
