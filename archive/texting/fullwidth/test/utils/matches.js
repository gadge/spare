import { DecoVector } from '@spare/logger'

const decoVector = DecoVector({ indexed: false, delim: ', ', bracket: true })
/**
 *
 * @param body
 * @param {RegExp} regex
 */
export const matches = (body, regex) => {
  const samples = []
  let ms, wd, group
  while ((ms = regex.exec(body)) && ([wd, ...group] = ms)) {
    samples.push({
      start: ms.index,
      diff: wd?.length,
      end: regex.lastIndex,
      match: wd,
      group: decoVector(group)
    })
  }
  return samples
}

export const fracture = (body, regex) => {
  let ms, prev = 0, curr = 0, block, match, group
  const samples = []
  while ((ms = regex.exec(body)) && ([match, ...group] = ms)) {
    curr = ms.index
    block = body.slice(prev, curr)
    samples.push({ prev, curr, block, match, group: decoVector(group) })
    prev = regex.lastIndex
  }
  return samples
}
