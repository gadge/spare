import { cosmetics as cosmeticsEntries } from '@spare/deco-entries'
import { liner }                         from '@spare/liner'

const LOCAL_OPTION = { discrete: true, bracket: undefined }

export const cosmetics = function (o = {}) {
  const entriesOptions = Object.assign({}, this, LOCAL_OPTION)
  const lines = cosmeticsEntries.call(entriesOptions, Object.entries(o))
  return liner(lines, this)
}
