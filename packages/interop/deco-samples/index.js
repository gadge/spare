import { samplesToTable }           from '@analys/convert'
import { samplesSelect }            from '@analys/samples-select'
import { BESQUE, ENSIGN, SUBTLE }   from '@palett/presets'
import { Fold, Node, tabs }         from '@spare/node'
import { BRACE }                    from '@texting/enum-brackets'
import { COLF, COSP, LF, RTSP, SP } from '@texting/enum-chars'
import { COLUMNWISE }               from '@vect/enum-matrix-directions'
import { width }                    from '@vect/matrix-index'
import { slice }                    from '@vect/object-init'

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


export function decoSamples(samples, conf) {
  const vct = {}
  vct.pres = conf?.pres ?? this?.pres ?? PRES
  vct.fill = conf?.fill ?? this?.fill ?? SP
  vct.ansi = conf?.ansi ?? this?.ansi ?? true
  const fields = conf?.fields ?? this?.fields ?? null
  const indexed = conf?.indexed ?? this?.indexed ?? false
  const indent = conf?.indent ?? this?.indent ?? 0
  const direct = conf?.direct ?? this?.direct ?? COLUMNWISE
  const kct = conf.key ? slice(conf) : conf
  if (conf.key) kct.pres = conf.key
  const vn = new Node(vct)
  const kn = new Node(vct)
  if (fields) { samples = samplesSelect(samples, fields) }
  const { head, rows } = samplesToTable(samples)
  const headTexts = kn.flatVector(head)
  const rowsTexts = vn.flatMatrix(rows, direct), count = rowsTexts?.length ?? 0, wd = width(rows)
  if (count <= wd) return '[{ ' + Fold.chain(rowsTexts, COSP) + ' }]'
  return '[' + LF + Fold.reshape(rowsTexts, (x, j) => headTexts[j] + RTSP + x, COSP, COLF, BRACE, wd, indent + 2) + LF + tabs(indent) + ']'
}
