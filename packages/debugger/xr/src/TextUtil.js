import { min }                                    from '@aryth/comparer'
import { bracket, parenth }                       from '@texting/bracket'
import { clearAnsi, hasAnsi }                     from '@texting/charset-ansi'
import { BIG, BOO, FUN, NUM, OBJ, STR, SYM, UND } from '@typen/enum-data-types'
import { Record }                                 from './Record'

export const separate = text => {
  const pos = min(//.exec(text)?.index, /\b\w/.exec(text)?.index)
  return !pos ? [ null, text ] : [ text.slice(0, pos), text.slice(pos) ]
}

export const hasBr = tx => /^\s*[(\[{].*[)\]}]\s*$/.test(hasAnsi(tx) ? clearAnsi(tx) : tx)

export class Keep {
  static make(fn) { return tx => hasBr(tx) ? tx : fn(tx) }
  /** @type {function} */ static bracket = Keep.make(bracket)
  /** @type {function} */ static parenth = Keep.make(parenth)
}


