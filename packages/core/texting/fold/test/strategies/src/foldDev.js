import { LF }    from '@spare/enum-chars'
import { SPACE } from '../../../resources/space'

export const foldDev = function (sentence) {
  const { width = 80, delim = LF, regex = SPACE } = this ?? {}
  let lines = ''
  let match, cursor, head = 0, hold = head + width
  while (match = regex.exec(sentence)) if ((cursor = match.index) > hold) {
    lines += sentence.slice(head, cursor) + delim
    head = regex.lastIndex
    hold = head + width
  }
  if (head < sentence.length) lines += sentence.slice(head)
  return lines
}