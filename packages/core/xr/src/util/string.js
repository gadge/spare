import { min }                        from '@aryth/comparer'
import { bracket, parenth }           from '@texting/bracket'
import { clearAnsi, hasAnsi }         from '@texting/charset-ansi'
import { camelToSnake, snakeToCamel } from '@texting/phrasing'
import { SYM }                        from '@typen/enum-data-types'

export const hasBrPr = tx => /^\s*[(\[{].*[)\]}]\s*$/.test(hasAnsi(tx) ? clearAnsi(tx) : tx)

export const retBracket = tx => hasBrPr(typeof tx === SYM ? tx.description : tx) ? tx : bracket(tx)

export const retParenth = tx => hasBrPr(typeof tx === SYM ? tx.description : tx) ? tx : parenth(tx)

export const trimInit = tx => tx.replace(/^ +/, '')

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
  if (hasAnsi(tx)) return tx
  if (/\s/.test(tx)) tx = snakeToCamel(tx)
  return camelToSnake(tx)
}


const symOrStr = x => typeof x === SYM ? x.description : x + ''




