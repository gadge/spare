import { LF } from '@spare/enum-chars'

export const CONLEN = /.{80}/g

export const foldEdg = function (sentence) {
  let {
    width = 80,
    delim = LF,
    regex = new RegExp(`.{${ width }}`, 'g')
  } = this ?? {}
  let lines = ''
  let match, pos
  while (match = regex.exec(sentence)) {
    // ({ index: match.index, lastIndex: regex.lastIndex }) |> delogger
    lines += sentence.slice(match.index, (pos = regex.lastIndex)) + delim
  }
  if (pos < sentence.length) lines += sentence.slice(pos)
  return lines
}