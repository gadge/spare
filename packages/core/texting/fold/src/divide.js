import { DA } from '@spare/enum-chars'

export const divide = function (text) {
  const { width = 80, dash = DA } = this ?? {}
  const length = text?.length, vec = []
  if (!length) return vec
  const hold = length - width
  let l = 0
  while (l <= hold) vec.push(text.slice(l, l += width) + dash)
  vec.push(text.slice(l))
  return vec
}