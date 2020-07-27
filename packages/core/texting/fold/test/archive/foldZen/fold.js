import { DA, SP, VO } from '@spare/enum-chars'
import { deco }       from '@spare/logger'

const { logger } = require('@spare/logger')

export const foldToVector = function (text) {
  let { width: wd = 80, regex = /\s/m, firstLineIndent: fli = 0 } = this ?? {}
  const final = text?.length, lines = []
  if (!final) return lines
  if (!wd) return lines.push(text), lines
  if (fli) fli >= wd ? lines.push(VO) : (text = SP.repeat(fli) + text)
  let ls = 0, le = 0, line // i: line start, le: line end
  while ((le = ls + wd) < final) {
    while (le >= ls) if (regex.test(text[--le])) { break }
    line = le > ls
      ? text.slice(ls, ls = le + 1)
      : text.slice(ls, ls += wd - 1) + DA // the case when lengths of the current word exceeds the 'width'
    lines.push(line)
  }
  if (ls < text.length) lines.push(text.slice(ls))
  if (fli) lines[0] = lines[0].slice(fli)
  lines |> deco |> logger
  return lines
}

export const fold = function (text) {
  const context = this
  const delim = this?.delim ?? ''
  const vec = text |> foldToVector.bind(context)
  return vec.join(delim)
}

export const FoldToVector = ({ width, regex, firstLineIndent }) => {
  return foldToVector.bind({ width, regex, firstLineIndent })
}

export const Fold = ({ width, delim, regex, firstLineIndent }) => {
  return fold.bind({ width, delim, regex, firstLineIndent })
}