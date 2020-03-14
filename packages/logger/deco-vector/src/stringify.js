import { cosmetics } from './cosmetics'

export const stringify = (vec, {
  abstract,
  delimiter: delimiter = ', ',
  quote: quote = '\'',
  bracket: bracket = true,
} = {}) => cosmetics.call({ abstract, delimiter, quote, bracket }, vec)
