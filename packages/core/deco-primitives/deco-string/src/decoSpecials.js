import { DA, SP }                 from '@spare/enum-chars'
import { splitCamel, splitSnake } from '@spare/splitter'
import { cosmetics, Splitter }    from './cosmetics'
import { PRESETS }                from './presetString'

export const decoCamel = (text, { delim = '', presets = PRESETS, effects } = {}) => {
  return cosmetics.call({ delim, presets, effects, vectify: splitCamel }, text)
}

export const decoSnake = (text, { delim = DA, presets = PRESETS, effects } = {}) => {
  return cosmetics.call({ delim, presets, effects, vectify: splitSnake }, text)
}

export const decoPhrase = (text, { delim = SP, presets = PRESETS, effects } = {}) => {
  return cosmetics.call({ delim, presets, effects, vectify: Splitter(delim) }, text)
}
