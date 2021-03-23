'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fluo = require('@palett/fluo');
var nullish = require('@typen/nullish');
var objectUpdate = require('@vect/object-update');
var decoFlat = require('@spare/deco-flat');
var enumBrackets = require('@spare/enum-brackets');
var enumChars = require('@spare/enum-chars');
var presets = require('@palett/presets');
var enumMatrixDirections = require('@vect/enum-matrix-directions');
var splitter = require('@spare/splitter');

var id = 0;

function _classPrivateFieldLooseKey(name) {
  return "__private_" + id++ + "_" + name;
}

function _classPrivateFieldLooseBase(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }

  return receiver;
}

var _assignPresets = _classPrivateFieldLooseKey("assignPresets");

class DecoConfig {
  /** @type {PresetCollection} */

  /** @param {Object} conf */
  constructor(conf) {
    Object.defineProperty(this, _assignPresets, {
      value: _assignPresets2
    });
    this.presets = void 0;

    if (!conf) {
      return;
    }

    Object.assign(this, conf);
    if (conf.presets) this.resetPresets.apply(this, conf.presets);
  }
  /**
   * @param {Object} [conf]
   * @returns {DecoConfig}
   */


  static build(conf) {
    return new DecoConfig(conf);
  }

  assignConfigs(configs) {
    return Object.assign(this, configs);
  }

  replenishConfigs(configs) {
    return objectUpdate.replenish(this, configs);
  }

  resetPresets(...presets) {
    return this.presets = fluo.PresetCollection.build(...presets), this;
  }

  assignPresets(...presets) {
    return this.presets ? _classPrivateFieldLooseBase(this, _assignPresets)[_assignPresets].apply(this, presets) : this.resetPresets.apply(this, presets);
  }

  defaultPresets(...presets) {
    if (nullish.nullish(this.presets)) this.resetPresets.apply(this, presets);
    return this;
  }

  assignEffect(...effects) {
    var _this$presets;

    return (_this$presets = this.presets) !== null && _this$presets !== void 0 && _this$presets.assignEffect.apply(this.presets, effects), this;
  }

  setBound(full) {
    var _this$presets2;

    return (_this$presets2 = this.presets) !== null && _this$presets2 !== void 0 && _this$presets2.setBound.call(this.presets, full), this;
  }

}

var _assignPresets2 = function _assignPresets2(...presets) {
  var _this$presets3;

  return (_this$presets3 = this.presets) !== null && _this$presets3 !== void 0 && _this$presets3.assignPresets.apply(this.presets, presets), this;
};

const NUMERIC_PRESET = presets.FRESH;
const LITERAL_PRESET = presets.PLANET;
const HEADING_PRESET = presets.SUBTLE;

const CONF_DECO_ENTRIES = {
  dash: ' > ',
  delim: enumChars.LF,
  bracket: enumBrackets.BRK,
  read: decoFlat.decoFlat,
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

const presetEntries = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_ENTRIES).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET); // p.dash = p.dash ?? ' > '
// p.delim = p.delim ?? LF
// p.bracket = p.bracket ?? BRK
// p.read = p.read ?? decoFlat
// p.ansi = p.ansi ?? true
// // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET]
// DecoConfig.prototype.defaultPresets.call(p, NUMERIC_PRESET, LITERAL_PRESET)
// return p

const CONF_DECO_OBJECT = {
  dash: enumChars.RTSP,
  delim: enumChars.COLF,
  bracket: enumBrackets.BRC,
  read: decoFlat.decoFlat,
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

const presetObject = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_OBJECT).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET); // p.dash = p.dash ?? RTSP
// p.delim = p.delim ?? COLF
// p.bracket = p.bracket ?? BRC
// p.read = p.read ?? decoFlat
// p.ansi = p.ansi ?? true
// return p

const CONF_DECO_VECTOR = {
  dash: ') ',
  delim: enumChars.COLF,
  bracket: enumBrackets.BRK,
  indexed: false,
  read: decoFlat.decoFlat,
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

const presetVector = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_VECTOR).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET);

const CONF_DECO_MATRIX = {
  delim: enumChars.COSP,
  bracket: enumBrackets.BRK,
  read: decoFlat.decoFlat,
  direct: enumMatrixDirections.ROWWISE,
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

const presetMatrix = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_MATRIX).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET); // p.delim = p.delim ?? COSP
// p.bracket = p.bracket ?? BRK
// p.read = p.read ?? decoFlat
// p.direct = p.direct ?? ROWWISE
// p.ansi = p.ansi ?? true
// return p

const CONF_DECO_CROSTAB = {
  delim: enumChars.LF,
  read: decoFlat.decoFlat,
  ansi: true,
  direct: enumMatrixDirections.POINTWISE
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
  return DecoConfig.build(p).replenishConfigs(CONF_DECO_CROSTAB).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET);
}; // p.delim = p.delim ?? LF
// p.read = p.read ?? decoFlat
// p.ansi = p.ansi ?? true
// p.direct = p.direct ?? POINTWISE
// // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET]
// DecoConfig.prototype.defaultPresets.call(p, NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET)

const CONF_DECO_TABLE = {
  delim: enumChars.LF,
  read: decoFlat.decoFlat,
  direct: enumMatrixDirections.COLUMNWISE,
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

const presetTable = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_TABLE).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET); // p.delim = p.delim ?? LF
// p.read = p.read ?? decoFlat
// p.direct = p.direct ?? COLUMNWISE
// p.ansi = p.ansi ?? true
// // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET]
// DecoConfig.prototype.defaultPresets.call(p, NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET)
// return p

const CONF_DECO_SAMPLES = {
  delim: enumChars.COSP,
  bracket: enumBrackets.BRK,
  indexed: true,
  read: decoFlat.decoFlat,
  direct: enumMatrixDirections.COLUMNWISE,
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

const presetSamples = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_SAMPLES).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET); // p.delim = p.delim ?? COSP
// p.bracket = p.bracket ?? BRK
// p.indexed = p.indexed ?? true
// p.read = p.read ?? decoFlat
// p.direct = p.direct ?? COLUMNWISE
// p.ansi = p.ansi ?? true
// return p
// // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET]
// DecoConfig.prototype.defaultPresets.call(p, NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET)

const CONF_DECO_STRING = {
  vectify: splitter.splitLiteral,
  width: 0
};
const presetString = p => {
  return DecoConfig.build(p).replenishConfigs(CONF_DECO_STRING).defaultPresets(presets.ATLAS, presets.SUBTLE);
}; // DecoConfig.prototype.defaultPresets.call(p, ATLAS, SUBTLE)
// if (nullish(p.vectify)) p.vectify = splitLiteral
// if (nullish(p.width)) p.width = 0
// return p

const CONF_DECO_FLAT = {
  mutate: true
};
const presetDecoFlat = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_FLAT).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET);

const CONF_DECO = {
  depth: 8,
  // 展示级别
  vert: 0,
  // 在此级别以下均设为竖排
  unit: 32,
  // 若 数组/键值对的值 单个元素长度超过此, 则进行竖排
  width: 80,
  // 字符超过此, 则换行
  string: {} // 设置字符串

};
const presetDeco = p => {
  const conf = DecoConfig.build(p).replenishConfigs(CONF_DECO).defaultPresets(presets.AZURE, presets.MOSS);
  conf.string = DecoConfig.build(conf.string).defaultPresets(presets.ATLAS, presets.SUBTLE);
  return conf;
}; // if (!p) p = {}
// p.wf = p.wf ?? 160
// if (nullish(p.presets)) p.presets = p.pr ?? [AZURE, MOSS]
// DecoConfig.prototype.assignPresets.call(p, AZURE, MOSS)
// if (nullish(p.depth)) p.depth = 8 // 展示级别
// if (nullish(p.vert)) p.vert = 0 // 在此级别以下均设为竖排
// if (nullish(p.unit)) p.unit = 32 // 若 数组/键值对的值 单个元素长度超过此, 则进行竖排
// if (nullish(p.width)) p.width = 80 // 字符超过此, 则换行
// if (nullish(p.string)) p.string = {}
// const s = p.string
// // if (nullish(s.presets)) s.presets = [ATLAS, SUBTLE]
// DecoConfig.prototype.assignPresets.call(s, ATLAS, SUBTLE)
// // p |> JSON.stringify |> logger
// return p

exports.CONF_DECO = CONF_DECO;
exports.CONF_DECO_CROSTAB = CONF_DECO_CROSTAB;
exports.CONF_DECO_ENTRIES = CONF_DECO_ENTRIES;
exports.CONF_DECO_FLAT = CONF_DECO_FLAT;
exports.CONF_DECO_MATRIX = CONF_DECO_MATRIX;
exports.CONF_DECO_OBJECT = CONF_DECO_OBJECT;
exports.CONF_DECO_SAMPLES = CONF_DECO_SAMPLES;
exports.CONF_DECO_STRING = CONF_DECO_STRING;
exports.CONF_DECO_TABLE = CONF_DECO_TABLE;
exports.CONF_DECO_VECTOR = CONF_DECO_VECTOR;
exports.DecoConfig = DecoConfig;
exports.HEADING_PRESET = HEADING_PRESET;
exports.LITERAL_PRESET = LITERAL_PRESET;
exports.NUMERIC_PRESET = NUMERIC_PRESET;
exports.presetCrostab = presetCrostab;
exports.presetDeco = presetDeco;
exports.presetDecoFlat = presetDecoFlat;
exports.presetEntries = presetEntries;
exports.presetMatrix = presetMatrix;
exports.presetObject = presetObject;
exports.presetSamples = presetSamples;
exports.presetString = presetString;
exports.presetTable = presetTable;
exports.presetVector = presetVector;
