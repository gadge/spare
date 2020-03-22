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
var enumFullAngleChars = require('@spare/enum-full-angle-chars');
var string = require('@spare/string');
var lange = require('@spare/lange');
var padString = require('@spare/pad-string');
var comparer = require('@aryth/comparer');
var vectorIndicator = require('@vect/vector-indicator');
var vectorMapper = require('@vect/vector-mapper');
var decoUtil = require('@spare/deco-util');

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
    direct = matrix.POINTWISE,
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
  const [dyeX, dyeB, dyeS] = [preset && fluoMatrix.fluo(x.raw, {
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
  return decoUtil.liner(lines, {
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
 * @param {Object} options
 * @param {number} [options.direct=ROWWISE] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [options.read]
 * @param {function(*):string} [options.headRead]
 * @param {function(*):string} [options.sideRead]
 * @param {Preset} [options.preset=FRESH]
 * @param {Preset} [options.stringPreset=JUNGLE]
 * @param {Preset} [options.labelPreset]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.bracket] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.fullAngle]
 * @returns {string}
 */

const Deco = (options = {}) => cosmetics.bind(decoUtil.presetCrostabOptions(options));
/**
 *
 * @param {Object} crostab
 * @param {Object} options
 * @param {number} [options.direct=ROWWISE] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [options.read]
 * @param {function(*):string} [options.headRead]
 * @param {function(*):string} [options.sideRead]
 * @param {Preset} [options.preset=FRESH]
 * @param {Preset} [options.stringPreset=JUNGLE]
 * @param {Preset} [options.labelPreset=SUBTLE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.bracket] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.fullAngle]
 * @returns {string}
 */

const deco = (crostab, options = {}) => cosmetics.call(decoUtil.presetCrostabOptions(options), crostab);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
