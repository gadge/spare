import { clearAnsi, hasAnsi } from '@spare/charset'
import { COSP }               from '@spare/enum-chars'
import { nullish }            from '@typen/nullish'


const EDGE_BRACKET = /^[(\[{].*[)\]}]$/


export const enqueue = function (key, ...items) {
  const { queue, conf } = this
  const { bracket, parenth } = conf
  if (items.every(nullish)) {
    // queue.push(String(key) |> bracket.minor)
    // queue.push(parenth.minor())
  } else {
    items = items.map(String).join(COSP)
    queue.push(bracket.major(String(key)))
    queue.push(hasAnsi(items) && EDGE_BRACKET.test(clearAnsi(items)) ? items : parenth.major(items))
  }
  return this
}