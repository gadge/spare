import { decoFlat } from '@spare/deco-flat';
import { BRK, BRC } from '@spare/enum-brackets';
import { LF, RTSP, COLF, COSP } from '@spare/enum-chars';
import { FRESH, PLANET, SUBTLE, ATLAS } from '@palett/presets';
import { stringValue as stringValue$2 } from '@texting/string-value';
import { ROWWISE, POINTWISE, COLUMNWISE } from '@vect/enum-matrix-directions';
import { parseNum, isNumeric as isNumeric$2 } from '@texting/charset-fullwidth';
import { isNumeric as isNumeric$1, parseNum as parseNum$1 } from '@texting/charset-halfwidth';
import { replenish } from '@vect/object-update';

const NUMERIC_PRESET$2 = FRESH;
const LITERAL_PRESET$2 = PLANET;
const HEADING_PRESET = SUBTLE;

// from x => typeof x
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
const LITERAL$d = new RegExp(`[${LITERAL_LOWER}]+`); // LITERAL = /[A-Za-z0-9]+/

const LITERAL_ANY = new RegExp(`[${LITERAL_LOWER}${CJK_LETTERS}${LITERAL_UPPER}]+`);

const isLiteral = x => LITERAL$d.test(x);

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

const isNumericAny = x => isNumeric$2(x) || isNumeric$1(x);

const NUM_BOUND_CONF_FULL$2 = {
  filter: isNumericAny,
  mapper: parseNum
};
const STR_BOUND_CONF_FULL$2 = {
  filter: isLiteralAny,
  mapper: stringValue
};
const NUM_BOUND_CONF_HALF = {
  filter: isNumeric$1,
  mapper: parseNum$1
};
const STR_BOUND_CONF_HALF = {
  filter: isLiteral,
  mapper: stringValue
};
const NUMERIC_PRESET = FRESH;
const LITERAL_PRESET = PLANET;

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
  /**
   *
   * @param {Object} configs
   */
  constructor(configs) {
    if (configs) Object.assign(this, configs);
  }
  /**
   *
   * @param {Object} [configs]
   * @returns {DecoConfig}
   */


  static build(configs) {
    return new DecoConfig(configs);
  }

  assignConfigs(configs) {
    return replenish(this, configs);
  }

  assignPresets(...presets) {
    var _this$fluos;

    FluoConfigs.prototype.assignPresets.apply((_this$fluos = this.fluos) !== null && _this$fluos !== void 0 ? _this$fluos : this.fluos = [], presets);
    return this;
  }

  assignBoundConfig(charWidth) {
    if (this.fluos) FluoConfigs.prototype.assignBoundConfigs.call(this.fluos, charWidth);
    return this;
  }

}

const CONF_DECO_ENTRIES = {
  dash: ' > ',
  delim: LF,
  bracket: BRK,
  read: decoFlat,
  ansi: true
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

const presetEntries = p => DecoConfig.build(p).assignConfigs(CONF_DECO_ENTRIES).assignPresets(NUMERIC_PRESET$2, LITERAL_PRESET$2); // p.dash = p.dash ?? ' > '
// p.delim = p.delim ?? LF
// p.bracket = p.bracket ?? BRK
// p.read = p.read ?? decoFlat
// p.ansi = p.ansi ?? true
// // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET]
// DecoConfig.prototype.assignPresets.call(p, NUMERIC_PRESET, LITERAL_PRESET)
// return p

const CONF_DECO_OBJECT = {
  dash: RTSP,
  delim: COLF,
  bracket: BRC,
  read: decoFlat,
  ansi: true
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

const presetObject = p => DecoConfig.build(p).assignConfigs(CONF_DECO_OBJECT).assignPresets(NUMERIC_PRESET$2, LITERAL_PRESET$2); // p.dash = p.dash ?? RTSP
// p.delim = p.delim ?? COLF
// p.bracket = p.bracket ?? BRC
// p.read = p.read ?? decoFlat
// p.ansi = p.ansi ?? true
// return p

const CONF_DECO_VECTOR = {
  dash: ') ',
  delim: COLF,
  bracket: BRK,
  indexed: false,
  read: decoFlat,
  ansi: true
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

const presetVector = p => DecoConfig.build(p).assignConfigs(CONF_DECO_VECTOR).assignPresets(NUMERIC_PRESET$2, LITERAL_PRESET$2); // p.dash = p.dash ?? ') '
// p.delim = p.delim ?? COLF
// p.bracket = p.bracket ?? BRK
// p.indexed = p.indexed ?? false
// p.read = p.read ?? decoFlat
// p.ansi = p.ansi ?? true
// DecoConfig.prototype.assignPresets.call(p, NUMERIC_PRESET, LITERAL_PRESET)
// return p

const CONF_DECO_MATRIX = {
  delim: COSP,
  bracket: BRK,
  read: decoFlat,
  direct: ROWWISE,
  ansi: true
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

const presetMatrix = p => DecoConfig.build(p).assignConfigs(CONF_DECO_MATRIX).assignPresets(NUMERIC_PRESET$2, LITERAL_PRESET$2); // p.delim = p.delim ?? COSP
// p.bracket = p.bracket ?? BRK
// p.read = p.read ?? decoFlat
// p.direct = p.direct ?? ROWWISE
// p.ansi = p.ansi ?? true
// return p

const CONF_DECO_CROSTAB = {
  delim: LF,
  read: decoFlat,
  ansi: true,
  direct: POINTWISE
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
  return DecoConfig.build(p).assignConfigs(CONF_DECO_CROSTAB).assignPresets(NUMERIC_PRESET$2, LITERAL_PRESET$2, HEADING_PRESET);
}; // p.delim = p.delim ?? LF
// p.read = p.read ?? decoFlat
// p.ansi = p.ansi ?? true
// p.direct = p.direct ?? POINTWISE
// // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET]
// DecoConfig.prototype.assignPresets.call(p, NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET)

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

const isNumericAny$1 = x => isNumeric$2(x) || isNumeric$1(x);

const NUM_BOUND_CONF_FULL$1 = {
  filter: isNumericAny$1,
  mapper: parseNum
};
const STR_BOUND_CONF_FULL$1 = {
  filter: isLiteralAny$1,
  mapper: stringValue$1
};
const NUM_BOUND_CONF_HALF$1 = {
  filter: isNumeric$1,
  mapper: parseNum$1
};
const STR_BOUND_CONF_HALF$1 = {
  filter: isLiteral$1,
  mapper: stringValue$1
};
const NUMERIC_PRESET$1 = FRESH;
const LITERAL_PRESET$1 = PLANET;

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

const LITERAL$a = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;

const ripper$b = function (text) {
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


ripper$b.bind(LITERAL$a);

const CONF_DECO_TABLE = {
  delim: LF,
  read: decoFlat,
  direct: COLUMNWISE,
  ansi: true
};
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

const presetTable = p => DecoConfig$1.build(p).assignConfigs(CONF_DECO_TABLE).assignPresets(NUMERIC_PRESET$2, LITERAL_PRESET$2, HEADING_PRESET); // p.delim = p.delim ?? LF
// p.read = p.read ?? decoFlat
// p.direct = p.direct ?? COLUMNWISE
// p.ansi = p.ansi ?? true
// // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET]
// DecoConfig.prototype.assignPresets.call(p, NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET)
// return p

const CONF_DECO_SAMPLES = {
  delim: COSP,
  bracket: BRK,
  indexed: true,
  read: decoFlat,
  direct: COLUMNWISE,
  ansi: true
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

const presetSamples = p => DecoConfig$1.build(p).assignConfigs(CONF_DECO_SAMPLES).assignPresets(NUMERIC_PRESET$2, LITERAL_PRESET$2, HEADING_PRESET); // p.delim = p.delim ?? COSP
// p.bracket = p.bracket ?? BRK
// p.indexed = p.indexed ?? true
// p.read = p.read ?? decoFlat
// p.direct = p.direct ?? COLUMNWISE
// p.ansi = p.ansi ?? true
// return p
// // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET]
// DecoConfig.prototype.assignPresets.call(p, NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET)

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

const CONF_DECO_STRING = {
  vectify: splitLiteral,
  width: 0
};
const presetString = p => {
  return DecoConfig$1.build(p).assignConfigs(CONF_DECO_STRING).assignPresets(ATLAS, SUBTLE);
}; // DecoConfig.prototype.assignPresets.call(p, ATLAS, SUBTLE)
// if (nullish(p.vectify)) p.vectify = splitLiteral
// if (nullish(p.width)) p.width = 0
// return p

const isNumeric = x => isNumeric$2(x) || isNumeric$1(x);
const NUM_BOUND_CONF_FULL = {
  filter: isNumeric,
  mapper: parseNum
};
const STR_BOUND_CONF_FULL = {
  filter: isLiteralAny,
  mapper: stringValue$2
};

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

export { CONF_DECO_CROSTAB, CONF_DECO_ENTRIES, CONF_DECO_MATRIX, CONF_DECO_OBJECT, CONF_DECO_SAMPLES, CONF_DECO_STRING, CONF_DECO_TABLE, CONF_DECO_VECTOR, DecoConfig, HEADING_PRESET, LITERAL_PRESET$2 as LITERAL_PRESET, NUMERIC_PRESET$2 as NUMERIC_PRESET, assignFluoConfigs, presetCrostab, presetEntries, presetMatrix, presetObject, presetSamples, presetString, presetTable, presetVector };
