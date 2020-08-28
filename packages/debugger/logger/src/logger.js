import { LF } from '@spare/enum-chars'

export const logger = (x, ...p) => void console.log(x + '', ...p)
export const logNeL = (x, ...p) => void console.log(x + '', ...p, LF)
