'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var matrix = require('@vect/matrix');
var util = require('@spare/util');
var vettro = require('@spare/vettro');
var mattro = require('@spare/mattro');
var padTable = require('@spare/pad-table');
var fluoVector = require('@palett/fluo-vector');
var fluoMatrix = require('@palett/fluo-matrix');
var vectorZipper = require('@vect/vector-zipper');
var string = require('@spare/string');
var lange = require('@spare/lange');
var padString = require('@spare/pad-string');
var comparer = require('@aryth/comparer');
var vectorIndicator = require('@vect/vector-indicator');
var vectorMapper = require('@vect/vector-mapper');

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
    hr: '-'.repeat(pad),
    side: dye ? vectorZipper.zipper(side, dye, (x, d) => {
      var _lpad;

      return _lpad = lpad(x, pad), d(_lpad);
    }) : vectorMapper.mapper(side, x => lpad(x, pad))
  };
};
const padSideFullAngle = (side, title, {
  dye,
  ansi,
  dash = util.DASH,
  fill = util.SPACE
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

/**
 *
 * @param {Object} table
 * @returns {string}
 */

const cosmati = function (table) {
  let matrix$1 = table.rows || table.matrix,
      banner = table.head || table.banner,
      stand = table.side,
      name = table.title || '';
  const [height, width] = matrix.size(matrix$1),
        labelWidth = banner && banner.length,
        labelHeight = stand && stand.length;
  if (!height || !width || !labelWidth || !labelHeight) return util.AEU;
  const {
    direct = matrix.POINTWISE,
    abstract,
    bannerAbstract,
    sideAbstract,
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
  const [x, b, s] = [mattro.mattro(matrix$1, {
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
    abstract: bannerAbstract
  }), vettro.vettro(stand, {
    head: top,
    tail: bottom,
    abstract: sideAbstract
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
  return [title + VLINE + head.join(VLINE), br + HCONN + hr.join(HCONN)].concat(vectorZipper.zipper(side, rows, (sd, row) => sd + VLINE + row.join(VLINE))).join(util.RN);
};

/**
 *
 * @param {Object} crostab
 * @param {number} [direct] pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [abstract]
 * @param {function(*):string} [bannerAbstract]
 * @param {function(*):string} [sideAbstract]
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

const deco = (crostab, {
  direct = matrix.POINTWISE,
  abstract,
  bannerAbstract,
  sideAbstract,
  preset = presets.FRESH,
  stringPreset = presets.JUNGLE,
  labelPreset = presets.SUBTLE,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  ansi = false,
  fullAngle = false
} = {}) => cosmati.call({
  direct,
  abstract,
  bannerAbstract,
  sideAbstract,
  preset,
  stringPreset,
  labelPreset,
  top,
  left,
  bottom,
  right,
  ansi,
  fullAngle
}, crostab);

/**
 *
 * @param {number} [direct] pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [abstract]
 * @param {function(*):string} [bannerAbstract]
 * @param {function(*):string} [sideAbstract]
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
  direct = matrix.POINTWISE,
  abstract,
  bannerAbstract,
  sideAbstract,
  preset = presets.FRESH,
  stringPreset = presets.JUNGLE,
  labelPreset = presets.SUBTLE,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  ansi = false,
  fullAngle = false
} = {}) => cosmati.bind({
  direct,
  abstract,
  bannerAbstract,
  sideAbstract,
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
