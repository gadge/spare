import { FluoConfigs } from '@palett/fluo'
import { replenish }   from '@vect/object-update'

export class DecoConfig {
  /**
   *
   * @param {Object} configs
   */
  constructor(configs) { if (configs) Object.assign(this, configs) }
  /**
   *
   * @param {Object} [configs]
   * @returns {DecoConfig}
   */
  static build(configs) { return new DecoConfig(configs) }

  assignConfigs(configs) { return replenish(this, configs) }
  assignPresets(...presets) {
    FluoConfigs.prototype.assignPresets.apply(this.fluos ?? (this.fluos = []), presets)
    return this
  }
  assignBoundConfig(charWidth) {
    if (this.fluos) FluoConfigs.prototype.assignBoundConfigs.call(this.fluos, charWidth)
    return this
  }
}

