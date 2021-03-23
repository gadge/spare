import { PresetCollection } from '@palett/fluo'
import { nullish }          from '@typen/nullish'
import { replenish }        from '@vect/object-update'

export class DecoConfig {
  /** @type {PresetCollection} */ presets

  /** @param {Object} configs */
  constructor(configs) {
    if (!configs) { return }
    Object.assign(this, configs)
    if (configs.presets) this.resetPresets(configs.presets)
  }
  /**
   * @param {Object} [configs]
   * @returns {DecoConfig}
   */
  static build(configs) { return new DecoConfig(configs) }

  assignConfigs(configs) { return Object.assign(this, configs) }
  replenishConfigs(configs) { return replenish(this, configs) }

  #assignPresets(...presets) { return this.presets?.assignPresets.apply(this.presets, presets), this }
  resetPresets(...presets) { return this.presets = PresetCollection.build.apply(null, presets), this }
  assignPresets(...presets) {
    return this.presets
      ? this.#assignPresets.apply(this, presets)
      : this.resetPresets.apply(this, presets)
  }
  defaultPresets(...presets) {
    if (nullish(this.presets)) this.resetPresets.apply(this, presets)
    return this
  }
  assignEffect(...effects) { return this.presets?.assignEffect.apply(this.presets, effects), this }
  setBound(full) { return this.presets?.setBound.call(this.presets, full), this }
}

