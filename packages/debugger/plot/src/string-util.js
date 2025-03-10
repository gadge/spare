import { min }                        from '@aryth/comparer'
import { bracket, parenth }           from '@texting/bracket'
import { clearAnsi, hasAnsi }         from '@texting/charset-ansi'
import { camelToSnake, snakeToCamel } from '@texting/phrasing'
import { SYM }                        from '@typen/enum-data-types'
import { Rosters }                    from '../index.js'

export function hasBPr(tx) { return /^\s*[(\[{].*[)\]}]\s*$/.test(hasAnsi(tx) ? clearAnsi(tx) : tx) }

export function retBr(tx) { return hasBPr(typeof tx === SYM ? tx.description : tx) ? tx : bracket(tx) }

export function retPr(tx) { return hasBPr(typeof tx === SYM ? tx.description : tx) ? tx : parenth(tx) }

export function trimInit(tx) { return tx.replace(/^ +/, '') }

export function getInd(tx) {
  let ms, ph
  if ((ms = tx?.match(/\s+/)) && ([ ph ] = ms)) return ph
  return ''
}

export function sepPreBody(tx) {
  if (/^\w.*\w$/.test(tx)) return [ null, tx ]
  const pos = min(//.exec(tx)?.index, /\b\w/.exec(tx)?.index)
  return pos ? [ tx.slice(0, pos), tx.slice(pos) ] : [ null, tx ]
}

function ansiOrSnake(tx) {
  if (!tx || hasAnsi(tx)) return tx
  if (/\s/.test(tx)) tx = snakeToCamel(tx)
  return camelToSnake(tx)
}

export function snakeRole(tx) {
  // console.log('snakeRole', `(${t})`)
  return hasBPr(tx) ? tx : bracket(Rosters.instance.get(ansiOrSnake(tx)))
}




