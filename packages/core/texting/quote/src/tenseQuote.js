import { quote } from './qt'

const VERGE_QUOTE = /^'(.*)'$/
const QUOTE = /'/g
const BACKSLASH_QUOTE = '\\\''

export const tenseQuote = x => VERGE_QUOTE.test(x)
  ? x.replace(VERGE_QUOTE, (_, x) => quote(x.replace(QUOTE, BACKSLASH_QUOTE)))
  : quote(x.replace(QUOTE, BACKSLASH_QUOTE))
