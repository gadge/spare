import { fix, lpad, rpad } from '@texting/padder'

export function priPad(x, n, w) {
  return isNaN(n) ? rpad(x, w, this.fill) : lpad(x, w, this.fill)
}
export function fixPad(x, n, w) {
  return isNaN(n) ? rpad(x, fix(x, w), this.fill) : lpad(x, fix(x, w), this.fill)
}