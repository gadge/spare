import { clearAnsi, hasAnsi } from '@texting/charset-ansi'
import { parenth, bracket }   from '@texting/bracket'

export const separate = text => {
  const ms = /\b\w/.exec(text)
  const pos = ms?.index
  return !pos ? [ null, text ] : [ text.slice(0, pos), text.slice(pos) ]
}

export const hasBr = tx => /^\s*[(\[{].*[)\]}]\s*$/.test(hasAnsi(tx) ? clearAnsi(tx) : tx)

export class Keep {
  static make(fn) { return tx => hasBr(tx) ? tx : fn(tx) }
  /** @type {function} */ static bracket = Keep.make(bracket)
  /** @type {function} */ static parenth = Keep.make(parenth)
}