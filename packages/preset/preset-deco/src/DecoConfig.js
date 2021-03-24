import { PresetCollection } from '@palett/fluo'
import { nullish }          from '@typen/nullish'
import { replenish }        from '@vect/object-update'

export class DecoConfig {
  /** @type {PresetCollection} */ presets

  /** @param {Object} conf */
  constructor(conf) {
    if (!conf) { return }
    Object.assign(this, conf)
    if (conf.presets) this.resetPresets(conf.presets, conf.effects, conf.full)
  }
  /**
   * @param {Object} [conf]
   * @returns {DecoConfig}
   */
  static build(conf) { return new DecoConfig(conf) }

  assignConfigs(configs) { return Object.assign(this, configs) }
  replenishConfigs(configs) { return replenish(this, configs) }

  resetPresets(presets, effects, full) {
    this.presets = Array.isArray(presets)
      ? PresetCollection.build.apply(null, presets)
      : PresetCollection.build.call(null, presets, presets)
    if (effects?.length) Array.isArray(effects)
      ? this.assignEffect.apply(this, effects)
      : this.assignEffect.call(this, effects)
    if (!nullish(full)) this.setBound(full)
    return this
  }
  assignPresets(...presets) {
    return this.presets
      ? (this.presets?.assignPresets.apply(this.presets, presets), this)
      : this.resetPresets(presets)
  }

  assignEffect(...effects) { return this.presets?.assignEffect.apply(this.presets, effects), this }
  setBound(full) { return this.presets?.setBound.call(this.presets, full), this }

  defaultPresets(...presets) {
    if (nullish(this.presets)) this.resetPresets(presets)
    return this
  }
  // defaultEffects(...effects) {
  //   if (effects?.length && !nullish(this.presets)) iterate(this.presets, preset => { if (!preset?.effect) preset.effects = effects })
  //   return this
  // }
  // defaultBound(full) {
  //   if (!nullish(full) && !nullish(this.presets)) this.setBound(full)
  //   return this
  // }
}

