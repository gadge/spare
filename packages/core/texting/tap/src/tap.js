import { wordsToCamel, wordsToPascal } from '@spare/phrasing'

export const tap = (...words) => {
  const ve = []
  for (let word of words)
    if (word?.length)
      ve.push(word)
  return ve
}

export const tapSnake = function (...words) {
  const delim = this?.delim ?? '_'
  const ve = tap.apply(null, words)
  return ve.join(delim)
}

export const tapCamel = function (...words) {
  const ve = tap.apply(null, words)
  return wordsToCamel(ve).join('')
}

export const tapPascal = function (...words) {
  const ve = tap.apply(null, words)
  return wordsToPascal(ve).join('')
}


