import { cosmetics as cosmeticsEntries } from '@spare/deco-entries'
import { liner }                         from '@spare/liner'

export const cosmetics = function (o) {
  if (!o) return String(o)
  const entriesOptions = Object.assign({}, this, { discrete: true, bracket: false })
  const lines = cosmeticsEntries.call(entriesOptions, Object.entries(o))
  return liner(lines, this)
}
