'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoFlat = require('@spare/deco-flat');
var enumBrackets = require('@spare/enum-brackets');
var enumChars = require('@spare/enum-chars');
var presets = require('@palett/presets');
var stringValue$2 = require('@texting/string-value');
var enumMatrixDirections = require('@vect/enum-matrix-directions');
var charsetFullwidth = require('@texting/charset-fullwidth');
var charsetHalfwidth = require('@texting/charset-halfwidth');

const NUMERIC_PRESET$2 = presets.FRESH;
const LITERAL_PRESET$2 = presets.PLANET;
const HEADING_PRESET = presets.SUBTLE;

// from x => typeof x
const STR$1 = 'string';

/**
 *
 * @type {Function|function(*):string}
 */
Function.prototype.call.bind(Object.prototype.toString);

const CJK_LETTERS$1 = '\u4e00-\u9fbf';

const HALF_NUM$1 = '0-9';
const HALF_UPPER$1 = 'A-Z';
const HALF_LOWER$1 = 'a-z';
const FULL_NUM$1 = '０-９'; // 0xff10 - 0xff19

const FULL_UPPER$1 = 'Ａ-Ｚ'; // 0xff21 - 0xff3a

const FULL_LOWER$1 = 'ａ-ｚ'; // 0xff41 - 0xff5a

const LITERAL_LOWER$1 = `${HALF_UPPER$1}${HALF_LOWER$1}${HALF_NUM$1}`;
const LITERAL_UPPER$1 = `${FULL_UPPER$1}${FULL_LOWER$1}${FULL_NUM$1}`;
const LITERAL$c = new RegExp(`[${LITERAL_LOWER$1}]+`); // LITERAL = /[A-Za-z0-9]+/

const LITERAL_ANY$1 = new RegExp(`[${LITERAL_LOWER$1}${CJK_LETTERS$1}${LITERAL_UPPER$1}]+`);

const isLiteral$1 = x => LITERAL$c.test(x);

const isLiteralAny$1 = x => LITERAL_ANY$1.test(x);

const nullish = x => x === null || x === void 0;

const v1$1 = word => (word.toLowerCase().charCodeAt(0) & 0x7f) << 21;

const v2$1 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14);

const v3$1 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7);

const v4$1 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7) + (word.charCodeAt(3) & 0x7f);

const stringValue$1 = word => {
  const l = word === null || word === void 0 ? void 0 : word.length;
  if (!l) return NaN;
  if (typeof word !== STR$1) return NaN;
  if (l >= 8) return (v4$1(word.slice(0, 4)) << 2) + v4$1(word.slice(-4));
  if (l === 7) return (v4$1(word.slice(0, 4)) << 2) + v3$1(word.slice(-3));
  if (l === 6) return (v4$1(word.slice(0, 4)) << 2) + v2$1(word.slice(-2));
  if (l === 5) return (v4$1(word.slice(0, 4)) << 2) + v1$1(word.slice(-1));
  if (l === 4) return v4$1(word) << 2;
  if (l === 3) return v3$1(word) << 2;
  if (l === 2) return v2$1(word) << 2;
  if (l === 1) return v1$1(word) << 2;
};

const iterate$1$1 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (let i = 0; i < l; i++) fn.call(this, vec[i], i);
};

const reviter$1$1 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (--l; l >= 0; l--) fn.call(this, vec[l], l);
};

const mapper$1$1 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);
  const ve = Array(l);

  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l);

  return ve;
};

const mutate$1$1 = (vec, fn, l) => {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (--l; l >= 0; l--) vec[l] = fn(vec[l], l);

  return vec;
};

var Mapper$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  iterate: iterate$1$1,
  mapper: mapper$1$1,
  mutate: mutate$1$1,
  reviter: reviter$1$1
}); // export default Function.prototype.apply.bind(Array.prototype.push)

const acquire$1$1 = (va, vb) => (Array.prototype.push.apply(va, vb), va); // export default Function.prototype.call.bind(Array.prototype.concat)


const merge$1$1 = (va, vb) => Array.prototype.concat.call(va, vb);

const merges$1$1 = (...vectors) => Array.prototype.concat.apply([], vectors);

var Merge$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  acquire: acquire$1$1,
  merge: merge$1$1,
  merges: merges$1$1
});

function duozipper$1(a, b) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || (a === null || a === void 0 ? void 0 : a.length));

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], hi);

  return vec;
}

function trizipper$1(a, b, c) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || (a === null || a === void 0 ? void 0 : a.length));

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], c[hi], hi);

  return vec;
}

function quazipper$1(a, b, c, d) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || (a === null || a === void 0 ? void 0 : a.length));

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], c[hi], d[hi], hi);

  return vec;
}

const Duozipper$1$1 = (fn, {
  lo,
  hi
} = {}) => duozipper$1.bind({
  fn,
  lo,
  hi
});

const Trizipper$1$1 = (fn, {
  lo,
  hi
} = {}) => trizipper$1.bind({
  fn,
  lo,
  hi
});

const Quazipper$1$1 = (fn, {
  lo,
  hi
} = {}) => quazipper$1.bind({
  fn,
  lo,
  hi
});
/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [l]
 * @returns {*[]}
 */


const zipper$1$1 = (a, b, fn, l) => duozipper$1.call({
  fn,
  hi: l
}, a, b);

const mutazip$1$1 = (va, vb, fn, l) => {
  l = l || (va === null || va === void 0 ? void 0 : va.length);

  for (--l; l >= 0; l--) va[l] = fn(va[l], vb[l], l);

  return va;
};

var Zipper$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Duozipper: Duozipper$1$1,
  Quazipper: Quazipper$1$1,
  Trizipper: Trizipper$1$1,
  mutazip: mutazip$1$1,
  zipper: zipper$1$1
});
const {
  iterate: iterate$2,
  reviter: reviter$2,
  mapper: mapper$2,
  mutate: mutate$2
} = Mapper$1;
const {
  zipper: zipper$2,
  mutazip: mutazip$2,
  Duozipper: Duozipper$2,
  Trizipper: Trizipper$2,
  Quazipper: Quazipper$2
} = Zipper$1;
const {
  acquire: acquire$2,
  merge: merge$2,
  merges: merges$2
} = Merge$1;

const isNumericAny$1 = x => charsetFullwidth.isNumeric(x) || charsetHalfwidth.isNumeric(x);

const NUM_BOUND_CONF_FULL$1 = {
  filter: isNumericAny$1,
  mapper: charsetFullwidth.parseNum
};
const STR_BOUND_CONF_FULL$1 = {
  filter: isLiteralAny$1,
  mapper: stringValue$1
};
const NUM_BOUND_CONF_HALF$1 = {
  filter: charsetHalfwidth.isNumeric,
  mapper: charsetHalfwidth.parseNum
};
const STR_BOUND_CONF_HALF$1 = {
  filter: isLiteral$1,
  mapper: stringValue$1
};
const NUMERIC_PRESET$1 = presets.FRESH;
const LITERAL_PRESET$1 = presets.PLANET;

class FluoConfigs$1 extends Array {
  constructor(presets) {
    super();
    if (presets.length) acquire$2(this, presets.map(preset => ({
      preset
    })));
  }

  static build(...presets) {
    return new FluoConfigs$1(presets);
  }

  assignPresets(...presets) {
    if (presets.length === 0) presets = [NUMERIC_PRESET$1, LITERAL_PRESET$1];
    return mutazip$2(this, presets, (conf, preset) => conf ? (conf.preset = preset, conf) : {
      preset
    }, presets.length);
  }

  assignEffect(...effects) {
    if (effects.length === 0) return this;
    return mutate$2(this, conf => (conf.effects = effects, conf));
  }

  assignBoundConfigs(full) {
    const boundConfigs = full ? [NUM_BOUND_CONF_FULL$1, STR_BOUND_CONF_FULL$1, STR_BOUND_CONF_FULL$1] : [NUM_BOUND_CONF_HALF$1, STR_BOUND_CONF_HALF$1, STR_BOUND_CONF_HALF$1];
    return mutazip$2(this, boundConfigs, (conf, boundConf) => Object.assign(conf, boundConf));
  }

}

const isNumeric = x => charsetFullwidth.isNumeric(x) || charsetHalfwidth.isNumeric(x);
const NUM_BOUND_CONF_FULL = {
  filter: isNumeric,
  mapper: charsetFullwidth.parseNum
};
const STR_BOUND_CONF_FULL = {
  filter: isLiteralAny$1,
  mapper: stringValue$2.stringValue
};

class DecoConfig$1 {
  constructor() {}

  assignPresets(...presets) {
    var _this$fluos;

    const fluos = (_this$fluos = this.fluos) !== null && _this$fluos !== void 0 ? _this$fluos : this.fluos = [];
    FluoConfigs$1.prototype.assignPresets.apply(fluos, presets);
    return this;
  }

  assignBoundConfig(charWidth) {
    var _this$fluos2;

    const fluos = (_this$fluos2 = this.fluos) !== null && _this$fluos2 !== void 0 ? _this$fluos2 : this.fluos = [];
    FluoConfigs$1.prototype.assignBoundConfigs.call(fluos, charWidth);
    return this;
  }

}
const assignFluoConfigs = (p, ...presets) => {
  var _p$presets;

  if (presets.length === 0) presets = (_p$presets = p.presets) !== null && _p$presets !== void 0 ? _p$presets : [NUMERIC_PRESET$2, LITERAL_PRESET$2];

  if (presets.length === 1) {
    if (!p.fluos) p.fluos = presets.map(preset => ({
      preset
    }));

    if (p.full) {
      const [confNum = {}] = p.fluos;
      if (!confNum.filter && !confNum.mapper) Object.assign(confNum, NUM_BOUND_CONF_FULL);
    }

    return p;
  }

  if (presets.length === 2) {
    if (!p.fluos) p.fluos = presets.map(preset => ({
      preset
    }));

    if (p.full) {
      const [confNum = {}, confStr = {}] = p.fluos;
      if (!confNum.filter && !confNum.mapper) Object.assign(confNum, NUM_BOUND_CONF_FULL);
      if (!confStr.filter && !confStr.mapper) Object.assign(confStr, STR_BOUND_CONF_FULL);
    }

    return p;
  }

  if (presets.length >= 3) {
    if (!p.fluos) p.fluos = presets.map(preset => ({
      preset
    }));

    if (p.full) {
      const [confNum = {}, confStr = {}, confLab = {}] = p.fluos;
      if (!confNum.filter && !confNum.mapper) Object.assign(confNum, NUM_BOUND_CONF_FULL);
      if (!confStr.filter && !confStr.mapper) Object.assign(confStr, STR_BOUND_CONF_FULL);
      if (!confLab.filter && !confLab.mapper) Object.assign(confLab, STR_BOUND_CONF_FULL);
    }

    return p;
  }
};

/***
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=' > ']
 * @param {string} [p.delim='\n']
 *
 *
 * @param {*} [p.bracket=true]
 *
 * @param {Object[]} [p.presets]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.presets]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetEntries = p => {
  var _p$dash, _p$delim, _p$bracket, _p$read, _p$ansi;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : ' > ';
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.LF;
  p.bracket = (_p$bracket = p.bracket) !== null && _p$bracket !== void 0 ? _p$bracket : enumBrackets.BRK;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoFlat.decoFlat; // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET]

  DecoConfig$1.prototype.assignPresets.call(p, NUMERIC_PRESET$2, LITERAL_PRESET$2);
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 *
 *
 * @param {*} [p.bracket=true]
 *
 * @param {Object[]} [p.presets]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetObject = p => {
  var _p$dash, _p$delim, _p$bracket, _p$read, _p$ansi;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : enumChars.RTSP;
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.COLF;
  p.bracket = (_p$bracket = p.bracket) !== null && _p$bracket !== void 0 ? _p$bracket : enumBrackets.BRC;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoFlat.decoFlat;
  DecoConfig$1.prototype.assignPresets.call(p, NUMERIC_PRESET$2, LITERAL_PRESET$2);
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 *
 * @param {*} [p.bracket=true] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.presets]
 * @param {Object[]} [p.fluos]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.full=false]
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetVector = p => {
  var _p$dash, _p$delim, _p$bracket, _p$indexed, _p$read, _p$ansi;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : ') ';
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.COLF;
  p.bracket = (_p$bracket = p.bracket) !== null && _p$bracket !== void 0 ? _p$bracket : enumBrackets.BRK;
  p.indexed = (_p$indexed = p.indexed) !== null && _p$indexed !== void 0 ? _p$indexed : false;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoFlat.decoFlat;
  DecoConfig$1.prototype.assignPresets.call(p, NUMERIC_PRESET$2, LITERAL_PRESET$2);
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 *
 * @param {*} [p.bracket=true]
 *
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.presets]
 * @param {number} [p.direct=ROWWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetMatrix = p => {
  var _p$delim, _p$bracket, _p$read, _p$direct, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.COSP;
  p.bracket = (_p$bracket = p.bracket) !== null && _p$bracket !== void 0 ? _p$bracket : enumBrackets.BRK;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoFlat.decoFlat;
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : enumMatrixDirections.ROWWISE; // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET]

  DecoConfig$1.prototype.assignPresets.call(p, NUMERIC_PRESET$2, LITERAL_PRESET$2);
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim='\n']
 *  - currently not functional, keeps for future fix
 * @param {number} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read=decoFlat]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 *
 * @param {Object[]} [p.presets]
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
 * @returns {Object}
 */

const presetCrostab = p => {
  var _p$delim, _p$read, _p$direct, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.LF;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoFlat.decoFlat; // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET]

  DecoConfig$1.prototype.assignPresets.call(p, NUMERIC_PRESET$2, LITERAL_PRESET$2, HEADING_PRESET);
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : enumMatrixDirections.POINTWISE;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

const STR = 'string';
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
const CJK_LETTERS = '\u4e00-\u9fbf';
const HALF_NUM = '0-9';
const HALF_UPPER = 'A-Z';
const HALF_LOWER = 'a-z';
const FULL_NUM = '０-９'; // 0xff10 - 0xff19

const FULL_UPPER = 'Ａ-Ｚ'; // 0xff21 - 0xff3a

const FULL_LOWER = 'ａ-ｚ'; // 0xff41 - 0xff5a

const LITERAL_LOWER = `${HALF_UPPER}${HALF_LOWER}${HALF_NUM}`;
const LITERAL_UPPER = `${FULL_UPPER}${FULL_LOWER}${FULL_NUM}`;
const LITERAL$a = new RegExp(`[${LITERAL_LOWER}]+`); // LITERAL = /[A-Za-z0-9]+/

const LITERAL_ANY = new RegExp(`[${LITERAL_LOWER}${CJK_LETTERS}${LITERAL_UPPER}]+`);

const isLiteral = x => LITERAL$a.test(x);

const isLiteralAny = x => LITERAL_ANY.test(x);

const v1 = word => (word.toLowerCase().charCodeAt(0) & 0x7f) << 21;

const v2 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14);

const v3 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7);

const v4 = word => (((word = word.toLowerCase()).charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7) + (word.charCodeAt(3) & 0x7f);

const stringValue = word => {
  const l = word === null || word === void 0 ? void 0 : word.length;
  if (!l) return NaN;
  if (typeof word !== STR) return NaN;
  if (l >= 8) return (v4(word.slice(0, 4)) << 2) + v4(word.slice(-4));
  if (l === 7) return (v4(word.slice(0, 4)) << 2) + v3(word.slice(-3));
  if (l === 6) return (v4(word.slice(0, 4)) << 2) + v2(word.slice(-2));
  if (l === 5) return (v4(word.slice(0, 4)) << 2) + v1(word.slice(-1));
  if (l === 4) return v4(word) << 2;
  if (l === 3) return v3(word) << 2;
  if (l === 2) return v2(word) << 2;
  if (l === 1) return v1(word) << 2;
};

const iterate$1 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (let i = 0; i < l; i++) fn.call(this, vec[i], i);
};

const reviter$1 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (--l; l >= 0; l--) fn.call(this, vec[l], l);
};

const mapper$1 = function (vec, fn, l) {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);
  const ve = Array(l);

  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l);

  return ve;
};

const mutate$1 = (vec, fn, l) => {
  l = l || (vec === null || vec === void 0 ? void 0 : vec.length);

  for (--l; l >= 0; l--) vec[l] = fn(vec[l], l);

  return vec;
};

var Mapper = /*#__PURE__*/Object.freeze({
  __proto__: null,
  iterate: iterate$1,
  mapper: mapper$1,
  mutate: mutate$1,
  reviter: reviter$1
}); // export default Function.prototype.apply.bind(Array.prototype.push)

const acquire$1 = (va, vb) => (Array.prototype.push.apply(va, vb), va); // export default Function.prototype.call.bind(Array.prototype.concat)


const merge$1 = (va, vb) => Array.prototype.concat.call(va, vb);

const merges$1 = (...vectors) => Array.prototype.concat.apply([], vectors);

var Merge = /*#__PURE__*/Object.freeze({
  __proto__: null,
  acquire: acquire$1,
  merge: merge$1,
  merges: merges$1
});

function duozipper(a, b) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || (a === null || a === void 0 ? void 0 : a.length));

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], hi);

  return vec;
}

function trizipper(a, b, c) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || (a === null || a === void 0 ? void 0 : a.length));

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], c[hi], hi);

  return vec;
}

function quazipper(a, b, c, d) {
  let {
    fn,
    lo,
    hi
  } = this;
  lo = lo || 0;
  const vec = Array(hi = hi || (a === null || a === void 0 ? void 0 : a.length));

  for (--hi; hi >= lo; hi--) vec[hi] = fn(a[hi], b[hi], c[hi], d[hi], hi);

  return vec;
}

const Duozipper$1 = (fn, {
  lo,
  hi
} = {}) => duozipper.bind({
  fn,
  lo,
  hi
});

const Trizipper$1 = (fn, {
  lo,
  hi
} = {}) => trizipper.bind({
  fn,
  lo,
  hi
});

const Quazipper$1 = (fn, {
  lo,
  hi
} = {}) => quazipper.bind({
  fn,
  lo,
  hi
});
/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [l]
 * @returns {*[]}
 */


const zipper$1 = (a, b, fn, l) => duozipper.call({
  fn,
  hi: l
}, a, b);

const mutazip$1 = (va, vb, fn, l) => {
  l = l || (va === null || va === void 0 ? void 0 : va.length);

  for (--l; l >= 0; l--) va[l] = fn(va[l], vb[l], l);

  return va;
};

var Zipper = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Duozipper: Duozipper$1,
  Quazipper: Quazipper$1,
  Trizipper: Trizipper$1,
  mutazip: mutazip$1,
  zipper: zipper$1
});
const {
  iterate,
  reviter,
  mapper,
  mutate
} = Mapper;
const {
  zipper,
  mutazip,
  Duozipper,
  Trizipper,
  Quazipper
} = Zipper;
const {
  acquire,
  merge,
  merges
} = Merge;

const isNumericAny = x => charsetFullwidth.isNumeric(x) || charsetHalfwidth.isNumeric(x);

const NUM_BOUND_CONF_FULL$2 = {
  filter: isNumericAny,
  mapper: charsetFullwidth.parseNum
};
const STR_BOUND_CONF_FULL$2 = {
  filter: isLiteralAny,
  mapper: stringValue
};
const NUM_BOUND_CONF_HALF = {
  filter: charsetHalfwidth.isNumeric,
  mapper: charsetHalfwidth.parseNum
};
const STR_BOUND_CONF_HALF = {
  filter: isLiteral,
  mapper: stringValue
};
const NUMERIC_PRESET = presets.FRESH;
const LITERAL_PRESET = presets.PLANET;

class FluoConfigs extends Array {
  constructor(presets) {
    super();
    if (presets.length) acquire(this, presets.map(preset => ({
      preset
    })));
  }

  static build(...presets) {
    return new FluoConfigs(presets);
  }

  assignPresets(...presets) {
    if (presets.length === 0) presets = [NUMERIC_PRESET, LITERAL_PRESET];
    return mutazip(this, presets, (conf, preset) => conf ? (conf.preset = preset, conf) : {
      preset
    }, presets.length);
  }

  assignEffect(...effects) {
    if (effects.length === 0) return this;
    return mutate(this, conf => (conf.effects = effects, conf));
  }

  assignBoundConfigs(full) {
    const boundConfigs = full ? [NUM_BOUND_CONF_FULL$2, STR_BOUND_CONF_FULL$2, STR_BOUND_CONF_FULL$2] : [NUM_BOUND_CONF_HALF, STR_BOUND_CONF_HALF, STR_BOUND_CONF_HALF];
    return mutazip(this, boundConfigs, (conf, boundConf) => Object.assign(conf, boundConf));
  }

}

class DecoConfig {
  constructor() {}

  assignPresets(...presets) {
    var _this$fluos;

    const fluos = (_this$fluos = this.fluos) !== null && _this$fluos !== void 0 ? _this$fluos : this.fluos = [];
    FluoConfigs.prototype.assignPresets.apply(fluos, presets);
    return this;
  }

  assignBoundConfig(charWidth) {
    var _this$fluos2;

    const fluos = (_this$fluos2 = this.fluos) !== null && _this$fluos2 !== void 0 ? _this$fluos2 : this.fluos = [];
    FluoConfigs.prototype.assignBoundConfigs.call(fluos, charWidth);
    return this;
  }

}
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */


Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
/**
 *
 * @type {Function|function(*):string}
 */

Function.prototype.call.bind(Object.prototype.toString);
const LITERAL$1 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$1 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$1.bind(LITERAL$1);
const LITERAL$2 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$2 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$2.bind(LITERAL$2);
const LITERAL$3 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$3 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$3.bind(LITERAL$3);
const LITERAL$4 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$4 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$4.bind(LITERAL$4);
const LITERAL$5 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$5 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$5.bind(LITERAL$5);
const LITERAL$6 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$6 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$6.bind(LITERAL$6);
const LITERAL$7 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$7 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$7.bind(LITERAL$7);
const LITERAL$8 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$8 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$8.bind(LITERAL$8);
const LITERAL$9 = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$9 = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$9.bind(LITERAL$9);

const LITERAL$b = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$a = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 * @type {Function|function(string):string[]}
 * @function
 */


ripper$a.bind(LITERAL$b);

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=',\n']
 *  - currently not functional, keeps for future fix
 * @param {*} [p.bracket] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read=decoFlat]
 * @param {Function} [p.headRead]
 *
 * @param {Object[]} [p.presets]
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
 * @returns {Object}
 */

const presetTable = p => {
  var _p$delim, _p$read, _p$direct, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.LF;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoFlat.decoFlat; // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET]

  DecoConfig.prototype.assignPresets.call(p, NUMERIC_PRESET$2, LITERAL_PRESET$2, HEADING_PRESET);
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : enumMatrixDirections.COLUMNWISE;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

/**
 *
 * @param {Object} [p]
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 *
 * @param {*} [p.bracket=true]
 *
 * @param {*[]} [p.fields]
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.presets]
 * @param {number} [p.direct=COLUMNWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.left]
 * @param {number} [p.bottom]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=false]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetSamples = p => {
  var _p$delim, _p$bracket, _p$indexed, _p$read, _p$direct, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.COSP;
  p.bracket = (_p$bracket = p.bracket) !== null && _p$bracket !== void 0 ? _p$bracket : enumBrackets.BRK;
  p.indexed = (_p$indexed = p.indexed) !== null && _p$indexed !== void 0 ? _p$indexed : true;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoFlat.decoFlat; // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET]

  DecoConfig.prototype.assignPresets.call(p, NUMERIC_PRESET$2, LITERAL_PRESET$2, HEADING_PRESET);
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : enumMatrixDirections.COLUMNWISE;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

const LITERAL = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper = function (text) {
  const regex = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = regex.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};

/**
 * @type {Function|function(string):string[]}
 * @function
 */


const splitLiteral = ripper.bind(LITERAL);

const presetString = p => {
  DecoConfig.prototype.assignPresets.call(p, presets.ATLAS, presets.SUBTLE);
  if (nullish(p.vectify)) p.vectify = splitLiteral;
  if (nullish(p.width)) p.width = 0;
  return p;
};

exports.DecoConfig = DecoConfig$1;
exports.HEADING_PRESET = HEADING_PRESET;
exports.LITERAL_PRESET = LITERAL_PRESET$2;
exports.NUMERIC_PRESET = NUMERIC_PRESET$2;
exports.assignFluoConfigs = assignFluoConfigs;
exports.presetCrostab = presetCrostab;
exports.presetEntries = presetEntries;
exports.presetMatrix = presetMatrix;
exports.presetObject = presetObject;
exports.presetSamples = presetSamples;
exports.presetString = presetString;
exports.presetTable = presetTable;
exports.presetVector = presetVector;
