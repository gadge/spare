import { OBJ, STR, SYM } from '@typen/enum-data-types'

export function str(x) {
  const p = typeof x
  if (x === null) return '' + x
  if (p === OBJ || p === SYM) return x.toString()
  if (p === STR) return x
  return '' + x
}

export function num(x) {
  const y = parseFloat(x)
  return isNaN(x - y) ? NaN : y
}