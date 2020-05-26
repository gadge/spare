import { fluoVec }                       from '@palett/fluo-vector'
import { cosmetics as cosmeticsEntries } from '@spare/deco-entries'
import { ELLIP }                         from '@spare/enum-chars'
import { liner }                         from '@spare/liner'
import { Qt }                            from '@spare/quote'
import { vettro }                        from '@spare/vettro'

export function cosmetics (vec) {
  if (this?.indexed) return cosmeticsEntries.call(this, Object.entries(vec))
  if (!vec) return String(vec)
  const { head, tail, preset, stringPreset, read, quote } = this
  let { raw, text } = vettro(vec, { head, tail, read: Qt(read, quote), hr: ELLIP })
  // below is unfinished May 22 2020
  if (preset) fluoVec.call({ mutate: true }, text, { values: raw, preset, stringPreset, mutate: true })
  return liner(text, this)
}
