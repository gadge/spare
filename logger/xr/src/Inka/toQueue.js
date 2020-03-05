import { deNaTab } from '@spare/util'

export const toQueue = t => {
  let queue = [], l, d
  if (
    t &&
    (t = String(t)) &&
    (l = t.length) &&
    (d = deNaTab(t)) < l
  ) { queue.push(t.slice(d)) }
  return { indent: d, queue }
}
