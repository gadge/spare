import { MUTATE_PIGMENT } from '@palett/enum-colorant-modes'
import { fluoVector }     from '@palett/fluo-vector'
import { _decoEntries }   from '@spare/deco-entries'
import { liner }        from '@texting/liner'
import { vectorMargin } from '@spare/vector-margin'

const fluo = fluoVector.bind(MUTATE_PIGMENT)

export function decoVector(vec = []) {
  const config = this
  if (config?.indexed) return _decoEntries.call(config, Object.entries(vec))
  vec = vectorMargin(vec, config) // use: head, tail, read, rule
  if (config.presets) vec = fluo(vec, config.presets) // use:  presets, effects
  return liner(vec, config)
}
