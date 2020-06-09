import { quote } from './qt'

const DUALQT = /^'(.*)'$/
const ANYQT = /'/g
const CTQT = '\\\''

export const tenseQuote = x => DUALQT.test(x)
  ? x.replace(DUALQT, (_, x) => quote(x.replace(ANYQT, CTQT)))
  : quote(x.replace(ANYQT, CTQT))
