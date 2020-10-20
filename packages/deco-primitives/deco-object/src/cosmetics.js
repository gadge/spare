import { cosmetics as cosmeticsEntries } from '@spare/deco-entries'
import { liner }                         from '@spare/liner'

export const cosmetics = function (o={}) {
  const entriesOptions = Object.assign({}, this, { discrete: true, bracket: undefined })
  const lines = cosmeticsEntries.call(entriesOptions, Object.entries(o))
  return liner(lines, this)
}
