import { deNaTab, totx } from '@spare/util'
import { bracketMain, parenthesis } from './theme'

export const preset = (label, ...items) => {
  let stream = [], indent, len
  if (
    label &&
    (label = String(label)) &&
    (len = label.length) &&
    (indent = label |> deNaTab) < len
  ) {
    stream.push(label.slice(indent) |> bracketMain)
  }
  if (items.length) {
    stream.push(items.map(totx).join(',') |> parenthesis)
  }
  return { indent, stream }
}
