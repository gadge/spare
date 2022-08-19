import { Typo }                                 from '@spare/deco'
import { Re }                                   from '@spare/deco/target/Joins.js'
import { DA, SP }                               from '@texting/enum-chars'
import { splitCamel, splitLiteral, splitSnake } from '@texting/splitter'

const Splitter = delim => v => String.prototype.split.call(v, delim)

export function typoString(vct = splitLiteral, str, th, id, sr) {
  const ve = vct(str)
  const ts = this.flatVector(ve)
  return Re.string(ts, '', th, id, sr)
}

export const decoCamel = (text, { delim = '', presets, effects } = {}) => {
  const typo = new Typo(p)
  typo.vct = splitCamel
  return typoString.call(new Typo(p), str, th, id, sr)
}

export const decoSnake = (text, { delim = DA, presets, effects } = {}) => {
  const typo = new Typo(p)
  typo.vct = splitSnake
  return typoString.call(new Typo(p), str, th, id, sr)
}

export const decoPhrase = (text, { delim = SP, presets, effects } = {}) => {
  const typo = new Typo(p)
  typo.vct = Splitter(de)
  return typoString.call(new Typo(p), str, th, id, sr)
}