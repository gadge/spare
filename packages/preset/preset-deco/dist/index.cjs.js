'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var fluo = require('@palett/fluo');
var nullish = require('@typen/nullish');
var objectUpdate = require('@vect/object-update');
var decoFlat = require('@spare/deco-flat');
var enumBrackets = require('@spare/enum-brackets');
var enumChars = require('@spare/enum-chars');
var enumMatrixDirections = require('@vect/enum-matrix-directions');
var splitter = require('@texting/splitter');

const NUMERIC_PRESET = presets.FRESH;
const LITERAL_PRESET = presets.PLANET;
const HEADING_PRESET = presets.SUBTLE;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class DecoConfig {
  /** @type {PresetCollection} */

  /** @type {string[]} */

  /** @type {boolean} */

  /** @param {Object} conf */
  constructor(conf) {
    _defineProperty(this, "presets", void 0);

    _defineProperty(this, "effects", void 0);

    _defineProperty(this, "full", void 0);

    if (!conf) {
      return;
    }

    Object.assign(this, conf);
    if (conf.presets) this.resetPresets(conf.presets, conf.effects, conf.full);
  }
  /**
   * @param {Object} [conf]
   * @returns {DecoConfig}
   */


  static build(conf) {
    return new DecoConfig(conf);
  }

  static parse(userConfig, defaultConfig, defaultPresets) {
    const conf = DecoConfig.build(userConfig);
    if (defaultConfig) conf.replenishConfigs(conf);
    if (defaultPresets) conf.defaultPresets.apply(conf, defaultPresets);
    return conf;
  }

  assignConfigs(configs) {
    return Object.assign(this, configs);
  }

  replenishConfigs(configs) {
    return objectUpdate.replenish(this, configs);
  }

  resetPresets(presets, effects, full) {
    this.presets = Array.isArray(presets) ? fluo.PresetCollection.build.apply(null, presets) : fluo.PresetCollection.build.call(null, presets, presets);
    if (effects !== null && effects !== void 0 && effects.length) Array.isArray(effects) ? this.assignEffect.apply(this, effects) : this.assignEffect.call(this, effects);
    if (!nullish.nullish(full)) this.setBound(full);
    return this;
  }

  assignPresets(...presets) {
    var _this$presets;

    return this.presets ? ((_this$presets = this.presets) !== null && _this$presets !== void 0 && _this$presets.assignPresets.apply(this.presets, presets), this) : this.resetPresets(presets);
  }

  assignEffect(...effects) {
    var _this$presets2;

    return (_this$presets2 = this.presets) !== null && _this$presets2 !== void 0 && _this$presets2.assignEffect.apply(this.presets, effects), this;
  }

  setBound(full) {
    var _this$presets3;

    return (_this$presets3 = this.presets) !== null && _this$presets3 !== void 0 && _this$presets3.setBound.call(this.presets, full), this;
  }

  defaultPresets(...presets) {
    if (nullish.nullish(this.presets)) this.resetPresets(presets, this.effects, this.full);
    return this;
  } // defaultEffects(...effects) {
  //   if (effects?.length && !nullish(this.presets)) iterate(this.presets, preset => { if (!preset?.effect) preset.effects = effects })
  //   return this
  // }
  // defaultBound(full) {
  //   if (!nullish(full) && !nullish(this.presets)) this.setBound(full)
  //   return this
  // }


}

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

const presetEntries = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_ENTRIES).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET);

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

const presetObject = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_OBJECT).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET);

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

const presetMatrix = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_MATRIX).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET);

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
};

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

const presetTable = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_TABLE).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET);

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

const presetSamples = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_SAMPLES).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET);

const CONF_DECO_STRING = {
  vectify: splitter.splitLiteral,
  width: 0
};
const presetString = p => {
  return DecoConfig.build(p).replenishConfigs(CONF_DECO_STRING).defaultPresets(presets.ATLAS, presets.SUBTLE);
};

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
};

const DUAL_PRESET_COLLECTION = [NUMERIC_PRESET, LITERAL_PRESET];
const TRI_PRESET_COLLECTION = [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET];

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
exports.DUAL_PRESET_COLLECTION = DUAL_PRESET_COLLECTION;
exports.DecoConfig = DecoConfig;
exports.HEADING_PRESET = HEADING_PRESET;
exports.LITERAL_PRESET = LITERAL_PRESET;
exports.NUMERIC_PRESET = NUMERIC_PRESET;
exports.TRI_PRESET_COLLECTION = TRI_PRESET_COLLECTION;
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
