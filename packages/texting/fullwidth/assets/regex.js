import { CJK_PUNCS, FULL_CHARS, HALF_CHARS } from '@spare/regex-charset'

export const REG_FULL = new RegExp(`[${CJK_PUNCS}${FULL_CHARS}]+`, 'g') // /[\uff01-\uff5e|\u3000]+/g
export const REG_HALF = new RegExp(`[${HALF_CHARS}]+`, 'g')// /[\u0020-\u007e]+/g
export const REG_SP = 0x3000
export const DELTA_FULL = 0xfee0
export const REG_NUM_FULL = /^\s*[－＋]?(?:，*[０-９]+)*．?[０-９]+\s*$/
