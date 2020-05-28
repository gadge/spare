import { fluoVec }                       from '@palett/fluo-vector'
import { cosmetics as cosmeticsEntries } from '@spare/deco-entries'
import { ELLIP }                         from '@spare/enum-chars'
import { liner }                         from '@spare/liner'
import { vettro }                        from '@spare/vettro'
import { mutazip }                       from '@vect/vector-zipper'

export function cosmetics (vec) {
  const config = this
  if (config?.indexed) return cosmeticsEntries.call(config, Object.entries(vec))
  if (!vec?.length) return String(vec)
  const { head, tail, colors, read } = config
  let { raw, text } = vettro(vec, { head, tail, read, hr: ELLIP })
  if (colors) {
    const dyes = fluoVec.call({ colorant: true, mutate: true }, raw, colors)
    text = mutazip(text, dyes, (x, dye) => x |> dye)
  }
  return liner(text, config)
}
