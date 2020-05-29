import { wordsToCamel, wordsToPascal } from '../../../src/words'
import { wordToCap }                   from '../../../src/wordToCap'

export const DASHED = /[A-Za-z\d]+/g

export const classic = dashed => {
  const matches = dashed.match(DASHED)
  return matches
    ? matches[0].toLowerCase() + matches.slice(1).map(wordToCap).join('')
    : dashed
}
export const mutative = dashed => {
  const words = dashed.match(DASHED)
  return words ? wordsToCamel(words).join('') : ''
}
export const mutativePascal = dashed => {
  const words = dashed.match(DASHED)
  return words ? wordsToPascal(words).join('') : ''
}

const INI_WD = /[A-Za-z\d]+/
const CAP_REST = /[\W_]+([A-Za-z\d])([A-Za-z\d]*)/g

export const byReplace = (dashed) => {
  return dashed
    .toLowerCase()
    .replace(INI_WD, x => x.toLowerCase())
    .replace(CAP_REST, (m, cap, rest) => cap.toUpperCase() + rest.toLowerCase())
}


