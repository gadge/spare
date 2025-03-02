import { samplesToTable }           from '@analys/convert'
import { samplesSelect }            from '@analys/samples-select'
import { BESQUE, ENSIGN, SUBTLE }   from '@palett/presets'
import { Concat, Node, tabs }       from '@spare/node'
import { BRACE }                    from '@texting/enum-brackets'
import { COLF, COSP, LF, RTSP, SP } from '@texting/enum-chars'
import { width }                    from '@vect/matrix-index'

const PRES = {
  str: SUBTLE,
  neg: ENSIGN,
  pos: BESQUE
}


// /**
//  * @param {Opt} p
//  * @returns {function}
//  */
// export const DecoSamples = (p = {}) => {
//   p.pres = p.pres ?? PRES
//   p.fill = p.fill ?? SP
//   p.ansi = p.ansi ?? true
//   return table.bind(new TableNode(p))
// }


export function decoSamples(samples, p = {}, keyPres, valuePres) {
  p.pres = p.pres ?? PRES
  p.fill = p.fill ?? SP
  p.ansi = p.ansi ?? true
  const keyNode = new Node(p, keyPres ?? p.keyPres ?? p.pres)
  const valueNode = new Node(p, valuePres ?? p.ValuePres ?? p.pres)
  let { fields, indexed, indent, direct } = p
  if (fields) { samples = samplesSelect(samples, fields) }
  const { head, rows } = samplesToTable(samples)
  const headTexts = keyNode.flatVector(head)
  const rowsTexts = valueNode.flatMatrix(rows, direct), count = rowsTexts?.length ?? 0, wd = width(rows)
  if (count <= wd) return '[{ ' + Concat.chain(rowsTexts, COSP) + ' }]'
  return '[' + LF + Concat.reshape(rowsTexts, (x, j) => headTexts[j] + RTSP + x, COSP, COLF, BRACE, wd, indent + 2) + LF + tabs(indent) + ']'
}
