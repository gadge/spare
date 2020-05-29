import { LITERAL_PRESET, NUMERIC_PRESET } from '@spare/preset-deco'
import { decoflat }                       from './src/decoflat'

/**
 * @Function
 * @type {Function|function(*):string}
 *  */
export const decoFlat = (o, { presets = [NUMERIC_PRESET, LITERAL_PRESET] } = {}) =>
  decoflat.call({ presets, mutate: true }, 0, o)

/**
 *
 * @param {Object[]} presets
 * @return {Function|function(*):string}
 * @constructor
 */
export const DecoFlat = ({ presets = [NUMERIC_PRESET, LITERAL_PRESET] } = {}) =>
  decoflat.bind({ presets, mutate: true }, 0)
