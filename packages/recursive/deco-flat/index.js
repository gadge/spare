import { DecoConfig }             from '@spare/deco-config'
import { DUAL_PRESET_COLLECTION } from '@spare/preset-deco'
import { CONFIG }                 from './resources/config'
import { _decoFlat }              from './src/decoFlat'

// const CONF_DECO_FLAT = { mutate: true }
// const parseConfig = conf => DecoConfig
//   .build(conf)
//   .assignConfigs(CONF_DECO_FLAT)
//   .assignPresets(...conf.presets)

/**
 * @Function
 * @type {Function|function(*):string}
 *  */
export const decoFlat = (o, p = {}) => _decoFlat
  .call(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION), 0, o)

/**
 *
 * @param {Object} p
 * @return {Function|function(*):string}
 * @constructor
 */
export const DecoFlat = (p = {}) => _decoFlat
  .bind(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION), 0)
