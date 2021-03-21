'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoFlat = require('@spare/deco-flat');
var enumBrackets = require('@spare/enum-brackets');
var enumChars = require('@spare/enum-chars');
var presets = require('@palett/presets');
var charsetFullwidth = require('@texting/charset-fullwidth');
var charsetHalfwidth = require('@texting/charset-halfwidth');
var enumMatrixDirections = require('@vect/enum-matrix-directions');

const NUMERIC_PRESET = presets.FRESH;
const LITERAL_PRESET = presets.PLANET;
const HEADING_PRESET = presets.SUBTLE;

// from x => typeof x
const STR = 'string';

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

const CJK_LETTERS = '\u4e00-\u9fbf';

const HALF_NUM = '0-9';
const HALF_UPPER = 'A-Z';
const HALF_LOWER = 'a-z';
const FULL_NUM = '０-９'; // 0xff10 - 0xff19

const FULL_UPPER = 'Ａ-Ｚ'; // 0xff21 - 0xff3a

const FULL_LOWER = 'ａ-ｚ'; // 0xff41 - 0xff5a

const LITERAL_LOWER = `${HALF_UPPER}${HALF_LOWER}${HALF_NUM}`;
const LITERAL_UPPER = `${FULL_UPPER}${FULL_LOWER}${FULL_NUM}`;

const LITERAL_ANY = new RegExp(`[${LITERAL_LOWER}${CJK_LETTERS}${LITERAL_UPPER}]+`);

const isLiteralAny = x => LITERAL_ANY.test(x);

const isNumeric = x => charsetFullwidth.isNumeric(x) || charsetHalfwidth.isNumeric(x);
const NUM_BOUND_CONF_FULL = {
  filter: isNumeric,
  mapper: charsetFullwidth.parseNum
};
const STR_BOUND_CONF_FULL = {
  filter: isLiteralAny,
  mapper: stringValue
};

const assignFluoConfigs = (p, ...presets) => {
  if (presets.length === 0) {
    var _p$presets;

    if (!p.fluos) p.fluos = ((_p$presets = p.presets) !== null && _p$presets !== void 0 ? _p$presets : [NUMERIC_PRESET, LITERAL_PRESET]).map(preset => ({
      preset
    }));

    if (p.full) {
      const [confNum, confStr] = p.fluos;
      if (confNum && !confNum.filter && !confNum.mapper) Object.assign(confNum, NUM_BOUND_CONF_FULL);
      if (confStr && !confStr.filter && !confStr.mapper) Object.assign(confStr, STR_BOUND_CONF_FULL);
    }

    return p;
  }

  if (presets.length === 1) {
    if (!p.fluos) p.fluos = presets.map(preset => ({
      preset
    }));

    if (p.full) {
      const [confNum] = p.fluos;
      if (confNum && !confNum.filter && !confNum.mapper) Object.assign(confNum, NUM_BOUND_CONF_FULL);
    }

    return p;
  }

  if (presets.length === 2) {
    if (!p.fluos) p.fluos = presets.map(preset => ({
      preset
    }));

    if (p.full) {
      const [confNum, confStr] = p.fluos;
      if (confNum && !confNum.filter && !confNum.mapper) Object.assign(confNum, NUM_BOUND_CONF_FULL);
      if (confStr && !confStr.filter && !confStr.mapper) Object.assign(confStr, STR_BOUND_CONF_FULL);
    }

    return p;
  }

  if (presets.length >= 3) {
    if (!p.fluos) p.fluos = presets.map(preset => ({
      preset
    }));

    if (p.full) {
      const [confNum, confStr, confLab] = p.fluos;
      if (confNum && !confNum.filter && !confNum.mapper) Object.assign(confNum, NUM_BOUND_CONF_FULL);
      if (confStr && !confStr.filter && !confStr.mapper) Object.assign(confStr, STR_BOUND_CONF_FULL);
      if (confLab && !confLab.filter && !confLab.mapper) Object.assign(confLab, STR_BOUND_CONF_FULL);
    }

    return p;
  }
};
const assignFluoConfigsForTabular = p => {};

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

  assignFluoConfigs(p);
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
  assignFluoConfigs(p);
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
  assignFluoConfigs(p);
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

  assignFluoConfigs(p);
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
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : enumMatrixDirections.POINTWISE;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
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

const presetTable = p => {
  var _p$delim, _p$read, _p$direct, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.LF;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoFlat.decoFlat; // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET]
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
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : enumMatrixDirections.COLUMNWISE;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

exports.HEADING_PRESET = HEADING_PRESET;
exports.LITERAL_PRESET = LITERAL_PRESET;
exports.NUMERIC_PRESET = NUMERIC_PRESET;
exports.assignFluoConfigs = assignFluoConfigs;
exports.assignFluoConfigsForTabular = assignFluoConfigsForTabular;
exports.presetCrostab = presetCrostab;
exports.presetEntries = presetEntries;
exports.presetMatrix = presetMatrix;
exports.presetObject = presetObject;
exports.presetSamples = presetSamples;
exports.presetTable = presetTable;
exports.presetVector = presetVector;
