import { duobound }            from '@aryth/bound-vector'
import { stringValue }         from '@spare/string-value'
import { isLiteral }           from '@typen/literal'
import { isNumeric, parseNum } from '@typen/numeral'
import { maxBy }               from '@vect/vector'

const config = [
  {
    by: isNumeric,
    to: parseNum,
  },
  {
    by: isLiteral,
    to: stringValue
  }
]

export class Arc {
  texts
  types
  rates
  constructor(texts, types, rates) {
    this.types = types
    this.texts = texts
    this.rates = rates
  }
}

export function alpha(vec) {
  const strings = vec.map(String)
  const rates = duobound(vec, config)
  const width = maxBy(strings, x => x?.length ?? 0)
  const texts = strings.map(x => x.padStart(width))
  const types = vec.map(x => typeof x)
  return new Arc(texts, types, rates)
}