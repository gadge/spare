import { min }                        from '@aryth/comparer'
import { bracket, parenth }           from '@texting/bracket'
import { clearAnsi, hasAnsi }         from '@texting/charset-ansi'
import { camelToSnake, snakeToCamel } from '@texting/phrasing'
import { SYM }                        from '@typen/enum-data-types'
import { Ross }                       from '../index.js'

export function hasBrPr(tx) { return /^\s*[(\[{].*[)\]}]\s*$/.test(hasAnsi(tx) ? clearAnsi(tx) : tx) }

export function retBracket(tx) { return hasBrPr(typeof tx === SYM ? tx.description : tx) ? tx : bracket(tx) }

export function retParenth(tx) { return hasBrPr(typeof tx === SYM ? tx.description : tx) ? tx : parenth(tx) }

export function trimInit(tx) { return tx.replace(/^ +/, '') }

export function carveIndent(tx) {
  let ms, ph
  if ((ms = tx?.match(/\s+/)) && ([ ph ] = ms)) return ph
  return ''
}

export function spinOff(tx) {
  if (/^\w.*\w$/.test(tx)) return [ null, tx ]
  const pos = min(//.exec(tx)?.index, /\b\w/.exec(tx)?.index)
  return pos ? [ tx.slice(0, pos), tx.slice(pos) ] : [ null, tx ]
}

export function ansiOrSnake(tx) {
  if (!tx || hasAnsi(tx)) return tx
  if (/\s/.test(tx)) tx = snakeToCamel(tx)
  return camelToSnake(tx)
}




