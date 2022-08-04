import { oneself }        from '@ject/oneself'
import { MUTATE_PIGMENT } from '@palett/enum-colorant-modes'
import { fluoEntries }    from '@palett/fluo-entries'
import { Br }             from '@texting/bracket'
import { entriesMargin }  from '@spare/entries-margin'
import { entriesPadder }  from '@spare/entries-padder'
import { liner }          from '@texting/liner'

const LF = /\n/
const fluo = fluoEntries.bind(MUTATE_PIGMENT)

export const decoEntries = function (entries = []) {
  const config = this
  if (!entries?.length) return liner([], config)
  const { ansi, dash, delim, bracket } = config
  const br = Br(bracket) ?? oneself
  entries = entriesMargin(entries, config) // use: head, tail, keyRead, read
  if (LF.test(delim)) entries = entriesPadder(entries, { ansi: config.presets ?? ansi })
  if (config.presets) entries = fluo(entries, config.presets) // use: presets, effects
  return liner(entries.map(([k, v]) => br(k + dash + v.trimEnd())), config)
}
