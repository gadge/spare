import { DA, SP }                 from '@spare/enum-chars'
import { splitCamel, splitSnake } from '@spare/splitter'
import { cosmetics, Splitter }    from './cosmetics'
import { PRESETS }                from './presetString'

export const decoCamel = (text, { delim = '', presets = PRESETS } = {}) => {
  return cosmetics.call({ delim, presets, vectify: splitCamel }, text)
}

export const decoSnake = (text, { delim = DA, presets = PRESETS } = {}) => {
  return cosmetics.call({ delim, presets, vectify: splitSnake }, text)
}

export const decoPhrase = (text, { delim = SP, presets = PRESETS } = {}) => {
  return cosmetics.call({ delim, presets, vectify: Splitter(delim) }, text)
}
