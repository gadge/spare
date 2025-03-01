import { SP }              from '@texting/enum-chars'
import { fix, lpad, rpad } from '@texting/padder'

export function padTypo(t, n, w) {
  const fill = this?.fill ?? SP
  return isNaN(n) ? rpad(t, w, fill) : lpad(t, w, fill)
}

export function padAnsi(t, n, w) {
  const fill = this?.fill ?? SP
  return isNaN(n) ? rpad(t, fix(t, w), fill) : lpad(t, fix(t, w), fill)
}