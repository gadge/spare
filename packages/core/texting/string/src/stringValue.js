export const stringValue = word => {
  let l = word?.length
  if (!l) return NaN
  if (l >= 4) return ((word.charCodeAt(0) & 0x7f) << 21) + ((word.charCodeAt(1) & 0x7f) << 14) + ((word.charCodeAt(2) & 0x7f) << 7) + (word.charCodeAt(3) & 0x7f)
  if (l === 3) return ((word.charCodeAt(0) & 0x7f) << 21) + (word.charCodeAt(1) & 0x7f) << 14 + ((word.charCodeAt(2) & 0x7f) << 7)
  if (l === 2) return ((word.charCodeAt(0) & 0x7f) << 21) + (word.charCodeAt(1) & 0x7f) << 14
  if (l === 1) return (word.charCodeAt(0) & 0x7f) << 21
}
