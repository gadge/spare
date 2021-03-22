import { FluoConfigs } from '@palett/fluo'


export class DecoConfig {
  constructor() {}
  assignPresets(...presets) {
    const fluos = this.fluos ?? (this.fluos = [])
    FluoConfigs.prototype.assignPresets.apply(fluos, presets)
    return this
  }
  assignBoundConfig(charWidth) {
    const fluos = this.fluos ?? (this.fluos = [])
    FluoConfigs.prototype.assignBoundConfigs.call(fluos, charWidth)
    return this
  }
}

