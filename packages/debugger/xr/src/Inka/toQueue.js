import { deNaTab } from '@spare/util'

export const toQueue = t => {
  let queue = [], l, d
  if (
    (l = (t = String(t))?.length) &&
    (d = deNaTab(t)) < l
  ) queue.push(t.slice(d))
  return { indent: d, queue }
}
