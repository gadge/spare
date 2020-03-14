import { cosmetics } from './cosmetics'

export const stringify = (vec, {
  abstract,
  delimiter: de = ', ',
  quote: qt = '\'',
  bracket: br = true,
} = {}) => cosmetics.call({ abstract, de, qt, br }, vec)
