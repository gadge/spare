import { min } from '@aryth/comparer'
import { bracket, parenth } from '@texting/bracket'
import { clearAnsi, hasAnsi } from '@texting/charset-ansi'
import { camelToSnake } from '@texting/phrasing'
import { Rosters } from './singletons.js'

export function identify(tx) {
  const pos = min(//.exec(tx)?.index, /\b\w/.exec(tx)?.index)
  return !pos ? [ null, tx ] : [ tx.slice(0, pos), tx.slice(pos) ]
}

identify.body = tx => {
  const pos = min(//.exec(tx)?.index, /\b\w/.exec(tx)?.index)
  return !pos ? tx : tx.slice(pos)
}

export function hasBr(tx) { return /^\s*[(\[{].*[)\]}]\s*$/.test(hasAnsi(tx) ? clearAnsi(tx) : tx) }
const ansiOrSnake = tx => hasAnsi(tx) ? tx : camelToSnake(tx)

export class Keep {
  static make(fn) { return tx => hasBr(tx) ? tx : fn(tx) }
  /** @type {function} */ static bracket = Keep.make(bracket)
  /** @type {function} */ static parenth = Keep.make(parenth)
  /** @type {function} */ static snakePrettyKey = Keep.make(x => bracket(Rosters.main.get(ansiOrSnake(x))))
}


