import { oneself }       from '@ject/oneself'
import { fluoEntries }   from '@palett/fluo-entries'
import { Br }            from '@spare/bracket'
import { entriesMargin } from '@spare/entries-margin'
import { entriesPadder } from '@spare/entries-padder'
import { liner }         from '@spare/liner'

const LF = /\n/
const fluo = fluoEntries.bind({ colorant: false, mutate: true })

export const cosmetics = function (entries = []) {
  const config = this
  if (!entries?.length) return liner([], config)
  let { ansi, dash, delim, bracket } = config
  bracket = Br(bracket) ?? oneself
  entries = entriesMargin(entries, config) // use: head, tail, keyRead, read
  if (LF.test(delim)) entries = entriesPadder(entries, { ansi: config.presets ?? ansi })
  if (config.presets) entries = fluo(entries, config) // use: presets, effects
  return liner(
    entries.map(([k, v]) => bracket(k + dash + v.trimRight())),
    config
  )
}
