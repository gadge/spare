import { clearAnsi, hasAnsi } from '@spare/charset'
import { COSP }               from '@spare/enum-chars'
import { deNaTab }            from '@spare/util'
import { nullish }            from '@typen/nullish'

export const initQueue = t => {
  let queue = [], hi, i
  if (
    t &&
    (hi = (t = String(t))?.length) &&
    (i = deNaTab(t)) < hi
  ) queue.push(t.slice(i))
  return { indent: i, queue }
}

const EDGE_BRACKET = /^[(\[{].*[)\]}]$/

export function enqueue(queue, key, items) {
  const { br, pa } = this, hi = items?.length
  if (!hi || hi === 1 && nullish(items[0])) {
    queue.push(String(key) |> br.minor)
    queue.push(pa.minor())
  } else {
    items = items.map(String).join(COSP)
    queue.push(String(key) |> br.major)
    queue.push(hasAnsi(items) && EDGE_BRACKET.test(clearAnsi(items)) ? items : pa.major(items))
  }
  return queue
}
