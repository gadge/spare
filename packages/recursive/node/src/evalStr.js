import { OBJ, STR, SYM } from '@typen/enum-data-types'

export function evalStr(x) {
  const p = typeof x
  return x === null ? '' + x : p === OBJ || p === SYM ? x.toString() : p === STR ? x : '' + x
}