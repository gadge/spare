import { min }                        from '@aryth/comparer'
import { bracket, parenth }           from '@texting/bracket'
import { clearAnsi, hasAnsi }         from '@texting/charset-ansi'
import { camelToSnake, snakeToCamel } from '@texting/phrasing'
import { Rosters }                    from './singletons.js'

export function hasBPr(tx) { return /^\s*[(\[{].*[)\]}]\s*$/.test(hasAnsi(tx) ? clearAnsi(tx) : tx) }

export function retBr(tx) { return hasBPr(tx) ? tx : bracket(tx) }

export function retPr(tx) { return hasBPr(tx) ? tx : parenth(tx) }

export function retSnakePretty(tx) {
  return hasBPr(tx) ? tx : bracket(Rosters.main.get(ansiOrSnake(tx)))
}

export function trimInit(tx) { return tx.replace(/^ +/, '') }

export function getInd(tx) {
  let ms, ph
  if ((ms = tx?.match(/\s+/)) && ([ ph ] = ms)) return ph
  return ''
}

export function sepPreBody(tx) {
  if (/^\w.*\w$/.test(tx)) return [ null, tx ]
  const pos = min(//.exec(tx)?.index, /\b\w/.exec(tx)?.index)
  return !pos ? [ null, tx ] : [ tx.slice(0, pos), tx.slice(pos) ]
}

export function getBody(tx) {
  if (/^\w.*\w$/.test(tx)) return tx
  const pos = min(//.exec(tx)?.index, /\b\w/.exec(tx)?.index)
  return !pos ? tx : tx.slice(pos)
}

function ansiOrSnake(tx) {
  if (hasAnsi(tx)) return tx
  if (/\s/.test(tx)) tx = snakeToCamel(tx)
  return hasAnsi(tx) ? tx : camelToSnake(tx)
}




