import { DA, LF } from '@spare/enum-chars'
import { divide } from '../../../src/divide'

const SPACE = /\s+/g
const NXL = /[\r\n\f]/

export const foldToVector = function (text) {
  const
    context = this ?? {},
    { width: w = 80, regex = SPACE, dash = DA } = context,
    div = divide.bind(context),
    vec = []
  function pusher(line) { line.length > w ? vec.push(...div(line)) : vec.push(line) }
  let match, blank = '', r = 0, d = 0, c = 0, l = 0, hold = l + w
  while (match = regex.exec(text)) {
    if ((c = match.index) > hold || NXL.test(blank)) {
      pusher(text.slice(l, r))
      hold = (l = (regex.lastIndex = r + d)) + w
    }
    r = match.index, ([blank] = match), d = blank.length
  }
  if (l < text.length) pusher(text.slice(l))
  return vec
}

// text = text.replace(/(?<=\w)[.,;:?](?=\w)/g, punc => punc + LF)

// (line = text.slice(l, r)) |> parenth|> fluoString
//   |> says['line']
//   .br(l).p(DA).br(line.length).p(DA).br(r + ':' + (r + d))
//   .p('|').br(hold).p(c).p('->').br(r + d + w)
//   .p('|').br(c > hold ? 'A' : NXL.test(blank) ? 'B' : '_')
//   .p('|').br([...blank].map(c => c.charCodeAt(0)) |> decoFlat).br(NXL.test(blank))

export const foldArc = function (text) {
  const context = this
  const delim = this?.delim ?? LF
  const vec = text |> foldToVector.bind(context)
  return vec.join(delim)
}

export const FoldToVector = ({ width, regex, dash }) => {
  return foldToVector.bind({ width, regex, dash })
}

export const Fold = ({ width, delim, regex, dash }) => {
  return foldArc.bind({ width, delim, regex, dash })
}