import { mutate } from '@vect/vector-mapper'
import { wordToCap } from './wordToCap'

export const wordsToCamel = words => {
  let i = 0, l = words?.length
  if (l) words[i] = words[i].toLowerCase()
  while (++i < l) words[i] = wordToCap(words[i])
  return words
}

export const wordsToPascal = words => mutate(words, wordToCap)


