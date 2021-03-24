'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fluo = require('@palett/fluo');
var nullish = require('@typen/nullish');
var objectUpdate = require('@vect/object-update');

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
    if (defaultConfig) conf.replenishConfigs(defaultConfig);
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

exports.DecoConfig = DecoConfig;
