import { DecoConfig, LITERAL_PRESET, NUMERIC_PRESET } from '@spare/preset-deco'
import { _decoFlat }                                  from './src/decoFlat'

const CONF_DECO_FLAT = { mutate: true }
const parseConfig = conf => DecoConfig
  .build(conf)
  .assignConfigs(CONF_DECO_FLAT)
  .assignPresets(...conf.presets)

/**
 * @Function
 * @type {Function|function(*):string}
 *  */
export const decoFlat = (o, { presets = [NUMERIC_PRESET, LITERAL_PRESET] } = {}) =>
  _decoFlat.call(parseConfig({ presets }), 0, o)

/**
 *
 * @param {Object[]} presets
 * @return {Function|function(*):string}
 * @constructor
 */
export const DecoFlat = ({ presets = [NUMERIC_PRESET, LITERAL_PRESET] } = {}) =>
  _decoFlat.bind(parseConfig({ presets }), 0)
