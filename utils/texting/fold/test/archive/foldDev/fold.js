import { LF }    from '@spare/enum-chars'
import { SPACE } from '../../../resources/space'

export const foldToVector = function (text) {
  const { width = 80, regex = SPACE, firstLineIndent } = this ?? {}
  const lines = []
  let le, ls = 0, th = ls + width
  while (le = regex.exec(text)?.index)
    if (le > th) {
      lines.push(text.slice(ls, le))
      ls = regex.lastIndex
      th = ls + width
    }
  if (ls < text.length) lines.push(text.slice(ls))
  return lines
}

export const fold = function (sentence) {
  const context = this
  const delim = this?.delim ?? LF
  const vec = foldToVector.bind(context)(sentence)
  return vec.join(delim)
}

export const FoldToVector = ({ width, regex, firstLineIndent }) => {
  return foldToVector.bind({ width, regex, firstLineIndent })
}

export const Fold = ({ width, delim, regex, firstLineIndent }) => {
  return fold.bind({ width, delim, regex, firstLineIndent })
}