import { presetDecoFlat } from '@spare/preset-deco'
import { _decoFlat }      from './src/decoFlat'

// const CONF_DECO_FLAT = { mutate: true }
// const parseConfig = conf => DecoConfig
//   .build(conf)
//   .assignConfigs(CONF_DECO_FLAT)
//   .assignPresets(...conf.presets)

/**
 * @Function
 * @type {Function|function(*):string}
 *  */
export const decoFlat = (o, config = {}) =>
  _decoFlat.call(presetDecoFlat(config), 0, o)

/**
 *
 * @param {Object} config
 * @return {Function|function(*):string}
 * @constructor
 */
export const DecoFlat = (config = {}) =>
  _decoFlat.bind(presetDecoFlat(config), 0)
