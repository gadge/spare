'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');
var vettro = require('@spare/vettro');
var mattro = require('@spare/mattro');
var padTable = require('@spare/pad-table');
var fluoVector = require('@palett/fluo-vector');
var fluoMatrix = require('@palett/fluo-matrix');
var vectorZipper = require('@vect/vector-zipper');
var matrix = require('@vect/matrix');
var liner = require('@spare/liner');
var enumFullAngleChars = require('@spare/enum-full-angle-chars');
var string = require('@spare/string');
var lange = require('@spare/lange');
var padString = require('@spare/pad-string');
var comparer = require('@aryth/comparer');
var vectorIndicator = require('@vect/vector-indicator');
var vectorMapper = require('@vect/vector-mapper');
var presetDeco = require('@spare/preset-deco');

const padSide = (side, title, {
  dye,
  ansi,
  fullAngle
} = {}) => {
  if (fullAngle) return padSideFullAngle(side, title, ansi);
  const lpad = padString.LPad({
    ansi
  }),
        rpad = padString.RPad({
    ansi
  }),
        lange$1 = lange.Lange(ansi);
  const pad = comparer.max(lange$1(title), vectorIndicator.maxBy(side, lange$1));
  return {
    title: rpad(title, pad),
    hr: enumChars.DASH.repeat(pad),
    side: dye ? vectorZipper.zipper(side, dye, (x, d) => {
      var _lpad;

      return _lpad = lpad(x, pad), d(_lpad);
    }) : vectorMapper.mapper(side, x => lpad(x, pad))
  };
};
const padSideFullAngle = (side, title, {
  dye,
  ansi,
  dash = enumFullAngleChars.DASH,
  fill = enumFullAngleChars.SP
} = {}) => {
  const cn = string.hasChn(title) || side.some(string.hasChn);
  if (!cn) return padSide(side, title, {
    ansi
  });
  const lpad = padString.LPad({
    ansi,
    fill
  }),
        rpad = padString.RPad({
    ansi,
    fill
  }),
        lange$1 = lange.Lange(ansi);
  const pad = comparer.max(lange$1(title), vectorIndicator.maxBy(side, lange$1));
  return {
    title: rpad(string.toFullAngle(title), pad),
    hr: dash.repeat(pad),
    side: dye ? vectorZipper.zipper(side, dye, (x, d) => {
      var _lpad2;

      return _lpad2 = lpad(string.toFullAngle(x), pad), d(_lpad2);
    }) : vectorMapper.mapper(side, x => lpad(string.toFullAngle(x), pad))
  };
};

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
  const [dyeX, dyeB, dyeS] = [preset && fluoMatrix.fluoMatrix(x.raw, {
    direct,
    preset,
    stringPreset,
    colorant: true
  }), labelPreset && fluoVector.fluoVector(b.raw, {
    preset: labelPreset,
    stringPreset: labelPreset,
    colorant: true
  }), labelPreset && fluoVector.fluoVector(s.raw, {
    preset: labelPreset,
    stringPreset: labelPreset,
    colorant: true
  })];
  let {
    title,
    hr: br,
    side
  } = padSide(s.text, name, {
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
 * @param {number} [p.quote=NONE] - currently not functional, keeps for future fix
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

const Deco = (p = {}) => cosmetics.bind(presetDeco.presetCrostab(p));
/**
 *
 * @param {Object} crostab
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim='\n']
 * @param {number} [p.quote=NONE] - currently not functional, keeps for future fix
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
