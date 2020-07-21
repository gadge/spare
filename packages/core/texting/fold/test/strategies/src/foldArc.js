import { LF }    from '@spare/enum-chars'
import { SPACE } from '../../../resources/space'

export const foldArc = function (sentence) {
  const { width = 80, delim = LF, regex = SPACE } = this ?? {}, vec = []
  let match, cursor, head = 0, hold = head + width
  while (match = regex.exec(sentence)) if ((cursor = match.index) > hold) {
    vec.push(sentence.slice(head, cursor))
    head = regex.lastIndex
    hold = head + width
  }
  if (head < sentence.length) vec.push(sentence.slice(head))
  return vec.join(delim)
}