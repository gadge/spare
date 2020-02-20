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

const ansi = ['[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)', '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'];
const astral = ['[\uD800-\uDBFF][\uDC00-\uDFFF]'];
const ansiReg = new RegExp(ansi.join('|'), 'g');
const astralReg = new RegExp(astral.join('|'), 'g');
/**
 *
 * @param {string} tx
 * @returns {number}
 */

const lange = tx => tx.replace(ansiReg, '').replace(astralReg, '_').length;

const Lange = ansi => ansi ? lange : x => x.length;

const hasAnsi = tx => ansiReg.test(tx);

const FullAngleReg = /[\u4e00-\u9fa5]|[\uff00-\uffff]/;
/**
 * Return if a string contains Chinese character.
 * halfAng = str.match(/[\u0000-\u00ff]/g) || [] //半角
 * chinese = str.match(/[\u4e00-\u9fa5]/g) || [] //中文
 * fullAng = str.match(/[\uff00-\uffff]/g) || [] //全角
 * @param {string} str
 * @returns {boolean}
 */

const hasChn = str => str.search(FullAngleReg) !== -1;
/**
 * Half-angle string -> Full-angle string
 * 半角转化为全角
 * a.全角空格为12288，半角空格为32
 * b.其他字符半角(33-126)与全角(65281-65374)的对应关系是：均相差65248
 * @param {string} tx
 * @returns {string}
 * @constructor
 */


const toFullAngle = tx => {
  let t = '',
      co;

  for (let c of tx) {
    co = c.charCodeAt(0);
    t = co === 32 ? t + String.fromCharCode(12288) : co < 127 ? t + String.fromCharCode(co + 65248) : t + c;
  }

  return t;
};

const fixpad = (tx, pd) => hasAnsi(tx) ? tx.length + pd - lange(tx) : pd;

const lpad = String.prototype.padStart;
const rpad = String.prototype.padEnd;

const LPad = ({
  ansi = true,
  fill
} = {}) => ansi ? (tx, pd) => lpad.call(tx, fixpad(tx, pd), fill) : (tx, pd) => lpad.call(tx, pd, fill);

const RPad = ({
  ansi = true,
  fill
} = {}) => ansi ? (tx, pd) => rpad.call(tx, fixpad(tx, pd), fill) : (tx, pd) => rpad.call(tx, pd, fill);

const max = (a, b) => a > b ? a : b;

const max$1 = function (vec) {
  const fn = this;
  return vec.reduce((p, x, i) => max(p, fn(x, i)), fn(vec[0], 0));
};

const maxBy = (vec, indicator) => max$1.call(indicator, vec);

const mapper = (ar, fn, l) => {
  l = l || ar && ar.length;
  const vec = Array(l);

  for (--l; l >= 0; l--) vec[l] = fn(ar[l], l);

  return vec;
};

const padSide = (side, title, {
  dye,
  ansi,
  fullAngle
} = {}) => {
  if (fullAngle) return padSideFullAngle(side, title, ansi);
  const lpad = LPad({
    ansi
  }),
        rpad = RPad({
    ansi
  }),
        lange = Lange(ansi);
  const pad = max(lange(title), maxBy(side, lange));
  return {
    title: rpad(title, pad),
    hr: '-'.repeat(pad),
    side: dye ? vectorZipper.zipper(side, dye, (x, d) => {
      var _lpad;

      return _lpad = lpad(x, pad), d(_lpad);
    }) : mapper(side, x => lpad(x, pad))
  };
};
const padSideFullAngle = (side, title, {
  dye,
  ansi,
  dash = util.DASH,
  fill = util.SPACE
} = {}) => {
  const cn = hasChn(title) || side.some(hasChn);
  if (!cn) return padSide(side, title, {
    ansi
  });
  const lpad = LPad({
    ansi,
    fill
  }),
        rpad = RPad({
    ansi,
    fill
  }),
        lange = Lange(ansi);
  const pad = max(lange(title), maxBy(side, lange));
  return {
    title: rpad(toFullAngle(title), pad),
    hr: dash.repeat(pad),
    side: dye ? vectorZipper.zipper(side, dye, (x, d) => {
      var _lpad2;

      return _lpad2 = lpad(toFullAngle(x), pad), d(_lpad2);
    }) : mapper(side, x => lpad(toFullAngle(x), pad))
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
