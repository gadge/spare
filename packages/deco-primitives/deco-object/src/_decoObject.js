import { _decoEntries } from '@spare/deco-entries'
import { liner }        from '@spare/liner'

const LOCAL_OPTION = { discrete: true, bracket: undefined }

export const _decoObject = function (o = {}) {
  const entriesOptions = Object.assign({}, this, LOCAL_OPTION)
  const lines = _decoEntries.call(entriesOptions, Object.entries(o))
  return liner(lines, this)
}
