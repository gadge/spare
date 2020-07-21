import { LF }    from '@spare/enum-chars'
import { SPACE } from '../resources/space'

export const foldToVector = function (sentence) {
  const { width = 80, regex = SPACE } = this ?? {}, vec = []
  let cursor, head = 0, hold = head + width
  while (cursor = regex.exec(sentence)?.index)
    if (cursor > hold) {
      vec.push(sentence.slice(head, cursor))
      head = regex.lastIndex
      hold = head + width
    }
  if (head < sentence.length) vec.push(sentence.slice(head))
  return vec
}

export const fold = function (sentence) {
  const context = this
  const delim = this?.delim ?? LF
  const vec = sentence |> foldToVector.bind(context)
  return vec.join(delim)
}

export const FoldToVector = (width, regex,) => {
  return foldToVector.bind({ width, regex })
}

export const Fold = (width, delim, regex) => {
  return fold.bind({ width, delim, regex })
}