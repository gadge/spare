import { fluoVector }                    from '@palett/fluo-vector'
import { cosmetics as cosmeticsEntries } from '@spare/deco-entries'
import { liner }                         from '@spare/liner'
import { vectorMargin }                  from '@spare/vector-margin'

const fluo = fluoVector.bind({ colorant: false, mutate: true })

export function cosmetics(vec = []) {
  const config = this
  if (config?.indexed) return cosmeticsEntries.call(config, Object.entries(vec))
  vec = vectorMargin(vec, config) // use: head, tail, read, rule
  if (config.presets) vec = fluo(vec, config) // use:  presets, effects
  return liner(vec, config)
}
