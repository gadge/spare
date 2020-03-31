import { decoflat } from './src/decoflat'
import { FRESH, JUNGLE } from '@palett/presets'

/**
 * @Function
 * @type {Function|function(*):string}
 *  */
export const decoFlat = (o, { preset = FRESH, stringPreset = JUNGLE } = {}) =>
  decoflat.call({ preset, stringPreset, mutate: true }, 0, o)

/**
 *
 * @param preset
 * @param stringPreset
 * @return {Function|function(*):string}
 * @constructor
 */
export const DecoFlat = ({ preset = FRESH, stringPreset = JUNGLE } = {}) =>
  decoflat.bind({ preset, stringPreset, mutate: true }, 0)
