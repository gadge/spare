import { deNaTab } from '@spare/util'

export const initQueue = t => {
  const queue = []
  let hi, indent
  if (
    t &&
    (hi = (t = String(t))?.length) &&
    (indent = deNaTab(t)) < hi
  ) queue.push(t.slice(indent))
  queue.indent = indent
  return { queue }
}
