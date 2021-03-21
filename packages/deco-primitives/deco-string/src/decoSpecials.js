import { DA, SP }                 from '@spare/enum-chars'
import { splitCamel, splitSnake } from '@spare/splitter'
import { _decoString }            from './_decoString'
import { PRESETS }                from './presetString'


const Splitter = delim => v => String.prototype.split.call(v, delim)
export const decoCamel = (text, { delim = '', presets = PRESETS, effects } = {}) => {
  return _decoString.call({ delim, presets, effects, vectify: splitCamel }, text)
}

export const decoSnake = (text, { delim = DA, presets = PRESETS, effects } = {}) => {
  return _decoString.call({ delim, presets, effects, vectify: splitSnake }, text)
}

export const decoPhrase = (text, { delim = SP, presets = PRESETS, effects } = {}) => {
  return _decoString.call({ delim, presets, effects, vectify: Splitter(delim) }, text)
}
