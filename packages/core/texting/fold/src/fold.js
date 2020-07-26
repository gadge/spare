import { DA, LF, SP, VO } from '@spare/enum-chars'

export const foldToVector = function (text) {
  let { width: wd = 80, regex = /\s/, firstLineIndent: fli = 0 } = this ?? {}
  const end = text?.length, lines = []
  if (!end) return lines
  if (!wd) return lines.push(text), lines
  if (fli) fli >= wd ? lines.push(VO) : (text = SP.repeat(fli) + text)
  let i = 0, th = 0, line // i: index, th: threshold
  while ((th = i + wd) < end) {
    while (i <= th) if (regex.test(text[--th])) { break }
    line = i < th
      ? text.slice(i, i = th + 1)
      : text.slice(i, i += wd - 1) + DA // the case when lengths of the current word exceeds the 'width'
    lines.push(line)
  }
  if (i < text.length) lines.push(text.slice(i))
  if (fli) lines[0] = lines[0].slice(fli)
  return lines
}

export const fold = function (text) {
  const context = this
  const delim = this?.delim ?? LF
  const vec = text |> foldToVector.bind(context)
  return vec.join(delim)
}

export const FoldToVector = ({ width, regex, firstLineIndent }) => {
  return foldToVector.bind({ width, regex, firstLineIndent })
}

export const Fold = ({ width, delim, regex, firstLineIndent }) => {
  return fold.bind({ width, delim, regex, firstLineIndent })
}