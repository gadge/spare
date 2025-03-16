import { splitLiteral } from '@texting/splitter'
import { vector }       from './vector.js'

export function string(str) {
  const arr = splitLiteral(str)
  return vector.call(this, arr)
}