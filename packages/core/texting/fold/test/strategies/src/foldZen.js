import { DA } from '@spare/enum-chars'

export const foldZen = function (text) {
  let { width: d = 80, regex = /\s/ } = this ?? {}
  const threshold = text?.length, lines = []
  let l = 0, r = 0, line
  while ((r = l + d) < threshold) {
    while (l <= r) if (regex.test(text[--r])) { break }
    line = l < r
      ? text.slice(l, l = r + 1)
      : text.slice(l, l += d - 1) + DA
    lines.push(line)
  } // line |> parenth |> decoString |> says['line'].br(line.length)
  if (l < text.length) lines.push(text.slice(l))
  return lines
}