import { PresetCollection } from '@palett/fluo';
import { nullish } from '@typen/nullish';
import { replenish } from '@vect/object-update';
import { decoFlat } from '@spare/deco-flat';
import { BRK, BRC } from '@spare/enum-brackets';
import { LF, RTSP, COLF, COSP } from '@spare/enum-chars';
import { FRESH, PLANET, SUBTLE, ATLAS, AZURE, MOSS } from '@palett/presets';
import { ROWWISE, POINTWISE, COLUMNWISE } from '@vect/enum-matrix-directions';
import { splitLiteral } from '@spare/splitter';

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
    return replenish(this, configs);
  }

  resetPresets(...presets) {
    return this.presets = PresetCollection.build(...presets), this;
  }

  assignPresets(...presets) {
    return this.presets ? _classPrivateFieldLooseBase(this, _assignPresets)[_assignPresets].apply(this, presets) : this.resetPresets.apply(this, presets);
  }

  defaultPresets(...presets) {
    if (nullish(this.presets)) this.resetPresets.apply(this, presets);
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

const NUMERIC_PRESET = FRESH;
const LITERAL_PRESET = PLANET;
const HEADING_PRESET = SUBTLE;

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

const presetEntries = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_ENTRIES).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET);

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

const presetObject = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_OBJECT).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET);

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

const presetVector = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_VECTOR).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET);

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

const presetMatrix = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_MATRIX).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET);

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
  return DecoConfig.build(p).replenishConfigs(CONF_DECO_CROSTAB).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET);
};

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

const presetTable = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_TABLE).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET);

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

const presetSamples = p => DecoConfig.build(p).replenishConfigs(CONF_DECO_SAMPLES).defaultPresets(NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET);

const CONF_DECO_STRING = {
  vectify: splitLiteral,
  width: 0
};
const presetString = p => {
  return DecoConfig.build(p).replenishConfigs(CONF_DECO_STRING).defaultPresets(ATLAS, SUBTLE);
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
  const conf = DecoConfig.build(p).replenishConfigs(CONF_DECO).defaultPresets(AZURE, MOSS);
  conf.string = DecoConfig.build(conf.string).defaultPresets(ATLAS, SUBTLE);
  return conf;
};

export { CONF_DECO, CONF_DECO_CROSTAB, CONF_DECO_ENTRIES, CONF_DECO_FLAT, CONF_DECO_MATRIX, CONF_DECO_OBJECT, CONF_DECO_SAMPLES, CONF_DECO_STRING, CONF_DECO_TABLE, CONF_DECO_VECTOR, DecoConfig, HEADING_PRESET, LITERAL_PRESET, NUMERIC_PRESET, presetCrostab, presetDeco, presetDecoFlat, presetEntries, presetMatrix, presetObject, presetSamples, presetString, presetTable, presetVector };
