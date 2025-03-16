import { samplesToTable }             from '@analys/convert'
import { samplesSelect }              from '@analys/samples-select'
import { BESQUE, ENSIGN, SUBTLE }     from '@palett/presets'
import { Fold, parsePresm, tabs }     from '@spare/node'
import { serialMatrix, serialVector } from '@spare/serial'
import { BRACE }                      from '@texting/enum-brackets'
import { COLF, COSP, LF, RTSP }       from '@texting/enum-chars'
import { COLUMNWISE }                 from '@vect/enum-matrix-directions'
import { width }                      from '@vect/matrix-index'
import { slice }                      from '@vect/object-init'

const PRES = {
  str: SUBTLE,
  neg: ENSIGN,
  pos: BESQUE,
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


export function decoSamples(samples, conf) {
  const prev = conf ?? this ?? {}
  const valConf = {}
  valConf.pres = parsePresm(prev?.pres ?? prev, PRES)
  // valConf.fill = prev.fill ?? SP
  // valConf.ansi = prev.ansi ?? true
  const fields = prev.fields ?? null
  const indexed = prev.indexed ?? false
  const indent = prev.indent ?? 0
  const direct = prev.direct ?? COLUMNWISE
  const keyConf = prev.key ? slice(valConf) : prev
  if (prev.key) keyConf.pres = parsePresm(prev.key)
  const vpm = parsePresm(prev?.pres ?? prev, PRES)
  const kpm = prev.key ? parsePresm(prev.key) : vpm
  if (fields) { samples = samplesSelect(samples, fields) }
  const { head, rows } = samplesToTable(samples)
  const headTexts = serialVector.call(kpm, head)
  const rowsTexts = serialMatrix.call(vpm, rows, direct), count = rowsTexts?.length ?? 0, wd = width(rows)
  if (count <= wd) return '[{ ' + Fold.chain(rowsTexts, COSP) + ' }]'
  return '[' + LF + Fold.reshape(rowsTexts, (x, j) => headTexts[j] + RTSP + x, COSP, COLF, BRACE, wd, indent + 2) + LF + tabs(indent) + ']'
}
