import { LF, SP } from '@spare/enum-chars'

export const SPACE = /\s+/g
export const LINEFEED = /\r?\n/

export const foldToVector = function (text) {
  const { width: wd = 80, regex = SPACE, firstLineIndent } = this ?? {}
  const lines = []
  let ms, ph, pr = 0, cu = 0, la = 0, nx = 0, th = pr + wd
  if (firstLineIndent) text = SP.repeat(firstLineIndent) + text
  while ((ms = regex.exec(text)) && ([ph] = ms)) { // VO |> says['progress'].p(pr).p(DA).br(cu + ':' + la).p(DA).br(nx).p(codes(ph)).br(/\r?\n/.test(ph)).p(DA).p(th)
    nx = ms.index
    if (nx > th) lines.push(text.slice(pr, cu)), pr = la, th = pr + wd
    if (LINEFEED.test(ph)) lines.push(text.slice(pr, nx)), pr = regex.lastIndex, th = pr + wd
    cu = nx, la = regex.lastIndex
  }
  if (text.length > th) lines.push(text.slice(pr, cu)), pr = la
  if (pr < text.length) lines.push(text.slice(pr))
  if (firstLineIndent) lines[0] = lines[0].slice(firstLineIndent)
  return lines
}

export const fold = function (text) {
  const context = this
  const delim = this?.delim ?? LF
  const lines = foldToVector.bind(context)(text)
  return lines.join(delim)
}

export const FoldToVector = ({ width, regex, firstLineIndent }) => {
  return foldToVector.bind({ width, regex, firstLineIndent })
}

export const Fold = ({ width, delim, regex, firstLineIndent }) => {
  return fold.bind({ width, delim, regex, firstLineIndent })
}