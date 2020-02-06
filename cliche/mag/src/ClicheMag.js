import { isNumeric } from '@spare/util'

export class ClicheMag {
  constructor (digit = 2, sep = 3) {
    this.dg = digit
    this.reg = new RegExp(
      `\\d(?=(\\d{${sep || 3}})+${digit > 0 ? '\\.' : '$'})`, 'g')
  }

  form (any) {
    return isNumeric(any) ? this.format(any) : String(any)
  }

  format (num) {
    return num.toFixed(this.dg).replace(this.reg, '$&,')
  }
}
