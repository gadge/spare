import { LF } from '@texting/enum-chars'

export const logger = (x, ...p) => console.log(x + '', ...p)
export const logNeL = (x, ...p) => console.log(x + '', ...p, LF)
